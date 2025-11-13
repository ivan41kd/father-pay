import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  return context;
};

export default HeaderProvider;
