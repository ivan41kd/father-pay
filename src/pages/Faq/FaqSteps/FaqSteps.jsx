import { useState } from 'react';
import s from '../faq.module.scss';
import SteamIcon from '../../../assets/steam-icon.svg?react';
import AmountIcon from '../../../assets/amount-icon.svg?react';
import WalletIcon from '../../../assets/wallet-icon.svg?react';
import CartIcon from '../../../assets/cart-icon.svg?react';
import FaqStep from '../FaqStep/FaqStep';

const FaqSteps = () => {
  const [steps, setSteps] = useState([
    {
      icon: <SteamIcon />,
      title: 'Введите свой логин Steam',
    },
    {
      icon: <AmountIcon />,
      title: 'Укажите желаемую сумму пополнения',
    },
    {
      icon: <WalletIcon />,
      title: 'Оплати любым удобным методом',
    },
    {
      icon: <CartIcon />,
      title: 'Получи деньги на баланс Steam!',
    },
  ]);
  return (
    <div className={s.faq__steps}>
      {steps.map((step, index) => (
        <FaqStep
          icon={step.icon}
          title={step.title}
          step={index + 1}
          steps={steps.length}
          key={index}
        />
      ))}
    </div>
  );
};

export default FaqSteps;
