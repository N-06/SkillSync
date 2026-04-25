import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";

export default function ProtectedRoute({ children, requireOnboarding = true }: { children: React.ReactNode; requireOnboarding?: boolean }) {
  const { user, loading } = useAuth();
  const { profile, loading: profileLoading } = useProfile();

  if (loading) return <Loader />;
  if (!user) return <Navigate to="/auth" replace />;
  if (requireOnboarding) {
    if (profileLoading) return <Loader />;
    if (profile && !profile.onboarding_complete) return <Navigate to="/onboarding" replace />;
  }
  return <>{children}</>;
}

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
    </div>
  );
}
