import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  target_roles: string[];
  country: string | null;
  city: string | null;
  preferred_region: string;
  onboarding_complete: boolean;
}

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [savedJobIds, setSavedJobIds] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setSkills([]);
      setSavedJobIds(new Set());
      setLoading(false);
      return;
    }
    setLoading(true);
    const [{ data: p }, { data: s }, { data: sj }] = await Promise.all([
      supabase.from("profiles").select("*").eq("user_id", user.id).maybeSingle(),
      supabase.from("user_skills").select("skill").eq("user_id", user.id),
      supabase.from("saved_jobs").select("job_id").eq("user_id", user.id),
    ]);
    setProfile(p as Profile | null);
    setSkills((s ?? []).map((r: { skill: string }) => r.skill));
    setSavedJobIds(new Set((sj ?? []).map((r: { job_id: number }) => r.job_id)));
    setLoading(false);
  }, [user]);

  useEffect(() => { refresh(); }, [refresh]);

  const updateProfile = async (patch: Partial<Profile>) => {
    if (!user) return;
    await supabase.from("profiles").update(patch).eq("user_id", user.id);
    await refresh();
  };

  const setUserSkills = async (newSkills: string[]) => {
    if (!user) return;
    await supabase.from("user_skills").delete().eq("user_id", user.id);
    if (newSkills.length > 0) {
      await supabase.from("user_skills").insert(
        newSkills.map(skill => ({ user_id: user.id, skill }))
      );
    }
    await refresh();
  };

  const toggleSavedJob = async (jobId: number) => {
    if (!user) return;
    if (savedJobIds.has(jobId)) {
      await supabase.from("saved_jobs").delete().eq("user_id", user.id).eq("job_id", jobId);
    } else {
      await supabase.from("saved_jobs").insert({ user_id: user.id, job_id: jobId });
    }
    await refresh();
  };

  return {
    profile, skills, savedJobIds, loading,
    refresh, updateProfile, setUserSkills, toggleSavedJob,
  };
}
