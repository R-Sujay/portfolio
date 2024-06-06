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

  console.log(selected, item);

  return (
    <li
      className="relative flex flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl px-0.5 lg:mx-0 lg:h-14 lg:px-2"
      onClick={() => selectItem(item.text, item.id)}
    >
      <h1
        className={`z-50 text-lg font-semibold text-black transition-colors dark:text-white`}
      >
        {item.text}
      </h1>
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
