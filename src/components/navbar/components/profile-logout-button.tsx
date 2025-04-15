"use client";

import { Button } from "@ui/button";
import { DropdownMenuItem } from "@ui/dropdown-menu";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { signOutAction } from "@/actions/signOut";

export function ProfileLogoutButton() {
  const { pending } = useFormStatus();

  return (
    <form action={signOutAction}>
      <DropdownMenuItem
        disabled={pending}
        className="cursor-pointer bg-destructive/20 text-destructive"
      >
        <button type="submit" className="w-full text-start">
          {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Logout"}
        </button>
      </DropdownMenuItem>
    </form>
  );
}
