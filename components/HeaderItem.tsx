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
  const [isSelecting, setIsSelecting] = useRecoilState(isSelectingAtom);
  console.log(isSelecting);

  const { selectItem } = useScrollIntoViewHandler();

  // const divRef = useRef(null);
  // const [isAnimating, setIsAnimating] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       if (!entry.isIntersecting) {
  //         // Animation complete when not intersecting
  //         console.log("starting or ending", isAnimating);
  //       }
  //     },
  //     { threshold: 1 },
  //   );

  //   if (divRef.current) {
  //     observer.observe(divRef.current);
  //   }

  //   return () => observer.disconnect(); // Cleanup on unmount
  // }, [divRef.current]);

  return (
    <li
      className="relative flex flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl px-2 lg:h-14"
      onClick={() => selectItem(item.text, item.id)}
    >
      <h1 className="z-50 text-lg font-semibold text-indigo-600 transition-colors">
        {item.text}
      </h1>
      {selected === item.id && (
        <motion.div
          layoutId="outline"
          className="absolute -bottom-[20px] -left-[20px] -right-[20px] -top-[1%] -z-10 h-14 rounded-2xl bg-violet-100/70 dark:bg-[#19223c]"
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
