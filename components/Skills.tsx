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

function Skills() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref);
  const setSelected = useSetRecoilState(selectedAtom);

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
        <Marquee speed={100} gradient={false}>
          <div className="marquee-child ml-16 w-[200px]">
            <Image
              src="/images/react-logo.svg"
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="marquee-child w-[260px]">
            <Image
              src={
                dark
                  ? "https://i.imgur.com/wysQfXf.png"
                  : "https://i.imgur.com/rWgjocu.png"
              }
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="marquee-child w-[450px]">
            <Image
              src={
                dark
                  ? "https://i.imgur.com/qSt48Yv.png"
                  : "https://i.imgur.com/1nfK7JV.png"
              }
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="marquee-child w-[260px]">
            <Image
              src={
                dark
                  ? "https://i.imgur.com/V3epEzx.png"
                  : "https://i.imgur.com/2OqpKrp.png"
              }
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="marquee-child w-[180px]">
            <Image
              src="https://i.imgur.com/9GVeRuW.png"
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
        </Marquee>
        <Marquee speed={100} gradient={false}>
          <div className="marquee-child ml-16 w-[300px]">
            <Image
              src={
                dark
                  ? "https://i.imgur.com/i03USQx.png"
                  : "https://i.imgur.com/nRzi3j8.png"
              }
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="marquee-child w-[330px]">
            <Image
              src="https://i.imgur.com/g99BKhf.png"
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="marquee-child w-[300px]">
            <Image
              src="https://i.imgur.com/XQoY6xp.png"
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="marquee-child w-[300px]">
            <Image
              src={
                dark
                  ? "/images/firebase-light.svg"
                  : "/images/firebase-dark.svg"
              }
              alt=""
              className="object-contain"
              fill={true}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
