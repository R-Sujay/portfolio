"use client";

import items from "@/HeaderItemsData";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

function HeaderButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="z-50 md:hidden">
      <div
        className={`absolute left-0 top-[12vh] ${isVisible ? "inline-flex" : "hidden"} w-screen flex-col items-center justify-start rounded-b-3xl bg-white pb-4 shadow-2xl dark:bg-dark`}
      >
        {items.map((item) => (
          <Link
            href={`#${item.text.toLowerCase()}`}
            onClick={() => {
              setIsVisible(false);
            }}
            className="w-full py-1 text-center text-lg font-semibold dark:text-darkGrey"
            key={item.id}
          >
            {item.text}
          </Link>
        ))}
        <div className="z-50 mt-2 flex items-center space-x-5">
          <Link
            href="#footer"
            onClick={() => setIsVisible(false)}
            className="cursor-pointer rounded-xl bg-black px-4 py-2 font-semibold text-white dark:bg-secondary"
          >
            Contact
          </Link>
          <ThemeSwitch className="z-50 cursor-pointer sm:hidden" />
        </div>
      </div>

      <div
        className="cursor-pointer rounded-2xl border-2 p-2 dark:border-darkGrey"
        onClick={() => setIsVisible(!isVisible)}
      >
        <FaBars className="h-6 w-6 dark:text-darkGrey" />
      </div>
    </div>
  );
}

export default HeaderButton;
