import React, { useState } from "react";
import styled from "styled-components";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Modal from "@mui/material/Modal";
import { productAtom, paramAtom } from "../../atoms/atom";
import { useRecoilState } from "recoil";
import { Hr } from "../../common/js/style";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const ItemBlcok = styled.div`
  p {
    margin: 0;
  }

  .product-info {
    padding: 8px 4px 0;
    margin-bottom: 12px;
    height: 71px;

    .name {
      font-size: 13px;
      color: #333;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .item-detail {
      font-size: 13px;
      color: #222;
      margin-bottom: 2px;
    }

    .item-detail-kr {
      font-size: 11px;
      color: rgba(34, 34, 34, 0.5);
    }
  }

  .price-info {
    padding: 0 4px;

    .price {
      font-size: 14px;
      font-weight: 700;
    }

    .desc {
      font-size: 11px;
      color: rgba(34, 34, 34, 0.5);
    }
  }

  .icon-box {
    padding: 12px 4px 0 0;
    display: flex;
    justify-content: space-between;

    .save {
    }

    .save {
      cursor: pointer;
    }
  }
`;

const ImgBox = styled.div`
  height: 230px;
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
`;
// modal style

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
        color: rgba(34, 34, 34, 0.5);
        margin: 2px 0 0;
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
    color: rgba(34, 34, 34, 0.8);
    border-radius: 5px;
    margin: 24px 0 32px;
  }
`;

const ModalImgBox = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${props => props.modalBg});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 15px;
`;

const ShopItem = ({ product, idx }) => {
  const [param, setParam] = useRecoilState(paramAtom);
  // modal
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  // item book mark
  const toggle = product._wish;
  const [products, setProducts] = useRecoilState(productAtom);

  const controlToggle = () => {
    const sample = { ...product };
    sample._wish = !sample._wish;
    const newList = [...products].map((v, i) => {
      if (i === idx) return sample;
      else return v;
    });
    setProducts(newList);
    console.log("controlToggle");
    setOpen(true);
  };
  console.log(product);
  return (
    <>
      <ItemBlcok>
        <div
          onClick={() => {
            setParam(product.no);
          }}>
          <Link to={`/product/${product.no}`}>
            <ImgBox backgroundImage={product.image.url}></ImgBox>
          </Link>
        </div>
        <div>
          <div className="product-info">
            <p className="name">{product.brand.name}</p>
            <p className="item-detail">{product.en_name}</p>
            <p className="item-detail-kr">{product.kor_name}</p>
          </div>
          <div className="price-info">
            <p className="price">{product.price} 원</p>
            <p className="desc">즉시 구매가</p>
          </div>
          <div className="icon-box">
            <div className="save" onClick={controlToggle}>
              {!toggle ? <BookmarkBorderIcon /> : <BookmarkIcon />}
            </div>
          </div>
        </div>
      </ItemBlcok>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box align="center">
          <div className="modal-header">
            <h2 className="title">관심 상품 추가</h2>
          </div>
          <div className="modal-body">
            <div className="list-info">
              <ModalImgBox modalBg={product.image.url}></ModalImgBox>
              <div className="info">
                <p className="name-en">{product.en_name}</p>
                <p className="name-ko">{product.kor_name}</p>
              </div>
            </div>
            <Hr margin="10px 0 8px"></Hr>
            <div className="scroll-body">
              <Grid container>
                <Grid item xs={4}>
                  <div className="size-box">
                    <button type="button" className="size-btn">
                      <span className="size-name">ONE SIZE</span>
                      <br />
                      <i className="bokkmark-icon">
                        <BookmarkBorderIcon sx={{ width: 16, height: 16 }} />
                      </i>
                    </button>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="size-box">
                    <button type="button" className="size-btn">
                      <span className="size-name">ONE SIZE</span>
                      <br />
                      <i className="bokkmark-icon">
                        <BookmarkBorderIcon sx={{ width: 16, height: 16 }} />
                      </i>
                    </button>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="size-box">
                    <button type="button" className="size-btn">
                      <span className="size-name">ONE SIZE</span>
                      <br />
                      <i className="bokkmark-icon">
                        <BookmarkBorderIcon sx={{ width: 16, height: 16 }} />
                      </i>
                    </button>
                  </div>
                </Grid>
              </Grid>
            </div>
            <button className="check">확인</button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ShopItem;
