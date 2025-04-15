import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
export const useAuth = async () => {
  const session = await auth();

  return {
    session,
    isLoggedIn: !!session?.user,
    redirectToDashboard: () => {
      redirect("/dashboard");
    },
    redirectToHome: () => {
      redirect("/");
    },
    protectThisRoute: () => {
      if (!session?.user) {
        redirect("/");
      }
    },
  };
};
