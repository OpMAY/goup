import React, {useEffect, useState} from 'react'
import ItemAll from '../component/Shop/ItemAll';
import {useRecoilState} from "recoil";
import {tokenAtom, productAtom, modalOpenAtom, loadingAtom, productTotalCountAtom, urlParamsAtom} from "../atoms/atom";
import {axiosGetFunction} from "../module/CustomAxios";
import SizeModal from "../component/Shop/SizeModal";


const Shop = () => {
    const [token, setToken] = useRecoilState(tokenAtom);
    const [product, setProduct] = useRecoilState(productAtom)
    const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
    const [loading, setLoading] = useRecoilState(loadingAtom);
    const [productTotalCount, setProductTotalCount] = useRecoilState(productTotalCountAtom);
    const [urlParams, setUrlParams] = useRecoilState(urlParamsAtom);
    const [brandP, setBrandsP] = useState([]);

    useEffect(() => {
        // 1. 파라미터 분석한거 기준으로 필터 체크 박스에 스테이트 넣는거
        // 2. 체크된 값 기준으로 기존에 체크된 값은 유지하고 새로 체크한 부븐은 파라미터로 추가
        // 3. 파라미터 분석한걸로 데이터 불러오기, 리로딩도 포함
        // 4. 클릭할때마다 url (이동 2번 이후로 할 행동)
        setLoading(true);
        const urlStr = window.location.search;
        const params = new URLSearchParams(urlStr);
        console.log('brands', params.get('brands'))
        console.log('categories', params.get('categories'))
        console.log('gender', params.get('gender'))
        console.log('price', params.get('price'))
        const brandsParams = params.get('brands').split(',');
        console.log(brandsParams)
        setBrandsP([...brandsParams]);
        console.log(brandP)



        // 파라미터 분석 후 getFunction에 파라미터를 넣는다
        axiosGetFunction('/api/kream/product/shop', {
            brands: '',
            // genders: '', // 성별
            // categories: '', // 카테고리
            // keyword: '', // 검색어
            // size_list: '', // 사이즈
            // price: '', // 금액
        }, token, setToken).then((res) => {
            setProductTotalCount(res.data.data.count);
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
