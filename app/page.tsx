import { redirect } from "next/navigation";
import SignIn from "@/components/Signin";

import { cookies } from "next/headers";

export default function Home() {
  // const cookiesStore = cookies();

  // if (!cookiesStore.has("user")) {
  //   redirect("/auth/signin");
  // }

  // const user = cookiesStore.get("user");

  return (
    <div className="flex justify-center align-middle items-center w-full pt-32 md:pt-40">
      <SignIn />
    </div>
  );
}
