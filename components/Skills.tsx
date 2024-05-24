"use client";

// import { RaceBy } from "@uiball/loaders";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useSetRecoilState } from "recoil";
import { useInView } from "framer-motion";
import { selectedAtom } from "@/atoms/HeaderItem";
import { useTheme } from "next-themes";
import { lineWobble } from "ldrs";
import { SkillType } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  skills: SkillType;
}

function Skills({ skills }: Props) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref);
  const setSelected = useSetRecoilState(selectedAtom);
  const skillArr = splitArray();

  useEffect(() => {
    if (isInView) {
      setSelected(1);
    }
  }, [isInView]);

  useEffect(() => {
    (async () => {
      lineWobble.register();
    })();
  }, []);

  function splitArray() {
    const midIndex = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, midIndex);
    const secondHalf = skills.slice(midIndex);
    console.log(firstHalf);
    console.log(secondHalf);

    return [firstHalf, secondHalf];
  }

  return (
    <div
      className="container flex items-center justify-between"
      id="skills"
      ref={ref}
    >
      <div className="relative flex w-[30%] items-center pr-2">
        <div className="rotate-90">
          <l-line-wobble
            size="100"
            stroke="5"
            bg-opacity="0.1"
            speed="1.75"
            color="rgb(99 102 241)"
          />
        </div>
        <div className="text-4xl font-bold">
          <h1 className="text-indigo-500">Skills</h1>
          <h1 className="text-sm font-normal text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
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
    </div>
  );
}

export default Skills;
