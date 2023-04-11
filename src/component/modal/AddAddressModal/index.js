import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Grid, Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import { BiCheck } from "react-icons/bi";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  sizeAtom,
  modalOpenAtom,
  sizeStateAtom,
  tokenAtom,
  modalProductAtom,
  userAtom,
  userAddressAtom,
} from "../../../atoms/atom";
import { Hr } from "../../../common/js/style";

const AddAddressModal = () => {
  const [open, setOpen] = useState(false);
  const userAddress = useRecoilValue(userAddressAtom);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const button = {
  };

  const subtext = {
    fontSize: "13px",
    color: "rgba(34, 34, 34, 0.5)",
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
    width: 520,
    boxShadow: 24,
  };

  return (
    <>
      <div>
        <Button sx={button} className="button" onClick={handleOpen}>
          <Typography sx={subtext}>+ 새 주소 추가</Typography>
        </Button>
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
              <Typography sx={text}>새 주소 추가</Typography>
            </Box>
            <Box
              sx={{
                margin: "0px 20px 80px",
                height: "480px",
                backgroundColor: "pink",
              }}>
              <h1>gggggggggggggg</h1>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AddAddressModal;
