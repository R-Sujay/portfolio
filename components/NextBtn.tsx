"use client";

import items from "@/HeaderItemsData";
import { selectedAtom } from "@/atoms/HeaderItemAtom";
import Link from "next/link";
import { useRecoilValue } from "recoil";

function NextBtn() {
  const selected = useRecoilValue(selectedAtom);
  const lastArrayIndex = items.length - 1;
  const nextSection = selected < lastArrayIndex ? selected + 1 : 0;

  return (
    <Link
      href={`#${items[nextSection]?.text.toLowerCase()}`}
      className="fixed left-[50%] right-[50%] top-[85%] z-[100] animate-spinBounce delay-700"
    >
      <div className="slide-btn group h-10 w-10 bg-white dark:bg-transparent">
        <span
          className={`left-arm after:bg-black dark:after:bg-darkGrey ${selected === lastArrayIndex ? "top-left-arm" : ""}`}
        />
        <span
          className={`right-arm after:bg-black dark:after:bg-darkGrey ${selected === lastArrayIndex ? "top-right-arm" : ""}`}
        />
        <span className="slide-main" />
      </div>
    </Link>
  );
}

export default NextBtn;
