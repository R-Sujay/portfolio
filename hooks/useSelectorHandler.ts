import { isSelectingAtom, selectedAtom } from "@/atoms/HeaderItemAtom";
import { useInView } from "framer-motion";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function useSelectorHandler(
  ref: React.MutableRefObject<null>,
  item: number,
) {
  const setSelected = useSetRecoilState(selectedAtom);
  const isInView = useInView(ref, {
    amount: "some",
  });
  const isSelecting = useRecoilValue(isSelectingAtom);

  useEffect(() => {
    if (isInView && !isSelecting) {
      setSelected(item);
    }
  }, [isInView]);

  return;
}
