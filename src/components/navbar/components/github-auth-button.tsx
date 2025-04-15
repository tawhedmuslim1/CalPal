"use client";

import { signInWithGithub } from "@/actions/signIn-github";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
export function GithubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <form action={signInWithGithub} className="w-full">
        {pending ? (
          <Button variant="outline" className="w-full" disabled>
            <Loader2 className="w-4 h-4 animate-spin" />
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Image src="/github.svg" alt="github" width={20} height={20} />
          </Button>
        )}
      </form>
    </>
  );
}
