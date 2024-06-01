"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { SkillType } from "@/typings";
import { urlForImage } from "@/sanity/lib/asset";
import BarLoader from "./BarLoader";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";

interface Props {
  skills: SkillType;
  desc: string;
}

function Skills({ skills, desc }: Props) {
  const { theme } = useTheme();
  const dark = theme === "dark";
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
      className="container flex items-center justify-between"
      id="skills"
      ref={ref}
    >
      <div className="relative flex w-[30%] items-center pr-2">
        <BarLoader />
        <div className="text-4xl font-bold">
          <h1 className="text-indigo-500">Skills</h1>
          <h1 className="text-sm font-normal text-gray-400">{desc}</h1>
        </div>
      </div>

      <div className="relative w-[70%] space-y-5 overflow-x-hidden">
        {skillArr.map((arr, i) => (
          <Marquee speed={100} gradient={false} className="pl-16" key={i}>
            {arr.map((skill) => (
              <div className="marquee-child w-[260px]" key={skill._id}>
                <Image
                  src={urlForImage(
                    skill.dark !== null && dark ? skill.dark : skill.light,
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
