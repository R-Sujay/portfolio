"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AnimateText from "@/components/AnimateText";
import { urlForImage } from "@/sanity/lib/asset";
import { HeroType } from "@/typings";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";
import { useScrollIntoViewHandler } from "@/hooks/useScrollIntoViewHandler";
import Link from "next/link";

interface Props {
  hero: HeroType;
}

function Hero({ hero }: Props) {
  const ref = useRef(null);
  const placeholderText = [
    { type: "heading1", text: hero.name, style: "text-6xl font-semibold" },
  ];
  const { selectItem } = useScrollIntoViewHandler();

  useSelectorHandler(ref, 0);

  return (
    <motion.main
      className="container flex flex-col items-center px-0 sm:px-10 lg:flex-row lg:px-10"
      id="about"
      ref={ref}
    >
      <div className="relative w-[90%] flex-col items-center justify-center text-center sm:w-auto lg:w-[45%] lg:pt-0 lg:text-left xl:w-[50%]">
        <h1 className="text-2xl font-semibold text-gray-400">Hi, I'm</h1>
        <motion.div
          className="App"
          initial="hidden"
          animate={"visible"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.025,
              },
            },
          }}
        >
          {placeholderText.map((item, index) => {
            return (
              <AnimateText
                {...item}
                key={index}
                hiddenColor="#d946ef"
                visibleColor="rgb(99, 102,  241)"
                className="text-[40px] font-semibold sm:text-6xl"
              />
            );
          })}
        </motion.div>
        <p className="mx-auto mb-5 mt-0 max-w-lg flex-row font-code text-base text-gray-500 sm:mx-0 sm:mt-1 lg:mb-4 lg:mt-0">
          {"<"}
          <span className="text-indigo-500">sujay</span>
          {">"}
          <Typewriter words={hero.tags} loop={1} typeSpeed={7} cursor />
          {"</"}
          <span className="text-indigo-500">sujay</span>
          {">"}
        </p>

        <div className="mx-auto flex w-[90vw] max-w-72 space-x-3 sm:w-[80%] sm:max-w-none lg:mx-0 lg:mt-3 lg:w-[60%] xl:w-[55%] xl:space-x-5">
          <button
            onClick={() => selectItem("profile", 1)}
            className="h-11 flex-1 rounded-2xl bg-indigo-500 text-sm font-semibold text-white shadow-2xl dark:bg-indigo-700 sm:h-auto"
          >
            View Profile
          </button>
          <Link
            href={hero.resumePdf}
            target="_blank"
            className="slide-btn group flex h-11 flex-1 items-center justify-center rounded-2xl text-sm font-semibold text-indigo-500 sm:h-14"
          >
            View Resume
            <span className="slide-main" />
          </Link>
        </div>
      </div>

      <div className="relative mt-20 items-center justify-center sm:w-full sm:max-w-lg lg:mt-0 lg:w-[60%] lg:max-w-none xl:flex-1">
        <div className="relative flex items-center justify-center lg:ml-[30%]">
          <div className="relative h-[230px] w-[230px] animate-heroImage rounded-full shadow-2xl sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src={urlForImage(hero.profile)}
              fill={true}
              className="rounded-full object-cover"
              priority={true}
              fetchPriority="high"
              alt={hero.name}
            />
          </div>
          <div className="hero_imageBorder h-[350px] w-[350px] lg:h-[450px] lg:w-[450px]" />
          <div className="hero_imageBorder h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]" />
        </div>

        <div className="absolute -left-[25px] -top-6 -z-10 h-[280px] w-[280px] overflow-hidden rounded-full sm:-bottom-16 sm:left-[3%] sm:h-[350px] sm:w-[350px] lg:left-[9%] lg:top-5 lg:h-[450px] lg:w-[450px] xl:left-[10%]">
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute -z-10 h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            <div className="h-[91%] w-[91%] rounded-full bg-white dark:bg-[#13192d] sm:h-[82%] sm:w-[82%]" />
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default Hero;
