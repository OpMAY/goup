import React from 'react'
import styled from 'styled-components'

const ItemBlcok = styled.div`
  p{
    margin:0;
  }
  .img-box{
    height: 230px;
    background-image: url(https://carrier-bubbly.s3.ap-northeast-2.amazonaws.com/image/kream/a_460eb0a606f247d181ffba99af7cf7d7.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
  .product-info{
    padding: 8px 4px 0;
    margin-bottom: 12px;
    .name{
      font-size: 13px;
      color: #333;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .item-detail{
      font-size: 13px;
      color: #222;
      margin-bottom: 2px;
    }
    .item-detail-kr{
      font-size: 11px;
      color: rgba(34,34,34,.5);
    }
  }
  .price-info{
    padding: 0 4px;
    .price{
      font-size: 14px;
      font-weight: 700;
    }
    .desc{
      font-size: 11px;
      color: rgba(34,34,34,.5);
    }
  }
  
  .icon-box{
    padding: 12px 4px 0;
    display: flex;
    justify-content: space-between;
    .save{

    }
    .review{
  
    }
  }
  
`

const ShopItem = () => {
  return (
    <ItemBlcok>
      <div className='img-box'></div>
      <div>
        <div className='product-info'>
          <p className='name'>삼품이름</p>
          <p className='item-detail'>상품 상세</p>
          <p className='item-detail-kr'>상품 상세 한글</p>
        </div>
        <div className='price-info'>
          <p className='price'>000,000 원</p>
          <p className='desc'>즉시 구매가</p>
        </div>
        <div className='icon-box'>
          <div className='save'>아이콘</div>
          <div className='review'>아이콘</div>
        </div>
      </div>
    </ItemBlcok>
  )
}

export default ShopItem