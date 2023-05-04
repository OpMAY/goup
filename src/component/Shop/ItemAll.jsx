import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Inner } from '../../common/js/style';
import FilterSide from '../../component/Shop/FilterSide';
import ShopList from '../../component/Shop/ShopList';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterChangeAtom } from "../../atoms/atom";

const ShopBlock = styled.div`
  display: flex;
`

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 15px;
`

const InputDiv = styled.div`
  padding-bottom: 16px;
  margin: 0 8px;
  border-bottom: 3px solid #000;
  width: 500px;
`

const KeywordInput = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 29px;
  padding: 0 13px 0 1px;
  width: 468px;
  letter-spacing: -.015em;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
  
  &::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -.015em;
    color: rgba(34,34,34,.3)
  }
`;

const Delete = styled.button`
  float: right;
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-right: 3px;
  padding: 0;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

function setFilterInit() {
    const urlStr = window.location.search;
    const params = new URLSearchParams(urlStr);
    const brands = params.get('brands');
    const categories = params.get('categories');
    const gender = params.get('gender');
    const price = params.get('price');
    const size = params.get('size');
    const keyword = params.get('keyword');
    const brandsParams = brands !== null ? (brands.indexOf(',') !== -1 ? brands.split(',') : [brands]) : null;
    const categoryParams = categories !== null ? (categories.indexOf(',') !== -1 ? categories.split(',') : [categories]) : null;
    const sizeParams = size !== null ? (size.indexOf(',') !== -1 ? size.split(',') : [size]) : null;
    const genderParams = gender !== null ? (gender.indexOf(',') !== -1 ? gender.split(',') : [gender]) : null;
    return {
        brands: brandsParams,
        categories: categoryParams,
        size: sizeParams,
        gender: genderParams,
        price: price,
        keyword: keyword
    };
}





const ItemAll = () => {
    const filters = setFilterInit();
    const setFilterChange = useSetRecoilState(filterChangeAtom);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setSearchText(filters.keyword);
    }, [])

    const search = (e) => {
        if (e.keyCode === 13 && searchText.length > 0) {
            // WHEN KeyCode is ENTER
            filters.keyword = searchText;
            const params = new URLSearchParams();
            if (filters.categories !== null) {
                params.set('categories', filters.categories.toString());
            }
            if (filters.brands !== null) {
                params.set('brands', filters.brands.toString());
            }
            if (filters.gender !== null) {
                params.set('gender', filters.gender.toString());
            }
            if (filters.size !== null) {
                params.set('size', filters.size.toString());
            }
            if (filters.price !== null) {
                params.set('price', filters.price.toString());
            }
            params.set('keyword', filters.keyword);
            // navigate([...params].length > 0 ? '?' + params.toString() : '');
            navigate([...params].length > 0 ? '?' + params.toString() : '', { replace: true });
            // Filter Change update 시 shop.js의 useEffect에서 해당 값을 Listen하고 있어서 데이터 새로 불러옴
            setFilterChange(true);
        }
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    const resetInput = (e) => {
        setSearchText('');
        const params = new URLSearchParams();
        if (filters.categories !== null) {
            params.set('categories', filters.categories.toString());
        }
        if (filters.brands !== null) {
            params.set('brands', filters.brands.toString());
        }
        if (filters.gender !== null) {
            params.set('gender', filters.gender.toString());
        }
        if (filters.size !== null) {
            params.set('size', filters.size.toString());
        }
        if (filters.price !== null) {
            params.set('price', filters.price.toString());
        }
        // navigate([...params].length > 0 ? '?' + params.toString() : '');
        navigate([...params].length > 0 ? '?' + params.toString() : '', { replace: true });
        // Filter Change update 시 shop.js의 useEffect에서 해당 값을 Listen하고 있어서 데이터 새로 불러옴
        setFilterChange(true);
    }

    return (
        <Inner padding="0 40px;">
            <Title>SHOP</Title>
            <TitleDiv>
                <InputDiv><KeywordInput value={searchText ? searchText : ''} onChange={handleChange} placeholder="브랜드명, 모델명, 모델번호 등"
                    onKeyDown={search}></KeywordInput>{
                        searchText && searchText.length > 0 ? <Delete
                            onClick={resetInput}><ClearIcon /></Delete> : null
                    }</InputDiv>
            </TitleDiv>
            <ShopBlock>
                <FilterSide />
                <ShopList />
            </ShopBlock>
        </Inner>
    )
}

export default ItemAll
