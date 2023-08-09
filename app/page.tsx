"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession({
    required: true,
  });

  if (!session) return null;

  return (
    <main className="flex min-h-screen flex-col justify-center gap-4 items-center  p-24">
      <p className="text-8xl font-extrabold">Hi, {session.user?.name} </p>
      <p className="text-2xl font-extrabold">{session.user?.email} </p>
      <Button  onClick={async () => signOut({ redirect: true })}>LogOut</Button>
    </main>
  );
}
