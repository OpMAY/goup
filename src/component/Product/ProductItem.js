import React, { useState } from 'react';
import styled from 'styled-components'
// css
import '../../common/css/ProductItem.css'
// Item
import { MainItem } from '../../common/js/style'

const arr = [
  
  {
    // url: '/images/img0.png',
    title: '타이틀',
    total: '금액',
    images: [
      {
			  url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
      },
    ],
  },{
    // url: '/images/img0.png',
    title: '타이틀',
    total: '금액',
    images: [
      {
			  url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
      },
    ],
  },
  {
    // url: '/images/img0.png',
    title: '타이틀',
    total: '금액',
    images: [
      {
			  url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
      },
    ],
  },
  {
    // url: '/images/img0.png',
    title: '타이틀',
    total: '금액',
    images: [
      {
			  url: "https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png"
      },
    ],
  }
]
// style 시작
const ProductInfo = styled.div`
.product_btn{
  text-align: center;

  button{
    display: inline-block;
    margin-top: 20px;
    padding: 12px 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
  }
}
  &::before{
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



const ProductItem = ({title, subTitle}) => {
  const [item, setItem] = useState();
  const plusClick = () => {
    
  }
  return (
    <ProductInfo>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <ItemBlock>
        {arr.map((p, i)=>(
          <MainItem p={p} key={i}/>
        ))}
      </ItemBlock>
      <div className='product_btn'>
        <button type='button' onClick={plusClick}>더 보기</button>
      </div>
    </ProductInfo>
  )
}

export default ProductItem