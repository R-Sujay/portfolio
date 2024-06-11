"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ProjectsType } from "@/typings";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";
import ProjectMobile from "./ProjectMobile";
import ProjectWeb from "./ProjectWeb";

interface Props {
  projects: ProjectsType;
}

function Projects({ projects }: Props) {
  const ref = useRef(null);

  useSelectorHandler(ref, 4);

  return (
    <div
      className="container ml-2 flex snap-x snap-mandatory items-center justify-start space-x-1 overflow-x-scroll px-5 py-5 scrollbar-hide sm:-space-x-24 sm:px-10 md:space-x-5 md:px-5 lg:mx-auto lg:px-10"
      id="projects"
      ref={ref}
    >
      {projects.map((item) => {
        const props = { project: item };

        return item.isMobile ? (
          <ProjectMobile key={item.id} {...props} />
        ) : (
          <ProjectWeb key={item.id} {...props} />
        );
      })}
    </div>
  );
}

export default Projects;
