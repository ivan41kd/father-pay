import { createContext, useContext, useEffect, useRef, useState } from 'react';
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [activeModalId, setActiveModalId] = useState();

  const openModal = (modalId) => {
    setActiveModalId(modalId);
  };

  const closeModal = () => {
    setActiveModalId(null);
  };

  const isModalOpen = (modalId) => activeModalId === modalId;

  const value = {
    activeModalId,
    setActiveModalId,
    openModal,
    closeModal,
    isModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export default ModalProvider;
