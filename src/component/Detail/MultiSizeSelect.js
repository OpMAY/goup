import * as React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { sizeAtom, sizeStateAtom } from "../../atoms/atom";

const SelectList = styled.span`
  padding-top: 10px;
  #size-select {
    border: none;
  }
`;

export default function MultipleSelect() {
  const sizeState = useRecoilValue(sizeStateAtom);
  const size = useRecoilValue(sizeAtom);
  console.log("🎡🎠", size, sizeState);
  const handleSize = e => {
    console.log("지금 클릭한 거 값은", e.target.value);
  };
  return (
    <SelectList>
      <select onChange={handleSize} name="size" id="size-select">
          <option value="all">
            {sizeState}
          </option>
        {size &&
          size.map(sizes => (
            <option key={sizes.no} value={sizes.size} defaultValue={sizeState === sizes.size ? true : false}>
              {sizes.size}
            </option>
          ))}
      </select>
    </SelectList>
  );
}
