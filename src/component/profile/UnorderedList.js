import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Unordered = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 15px;
  margin: 0;
  li {
    padding-bottom: 8px;
    a {
      color: rgba(34, 34, 34, 0.5);
      text-decoration: none;
      &:focus {
        &:active {
          font-weight: 700;
          color: #222;
        }
      }
    }
  }
`;

const UnorderedList = ({ list, listName }) => {
  console.log(list);

  return (
    <>
      {listName ? (
        <Typography
          variant="h6"
          marginBottom="12px"
          marginTop={listName === "내 정보" && "40px"}
          fontWeight="700">
          {listName}
        </Typography>
      ) : null}
      <Unordered>
        {list.map((item, _) => (
          <li key={item.name}>
            <Link to={`${item.link}`}>{item.name}</Link>
          </li>
        ))}
      </Unordered>
    </>
  );
};

export default UnorderedList;
