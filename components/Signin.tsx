"use client";
import { useState } from "react";
import Link from "next/link";
import validateUser from "./actions/validateUser";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const signIn = async () => {
    // console.log(user);
    const data = await validateUser({
      username: user.email,
      password: user.password,
    });
    if (data.status === "success") {
      router.push("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn();
      }}
      className="w-full max-w-[340px] mx-1 p-2 rounded-md border shadow-md bg-white"
    >
      <h1 className="text-3xl font-semibold text-gray-800 text-center pt-4 pb-6">
        Sign in
      </h1>
      <div>
        <label className="text-sm text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="border rounded-sm text-xl focus:outline-none focus:border-blue-500 w-full p-1 mb-2"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />

        <label className="text-sm text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          className="border rounded-sm text-xl focus:outline-none focus:border-blue-500 w-full p-1 mb-2"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>

      <p className="text-sm pt-2 text-gray-600 pb-6">
        don't have account,{" "}
        <span className="text-blue-500 underline hover:text-blue-600 cursor-pointer">
          <Link href="/auth/signup">click here</Link>
        </span>
      </p>

      <div className="pb-4">
        <button
          type="submit"
          className="text-xl text-white px-4 py-1 rounded-md bg-blue-500 w-full hover:bg-blue-600"
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default SignIn;
