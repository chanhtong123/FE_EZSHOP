// src/components/CustomToast.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ message, type }) => {
  const notify = () => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    } else {
      toast(message);
    }
  };

  React.useEffect(() => {
    if (message) {
      notify();
    }
  }, [message, type]);

  return <ToastContainer />;
};

export default CustomToast;
