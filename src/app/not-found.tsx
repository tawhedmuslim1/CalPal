import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">Not Found</h1>
      <p className="text-muted-foreground text-xs tracking-tight">
        The page you are looking for does not exist.
      </p>
      <Button
        variant="outline"
        className="mt-6 shadow-md shadow-muted-foreground/20"
        asChild
      >
        <Link href="/">Go back to home</Link>
      </Button>
    </div>
  );
}
