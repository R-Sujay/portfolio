import React from "react";

interface Props {
  className: string;
}

function BarLoader({ className }: Props) {
  return (
    <div className={`rotate-90 ${className}`}>
      <div className="relative flex h-[6px] w-[100px] transform-gpu items-center justify-center overflow-hidden rounded-[3px]">
        <div className="barLoader absolute left-0 top-0 opacity-10" />
        <div className="barLoader animate-barWobble rounded-[3px]" />
      </div>
    </div>
  );
}

export default BarLoader;
