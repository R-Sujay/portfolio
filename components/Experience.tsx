"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRecoilState } from "recoil";
import { selectedAtom } from "@/atoms/HeaderItem";
import { MdPhonelink } from "react-icons/md";
import { HiSquaresPlus } from "react-icons/hi2";
import { RiDashboardHorizontalFill } from "react-icons/ri";

const data = [
  {
    Icon: <HiSquaresPlus className="h-[75px] w-[75px]" />,
    title: "Mobile App Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui.",
  },
  {
    Icon: <MdPhonelink className="h-[73px] w-[85px] pl-3" />,
    title: "Responsive Web Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui.",
  },
  {
    Icon: <RiDashboardHorizontalFill className="h-[75px] w-[75px]" />,
    title: "Dashboard Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui.",
  },
];

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selected, setSelected] = useRecoilState(selectedAtom);

  useEffect(() => {
    if (isInView) {
      setSelected(2);
    }
  }, [isInView]);

  return (
    <div
      className="container flex items-center justify-between bg-indigo-100/40 px-0 dark:bg-[#19223c]"
      ref={ref}
      id="experience"
    >
      <div className="relative flex h-[50%] w-[35%] items-center justify-end rounded-r-full bg-white pr-2 shadow-lg dark:bg-[#13192d]">
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
          <h1 className="text-gray-500">
            Top <span className="text-indigo-500">Services</span>
          </h1>
          <h1 className="mt-3 w-[60%] text-sm font-normal text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </div>

      <div className="relative mx-5 flex h-[50%] flex-1 items-center justify-center space-x-5">
        {data.map((item) => (
          <div className="h-full flex-1 rounded-3xl bg-white px-5 py-3 text-[#313e64] dark:bg-[#13192d]">
            {item.Icon}
            <div className="px-3">
              <h1 className="font-code text-[26px] tracking-widest text-gray-100">
                {item.title}
              </h1>
              <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
