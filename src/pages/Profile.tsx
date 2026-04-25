import { useEffect, useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";
import { SKILL_CATEGORIES } from "@/lib/skills";
import { REGIONS } from "@/lib/regions";
import AppShell from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { User, Code2, Save, X } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();
  const { profile, skills, updateProfile, setUserSkills } = useProfile();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [regionId, setRegionId] = useState("us");
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [skillInput, setSkillInput] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name ?? "");
      setCountry(profile.country ?? "");
      setCity(profile.city ?? "");
      setRegionId((profile.preferred_region ?? "US").toLowerCase());
    }
  }, [profile]);

  useEffect(() => { setPicked(new Set(skills)); }, [skills]);

  const togglePick = (s: string) => {
    setPicked(prev => {
      const n = new Set(prev);
      n.has(s) ? n.delete(s) : n.add(s);
      return n;
    });
  };

  // Removing an already-saved skill should persist immediately so it disappears
  // everywhere (Dashboard "Your skills", matching, etc.) without needing Save.
  const removeSkillImmediate = async (s: string) => {
    const next = new Set(picked);
    next.delete(s);
    setPicked(next);
    await setUserSkills(Array.from(next));
    toast({ title: "Skill removed", description: `“${s}” removed from your profile.` });
  };

  const addCustomSkill = () => {
    const s = skillInput.trim();
    if (!s || s.length > 60) return;
    setPicked(prev => new Set(prev).add(s));
    setSkillInput("");
  };

  const handleSave = async () => {
    setSaving(true);
    await Promise.all([
      updateProfile({
        display_name: displayName || null,
        country: country || null,
        city: city || null,
        preferred_region: regionId.toUpperCase(),
        target_roles: [],
      }),
      setUserSkills(Array.from(picked)),
    ]);
    setSaving(false);
    toast({ title: "Profile saved", description: "Your changes are live." });
  };

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in max-w-4xl">
        <div>
          <div className="flex items-center gap-2 text-primary mb-1">
            <User className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-wider">Your profile</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Edit your profile</h1>
          <p className="text-sm text-muted-foreground mt-1">{user?.email}</p>
        </div>

        <Card className="glass-card border-border/40">
          <CardHeader>
            <CardTitle className="text-base">Basic info</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2 sm:col-span-2">
              <Label>Display name</Label>
              <Input value={displayName} onChange={e => setDisplayName(e.target.value)} maxLength={80} className="bg-secondary/40 h-11" />
            </div>
            <div className="space-y-2">
              <Label>Region & currency</Label>
              <Select value={regionId} onValueChange={setRegionId}>
                <SelectTrigger className="bg-secondary/40 h-11"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {REGIONS.map(r => <SelectItem key={r.id} value={r.id}>{r.label} · {r.currency}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Country</Label>
                <Input value={country} onChange={e => setCountry(e.target.value)} maxLength={80} className="bg-secondary/40 h-11" />
              </div>
              <div className="space-y-2">
                <Label>City</Label>
                <Input value={city} onChange={e => setCity(e.target.value)} maxLength={80} className="bg-secondary/40 h-11" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/40">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2"><Code2 className="w-4 h-4 text-primary" /> Technical skills</CardTitle>
            <CardDescription>{picked.size} selected · used for matching and skill-gap analysis.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input value={skillInput} onChange={e => setSkillInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addCustomSkill())} placeholder="Add a custom skill" maxLength={60} className="bg-secondary/40 h-10" />
              <Button type="button" onClick={addCustomSkill} variant="secondary">Add</Button>
            </div>
            {picked.size > 0 && (
              <div className="flex flex-wrap gap-1.5 p-3 rounded-lg glass border-neon">
                {Array.from(picked).map(s => (
                  <Badge key={s} className="gradient-neon text-primary-foreground border-0 cursor-pointer" onClick={() => removeSkillImmediate(s)}>
                    {s} <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}
            <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2">
              {Object.entries(SKILL_CATEGORIES).map(([cat, list]) => (
                <div key={cat}>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{cat}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {list.map(s => {
                      const active = picked.has(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => active ? removeSkillImmediate(s) : togglePick(s)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                            active ? "gradient-neon text-primary-foreground border-transparent shadow-glow-sm" : "border-border/60 hover:border-primary/40 hover:text-primary"
                          }`}
                        >{s}</button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving} className="gradient-neon text-primary-foreground shadow-glow">
            <Save className="w-4 h-4 mr-2" /> {saving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
