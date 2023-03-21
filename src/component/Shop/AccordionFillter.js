import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AccordionFillter = () => {
  return (
    <Accordion
    // expanded={expanded === "panel1"}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>카테고리</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <div className='menu'>
            <ul className='list'>
              <li className='item'>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Test" />
              </FormGroup>
              </li>
            </ul>
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionFillter