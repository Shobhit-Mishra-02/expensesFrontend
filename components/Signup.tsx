"use client";
import { useState } from "react";
import Link from "next/link";

interface userInterface {
  eamil: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [user, setUser] = useState<userInterface>({
    eamil: "",
    password: "",
    confirmPassword: "",
  });

  const createNewUser = async () => {
    if (user.password === user.confirmPassword) {
      const payload = {
        username: user.eamil,
        password: user.password,
      };

      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log(data);

      setUser({
        eamil: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createNewUser();
      }}
      className="w-full max-w-[340px] mx-1 p-2 rounded-md border shadow-md bg-white"
    >
      <h1 className="text-3xl font-semibold text-gray-800 text-center pt-4 pb-6">
        Sign up
      </h1>
      <div>
        <label className="text-sm text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="border rounded-sm text-xl focus:outline-none focus:border-blue-500 w-full p-1 mb-2"
          type="email"
          id="email"
          value={user.eamil}
          onChange={(e) =>
            setUser({
              ...user,
              eamil: e.target.value,
            })
          }
        />

        <label className="text-sm text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          className="border rounded-sm text-xl focus:outline-none focus:border-blue-500 w-full p-1 mb-2"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />

        <label className="text-sm text-gray-700" htmlFor="confirmPassword">
          confirm Password
        </label>
        <input
          className="border rounded-sm text-xl focus:outline-none focus:border-blue-500 w-full p-1 mb-2"
          type="password"
          id="confirmPassword"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({
              ...user,
              confirmPassword: e.target.value,
            })
          }
        />
      </div>

      <p className="text-sm pt-2 text-gray-600 pb-6">
        already have account,{" "}
        <span className="text-blue-500 underline hover:text-blue-600 cursor-pointer">
          <Link href="/auth/signin">click here</Link>
        </span>
      </p>

      <div className="pb-4">
        <button
          type="submit"
          className="text-xl text-white px-4 py-1 rounded-md bg-blue-500 w-full hover:bg-blue-600"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
