import { atom } from "recoil";
import items from "../HeaderItemsData";

export const selectedAtom = atom({
        key: "selectedAtom",
        default: items[0].id,
});
