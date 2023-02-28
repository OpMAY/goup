import React from 'react'
import styled from 'styled-components'
import {Inner} from '../common/js/style'
import logo from '../common/images/logo.png'


const HeaderBlock = styled.header`
    
`
const Top = styled.div`
  display: flex;
  justify-content: end;
  
  ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 8px 40px;
    li{
      padding: 0 12px;
      a{
        color: #222;
        text-decoration: none;
        font-size: 12px;
      }
    }
  }
`

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 20px 40px;
    li{
      padding: 0 20px;

      &:first-child{
        padding-left: 0;
      }
      &:lest-child{
        padding:right: 0;
      }
      a{
        color: #222;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
`

const Header = () => {
  return (
    <HeaderBlock>
      <Inner>
        <Top>
          <ul>
            <li>
              <a href='#'>고객센터</a>
            </li>
            <li>
              <a href='#'>관심상품</a>
            </li>
            <li>
              <a href='#'>로그인</a>
            </li>
          </ul>
        </Top>
        <Navbar>
          <div>
            <img width='120px' src={logo}></img>
          </div>
          <nav>
            <ul>
              <li>
                <a href='#'>HOME</a>
              </li>
              <li>
                <a href='#'>HOME</a>
              </li>
              <li>
                <a href='#'>HOME</a>
              </li>
              <li>
                <a href='#'>HOME</a>
              </li>
            </ul>
          </nav>
        </Navbar>
        <div></div>
      </Inner>
    </HeaderBlock>
  )
}

export default Header