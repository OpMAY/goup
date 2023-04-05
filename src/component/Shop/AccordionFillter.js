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

  useEffect(() => {
    // filter data
    axiosGetFunction('/api/kream/product/shop/filter', {}, token, setToken).then((res) => {
      // 카테고리 데이터
      const dataCategories = res.data.data.filters.categories
      setCategories(dataCategories);
      // 상위 카테고리 || 하위 카테고리 빈배열
      const tmp = [];
      // 하위 카테고리 빈배열
      const open_tmp = [];
      // 상위 카테고리만큼 반복문을 돌림
      for (let i = 0; i < dataCategories.length; i++) {
        // 
        const tmp_lv2 = [];
        open_tmp.push(false);
        tmp_lv2.push(false);
        // 하위 카테고리만큼 반복문을 돌림
        for (let j = 0; j < dataCategories[i].items.length; j++) {
          tmp_lv2.push(false);
        }
        tmp.push(tmp_lv2);
      }
      console.log('tmp', tmp)
      console.log('open_tmp', open_tmp);
      setChecked(tmp);
      setOpen(open_tmp);
      setBrands(res.data.data.filters.brands);
      
    })
  }, [])

  const handleChange = (i, event) => {
    checked[i][0] = false;
    checked[i][event.target.closest('span').dataset['index']] = event.target.checked;
    setChecked([...checked]);
  }

  const handleAll = (i, event) => {
    checked[i][0] = event.target.checked;
    if (event.target.checked === true) {
      checked[i].forEach((value, index, array) => {
        if (index !== 0) {
          checked[i][index] = false;
        }
      })
      setChecked([...checked]);
    }
    const newOpen = [...open].map((v, idx) => {
      if (idx === i) return event.target.checked; else return v;
    })
    setOpen(newOpen)
  }
  console.log('categories : ', categories);
  console.log(checked);

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
                (categories != null && categories.length > 0) && checked.length > 0 ? categories.map((a, i) => (
                  <>
                    <ul className='list' >
                      <FormControlLabel
                        label={a.name}
                        control={
                          <Checkbox
                            checked={checked[i][0]}
                            onChange={(e) => { handleAll(i, e) }}
                            key={a.no}
                          />
                        }
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        {
                          a.items.map((child, idx) => (
                            open[i] ?
                              <FormControlLabel
                                label={child.name}
                                control={<Checkbox checked={checked[i][idx + 1]}
                                  data-index={idx + 1}
                                  onChange={(e) => { handleChange(i, e) }}
                                  key={child.no} />}

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
                  <ul className='list'>
                    <FormControlLabel
                      label={brand.name}
                      control={<Checkbox

                        data-index={i + 1}
                        onChange={(e) => { handleChange(i, e) }}
                        key={brand.no} />}

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
