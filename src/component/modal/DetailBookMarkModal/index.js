import React from "react";
import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import { RiArrowDropDownFill } from "react-icons/ri";
import SizeButton from "./SizeButton";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import BookmarkItem from "../DetailMoreBidModal/BookmarkItem";
import { useRecoilState } from "recoil";
import { userAtom } from "../../../atoms/atom";

const DetailBookMarkModal = () => {
  const [getUser, setUser] = useRecoilState(userAtom);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const header = {
    borderTopRadius: "16px",
  };

  const checkButton = {
    // // display: "flex",
    // // justifyContent: "center",
    padding: "8px 44px",
    color: "#222",
    margin: "24px auto 32px",
    border: "1px solid #d3d3d3",
    borderRadius: "10px",
  };

  const text = {
    height: "60px",
    fontSize: "18px",
    fontWeight: 700,
    padding: "20px 50px",
    textAlign: "center",
  };

  const style = {
    borderRadius: "16px",
    bgcolor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 440,
    boxShadow: 24,
  };

  const WishButton = styled(Link)`
    text-decoration: none;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid rgb(235, 235, 235);
    padding: 0 25px;
    color: #333333;
    margin-top: 12px;
    display: flex;
    line-height: 60px;
    gap: 4px;
    font-size: 15px;
    justify-content: center;
    .btn_text {
      box-sizing: border-box;
      text-align: center;
    }
    .wish_count {
      font-weight: 600;
    }
  `;
  return (
    <div>
      <WishButton
        to={!getUser ? "#" : "/login"}
        className="btn_wish"
        onClick={handleClickOpen}>
        <BsBookmark size="20px"></BsBookmark>
        <span className="btn_text">관심상품</span>
        <span className="wish_count">1,231</span>
      </WishButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={header} className="header">
            <Typography sx={text}>관심 상품 추가</Typography>
          </Box>
          <BookmarkItem />
          <Box
            sx={{
              margin: "8px 28px 0",
              height: "288px",
              overflowX: "hidden",
            }}>
            <Box sx={{ minHeight: "488px" }}>
              <Grid container className="content">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                  (item, id) => (
                    <Grid item xs={5.7} sx={{ margin: "4px" }}>
                      <SizeButton onClick={handleClose} key={id} size={item} />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </Box>
          <Stack>
            <Button sx={checkButton} onClick={handleClose}>
              확인
              {/* <Typography sx={buttonText}>확인</Typography> */}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailBookMarkModal;

// 진행중
