import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-top: 2px solid #000;
  border-collapse: collapse;
  thead{
    
    tr{
      border-bottom: 1px solid #ccc;
      th{
        padding: 15px 15px;
        font-size: 13px;
        font-weight: 400;
        text-align: left;
        background-color: #eee;
        &:last-child{
          border-left: 1px solid #ccc;
        }
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 15px 15px;
        text-align: left;
        font-size: 13px;
        border-bottom: 1px solid #ccc;
        
        &:last-child{
          border-left: 1px solid #ccc;
        }
        &.not{
          border-left: 0;
          text-align: center;
          padding: 150px 0;
          color: rgba(34,34,34,.5);
        }
      }
    }
  }
`

const PointTabel = () => {
  return (

    <Table>
      <colgroup>
        <col width="80%" />
        <col width="20%" />
      </colgroup>
      <thead>
        <tr>
          <th>상세 내역</th>
          <th>적립/사용</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1번</td>
          <td>2번</td>
        </tr> */}
        <tr>
          <td colSpan="2" className='not'>
            <p>적립 또는 사용한 내역이 없습니다.</p>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PointTabel