// Lưu token vào localStorage
export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Lấy token từ localStorage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
 
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
