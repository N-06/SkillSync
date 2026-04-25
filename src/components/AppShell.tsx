import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";
import { Briefcase, LayoutDashboard, Bookmark, User as UserIcon, LogOut } from "lucide-react";

export default function AppShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const { profile, savedJobIds } = useProfile();

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <div className="min-h-screen relative">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] gradient-glow-bg" />
      </div>

      <header className="sticky top-0 z-30 glass-strong border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <NavLink to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg gradient-neon shadow-glow-sm flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold tracking-tight">SkillSync</span>
            </NavLink>
            <nav className="hidden md:flex items-center gap-1">
              <NavItem to="/" icon={<LayoutDashboard className="w-3.5 h-3.5" />}>Dashboard</NavItem>
              <NavItem to="/saved" icon={<Bookmark className="w-3.5 h-3.5" />}>
                Saved {savedJobIds.size > 0 && <span className="ml-1 text-[10px] font-mono text-primary">{savedJobIds.size}</span>}
              </NavItem>
              <NavItem to="/profile" icon={<UserIcon className="w-3.5 h-3.5" />}>Profile</NavItem>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {profile?.display_name ?? user?.email?.split("@")[0]}
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="h-8 px-2.5 text-xs text-muted-foreground hover:text-foreground">
              <LogOut className="w-3.5 h-3.5 mr-1" /> Sign Out
            </Button>
          </div>
        </div>
        {/* Mobile nav */}
        <nav className="md:hidden flex items-center gap-1 px-4 pb-2 overflow-x-auto">
          <NavItem to="/" icon={<LayoutDashboard className="w-3.5 h-3.5" />}>Dashboard</NavItem>
          <NavItem to="/saved" icon={<Bookmark className="w-3.5 h-3.5" />}>Saved</NavItem>
          <NavItem to="/profile" icon={<UserIcon className="w-3.5 h-3.5" />}>Profile</NavItem>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        {children}
      </main>
    </div>
  );
}

function NavItem({ to, icon, children }: { to: string; icon: ReactNode; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
          isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        }`
      }
    >
      {icon} {children}
    </NavLink>
  );
}
