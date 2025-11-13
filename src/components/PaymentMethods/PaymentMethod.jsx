import s from './payment.module.scss';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const PaymentMethod = ({ icon, isActive, onClick, commission, index }) => {
  return (
    <div
      className={`${s.payment__method} ${
        isActive ? s.payment__method_active : ''
      } max-sm:min-w-30 max-sm:py-6 sm:py-9 px-2 sm:min-w-44 md:max-w-full md:min-w-full relative `}
      onClick={() => {
        onClick(index, commission);
      }}
    >
      <img src={icon} className="size-10 flex flex-1" />

      {isActive && (
        <div className="w-full flex justify-end">
          <CheckBoxIcon
            className="absolute flex bottom-1 md:bottom-2 "
            sx={{
              color: '#7B58E8',
              fontSize: {
                all: 20,
                sm: 24,
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
