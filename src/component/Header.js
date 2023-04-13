import React from "react";
// styled-component
import styled from "styled-components";
// Common style
import { Inner } from "../common/js/style";
// logo 경로
import logo from "../common/images/logo.png";
// react icon
import { Link } from "react-router-dom";
// tab custom css
import "../common/css/custom.css";
import SearchModal from "./modal/SearchModal";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/atom";
import { Button } from "@mui/material";

const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 9999;
`;

const Top = styled.div`
  display: flex;
  justify-content: end;
  padding: 8px 0;
  box-sizing: border-box;

  ul {
    display: flex;
    list-style: none;
    margin: 0;

    li {
      padding: 0 12px;
      box-sizing: border-box;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }

      a {
        color: #222;
        text-decoration: none;
        font-size: 12px;
      }
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  ul {
    display: flex;
    list-style: none;
    margin: 0;

    li {
      padding: 0 20px;
      box-sizing: border-box;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 40px;
      }

      a {
        color: #222;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
  .title {
  }
`;

const NavBlock = styled.div`
  display: flex;
  align-items: center;

  .flex {
    display: flex;
    cursor: pointer;
  }
`;

const NavCheck = {
  border: "1px solid #d3d3d3",
  fontSize: "12px",
  fontWeight: 600,
  color: "rgba(34,34,34,.8)",
  padding: "8px 20px",
  borderRadius: "10px",
};

const Header = ({ title }) => {
  const [getUser, setUser] = useRecoilState(userAtom);

  const logoutClick = () => {
    setUser(null);
    window.location.reload();
    window.location.href("http://localhost:3000");
  };

  return (
    <>
      {title ? (
        <HeaderBlock>
          <Inner padding="0 40px;">
            <Top>
              <ul>
                <li>
                  <Link to="/notice">고객센터</Link>
                </li>
                <li>
                  <Link to="/my/wish">관심상품</Link>
                </li>
                <li>
                  {getUser === null ? (
                    <Link to="/login">로그인</Link>
                  ) : (
                    <Link to="/" onClick={() => logoutClick()}>
                      로그아웃
                    </Link>
                  )}
                </li>
              </ul>
            </Top>
            <Navbar>
              <div>
                <a href="/">
                  <img width="120px" src={logo} alt="logo"></img>
                </a>
              </div>
              <h1 className="title">{title}</h1>
              <Button sx={NavCheck}>검수 기준</Button>
            </Navbar>
          </Inner>
        </HeaderBlock>
      ) : (
        <HeaderBlock>
          <Inner padding="0 40px;">
            <Top>
              <ul>
                <li>
                  <Link to="/notice">고객센터</Link>
                </li>
                <li>
                  <Link to="/my/wish">관심상품</Link>
                </li>
                <li>
                  {getUser === null ? (
                    <Link to="/login">로그인</Link>
                  ) : (
                    <Link to="/" onClick={() => logoutClick()}>
                      로그아웃
                    </Link>
                  )}
                </li>
              </ul>
            </Top>
            <Navbar>
              <div>
                <a href="/">
                  <img width="120px" src={logo} alt="logo"></img>
                </a>
              </div>
              <NavBlock>
                <nav>
                  <ul>
                    <li>
                      <a href="/">HOME</a>
                    </li>
                    <li>
                      <Link to="/shop">SHOP</Link>
                    </li>
                    <li>
                      <Link to="/my">MY</Link>
                    </li>
                  </ul>
                </nav>
                <SearchModal />
              </NavBlock>
            </Navbar>
          </Inner>
        </HeaderBlock>
      )}
    </>
  );
};

export default Header;
