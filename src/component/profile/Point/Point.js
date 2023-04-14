import React, { useEffect } from "react";
import styled from "styled-components";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import PointTable from "./PointTable";
import { userPointAtom, tokenAtom, userAtom } from "../../../atoms/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { axiosGetFunction } from "../../../module/CustomAxios";

const Block = styled.div`
  .point_title {
    display: flex;
    align-items: center;
    .title {
      color: #000;
      font-weight: bold;
      font-size: 24px;
    }
    .circle {
      display: inline-flex;
      margin: 0;
      padding: 0;
      background-color: transparent;
      border: 0;
      cursor: pointer;
    }
  }
  .point_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 50px;
    padding: 30px;
    border: 1px solid #ebebeb;
    border-radius: 15px;
    background-color: #fafafa;

    .point_list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;

      li {
        position: relative;
        &:first-child {
          padding-right: 100px;
        }
        &:last-child {
          padding-left: 100px;
          &::after {
            content: "";
            display: block;
            width: 1px;
            background-color: #ebebeb;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
          }
        }
      }

      .point_subtitle {
        color: rgba(34, 34, 34, 0.5);
        font-size: 13px;
        margin: 0;
      }
      .point_num {
        font-size: 24px;
        color: #222;
      }
    }
  }
  .btn_box {
    text-align: center;
    .save_btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 120px;
      height: 42px;
      background-color: #222;
      color: #fff;
      border: 0;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

const Point = () => {
  const [userPoint, setUserPoint] = useRecoilState(userPointAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  // const user = useRecoilValue(userAtom);


  useEffect(() => {
    axiosGetFunction(
      `/api/kream/my/point/` + 1,
      {  },
      token,
      setToken
    ).then(res => {
      setUserPoint(res.data.data.point);
    });
  }, []);

  return (
    <Block>
      <div className="point_title">
        <h3 className="title">포인트</h3>
        <button type="button" className="circle">
          <HelpSharpIcon />
        </button>
      </div>
      <div className="point_box">
        <ul className="point_list">
          <li>
            <p className="point_subtitle">사용 가능한 포인트</p>
            <strong className="point_num">{userPoint ? userPoint.point : 0}P</strong>
          </li>
          <li>
            <p className="point_subtitle">이번달 소멸예정 포인트</p>
            <strong className="point_num">0P</strong>
          </li>
        </ul>
        <div className="btn_box">
          <button type="button" className="save_btn">
            + 포인트 적립하기
          </button>
        </div>
      </div>
      <PointTable userPoint={userPoint} />
    </Block>
  );
};

export default Point;
