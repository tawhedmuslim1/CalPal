import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";

export function UserAvatar() {
  return <UserAvatarContent />;
}

async function UserAvatarContent() {
  const { session } = await useAuth();
  return (
    <Avatar>
      <AvatarImage src={session?.user?.image ?? ""} />
      <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
    </Avatar>
  );
}
