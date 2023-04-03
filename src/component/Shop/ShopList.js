import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import ShoplItem from './ShopItem';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
    productAtom,
    loadingAtom,
    needLoadingAtom,
    elementLoadingHeightAtom,
    tokenAtom,
    productCursorAtom, productTotalCountAtom
} from '../../atoms/atom';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Loding from './Loding';
import {axiosGetFunction} from "../../module/CustomAxios";
import useIntersectionObserver from "../../module/Observer";
import Sorting from "./Sorting";

const ListBlock = styled.div`
  width: 100%;
  position: relative;
`
const ShopSort = styled.div`
  display: flex;
  justify-content: space-between;
  item-align: center;

  .item_solt {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`


const ShopList = () => {
    const [products, setProducts] = useRecoilState(productAtom)
    const [loading, setLoading] = useRecoilState(loadingAtom);
    const [needLoading, setNeedLoading] = useRecoilState(needLoadingAtom);
    const [elementLoadingHeight, setElementLoadingHeight] = useRecoilState(elementLoadingHeightAtom);
    const [token, setToken] = useRecoilState(tokenAtom)
    const target = useRef(null);
    const [cursor, setCursor] = useRecoilState(productCursorAtom);
    const productTotalCount = useRecoilValue(productTotalCountAtom);
    const [observe, unobserve] = useIntersectionObserver(() => {
        setCursor((cursor) => cursor + 1);
    })

    useEffect(() => {
        if (cursor === 1) observe(target.current);
        if (products.length === productTotalCount) unobserve(target.current);
    }, [products])

    useEffect(() => {
        if (products.length < productTotalCount) {
            setLoading(true);
            axiosGetFunction('/api/kream/product/shop', {
                // brands: '1,2', // 브랜드
                // genders: '', // 성별
                // categories: '', // 카테고리
                // keyword: '', // 검색어
                // size_list: '', // 사이즈
                // price: '', // 금액
                cursor: cursor
            }, token, setToken).then((res) => {
                console.log(res);
                const newProduct = [...products].map(p => {
                    return p;
                });
                newProduct.push(...res.data.data.products);
                setProducts(newProduct);
                setLoading(false);
            })
        }
    }, [cursor])

    useEffect(() => {
        if (loading) {
            unobserve(target.current);
        } else {
            observe(target.current);
        }
    }, [loading])
    return (
        <ListBlock>
            <ShopSort>
                <p>상품 {productTotalCount}</p>
                <Sorting></Sorting>
            </ShopSort>
            <Grid container spacing={2} onClick={() => {
                console.log(products)
            }}>
                {
                    products !== null && Array.isArray(products) ? products.map((v, i) => (
                        <Grid xs={3} key={i}>
                            <ShoplItem product={v} idx={i}/>
                        </Grid>
                    )) : null
                }

            </Grid>
            <div ref={target}>
                {
                    loading ? <Loding/> : null
                }
            </div>
        </ListBlock>
    )
}

export default ShopList
