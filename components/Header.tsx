import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import items from "@/HeaderItemsData";
import HeaderButton from "./HeaderButton";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <header
      className={`fixed left-0 top-0 z-[100] flex h-[13vh] max-h-[13vh] min-h-[75px] w-screen items-center justify-center bg-white dark:bg-dark`}
      id="header"
    >
      <div className="flex w-full items-center justify-between px-5 lg:max-w-7xl lg:px-10 2xl:px-0">
        {/* Logo */}
        <Link
          href="#about"
          className="rounded-xl bg-black p-2 text-white dark:bg-secondary dark:text-white "
        >
          <HiAcademicCap className="h-7 w-7 " />
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
            className="hidden cursor-pointer rounded-xl bg-black px-4 py-2 font-semibold text-white dark:bg-secondary md:block"
          >
            Contact
          </Link>
          <HeaderButton />

          <ThemeSwitch className="z-50 hidden h-8 w-8 cursor-pointer sm:block" />
        </div>
      </div>
    </header>
  );
}

export default Header;
