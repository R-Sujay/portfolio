import { HeroType } from "@/typings";
import { PortableText } from "next-sanity";
import React from "react";

interface Props {
  hero: HeroType;
}

function Footer({ hero }: Props) {
  return (
    <div className="container mt-0 h-[50vh] max-w-full bg-indigo-100/40 px-5 py-8 dark:bg-[#19223c]">
      <div className="mx-auto flex w-full max-w-7xl">
        <div className="space-y-2">
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-400">
              Location
            </h1>
            <h1>{hero.location}</h1>
          </div>
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-400">
              Email Address
            </h1>
            <h1>{hero.emailAdd}</h1>
          </div>
          <div className="">
            <h1 className="font-code text-2xl font-bold text-indigo-400">
              Status
            </h1>
            <h1>{hero.status}</h1>
          </div>
        </div>
        <div className="flex-1">
          <PortableText value={hero.desc} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
