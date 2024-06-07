"use client";

import React from "react";
import { CircleLoader } from "react-awesome-loaders";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <CircleLoader
        meshColor={"#4a4949"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"100%"}
        mobileSize={"64px"}
      />
    </div>
  );
}

export default Loading;
