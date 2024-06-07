import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import FavoriteProductSidebar from "../../components/FavoriteProductSidebar";
import { ReactTable } from "../../components/ReactTable";
import axios from "axios";
import { createColumnHelper } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

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
  columnHelper.accessor("status", {
    header: () => "Trạng thái",
    cell: (info) => info.getValue() || "N/A",
  }),
  // columnHelper.accessor("userId", {
  //   header: () => "User ID",
  //   cell: (info) => info.getValue(),
  // }),
  // columnHelper.accessor("shopId", {
  //   header: () => "Shop ID",
  //   cell: (info) => info.getValue() || "N/A",
  // }),
  // columnHelper.accessor("orderDetailId", {
  //   header: () => "Order Detail ID",
  //   cell: (info) => info.getValue() || "N/A",
  // }),
  columnHelper.accessor("totalAmount", {
    header: () => "Tổng cộng",
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor("customerName", {
    header: () => "Tên khách hàng",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("profit", {
    header: () => "Lợi nhuận",
    cell: (info) => `$${info.getValue()}`,
  }),
];

export default function OrderPage() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/guest/api/orders/user-id?id=1"
        );
        console.log("Fetched order data:", response.data);

        const fetchedData = Array.isArray(response.data)
          ? response.data
          : [response.data];

        console.log("Processed order data:", fetchedData);
        setOrderData(fetchedData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, []);

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
        </div>
        <div className="mt-[34px] flex w-[74%] items-start justify-between gap-5 md:w-full md:flex-col md:p-5">
          <FavoriteProductSidebar
            emailtext="alitfn58@gmail.com"
            className="mt-1.5 w-[15%]"
          />
          <div className="flex w-[81%] flex-col items-start gap-[38px] md:w-full">
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
          </div>
        </div>
      </div>
    </>
  );
}
