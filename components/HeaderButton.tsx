"use client";

import items from "@/HeaderItemsData";
import { useScrollIntoViewHandler } from "@/hooks/useScrollIntoViewHandler";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

function HeaderButton() {
  const { selectItem } = useScrollIntoViewHandler();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="z-50 md:hidden"
      // onClick={() => changeTheme()}
    >
      {/* {theme === "light" ? (
        <BsFillSunFill className="h-8 w-8 text-indigo-600" />
      ) : (
        <BsMoonStarsFill className="h-6 w-6 text-indigo-600" />
      )} */}
      <div
        className={`absolute left-0 top-[14vh] ${isVisible ? "inline-flex" : "hidden"} w-screen flex-col items-center justify-start rounded-b-3xl bg-white pb-4 shadow-2xl dark:bg-[#13192d]`}
      >
        {items.map((item, i) => (
          <p
            onClick={() => {
              selectItem(item.text, item.id);
              setIsVisible(false);
            }}
            className="w-full py-1 text-center text-lg font-semibold text-indigo-600"
          >
            {item.text}
          </p>
        ))}
        <div className="z-50 mt-2 flex items-center space-x-5">
          <Link
            href="#footer"
            onClick={() => setIsVisible(false)}
            className="cursor-pointer rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white"
          >
            Contact
          </Link>
          <button className="z-50 cursor-pointer sm:hidden">
            <BsFillSunFill className="h-8 w-8 text-indigo-600" />
          </button>
        </div>
      </div>

      <div
        className="cursor-pointer rounded-2xl border-2 border-indigo-600 p-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        <FaBars className="h-6 w-6 text-indigo-600" />
      </div>
    </div>
  );
}

export default HeaderButton;
