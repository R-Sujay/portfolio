"use client";

import { themeAtom } from "@/atoms/Theme";
import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useRecoilState } from "recoil";

function ThemeSwitch({ className }: { className: string }) {
  const [theme, setThemeAtomMode] = useRecoilState(themeAtom);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading indicator if preferred
  }

  const setTheme = () => {
    const themeToSet = theme === "dark" ? "light" : "dark";
    setThemeAtomMode(themeToSet);
  };

  return (
    <button className={className} onClick={() => setTheme()}>
      {typeof window !== "undefined" && theme === "dark" ? (
        <BsMoonStarsFill className="h-6 w-6 text-black dark:text-white" />
      ) : (
        <BsFillSunFill className="h-8 w-8 text-black dark:text-white" />
      )}
    </button>
  );
}

export default ThemeSwitch;
