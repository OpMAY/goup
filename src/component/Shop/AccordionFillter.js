import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import {shopAxiosFilterAtom, tokenAtom} from "../../atoms/atom";
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
    // 하위 카테고리 빈배열
    const [open, setOpen] = useState([])
    const [toggle, setToggle] = useState({
        category: false,
        brand: false,
        gender: false,
        size: false,
        price: false
    });
    // 카테고리 플러스 버튼
    const [isToggle, setIsToggle] = useState(false);
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
    const [filter, setFilter] = useRecoilState(shopAxiosFilterAtom);

    function getFilterData() {
        const filter = setFilterInit(true);
        axiosGetFunction('/api/kream/product/shop/filter', {}, token, setToken).then((res) => {
            // 카테고리 데이터
            const dataCategories = res.data.data.filters.categories
            setCategories(dataCategories);
            // 브랜드 데이터
            const dataBrands = res.data.data.filters.brands;
            setBrands(dataBrands);
            // 상위 카테고리 || 하위 카테고리 빈배열
            const tmp = [];
            // 상위 카테고리가 열렸는지의 대한 빈배열
            const open_tmp = [];
            // 상위 카테고리만큼 반복문을 돌림
            const filterCategory = filter.categories;
            for (let i = 0; i < dataCategories.length; i++) {
                // 상위 첫번쨰 false값을 넣는 배열
                const tmp_lv2 = [];
                // 상위 카테고리에 false값을 체크하기 위함
                open_tmp.push(filterCategory !== null && filterCategory.includes(dataCategories[i].no.toString()));
                tmp_lv2.push(filterCategory !== null && filterCategory.includes(dataCategories[i].no.toString()));
                // 하위 카테고리만큼 반복문을 돌림
                for (let j = 0; j < dataCategories[i].items.length; j++) {
                    // 하위 카테고리에 대한 false값
                    const bool = filterCategory !== null && filterCategory.includes(dataCategories[i].items[j].no.toString());
                    tmp_lv2.push(bool);
                    if(open_tmp[i] !== undefined && open_tmp[i] === false) {
                        open_tmp[i] = true;
                    }
                    // 만약 위 값이 true면 tmp_lv2[0] = false
                    tmp_lv2[0] = tmp_lv2[0] && bool ? false : tmp_lv2[0];
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
                // 파라미터 필터 값 중 브랜드가 있는가?
                if (filter.brands !== null) {
                    // 있다면 현재 데이터가 (dataBrands[i].no)가 필터값에 대응하는가?
                    // -> 대응하면 check (true), 아니면 uncheck(false)
                    if (filter.brands.includes(dataBrands[i].no.toString())) {
                        brandItem.push(true);
                    } else {
                        brandItem.push(false);
                    }
                } else {
                    brandItem.push(false)
                }
            }
            setBrandCheckd(brandItem);
        })
    }

    function setFilterInit(isToggle) {
        const urlStr = window.location.search;
        const params = new URLSearchParams(urlStr);
        const brands = params.get('brands');
        const categories = params.get('categories');
        const gender = params.get('gender');
        const price = params.get('price');
        const size = params.get('size');
        const brandsParams = brands !== null ? (brands.indexOf(',') !== -1 ? brands.split(',') : [brands]) : null;
        const categoryParams = categories !== null ? (categories.indexOf(',') !== -1 ? categories.split(',') : [categories]) : null;
        const sizeParams = size !== null ? (size.indexOf(',') !== -1 ? size.split(',') : [size]) : null;
        const genderParams = gender !== null ? (gender.indexOf(',') !== -1 ? gender.split(',') : [gender]) : null;
        const inputFilterObject = {
            brands: brandsParams,
            categories: categoryParams,
            size: sizeParams,
            gender: genderParams,
            price: price
        };
        if (isToggle) {
            setToggle((prevState) => {
                console.log(prevState)
                return {
                    ...prevState,
                    category: inputFilterObject.categories !== null,
                    brand: inputFilterObject.brands !== null,
                    size: inputFilterObject.size !== null,
                    gender: inputFilterObject.gender !== null,
                    price: inputFilterObject.price !== null
                }
            })
        }
        return inputFilterObject;
    }

    // 배열이 바뀔떄 실행된다.
    useEffect(() => {
        // filter data
        getFilterData();
    }, [])

    // 하위 카테고리 함수
    const handleChange = (e, i) => {
        const dataType = e.target.closest('.menu').dataset.type;
        console.log(e.target.value)
        const newFilter = setFilterInit(false);
        console.log(newFilter);
        if (dataType === 'category') {
            // ------ 상위 카테고리 --------
            newFilter.categories.push(e.target.value.toString());
            const label = e.target.closest('label');
            if (label.parentNode.tagName === 'UL') {
                console.log('cs', categories);
                const thisUpperCategory = categories.filter(category => {
                    if(category.no.toString() === e.target.value) {
                        return category;
                    }
                })
                console.log(thisUpperCategory);
                const children = thisUpperCategory[0].items.map(category => {
                    return category.no.toString();
                })
                newFilter.categories = newFilter.categories.filter(item => {
                    if (!children.includes(item)) {
                        return item;
                    }
                });
            } else {
                const parent = label.querySelector('span[data-index]').dataset;
                const idx = newFilter.categories.indexOf(parent.index);
                if(idx !== -1) {
                    newFilter.categories.splice(idx, 1);
                }
                console.log(newFilter);
            }
        } else if (dataType === 'brand') {
            brandCheckd[e.target.closest('span').dataset['index']] = e.target.checked;
            setBrandCheckd([...brandCheckd])
        }
        console.log(newFilter);
        const params = new URLSearchParams();
        if (newFilter.categories !== null) {
            params.set('categories', newFilter.categories.toString());
        }
        window.location.href = window.location.pathname + '?' + params.toString()
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
                    <button className="plus" onClick={() => setToggle((prevState) => {
                        return {...prevState, category: !toggle.category}
                    })}> {
                        toggle.category ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    toggle.category ?
                        <>
                            {
                                (categories != null && categories.length > 0) && checked.length > 0 ? categories.map((categories, i) => (
                                    <>
                                        <ul className='list'>
                                            <FormControlLabel
                                                label={categories.name}
                                                control={
                                                    <Checkbox
                                                        checked={checked[i][0]}
                                                        onChange={(e) => {
                                                            handleChange(e, i)
                                                        }}
                                                        value={categories.no}
                                                    />
                                                }
                                            />
                                            <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
                                                {
                                                    categories.items.map((child, idx) => (
                                                        open[i] ?
                                                            <FormControlLabel
                                                                label={child.name}
                                                                control={<Checkbox checked={checked[i][idx + 1]}
                                                                                   data-index={categories.no}
                                                                                   onChange={(e) => {
                                                                                       handleChange(e, i)
                                                                                   }}
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
                    <button className="plus" onClick={() => setBrandToggle((prevState) => {
                        return {...prevState, brand: !toggle.brand}
                    })}> {
                        toggle.brand ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    toggle.brand ?
                        <>
                            {
                                brands != null && brands.length !== 0 ? brands.map((brand, i) => (
                                    <ul className='list'>
                                        <FormControlLabel
                                            label={brand.name}
                                            key={brand.no}
                                            control={<Checkbox
                                                checked={brandCheckd[i]}
                                                data-index={i}
                                                value={brand.no}
                                                onChange={(e) => {
                                                    handleChange(e, i)
                                                }}
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
