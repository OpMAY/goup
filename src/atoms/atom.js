import {atom} from "recoil";

export const isToggleAtom = atom({
    key : 'isToggle',
    default: 0
})

export const isLoggedInAtom = atom({
    key : 'isLoggedIn',
    default: false
})

export const userAtom = atom({
    key : 'user',
    default: null
})