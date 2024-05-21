import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  isSelected: boolean;
  onClick: any;
}

function HeaderItem({ text, isSelected, onClick }: Props) {
  return (
    <li className="m-5 relative cursor-pointer flex-shrink-0 flex h-1 items-center justify-center lg:h-3" onClick={onClick}>
      <h1 className="z-50 text-lg font-semibold text-indigo-600 transition-colors">{text}</h1>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="absolute -top-[20px] -left-[20px] -right-[20px] -bottom-[20px] rounded-2xl bg-violet-100/70 dark:bg-[#19223c]"
          initial={false}
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
