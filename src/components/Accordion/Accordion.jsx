import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => {
    setExpanded(panel);
  };
  return (
    <div className="flex flex-col gap-2">
      {items &&
        items.map((item, index) => (
          <AccordionItem
            open={expanded === index}
            title={item.title}
            onChange={() => handleChange(expanded === index ? false : index)}
            text={item.text}
            key={index}
          />
        ))}
    </div>
  );
};

export default Accordion;
