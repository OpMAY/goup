import React, { useState } from 'react'
import styled from 'styled-components'
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckArea from '../../Detail/CheckArea';

const Block = styled.div`
  width: 50%;
  .title{
    font-size: 24px;
    margin: 0;
    color: #000;
    font-weight: bold;
  }
  .sub_title{
    font-size: 13px;
    color: #222;
    margin: 5px 0 0 0;
  }
  .receipt_input{
    .input_box{
      padding: 16px 0 14px;
      .input_title{
        font-size: 13px;
        margin: 0;
      }
      .input_style{
        width: 100%;
        border: 0;
        border-bottom: 1px solid #ccc;
        padding: 16.5px 32px 16.5px 14px;
        font-size: 15px;
        &:focus{
          outline: none;
          border-bottom: 1px solid #000
        }
      }
    }
  }
  
  
  fieldset{
    border: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    &:focus-visible{
      outline: none;
    }
  }
  .btn_box{
    text-align: center;
    padding-top: 20px;
    .save_btn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 120px;
      height: 42px;
      background-color: #222;
      color: #fff;
      border: 0;
      border-radius: 10px;
    }
  }
`
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  '미선택',
  '개인소득공제(휴대폰)',
  '개인소득공제(현금영수증카드)',
];
const Receipt = () => {
  const [personName, setPersonName] = useState('')

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  return (
    <Block>
      <div>
        <h3 className='title'>현금영수증 정보</h3>
        <p className='sub_title'>현금영수증은 판매 거래 시 발생하는 수수료에 대해 &#60;정산완료&#62; 후 7일 이내에 건별로 발급됩니다. ‘미신청' 선택 시 자진발급으로 처리됩니다.</p>
      </div>
      <div className='receipt_input'>
        <div className='input_box'>
          <h4 className='input_title'>형태</h4>
          <FormControl fullWidth>
            <Select
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='input_box'>
          <h4 className='input_title'>휴대폰 번호</h4>
          <input className='input_style' type="text" placeholder='- 없이 입력하세요.'></input>
        </div>
        <CheckArea title="현금영수증 신청 정보를 저장하여 자동으로 발급되는 것에 동의합니다."></CheckArea>
      </div>
      <div className='btn_box'>
        <button type='button' className='save_btn'>저장하기</button>
      </div>
    </Block>
  )
}

export default Receipt