"use client";
import React, { Dispatch, SetStateAction, createContext } from "react";
import { useState } from "react";

interface userContextInterface {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

export const userContext = createContext<userContextInterface>(
  {} as userContextInterface
);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("");
  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </>
  );
};

export default UserContextProvider;
