"use client";
import { useContext } from "react";
import { userContext } from "@/components/context/UserContextProvider";
import { redirect } from "next/navigation";

export default function Home() {
  const { user } = useContext(userContext);

  if (!user.length) {
    redirect("/auth/signin");
  }

  return <div>Home page</div>;
}
