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

interface Props {
  services: ServicesType;
}

function Services({ services }: Props) {
  const ref = useRef(null);

  useSelectorHandler(ref, 3);

  const data = [
    {
      Icon: (
        <HiSquaresPlus className="ml-1 h-[70px] w-[60px] sm:h-[65px] sm:w-[60px] md:h-[80px] md:w-[75px]" />
      ),
      title: "Mobile App Design",
      desc: services.mobile,
    },
    {
      Icon: (
        <MdPhonelink className="h-[66px] w-[73px] pl-3 sm:mb-10 md:h-[80px] md:w-[87px]" />
      ),
      title: "Responsive Web Website",
      desc: services.web,
    },
    {
      Icon: (
        <RiDashboardHorizontalFill className="h-[70px] w-[60px] pl-2 sm:h-[65px] sm:w-[70px] md:h-[80px] md:w-[75px] md:pl-0" />
      ),
      title: "Dashboard Design",
      desc: services.dashboard,
    },
  ];

  return (
    <motion.div
      className="container relative flex flex-col items-center justify-between space-x-3 bg-indigo-100/40 px-0 pb-14 pr-3 dark:bg-[#19223c] sm:flex-row md:space-x-5 md:pr-5 lg:space-x-4 lg:pb-0 lg:pr-4 xl:space-x-5 xl:pr-5"
      id="services"
      ref={ref}
    >
      <div className="flex max-h-[250px] w-full items-center justify-center pl-5 sm:absolute sm:top-5 md:max-h-[300px] lg:relative lg:h-[60vh] lg:w-[30%] lg:rounded-r-full lg:bg-white lg:shadow-lg lg:dark:bg-[#13192d] xl:relative xl:w-[35%] xl:pl-0">
        <BarLoader className="hidden lg:block" />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-500 md:text-4xl">
            Top <span className="text-indigo-500">Services</span>
          </h1>
          <h1 className="mt-3 text-xs text-gray-400 md:text-sm lg:w-[70%]">
            {services.desc}
          </h1>
        </div>
      </div>

      {data.map((item, i) => (
        <div
          key={i}
          className="mx-auto mt-5 h-[60vh] max-h-[250px] max-w-sm flex-1 rounded-3xl bg-white px-3 pb-5 pt-3 text-[#313e64] dark:bg-[#13192d] sm:mt-20 sm:max-w-max sm:px-3 sm:py-3 md:mt-24 md:max-h-[300px] lg:mt-0 xl:px-5"
        >
          <div className="h-[31%]">{item.Icon}</div>
          <div className="px-3">
            <h1 className="font-code text-lg leading-6 tracking-wide text-gray-100 sm:w-[81%] sm:text-lg md:text-2xl lg:w-[89%] xl:w-full xl:text-[26px] xl:leading-8 xl:tracking-widest">
              {item.title}
            </h1>
            <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Services;
