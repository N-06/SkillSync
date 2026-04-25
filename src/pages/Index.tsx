import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import Dashboard from "@/pages/Dashboard";

const Index = () => {
  const { user, loading: authLoading } = useAuth();
  const { profile, loading: profileLoading } = useProfile();

  if (authLoading) return <FullPageLoader />;
  if (!user) return <Navigate to="/auth" replace />;
  if (profileLoading) return <FullPageLoader />;
  if (profile && !profile.onboarding_complete) return <Navigate to="/onboarding" replace />;

  return <Dashboard />;
};

function FullPageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
    </div>
  );
}

export default Index;
