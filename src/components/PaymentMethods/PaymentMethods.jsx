import { useDispatch, useSelector } from 'react-redux';
import PaymentMethod from './PaymentMethod';
import s from './payment.module.scss';
import { setMethod } from '../Replenishment/redux/actions';

const PaymentMethods = () => {
  const { methods, activeMethod } = useSelector((state) => state.replenishment);
  const dispatch = useDispatch();

  const methodHandler = (index, commission) => {
    dispatch(setMethod(commission, index));
  };
  return (
    <div className="flex flex-col gap-3">
      <p className="caption_sm text-[#4F5562]">Выберите платежную систему</p>
      <div className={s.payment__methods}>
        {methods.map((method, index) => (
          <PaymentMethod
            icon={method.icon}
            isActive={index === activeMethod && true}
            commission={method.commission}
            index={index}
            onClick={methodHandler}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
