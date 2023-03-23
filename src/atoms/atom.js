import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

export const productAtom = atom({
    key : 'product',
    default: null
})

export const isToggleAtom = atom({
    key : 'isToggle',
    default: false
})

const { persistAtom } = recoilPersist({
    key: '내맘대로 정하는 키 이름',
    storage: sessionStorage,
});

export const userAtom = atom({
    key : 'user',
    default: null,
    effects_UNSTABLE: [persistAtom],
})

export const tokenAtom = atom({
    key : 'token',
    default : null,
    effects_UNSTABLE: [persistAtom]
})
