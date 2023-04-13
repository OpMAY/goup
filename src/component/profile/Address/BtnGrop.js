import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  
  .title{
    font-size: 24px;
    color: #000;
    font-weight: bold;
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
        <h3 className='title'>주소록</h3>
      </div>
      <div>
        <button type='button' className='btn'>+ 새 배송지 추가</button>
      </div>
    </Block>
  )
}

export default BtnGrop