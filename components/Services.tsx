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
      Icon: <HiSquaresPlus className="h-[75px] w-[75px]" />,
      title: "Mobile App Design",
      desc: services.mobile,
    },
    {
      Icon: <MdPhonelink className="h-[73px] w-[85px] pl-3" />,
      title: "Responsive Web Website",
      desc: services.web,
    },
    {
      Icon: <RiDashboardHorizontalFill className="h-[75px] w-[75px]" />,
      title: "Dashboard Design",
      desc: services.dashboard,
    },
  ];

  return (
    <motion.div
      className="container flex items-center justify-between bg-indigo-100/40 px-0 dark:bg-[#19223c]"
      id="services"
      ref={ref}
    >
      <div className="relative flex h-[50%] w-[35%] items-center justify-end rounded-r-full bg-white pr-2 shadow-lg dark:bg-[#13192d]">
        <BarLoader />
        <div className="text-4xl font-bold">
          <h1 className="text-gray-500">
            Top <span className="text-indigo-500">Services</span>
          </h1>
          <h1 className="mt-3 w-[70%] text-sm font-normal text-gray-400">
            {services.desc}
          </h1>
        </div>
      </div>

      <div className="relative mx-5 flex h-[50%] flex-1 items-center justify-center space-x-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="h-full flex-1 rounded-3xl bg-white px-5 py-3 text-[#313e64] dark:bg-[#13192d]"
          >
            {item.Icon}
            <div className="px-3">
              <h1 className="font-code text-[26px] leading-8 tracking-widest text-gray-100">
                {item.title}
              </h1>
              <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
