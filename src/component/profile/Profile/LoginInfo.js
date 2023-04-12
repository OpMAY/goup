import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  width: 50%;
  padding-top: 38px;
  h3{
    font-size: 18px;
    font-weight: 800;
    color: #000;
  }
  .unit{
    position: relative;
    padding: 25px 0 18px;
    border-bottom: 1px solid #ebebeb;
    .change{
      display: inline-flex;
      height: 34px;
      padding: 0 12px;
      border: 1px solid #d3d3d3;
      color: rgba(34,34,34,.8);
      position: absolute;
      right: 0;
      bottom: 15px;
      background-color: #fff;
      border-radius: 10px;
      align-items: center;
    }
    .sub-title{
      font-size: 13px;
      color:rgba(34,34,34,.5);
      margin: 0;
    }
    .e-mail, .password, .name, .phone, .size{
      font-size: 16px;
      color: rgba(34,34,34,.5);
      padding-top: 6px;
      margin: 0;
    }
    
    .password, .name, .phone, .size{
      color: #222;
    }
  }
  .withdrawal{
    display: inline-block;
    padding: 5px 0;
    margin-top: 58px;
    color:rgba(34,34,34,.5);
    font-size: 13px;
    text-decoration: underline;
    background-color: transparent;
    border: 0;
  }
`

const ProfileInfo = styled.div`
  padding-top: ${props => props.paddingTop}
`

const Info = () => {
  return (
    <Block>
      <ProfileInfo >
        <h3>로그인 정보</h3>
        <div>
          <div className='unit'>
            <h4 className='sub-title'>이메일 주소</h4>
            <p className='e-mail'>roal3437@naver.com</p>
            <button type='button' className='change'>변경</button>
          </div>
          <div className='unit'>
            <h4 className='sub-title'>비밀번호</h4>
            <p className='password'>1231421</p>
            <button type='button' className='change'>변경</button>
          </div>
        </div>
      </ProfileInfo>
      <ProfileInfo paddingTop="58px">
        <h3>개인정보</h3>
        <div>
          <div className='unit'>
            <h4 className='sub-title'>이름</h4>
            <p className='name'>roal3437@naver.com</p>
            <button type='button' className='change'>변경</button>
          </div>
          <div className='unit'>
            <h4 className='sub-title'>휴대폰 번호</h4>
            <p className='phone'>1231421</p>
            <button type='button' className='change'>변경</button>
          </div>
          <div className='unit'>
            <h4 className='sub-title'>신발 사이즈</h4>
            <p className='size'>220</p>
            <button type='button' className='change'>변경</button>
          </div>
        </div>
      </ProfileInfo>
      <button type='button' className='withdrawal'>회원탈퇴</button>
    </Block>
  )
}

export default Info