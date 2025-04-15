import { Button } from "@ui/button";
import { useAuth } from "@/hooks/use-auth";
export default async function Home() {
  const { isLoggedIn, redirectToDashboard } = await useAuth();

  if (isLoggedIn) {
    redirectToDashboard();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Button
        variant="outline"
        className="shadow-md shadow-muted-foreground/20"
      >
        Click me
      </Button>
    </div>
  );
}
