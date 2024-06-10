"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Service } from "@/typings";
import { useSelectorHandler } from "@/hooks/useSelectorHandler";
import ProfileItem from "./ProfileIcon";
import Editor from "@monaco-editor/react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "@/atoms/Theme";
import toast from "react-hot-toast";

interface Props {
  services: Service;
  desc: string;
}

function Profile({ services, desc }: Props) {
  const ref = useRef(null);
  const [firstHalf, secondHalf] = [services.slice(0, 2), services.slice(2)];
  const theme = useRecoilValue(themeAtom);

  useSelectorHandler(ref, 1);

  return (
    <motion.div
      className="container relative flex min-h-[600px] max-w-4xl items-start justify-center px-0 sm:px-10 lg:mb-0 lg:max-h-[87vh] lg:max-w-6xl lg:items-center"
      id="profile"
      ref={ref}
    >
      <div className="flex h-full w-full flex-col items-center justify-start lg:max-h-[450px] lg:flex-row lg:justify-between">
        <div className="relative flex h-[300px] w-[90%] flex-col pb-10 sm:w-[78%] sm:justify-center sm:space-y-5 sm:pl-7 md:w-[68%] lg:h-full lg:w-1/2 lg:pl-0 xl:w-[55%]">
          <h1 className="mx-auto mb-1 flex text-4xl font-semibold text-gray-500 dark:text-darkGrey sm:mx-0 lg:text-5xl">
            My
            <span className="pl-2 font-semibold text-black dark:text-white">
              Profile
            </span>
          </h1>

          <div className="z-50 mt-10 h-[160px] rounded-xl bg-gray-100 text-sm text-gray-500 dark:bg-secondary lg:text-base xl:h-[250px]">
            <div className="flex items-center justify-start space-x-2 py-3 pl-5">
              <div className="profileWindowCircles bg-[#e05545]" />
              <div className="profileWindowCircles bg-[#f2d74c]" />
              <div className="profileWindowCircles bg-[#75cd68]" />
            </div>
            <Editor
              defaultLanguage="json"
              theme={theme === "dark" ? "vs-dark" : "light"}
              defaultValue={desc}
              options={{ readOnly: true }}
              className="z-50 h-[200px] max-h-full xl:h-[250px]"
            />
          </div>
        </div>

        <div className="relative z-50 flex h-[150px] w-full justify-end font-semibold sm:w-[80%] sm:pl-6 lg:h-[350px] xl:w-min xl:pl-5">
          <div className="absolute right-[23%] top-16 -z-50 h-[100%] w-[53%] border-[15px] border-gray-100 dark:border-secondary sm:right-[22%] sm:top-[50%] sm:h-[140%] sm:w-[50%] lg:top-1/4 lg:h-1/2 xl:left-auto xl:right-[18%] xl:w-[60%]" />

          <div className="profileIconContainer">
            {firstHalf.map((item) => (
              <ProfileItem icon={item.icon} title={item.title} />
            ))}
          </div>

          <div className="profileIconContainer mt-5 xl:ml-16">
            {secondHalf.map((item) => (
              <ProfileItem icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
