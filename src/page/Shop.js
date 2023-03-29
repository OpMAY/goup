import React, {useEffect} from 'react'
import ItemAll from '../component/Shop/ItemAll';
import {useRecoilState} from "recoil";
import {tokenAtom, productAtom, modalOpenAtom, loadingAtom} from "../atoms/atom";
import {axiosGetFunction} from "../module/CustomAxios";
import SizeModal from "../component/Shop/SizeModal";


const Shop = () => {
    const [token, setToken] = useRecoilState(tokenAtom);
    const [product, setProduct] = useRecoilState(productAtom)
    const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
    const [loading, setLoading] = useRecoilState(loadingAtom);

    useEffect(() => {
        setLoading(true);
        axiosGetFunction('/api/kream/product/shop', {
            // brands: '1,2', // 브랜드
            // genders: '', // 성별
            // categories: '', // 카테고리
            // keyword: '', // 검색어
            // size_list: '', // 사이즈
            // price: '', // 금액
        }, token, setToken).then((res) => {
            setProduct(res.data.data.products);
            setLoading(false);
        })
    }, [])
    return (
        <>
            <ItemAll/>
            <SizeModal/>
        </>
    )
}

export default Shop
