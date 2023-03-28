import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import { RiArrowDropDownFill } from "react-icons/ri";
import SizeButton from "./SizeButton";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  sizeAtom,
  modalOpenAtom,
  sizeStateAtom,
  tokenAtom,
  modalProductAtom,
  userAtom,
} from "../../../atoms/atom";
import { axiosGetFunction } from "../../../module/CustomAxios";
import { Link } from "react-router-dom";

const DetailSizeModal = ({ product }) => {
  const [modalProduct, setModalProduct] = useRecoilState(modalProductAtom);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [open, setOpen] = useRecoilState(modalOpenAtom);
  const [sizes, setSizes] = useRecoilState(sizeAtom);
  const user = useRecoilValue(userAtom);

  const LinkStyle = styled(Link)`
    text-decoration: none;
    display: flex;
    color: inherit;
  `;

  const handleClose = () => {
    setOpen(false);
  };

  const handleButton = e => {
    setSizeState(()=>e.target.value);
  };


  const modalOpen = no => {
    axiosGetFunction(
      "/api/kream/product/size/" + no,
      { user_no: user },
      token,
      setToken
    ).then(res => {
      setSizes(res.data.data.sizes);
      setModalProduct(product);
      setOpen(true);
    });
  };

  const button = {
    padding: 0,
    color: "#222",
    fontSize: "16px",
  };

  const subtext = {
    fontSize: "16px",
    fontWeight: 700,
    textAlign: "center",
  };

  const header = {
    borderTopRadius: "16px",
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
    width: 480,
    boxShadow: 24,
  };

  return (
    <>
      <div>
        {user ? (
          <Button
            sx={button}
            className="button"
            onClick={() => modalOpen(product.product.no)}>
            <Typography sx={subtext}>{sizeState}</Typography>
            <RiArrowDropDownFill size={24}></RiArrowDropDownFill>
          </Button>
        ) : (
          <LinkStyle to="/login">
            <Typography sx={subtext}>{sizeState}!</Typography>
            <RiArrowDropDownFill size={24}></RiArrowDropDownFill>
          </LinkStyle>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Box className="close_button">
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
                }}>
                <TfiClose size={24}></TfiClose>
              </IconButton>
            </Box>
            <Box sx={header} className="header">
              <Typography sx={text}>사이즈</Typography>
            </Box>
            <Box
              sx={{
                margin: "10px 0 32px",
                height: "412px",
                overflowX: "hidden",
              }}>
              <Box sx={{ minHeight: "488px", padding: "0 32px" }}>
                <Grid container className="content">
                  {sizes
                    ? sizes.map(size => (
                        <Grid
                          key={size.no}
                          item
                          xs={3.75}
                          sx={{ margin: "4px" }}>
                          <SizeButton
                            onClick={handleButton}
                            size={size.size}
                            price={size.price}
                            reg_datetime={size.reg_datetime}
                            value={size.size}
                          />
                        </Grid>
                      ))
                    : null}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default DetailSizeModal;
