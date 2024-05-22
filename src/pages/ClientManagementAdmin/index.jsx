import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const table3Data = [
  {
    id: "#1923",
    name: "Cameron Williamson",
    phonenumber: "(704) 555-0127",
    balances: "250.000đ",
    totalorders: "20",
    action: "images/img_menu.svg",
  },
  {
    id: "#1923",
    name: "Eleanor Pena",
    phonenumber: "(201) 555-0124",
    balances: "250.000đ",
    totalorders: "20",
    action: "images/img_menu.svg",
  },
  {
    id: "#1923",
    name: "Cameron Williamson",
    phonenumber: "(704) 555-0127",
    balances: "250.000đ",
    totalorders: "20",
    action: "images/img_menu.svg",
  },
  {
    id: "#1923",
    name: "Eleanor Pena",
    phonenumber: "(201) 555-0124",
    balances: "250.000đ",
    totalorders: "20",
    action: "images/img_menu.svg",
  },
  {
    id: "#1923",
    name: "Cameron Williamson",
    phonenumber: "(704) 555-0127",
    balances: "250.000đ",
    totalorders: "20",
    action: "images/img_menu.svg",
  },
  {
    id: "#1923",
    name: "Jacob Jones",
    phonenumber: "(229) 555-0109",
    balances: "250.000đ",
    totalorders: "20",
    action: "images/img_menu.svg",
  },
];

export default function ClientManagementAdminPage() {
  const [searchBarValue47, setSearchBarValue47] = React.useState("");
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 pl-[30px] pr-[35px] sm:p-5">
            ID
          </Text>
        ),
        meta: { width: "115px" },
      }),
      table3ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-center gap-[11px]">
            <Img
              src="images/img_play.png"
              alt="play"
              className="h-[41px] w-[40px] object-cover"
            />
            <div className="flex flex-col items-start gap-1.5">
              <Text as="p">{info?.getValue?.()}</Text>
              <Text size="md" as="p" className="!text-blue_gray-600">
                creativelayers088@gmail.com
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Name
          </Text>
        ),
        meta: { width: "616px" },
      }),
      table3ColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Phone Number
          </Text>
        ),
        meta: { width: "211px" },
      }),
      table3ColumnHelper.accessor("balances", {
        cell: (info) => (
          <Text as="p" className="!font-normal">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Balances
          </Text>
        ),
        meta: { width: "166px" },
      }),
      table3ColumnHelper.accessor("totalorders", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Total orders
          </Text>
        ),
        meta: { width: "187px" },
      }),
      table3ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex gap-[5px]">
            <Button
              color="gray_100_05"
              size="5xl"
              shape="round"
              className="w-[40px] !rounded-[5px]"
            >
              <Img src={info?.getValue?.()} />
            </Button>
            <Button
              color="gray_100_05"
              size="5xl"
              shape="round"
              className="w-[40px] !rounded-[5px]"
            >
              <Img src="images/img_delete_1_1.svg" />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Action
          </Text>
        ),
        meta: { width: "115px" },
      }),
    ];
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
      <div className="w-full bg-white-A700 px-5 pb-[29px] pt-5 sm:pb-5">
        <div className="flex flex-col gap-5">
          <Header />
          <div className="flex items-start gap-[30px] md:flex-col">
            <Sidebar1 className="mt-[60px]" />
            <div className="flex flex-1 flex-col items-center gap-[30px] md:self-stretch">
              <div className="flex flex-col items-start gap-12 self-stretch rounded-[16px] bg-gray-100_05 pb-[60px] pl-[60px] pr-14 pt-[52px] md:p-5">
                <div className="flex flex-col items-start gap-3.5">
                  <Heading size="8xl" as="h1" className="uppercase">
                    QUẢN LÝ KHÁCH HÀNG
                  </Heading>
                  <Text
                    as="p"
                    className="!font-jost !font-normal !text-blue_gray-600"
                  >
                    Lorem ipsum dolor sit amet, consectetur.
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-[35px] self-stretch rounded-[16px] bg-white-A700 px-[30px] pb-[31px] pt-[30px] shadow-3xl sm:p-5">
                  <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                    <Input
                      shape="round"
                      name="search"
                      placeholder={`Tìm đơn hàng`}
                      value={searchBarValue47}
                      onChange={(e) => setSearchBarValue47(e)}
                      suffix={
                        searchBarValue47?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue47("")}
                            fillColor="#041e42ff"
                          />
                        ) : (
                          <Img
                            src="images/img_search_1_blue_gray_900_02.svg"
                            alt="search 1"
                            className="h-[20px] w-[20px] cursor-pointer"
                          />
                        )
                      }
                      className="w-[29%] gap-[35px] border border-solid border-gray-200_01 md:w-full"
                    />
                    <Button
                      size="10xl"
                      shape="round"
                      className="min-w-[203px] font-medium shadow-sm sm:px-5"
                    >
                      Thêm Khách hàng
                    </Button>
                  </div>
                  <ReactTable
                    size="xl"
                    bodyProps={{ className: "" }}
                    headerProps={{
                      className: "bg-gray-100_05 flex-wrap rounded-md",
                    }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch"
                    columns={table3Columns}
                    data={table3Data}
                  />
                  <SalesShopPagination
                    text120of300="1 – 20 của 300+ được tìm thấy"
                    className="w-[35%] gap-[22px] md:w-full"
                  />
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
                      <Img
                        src="images/img_vector_blue_gray_900_02_5x8.svg"
                        alt="vector"
                        className="mb-[5px] h-[5px] self-end"
                      />
                    </div>
                    <div className="flex flex-wrap items-center rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[9px] pl-[9px] pr-2 pt-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-600">
                        Ngôn ngữ
                      </Text>
                      <Text size="md" as="p" className="self-start">
                        Tiếng Việt
                      </Text>
                      <Img
                        src="images/img_vector_blue_gray_900_02_5x8.svg"
                        alt="vector"
                        className="ml-1.5 h-[5px]"
                      />
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
