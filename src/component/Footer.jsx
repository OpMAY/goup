import React from "react";
import styled from "styled-components";
import { Inner } from "../common/js/style";
import { BsInstagram, BsFacebook, BsChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 56px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-top: 50px;
  margin-top: 56px;
  h3 {
    font-size: 16px;
    margin: 0;
  }
`;
const Menu = styled.div`
  display: flex;
`;
const MenuList = styled.div`
  margin: ${props => props.margin};
  h3 {
    font-weight: 700;
    color: #222;
  }
  ul {
    list-style: none;
    padding: 16px 0 0 0;
    margin: 0;
    box-sizing: border-box;
    li {
      margin-top: 12px;
      &:first-child {
        margin: 0;
      }
      a {
        font-size: 14px;
        color: rgba(34, 34, 34, 0.5);
        text-decoration: none;
      }
    }
  }
`;
const Service = styled.div`
  dl {
    margin: 0;
    padding: 8px 0;
    box-sizing: border-box;
    dd {
      font-size: 13px;
      color: rgba(34, 34, 34, 0.5);
      margin: 0;
    }
  }
  p {
    font-size: 13px;
    margin: 0;
    color: #000;
  }
`;
const BtnBox = styled.div`
  padding-top: 17px;
  box-sizing: border-box;
  a {
    display: inline-block;
    padding: 10px 18px;
    color: #fafafa;
    background-color: #222;
    font-size: 12px;
    box-sizing: border-box;
    text-decoration: none;
  }
`;

const FooterBottom = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  box-sizing: border-box;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 20px;
      box-sizing: border-box;
      a {
        font-size: 14px;
        text-decoration: none;
        color: #000;
      }

      &:last-child {
        margin-right: 0;
        a {
          font-weight: 700;
        }
      }
    }
  }
`;
const SnsBox = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;

    li {
      padding: 0 20px;
      margin: 0;
      box-sizing: border-box;

      &:first-child {
        padding: 0;
      }
      &:last-child {
        padding: 0;
      }

      a {
        display: inline-block;
      }
    }
  }
`;
const Information = styled.p`
  color: rgba(34, 34, 34, 0.5);
  margin: 16px 0 0 0;
  font-size: 13px;
  line-height: 20px;
  box-sizing: border-box;
`;

const Spacing = styled.span`
  margin-right: 15px;
  box-sizing: border-box;
`;
const Guide = styled.div`
  padding: 40px 0 8px;
  box-sizing: border-box;

  h5 {
    font-size: 12px;
    margin: 0;
  }

  p {
    margin: 4px 0 0 0;
    box-sizing: border-box;
    font-size: 12px;
    color: rgba(34, 34, 34, 0.5);
  }
`;
const Notice = styled.div`
  display: flex;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  align-items: end;
  padding: 12px 0 0 0;

  p {
    margin: 0;
    flex: 0.5;
    font-size: 12px;

    &:last-child {
      text-align: right;
      color: rgba(34, 34, 34, 0.3);
    }
  }
`;
const Footer = () => {
  return (
    <footer>
      <Inner padding="0 40px;">
        <FooterTop>
          <Menu>
            <MenuList>
              <h3>이용안내</h3>
              <ul>
                <li>
                  <Link to="/">검수기준</Link>
                </li>
                <li>
                  <Link to="/">이용정책</Link>
                </li>
                <li>
                  <Link to="/">패널티 정책</Link>
                </li>
                <li>
                  <Link to="/">커뮤니티 가이드라인</Link>
                </li>
              </ul>
            </MenuList>
            <MenuList margin="0 0 0 80px;">
              <h3>고객센터</h3>
              <ul>
                <li>
                  <Link to="/notice">공지사항</Link>
                </li>
                <li>
                  <Link to="/">서비스 소개</Link>
                </li>
                <li>
                  <Link to="/">쇼룸 안내</Link>
                </li>
                <li>
                  <Link to="/">판매자 방문접수</Link>
                </li>
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
              <Link to="/faq">자주 묻는 질문</Link>
            </BtnBox>
          </Service>
        </FooterTop>
        <FooterBottom>
          <SnsBox>
            <ul>
              <li>
                <Link to="#">
                  <BsInstagram color="#000" size="20px"></BsInstagram>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <BsFacebook color="#000" size="20px"></BsFacebook>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <BsChatDotsFill color="#000" size="20px"></BsChatDotsFill>
                </Link>
              </li>
            </ul>
          </SnsBox>
          <ul>
            <li>
              <Link to="#">회사소개</Link>
            </li>
            <li>
              <Link to="#">인재채용</Link>
            </li>
            <li>
              <Link to="#">제휴제안</Link>
            </li>
            <li>
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">개인정보처리방침</Link>
            </li>
          </ul>
          <Information>
            크림 주식회사 · 대표 김창욱<Spacing></Spacing>사업자등록번호 :
            570-88-01618 사업자정보확인<Spacing></Spacing>통신판매업 : 제
            2021-성남분당C-0093호 <br />
            사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1,
            8층<Spacing></Spacing>호스팅 서비스 : 네이버 클라우드 ㈜
          </Information>

          <Guide>
            <h5>신한은행 채무지급보증 안내</h5>
            <p>
              당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다. 서비스가입 사실 확인
            </p>
          </Guide>
          <Notice>
            <p>
              크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
              상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
              의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
              거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는
              내용에 대한 책임은 크림(주)에 있습니다.
            </p>
            <p>© KREAM Corp.</p>
          </Notice>
        </FooterBottom>
      </Inner>
    </footer>
  );
};

export default Footer;
