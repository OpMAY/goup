import React, { useState } from "react";
import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import { RiArrowDropDownFill } from "react-icons/ri";
import SizeButton from "./SizeButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { sizeAtom, sizeStateAtom } from "../../../atoms/atom";

const DetailSizeModal = () => {
  const size = useRecoilValue(sizeAtom);
  const [sizeState, setSizeState] = useRecoilState(sizeStateAtom);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleButton = e => {
    setSizeState(e.target.value);
    setOpen(false);
  };

  console.log("현재 사이즈는?", sizeState);

  // size.map((item, id) => {
  //   console.log(item.size);
  // });

  const button = {
    padding: 0,
    color: "inherit",
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
        <Button sx={button} className="button" onClick={handleClickOpen}>
          <Typography sx={subtext}>{sizeState}</Typography>
          <RiArrowDropDownFill size={24}></RiArrowDropDownFill>
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
              <Typography sx={text}>사이즈</Typography>
            </Box>
            <Box
              sx={{
                margin: "10px 0 32px",
                height: "412px",
                overflowX: "hidden",
              }}>
              <Box sx={{ minHeight: "488px", padding: "0 32px" }}>
                <Grid container className="content" sx={{}}>
                  {size.map(size => (
                    <Grid key={size.no} item xs={3.75} sx={{ margin: "4px" }}>
                      <SizeButton
                        onClick={handleButton}
                        size={size.size}
                        price={size.price}
                        reg_datetime={size.reg_datetime}
                        value={size.size}
                      />
                    </Grid>
                  ))}
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
