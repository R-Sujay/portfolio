"use client";

import React from "react";
import CircleLoader from "./CircleLoader";
// import { CircleLoader } from "react-awesome-loaders";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-dark">
      <CircleLoader
        meshColor={"#e8e8e8"}
        lightColor={"#ffffff"}
        duration={1.5}
        desktopSize={"100%"}
        mobileSize={"64px"}
      />
    </div>
  );
}

export default Loading;
