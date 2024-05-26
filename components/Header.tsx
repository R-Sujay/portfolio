"use client";

import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { AnimateSharedLayout } from "framer-motion";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import ScrollIntoView from "react-scroll-into-view";
import items from "@/HeaderItemsData";
import { useTheme } from "next-themes";
import { selectedAtom } from "@/atoms/HeaderItem";
import HeaderItem from "./HeaderItem";

function Header() {
  const [selected, setSelected] = useRecoilState(selectedAtom);
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      if (position > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[100] flex h-[13vh] w-screen flex-col items-center justify-center bg-white dark:bg-[#13192d] ${isScrolled && "shadow-md"}`}
      id="header"
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="rounded-xl bg-indigo-500 p-2 text-white">
          <HiAcademicCap className="h-7 w-7" />
        </div>

        {/* items */}
        <ul className="m-0 flex list-none p-0">
          {items.map((item, i) => (
            <ScrollIntoView
              selector={`#${item.text.toLocaleLowerCase()}`}
              key={i}
            >
              <HeaderItem
                text={item.text}
                isSelected={selected === item.id}
                onClick={() => {
                  setSelected(item.id);
                }}
              />
            </ScrollIntoView>
          ))}
        </ul>

        {/* Contact Btn */}
        <div className="z-50 flex items-center space-x-5">
          <button className="cursor-pointer rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white">
            Contact
          </button>
          {/* <button className="z-50 cursor-pointer" onClick={() => setTheme(isDark ? "dark" : "light")}>
            {isDark ? <BsFillSunFill className="h-8 w-8 text-indigo-600" /> : <BsMoonStarsFill className="h-6 w-6 text-indigo-600" />}
          </button> */}
          <button className="z-50 cursor-pointer">
            <BsFillSunFill className="h-8 w-8 text-indigo-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
