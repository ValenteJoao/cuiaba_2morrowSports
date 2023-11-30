// ModalContext.js
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [isModalOpenPlans, setIsModalOpenPlans] = useState(false);

  const openModalLogin = () => {
    setIsModalOpenLogin(true);
  };

  const closeModalLogin = () => {
    setIsModalOpenLogin(false);
  };

  const openModalPlans = () => {
    setIsModalOpenPlans(true);
  };

  const closeModalPlans = () => {
    setIsModalOpenPlans(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpenLogin,
        openModalLogin,
        closeModalLogin,
        openModalPlans,
        closeModalPlans,
        isModalOpenPlans,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
