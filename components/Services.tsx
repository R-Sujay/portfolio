"use client";

import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { MdPhonelink } from "react-icons/md";
import { HiSquaresPlus } from "react-icons/hi2";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { ServicesType } from "@/typings";
import "ldrs/lineWobble";
import BarLoader from "./BarLoader";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";
import { InlineSvgPreviewComponent } from "@/sanity/lib/sanitySVGPlugin";

interface Props {
  services: ServicesType;
}

function Services({ services }: Props) {
  const ref = useRef(null);

  useSelectorHandler(ref, 3);

  return (
    <motion.div
      className="container relative flex flex-col items-center justify-between space-x-3 bg-gray-100/60 px-0 pb-14 pr-3 dark:bg-secondary sm:flex-row md:space-x-5 md:pr-5 lg:space-x-4 lg:pb-0 lg:pr-4 xl:space-x-5 xl:pr-5"
      id="services"
      ref={ref}
    >
      <div className="ml-3 flex max-h-[250px] w-full items-center justify-center sm:absolute sm:top-5 md:max-h-[300px] lg:relative lg:ml-0 lg:h-[400px] lg:w-[30%] lg:rounded-r-full lg:bg-white lg:shadow-lg lg:dark:bg-dark xl:relative xl:w-[35%] xl:pl-0 custombp:lg:h-[60vh]">
        <div className="absolute -left-2 hidden h-full w-10 bg-white dark:bg-dark xl:block" />

        <BarLoader className="mb-10 hidden w-16 lg:block xl:mb-0 xl:w-auto" />
        <div className="mx-auto text-center lg:text-left">
          {/* <h1 className="text-3xl font-bold text-gray-500 md:text-4xl"> */}
          <h1 className="text-3xl font-bold text-gray-500 dark:text-darkGrey md:text-4xl lg:text-3xl xl:text-4xl">
            Top <span className="text-black dark:text-white">Services</span>
          </h1>
          <h1 className="mx-auto mt-3 w-[90%] text-center text-xs text-gray-400 md:text-sm lg:mx-0 lg:text-left xl:w-[70%]">
            {services.desc}
          </h1>
        </div>
      </div>

      {services.serviceItems.map((item, i) => (
        <div
          key={i}
          className="mx-auto mt-5 h-[400px] max-h-[250px] max-w-sm flex-1 rounded-3xl bg-white px-3 pb-5 pt-3 text-black shadow-md dark:bg-dark dark:text-white sm:mt-24 sm:max-w-max sm:px-3 sm:py-3 md:mt-28 md:max-h-[300px] lg:mt-0 xl:px-5 custombp:h-[60vh]"
        >
          <div className="h-[31%]">
            <InlineSvgPreviewComponent
              value={item.icon}
              className={item.iconClassName}
            />
          </div>
          <div className="px-3">
            <h1 className="font-code text-lg leading-6 tracking-wide text-black dark:text-white sm:w-[81%] sm:text-lg md:text-2xl lg:w-[89%] xl:w-full xl:text-[26px] xl:leading-8 xl:tracking-widest">
              {item.title}
            </h1>
            <p className="mt-2 text-sm text-gray-400 sm:text-xs md:text-sm">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Services;
