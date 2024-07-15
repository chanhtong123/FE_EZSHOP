import axiosInstance from '../config/axiosConfig';

export const getOrderById = async (id) => {
    try {
        const response = await axiosInstance.get(`/guest/api/orders/id?id=${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const createOrder = async (orderDto) => {
    try {
        const response = await axiosInstance.post('/guest/api/orders/', orderDto);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const updateOrder = async (id, orderDto) => {
    try {
        const response = await axiosInstance.put(`/guest/api/orders/${id}`, orderDto);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const deleteOrder = async (id) => {
    try {
        await axiosInstance.delete(`/guest/api/orders/${id}`);
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const getAllOrders = async (page = 0, size = 10) => {
    try {
        const response = await axiosInstance.get(`/guest/api/orders/`, {
            params: {
                page: page,
                size: size
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            throw new Error(error.response.data.message || 'Server Error');
        } else if (error.request) {
            // Request was made but no response received
            throw new Error('Network Error');
        } else {
            // Something else happened while setting up the request
            throw new Error('Error: ' + error.message);
        }
    }
};

export const getOrdersByUserId = async (userId, page = 0, size = 10) => {
    try {
        const response = await axiosInstance.get(`/guest/api/orders/user-id?user_id=${userId}&page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const getOrderStats = async () => {
    try {
        const response = await axiosInstance.get('/guest/api/orders/total-order');
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const getRevenueStatistics = async () => {
    try {
        const response = await axiosInstance.get('/guest/api/orders/total-revenue');
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const getTotalSales = async () => {
    try {
        const response = await axiosInstance.get('/guest/api/orders/total-revenue-day');
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const countOrdersByProductId = async (productId) => {
    try {
        const response = await axiosInstance.get(`/guest/api/orders/count/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const getProductRevenue = async (productId) => {
    try {
        const response = await axiosInstance.get(`/guest/api/orders/revenue/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};

export const getOrdersByShopId = async (shopId, page = 0, size = 10) => {
    try {
        const response = await axiosInstance.get(`/guest/api/orders/shop-id?shop_id=${shopId}&page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server Error');
    }
};


