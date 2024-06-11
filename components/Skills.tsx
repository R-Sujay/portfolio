"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { SkillType } from "@/typings";
import { urlForImage } from "@/sanity/lib/asset";
import BarLoader from "./BarLoader";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";
import { getCookie } from "cookies-next";
import { useRecoilValue } from "recoil";
import { themeAtom } from "@/atoms/Theme";

interface Props {
  skills: SkillType;
  desc: string;
}

function Skills({ skills, desc }: Props) {
  const theme = useRecoilValue(themeAtom);
  const ref = useRef(null);
  const skillArr = splitArray();

  useSelectorHandler(ref, 2);

  function splitArray() {
    const midIndex = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, midIndex);
    const secondHalf = skills.slice(midIndex);

    return [firstHalf, secondHalf];
  }

  return (
    <motion.div
      className="container mt-20 flex flex-col items-center px-0 lg:mt-[13.1vh] lg:flex-row lg:justify-between"
      id="skills"
      ref={ref}
    >
      <div className="relative mb-10 mt-0 flex items-center justify-center px-10 pr-5 sm:mt-3 lg:mb-0 lg:w-[30%] xl:mt-0">
        <BarLoader className="hidden lg:block" />
        <div className="text-4xl font-bold">
          <h1 className="text-center text-black dark:text-white lg:text-left">
            Skills
          </h1>
          <h1 className="text-center text-sm font-normal text-gray-400 lg:text-left">
            {desc}
          </h1>
        </div>
      </div>

      <div className="relative h-[100%] w-full flex-col justify-start space-y-10 overflow-hidden sm:space-y-2 md:space-y-8 lg:h-auto lg:w-[70%] lg:space-y-10 lg:pb-0">
        {skillArr.map((arr, i) => (
          <Marquee speed={100} gradient={false} key={i}>
            {arr.map((skill) => (
              <div
                className={`relative mx-5 flex h-16 w-[30vw] items-center justify-center sm:h-36 sm:w-[25vw] md:h-28 md:w-[18vw] lg:h-[20vh] lg:w-[15vw]`}
                key={skill._id}
              >
                <Image
                  src={urlForImage(
                    skill.dark !== null && theme === "dark"
                      ? skill.dark
                      : skill.light,
                  )}
                  alt=""
                  className="object-contain"
                  fill={true}
                />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
