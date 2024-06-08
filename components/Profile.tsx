"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { HeroType, ProfileType } from "@/typings";
import { MdOutlineTimer } from "react-icons/md";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";
import { PortableText } from "next-sanity";
import { MdHandshake } from "react-icons/md";
import ProfileItem from "./ProfileIcon";
// import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/ext-language_tools";

interface Props {
  profile: ProfileType;
}

function Profile({ profile }: Props) {
  const ref = useRef(null);
  const services = profile.services;
  const [firstHalf, secondHalf] = [services.slice(0, 2), services.slice(2)];

  useSelectorHandler(ref, 1);

  return (
    <motion.div
      className="container relative h-min max-w-5xl sm:h-full lg:h-[87vh] lg:max-h-[87vh]"
      id="profile"
      ref={ref}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-between sm:max-h-[330px] sm:flex-row lg:max-h-96">
          <div className="relative flex h-full flex-col sm:w-[68%] sm:justify-center sm:space-y-5 sm:pl-7 md:w-[55%] lg:pl-0">
            <h1 className="mx-auto flex text-3xl font-semibold text-gray-500 dark:text-darkGrey sm:mx-0 lg:text-5xl">
              My
              <span className="pl-2 font-semibold text-black dark:text-white">
                Profile
              </span>
            </h1>
            <motion.div className=":text-sm z-50 mt-3 overflow-hidden rounded-xl bg-secondary text-sm text-gray-500 lg:mb-9 lg:text-base">
              {/* <AceEditor
                mode="java"
                theme="github"
                // onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
              /> */}
              {/* , */}
              {/* <PortableText value={profile.desc} /> */}
            </motion.div>
          </div>

          <div className="relative z-50 flex h-full flex-1 space-x-10 pl-5 text-2xl font-semibold text-gray-700 dark:text-white">
            <div className="absolute right-[20%] top-1/4 -z-50 h-1/2 w-1/2 border-[6px] border-gray-100 dark:border-secondary" />

            <div className="profileIconContainer">
              {firstHalf.map((item) => (
                <ProfileItem icon={item.icon} title={item.title} />
              ))}
            </div>

            <div className="profileIconContainer mt-5">
              {secondHalf.map((item) => (
                <ProfileItem icon={item.icon} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
