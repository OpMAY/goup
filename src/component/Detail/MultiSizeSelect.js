import * as React from "react";
import styled from "styled-components";

const SelectList = styled.span`
  padding-top: 10px;
  #size-select {
    border: none;
  }
`;

export default function MultipleSelect() {
  const handleSize = e => {
    console.log(e.target.value);
  };
  return (
    <SelectList>
      <select onChange={handleSize} name="size" id="size-select">
        <option value="all" defaultValue>
          모든 사이즈
        </option>
        <option value="240">240</option>
        <option value="245">245</option>
        <option value="250">250</option>
        <option value="255">255</option>
      </select>
    </SelectList>
  );
}
