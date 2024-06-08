import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "darkModeAtom", // this key is using to store data in local storage
});

export const themeAtom = atom({
  key: "themeAtom",
  default: "dark",
  effects_UNSTABLE: [persistAtom],
});
