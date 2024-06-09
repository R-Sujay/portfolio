import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import Svg from "@/public/Logo.svg";
import Image from "next/image";
import { InlineSvgPreviewComponent } from "@/sanity/lib/sanitySVGPlugin";

function ProfileItem({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex h-3/4 min-w-36 max-w-min flex-col items-center justify-center space-y-2 rounded-3xl bg-gray-100 px-5 py-10 text-gray-700 dark:bg-secondary dark:text-white sm:h-1/2 sm:min-w-44 sm:px-5 sm:py-20 lg:max-h-52 lg:py-0 xl:max-w-[0px]">
      <InlineSvgPreviewComponent
        value={icon}
        className="h-8 w-8 sm:h-16 sm:w-16"
      />
      <span className="w-full text-center text-sm sm:text-xl">{title}</span>
    </div>
  );
}

export default ProfileItem;
