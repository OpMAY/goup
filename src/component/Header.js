import React, {useEffect} from 'react'
// styled-component
import styled from 'styled-components'
// Common style
import {Inner} from '../common/js/style'
// logo 경로
import logo from '../common/images/logo.png'
// react icon
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
// tab custom css
import '../common/css/custom.css'


const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
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
  const location =useLocation()
  
  const onRelode = () => {
    

  }
  return (
    <HeaderBlock>
      <Inner padding="0 40px;">
        <Top>
          <ul>
            <li>
              <Link to="/" >고객센터</Link>
            </li>
            <li>
              <Link to="/">관심상품</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </Top>
        <Navbar>
          <div>
            <a href="/"><img width='120px' src={logo}></img></a>
          </div>
          <NavBlock>
            <nav>
              <ul>
                <li>
                  <a href='/'>HOME</a>
                </li>
                <li>
                  <Link to="/style">STYLE</Link>
                </li>
                <li>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li>
                  <Link to="/login">MY</Link>
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