import Link from "next/link";

const SignIn = () => {
  return (
    <div className="w-full max-w-[340px] mx-1 p-2 rounded-md border shadow-md bg-white">
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
        />

        <label className="text-sm text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          className="border rounded-sm text-xl focus:outline-none focus:border-blue-500 w-full p-1 mb-2"
          type="password"
          id="password"
        />
      </div>

      <p className="text-sm pt-2 text-gray-600 pb-6">
        don't have account,{" "}
        <span className="text-blue-500 underline hover:text-blue-600 cursor-pointer">
          <Link href="/auth/signup">click here</Link>
        </span>
      </p>

      <div className="pb-4">
        <button className="text-xl text-white px-4 py-1 rounded-md bg-blue-500 w-full hover:bg-blue-600">
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignIn;
