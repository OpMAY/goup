import React, {useEffect, useState} from 'react'
import ItemAll from '../component/Shop/ItemAll';
import {useRecoilState, useRecoilValue} from "recoil";
import {
    tokenAtom,
    productAtom,
    modalOpenAtom,
    loadingAtom,
    productTotalCountAtom,
    urlParamsAtom,
    shopAxiosFilterAtom, shopInputFilterAtom, filterChangeAtom, productCursorAtom
} from "../atoms/atom";
import {axiosGetFunction} from "../module/CustomAxios";
import SizeModal from "../component/Shop/SizeModal";


const Shop = () => {
    const [token, setToken] = useRecoilState(tokenAtom);
    const [product, setProduct] = useRecoilState(productAtom)
    const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);
    const [loading, setLoading] = useRecoilState(loadingAtom);
    const [productTotalCount, setProductTotalCount] = useRecoilState(productTotalCountAtom);
    const [filter, setFilter] = useRecoilState(shopAxiosFilterAtom);
    const [filterChanged, setFilterChanged] = useRecoilState(filterChangeAtom);
    const [cursor, setCursor] = useRecoilState(productCursorAtom);

    useEffect(() => {
        // 1. 파라미터 분석한거 기준으로 필터 체크 박스에 스테이트 넣는거
        // 2. 체크된 값 기준으로 기존에 체크된 값은 유지하고 새로 체크한 부븐은 파라미터로 추가
        // 3. 파라미터 분석한걸로 데이터 불러오기, 리로딩도 포함
        // 4. 클릭할때마다 url (이동 2번 이후로 할 행동)
        setLoading(true);
        const urlStr = window.location.search;
        const params = new URLSearchParams(urlStr);
        const brands = params.get('brands');
        const categories = params.get('categories');
        const gender = params.get('gender');
        const price = params.get('price');
        const size = params.get('size');
        const keyword = params.get('keyword');
        console.log(size);
        const filterObject = {};
        filterObject.brands = brands;
        filterObject.categories = categories;
        filterObject.gender = gender;
        filterObject.price = price;
        filterObject.size_list = size;
        filterObject.keyword = keyword;
        Object.keys(filterObject).forEach(key => {
            if(filterObject[key] === null) {
                delete filterObject[key]
            }
        })
        console.log(filterObject)
        setFilter(filterObject);

        // 필터에 선택한 값 보여주기 위함
        // filter parameter 값에 ,가 있으면 indexOf가 0 이상의 수를 return, 없으면 -1

        // 파라미터 분석 후 getFunction에 파라미터를 넣는다
        axiosGetFunction('/api/kream/product/shop', filterObject, token, setToken).then((res) => {
            console.log(res.data.data.count);
            setProductTotalCount(res.data.data.count);
            setProduct(res.data.data.products);
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        if(filterChanged) {
            console.log('shop')
            // 1. 파라미터 분석한거 기준으로 필터 체크 박스에 스테이트 넣는거
            // 2. 체크된 값 기준으로 기존에 체크된 값은 유지하고 새로 체크한 부븐은 파라미터로 추가
            // 3. 파라미터 분석한걸로 데이터 불러오기, 리로딩도 포함
            // 4. 클릭할때마다 url (이동 2번 이후로 할 행동)
            setLoading(true);
            const urlStr = window.location.search;
            const params = new URLSearchParams(urlStr);
            const brands = params.get('brands');
            const categories = params.get('categories');
            const gender = params.get('gender');
            const price = params.get('price');
            const size = params.get('size');
            const keyword = params.get('keyword');
            const filterObject = {};
            filterObject.brands = brands;
            filterObject.categories = categories;
            filterObject.gender = gender;
            filterObject.price = price;
            filterObject.size_list = size;
            filterObject.keyword = keyword;
            Object.keys(filterObject).forEach(key => {
                if(filterObject[key] === null) {
                    delete filterObject[key]
                }
            })
            setFilter(filterObject);

            // 필터에 선택한 값 보여주기 위함
            // filter parameter 값에 ,가 있으면 indexOf가 0 이상의 수를 return, 없으면 -1

            // 파라미터 분석 후 getFunction에 파라미터를 넣는다
            axiosGetFunction('/api/kream/product/shop', filterObject, token, setToken).then((res) => {
                setProductTotalCount(res.data.data.count);
                setProduct(res.data.data.products);
                setLoading(false);
                setFilterChanged(false);
                setCursor(1);
                window.scrollTo(0, 0);
            })
        }
    }, [filterChanged])
    return (
        <>
            <ItemAll/>
            <SizeModal/>
        </>
    )
}

export default Shop
