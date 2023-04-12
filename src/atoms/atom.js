import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

export const productAtom = atom({
    key: "product",
    default: [],
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

export const bookMarkToggleAtom = atom({
    key: 'bookMarkToggle',
    default: false
})

const {persistAtom} = recoilPersist({
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


export const modalOpenAtom = atom({
    key: "open",
    default: false
})

export const modalProductAtom = atom({
    key: "modalProduct",
    default: null
})

export const loadingAtom = atom({
    key: 'loading',
    default: false
})

export const needLoadingAtom = atom({
    key: 'needLoading',
    default: true
})

export const elementLoadingHeightAtom = atom({
    key : 'elementLoadingHeight',
    default: 0
})

export const productCursorAtom = atom({
    key : 'productCursor',
    default : 1
})

export const productTotalCountAtom = atom({
    key : 'productTotalCount',
    default : 0
})

export const userAddressAtom = atom({
    key : 'userAddress',
    default : []
})

export const userPointAtom = atom({
    key : 'userPoint',
    default : []
})

export const productSellAtom = atom({
    key : 'productSell',
    default : []
})

export const productPurchaseAtom = atom({
    key : 'productPurchase',
    default : []
})

export const productOrderAtom = atom({
    key : 'productOrder',
    default : []
})

export const wishPriceAtom = atom({
    key : 'wishPrice',
    default : ""
})
