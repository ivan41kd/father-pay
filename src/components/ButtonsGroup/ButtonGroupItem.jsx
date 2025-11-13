import Button from '@mui/material/Button';

const ButtonGroupItem = ({ value, onClick }) => {
  return (
    <Button
      sx={{
        '&': {
          fontFamily: 'Inter',
          fontWeight: 600,
          color: '#9EA1A5',
          fontSize: {
            all: '13px',
            sm: '16px',
          },
          width: '100%',
          padding: {
            all: '16px 8px',
            sm: '20px',
          },
        },
        '&:hover': {
          bgcolor: 'rgba(33, 36, 60, 3)',
          boxShadow: 'none',
        },
      }}
      onClick={onClick}
      value={value}
    >
      {value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
    </Button>
  );
};

export default ButtonGroupItem;
