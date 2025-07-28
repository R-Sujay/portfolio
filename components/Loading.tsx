"use client";

import React from "react";
import Lottie from "lottie-react";
import paperplaneAnimation from "@/public/paperplane-loading.json";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-dark">
      <div className="scale-125">
        <Lottie
          animationData={paperplaneAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
}

export default Loading;
