import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from '@mui/material/Modal';
import { Checkbox, FormControlLabel } from "@mui/material";

const AddressBlcok = styled.div`
  .address_list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-bottom: 2px solid #000;

    &.additional{
      border-bottom: 1px solid #d3d3d3;
    }
    .btn{
      display: inline-flex;
      height: 34px;
      background-color: #fff;
      align-items: center;
      color:rgba(34,34,34,.8);
      border: 1px solid #d3d3d3;
      font-size: 12px;
      border-radius: 10px;
      padding: 0 12px;
      cursor: pointer;

      &:last-child{
        margin-left: 10px;
      }
    }

  }
  .address_info{
    .name{
      font-size: 15px;
      font-weight: 600;
      vertical-align: middle;
    }
    .chip{
      height: 20px;
      display: inline-flex;
      background-color: #f4f4f4;
      color: #222;
      font-size: 12px;
      align-items: center;
      padding:0 6px;
      margin-left: 5px;
      border-radius: 15px;
    }
    .phone{
      font-size: 15px;
      margin: 5px 0 0 0 ;
    }
    .address_box{
      margin: 5px 0 0 0 ;
      font-size: 14px;
    }
  }
`

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  
  .title{
    font-size: 24px;
    color: #000;
    font-weight: bold;
  }
  .btn{
    display: inline-flex;
    height: 34px;
    align-items: center;
    padding: 0 14px;
    font-size: 12px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
  }
`
const ModalBox = styled.div`
  width: 520px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24;
  z-index: 9;
  background-color: #fff;
  .title{
    padding: 20px 50px;
    font-size: 18px;
    text-align: center;
  }
  .modal_body{
    padding: 0 32px ;
  }
  .btn_box{
    text-align: center;
    padding: 24px 32px 32px;
    .btn{
      min-width: 120px;
      height: 42px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      border-radius: 10px;

      &.btn_back{
        background-color: #fff;
        border: 1px solid #ccc;
        color: #000;
      }
      &.btn_save{
        background-color: #222;
        color: #fff;
        border: 0;
        margin-left: 6px;
      }
    }
  }
  .modal_input_box{
    padding: 10px 0 14px;
    &:first-child{
      padding-top: 0;
    }
    .input_title{
      font-size: 13px;
      color: #222;
      margin: 0;
    }
    .modal_input{
      width: 100%;
      border: 0;
      border-bottom: 1px solid #ccc;
      outline: none;
      padding: 8px 0;
      font-size: 15px;

      &:focus{
        border-bottom: 1px solid #000;
      }
    }
  }
`
const CheckAreaBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  div {
    p {
      margin: 0;
    }
    .main_text {
      color: #222;
      font-size: 15px;
      line-height: 18px;
    }
    .sub_text {
      margin-top: 4px;
      color: rgba(34, 34, 34, 0.5);
      font-size: 13px;
      line-height: 16px;
    }
  }
  span {
  }
`;
const Address = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen(true);
  const handleClose2 = () => setOpen(false);

  return (
    <>
      <TitleBlock>
        <div>
          <h3 className='title'>주소록</h3>
        </div>
        <div>
          <button type='button' className='btn' onClick={handleOpen}>+ 새 배송지 추가</button>
        </div>
      </TitleBlock>
      <AddressBlcok>
        <div className='address_list'>
          <div className='address_info'>
            <div>
              <span className='name'>윤현호</span>
              <div className='chip'>
                <span>기본 배송지</span>
              </div>
            </div>
            <p className='phone'>010-0000-0000</p>
            <p className='address_box'>
              <span className='zipcode'>(00000)</span>
              <span className='adress'>용마산로 36길 15-16</span>
            </p>
          </div>
          <div className='btn_grop'>
            <button type='button' className='btn' onClick={handleOpen2}>수정</button>
            <button type='button' className='btn'>삭제</button>
          </div>
        </div>
        <div className='address_list additional'>
          <div className='address_info'>
            <div>
              <span className='name'>윤현호</span>
              <div className='chip'>
                <span>기본 배송지</span>
              </div>
            </div>
            <p className='phone'>010-0000-0000</p>
            <p className='address_box'>
              <span className='zipcode'>(00000)</span>
              <span className='adress'>용마산로 36길 15-16</span>
            </p>
          </div>
          <div className='btn_grop'>
            <button type='button' className='btn' onClick={handleOpen2}>수정</button>
            <button type='button' className='btn'>삭제</button>
          </div>
        </div>
      </AddressBlcok>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <h2 className='title'>세 주소 추가</h2>
          <div className='modal_body'>
            <div className='modal_input_box '>
              <h4 className='input_title'>이름</h4>
              <input type="text" placeholder='수령인의 이름' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>휴대폰 번호</h4>
              <input type="text" placeholder='- 없이 입력하세요.' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>우편번호</h4>
              <input type="text" placeholder='우편 번호를 검색하세요.' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>주소</h4>
              <input type="text" placeholder='우편 번호 검색 후, 자동입력 됩니다.' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>상세 주소</h4>
              <input type="text" placeholder='건물, 아파트, 동/호수 입력하세요.' className='modal_input'></input>
            </div>
            <CheckAreaBox>
              <FormControlLabel control={ <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                  color: "#ebebeb",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />} label="기본 배송지로 설정" />
             
            </CheckAreaBox>
          </div>
          <div className='btn_box'>
            <button className='btn btn_back' onClick={() => setOpen(false)}>취소</button>
            <button className='btn btn_save'>저장하기</button>
          </div>
        </ModalBox>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <h2 className='title'>배송지 수정</h2>
          <div className='modal_body'>
            <div className='modal_input_box '>
              <h4 className='input_title'>이름</h4>
              <input type="text" placeholder='수령인의 이름' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>휴대폰 번호</h4>
              <input type="text" placeholder='- 없이 입력하세요.' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>우편번호</h4>
              <input type="text" placeholder='우편 번호를 검색하세요.' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>주소</h4>
              <input type="text" placeholder='우편 번호 검색 후, 자동입력 됩니다.' className='modal_input'></input>
            </div>
            <div className='modal_input_box '>
              <h4 className='input_title'>상세 주소</h4>
              <input type="text" placeholder='건물, 아파트, 동/호수 입력하세요.' className='modal_input'></input>
            </div>
            <CheckAreaBox>
              <FormControlLabel control={ <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                  color: "#ebebeb",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
                Checked
              />} label="기본 배송지로 설정" />
             
            </CheckAreaBox>
          </div>
          <div className='btn_box'>
            <button className='btn btn_back' onClick={() => setOpen2(false)}>취소</button>
            <button className='btn btn_save'>저장하기</button>
          </div>
        </ModalBox>
      </Modal>
    </>
  )
}

export default Address