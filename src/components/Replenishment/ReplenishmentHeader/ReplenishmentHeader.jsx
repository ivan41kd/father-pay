import { useState } from 'react';
import PaymentIcon from '../../../assets/payment-icon.svg?react';
import ClientIcon from '../../../assets/client-icon.svg?react';
import s from '../replenishment.module.scss';
import ReplenishmentStats from '../ReplenishmentStats/ReplenishmentStats';
const ReplenishmentHeader = () => {
  const [info, setInfo] = useState([
    {
      icon: <PaymentIcon className={'size-8.8'} />,
      title: 'Пополнений',
      value: 210420,
    },
    {
      icon: <ClientIcon className={'size-8.8'} />,
      title: 'Клиентов',
      value: 97420,
    },
  ]);
  return (
    <div className={`${s.replenishment__header} max-md:flex-col max-md:gap-6`}>
      <h1 className="text-white w-full max-md:text-2xl!">Пополнение Steam</h1>
      <div className={s.replenishment__stats}>
        {info.map((item, index) => {
          return (
            <ReplenishmentStats
              icon={item.icon}
              title={item.title}
              value={item.value}
              style={s}
              key={item.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReplenishmentHeader;
