import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

import parse from 'html-react-parser';

const AccordionItem = ({ open, title, text, onChange }) => {
  return (
    <Accordion expanded={open} onChange={onChange}>
      <AccordionSummary
        expandIcon={
          !open ? (
            <AddCircleOutlineRoundedIcon
              sx={{
                color: `${open ? '#7B58E8' : '#4F5562'}`,
              }}
            />
          ) : (
            <RemoveCircleOutlineRoundedIcon
              sx={{
                color: `${open ? '#7B58E8' : '#4F5562'}`,
              }}
            />
          )
        }
        slots={{
          content: 'p',
        }}
        sx={{
          color: `${open ? 'white' : '#858892'}`,
        }}
        slotProps={{
          content: { className: 'font-medium' },
        }}
        aria-controls="accordion-content"
        id="accordion-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
          paddingTop: 2,
        }}
      >
        <p className="text_sm">{parse(text)}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
