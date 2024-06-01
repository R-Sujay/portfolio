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
      className="container max-w-7xl !snap-none space-y-5 py-5"
      id="projects"
      ref={ref}
    >
      {projects.map((item, i) => (
        <Link
          href={item.URL}
          target="_blank"
          className="flex items-start justify-between"
          key={i}
        >
          <div className="relative flex h-[385px] w-[44%] flex-col items-start  justify-between py-10">
            <div className="pl-14">
              <h1 className="text-xs font-semibold text-gray-400">
                Latest Project <span className="text-indigo-500">#{i + 1}</span>
              </h1>
              <h1 className="text-4xl font-semibold text-indigo-600">
                {item.title}
              </h1>
            </div>
            <motion.div
              className="absolute left-14 top-28 z-50 line-clamp-5 h-40 overflow-hidden rounded-lg bg-[#eeeffc] py-5 pl-7 pr-4 text-gray-400 dark:bg-[#19223c]"
              initial={{ width: 0 }}
              whileInView={{ width: "98%" }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
            >
              <PortableText value={item.bio} />
            </motion.div>
            <div className="pl-14">
              <div className="flex space-x-4 font-code text-gray-600 dark:text-gray-400">
                {item.tech.map((tech, i) => (
                  <h1 key={i}>{tech.title}</h1>
                ))}
              </div>
              <div className="flex items-center space-x-5 pt-2 text-gray-600 dark:text-gray-200">
                <FaArrowUpRightFromSquare className="h-7 w-7 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="relative h-96 w-full flex-1 opacity-80 dark:opacity-75 ">
            <Image
              src={urlForImage(item.image)}
              alt=""
              fill={true}
              className="rounded-xl object-cover"
            />
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

export default Projects;
