import React, {useEffect} from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import ShoplItem from './ShopItem';
import {useRecoilState, useRecoilValue} from 'recoil';
import {productAtom, loadingAtom, needLoadingAtom, elementLoadingHeightAtom, tokenAtom} from '../../atoms/atom';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Loding from './Loding';
import {axiosGetFunction} from "../../module/CustomAxios";

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


    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(Math.floor(window.scrollY))
            console.log(elementLoadingHeight);
            if (needLoading && elementLoadingHeight > 0) {
                if (!loading && Math.floor(window.scrollY) >= elementLoadingHeight) {
                    setLoading(true)
                    axiosGetFunction('/api/kream/product/shop', {
                        // brands: '1,2', // 브랜드
                        // genders: '', // 성별
                        // categories: '', // 카테고리
                        // keyword: '', // 검색어
                        // size_list: '', // 사이즈
                        // price: '', // 금액
                        cursor: 2
                    }, token, setToken).then((res) => {
                        console.log(res);
                        setLoading(false);
                        setNeedLoading(false);
                        const newProduct = [...products].push(res.data.data.products)
                        setProducts(newProduct);
                    })
                } else if (loading && Math.floor(window.scrollY) < elementLoadingHeight) {
                    setLoading(false)
                }
            }
        })
        const itemElement = document.querySelector(`.${ListBlock.styledComponentId}> div:not(.${ShopSort.styledComponentId})`);
        if (itemElement.scrollHeight > 0) {
            setElementLoadingHeight(itemElement.scrollHeight - 414);
        }
    })
    return (
        <ListBlock>
            <ShopSort>
                <p>상품 {products !== null ? products.length : 0}</p>
                <div className='item_solt'>
                    <p>인기순 </p>
                    <ImportExportIcon/>
                </div>
            </ShopSort>
            <Grid container spacing={2}>
                {
                    products !== null ? products.map((v, i) => (
                        <Grid xs={3} key={i}>
                            <ShoplItem product={v} idx={i}/>
                        </Grid>
                    )) : null
                }

            </Grid>
            {
                loading ? <Loding/> : null
            }
        </ListBlock>
    )
}

export default ShopList