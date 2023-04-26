import React, {useState} from 'react'
import styled from 'styled-components'
import {Hr} from '../../common/js/style'
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {useRecoilState, useRecoilValue} from 'recoil';
import {modalOpenAtom, modalProductAtom, productAtom, sizeAtom, tokenAtom} from '../../atoms/atom'
import {axiosPostFunction} from "../../module/CustomAxios";

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
    cursor: pointer;
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
    const [checkBtn, setCheckBtn] = useState(false);
    const [products, setProducts] = useRecoilState(productAtom);
    const [token, setToken] = useRecoilState(tokenAtom);

    const handleClose = () => {
        setOpen(false)
        setModalProduct(null);
    };

    const onCheck = (this_size) => {
        /**
         * 1. 클릭한 놈을 sizes에서 찾아서 상태 변환
         * 2. 확인을 누르면 서버에 요청을 해
         * 3. 요청 완료 후 최종 결과
         *    => modal을 닫고
         *    =>
         * */
        const sample = {...this_size};
        sample._wish = !sample._wish;
        const newList = [...sizes].map(size => {
            if (size.no === this_size.no) return sample; else return size;
        });
        setSizes(newList);
    }

    const handleConfirm = () => {
        // 통신
        const body = {}
        body.user_no = 1;
        body.product_no = modalProduct.no;
        const result = sizes.filter((element, index, array) => {
            return element._wish === true
        });
        const wishes = [];
        result.map(size => {
            wishes.push({
                size_no : size.no,
                user_no : body.user_no
            })
        })
        body.wishes = wishes;
        axiosPostFunction('/api/kream/product/wish', body, false, token, setToken).then((res) => {
            console.log(res);
            if(res.data.status === 'OK') {
                const this_product = {...modalProduct};
                this_product._wish = res.data.data.status;
                const productFormattedList = [...products].map(product => {
                    if(this_product.no === product.no) return this_product; else return product;
                });
                setProducts(productFormattedList);
                handleClose();
            }
        })
    }
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
                                        sizes.map((size, i) => (
                                            <Grid item xs={4} key={i}>
                                                <div className='size-box'>
                                                    <button type='button' className='size-btn'
                                                            onClick={() => onCheck(size)}>
                                                        <span className='size-name'>{size.size}</span><br/>
                                                        {
                                                            size._wish ? <BookmarkIcon sx={{width: 16, height: 16}}/> :
                                                                <BookmarkBorderIcon sx={{width: 16, height: 16}}/>
                                                        }
                                                    </button>
                                                </div>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </div>
                            <button className='check' onClick={handleConfirm}>확인</button>
                        </div>
                    </Box>
                </Modal> : null
            }
        </>
    )
}

export default SizeModal