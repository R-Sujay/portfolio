import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import Svg from "@/public/Logo.svg";
import Image from "next/image";
import { InlineSvgPreviewComponent } from "@/sanity/lib/sanitySVGPlugin";

function ProfileItem({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="profileIcon">
      <InlineSvgPreviewComponent value={icon} className="h-16 w-16" />
      <span className="w-full text-center text-xl">{title}</span>
    </div>
  );
}

export default ProfileItem;
