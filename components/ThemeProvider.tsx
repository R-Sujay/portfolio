"use client";

import { themeAtom } from "@/atoms/Theme";
import { Children } from "@/typings";
import React, { useEffect, useRef } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";

function Provider({ children }: Children) {
  const theme = useRecoilValue<string>(themeAtom);
  const mainRef = useRef<null | any>(null);

  useEffect(() => {
    if (theme.valueOf() === "dark") {
      mainRef?.current.classList.add("dark");
    } else {
      mainRef?.current.classList.remove("dark");
    }
  }, [theme, mainRef]);

  return <div ref={mainRef}>{children}</div>;
}

export function ThemeProvider({ children }: Children) {
  return (
    <RecoilRoot>
      <Provider>{children}</Provider>
    </RecoilRoot>
  );
}
