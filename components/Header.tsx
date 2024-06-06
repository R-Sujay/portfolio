"use client";

import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import HeaderItem from "./HeaderItem";
import items from "@/HeaderItemsData";
import { getTheme } from "@/utils/getTheme";
import { setTheme } from "@/utils/setTheme";
import HeaderButton from "./HeaderButton";
import { useScrollIntoViewHandler } from "@/hooks/useScrollIntoViewHandler";
import Link from "next/link";

function Header() {
  // const theme = await getTheme();
  // const changeTheme = async () =>
  // await setTheme(theme === "light" ? "dark" : "light");
  // const { selectItem } = useScrollIntoViewHandler();
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (shouldScroll) {
      // window.scrollTo(0, document.documentElement.scrollHeight);
      const element = document.documentElement || document.body;
      element.scrollTop = element.scrollHeight - element.clientHeight;
      setShouldScroll(false); // Reset after scrolling
    }
  }, [shouldScroll]);

  return (
    <header
      className={`fixed left-0 top-0 z-[100] flex h-[13vh] max-h-[13vh] min-h-[75px] w-screen items-center justify-center bg-white dark:bg-[#13192d]`}
      id="header"
    >
      <div className="flex w-full items-center justify-between px-5 lg:max-w-7xl lg:px-10 2xl:px-0">
        {/* Logo */}
        <Link href="#about" className="rounded-xl bg-indigo-500 p-2 text-white">
          <HiAcademicCap className="h-7 w-7" />
        </Link>

        {/* items */}
        <ul className="m-0 hidden list-none space-x-8 p-0 md:flex md:space-x-10 lg:space-x-8">
          {items.map((item, i) => (
            <HeaderItem item={item} key={i} />
          ))}
        </ul>

        {/* Contact Btn */}
        <div className="z-50 flex items-center space-x-5">
          <Link
            href="#footer"
            className="hidden cursor-pointer rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white md:block"
          >
            Contact
          </Link>
          <HeaderButton />
          <button className="z-50 hidden cursor-pointer sm:block">
            <BsFillSunFill className="h-8 w-8 text-indigo-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
