"use client";

import items, { item } from "@/HeaderItemsData";
import { selectedAtom } from "@/atoms/HeaderItemAtom";
import { useScrollIntoViewHandler } from "@/hooks/useScrollIntoViewHandler";
import React, { useEffect, useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { useRecoilState, useRecoilValue } from "recoil";

function NextBtn() {
  const selected = useRecoilValue(selectedAtom);
  const lastArrayIndex = items.length - 1;
  const nextSection = selected + 1;
  const { selectItem } = useScrollIntoViewHandler();

  const item = () => {
    const searchResults = items.find((item) => item.id === nextSection);
    const nextSelectedItem =
      selected === lastArrayIndex ? items[0] : searchResults;

    if (nextSelectedItem) {
      console.log(nextSelectedItem);

      selectItem(nextSelectedItem.text, nextSelectedItem.id);
    }
  };

  return (
    <div
      onClick={item}
      className="fixed left-[50%] right-[50%] top-[85%] z-50 animate-spinBounce delay-700"
    >
      <a className="slide-btn group h-10 w-10">
        <span
          className={`left-arm ${selected === lastArrayIndex ? "top-left-arm" : ""}`}
        />
        <span
          className={`right-arm ${selected === lastArrayIndex ? "top-right-arm" : ""}`}
        />
        <span className="slide-main" />
      </a>
    </div>
  );
}

export default NextBtn;
