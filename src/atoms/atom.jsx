import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist({
    key: "내맘대로 정하는 키 이름",
    storage: sessionStorage,
});

export const productAtom = atom({
    key: "product",
    default: [],
});

// [Detail] 해당 상품의 디테일 정보
export const productDetailAtom = atom({
    key: "productDetail",
    default: null,
});

// [Detail] 해당 상품의 사이즈 디테일 정보
export const sizeAtom = atom({
    key: "size",
    default: null,
});

// 파라미터
export const paramAtom = atom({
    key: "param",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

export const filterChangeAtom = atom({
    key: 'filterChangeAtom',
    default : false
})

export const sizeStateAtom = atom({
    key: "sizeState",
    default: null,
});

export const priceStateAtom = atom({
    key: 'priceState',
    default: null
})

export const isToggleAtom = atom({
    key: "isToggle",
    default: false,
});

export const bookMarkToggleAtom = atom({
    key: 'bookMarkToggle',
    default: false
})

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

export const urlParamsAtom = atom({
    key: 'urlParams',
    default : null
})

export const shopAxiosFilterAtom = atom({
    key : 'shopAxiosFilter',
    default : {}
})

export const shopInputFilterAtom = atom({
    key: 'shopInputFilter',
    default : {}
})

export const bannerAtom = atom({
    key : 'banner',
    default: []
})

export const mainItemAtom = atom({
    key: 'mainItem',
    default : {
        droppedProducts: [],
        popularProducts: [],
        recommendBrands: [],
    }
})

// [Detail or My] 유저의 주소 상황
export const userAddressAtom = atom({
    key : 'userAddress',
    default : []
})

// [Detail or My] 유저의 포인트 상황
export const userPointAtom = atom({
    key : 'userPoint',
    default : []
})

// [Detail] 해당 상품을 판매중인지 (가격, 사이즈별)
export const productSellAtom = atom({
    key : 'productSell',
    default : []
})

// [Detail] 해당 상품을 구매중인지 (가격, 사이즈별)
export const productPurchaseAtom = atom({
    key : 'productPurchase',
    default : []
})

export const productOrderAtom = atom({
    key : 'productOrder',
    default : []
})

// [Detail - Order] 구매 or 판매하기 원하는 가격
export const wishPriceAtom = atom({
    key : 'wishPrice',
    default : ""
})

export const checkAtom = atom({
    key : 'check',
    default: [],
})

// [Notice] 고객센터 모든 질문답변들
export const qnaAtom = atom({
    key : 'qna',
    default : []
})

// [Notice] 모든 공지사항들
export const NoticeAtom = atom({
    key : 'notice',
    default : []
})

// [Detail - Order] 오더 페이지 (입찰-즉시) 토글 상태
export const orderToggleAtom = atom({
    key : "state",
    default : "1"
})

export const profileAtom = atom({
    key : 'profile',
    default: null
})

// [My] 유저 계좌 정보
export const userAccountAtom = atom({
    key : "account",
    default : null
})

export const typeAtom = atom({
    key: 'type',
    default: null
})