import React, { useState, useEffect } from "react";
import { Grid, Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TwoButton from "./TwoButton";

const AddAddressModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const button = {};

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
                margin: "0px 32px",
              }}>
              <TextField
                id="filled-required"
                sx={{ margin: "16px 0" }}
                label="이름"
                variant="standard"
                fullWidth
                placeholder="수령인의 이름"
                InputLabelProps={{
                  shrink: true,
                  sx: { color: "#222", fontWeight: "700" },
                }}
                autoFocus
              />
              <TextField
                id="filled-required"
                sx={{ margin: "16px 0" }}
                label="휴대폰 번호"
                variant="standard"
                fullWidth
                placeholder="-없이 입력"
                InputLabelProps={{
                  shrink: true,
                  sx: { color: "#222", fontWeight: "700" },
                }}
              />
              {/* <Stack direction="row" alignItems="center"> */}
              <TextField
                id="filled-required"
                sx={{ margin: "16px 0" }}
                label="우편번호"
                variant="standard"
                fullWidth
                placeholder="우편 번호를 검색하세요"
                InputLabelProps={{
                  shrink: true,
                  sx: { color: "#222", fontWeight: "700" },
                }}
                InputProps={{
                  endAdornment: (
                    <Button
                      sx={{
                        borderRadius: "10px",
                        border: "1px solid #d3d3d3",
                        height: "34px",
                        color: "rgba(34,34,34,.8)",
                        fontSize: "12px",
                        position: "absolute",
                        right: "0",
                        bottom: "6px",
                      }}>
                      우편번호
                    </Button>
                  ),
                }}
              />
              <TextField
                id="filled-required"
                sx={{ margin: "16px 0" }}
                label="주소"
                variant="standard"
                fullWidth
                placeholder="우편 번호 검색 후, 자동입력 됩니다"
                InputLabelProps={{
                  shrink: true,
                  sx: { color: "#222", fontWeight: "700" },
                }}
              />
              <TextField
                id="filled-required"
                sx={{ margin: "16px 0" }}
                label="상세 주소"
                variant="standard"
                fullWidth
                placeholder="건물, 아파트, 동/호수 입력"
                InputLabelProps={{
                  shrink: true,
                  sx: { color: "#222", fontWeight: "700" },
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="기본 배송지로 설정"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28, color: "#222" },
                  color: "#222",
                  "& .MuiTypography-root": { fontSize: 13 },
                }}
              />
              
            <TwoButton handleClose={handleClose} solid="저장하기" padding="32px" disabled={true}/>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AddAddressModal;
