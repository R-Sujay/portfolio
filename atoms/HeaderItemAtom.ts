import items from "@/HeaderItemsData";
import { atom } from "recoil";

export const selectedAtom = atom({
  key: "selectedAtom",
  default: items[0].id,
});

export const isSelectingAtom = atom({
  key: "isSelectingAtom",
  default: false,
});
