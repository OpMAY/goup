import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import {isToggleAtom} from "../../atoms/atom";
import {useRecoilState} from "recoil";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


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
    const arr = [{}, {}, {}, {}, {}, {}, {}, {}]
    const [checked, setChecked] = useState([false, false, false, false, false, false, false, false, false]);

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
        if(event.target.checked){
            setOpen(true);
        } else{
            setOpen(false)
        }
    }

    const children = (
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
            {
                open ? 
                arr.map((a, i) => (
                    <FormControlLabel
                        label="스니커즈"
                        control={<Checkbox checked={checked[i + 1]} data-index={i + 1} onChange={handleChange}/>}
                        key={i}
                    />
                )) : null
            }
        </Box>
    );

    return (
        <>
            <div className='menu' data-type={'category'}>
                <BtnBox>
                    <h4>카테고리</h4>
                    <button className="plus" onClick={controlToggle}> {
                        isToggle ? <RemoveCircleIcon /> : <AddCircleIcon />
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


export default AccordionFillter
