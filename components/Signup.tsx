"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import createUser from "./actions/createUser";

interface userInterface {
  eamil: string;
  password: string;
  confirmPassword?: string;
}

const SignUp = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<userInterface>({
    eamil: "",
    password: "",
    confirmPassword: "",
  });

  const createNewUser = async () => {
    // if (newUser.password === newUser.confirmPassword) {
    //   const payload = {
    //     username: newUser.eamil,
    //     password: newUser.password,
    //   };
    //   const data = await createUser(payload);
    //   console.log(data);
    //   setNewUser({
    //     eamil: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   router.push("/auth/signin");
    // }
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
          value={newUser.eamil}
          onChange={(e) =>
            setNewUser({
              ...newUser,
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
          value={newUser.password}
          onChange={(e) =>
            setNewUser({
              ...newUser,
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
          value={newUser.confirmPassword}
          onChange={(e) =>
            setNewUser({
              ...newUser,
              confirmPassword: e.target.value,
            })
          }
        />
      </div>

      <p className="text-sm pt-2 text-gray-600 pb-6">
        already have account,{" "}
        <span className="text-blue-500 underline hover:text-blue-600 cursor-pointer">
          <Link href="/">click here</Link>
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
