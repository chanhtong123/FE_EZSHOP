import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Heading, Input } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
const table7Data = [
  {
    rowiconone: "Circooles",
    tableheaderone: "72",
    tableheader: "4%",
    lastassessed: "20 Jan 2022",
    rowtableheader: "Active",
  },
  {
    rowiconone: "Command+R",
    tableheaderone: "78",
    tableheader: "6%",
    lastassessed: "24 Jan 2022",
    rowtableheader: "Active",
  },
  {
    rowiconone: "Hourglass",
    tableheaderone: "38",
    tableheader: "8%",
    lastassessed: "26 Jan 2022",
    rowtableheader: "Active",
  },
  {
    rowiconone: "Layers",
    tableheaderone: "42",
    tableheader: "1%",
    lastassessed: "18 Jan 2022",
    rowtableheader: "Active",
  },
  {
    rowiconone: "Quotient",
    tableheaderone: "66",
    tableheader: "6%",
    lastassessed: "28 Jan 2022",
    rowtableheader: "Active",
  },
  {
    rowiconone: "Sisyphus",
    tableheaderone: "91",
    tableheader: "2%",
    lastassessed: "16 Jan 2022",
    rowtableheader: "Inactive",
  },
  {
    rowiconone: "Sisyphus",
    tableheaderone: "91",
    tableheader: "2%",
    lastassessed: "16 Jan 2022",
    rowtableheader: "Inactive",
  },
  {
    rowiconone: "Sisyphus",
    tableheaderone: "91",
    tableheader: "2%",
    lastassessed: "16 Jan 2022",
    rowtableheader: "Inactive",
  },
];
export default function SalesManagerPage() {
  const [searchBarValue55, setSearchBarValue55] = React.useState("");
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper();
    return [
      table7ColumnHelper.accessor("rowiconone", {
        cell: (info) => (
          <div className="flex items-center gap-3 border-b border-solid border-blue_gray-50">
            <Button
              color="gray_50_01"
              size="xs"
              shape="round"
              className="w-[20px] border border-solid border-deep_purple-400"
            >
              <Img src="images/img_checkmark_deep_purple_400.svg" />
            </Button>
            <Img
              src="images/img_avatar.png"
              alt="avatar"
              className="h-[40px] w-[40px] rounded-[50%]"
            />
            <div className="flex flex-col items-start gap-1">
              <Heading as="h2">{info?.getValue?.()}</Heading>
              <Text size="md" as="p" className="!text-blue_gray-600">
                getcirooles.com
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex items-center">
            <div className="relative h-[20px] w-[24%] md:h-auto">
              <Img
                src="images/img_icon_deep_purple_400.svg"
                alt="icon"
                className="mb-2 h-[2px]"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center rounded-md border border-solid border-deep_purple-400 bg-gray-50_01 px-[5px] pb-2 pt-2.5">
                <Img
                  src="images/img_icon_deep_purple_400.svg"
                  alt="icon"
                  className="h-[2px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Text
                size="xs"
                as="p"
                className="self-start !font-inter !font-medium !text-blue_gray-500"
              >
                Vendor
              </Text>
              <Img
                src="images/img_arrow_down_blue_gray_500.svg"
                alt="arrowdown"
                className="h-[16px] w-[16px]"
              />
            </div>
          </div>
        ),
        meta: { width: "94px" },
      }),
      table7ColumnHelper.accessor("tableheaderone", {
        cell: (info) => (
          <div className="flex items-center justify-center gap-3 border-b border-solid border-blue_gray-50">
            <div className="relative h-[8px] flex-1 rounded bg-gray-50_01">
              <div
                style={{ width: "71%" }}
                className="absolute h-full rounded bg-deep_purple-400"
              />
            </div>
            <Text
              size="md"
              as="p"
              className="h-[18px] w-[18px] !font-medium !text-blue_gray-800"
            >
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Input
            color="gray_50_05"
            size="sm"
            shape="square"
            name="tableheader_one"
            placeholder={`Rating`}
            className="ml-[268px] border-b border-solid border-blue_gray-50 font-inter font-medium md:ml-0 sm:px-5"
          />
        ),
        meta: { width: "386px" },
      }),
      table7ColumnHelper.accessor("tableheader", {
        cell: (info) => (
          <div className="flex border-b border-solid border-blue_gray-50">
            <Button
              color="red_50_01"
              size="sm"
              leftIcon={
                <Img
                  src="images/img_arrowdown_red_500.svg"
                  alt="arrow_down"
                  className="h-[12px] w-[12px]"
                />
              }
              className="min-w-[49px] gap-1 rounded-[11px] font-medium"
            >
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="h-[44px] border-b border-solid border-blue_gray-50 bg-gray-50_05" />
        ),
        meta: { width: "73px" },
      }),
      table7ColumnHelper.accessor("lastassessed", {
        cell: (info) => (
          <div className="flex">
            <Button
              color="blue_gray_50"
              size="12xl"
              variant="outline"
              shape="square"
              className="min-w-[134px] sm:px-5"
            >
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Button
            color="gray_50_05"
            size="7xl"
            shape="square"
            className="min-w-[134px] border-b border-solid border-blue_gray-50 font-inter font-medium sm:px-5"
          >
            Last assessed
          </Button>
        ),
        meta: { width: "134px" },
      }),
      table7ColumnHelper.accessor("rowtableheader", {
        cell: (info) => (
          <div className="flex gap-1 border-b border-solid border-blue_gray-50">
            <Button
              color="light_green_50"
              size="sm"
              className="min-w-[67px] rounded-[11px] font-medium"
            >
              {info?.getValue?.()}
            </Button>
            <Button
              color="gray_50_01"
              size="sm"
              className="min-w-[97px] rounded-[11px] font-inter font-medium text-deep_purple-500"
            >
              Business data
            </Button>
            <Button
              color="blue_50"
              size="sm"
              className="min-w-[53px] rounded-[11px] font-inter font-medium"
            >
              Admin
            </Button>
            <Button
              color="gray_100_01"
              size="sm"
              className="min-w-[31px] rounded-[11px] font-inter font-medium"
            >
              +2
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 md:self-stretch">
            <Input
              color="gray_50_05"
              size="sm"
              shape="square"
              name="tableheader"
              placeholder={`License use`}
              className="w-[73%] border-b border-solid border-blue_gray-50 font-inter font-medium sm:px-5"
            />
          </div>
        ),
        meta: { width: "431px" },
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
                    QUẢN LÝ NGƯỜI BÁN
                  </Heading>
                  <Text
                    as="p"
                    className="!font-jost !font-normal !text-blue_gray-600"
                  >
                    Lorem ipsum dolor sit amet, consectetur.
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-[42px] self-stretch rounded-[16px] bg-white-A700 px-[30px] pb-[31px] pt-[30px] shadow-3xl sm:p-5">
                  <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                    <Input
                      shape="round"
                      name="search"
                      placeholder={`Tìm shop`}
                      value={searchBarValue55}
                      onChange={(e) => setSearchBarValue55(e)}
                      suffix={
                        searchBarValue55?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue55("")}
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
                      className="min-w-[191px] font-medium shadow-sm sm:px-5"
                    >
                      Thêm Người Bán
                    </Button>
                  </div>
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "md:flex-col" }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch bg-white-A700"
                    columns={table7Columns}
                    data={table7Data}
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
