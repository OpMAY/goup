
import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const Block = styled.div`
  width: 50%;
  padding-top: 38px;
  h3 {
    font-size: 18px;
    font-weight: 800;
    color: #000;
  }
  .unit {
    position: relative;
    padding: 25px 0 18px;
    border-bottom: 1px solid #ebebeb;
    .change {
      display: inline-flex;
      height: 34px;
      padding: 0 12px;
      border: 1px solid #d3d3d3;
      color: rgba(34, 34, 34, 0.8);
      position: absolute;
      right: 0;
      bottom: 15px;
      background-color: #fff;
      border-radius: 10px;
      align-items: center;
    }
    .sub-title {
      font-size: 13px;
      color: rgba(34, 34, 34, 0.5);
      margin: 0;
    }
    .e-mail,
    .password,
    .name,
    .phone,
    .size {
      font-size: 16px;
      color: rgba(34, 34, 34, 0.5);
      padding-top: 6px;
      margin: 0;
    }

    .password,
    .name,
    .phone,
    .size {
      color: #222;
    }
  }
  .withdrawal {
    display: inline-block;
    padding: 5px 0;
    margin-top: 58px;
    color: rgba(34, 34, 34, 0.5);
    font-size: 13px;
    text-decoration: underline;
    background-color: transparent;
    border: 0;
  }
  .unit_change {
    position: relative;
    padding: 25px 0 18px;
    .sub-title {
      font-size: 13px;
      color: #222;
      margin: 0;
      padding-bottom: 20px;
    }
    .change_title {
      color: #000;
      margin: 0;
      font-size: 13px;
    }
    .name {
      font-size: 16px;
      padding-top: 6px;
      margin: 0;
      color: #222;
    }
    .unit_input {
      width: 100%;
      border: 0;
      padding: 7px 0;
      font-size: 15px;
      border-bottom: 1px solid #ebebeb;
      &:focus {
        outline: none;
      }
    }
    .btn_box {
      text-align: center;
      padding-top: 30px;
      .btn {
        min-width: 120px;
        height: 42px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        border-radius: 10px;

        &.btn_save {
          background-color: #222;
          color: #fff;
          margin-left: 8px;
          border: 0;
        }

        &.btn_back {
          border: 1px solid #ccc;
          color: #222;
          background-color: #fff;
        }
      }
    }
  }
`;

const ProfileInfo = styled.div`
  padding-top: ${props => props.paddingTop};
`;
const ModalBox = styled.div`
  width: 442px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24;
  z-index: 9;
  background-color: #fff;
  .title {
    padding: 20px 50px;
    font-size: 18px;
    text-align: center;
  }
  .size_body {
    overflow-x: hidden;
    overflow-y: auto;
    height: 270px;
    padding: 6px 28px 0;
    display: flex;
    flex-wrap: wrap;
    .size_info {
      width: calc(33.33333% - 8px);
      height: 52px;
      margin: 4px;
      button {
        width: 100%;
        height: 100%;
        background-color: #fff;
        color: #222;
        border: 1px solid #ccc;
        border-radius: 10px;
        &.is-active{
          border: 1px solid #000;
          font-weight: 600;
        }
      }
      
    }
  }
  .btn_box {
    text-align: center;
    padding: 24px 32px 32px;
    .btn {
      min-width: 120px;
      height: 42px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      border-radius: 10px;
      &.btn_save {
        background-color: #222;
        color: #fff;
        border: 0;
      }
    }
  }
`;

const sizeInfo = [
  '220', '225', '230', '235', '240', '245', '250', '255', '260', '265', '270', '275', '280', '285', '290', '295', '300'
]
const Info = ({profile, setProfile}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [change, setChange] = useState(false)
  return (
    <Block>
      <ProfileInfo>
        <h3>로그인 정보</h3>
        <div>
          <div className='unit'>
            <h4 className='sub-title'>이메일 주소</h4>
            {
              profile ? <p className='e-mail'>{profile.email}</p> : null
            }
          </div>
        </div>
      </ProfileInfo>
      <ProfileInfo paddingTop="58px">
        <h3>개인정보</h3>
        <div>
          {
            !change ? <div className='unit'>
            <h4 className='sub-title'>이름</h4>
            {
              profile ? <p className='name'>{profile.name}</p>  : null
            }
            
            <button type='button' className='change' onClick={() => setChange(true)}>변경</button>
          </div> : null
          }
          {
            change ? <div className='unit_change'>
            <h4 className='sub-title'>이름</h4>
            <h4 className='change_title'>새로운 이름</h4>
            <input className='unit_input' type="text" placeholder='고객님의 이름'></input>
            <div className='btn_box'>
              <button className='btn btn_back' onClick={() => setChange(false)}>취소하기</button>
              <button className='btn btn_save'>저장하기</button>
            </div>
          </div> : null
          }
          <div className='unit'>
            <h4 className='sub-title'>휴대폰 번호</h4>
            {
              profile ? <p className='phone'>{profile.phone_number}</p> : null
            }
          </div>
          <div className='unit'>
            <h4 className='sub-title'>신발 사이즈</h4>
            {
              profile ? <p className='size'>{profile.size}</p> : null
            }
            <button type='button' className='change' onClick={handleOpen}>변경</button>
          </div>
        </div>
      </ProfileInfo>
      {/* <button type='button' className='withdrawal'>회원탈퇴</button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalBox>
          <h2 className='title'>사이즈 선택</h2>
          <div className='size_body'>
            {
              sizeInfo.map((item) => (
                <div className='size_info'>
                  <button type='button' className='is-active'>{item}</button>
                </div>
              ))
            }
          </div>
          <div className="btn_box">
            <button className="btn btn_save">저장하기</button>
          </div>
        </ModalBox>
      </Modal>
    </Block>
  );
};

export default Info;
