import React from 'react'
import styled from 'styled-components'
import BtnGrop from './BtnGrop'
import Chip from '@mui/material/Chip';

const AddressBlcok = styled.div`
  .address_list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-bottom: 2px solid #000;

    &.additional{
      border-bottom: 1px solid #d3d3d3;
    }
    .btn{
      display: inline-flex;
      height: 34px;
      background-color: #fff;
      align-items: center;
      color:rgba(34,34,34,.8);
      border: 1px solid #d3d3d3;
      font-size: 12px;
      border-radius: 10px;
      padding: 0 12px;
      cursor: pointer;

      &:last-child{
        margin-left: 10px;
      }
    }

  }
  .address_info{
    .name{
      font-size: 15px;
      font-weight: 600;
      vertical-align: middle;
    }
    .chip{
      height: 20px;
      display: inline-flex;
      background-color: #f4f4f4;
      color: #222;
      font-size: 12px;
      align-items: center;
      padding:0 6px;
      margin-left: 5px;
      border-radius: 15px;
    }
    .phone{
      font-size: 15px;
      margin: 5px 0 0 0 ;
    }
    .address_box{
      margin: 5px 0 0 0 ;
      font-size: 14px;
    }
  }
`

const Address = () => {
  return (
    <>
      <BtnGrop/>
      <AddressBlcok>
        <div className='address_list'>
          <div className='address_info'>
            <div>
              <span className='name'>윤현호</span>
              <div className='chip'>
                <span>기본 배송지</span>
              </div>
            </div>
            <p className='phone'>010-0000-0000</p>
            <p className='address_box'>
              <span className='zipcode'>(00000)</span>
              <span className='adress'>용마산로 36길 15-16</span>
            </p>
          </div>
          <div className='btn_grop'>
            <button type='button' className='btn'>수정</button>
            <button type='button' className='btn'>삭제</button>
          </div>
        </div>
        <div className='address_list additional'>
          <div className='address_info'>
            <div>
              <span className='name'>윤현호</span>
              <div className='chip'>
                <span>기본 배송지</span>
              </div>
            </div>
            <p className='phone'>010-0000-0000</p>
            <p className='address_box'>
              <span className='zipcode'>(00000)</span>
              <span className='adress'>용마산로 36길 15-16</span>
            </p>
          </div>
          <div className='btn_grop'>
            <button type='button' className='btn'>수정</button>
            <button type='button' className='btn'>삭제</button>
          </div>
        </div>
      </AddressBlcok>
    </>
  )
}

export default Address