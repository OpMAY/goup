import React from 'react'
import styled from 'styled-components'
import {Hr} from '../../common/js/style'
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {useRecoilState, useRecoilValue} from 'recoil';
import {modalOpenAtom, modalProductAtom, sizeAtom} from '../../atoms/atom'

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  background-color: #fff;
  boxshadow: 24;
  padding: 0 32px;
  border-radius: 15px;
  text-align: center;

  .title {
    padding: 18px 50px 20px;
    font-size: 18px;
  }

  .list-info {
    display: flex;
    align-items: center;

    .info {
      margin-left: 7px;
      text-align: left;

      .name-en {
        font-size: 15px;
        margin: 0;
      }

      .name-ko {
        font-size: 11px;
        color: rgba(34, 34, 34, .5);
        margin: 2px 0 0
      }
    }
  }

  .scroll-body {
    height: 288px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .size-box {
    margin: 4px;

    .size-btn {
      border: 1px solid #d3d3d3;
      width: 120px;
      height: 52px;
      background-color: #fff;
      border-radius: 5px;

      .size-name {
        font-size: 14px;
      }

    }
  }

  .grid-box {
    padding: 0;
  }

  .check {
    width: 120px;
    height: 42px;
    border: 1px solid #d3d3d3;
    background-color: #fff;
    font-size: 14px;
    color: rgba(34, 34, 34, .8);
    border-radius: 5px;
    margin: 24px 0 32px;
  }
`

const ModalImgBox = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${props => props.modalBg});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 15px;
`

const SizeModal = () => {
    const [open, setOpen] = useRecoilState(modalOpenAtom);
    const [modalProduct, setModalProduct] = useRecoilState(modalProductAtom);
    const [sizes, setSizes] = useRecoilState(sizeAtom);

    const handleClose = () => {
        setOpen(false)
        setModalProduct(null);
    };
    return (
        <>
            {
                modalProduct != null ? <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box align="center">
                        <div className='modal-header'>
                            <h2 className='title'>관심 상품 추가</h2>
                        </div>
                        <div className='modal-body'>
                            <div className='list-info'>
                                <ModalImgBox modalBg={modalProduct.image.url}></ModalImgBox>
                                <div className='info'>
                                    <p className='name-en'>{modalProduct.en_name}</p>
                                    <p className='name-ko'>{modalProduct.kor_name}</p>
                                </div>
                            </div>
                            <Hr margin="10px 0 8px"></Hr>
                            <div className='scroll-body'>
                                <Grid container>
                                    {
                                        sizes.map(size => (
                                            <Grid item xs={4}>
                                                <div className='size-box'>
                                                    <button type='button' className='size-btn'>
                                                        <span className='size-name'>{size.size}</span><br/>
                                                        <i className='bokkmark-icon'><BookmarkBorderIcon
                                                            sx={{width: 16, height: 16}}/></i>
                                                    </button>
                                                </div>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </div>
                            <button className='check' onClick={handleClose}>확인</button>
                        </div>
                    </Box>
                </Modal> : null
            }
        </>
    )
}

export default SizeModal