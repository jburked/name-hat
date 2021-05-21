import { atom } from "jotai";
import { Item } from "./types";

export const nameAtom = atom("");
export const listAtom = atom<string[]>([]);
export const inTheMixAtom = atom(false);
export const chosenAtom = atom("");
export const helperAtom = atom(false);
export const changingButtonAtom = atom("");
export const titleAtom = atom("");
export const openDialogAtom = atom(false);
export const itemListAtom = atom<Item[]>([]);
export const itemAtom = atom({
  value: "",
  inTheMix: false,
});
export const getChosenItem = () => "";
export const handleClick = () => {};
