"use client";

import React from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

type Props = {
  changeTheme: any;
  theme: string;
};

function HeaderThemeButton({ changeTheme, theme }: Props) {
  return (
    <button
      className="z-50 flex h-8 w-8 cursor-pointer items-center justify-center"
      onClick={() => changeTheme()}
    >
      {theme === "light" ? (
        <BsFillSunFill className="h-8 w-8 text-indigo-600" />
      ) : (
        <BsMoonStarsFill className="h-6 w-6 text-indigo-600" />
      )}
    </button>
  );
}

export default HeaderThemeButton;
