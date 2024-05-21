"use client";

import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { AnimateSharedLayout } from "framer-motion";
import HeaderItem from "./HeaderItem";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import ScrollIntoView from "react-scroll-into-view";
import items from "@/HeaderItemsData";
import { useTheme } from "next-themes";
import { selectedAtom } from "@/atoms/HeaderItem";

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
    <div className={`fixed top-0 left-0 z-[100] min-h-[90px] w-screen bg-white p-1 dark:bg-[#13192d] ${isScrolled && "shadow-md"}`} id="header">
      <header className="-z-50 mx-auto flex max-w-7xl items-center justify-between px-10 pb-2 pt-5 xl:px-0">
        {/* Logo */}
        <div className="rounded-xl bg-indigo-500 p-2 text-white">
          <HiAcademicCap className="h-7 w-7" />
        </div>

        {/* items */}
        <ul className="list-none m-0 p-0 flex">
          {items.map((item, index) => (
            <ScrollIntoView selector={`#${item.text.toLocaleLowerCase()}`} key={index}>
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
          <button className="cursor-pointer rounded-xl bg-indigo-600 py-2 px-4 font-semibold text-white">Contact</button>
          {/* <button className="z-50 cursor-pointer" onClick={() => setTheme(isDark ? "dark" : "light")}>
            {isDark ? <BsFillSunFill className="h-8 w-8 text-indigo-600" /> : <BsMoonStarsFill className="h-6 w-6 text-indigo-600" />}
          </button> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
