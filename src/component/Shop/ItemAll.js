import React from 'react'
import styled from 'styled-components';
import {Inner} from '../../common/js/style';
import FilterSide from '../../component/Shop/FilterSide';
import ShopList from '../../component/Shop/ShopList';
import ClearIcon from '@mui/icons-material/Clear';

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
`;

const Delete = styled.button`
  float: right;
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-right: 3px;
`


const ItemAll = () => {
    const urlStr = window.location.search;
    const params = new URLSearchParams(urlStr);
    const keyword = params.get('keyword');
    console.log('k', keyword);
    return (
        <Inner padding="0 40px;">
            <TitleDiv>
                {
                    keyword !== null ? <InputDiv><KeywordInput value={keyword}></KeywordInput><Delete><ClearIcon/></Delete></InputDiv> :
                        <Title>SHOP</Title>
                }
            </TitleDiv>
            <ShopBlock>
                <FilterSide/>
                <ShopList/>
            </ShopBlock>
        </Inner>
    )
}

export default ItemAll
