import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonGroupItem from './ButtonGroupItem';
import { useState } from 'react';

const ButtonsGroup = ({ onClick }) => {
  const [values] = useState([
    {
      value: 100,
      onClick,
    },
    {
      value: 500,
      onClick,
    },
    {
      value: 1000,
      onClick,
    },
    {
      value: 2000,
      onClick,
    },
  ]);
  return (
    <ButtonGroup
      color="dark_bg"
      variant="contained"
      aria-label="Prices group"
      sx={{
        '&': {
          gap: '2px',
          boxShadow: '0',
          borderRadius: '12px',
        },
        '.MuiButtonGroup-grouped:not(:last-of-type)': {
          borderColor: 'transparent',
          borderRightWidth: '2px',
          borderRightStyle: 'solid',
        },
      }}
    >
      {values.map((item) => {
        return <ButtonGroupItem value={item.value} onClick={item.onClick} />;
      })}
    </ButtonGroup>
  );
};

export default ButtonsGroup;
