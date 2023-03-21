import React, {useEffect} from 'react'
import {Inner, Title} from '../common/js/style'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ItemAll from '../component/Shop/ItemAll';
import {useRecoilState} from "recoil";
import {tokenAtom} from "../atoms/atom";
import {axiosGetFunction} from "../module/CustomAxios";

const shopTab ={
  backgroundColor: '#fff',
  position: 'sticky',
  top: '103px',
  zIndex: '9999'
}

const Shop = () => {
    const [token, setToken] = useRecoilState(tokenAtom);
    useEffect(() => {
        axiosGetFunction('/api/kream/product/shop', {
            brands: '1,2',
        }, token, setToken).then((res) => {
            console.log(res);
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