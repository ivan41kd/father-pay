import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
const Input = ({
  type,
  placeholder,
  name,
  error,
  register,
  value,
  onChange,
  icon,
  ...rest
}) => {
  return (
    <TextField
      type={type}
      name={name}
      error={error && 'true'}
      className={`${value ? 'filled' : ''} field_sm w-full`}
      value={value}
      {...(register && register)}
      onChange={onChange}
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
      {...rest}
    />
  );
};

export default Input;
