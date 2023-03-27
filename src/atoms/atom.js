import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const productAtom = atom({
  key: "product",
  default: null,
});

export const productDetailAtom = atom({
  key: "productDetail",
  default: null,
});

export const sizeAtom = atom({
  key: "size",
  default: null,
});

export const paramAtom = atom({
  key: "param",
  default: 1,
});

export const sizeStateAtom = atom({
  key: "sizeState",
  default: "모든 사이즈",
});

export const isToggleAtom = atom({
  key: "isToggle",
  default: false,
});

const { persistAtom } = recoilPersist({
  key: "내맘대로 정하는 키 이름",
  storage: sessionStorage,
});

export const userAtom = atom({
  key: "user",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const tokenAtom = atom({
  key: "token",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
