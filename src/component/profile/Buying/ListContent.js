import React from "react";
import styled from "styled-components";
import BuySellFilterModal from "../../modal/BuySellFilterModal";
import { Button } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import EmptyContent from "./EmptyContent";

const PurchaseBox = styled.div`
  display: flex;
  flex-direction: column;
  .purchase_head {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    .state_button {
      font-size: 12px;
      border-radius: 12px;
      background-color: #fff;
      justify-content: left;
      padding: 5px 10px;
      justify-content: space-between;
      color: #222;
      p {
        line-height: 24px;
        margin: 0;
      }
    }
  }
  .status {
    font-size: 13px;
  }
`;

const ListContent = ({ arr, firstTitle, secondTitle }) => {
  return (
    <PurchaseBox className="changed_box">
      <div className="purchase_head">
        <BuySellFilterModal className="modal_button" arr={arr} />
        <div className="status">
          <Button className="state_button" endIcon={<UnfoldMoreIcon />}>
            {firstTitle}
          </Button>
          {secondTitle ? (
            <Button className="state_button" endIcon={<UnfoldMoreIcon />}>
              {secondTitle}
            </Button>
          ) : null}
        </div>
      </div>
      <EmptyContent text="구매 입찰 내역이 없습니다." shopButton={true}/>
    </PurchaseBox>
  );
};

export default ListContent;
