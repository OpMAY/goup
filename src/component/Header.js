import React from 'react'
// styled-component
import styled from 'styled-components'
// Common style
import {Inner} from '../common/js/style'
// logo 경로
import logo from '../common/images/logo.png'
// react icon
import { AiOutlineSearch } from "react-icons/ai";

// tab custom css
import '../common/css/custom.css'


const HeaderBlock = styled.header`
    
`
const Top = styled.div`
  display: flex;
  justify-content: end;
  padding: 8px 0;
  box-sizing: border-box;
  
  ul{
    display: flex;
    list-style: none;
    margin: 0;
    li{
      padding: 0 12px;
      box-sizing: border-box;

      &:first-child{
        padding-left: 0;
      }

      &:last-child{
        padding-right: 0;
      }

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
  padding: 20px 0;
  box-sizing: border-box;

  ul{
    display: flex;
    list-style: none;
    margin: 0;
    li{
      padding: 0 20px;
      box-sizing: border-box;

      &:first-child{
        padding-left: 0;
      }

      &:last-child{
        padding-right: 40px;
      }

      a{
        color: #222;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
`

const NavBlock = styled.div`
  display: flex;
  align-items: center;
  
  .flex{
    display: flex;
  }
`

const Header = () => {
  return (
    <HeaderBlock>
      <Inner padding="0 40px;">
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
          <NavBlock>
            <nav>
              <ul>
                <li>
                  <a href='#'>HOME</a>
                </li>
                <li>
                  <a href='#'>STYLE</a>
                </li>
                <li>
                  <a href='#'>SHOP</a>
                </li>
                <li>
                  <a href='#'>MY</a>
                </li>
              </ul>
            </nav>
            <div className='flex'><AiOutlineSearch size="28"/></div>
          </NavBlock>
        </Navbar>
      </Inner>
    </HeaderBlock>
  )
}

export default Header