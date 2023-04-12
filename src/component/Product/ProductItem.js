import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
// css
import '../../common/css/ProductItem.css'
// Item
import {MainItem} from '../../common/js/style'

// style 시작
const ProductInfo = styled.div`
  .product_btn {
    text-align: center;
    button {
      cursor: pointer;
      display: inline-block;
      margin-top: 20px;
      padding: 12px 30px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #fff;
    }
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    border-top: 1px solid #ccc;
    margin: 56px auto 40px;


  }
`
const ItemBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
// style 끝


const ProductItem = ({title, subTitle, items}) => {
    // const [item, setItem] = useState();
    const [toggle, setToggle] = useState(false);
    const [products, setProducts] = useState([]);
    const plusClick = () => {
        setToggle(!toggle);
    }
    useEffect(() => {
        // INIT
        const reduced = items.slice(0, 4);
        setProducts(reduced);
    }, [items])

    useEffect(() => {
        if (toggle) {
            setProducts(items);
        }
    }, [toggle])
    return (
        <ProductInfo>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <ItemBlock>
                {products !== null && products.length > 0 ?
                    products.map((p, i) => (
                        <MainItem p={p} key={i}/>
                    ))
                    : null}
            </ItemBlock>
            {
                !toggle ? <div className='product_btn'>
                    <button type='button' onClick={plusClick}>더 보기</button>
                </div> : null
            }
        </ProductInfo>
    )
}

export default ProductItem