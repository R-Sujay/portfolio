"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useSetRecoilState } from "recoil";
import { motion } from "framer-motion";
import { selectedAtom } from "@/atoms/HeaderItemAtom";
import { useTheme } from "next-themes";
import { HeroType, SkillType } from "@/typings";
import { urlForImage } from "@/sanity/lib/asset";
import BarLoader from "./BarLoader";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";
import { PortableText } from "next-sanity";

interface Props {
  hero: HeroType;
}

function Profile({ hero }: Props) {
  const ref = useRef(null);

  useSelectorHandler(ref, 1);

  return (
    <motion.div
      className="container flex max-w-5xl items-center justify-between"
      id="profile"
      ref={ref}
    >
      <div className="relative flex h-full w-[70%] flex-col items-start justify-between py-10 pt-[10%]">
        <h1 className="flex text-4xl font-semibold text-gray-400">
          My
          <span className="pl-2 font-semibold text-indigo-600">Profile</span>
        </h1>
        <motion.div className="absolute -right-20 top-[25%] z-50 overflow-hidden rounded-lg bg-[#eeeffc] py-5 pl-7 pr-14 text-gray-400 dark:bg-[#19223c]">
          <PortableText value={hero.desc} />
        </motion.div>
      </div>

      <div className="relative z-50 h-[55%] w-[55%] opacity-80 dark:opacity-75">
        <Image
          src={urlForImage(hero.secProfile)}
          alt=""
          fill={true}
          className="rounded-xl object-contain"
        />
      </div>
    </motion.div>
  );
}

export default Profile;
