import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" className="size-10" width={40} height={40} />
    </Link>
  );
}
