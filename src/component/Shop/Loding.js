import React from 'react'
import styled from 'styled-components'
import Spinner from '../../common/images/Rolling.gif'

export const LodingSpinner = styled.div`
    width: 100%;
    text-align: center;
    padding: 50px 0;
`;
const Loding = () => {
  return (
      <LodingSpinner>
          <img src={Spinner} art="로딩중 입니다."></img>
      </LodingSpinner>
  )
}

export default Loding