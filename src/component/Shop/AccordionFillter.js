import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import {filterChangeAtom, shopAxiosFilterAtom, tokenAtom} from "../../atoms/atom";
import {useRecoilState} from "recoil";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {axiosGetFunction} from "../../module/CustomAxios";
import {Link, useNavigate} from "react-router-dom";


const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
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
const LinkStyle = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const sizeList = {
    display: 'flex',
    paddingRight: '5px',
    flexWrap: 'wrap',
    padding: '0'
}
const SizeBtn = styled.button`
  display: inline-flex;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  font-size: 13px;
  padding: 7px 18px;
  margin-bottom: 3px;
  margin-right: 3px;
  cursor: pointer;
   &.is-active{
     border: 1px solid #000;
     font-weight: 600;
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
    // 카테고리 데이터를 담을 스테이트
    const [categories, setCategories] = useState([]);
    // 브랜드 데이터를 담을 스테이트
    const [brands, setBrands] = useState([]);
    // 사이즈 데이터를 담을 스테이트
    const [size, setSize] = useState([]);
    // 카테고리 length만큼 boolan값을 넣어줄 빈 배열
    const [categoryChecked, setCategoryChecked] = useState([]);
    // get할떄 필요한 token
    const [token, setToken] = useRecoilState(tokenAtom);
    // 브랜드 안에 있는 체크박스 boolean값을 넣기위한 빈배열
    const [brandChecked, setBrandChecked] = useState([]);
    const [genderChecked, setGenderChecked] = useState([false, false, false]);
    const [sizeChecked, setSizeChecked] = useState([]);
    const [priceChecked, setPriceChecked] = useState([false, false, false, false, false, false]);
    const [filterChange, setFilterChange] = useRecoilState(filterChangeAtom);
    const [resultFilter, setResultFilter] = useState({});
    const navigate = useNavigate();

    const sizeInfo = [
        '215', '220', '225', '230', '235', '240', '245', '250', '255', '260', '265', '270', '275', '280', '290', '295', '300', '305', '310', '315', '320', '325', '330'
    ]

    function getFilterData() {
        const filter = setFilterInit();
        axiosGetFunction('/api/kream/product/shop/filter', {}, token, setToken).then((res) => {
            // 카테고리 데이터
            const dataCategories = res.data.data.filters.categories
            setCategories(dataCategories);
            // 브랜드 데이터
            const dataBrands = res.data.data.filters.brands;
            setBrands(dataBrands);
            // 사이즈 데이터
            console.log(res.data.data.filters)
            // 카테고리 Filter Checked SET
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
                    // 하위 카테고리 check(true) -> 해당 상위 카테고리 box 열기
                    if (open_tmp[i] !== undefined && open_tmp[i] === false && bool) {
                        open_tmp[i] = true;
                    }
                    // 만약 위 값이 true면 tmp_lv2[0] = false
                    tmp_lv2[0] = tmp_lv2[0] && bool ? false : tmp_lv2[0];
                }
                // 상위 카테고리 [0] && 하위 카테고리[1 ~ 999] 에 대한 false 값을 정함
                tmp.push(tmp_lv2);
            }
            // 상위[0] && 하위[1 ~ 999]를 컨트롤 하기 위해 값을 넣어줌
            setCategoryChecked(tmp);
            // 상위 카테고리가 체크 되면 하위카테고리를 나타내기위
            setOpen(open_tmp);

            // 브랜드 Filter Checked SET
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
            setBrandChecked(brandItem);

            // 성별 Filter Checked SET
            const genderItem = [];
            if (filter.gender !== null) {
                console.log(filter.gender)
                for (let i = 0; i < genderChecked.length; i++) {
                    console.log(i);
                    genderItem.push(filter.gender.includes(i.toString()));
                }
            }
            setGenderChecked(genderItem);

            // 사이즈 Filter Checked SET => RENDER 에서 처리

            // 가격 Filter Checked SET
            const priceItem = [false, false, false, false, false, false];
            console.log(filter.price);
            switch (filter.price) {
                case '-100000' :
                    priceItem[0] = true;
                    break;
                case '100000-300000' :
                    priceItem[1] = true;
                    break;
                case '300000-500000' :
                    priceItem[2] = true;
                    break;
                case '500000-1000000' :
                    priceItem[3] = true;
                    break;
                case '1000000-3000000' :
                    priceItem[4] = true;
                    break;
                case '3000000-' :
                    priceItem[5] = true;
                    break;
            }
            setPriceChecked(priceItem);
        })
    }

    function setFilterInit(isToggle = true) {
        const urlStr = window.location.search;
        const params = new URLSearchParams(urlStr);
        const brands = params.get('brands');
        const categories = params.get('categories');
        const gender = params.get('gender');
        const price = params.get('price');
        const size = params.get('size');
        const keyword = params.get('keyword');
        const brandsParams = brands !== null ? (brands.indexOf(',') !== -1 ? brands.split(',') : [brands]) : null;
        const categoryParams = categories !== null ? (categories.indexOf(',') !== -1 ? categories.split(',') : [categories]) : null;
        const sizeParams = size !== null ? (size.indexOf(',') !== -1 ? size.split(',') : [size]) : null;
        const genderParams = gender !== null ? (gender.indexOf(',') !== -1 ? gender.split(',') : [gender]) : null;
        const inputFilterObject = {
            brands: brandsParams,
            categories: categoryParams,
            size: sizeParams,
            gender: genderParams,
            price: price,
            keyword: keyword
        };
        if (isToggle) {
            setToggle((prevState) => {
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
        setResultFilter(inputFilterObject);
        return inputFilterObject;
    }

    // 초기 실행
    useEffect(() => {
        // filter data
        getFilterData();
    }, [])

    // 필터 바뀔 때 (URL PARAMS 변경될 때) 실행
    useEffect(() => {
        // filter data
        if (filterChange) {
            getFilterData();
        }
    }, [filterChange])


    // 하위 카테고리 함수
    const handleChange = (e) => {
        console.log('event : ', e.target);
        const dataType = e.target.closest('.menu').dataset.type;
        const newFilter = setFilterInit(false);
        const checked = e.target.tagName === 'INPUT' ? e.target.checked : !e.target.classList.contains('is-active');
        const value = e.target.tagName === 'INPUT' ? e.target.value : null;
        if (dataType === 'category') {
            // 중복인 카테고리 없애기, check 해제 되었는지 확인
            if (checked) {
                // Filter Null update for data in
                // default value type => array
                if (newFilter.categories === null) {
                    newFilter.categories = [];
                }
                // 중복으로 값 들어가는 것 막기
                if (newFilter.categories.indexOf(value.toString()) === -1) {
                    newFilter.categories.push(value.toString());
                }
                const label = e.target.closest('label');
                // ------ 상위 카테고리 --------
                if (label.parentNode.tagName === 'UL') {
                    // 카테고리 data에서 정보 찾기
                    const thisUpperCategory = categories.filter(category => {
                        if (category.no.toString() === value) {
                            return category;
                        }
                    })
                    // 상위 카테고리 클릭 시 해당 하는 하위 카테고리 (children) 삭제하기
                    const children = thisUpperCategory[0].items.map(category => {
                        return category.no.toString();
                    })
                    newFilter.categories = newFilter.categories.filter(item => {
                        if (!children.includes(item)) {
                            return item;
                        }
                    });
                } else { // ------ 하위 카테고리 --------
                    // parent 선택 되어있을 때 (하위 카테고리의 부모 -> 제거 하기)
                    const parent = label.querySelector('span[data-index]').dataset;
                    const idx = newFilter.categories.indexOf(parent.index);
                    if (idx !== -1) {
                        newFilter.categories.splice(idx, 1);
                    }
                }
            } else {
                // checked = false
                // 해당 카테고리 삭제
                newFilter.categories = newFilter.categories.filter(item => {
                    if (item !== value) {
                        return item;
                    }
                })
                // array 내에 데이터 없으면 null 처리
                if (newFilter.categories.length === 0) {
                    newFilter.categories = null;
                }
            }

        } else if (dataType === 'brand') {
            if (checked) {
                if (newFilter.brands === null) {
                    newFilter.brands = [];
                }
                newFilter.brands.push(value.toString());

            } else {
                newFilter.brands = newFilter.brands.filter(item => {
                    if (item !== value) {
                        return item;
                    }
                })
                if (newFilter.brands.length === 0) {
                    newFilter.brands = null;
                }
            }
        } else if (dataType === 'gender') {
            if (checked) {
                if (newFilter.gender === null) {
                    newFilter.gender = [];
                }
                newFilter.gender.push(value.toString());
            } else {
                newFilter.gender = newFilter.gender.filter(item => {
                    if (item !== value) {
                        return item;
                    }
                })
                if (newFilter.gender.length === 0) {
                    newFilter.gender = null;
                }
            }
        } else if (dataType === 'size') {
            if (checked) {
                if (newFilter.size === null) {
                    newFilter.size = [];
                }
                newFilter.size.push(e.target.textContent.toString());
            } else {
                newFilter.size = newFilter.size.filter(item => {
                    if (item !== e.target.textContent.toString()) {
                        return item;
                    }
                })
                if (newFilter.size.length === 0) {
                    newFilter.size = null;
                }
            }
        } else if (dataType === 'price') {
            // PRICE FILTER 변수는 array로 들어가지 않음
            if (checked) {
                newFilter.price = value.toString();
            } else {
                newFilter.price = null;
            }
        }
        const params = new URLSearchParams();
        if (newFilter.categories !== null) {
            params.set('categories', newFilter.categories.toString());
        }
        if (newFilter.brands !== null) {
            params.set('brands', newFilter.brands.toString());
        }
        if (newFilter.gender !== null) {
            params.set('gender', newFilter.gender.toString());
        }
        if (newFilter.size !== null) {
            params.set('size', newFilter.size.toString());
        }
        if (newFilter.price !== null) {
            params.set('price', newFilter.price.toString());
        }
        // navigate([...params].length > 0 ? '?' + params.toString() : '');
        navigate([...params].length > 0 ? '?' + params.toString() : '', {replace: true});
        // Filter Change update 시 shop.js의 useEffect에서 해당 값을 Listen하고 있어서 데이터 새로 불러옴
        setFilterChange(true);
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
                        return {...prevState, category: !prevState.category}
                    })}> {
                        toggle.category ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    toggle.category ?
                        <>
                            {
                                (categories != null && categories.length > 0) && categoryChecked.length > 0 ? categories.map((categories, i) => (
                                    <>
                                        <ul className='list'>
                                            <FormControlLabel
                                                label={categories.name}
                                                control={
                                                    <Checkbox
                                                        checked={categoryChecked[i][0]}
                                                        onChange={(e) => {
                                                            handleChange(e)
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
                                                                control={<Checkbox checked={categoryChecked[i][idx + 1]}
                                                                                   data-index={categories.no}
                                                                                   onChange={(e) => {
                                                                                       handleChange(e)
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
                    <button className="plus" onClick={() => setToggle((prevState) => {
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
                                                checked={brandChecked[i]}
                                                data-index={i}
                                                value={brand.no}
                                                onChange={(e) => {
                                                    handleChange(e)
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
            <div className='menu' data-type={'gender'}>
                <BtnBox>
                    <h4>성별</h4>
                    <button className="plus" onClick={() => setToggle((prevState) => {
                        return {...prevState, gender: !toggle.gender}
                    })}> {
                        toggle.gender ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    toggle.gender ?
                        <>
                            <ul className='list'>
                                <FormControlLabel
                                    label='키즈'
                                    key={0}
                                    control={<Checkbox
                                        checked={genderChecked[0]}
                                        data-index={0}
                                        value={0}
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                            <ul className='list'>
                                <FormControlLabel
                                    label='남성'
                                    key={1}
                                    control={<Checkbox
                                        checked={genderChecked[1]}
                                        data-index={1}
                                        value={1}
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                            <ul className='list'>
                                <FormControlLabel
                                    label='여성'
                                    key={2}
                                    control={<Checkbox
                                        checked={genderChecked[2]}
                                        data-index={2}
                                        value={2}
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                        </>
                        : null
                }
            </div>
            <div className='menu' data-type={'size'}>
                <BtnBox>
                    <h4>사이즈</h4>
                    <button className="plus" onClick={() => setToggle((prevState) => {
                        return {...prevState, size: !toggle.size}
                    })}> {
                        toggle.size ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    toggle.size ?
                        <>
                            <ul className='list' style={sizeList}>
                                {
                                    sizeInfo.map(size => (
                                        <li>
                                            <SizeBtn className={resultFilter.size !== null && resultFilter.size.includes(size) ? 'is-active' : ''} onClick={handleChange}>{size}</SizeBtn>
                                        </li>
                                    ))
                                }
                            </ul>

                        </>
                        : null
                }
            </div>
            <div className='menu' data-type={'price'}>
                <BtnBox>
                    <h4>가격</h4>
                    <button className="plus" onClick={() => setToggle((prevState) => {
                        return {...prevState, price: !toggle.price}
                    })}> {
                        toggle.price ? <RemoveCircleIcon/> : <AddCircleIcon/>
                    } </button>
                </BtnBox>
                {
                    toggle.price ?
                        <>
                            <ul className='list'>
                                <FormControlLabel
                                    label='10만원 이하'
                                    key={0}
                                    control={<Checkbox
                                        checked={priceChecked[0]}
                                        data-index={0}
                                        value='-100000'
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                            <ul className='list'>
                                <FormControlLabel
                                    label='10-30만원'
                                    key={1}
                                    control={<Checkbox
                                        checked={priceChecked[1]}
                                        data-index={1}
                                        value='100000-300000'
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                            <ul className='list'>
                                <FormControlLabel
                                    label='30-50만원'
                                    key={2}
                                    control={<Checkbox
                                        checked={priceChecked[2]}
                                        data-index={2}
                                        value='300000-500000'
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                            <ul className='list'>
                                <FormControlLabel
                                    label='50-100만원'
                                    key={3}
                                    control={<Checkbox
                                        checked={priceChecked[3]}
                                        data-index={3}
                                        value='500000-1000000'
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                            <ul className='list'>
                                <FormControlLabel
                                    label='100-300만원'
                                    key={4}
                                    control={<Checkbox
                                        checked={priceChecked[4]}
                                        data-index={4}
                                        value='1000000-3000000'
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>
                            <ul className='list'>
                                <FormControlLabel
                                    label='300만원 이상'
                                    key={5}
                                    control={<Checkbox
                                        checked={priceChecked[5]}
                                        data-index={5}
                                        value='3000000-'
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                    />}
                                />
                            </ul>

                        </>
                        : null
                }
            </div>
        </>
    )
}


export default AccordionFillter
