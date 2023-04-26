import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import { useRecoilState } from "recoil";
import { modalOpenAtom } from "../../../atoms/atom";
import { RiArrowDropDownFill } from "react-icons/ri";
import SizeButton from "../DetailSizeModal/SizeButton";

const BuySellFilterModal = ({ arr }) => {
  const [open, setOpen] = useRecoilState(modalOpenAtom);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    width: 448,
    boxShadow: 24,
  };

  const button = {
    border: "1px solid #d3d3d3",
    width: "110px",
    fontSize: "12px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    padding: "5px 10px",
    justifyContent: "space-between",
    color: "#222",
    "&:hover": {
      border: "1px solid #d3d3d3",
    },
  };

  return (
    <>
      <div>
        <Button
          sx={button}
          onClick={handleOpen}
          variant="outlined"
          endIcon={<RiArrowDropDownFill />}>
          전체
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
              <Typography sx={text}>선택한 상태 보기</Typography>
            </Box>
            <Box
              sx={{
                margin: "10px 32px 32px",
              }}>
              <Grid container className="content">
                {arr.map((item, id) => (
                  <Grid key={id} item xs={3.75} sx={{ margin: "4px" }}>
                    <SizeButton
                      red={item === "기한만료" ? true : false}
                      value={item}
                      size={item}
                      onClick={e => {
                        console.log(e.target.value);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default BuySellFilterModal;
