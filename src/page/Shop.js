import React, {useEffect} from 'react'
import {Inner, Title} from '../common/js/style'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ItemAll from '../component/Shop/ItemAll';
import {useRecoilState} from "recoil";
import {tokenAtom, productAtom} from "../atoms/atom";
import {axiosGetFunction} from "../module/CustomAxios";

const shopTab ={
  backgroundColor: '#fff',
  position: 'sticky',
  top: '103px',
  zIndex: '9999'
}

const Shop = () => {
    const [token, setToken] = useRecoilState(tokenAtom);
    const [product, setProduct] = useRecoilState(productAtom)

    useEffect(() => {
        axiosGetFunction('/api/kream/product/shop', {
            // brands: '1,2', // 브랜드
            // genders: '', // 성별
            // categories: '', // 카테고리
            // keyword: '', // 검색어
            // size_list: '', // 사이즈
            // price: '', // 금액
            cursor: 2

        }, token, setToken).then((res) => {
            setProduct(res.data.data.products);

        })
    }, [])
    return (
        <>

            <Title>Shop</Title>
            <Tabs>
                <TabList style={shopTab}>
                    <Inner padding="0 40px;">
                        <Tab>전체</Tab>
                    </Inner>
                </TabList>
                <TabPanel>
                    <ItemAll/>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default Shop
