import React from "react";
import { urlForImage } from "@/sanity/lib/asset";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import { ProjectType } from "@/typings";

type Project = { project: ProjectType };

function ProjectMobile({ project }: Project) {
  return (
    <Link
      href={project.URL ? project.URL : ""}
      target="_blank"
      className="relative flex h-[400px] w-[100%] max-w-lg flex-shrink-0 snap-center snap-always flex-col items-center justify-between pl-0 sm:h-[385px] sm:w-[100%] sm:max-w-6xl sm:flex-row sm:pl-5 md:w-[75%] md:pl-0 lg:px-8 xl:w-[70%] xl:px-10"
    >
      <div className="flex w-full flex-col items-center justify-between space-y-3 text-center sm:absolute sm:w-[70%] sm:items-start sm:py-10 sm:text-left">
        <div>
          <h1 className="text-xs font-semibold text-gray-500 dark:text-darkGrey">
            Latest Project{" "}
            <span className="text-black dark:text-white">#{project.id}</span>
          </h1>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            {project.title}
          </h1>
        </div>

        <div className="flex space-x-2 font-code text-[11px] text-gray-600 dark:text-gray-400 sm:text-xs md:text-sm lg:space-x-3 lg:text-base">
          {project.tech.map((tech, i) => (
            <h1 key={i}>{tech.title}</h1>
          ))}
        </div>

        <div className="z-50 h-min w-[100%] rounded-3xl bg-gray-100 py-4 pl-5 pr-2 text-xs text-gray-500 dark:bg-secondary dark:text-darkGrey sm:w-[100%] sm:text-sm md:w-[110%] lg:max-h-48 lg:w-[105%] lg:py-5 lg:pl-7 lg:pr-4 lg:text-base xl:max-h-44 xl:w-[100%]">
          <PortableText value={project.bio} />
        </div>
      </div>

      <div className="absolute bottom-0 ml-auto mr-0 h-[50%] w-[100%] sm:relative sm:mr-10 sm:h-full sm:w-[28%] md:mr-0 md:w-full md:px-0">
        <div className="relative mx-auto h-full w-full flex-1 dark:opacity-75 md:mx-0 md:ml-auto md:max-w-[30%] lg:max-w-[25%] xl:max-w-[25%]">
          <Image
            src={urlForImage(project.image)}
            alt=""
            fill={true}
            className="rounded-xl object-contain opacity-80"
          />
          <div className="absolute bottom-5 left-5 h-min rounded-full bg-black p-2 sm:left-auto sm:right-[13%] sm:top-6 lg:right-[8%] xl:right-5">
            <FaArrowUpRightFromSquare className="h-4 w-4 cursor-pointer text-white dark:text-gray-100" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectMobile;
