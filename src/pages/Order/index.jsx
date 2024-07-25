import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "../../components";
import FavoriteProductSidebar from "../../components/FavoriteProductSidebar";
import { ReactTable } from "../../components/ReactTable";
import { getOrdersByUserId } from "api/orderService";
import { createColumnHelper } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import axios from "axios";
import { CloseSVG } from "../../assets/images";
import classNames from "classnames";
const columnHelper = createColumnHelper();

const tableColumns = [
  columnHelper.accessor("id", {
    header: () => "Order ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("orderDate", {
    header: () => "Order Date",
    cell: (info) =>
      `${formatDistanceToNow(new Date(info.getValue()), {
        addSuffix: true,
        locale: vi,
      })}`,
  }),
  columnHelper.accessor("customerName", {
    header: () => "Tên khách hàng",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("totalAmount", {
    header: () => "Tổng cộng",
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor("orderStatus", {
    header: () => "Trạng thái",
    cell: (info) => {
      const status = info.getValue();
      const statusName = status || "N/A";

      const statusClass = classNames(
        "inline-block px-2.5 py-0.5 rounded text-sm font-medium",
        {
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300":
            statusName === "Pending",
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300":
            statusName === "Confirmed",
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300":
            statusName === "Processing",
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300":
            statusName === "Shipping",
          "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300":
            statusName === "Completed",
          "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300":
            statusName === "Cancelled",
          "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300":
            statusName === "N/A",
        }
      );

      return <span className={statusClass}>{statusName}</span>;
    },
  }),
];

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getOrderDetailByOrderId = async (orderId) => {
  try {
    const response = await axiosInstance.get(`/guest/api/order-details/order_id?order_id=${orderId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Server Error');
  }
};

export default function OrderPage() {
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedOrders, setSelectedOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const token = localStorage.getItem("token");
        const axiosInstance = axios.create({
          baseURL: "http://localhost:8080",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const userInfoResponse = await axiosInstance.get("/user");
        const userId = userInfoResponse.data.id;
        const response = await getOrdersByUserId(userId, currentPage, pageSize);
        console.log("Fetched order data:", response);

        const fetchedData = response.content;
        console.log("Processed order data:", fetchedData);
        setOrderData(fetchedData);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching order data:", error.message);
      }
    };

    fetchOrderData();
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleOrderClick = async (orderId) => {
    try {
      const orderDetail = await getOrderDetailByOrderId(orderId);
      setSelectedOrders(orderDetail);
      console.log("Selected order detail:", orderDetail);
    } catch (error) {
      console.error("Error fetching order detail:", error.message);
    }
  };

  const handleCloseModal = () => {
    setSelectedOrders([]);
  };


  
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="container-md mt-[17px] flex flex-col items-center md:p-5">
          <div className="flex flex-wrap gap-[7px] self-start">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p">
              /
            </Text>
            <Text size="md" as="p" className="self-start">
              Đơn hàng
            </Text>
            <Text size="md" as="p">
              /
            </Text>
            <Text size="md" as="p" className="self-end !text-blue_gray-600">
              Quản lí đơn hàng
            </Text>
          </div>
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            <FavoriteProductSidebar />
            <div className="flex w-[80%] flex-col items-start gap-[11px] md:w-full">
              <Heading size="8xl" as="h1" className="uppercase">
                Đơn hàng
              </Heading>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{
                  className: "bg-gray-100_02 flex-wrap rounded-md",
                }}
                rowDataProps={{ className: "md:flex-col" }}
                className="self-stretch"
                columns={tableColumns}
                data={orderData}
                onRowClick={(row) => handleOrderClick(row.id)}
              />
              {orderData.length >= 10 && (
                <div className="flex justify-between items-center mt-4">
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                  >
                    Previous
                  </Button>
                  <Text size="md" as="p">
                    Page {currentPage + 1} of {totalPages}
                  </Text>
                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage + 1 >= totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
             
            </div>
            {selectedOrders.length > 0 && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="bg-stone-50 p-5 rounded-lg shadow-lg w-2/3 max-w-3xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Order Details</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleCloseModal}
                >
                  <CloseSVG />
                </button>
              </div>
             {selectedOrders.map(order => (
               <div className="bg-stone-50 p-5 rounded-lg shadow-inner">
               <p>
               <strong>Name:</strong>{order.name}
               </p>
               <p>
               <strong>Price:</strong> ${order.price}
               </p>
             </div>
             ))}
            </div>
          </div>
        )}
          </div>
        </div>
      </div>
    </>
  );
}
