import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { SKILL_CATEGORIES } from "@/lib/skills";
import { REGIONS } from "@/lib/regions";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, Check, Sparkles, MapPin, Target, X } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, updateProfile, setUserSkills } = useProfile();
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);

  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [skillInput, setSkillInput] = useState("");

  const [regionId, setRegionId] = useState(profile?.preferred_region ?? "us");
  const [country, setCountry] = useState(profile?.country ?? "");
  const [city, setCity] = useState(profile?.city ?? "");

  const [roleQuery, setRoleQuery] = useState("");
  const [roles, setRoles] = useState<Set<string>>(new Set(profile?.target_roles ?? []));

  const region = REGIONS.find(r => r.id === regionId) ?? REGIONS[0];

  const allRoles = Array.from(new Set(jobs.map(j => titleCase(j.title)))).sort();
  const filteredRoles = roleQuery
    ? allRoles.filter(r => r.toLowerCase().includes(roleQuery.toLowerCase())).slice(0, 8)
    : [];

  const togglePick = (skill: string) => {
    setPicked(prev => {
      const n = new Set(prev);
      n.has(skill) ? n.delete(skill) : n.add(skill);
      return n;
    });
  };

  const addCustomSkill = () => {
    const s = skillInput.trim();
    if (s.length === 0 || s.length > 60) return;
    setPicked(prev => new Set(prev).add(s));
    setSkillInput("");
  };

  const toggleRole = (role: string) => {
    setRoles(prev => {
      const n = new Set(prev);
      n.has(role) ? n.delete(role) : n.add(role);
      return n;
    });
    setRoleQuery("");
  };

  const finish = async () => {
    if (!user) return;
    setSaving(true);
    await Promise.all([
      setUserSkills(Array.from(picked)),
      updateProfile({
        target_roles: Array.from(roles),
        country: country || region.label,
        city: city || null,
        preferred_region: regionId.toUpperCase(),
        onboarding_complete: true,
      }),
    ]);
    setSaving(false);
    toast({ title: "All set", description: "Your dashboard is ready." });
    navigate("/");
  };

  const steps = ["Skills", "Roles", "Location"];

  return (
    <div className="min-h-screen p-4 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 animate-fade-in">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                i === step ? "gradient-neon text-primary-foreground shadow-glow-sm" :
                i < step ? "bg-primary/15 text-primary" : "bg-secondary/60 text-muted-foreground"
              }`}>
                {i < step ? <Check className="w-3 h-3" /> : <span className="font-mono">{i + 1}</span>}
                {label}
              </div>
              {i < steps.length - 1 && <div className="w-8 h-px bg-border mx-1" />}
            </div>
          ))}
        </div>

        <Card className="glass-strong border-border/50 shadow-elevated">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary mb-1">
              {step === 0 && <Sparkles className="w-4 h-4" />}
              {step === 1 && <Target className="w-4 h-4" />}
              {step === 2 && <MapPin className="w-4 h-4" />}
              <span className="text-xs font-mono uppercase tracking-wider">Step {step + 1} of 3</span>
            </div>
            <CardTitle className="text-2xl">
              {step === 0 && "What technical skills do you have?"}
              {step === 1 && "Which roles are you targeting?"}
              {step === 2 && "Where do you want to work?"}
            </CardTitle>
            <CardDescription>
              {step === 0 && "Pick everything you're comfortable with. We'll use these to match jobs and find your skill gaps."}
              {step === 1 && "Optional — pick a few job titles you're aiming for. Helps us prioritize matches."}
              {step === 2 && "Sets your default region, currency, and location filter."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 0 && (
              <div className="space-y-5">
                <div className="flex gap-2">
                  <Input
                    value={skillInput}
                    onChange={e => setSkillInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addCustomSkill())}
                    placeholder="Add a custom skill and press Enter"
                    className="bg-secondary/40 h-10"
                    maxLength={60}
                  />
                  <Button type="button" onClick={addCustomSkill} variant="secondary" className="shrink-0">Add</Button>
                </div>

                {picked.size > 0 && (
                  <div className="p-3 rounded-lg glass border-neon">
                    <div className="text-xs text-muted-foreground mb-2 font-mono">SELECTED · {picked.size}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {Array.from(picked).map(s => (
                        <Badge key={s} className="gradient-neon text-primary-foreground border-0 cursor-pointer" onClick={() => togglePick(s)}>
                          {s} <X className="w-3 h-3 ml-1" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
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
                              onClick={() => togglePick(s)}
                              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                                active
                                  ? "gradient-neon text-primary-foreground border-transparent shadow-glow-sm"
                                  : "border-border/60 text-foreground/80 hover:border-primary/40 hover:text-primary"
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    value={roleQuery}
                    onChange={e => setRoleQuery(e.target.value)}
                    placeholder="Search roles e.g. Data Scientist, Frontend Engineer"
                    className="bg-secondary/40 h-10"
                  />
                  {filteredRoles.length > 0 && (
                    <div className="absolute z-20 w-full mt-1 glass-strong rounded-lg border border-border/50 shadow-elevated overflow-hidden">
                      {filteredRoles.map(r => (
                        <button key={r} type="button" onClick={() => toggleRole(r)} className="w-full text-left px-3 py-2 text-sm hover:bg-primary/10 transition-colors">
                          {r}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {roles.size > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {Array.from(roles).map(r => (
                      <Badge key={r} className="gradient-neon text-primary-foreground border-0 cursor-pointer" onClick={() => toggleRole(r)}>
                        {r} <X className="w-3 h-3 ml-1" />
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-6">No target roles yet — feel free to skip this step.</p>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Region & Currency</Label>
                  <Select value={regionId} onValueChange={setRegionId}>
                    <SelectTrigger className="bg-secondary/40 h-11"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {REGIONS.map(r => (
                        <SelectItem key={r.id} value={r.id}>{r.label} · {r.currency}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Input value={country} onChange={e => setCountry(e.target.value)} placeholder={region.label} className="bg-secondary/40 h-11" maxLength={80} />
                  </div>
                  <div className="space-y-2">
                    <Label>City (optional)</Label>
                    <Input value={city} onChange={e => setCity(e.target.value)} placeholder={region.locations[0]} className="bg-secondary/40 h-11" maxLength={80} />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button type="button" variant="ghost" disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))}>
                <ChevronLeft className="w-4 h-4 mr-1" /> Back
              </Button>
              {step < 2 ? (
                <Button type="button" onClick={() => setStep(s => s + 1)} className="gradient-neon text-primary-foreground shadow-glow-sm">
                  Continue <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button type="button" onClick={finish} disabled={saving} className="gradient-neon text-primary-foreground shadow-glow">
                  {saving ? "Saving..." : "Enter Dashboard"} <Check className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

function titleCase(s: string) {
  return s.toLowerCase().split(" ").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ");
}

export default Onboarding;
