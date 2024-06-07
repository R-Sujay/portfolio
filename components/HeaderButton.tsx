"use client";

import items from "@/HeaderItemsData";
import { useScrollIntoViewHandler } from "@/hooks/useScrollIntoViewHandler";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

function HeaderButton() {
  const { selectItem } = useScrollIntoViewHandler();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="z-50 md:hidden">
      {/* {theme === "light" ? (
        <BsFillSunFill className="h-8 w-8 text-indigo-600" />
      ) : (
        <BsMoonStarsFill className="h-6 w-6 text-indigo-600" />
      )} */}
      <div
        className={`absolute left-0 top-[14vh] ${isVisible ? "inline-flex" : "hidden"} w-screen flex-col items-center justify-start rounded-b-3xl bg-white pb-4 shadow-2xl dark:bg-dark`}
      >
        {items.map((item) => (
          <p
            onClick={() => {
              selectItem(item.text, item.id);
              setIsVisible(false);
            }}
            className="w-full py-1 text-center text-lg font-semibold dark:text-darkGrey"
            key={item.id}
          >
            {item.text}
          </p>
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
