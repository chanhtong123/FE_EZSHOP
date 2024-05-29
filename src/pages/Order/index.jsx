import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import FavoriteProductSidebar from "../../components/FavoriteProductSidebar";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const table4Data = [
  {
    id: "#1923",
    snphmone: "Áo Thun Nam Nike",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Hoàn thành",
    tng: "250.000đ",
    thm: "images/more.svg",
  },
  {
    id: "#1922",
    snphmone: "Áo Thun Nữ Adidas",
    ngy: "15 - 12 - 2023",
    thanhton: "Chưa thanh toán",
    tnhtrng: "Đã hủy",
    tng: "250.000đ",
    thm: "images/more.svg",
  },
  {
    id: "#1921",
    snphmone: "Áo Thun Nữ Adidas",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Đang vận chuyển",
    tng: "250.000đ",
    thm: "images/more.svg",
  },
  {
    id: "#1920",
    snphmone: "Áo Thun Nam Nike",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Hoàn thành",
    tng: "250.000đ",
    thm: "images/more.svg",
  },
  {
    id: "#1919",
    snphmone: "Áo Thun Nữ Adidas",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Đã hủy",
    tng: "250.000đ",
    thm: "images/more.svg",
  },
  {
    id: "#1918",
    snphmone: "Áo Thun Nam Nike",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Đang vận chuyển",
    tng: "250.000đ",
    thm: "images/more.svg",
  },
];

export default function OrderPage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5 pl-[25px] sm:pl-5">
            ID
          </Text>
        ),
        meta: { width: "120px" },
      }),
      table4ColumnHelper.accessor("snphmone", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            Sản phẩm
          </Text>
        ),
        meta: { width: "253px" },
      }),
      table4ColumnHelper.accessor("ngy", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            Ngày
          </Text>
        ),
        meta: { width: "202px" },
      }),
      table4ColumnHelper.accessor("thanhton", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            Thanh toán
          </Text>
        ),
        meta: { width: "179px" },
      }),
      table4ColumnHelper.accessor("tnhtrng", {
        cell: (info) => (
          <div className="flex">
            <Button
              color="gray_50_04"
              size="3xl"
              shape="round"
              className="min-w-[97px] font-medium"
            >
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            Tình trạng
          </Text>
        ),
        meta: { width: "197px" },
      }),
      table4ColumnHelper.accessor("tng", {
        cell: (info) => (
          <Heading size="lg" as="h2" className="flex !font-semibold capitalize">
            <span className="text-blue_gray-900_02">{info?.getValue?.()}</span>
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            Tổng
          </Text>
        ),
        meta: { width: "129px" },
      }),
      table4ColumnHelper.accessor("thm", {
        cell: (info) => (
          <div className="flex">
            <a href="#">
              <Img src={info?.getValue?.()} alt="upload" className="h-[24px]" />
            </a>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            Thêm
          </Text>
        ),
        meta: { width: "69px" },
      }),
    ];
  }, []);

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
        </div>
        <div className="mt-[34px] flex w-[74%] items-start justify-between gap-5 md:w-full md:flex-col md:p-5">
          <FavoriteProductSidebar emailtext="alitfn58@gmail.com" className="mt-1.5 w-[15%]" />
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
              columns={table4Columns}
              data={table4Data}
            />
          </div>
        </div>
      </div>
    </>
  );
}
