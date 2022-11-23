import { atom } from "recoil";

export const counting = atom({
  key: "counting",
  default: [],
});

export const team = atom({
  key: "team",
  default: "",
});
