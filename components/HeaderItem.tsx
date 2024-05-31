"use client";

import React from "react";
import { motion } from "framer-motion";
import { isSelectingAtom, selectedAtom } from "@/atoms/HeaderItemAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import items from "@/HeaderItemsData";
import { useScrollSelectHandler } from "@/hooks/useScrollSelectHandler";

interface Props {
  item: {
    text: string;
    id: number;
  };
}

function HeaderItem({ item }: Props) {
  const selected = useRecoilValue(selectedAtom);
  const [isSelecting, setIsSelecting] = useRecoilState(isSelectingAtom);
  console.log(items.find((item) => item.id === selected)?.text);

  const handleSelector = useScrollSelectHandler(item.text, item.id);

  return (
    <li
      className="relative flex flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl px-2 lg:h-14"
      onClick={() => handleSelector}
    >
      <h1 className="z-50 text-lg font-semibold text-indigo-600 transition-colors">
        {item.text}
      </h1>
      {selected === item.id && (
        <motion.div
          layoutId="outline"
          className="absolute -bottom-[20px] -left-[20px] -right-[20px] -top-[1%] -z-10 h-14 rounded-2xl bg-violet-100/70 dark:bg-[#19223c]"
          initial={false}
          transition={{
            stiffness: 500,
            damping: 20,
            type: "spring",
          }}
          onAnimationEndCapture={() => setIsSelecting(false)}
        />
      )}
    </li>
  );
}

export default HeaderItem;
