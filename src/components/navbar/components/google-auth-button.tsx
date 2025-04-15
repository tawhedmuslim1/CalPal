"use client";

import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/actions/signIn-google";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <form action={signInWithGoogle} method="post" className="w-full">
        {pending ? (
          <Button variant="outline" className="w-full" disabled>
            <Loader2 className="w-4 h-4 animate-spin" />
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Image src="/google.svg" alt="google" width={20} height={20} />
          </Button>
        )}
      </form>
    </>
  );
}
