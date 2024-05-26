"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import airbnb from "../public/images/airbnb.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useRecoilState } from "recoil";
import { selectedAtom } from "@/atoms/HeaderItem";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selected, setSelected] = useRecoilState(selectedAtom);

  useEffect(() => {
    if (isInView) {
      setSelected(3);
    }
  }, [isInView]);
  return (
    <div className="container max-w-6xl space-y-10 " ref={ref} id="projects">
      <div className="flex items-start justify-between">
        <div className="relative flex h-[395px] flex-1 flex-col items-start  justify-between py-10">
          <div className="pl-14">
            <h1 className="text-xs font-semibold text-gray-400">
              Feature Project
            </h1>
            <h1 className="text-4xl font-semibold text-indigo-600">Airbnb</h1>
          </div>
          <motion.div
            className="absolute left-14 top-28 z-50 h-40 w-full overflow-hidden rounded-lg bg-[#eeeffc] py-5 pl-7 pr-4 text-gray-400 dark:bg-[#19223c]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
          >
            <p className="line-clamp-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem
              iste sit reiciendis tenetur culpa reprehenderit id ipsam sed
              tempora soluta ad, qui numquam maiores quo, quam consequuntur
              blanditiis voluptas ut, a consequatur deserunt laboriosam sapiente
              nemo? Id asperiores ex deserunt laboriosam vero repellat rerum
              dolorum similique enim consequatur consequuntur quidem doloribus,
              omnis perferendis tenetur aliquid! Molestias praesentium ut
              sapiente dicta repellendus quis rem expedita, eius quaerat culpa?
              Fugiat ratione aperiam blanditiis, animi deserunt totam.
            </p>
          </motion.div>
          <div className="pl-14">
            <div className="flex space-x-4 font-code text-gray-600 dark:text-gray-400">
              <h1>Next.js</h1>
              <h1>React</h1>
              <h1>Tailwind CSS</h1>
              <h1>Calendar Picker</h1>
              <h1>Mapbox</h1>
            </div>
            <div className="flex items-center space-x-5 pt-2 text-gray-600 dark:text-gray-200">
              <FaArrowUpRightFromSquare className="h-7 w-7 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative h-96 w-full flex-1 opacity-80 dark:opacity-75 ">
          <Image
            src={airbnb}
            alt=""
            fill={true}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
