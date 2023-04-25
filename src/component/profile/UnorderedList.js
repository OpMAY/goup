import React, { useState } from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Unordered = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 15px;
  margin: 0;
  li {
    padding-bottom: 8px;
    padding: 0;
    button {
      color: rgba(34, 34, 34, 0.5);
      text-decoration: none;
    }
    .select {
      font-weight: 700;
      color: #222;
    }
    a {
      display: block;
      padding: 4px 0;
    }
  }
`;

const UnorderedList = ({ list, listName, path, link }) => {
  let [btnActive, setBtnActive] = useState(path);

  const handleClick = type => {
    setBtnActive(type);
  };

  const linkStyle = {
    color: "#222",
    textDecoration: "none",
    fontSize: "32px",
  };
  const normalStyle = {
    color: "#222",
  };

  return (
    <>
      <Typography
        component={link ? Link : Typography}
        to={link ? `/${link}` : null}
        sx={link ? linkStyle : normalStyle}
        variant="h6"
        marginTop={listName === "내 정보" && "40px"}
        fontWeight="700">
        {listName}
      </Typography>
      <Unordered>
        {list.map((item, id) => {
          return (
            <li key={item.name}>
              <Button
                component={Link}
                value={id}
                sx={{ color: "rgba(34, 34, 34, 0.5)", textDecoration: "none" }}
                to={`${item.link}`}
                onClick={() => handleClick(item.main)}
                className={`${
                  btnActive === item.main && btnActive === path ? "select" : ""
                }`}>
                {item.name}
              </Button>
            </li>
          );
        })}
      </Unordered>
    </>
  );
};

export default UnorderedList;
