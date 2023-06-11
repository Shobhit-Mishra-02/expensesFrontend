"use server";
import { cookies } from "next/headers";

const validateUser = async (data: { username: string; password: string }) => {
  const cookieStore = cookies();
  const request = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/user/validate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const res = await request.json();

  if (res.status === "success") {
    cookieStore.set("user", res.user?.id);
  }

  return res;
};

export default validateUser;
