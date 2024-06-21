import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ message, type }) => {
  useEffect(() => {
    const notify = () => {
      if (type === 'success') {
        toast.success(message);
      } else if (type === 'error') {
        toast.error(message);
      } else {
        toast(message);
      }
    };

    if (message) {
      notify();
    }
  }, [message, type]);

  return <ToastContainer />;
};

export default CustomToast;
