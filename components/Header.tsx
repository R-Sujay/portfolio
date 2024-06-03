import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import HeaderItem from "./HeaderItem";
import items from "@/HeaderItemsData";
import { getTheme } from "@/utils/getTheme";
import { setTheme } from "@/utils/setTheme";
import HeaderThemeButton from "./HeaderThemeButton";

async function Header() {
  const theme = await getTheme();
  const changeTheme = async () =>
    await setTheme(theme === "light" ? "dark" : "light");

  return (
    <header
      className={`fixed left-0 top-0 z-[100] flex h-[13vh] max-h-[13vh] w-screen items-center justify-center bg-white dark:bg-[#13192d]`}
      id="header"
    >
      <div className="flex w-full items-center justify-between px-5 pt-5 lg:max-w-7xl lg:px-10 2xl:px-0">
        {/* Logo */}
        <div className="rounded-xl bg-indigo-500 p-2 text-white">
          <HiAcademicCap className="h-7 w-7" />
        </div>

        {/* items */}
        <ul className="m-0 flex list-none space-x-8 p-0 md:space-x-10 lg:space-x-8">
          {items.map((item, i) => (
            <HeaderItem item={item} key={i} />
          ))}
        </ul>

        {/* Contact Btn */}
        <div className="z-50 flex items-center space-x-5">
          <button className="cursor-pointer rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white">
            Contact
          </button>
          {/* <HeaderThemeButton changeTheme={changeTheme} theme={theme} /> */}
          <button className="z-50 cursor-pointer">
            <BsFillSunFill className="h-8 w-8 text-indigo-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
