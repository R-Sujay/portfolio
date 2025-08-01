"use client";

import React from "react";
import { motion } from "framer-motion";
import { selectedAtom } from "@/atoms/HeaderItemAtom";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { item } from "@/HeaderItemsData";

function HeaderItem({ item }: { item: item }) {
  const selected = useRecoilValue(selectedAtom);

  return (
    <Link
      href={`#${item.text.toLowerCase()}`}
      className="relative flex flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl px-0.5 lg:mx-0 lg:h-14 lg:px-2"
    >
      <h3
        className={`z-50 text-lg font-semibold text-black transition-colors dark:text-white`}
      >
        {item.text}
      </h3>
      {selected === item.id && (
        <motion.div
          layoutId="outline"
          className="absolute -bottom-3 -left-5 -right-5 -z-10 h-[53px] rounded-2xl bg-gray-100 dark:bg-secondary lg:top-[1%]"
          initial={false}
          transition={{
            stiffness: 500,
            damping: 20,
            type: "spring",
          }}
        />
      )}
    </Link>
  );
}

export default HeaderItem;
