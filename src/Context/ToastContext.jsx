// ToastContext.js
import React, { createContext, useState, useContext, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState('');
  const [toastDuration, setToastDuration] = useState(3000);

  const showToast = useCallback((message, duration = 3000) => {
    setToastMessage(message);
    setToastDuration(duration);
  }, []);

  const closeToast = () => setToastMessage('');

  return (
    <ToastContext.Provider
      value={{ toastMessage, toastDuration, showToast, closeToast }}
    >
      {children}
      {/* El Toast ya está disponible globalmente */}
    </ToastContext.Provider>
  );
};
