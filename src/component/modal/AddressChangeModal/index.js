import React, { useState, useEffect } from "react";
import { Grid, Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { TfiClose } from "react-icons/tfi";
import { BiCheck } from "react-icons/bi";
import {  useRecoilValue } from "recoil";
import {
  userAddressAtom,
} from "../../../atoms/atom";
import { Hr } from "../../../common/js/style";

const AddressChangeModal = ({ product }) => {
  const [open, setOpen] = useState(false);
  const userAddress = useRecoilValue(userAddressAtom);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const button = {
    border: "1px solid #d3d3d3",
    borderRadius: "10px",
    color: "rgba(34,34,34,0.8)",
    height: "36px",
    padding: "0",
  };

  const subtext = {
    fontSize: "12px",
    padding: "4px 0",
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
          <Typography sx={subtext}>변경</Typography>
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
              <Typography sx={text}>주소록</Typography>
            </Box>
            <Box
              sx={{
                margin: "0px 20px 80px",
                height: "480px",
              }}>
              {userAddress.map(address => (
                <>
                  <Stack
                    key={address.no}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between">
                    <Box sx={{ fontSize: "14px" }}>
                      <Box component="span" sx={{ fontWeight: "700" }}>
                        {address.name}
                      </Box>
                      <Box component="span" sx={{ marginLeft: "8px" }}>
                        기본 배송지
                      </Box>
                      <Typography sx={{ fontSize: "14px" }}>
                        {address.phone_number}
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        ({address.zip_code}){address.address}
                      </Typography>
                    </Box>
                    <BiCheck size="24"></BiCheck>
                  </Stack>
                    <Hr margin="20px 0 0;"/>
                </>
              ))}
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AddressChangeModal;
