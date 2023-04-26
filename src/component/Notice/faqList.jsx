import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { SlArrowDown } from "react-icons/sl";

const FaqList = ({ qna }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => isExpanded => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {qna && qna.length > 0 ? (
        qna.map(item => (
          <Accordion
            key={item.no}
            TransitionProps={{ unmountOnExit: true }}
            expanded={expanded === `panel${item.no}`}
            onChange={handleChange(`panel${item.no}`)}
            sx={{
              boxShadow: "none",
              "&.MuiPaper-root": { margin: 0 },
            }}>
            <AccordionSummary
              className="what_the"
              expandIcon={<SlArrowDown size="16"></SlArrowDown>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                padding: 0,
                borderBottom: "1px solid #ebebeb",
                "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
                  margin: 0,
                },
                "& .MuiAccordionSummary-content": { margin: "20px 0" },
              }}>
              <Typography
                sx={{
                  width: "70px",
                  fontSize: "14px",
                  fontWeight: "700",
                  flexShrink: 0,
                }}>
                {item.type}
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "30px",
                backgroundColor: "#fafafa",
              }}>
              <Typography sx={{}}>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            padding: "40px",
            color: "rgba(34,34,34,.5)",
          }}>
          해당하는 내용이 아직 없습니다.
        </Typography>
      )}
    </div>
  );
};

export default FaqList;
