import React from "react";
import styled from "@emotion/styled";
import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AiOutlineSearch } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { SlClose } from "react-icons/sl";

const SearchModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const button = {
    padding: 0,
    color: "inherit",
  };

  const style = {
    display: "flex",
    height: "100vh",
    bgcolor: "#fff",
    justifyContent: "center",
    overflowY: "scroll",
  };

  const SearchInput = styled.input`
    width: 800px;
    border: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    text-overflow: ellipsis;
    white-space: nowrap;
    outline: none;
    ::placeholder {
      font-weight: 400;
      opacity: 0.5;
    }
  `;

  const recommendButton = {
    padding: "8px 12px",
    backgroundColor: "#f4f4f4",
    borderRadius: "20px",
    margin: "0 8px 12px 0px",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "13px",
    border: "1px solid #ebebeb",
    color: "rgba(34,34,34,.8)",
  };

  const RecommendList = styled.ol`
    column-count: 2;
    font-size: 14px;
    line-height: 17px;
    list-style: outside;
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      padding: 4px 0 16px;
      span {
        font-weight: 600;
        margin-right: 6px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  `;

  const DeleteWatchList = styled.span`
    text-decoration-color: inherit;
    font-size: 13px;
    margin-left: 5px;
    a {
      color: rgba(34, 34, 34, 0.8);
    }
  `;

  return (
    <div>
      <Button sx={button} className="flex" onClick={handleClickOpen}>
        <AiOutlineSearch size="28" />
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
          <Box width="800px" className="modal_content">
            <Box paddingTop="50px" className="inner_search_box">
              <Box
                height="48px"
                borderBottom="3px solid #000"
                paddingBottom="16px"
                display="flex"
                position="relative">
                <SearchInput
                  autoFocus
                  placeholder="브랜드명, 모델명, 모델번호 등"
                />
                <IconButton>
                  <SlClose size={20}></SlClose>
                </IconButton>
              </Box>
            </Box>
            <Box className="inner_content_box" marginTop="20px">
              <Stack
                direction="column"
                paddingBottom="40px"
                className="recommend_search">
                <Typography mb="12px" sx={{ fontWeight: "700" }}>
                  추천 검색어
                </Typography>
                <Box>
                  {RECOMMENT_SEARCH.map((item, _) => (
                    <Button sx={recommendButton} key={item.num}>
                      {item.name}
                    </Button>
                  ))}
                </Box>
              </Stack>
              <Stack
                direction="column"
                paddingBottom="40px"
                className="recommend_search">
                <Typography mb="12px" sx={{ fontWeight: "700" }}>
                  인기 검색어
                </Typography>
                <Box>
                  <RecommendList>
                    {POPULAR_SEARCH.map((item, _) => (
                      <li key={item.rankingNum}>
                        <span>{item.rankingNum}</span>
                        <a href="?" alt="search">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </RecommendList>
                </Box>
              </Stack>
              <Stack
                direction="column"
                paddingBottom="40px"
                className="recommend_search">
                <Typography mb="12px" sx={{ fontWeight: "700" }}>
                  인기 브랜드
                </Typography>
                <Box>
                  <Grid rowGap="12px" columnGap="8px" container>
                    {POPULAR_BRAND.map((item, _) => (
                      <Grid item xs={2.3} key={item.num}>
                        <Box
                          sx={{
                            height: "78px",
                            borderRadius: "10px",
                            backgroundImage: `url(${item.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionY: "center",
                          }}></Box>
                        <Typography
                          variant="body1"
                          fontSize="13px"
                          textAlign="center"
                          marginTop="8px">
                          {item.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Stack>
              <Stack
                direction="column"
                paddingBottom="40px"
                className="recommend_search">
                <Typography mb="12px" sx={{ fontWeight: "700" }}>
                  최근 본 상품
                  <DeleteWatchList>
                    <a href="?" alt="delete">
                      지우기
                    </a>
                  </DeleteWatchList>
                </Typography>
                <Box>
                  <Grid rowGap="12px" columnGap="8px" container>
                    <Grid item width="80px">
                      <Box
                        sx={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "10px",
                          backgroundImage: `url(https://imagecdn.skstoa.com/goods/853/28320853_g.jpg)`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPositionY: "center",
                        }}></Box>
                      <Box
                        component="span"
                        variant="body1"
                        fontSize="11px"
                        marginTop="6px"
                        text-overflow="ellipsis"
                        white-space="nowrap">
                        Louis Vuitton Envelope
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModal;

const RECOMMENT_SEARCH = [
  { num: 1, name: "티파니" },
  { num: 2, name: "가젤" },
  { num: 3, name: "목걸이" },
  { num: 4, name: "에어팟" },
  { num: 5, name: "가디건" },
  { num: 6, name: "COS백" },
  { num: 7, name: "디젤" },
  { num: 8, name: "크림 단독" },
];

const POPULAR_SEARCH = [
  { rankingNum: 1, name: "나이키" },
  { rankingNum: 2, name: "티파니" },
  { rankingNum: 3, name: "에어포스" },
  { rankingNum: 4, name: "아식스" },
  { rankingNum: 5, name: "스투시" },
  { rankingNum: 6, name: "가젤" },
  { rankingNum: 7, name: "뉴발란스" },
  { rankingNum: 8, name: "덩크" },
  { rankingNum: 9, name: "조던" },
  { rankingNum: 10, name: "아크테릭스" },
];

const POPULAR_BRAND = [
  {
    num: 1,
    url: "https://mblogthumb-phinf.pstatic.net/20160817_20/ppanppane_1471401040211I5BJE_PNG/%B7%CE%B0%ED-29.png?type=w800",
    name: "에르메스",
  },
  {
    num: 2,
    url: "https://digitalhub.fifa.com/m/6f4242005904d785/original/Partner-asset-inverted-logo-ADIDAS-01.png",
    name: "아디다스",
  },
  {
    num: 3,
    url: "https://mblogthumb-phinf.pstatic.net/20160817_20/ppanppane_1471401040211I5BJE_PNG/%B7%CE%B0%ED-29.png?type=w800",
    name: "에르메스",
  },
  {
    num: 4,
    url: "https://digitalhub.fifa.com/m/6f4242005904d785/original/Partner-asset-inverted-logo-ADIDAS-01.png",
    name: "아디다스",
  },
  {
    num: 5,
    url: "https://mblogthumb-phinf.pstatic.net/20160817_20/ppanppane_1471401040211I5BJE_PNG/%B7%CE%B0%ED-29.png?type=w800",
    name: "에르메스",
  },
  {
    num: 6,
    url: "https://digitalhub.fifa.com/m/6f4242005904d785/original/Partner-asset-inverted-logo-ADIDAS-01.png",
    name: "아디다스",
  },
  {
    num: 7,
    url: "https://mblogthumb-phinf.pstatic.net/20160817_20/ppanppane_1471401040211I5BJE_PNG/%B7%CE%B0%ED-29.png?type=w800",
    name: "에르메스",
  },
  {
    num: 8,
    url: "https://digitalhub.fifa.com/m/6f4242005904d785/original/Partner-asset-inverted-logo-ADIDAS-01.png",
    name: "아디다스",
  },
  {
    num: 9,
    url: "https://mblogthumb-phinf.pstatic.net/20160817_20/ppanppane_1471401040211I5BJE_PNG/%B7%CE%B0%ED-29.png?type=w800",
    name: "에르메스",
  },
  {
    num: 10,
    url: "https://digitalhub.fifa.com/m/6f4242005904d785/original/Partner-asset-inverted-logo-ADIDAS-01.png",
    name: "아디다스",
  },
];
