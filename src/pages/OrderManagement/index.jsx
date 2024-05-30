import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, SelectBox, Heading, Input, Button } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar1 from "../../components/Sidebar1";
import axios from "axios";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function OrderManagementPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchBarValue46, setSearchBarValue46] = useState("");

  const table2Columns = useMemo(
    () => [
      { header: "Order ID", accessorKey: "id" },
      { header: "Order Date", accessorKey: "orderDate" },
      { header: "Status", accessorKey: "status" },
      { header: "User ID", accessorKey: "userId" },
      { header: "Shop ID", accessorKey: "shopId" },
    ],
    []
  );

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/guest/api/orders/");
      setOrders(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading orders: {error.message}</p>;

  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_07 px-5 pb-[29px] pt-5 sm:pb-5">
        <div className="flex flex-col gap-5">
          <Header />
          <div className="flex items-start gap-[30px] md:flex-col">
            <Sidebar1 className="mt-[60px]" />
            <div className="flex flex-1 flex-col items-center gap-[30px] md:self-stretch">
              <div className="flex flex-col items-center gap-12 self-stretch rounded-[16px] bg-gray-100_05 pb-[37px] pl-[30px] pr-[18px] pt-[69px] md:pt-5 sm:py-5 sm:pl-5">
                <div className="flex flex-col items-start gap-[15px] self-stretch">
                  <Heading size="8xl" as="h1" className="uppercase !text-gray-900_05">
                    QUẢN LÝ ĐƠN HÀNG
                  </Heading>
                  <div className="flex items-center w-[1542px] self-stretch rounded-t-md border-b border-solid border-[#DBDADE] md:flex-col">
                    <a href="#" className="ml-10 md:ml-0 flex justify-center items-center px-5 py-2 gap-2.5 text-[#626974] font-['Be Vietnam Pro'] text-base font-normal leading-[1.5]">
                      <p>Chờ xác nhận</p>
                    </a>
                    <a href="#" className="ml-10 md:ml-0 flex justify-center items-center px-5 py-2 gap-2.5 text-[#626974] font-['Be Vietnam Pro'] text-base font-normal leading-[1.5]">
                      <p>Đã xác nhận</p>
                    </a>
                    <a href="#" className="ml-10 md:ml-0 flex justify-center items-center px-5 py-2 gap-2.5 text-[#626974] font-['Be Vietnam Pro'] text-base font-normal leading-[1.5]">
                      <p>Đang xử lý</p>
                    </a>
                    <a href="#" className="ml-10 md:ml-0 flex justify-center items-center px-5 py-2 gap-2.5 text-[#626974] font-['Be Vietnam Pro'] text-base font-normal leading-[1.5]">
                      <p>Đã lấy hàng</p>
                    </a>
                    <a href="#" className="ml-10 md:ml-0 flex justify-center items-center px-5 py-2 gap-2.5 text-[#626974] font-['Be Vietnam Pro'] text-base font-normal leading-[1.5]">
                      <p>Đang vận chuyển</p>
                    </a>
                    <a href="#" className="ml-10 md:ml-0 flex justify-center items-center px-5 py-2 gap-2.5 text-[#626974] font-['Be Vietnam Pro'] text-base font-normal leading-[1.5]">
                      <p>Đã vận chuyển</p>
                    </a>
                    <a href="#" className="ml-10 md:ml-0 flex justify-center items-center px-5 py-2 gap-2.5 text-[#626974] font-['Be Vietnam Pro'] text-base font-normal leading-[1.5]">
                      <p>Đã huỷ</p>
                    </a>
                  </div>
                </div>
                <div className="flex w-[95%] flex-col items-center gap-10 rounded-[16px] bg-white-A700 px-[30px] pb-[29px] pt-[30px] md:w-full sm:p-5">
                  <div className="flex justify-between gap-5 self-stretch sm:flex-col">
                    <Input
                      size="xs"
                      shape="round"
                      name="search"
                      placeholder={`Tìm kiếm theo ID`}
                      value={searchBarValue46}
                      onChange={(e) => setSearchBarValue46(e.target.value)}
                      suffix={
                        searchBarValue46?.length > 0 ? (
                          <CloseSVG onClick={() => setSearchBarValue46("")} height={18} width={18} fillColor="#626974ff" />
                        ) : (
                          <Img src="images/img_search.svg" alt="search" className="h-[18px] w-[18px] cursor-pointer" />
                        )
                      }
                      className="w-[19%] gap-[35px] !rounded shadow-6xl sm:w-full"
                    />
                    <SelectBox
                      color="white_A700"
                      size="lg"
                      shape="round"
                      indicator={<Img src="images/img_arrowdown_blue_gray_600.svg" alt="arrow_down" className="h-[16px] w-[16px]" />}
                      name="arrowdown"
                      placeholder={`Lọc bởi danh mục`}
                      options={dropDownOptions}
                      className="w-[12%] gap-px shadow-6xl sm:w-full sm:pr-5"
                    />
                  </div>
                  <ReactTable
                    size="lg"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "border-gray-100_05 border-b border-solid bg-gray-100_05 md:flex-col" }}
                    rowDataProps={{ className: "border-indigo-50 border-b border-solid md:flex-col justify-center" }}
                    className="self-stretch"
                    columns={table2Columns}
                    data={orders}
                  />
                  <SalesShopPagination text120of300="1 – 20 của 300+ được tìm thấy" className="w-[35%] gap-[22px] md:w-full" />
                </div>
              </div>
              <div className="flex w-[82%] md:w-full">
                <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                  <div className="flex flex-wrap gap-11">
                    <Text size="md" as="p" className="self-end">
                      © 2024 EZShop. All Rights Reserved
                    </Text>
                    <Text size="md" as="p" className="self-start">
                      Quyền riêng tư · Điều khoản · Sơ đồ trang web
                    </Text>
                  </div>
                  <div className="flex w-[25%] justify-center gap-2.5 md:w-full">
                    <div className="flex w-[46%] flex-wrap items-center justify-evenly rounded-md border border-solid border-gray-200_01 bg-white-A700 py-2.5">
                      <Text size="md" as="p" className="!text-blue_gray-600">
                        Tiền tệ
                      </Text>
                      <Text size="md" as="p">
                        VND
                      </Text>
                      <Img src="images/img_vector_blue_gray_900_02_5x8.svg" alt="vector" className="mb-[5px] h-[5px] self-end" />
                    </div>
                    <div className="flex flex-wrap items-center rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[9px] pl-[9px] pr-2 pt-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-600">
                        Ngôn ngữ
                      </Text>
                      <Text size="md" as="p" className="self-start">
                        Tiếng Việt
                      </Text>
                      <Img src="images/img_vector_blue_gray_900_02_5x8.svg" alt="vector" className="ml-1.5 h-[5px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
