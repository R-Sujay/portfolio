"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ProjectsType } from "@/typings";
import { urlForImage } from "@/sanity/lib/asset";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";

interface Props {
  projects: ProjectsType;
}

function Projects({ projects }: Props) {
  const ref = useRef(null);

  useSelectorHandler(ref, 4);

  return (
    <motion.div
      className="container space-y-5 px-5 py-5 sm:px-10 md:px-7 lg:px-10"
      id="projects"
      ref={ref}
    >
      {projects.map((item, i) => (
        <Link
          href={item.URL}
          target="_blank"
          className="relative mx-auto flex h-[385px] w-full max-w-6xl flex-col items-center justify-between md:h-[385px] md:flex-row lg:px-1 xl:max-w-6xl xl:px-10"
          key={i}
        >
          <div className="flex w-full flex-col items-center justify-between space-y-3 text-center md:absolute md:w-[44%] md:items-start md:py-10 md:text-left">
            <div>
              <h1 className="text-xs font-semibold text-gray-400">
                Latest Project <span className="text-indigo-500">#{i + 1}</span>
              </h1>
              <h1 className="text-4xl font-semibold text-indigo-600">
                {item.title}
              </h1>
            </div>

            <div className="flex space-x-2 font-code text-xs text-gray-600 dark:text-gray-400 sm:text-sm lg:space-x-3 lg:text-base">
              {item.tech.map((tech, i) => (
                <h1 key={i}>{tech.title}</h1>
              ))}
            </div>

            <motion.div
              className="z-50 h-min w-[95%] rounded-3xl bg-[#eeeffc] py-4 pl-5 pr-2 text-xs text-gray-400 dark:bg-[#19223c] sm:w-[60%] sm:text-sm md:w-[110%] lg:max-h-48 lg:w-[105%] lg:py-5 lg:pl-7 lg:pr-4 lg:text-base xl:max-h-44 xl:w-[100%]"
              viewport={{ once: true }}
            >
              <PortableText value={item.bio} />
            </motion.div>
          </div>

          <div className="absolute bottom-0 h-[60%] w-[100%] sm:w-[80%] sm:px-10 md:relative md:h-full md:w-full md:px-0">
            <div className="relative mx-auto h-full w-full flex-1 opacity-80 dark:opacity-75 md:mx-0 md:ml-auto md:max-w-[55%] lg:max-w-[58%] xl:max-w-[60%]">
              <Image
                src={urlForImage(item.image)}
                alt=""
                fill={true}
                className="rounded-xl object-cover"
              />
              <div className="absolute bottom-5 left-5 text-gray-600 dark:text-gray-100 md:left-auto md:right-5 md:top-5">
                <FaArrowUpRightFromSquare className="h-7 w-7 cursor-pointer" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

export default Projects;
