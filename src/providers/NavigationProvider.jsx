import { createContext, useContext, useState } from 'react';
import ModalContact from '../components/Modal/ModalContact';
export const NavigationContext = createContext();
const NavigationProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      title: 'FAQs',
      link: '/faq',
    },
    {
      title: 'Контакты',
      modal: ModalContact,
    },
    {
      title: 'Отзывы',
      link: '/reviews',
    },
  ]);

  const value = {
    items,
    setItems,
  };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  return context;
};

export default NavigationProvider;
