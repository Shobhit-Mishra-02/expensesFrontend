"use server";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

const signOut = () => {
  const cookieStore = cookies();

  cookieStore.set("user", "");

  //   redirect("/");
};

export default signOut;
