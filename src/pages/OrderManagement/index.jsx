import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Input, Button } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/FooterAdmin";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
import axios from "axios";
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
export default function OrderManagementPage() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/guest/api/orders/"
        );
        console.log("Fetched order data:", response.data);

        const fetchedData = Array.isArray(response.data)
          ? response.data
          : [response.data];
        console.log("Processed order data:", fetchedData);
        setOrderData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
      <div className="w-full bg-gray-50_07 px-5 pb-[29px] pt-5 sm:pb-5">
        <div className="flex flex-col gap-5">
          <Header />
          <div className="flex items-start gap-[30px] md:flex-col">
            <Sidebar1 className="mt-[60px]" />
            <div className="flex flex-1 flex-col items-center gap-[30px] md:self-stretch">
              <div className="flex flex-col items-center gap-12 self-stretch rounded-[16px] bg-gray-100_05 pb-[37px] pl-[30px] pr-[18px] pt-[69px] md:pt-5 sm:py-5 sm:pl-5">
                <div className="flex flex-col items-start gap-[15px] self-stretch">
                  <Heading
                    size="8xl"
                    as="h1"
                    className="uppercase !text-gray-900_05"
                  >
                    QUẢN LÝ ĐƠN HÀNG
                  </Heading>
                  <div className="flex items-center self-stretch rounded-tl-md rounded-tr-md border-b border-solid border-gray-300_02 md:flex-col">
                    <Button
                      size="6x1"
                      variant="text"
                      className="mb-2 ml-10 self-end !
                      font-normal !text-blue_gray-600 hover:!text-green-A700_02 md:ml-0"
                    >
                      Chờ xác nhận
                    </Button>
                    <Button
                      size="6x1"
                      variant="text"
                      className="mb-2 ml-10 self-end !font-normal !text-blue_gray-600 hover:!text-green-A700_02 md:ml-0"
                    >
                      Đã xác nhận
                    </Button>
                    <Button
                      size="6x1"
                      variant="text"
                      className="mb-2 ml-10 self-end !font-normal !text-blue_gray-600 hover:!text-green-A700_02 md:ml-0"
                    >
                      Đang xử lý
                    </Button>
                    <Button
                      size="6x1"
                      variant="text"
                      className="mb-2 ml-10 self-end !font-normal !text-blue_gray-600 hover:!text-green-A700_02 md:ml-0"
                    >
                      Đã lấy hàng
                    </Button>
                    <Button
                      size="6x1"
                      variant="text"
                      className="mb-2 ml-10 self-end !font-normal !text-blue_gray-600 hover:!text-green-A700_02 md:ml-0"
                    >
                      Đang vận chuyển
                    </Button>
                    <Button
                      size="6x1"
                      variant="text"
                      className="mb-2 ml-10 self-end !font-normal !text-blue_gray-600 hover:!text-green-A700_02 md:ml-0"
                    >
                      Đã vận chuyển
                    </Button>
                    <Button
                      size="6x1"
                      variant="text"
                      className="mb-2 ml-10 self-end !font-normal !text-blue_gray-600 hover:!text-green-A700_02 md:ml-0"
                    >
                      Đã huỷ
                    </Button>
                  </div>
                </div>
                <div className="flex w-[95%] flex-col items-center gap-10 rounded-[16px] bg-white-A700 px-[30px] pb-[29px] pt-[30px] md:w-full sm:p-5">
                  <div className="flex justify-between gap-5 self-stretch sm:flex-col">
                    <Input
                      size="xs"
                      shape="round"
                      name="search"
                      placeholder={`Tìm kiếm...`}
                      value={searchBarValue}
                      onChange={(e) => setSearchBarValue(e.target.value)}
                      suffix={
                        searchBarValue?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue("")}
                            height={18}
                            width={18}
                            fillColor="#626974ff"
                          />
                        ) : (
                          <Img
                            src="images/img_search1.svg"
                            alt="search"
                            className="h-[18px] w-[18px] cursor-pointer"
                          />
                        )
                      }
                      className="w-[19%] gap-[35px] !rounded shadow-6x1 sm:w-full"
                    />
                  </div>
                  <ReactTable
                    size="lg"
                    bodyProps={{ className: "" }}
                    headerProps={{
                      className:
                        "border-gray-100_05 border-b border-solid bg-gray-100_05 md:flex-col",
                    }}
                    rowDataProps={{
                      className:
                        "border-indigo-50 border-b border-solid md:flex-col",
                    }}
                    className="self-stretch"
                    columns={tableColumns}
                    data={orderData}
                  />
                  <SalesShopPagination
                    text120of300="1 – 20 của 300+ được tìm thấy"
                    className="w-[35%] gap-[22px] md:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
