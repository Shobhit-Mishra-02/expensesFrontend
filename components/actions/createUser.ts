"use server";

async function createUser(data: { username: string; password: string }) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export default createUser;
