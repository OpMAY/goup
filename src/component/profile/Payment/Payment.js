import React from 'react'
import BtnGrop from './BtnGrop'
import styled from 'styled-components'

const BLock = styled.div`
  
`
const PaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  
`
const Payment = () => {
  return (
    <BLock>
      <BtnGrop/>
      <PaymentInfo>
        <div>
          <div></div>
          <div></div>
        </div>
        <div className='bnt_box'>
          <button type='button' className='del'>삭제</button>
        </div>
      </PaymentInfo>
    </BLock>
  )
}

export default Payment