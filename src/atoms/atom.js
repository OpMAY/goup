import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

export const isToggleAtom = atom({
    key : 'isToggle',
    default: 0
})

export const isLoggedInAtom = atom({
    key : 'isLoggedIn',
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