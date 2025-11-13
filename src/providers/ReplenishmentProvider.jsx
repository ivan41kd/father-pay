import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import visaIcon from '../assets/visa-icon.svg';
import qiwiIcon from '../assets/qiwi-icon.svg';
import youIcon from '../assets/you-icon.svg';
import sbpIcon from '../assets/sbp-icon.svg';
import lavaIcon from '../assets/lava-icon.svg';
import usdtIcon from '../assets/usdt-icon.svg';
import tonIcon from '../assets/ton-icon.svg';
import trxIcon from '../assets/trx-icon.svg';

export const ReplenishmentContext = createContext();

const ReplenishmentProvider = ({ children }) => {
  const [login, setLogin] = useState('');
  const [amount, setAmount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const [methods, setMethods] = useState([
    {
      icon: visaIcon,
      commission: 9,
    },
    {
      icon: qiwiIcon,
      commission: 13,
    },
    {
      icon: youIcon,
      commission: 10,
    },
    {
      icon: sbpIcon,
      commission: 7,
    },
    {
      icon: lavaIcon,
      commission: 12,
    },
    {
      icon: usdtIcon,
      commission: 7,
    },
    {
      icon: tonIcon,
      commission: 8,
    },
    {
      icon: trxIcon,
      commission: 8,
    },
  ]);

  const [activeMethod, setActiveMethod] = useState(0);
  const [commission, setCommission] = useState(methods[0].commission);

  const value = {
    login,
    setLogin,
    amount,
    setAmount,
    isChecked,
    setIsChecked,
    methods,
    setMethods,
    commission,
    setCommission,
    activeMethod,
    setActiveMethod,
  };

  return (
    <ReplenishmentContext.Provider value={value}>
      {children}
    </ReplenishmentContext.Provider>
  );
};

export const useReplenishmentContext = () => {
  const context = useContext(ReplenishmentContext);
  return context;
};

export default ReplenishmentProvider;
