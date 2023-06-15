"use client";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import signOut from "./actions/signOut";
// import { NextRouter, useRouter } from "next/router";
import { useRouter } from "next/navigation";

const Menu = () => (
  <div className="absolute top-[40px] -left-[120px] h-auto w-[140px] p-2 rounded-md border shadow-md bg-white">
    <ul className="flex justify-start space-y-2 flex-col">
      <li className="text-gray-600 hover:text-gray-700 cursor-pointer">Home</li>
      <li className="text-gray-600 hover:text-gray-700 cursor-pointer">
        Status
      </li>
      <li className="text-gray-600 hover:text-gray-700 cursor-pointer">
        Goals
      </li>
      <li className="text-gray-600 hover:text-gray-700 cursor-pointer pb-3 border-b">
        About us
      </li>
      <button
        onClick={() => {
          signOut();
        }}
        className="w-full bg-blue-500 text-white cursor-pointer hover:bg-blue-400 py-1 rounded-md"
      >
        Sign out
      </button>
    </ul>
  </div>
);

const Navigation = () => {
  const router = useRouter();
  const [isMenu, setMenuStatus] = useState<boolean>(false);

  const toogleMenu = () => {
    isMenu ? setMenuStatus(false) : setMenuStatus(true);
  };

  return (
    <nav className="border-b shadow-md mb-4 bg-white">
      <div className="flex justify-between px-3 py-3 sm:px-8 md:px-20 lg:px-48 lg:py-4">
        <span className="text-xl cursor-pointer text-gray-700 hover:text-gray-600">
          Expenses plus
        </span>

        <div className="hidden sm:block">
          <div className="flex gap-4 list-none justify-center align-middle items-center lg:gap-8">
            <li className="text-gray-600 hover:text-gray-700 cursor-pointer">
              Home
            </li>
            <li className="text-gray-600 hover:text-gray-700 cursor-pointer">
              Status
            </li>
            <li className="text-gray-600 hover:text-gray-700 cursor-pointer">
              Goals
            </li>
            <li className="text-gray-600 hover:text-gray-700 cursor-pointer">
              About us
            </li>
            <button
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className=" bg-blue-500 text-white cursor-pointer hover:bg-blue-400 py-1 px-6 rounded-md"
            >
              Sign out
            </button>
          </div>
        </div>
        <span className="relative sm:hidden">
          {isMenu ? (
            <FiX
              onClick={toogleMenu}
              className="w-7 h-auto cursor-pointer text-gray-700 hover:text-gray-600"
            />
          ) : (
            <CgMenuRightAlt
              onClick={toogleMenu}
              className="w-7 h-auto cursor-pointer text-gray-700 hover:text-gray-600"
            />
          )}

          {isMenu && <Menu />}
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
