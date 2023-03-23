import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import {isToggleAtom} from "../../atoms/atom";
import {useRecoilState} from "recoil";


const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 10px;

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
    const [isToggle, setIsToggle] = useRecoilState(isToggleAtom);
    const arr = [{}, {}, {}, {}, {}, {}, {}, {}]
    const [checked, setChecked] = useState([false, false, false, false, false, false, false, false, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const controlToggle = () => {
        setIsToggle(!isToggle);
    }


    const handleChange = (event) => {
        checked[0] = false;
        checked[event.target.closest('span').dataset['index']] = event.target.checked;
        setChecked([...checked]);
    }

    const handleAll = (event) => {
        checked[0] = event.target.checked;
        if (event.target.checked === true) {
            checked.forEach((value, index, array) => {
                if (index !== 0) {
                    checked[index] = false;
                }
            })
            console.log(checked);
            setChecked([...checked]);
        }
    }

    const children = (
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
            {
                arr.map((a, i) => (
                    <FormControlLabel
                        label="스니커즈"
                        control={<Checkbox checked={checked[i + 1]} data-index={i + 1} onChange={handleChange}/>}
                        key={i}
                    />
                ))
            }
        </Box>
    );

    return (
        <>
            <div className='menu' data-type={'category'}>
                <BtnBox>
                    <h4>카테고리</h4>
                    <button className="plus" onClick={controlToggle}> {
                        isToggle ? '-' : '+'
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
        </>
    )
}

const filterChangeFunction = (e) => {
    /**
     * 1-1. 페이지 내에 있는 모든 필터에서 체크 된 값을 확인
     * 1-2. 현재 체크된 필터의 종류가 어떤 종류인지 확인 해야함
     *      1) 카테고리에 있는지, 성별에 있는지, 브랜드에 있는지
     *      2) 카테고리면 상위카테고리인지, 하위 카테고리인지
     * **/
    console.log(e.target)
    const value = e.target.value;
    const filter_type = e.target.closest('[data-type]');
    const level = e.target.closest('label').dataset['level']
    console.log('value : ', value, ', type : ', filter_type.dataset['type'], ', level : ', level);
    if (level === '1') {
        console.log(filter_type.querySelectorAll('[data-level="2"]'))
    } else if (level === '2') {
        console.log(filter_type.querySelectorAll('[data-level="1"]'))
    }

}

export default AccordionFillter
