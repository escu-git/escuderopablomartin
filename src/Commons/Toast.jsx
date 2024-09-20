// Toast.js
import React, { useState, useEffect } from 'react';
import '../styles/toast.css';
import { useToast } from '../Context/ToastContext';

const Toast = () => {
  const { toastMessage, toastDuration, closeToast } = useToast();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        closeToast();
      }, toastDuration || 3000);

      return () => clearTimeout(timer);
    }
  }, [toastMessage, toastDuration, closeToast]);

  if (!visible) return null;

  return <div className="toast-container">{toastMessage}</div>;
};

export default Toast;
