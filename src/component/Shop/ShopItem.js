import React, {useState} from 'react'
import styled from 'styled-components'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Modal from '@mui/material/Modal';
import {productAtom, modalOpenAtom} from '../../atoms/atom';
import {useRecoilState} from 'recoil';
import {Hr} from '../../common/js/style'
import Grid from '@mui/material/Grid';
import SizeModal from './SizeModal';

const ItemBlcok = styled.div`
  p {
    margin: 0;
  }

  .product-info {
    padding: 8px 4px 0;
    margin-bottom: 12px;
    height: 71px;

    .name {
      font-size: 13px;
      color: #333;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .item-detail {
      font-size: 13px;
      color: #222;
      margin-bottom: 2px;
    }

    .item-detail-kr {
      font-size: 11px;
      color: rgba(34, 34, 34, .5);
    }
  }

  .price-info {
    padding: 0 4px;

    .price {
      font-size: 14px;
      font-weight: 700;
    }

    .desc {
      font-size: 11px;
      color: rgba(34, 34, 34, .5);
    }
  }

  .icon-box {
    padding: 12px 4px 0 0;
    display: flex;
    justify-content: space-between;

    .save {

    }

    .save {
      cursor: pointer;
    }
  }

`

const ImgBox = styled.div`
  height: 230px;
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
`
// modal style



const ShopItem = ({product, idx}) => {
    // modal
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useRecoilState(modalOpenAtom);
    // item book mark
    const toggle = product._wish;
    const [products, setProducts] = useRecoilState(productAtom)

    const confirmClcik = () => {
      const sample = {...product};
      sample._wish = !sample._wish;
      const newList = [...products].map((v, i) => {
          if (i === idx) return sample; else return v;
      })
      setProducts(newList);
      console.log(sample._wish)
      handleClose()
    }
    return (
        <>
          <ItemBlcok>
              <ImgBox backgroundImage={product.image.url}></ImgBox>
              <div>
                  <div className='product-info'>
                      <p className='name'>{product.brand.name}</p>
                      <p className='item-detail'>{product.en_name}</p>
                      <p className='item-detail-kr'>{product.kor_name}</p>
                  </div>
                  <div className='price-info'>
                      <p className='price'>{product.price} 원</p>
                      <p className='desc'>즉시 구매가</p>
                  </div>
                  <div className='icon-box'>
                      <div className='save' onClick={() => setOpen(true)}>
                          {
                              !toggle ? <BookmarkBorderIcon/> : <BookmarkIcon/>
                          }
                      </div>
                  </div>
              </div>
          </ItemBlcok>
          <SizeModal 
          product={product}
          confirmClcik={confirmClcik}
          />
        </>
    )
}

export default ShopItem