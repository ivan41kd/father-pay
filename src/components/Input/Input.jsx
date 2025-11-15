import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useState } from 'react';

const Input = ({
  type,
  placeholder,
  isNumeric,
  name,
  error,
  register,
  value,
  onChange,
  icon,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(value);
  const debounced = useDebouncedCallback((value) => {
    onChange(value);
  }, 500);

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  const handleChange = (e) => {
    setInputValue(
      !isNumeric
        ? e.target.value
        : e.target.value
            .replace(/[^0-9.]/g, '')
            .replace(/^0+/, '')
            .toLocaleString('ru-RU')
    );
    debounced(
      !isNumeric
        ? e.target.value
        : e.target.value.replace(/[^0-9.]/g, '').replace(/^0+/, '')
    );
  };
  return (
    <TextField
      type={type}
      name={name}
      error={error && 'true'}
      value={inputValue}
      className={`${inputValue ? 'filled' : ''} field_sm w-full`}
      {...(register && register)}
      onChange={(e) => handleChange(e)}
      sx={{
        input: {
          padding: {
            all: '14px 20px',
            sm: '20px',
          },
        },
        '& .MuiInputBase-root': {
          fontFamily: 'Inter',
          fontWeight: 400,
          color: `${value ? 'white' : '#4F5562'}`,
          background: '#21242B',
        },
        '.MuiOutlinedInput-root': {
          color: `${value ? 'white' : ''}`,
        },
      }}
      placeholder={placeholder}
      variant="outlined"
      slotProps={{
        input: {
          endAdornment: <InputAdornment>{icon}</InputAdornment>,
        },
      }}
      inputProps={{
        ...(isNumeric && { inputMode: 'numeric' }),
      }}
      {...rest}
    />
  );
};

export default Input;
