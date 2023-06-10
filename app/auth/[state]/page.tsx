import { NextPage } from "next";
import SignIn from "@/components/Signin";
import SignUp from "@/components/Signup";

const AuthPage: NextPage<{ params: { state: string } }> = ({ params }) => {
  if (params.state === "signin") {
    return (
      <div className="flex justify-center align-middle items-center w-full pt-32 md:pt-40">
        <SignIn />
      </div>
    );
  }

  return (
    <div className="flex justify-center align-middle items-center w-full pt-32 md:pt-40">
      <SignUp />
    </div>
  );
};

export default AuthPage;
