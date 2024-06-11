"use client";

import { themeAtom } from "@/atoms/Theme";
import { Children } from "@/typings";
import React, { useEffect, useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import Loading from "./Loading";
import { Analytics } from "@vercel/analytics/react";

function Provider({ children }: Children) {
  const theme = useRecoilValue<string>(themeAtom);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className={theme === "dark" ? "dark" : ""}>{children}</div>
  ) : (
    <Loading />
  );
}

export function ThemeProvider({ children }: Children) {
  return (
    <RecoilRoot>
      <Provider>{children}</Provider>
      {/* <Analytics mode={"production"} />; */}
    </RecoilRoot>
  );
}
