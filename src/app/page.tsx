import { Button } from "@ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Button
        variant="outline"
        className="shadow-md shadow-muted-foreground/20
        "
      >
        Click me
      </Button>
    </div>
  );
}
