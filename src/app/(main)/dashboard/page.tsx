import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
export default async function Dashboard() {
  const { session, isLoggedIn, protectThisRoute } = await useAuth();

  protectThisRoute();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Dashboard</h1>
    </div>
  );
}
