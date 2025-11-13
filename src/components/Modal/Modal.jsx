import Dialog from '@mui/material/Dialog';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '../Button';
import DialogContent from '@mui/material/DialogContent';

const Modal = ({ title, variant, children, buttonTitle, open, close }) => {
  return (
    <Dialog
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#21242B',
            color: 'white',
            padding: '20px',
            paddingTop: '0px',
            margin: '20px',
            width: '100%',
          },
        },
      }}
      fullWidth
      open={open}
      onClose={close}
    >
      <div className="flex justify-between items-center w-auto sticky top-0 bg-[#21242B] py-5 pb-4">
        <DialogTitle
          sx={{
            padding: 0,
            fontWeight: 600,
            flex: 'auto',
            fontSize: {
              all: 18,
              sm: 24,
            },
          }}
        >
          {title}
        </DialogTitle>
        {variant === 'icon' && (
          <IconButton
            sx={{
              justifyContent: 'end',
              padding: 0,
              alignItems: {
                all: 'normal',
                sm: 'center',
              },
            }}
            color="#4F5562"
            aria-label="close"
            onClick={close}
          >
            <CloseIcon
              sx={{
                '&': {
                  color: '#4F5562',
                },
              }}
            />
          </IconButton>
        )}
      </div>

      <DialogContent
        dividers={scroll === 'paper'}
        sx={{
          padding: 0,
        }}
      >
        <div className="flex flex-col gap-6">
          {children}
          {variant === 'button' && (
            <Button
              text={buttonTitle ?? 'Закрыть'}
              className={'py-3.5'}
              onClick={close}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
