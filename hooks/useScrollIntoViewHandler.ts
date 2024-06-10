import { isSelectingAtom, selectedAtom } from "@/atoms/HeaderItemAtom";
import { useSetRecoilState } from "recoil";

export const useScrollIntoViewHandler = () => {
  const setSelected = useSetRecoilState(selectedAtom);
  const setIsSelecting = useSetRecoilState(isSelectingAtom);

  const selectItem = (id: string, selectorId: number) => {
    setIsSelecting(true);
    const targetElement = document.getElementById(id.toLocaleLowerCase());
    console.log(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setSelected(selectorId);

    setIsSelecting(false);
  };

  return { selectItem };
};
