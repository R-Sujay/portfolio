"use client";

import { changeTheme } from "@/app/actions";
import { useGetState } from "@/atoms/darkModeAtom";
import { Children } from "@/typings";
import React from "react";
import { RecoilRoot } from "recoil";

export function ThemeProvider({ children }: Children) {
  // const { theme } = useGetState();
  // create("dark");

  return (
    <RecoilRoot>
      <div
      // className={`bg-white dark:bg-[#13192d] ${theme === "dark" ? "dark" : "light"}`}
      >
        {children}
      </div>
    </RecoilRoot>
  );
}
