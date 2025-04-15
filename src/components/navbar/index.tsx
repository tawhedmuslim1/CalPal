import { AuthModal } from "./components/auth-modal";
import { Logo } from "./components/logo";
import { useAuth } from "@/hooks/use-auth";
import { UserButton } from "./components/user-button";

export async function Navbar() {
  const { isLoggedIn } = await useAuth();

  return (
    <div className="flex py-5 items-center justify-between">
      <span className="flex items-center gap-2">
        <Logo />1
        <h4 className="text-xl font-bold">
          Cal<span className="text-emerald-500">Pal</span>
        </h4>
      </span>

      {isLoggedIn ? <UserButton /> : <AuthModal />}
    </div>
  );
}
