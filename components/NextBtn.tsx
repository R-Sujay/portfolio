"use client";

import items from "@/HeaderItemsData";
import { selectedAtom } from "@/atoms/HeaderItem";
import React, { useEffect, useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { useRecoilState } from "recoil";

function NextBtn() {
  const [selected, setSelected] = useRecoilState(selectedAtom);
  const [nextSelectedItem, setNextSelectedItem] = useState<any>(items[0]);
  const lastArrayIndex = items.length - 1;

  useEffect(() => {
    const nextSection = selected + 1;
    const searchResults = items.filter((item) => item.id?.toString().startsWith(nextSection.toPrecision()));

    if (selected === lastArrayIndex) {
      setNextSelectedItem(items[0]);
    } else {
      setNextSelectedItem(searchResults[0]);
    }
  }, [selected]);

  const item = () => {
    setSelected(nextSelectedItem.id);
  };

  return (
    <ScrollIntoView onClick={item} selector={`#${nextSelectedItem?.text.toLocaleLowerCase()}`} className="fixed top-[85%] right-[50%] left-[50%] z-50 animate-spinBounce delay-700">
      <a className="slide-btn">
        <span className={`left-arm ${selected === lastArrayIndex ? "top-left-arm" : ""}`} />
        <span className={`right-arm ${selected === lastArrayIndex ? "top-right-arm" : ""}`} />
        <span className="slide-main" />
      </a>
    </ScrollIntoView>
  );
}

export default NextBtn;