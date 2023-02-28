import React from 'react'
import styled from 'styled-components'
import { Inner } from '../common/js/style'
import { BsInstagram, BsFacebook, BsChatDotsFill } from "react-icons/bs";

// footer Top
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 56px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  h3{
    font-size: 16px;
    margin: 0;
  }
`
const Menu = styled.div`
  display: flex;
`
const MenuList = styled.div`
  margin: ${props => props.margin};
  ul{
    list-style: none;
    padding: 16px 0 0 0;
    margin: 0; 
    box-sizing: border-box;
    li{
      margin-top: 12px;
      &:first-child{
        margin: 0;
      }
      a{
        
        font-size: 14px;
        color: rgba(34,34,34,.5);
        
      }
    }
  }
`
const Service = styled.div`
  dl{
    margin: 0;
    padding: 8px 0;
    box-sizing: border-box;
    dd{
      font-size: 13px;
      color: rgba(34,34,34,.5);
      margin: 0;
    }
  }
  p{
    font-size: 13px;
    margin: 0;
    color: #000;
  }
`
const BtnBox = styled.div`
  padding-top: 17px;
  a{
    display: inline-block;
    padding: 10px 18px;
    color: #fafafa;
    background-color: #222;
    font-size: 12px;
    box-sizing: border-box;
  }
`

// footer bottom 
const FooterBottom = styled.div`
  position: relative;
  margin-top: 30px;
  box-sizing: border-box;             
  
  ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li{
      margin-right: 20px;
      a{
        font-size: 14px;
        text-decoration: none;
        color: #000;
      }

      &:last-child{
        margin-right: 0;
        a{
          font-weight: 700;

        }
      }
    }
  }
`
const SnsBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    
    li{
      padding: 0 20px;
      margin: 0;
        
      &:first-child{
        padding: 0;
      }
      &:last-child{
        padding: 0;
      }

      a{
        display: inline-block;
        
      }
    }
  }
`
const Footer = () => {
  return (
    <footer>
        <Inner padding="50px 40px;">
          <FooterTop>
            <Menu>
              <MenuList>
                <h3>이용안내</h3>
                <ul>
                  <li><a>검수기준</a></li>
                  <li><a>이용정책</a></li>
                  <li><a>패널티 정책</a></li>
                  <li><a>커뮤니티 가이드라인</a></li>
                </ul>
              </MenuList>
              <MenuList margin="0 0 0 80px;">
                <h3>고객센터</h3>
                <ul>
                  <li><a>공지사항</a></li>
                  <li><a>서비스 소개</a></li>
                  <li><a>쇼룸 안내</a></li>
                  <li><a>판매자 방문접수</a></li>
                </ul>
              </MenuList>
            </Menu>
            <Service>
              <h3>고객센터 1588-7813</h3>
              <dl>
                <dd>운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)</dd>
                <dd>점심시간 평일 13:00 - 14:00</dd>
              </dl>
              <p>1:1문의하기는 앱에서만 가능합니다.</p>
              <BtnBox>
                <a>자주 묻는 질문</a>
              </BtnBox>
            </Service>
          </FooterTop>
          <FooterBottom>
            <ul>
              <li><a href='#'>회사소개</a></li>
              <li><a href='#'>인재채용</a></li>
              <li><a href='#'>제휴제안</a></li>
              <li><a href='#'>이용약관</a></li>
              <li><a href='#'>개인정보처리방침</a></li>
            </ul>
            <SnsBox>
              <ul>
                <li><a href='#'><BsInstagram color="#000" size="20px"></BsInstagram></a></li>
                <li><a href='#'><BsFacebook color="#000" size="20px"></BsFacebook></a></li>
                <li><a href='#'><BsChatDotsFill color="#000" size="20px"></BsChatDotsFill></a></li>
              </ul>
            </SnsBox>
          </FooterBottom>
        </Inner>
    </footer>
  )
}

export default Footer