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
    const [open, setOpen] = useState(false)
    const [isToggle, setIsToggle] = useRecoilState(isToggleAtom);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const arr = [{}, {}, {}, {}, {}, {}, {}, {}]
    const [checked, setChecked] = useState([false, false, false, false, false, false, false, false, false]);
    const [token, setToken] = useRecoilState(tokenAtom);

    useEffect(() => {
        axiosGetFunction('/api/kream/product/shop/filter', {}, token, setToken).then((res) => {
            setCategories(res.data.data.filters.categories);
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
        console.log('categories:' ,categories)
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
    const result = categories.filter(word => word.length > 6);
    console.log(result)
    const children = (
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
            {
                open ?
                categories.map((a, i) => (
                        <FormControlLabel
                            label={a.parent_name}
                            control={<Checkbox checked={checked[i + 1]}
                            data-index={i + 1} 
                            onChange={handleChange}/>}
                            key={i}
                        />
                    )) : null
            }
        </Box>
    );
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
                            <ul className='list'>
                                <FormControlLabel
                                    label="신발"
                                    control={
                                        <Checkbox
                                            checked={checked[0]}
                                            onChange={handleAll}/>
                                    }
                                />
                                {children}
                            </ul>
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
