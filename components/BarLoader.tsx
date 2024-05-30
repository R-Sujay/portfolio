import React from "react";

function BarLoader() {
  return (
    <div className="rotate-90">
      <div className="relative flex h-[6px] w-[100px] transform-gpu items-center justify-center overflow-hidden rounded-[3px]">
        <div className="barLoader absolute left-0 top-0 opacity-10" />
        <div className="animate-barWobble barLoader rounded-[3px]" />
      </div>
    </div>
  );
}

export default BarLoader;
