import { redirect } from "next/navigation";

import { cookies } from "next/headers";

export default function Home() {
  const cookiesStore = cookies();

  if (!cookiesStore.has("user")) {
    redirect("/auth/signin");
  }

  const user = cookiesStore.get("user");

  return <div>Home page {user?.value}</div>;
}
