import { selectedAtom } from "@/atoms/HeaderItemAtom";
import { useSetRecoilState } from "recoil";

export const useScrollSelectHandler = (id: string, selectorId: number) => {
  const setSelected = useSetRecoilState(selectedAtom);

  const targetElement = document.getElementById(id.toLocaleLowerCase());
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  setSelected(selectorId);

  return;
};
