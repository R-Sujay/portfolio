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
      className="container relative h-min max-w-4xl sm:h-full lg:h-[87vh] lg:max-h-[87vh]"
      id="profile"
      ref={ref}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-between sm:max-h-[330px] sm:flex-row lg:max-h-96">
          <div className="relative flex h-full flex-col sm:w-[68%] sm:justify-between sm:pl-7 md:w-[65%] lg:pl-0">
            <h1 className="mx-auto flex text-3xl font-semibold text-gray-500 dark:text-darkGrey sm:mx-0 lg:text-4xl">
              My
              <span className="pl-2 font-semibold text-black dark:text-white">
                Profile
              </span>
            </h1>
            <motion.div className="z-50 mt-3 overflow-hidden rounded-xl bg-gray-100 py-4 pl-5 pr-5 text-xs text-gray-500 dark:bg-secondary dark:text-gray-400 sm:text-sm md:py-5 md:pl-7 md:pr-14 lg:mt-5 lg:text-base">
              <PortableText value={hero.desc} />
            </motion.div>
          </div>

          <div className="relative z-50 hidden h-full w-full flex-1 sm:block">
            <div className="absolute -bottom-5 -left-5 h-[300px] w-[100%] md:-left-10 md:bottom-0 lg:-left-14 lg:bottom-4">
              <Image
                src={urlForImage(hero.secProfile)}
                alt=""
                fill={true}
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
