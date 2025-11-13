import { useState } from 'react';
import { useReplenishmentContext } from '../../providers/ReplenishmentProvider';
import PaymentMethod from './PaymentMethod';
import s from './payment.module.scss';

const PaymentMethods = () => {
  const { methods, setCommission, activeMethod, setActiveMethod } =
    useReplenishmentContext();

  const methodHandler = (index, commission) => {
    setActiveMethod(index);
    setCommission(commission);
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
