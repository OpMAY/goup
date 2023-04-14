import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 22px;
  border-bottom: 3px solid #000;
  .title{
    font-size: 24px;
    color: #000;
    font-weight: bold;
  }
  .sub_title{
    font-size: 12px;
    color: rgba(34,34,34, .5);
    margin: 0;
  }
  .btn{
    display: inline-flex;
    height: 34px;
    align-items: center;
    padding: 0 14px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
  }
`

const BtnGrop = () => {
  return (
    <Block>
      <div>
        <h3 className='title'>결제정보</h3>
        <p className='sub_title'>수수료(페널티, 착불배송비 등)가 정산되지 않을 경우, 별도 고지 없이 해당 금액을 결제 시도할 수 있습니다.</p>
      </div>
      <div>
        <button type='button' className='btn'>+ 새 카드 추가하기</button>
      </div>
    </Block>
  )
}

export default BtnGrop