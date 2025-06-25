"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { isSelectingAtom, selectedAtom } from "@/atoms/HeaderItemAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import items from "@/HeaderItemsData";
import { useScrollIntoViewHandler } from "@/hooks/useScrollIntoViewHandler";

interface Props {
  item: {
    text: string;
    id: number;
  };
}

function HeaderItem({ item }: Props) {
  const selected = useRecoilValue(selectedAtom);

  const { selectItem } = useScrollIntoViewHandler();

  return (
    <li
      className="relative flex flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl px-0.5 lg:mx-0 lg:h-14 lg:px-2"
      onClick={() => selectItem(item.text, item.id)}
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
          // ref={divRef}
          transition={{
            stiffness: 500,
            damping: 20,
            type: "spring",
          }}
        />
      )}
    </li>
  );
}

export default HeaderItem;
