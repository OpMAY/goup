import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import { isToggleAtom, tokenAtom } from "../../atoms/atom";
import { useRecoilState } from "recoil";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { axiosGetFunction } from "../../module/CustomAxios";



const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 10px;
  align-items: center;

  h4 {
    padding: 0;
  }

  .plus {
    background-color: #fff;
    border: 0;
    cursor: pointer;
  }
`

const AccordionFillter = () => {
  // 하위 카테고리 빈배열
  const [open, setOpen] = useState([])
  // 카테고리 플러스 버튼
  const [isToggle, setIsToggle] = useRecoilState(isToggleAtom);
  // 브랜드 플러스 버튼
  const [brandToggle, setBrandToggle] = useState(false)
  // 카테고리 데이터를 담을 스테이트
  const [categories, setCategories] = useState([]);
  // 브랜드 데이터를 담을 스테이트
  const [brands, setBrands] = useState([]);
  // 카테고리 length만큼 boolan값을 넣어줄 빈 배열
  const [checked, setChecked] = useState([]);
  // get할떄 필요한 token
  const [token, setToken] = useRecoilState(tokenAtom);
  // 브랜드 안에 있는 체크박스 boolean값을 넣기위한 빈배열
  const [brandCheckd, setBrandCheckd] = useState([]);

  // 배열이 바뀔떄 실행된다.
  useEffect(() => {
    // filter data
    axiosGetFunction('/api/kream/product/shop/filter', {}, token, setToken).then((res) => {
      // 카테고리 데이터
      const dataCategories = res.data.data.filters.categories
      setCategories(dataCategories);
      console.log('dataCategories', dataCategories);
      // 브랜드 데이터
      const dataBrands = res.data.data.filters.brands;
      console.log('dataBrands', dataBrands);
      setBrands(dataBrands);
      // 상위 카테고리 || 하위 카테고리 빈배열
      const tmp = [];
      // 상위 카테고리가 열렸는지의 대한 빈배열
      const open_tmp = [];
      // 상위 카테고리만큼 반복문을 돌림
      for (let i = 0; i < dataCategories.length; i++) {
        // 상위 첫번쨰 false값을 넣는 배열
        const tmp_lv2 = [];
        // 상위 카테고리에 false값을 체크하기 위함
        open_tmp.push(false);
        tmp_lv2.push(false);
        // 하위 카테고리만큼 반복문을 돌림
        for (let j = 0; j < dataCategories[i].items.length; j++) {
          // 하위 카테고리에 대한 false값
          tmp_lv2.push(false);
        }
        // 상위 카테고리 [0] && 하위 카테고리[1 ~ 999] 에 대한 false 값을 정함
        tmp.push(tmp_lv2);
      }
      // 상위[0] && 하위[1 ~ 999]를 컨트롤 하기 위해 값을 넣어줌
      setChecked(tmp);
      // 상위 카테고리가 체크 되면 하위카테고리를 나타내기위
      setOpen(open_tmp);

      const brandItem = [];
      for (let i = 0; i < dataBrands.length; i++) {
        brandItem.push(false)
      }
      setBrandCheckd(brandItem)
    })
  }, [])

  // 하위 카테고리 함수
  const handleChange = (e, i) => {
    const dataType = e.target.closest('.menu').dataset.type;
    console.log(e.target.value)
    if (dataType === 'category') {

      // ------ 상위 카테고리 --------
      const label = e.target.closest('label');
      if (label.parentNode.tagName === 'UL') {
        console.log(e.target.closest('.menu').dataset.type);
        // checked에 상위 카테고리중 [0]번쨰느 event.target.checkd로 정의
        checked[i][0] = e.target.checked;
        // 만약에 event.target.checked가 true일 경우
        if (e.target.checked === true) {
          // 상위 카테고리중 안에있는 배열을 반복문을 돌림
          checked[i].forEach((value, index, array) => {
            // 만약 checked안에있는 배열의 index가 0이 아니면 checked안에있는 배열의 false값을 넣어준다.
            if (index !== 0) {
              checked[i][index] = false;
            }
          })
        }
        // checked안에 새로운 배열로 checked를 복사해준다
        setChecked([...checked]);
        // 상위 카테고리에 체크된 값을 컨트롤힘
        const newOpen = [...open].map((v, idx) => {
          // newOpen에 idx값이랑 상위에 hendleAll에 i값이 같으면 상위 카테고리의 체크를 해주고 그게 아니면 값을 그대로 둔다
          if (idx === i) return e.target.checked; else return v;
        })
        setOpen(newOpen)
      } else {
        // ------- 하위 카테고리 ---------
        console.log(dataType);
        // checked에 상위 카테고리중 [0]번째에 false값;
        checked[i][0] = false;
        // 렌더링을 위해 스테이트 업데이트
        checked[i][e.target.closest('span').dataset['index']] = e.target.checked;
        // 스테이트가 렌더링될수있게 저장해줌
        setChecked([...checked]);
        console.log(checked)
      }

    } else if (dataType === 'brand') {
      brandCheckd[e.target.closest('span').dataset['index']] = e.target.checked;
      setBrandCheckd([...brandCheckd])
    }
  }
  // 상위 카테고리 함수
  const handleAll = (i, e) => {

  }


  return (
    <>
      {/* 카테고리 */}
      <div className='menu' data-type={'category'}>
        <BtnBox>
          <h4>카테고리</h4>
          <button className="plus" onClick={() => setIsToggle(!isToggle)}> {
            isToggle ? <RemoveCircleIcon /> : <AddCircleIcon />
          } </button>
        </BtnBox>
        {
          isToggle ?
            <>
              {
                (categories != null && categories.length > 0) && checked.length > 0 ? categories.map((categories, i) => (
                  <>
                    <ul className='list' >
                      <FormControlLabel
                        label={categories.name}
                        control={
                          <Checkbox
                            checked={checked[i][0]}
                            onChange={(e) => { handleChange(e, i) }}
                            value={categories.no}
                          />
                        }
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        {
                          categories.items.map((child, idx) => (
                            open[i] ?
                              <FormControlLabel
                                label={child.name}
                                control={<Checkbox checked={checked[i][idx + 1]}
                                  data-index={idx + 1}
                                  onChange={(e) => { handleChange(e, i) }}
                                  value={child.no}
                                />}

                              /> : null
                          ))
                        }
                      </Box>
                    </ul>
                  </>
                )) : null
              }
            </>
            : null
        }
      </div>
      {/* 브랜드 */}
      <div className='menu' data-type={'brand'}>
        <BtnBox>
          <h4>브랜드</h4>
          <button className="plus" onClick={() => setBrandToggle(!brandToggle)}> {
            brandToggle ? <RemoveCircleIcon /> : <AddCircleIcon />
          } </button>
        </BtnBox>
        {
          brandToggle ?
            <>
              {
                brands != null && brands.length !== 0 ? brands.map((brand, i) => (
                  <ul className='list' >
                    <FormControlLabel
                      label={brand.name}
                      key={brand.no}
                      control={<Checkbox
                        checked={brandCheckd[i]}
                        data-index={i}
                        value={brand.no}
                        onChange={(e) => { handleChange(e, i) }}
                      />}

                    />
                  </ul>
                )) : null
              }
            </>
            : null
        }
      </div>
    </>
  )
}


export default AccordionFillter
