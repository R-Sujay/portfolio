"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useSetRecoilState } from "recoil";
import { motion } from "framer-motion";
import { selectedAtom } from "@/atoms/HeaderItemAtom";
import { useTheme } from "next-themes";
import { SkillType } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";
import BarLoader from "./BarLoader";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";

interface Props {
  skills: SkillType;
  desc: string;
}

function Profile({ skills, desc }: Props) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const ref = useRef(null);

  useSelectorHandler(ref, 1);

  function splitArray() {
    const midIndex = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, midIndex);
    const secondHalf = skills.slice(midIndex);

    return [firstHalf, secondHalf];
  }

  return (
    <motion.div
      className="container flex items-center justify-between"
      id="profile"
      ref={ref}
    >
      <div className="relative flex w-[30%] items-center pr-2">
        <BarLoader />
        <div className="text-4xl font-bold">
          <h1 className="text-indigo-500">Skills</h1>
          <h1 className="text-sm font-normal text-gray-400">{desc}</h1>
        </div>
      </div>

      <div className="relative w-[70%] space-y-5 overflow-x-hidden"></div>
    </motion.div>
  );
}

export default Profile;
