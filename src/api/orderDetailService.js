import axiosInstance from '../config/axiosConfig.js';

// Lấy chi tiết đơn hàng theo ID
export const getOrderDetailById = async (id) => {
    try {
        const response = await axiosInstance.get(`/guest/api/order-details/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

// Lấy danh sách tất cả các chi tiết đơn hàng
export const getAllOrderDetails = async () => {
    try {
        const response = await axiosInstance.get('/guest/api/order-details');
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

// Tạo mới một chi tiết đơn hàng
export const createOrderDetail = async (orderDetail) => {
    try {
        const response = await axiosInstance.post('/guest/api/order-details', orderDetail);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

// Cập nhật một chi tiết đơn hàng theo ID
export const updateOrderDetail = async (id, orderDetail) => {
    try {
        const response = await axiosInstance.put(`/guest/api/order-details/${id}`, orderDetail);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

// Xóa một chi tiết đơn hàng theo ID
export const deleteOrderDetail = async (id) => {
    try {
        await axiosInstance.delete(`/guest/api/order-details/${id}`);
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

// Lấy danh sách các chi tiết đơn hàng theo orderId
export const getOrderDetailByOrderId = async (orderId) => {
    try {
        const response = await axiosInstance.get(`/guest/api/order-details/order_id?order_id=${orderId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};
