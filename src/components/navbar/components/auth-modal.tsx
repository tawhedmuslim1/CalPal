import { Button } from "@ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { GoogleAuthButton } from "./google-auth-button";
import { GithubAuthButton } from "./github-auth-button";
export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Please login to access your the full platform
          </DialogDescription>

          <section className="flex gap-4 py-6">
            <GoogleAuthButton />
            <GithubAuthButton />
          </section>

          <section>
            <p className="text-sm text-muted-foreground">
              By creating an account, you agree to our{" "}
              <DialogClose asChild>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </DialogClose>{" "}
              and{" "}
              <DialogClose asChild>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </DialogClose>
              .
            </p>
          </section>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
