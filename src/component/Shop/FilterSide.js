import React, { } from 'react';
import styled from 'styled-components';
import AccordionFillter from './AccordionFillter';


const Side = styled.div`
  width: 210px;
  padding-right: 20px;
  position: sticky;
  top:103px;
  h4{
    margin:0;
    padding: 16px 0;
  }
  .menu{
    max-height: 340px;
    overflow-y: auto;

    .list{
      list-style-type: none;
      padding: 0;
      margin: 0;

      
    }
    &::-webkit-scrollbar{
      width: 1px;
    }
  }
  
  
`

const FilterSide = () => {
  return (
    <aside>
      <Side>
        <h4>필터</h4>
        <AccordionFillter></AccordionFillter>
      </Side>
    </aside>
  )
}

export default FilterSide