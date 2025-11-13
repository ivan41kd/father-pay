import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import FormControlLabel from '@mui/material/FormControlLabel';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  transition: '0.3s',
  boxShadow:
    'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#282D36',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  '.error &': {
    border: '1px red solid',
    transition: '0.3s',
  },

  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
    ...theme.applyStyles('dark', {
      background: 'rgba(57,75,89,.5)',
    }),
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
    backgroundColor: '#394b59',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  }),
}));

const BpCheckbox = (props) => {
  return (
    <Checkbox
      sx={{
        '&': {
          width: 16,
          padding: 0,
          height: 16,
          background: '#282D36',
          borderRadius: '3px',
        },
      }}
      disableRipple
      checkedIcon={
        <CheckIcon sx={{ color: '#7B58E8', width: 12, height: 12 }} />
      }
      icon={<BpIcon />}
      slotProps={{ input: { 'aria-label': 'Подтверждение' } }}
      {...props}
    />
  );
};

const CheckBox = ({ register, error, label }) => {
  return label ? (
    <FormControlLabel
      control={
        <BpCheckbox
          className={`${error && 'error'} `}
          {...(register && { ...register })}
        />
      }
      sx={{
        '&': {
          marginRight: 0,
          marginLeft: 0,
          gap: 1,
        },
        '& .MuiFormControlLabel-label': {
          color: 'white',
          fontSize: {
            all: '13px',
            sm: '16px',
          },
          fontFamily: 'Inter',
        },
      }}
      label={label}
    />
  ) : (
    <BpCheckbox
      className={`${error && 'error'} `}
      {...(register && { ...register })}
    />
  );
};

export default CheckBox;
