import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import {isToggleAtom, tokenAtom} from "../../atoms/atom";
import {useRecoilState} from "recoil";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {axiosGetFunction} from "../../module/CustomAxios";


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
    const [open, setOpen] = useState([])
    const [isToggle, setIsToggle] = useRecoilState(isToggleAtom);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const arr = [{}, {}, {}, {}, {}, {}, {}, {}]
    const [checked, setChecked] = useState([]);
    const [token, setToken] = useRecoilState(tokenAtom);

    useEffect(() => {
        axiosGetFunction('/api/kream/product/shop/filter', {}, token, setToken).then((res) => {
            console.log(res.data)
            setCategories(res.data.data.filters.categories);
            const tmp = [];
            const open_tmp = [];
            for (let i = 0; i < categories.length; i++) {
                const tmp_lv2 = [];
                open_tmp.push(false);
                tmp_lv2.push(false);
                for (let j = 0; j < categories[i].items.length; j++) {
                    tmp_lv2.push(false);
                }
                tmp.push(tmp_lv2);
            }
            setChecked(tmp);
            setOpen(open_tmp);
            setBrands(res.data.data.filters.brands);
        })
    }, [])

    const controlToggle = () => {
        setIsToggle(!isToggle);
    }

    const handleChange = (event) => {
        checked[0] = false;
        checked[event.target.closest('span').dataset['index']] = event.target.checked;
        setChecked([...checked]);
        console.log([...checked])
        console.log('brands:', brands)
        console.log('categories:', categories)
    }

    const handleAll = (event) => {
        checked[0] = event.target.checked;
        if (event.target.checked === true) {
            checked.forEach((value, index, array) => {
                if (index !== 0) {
                    checked[index] = false;
                }
            })
            setChecked([...checked]);
        }
        if (event.target.checked) {
            setOpen(true);
        } else {
            setOpen(false)
        }
    }
    // categories 중복값 찾기
    // const findDuplicates = categories => categories.filters((item, i) => item.indexOf(item) !== i);
    // const duplicates = findDuplicates(categories)
    // console.log(duplicates)
    const category =
        categories.map((a, i) => (
            <>
                <ul className='list'>
                    <FormControlLabel
                        label={a.name}
                        control={
                            <Checkbox
                                checked={checked[i][0]}
                                onChange={handleAll}/>
                        }
                    />
                    <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
                        {
                            a.items.map((child, idx) => (
                                open[i] ?
                                    <FormControlLabel
                                        label={child.name}
                                        control={<Checkbox checked={checked[i][idx + 1]}
                                                           data-index={child.no}
                                                           onChange={handleChange}/>}
                                        key={child.no}
                                    /> : null
                            ))
                        }
                    </Box>
                </ul>
            </>
        ));

    return (
        <>
            {/* 카테고리 */}
            <div className='menu' data-type={'category'}>
                <BtnBox>
                    <h4>카테고리</h4>
                    <button className="plus" onClick={controlToggle}> {
                        isToggle ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    isToggle ?
                        <>
                            {category}
                        </>
                        : null
                }
            </div>
            {/* 브랜드 */}
            <div className='menu' data-type={'brand'}>
                <BtnBox>
                    <h4>브랜드</h4>
                    <button className="plus" onClick={controlToggle}> {
                        isToggle ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    isToggle ?
                        <>
                            {
                                brands != null && brands.length !== 0 ? brands.map((brand, i) => (
                                    <ul className='list' key={i}>
                                        <FormControlLabel
                                            label={brand.name}
                                            control={
                                                <Checkbox
                                                    checked={checked[i]}
                                                    onChange={handleAll}

                                                />
                                            }
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
