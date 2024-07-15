import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "../../components";
import FavoriteProductSidebar from "../../components/FavoriteProductSidebar";
import { ReactTable } from "../../components/ReactTable";
import axios from "axios";
import { createColumnHelper } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
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

export default function OrderPage() {
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/guest/api/orders/user-id?user_id=1&page=${currentPage}&size=${pageSize}`
        );
        console.log("Fetched order data:", response.data);

        const fetchedData = response.data.content;

        console.log("Processed order data:", fetchedData);
        setOrderData(fetchedData);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta name="description" content="Web site created using create-react-app" />
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
                headerProps={{ className: "bg-gray-100_02 flex-wrap rounded-md" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="self-stretch"
                columns={tableColumns}
                data={orderData}
              />
               {totalPages > 1 && (
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
          </div>
        </div>
      </div>
    </>
  );
}
