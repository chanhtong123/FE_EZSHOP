import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Heading, Input } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/FooterAdmin";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";


const tableData = [
  {
    id: "#6548",
    name: "Shop second-hand 113",
    owner: "Joseph Wheeler",
    status: "Active",
    productAmount: 7,
  },
  {
    id: "#6548",
    name: "Shop second-hand 113",
    owner: "Joseph Wheeler",
    status: "Active",
    productAmount: 7,
  },
  {
    id: "#6548",
    name: "Shop second-hand 113",
    owner: "Joseph Wheeler",
    status: "Active",
    productAmount: 7,
  },
  {
    id: "#6548",
    name: "Shop second-hand 113",
    owner: "Joseph Wheeler",
    status: "Active",
    productAmount: 7,
  },
  {
    id: "#6548",
    name: "Shop second-hand 113",
    owner: "Joseph Wheeler",
    status: "Active",
    productAmount: 7,
  },
];

export default function SalesManagerPage() {
  const [searchBarValue55, setSearchBarValue55] = React.useState("");
  const tableShopsColumns = React.useMemo(() => {
    const tableShopsColumnsHelper = createColumnHelper();
    return [
      tableShopsColumnsHelper.accessor("id", {
        cell: (info) => (
          <Heading size="xl" as="p">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex flex-wrap pb-[15px] pr-[20%] pt-[17px] md:p-5 md:pr-5">
            <Heading as="h2" className="px-px py-[17px] md:p-5">
              Shop ID
            </Heading>
          </div>
        ),
        meta: { width: "10%" },
      }),
      tableShopsColumnsHelper.accessor("name", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-wrap pb-[15px] pr-[20%] pt-[17px] md:p-5 md:pr-5">
            <Heading as="h2" className="px-px py-[17px] md:p-5">
              Tên Shop
            </Heading>
          </div>
        ),
        meta: { width: "30%" },
      }),
      tableShopsColumnsHelper.accessor("owner", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-wrap pb-[15px] pr-[20%] pt-[17px] md:p-5 md:pr-5">
            <Heading as="h4" className="px-px py-[17px] md:p-5">
              Chủ shop
            </Heading>
          </div>
        ),
        meta: { width: "20%" },
      }),
      tableShopsColumnsHelper.accessor("status", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            <Text as="p" className="!font-normal">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-wrap pb-[15px] pr-[20%] pt-[17px] md:p-5 md:pr-5">
            <Heading as="h5" className="self-start">
              Trạng thái
            </Heading>
          </div>
        ),
        meta: { width: "20%" },
      }),
      tableShopsColumnsHelper.accessor("productAmount", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-1">
              <Text as="p" className="!font-normal">
                <span className="text-blue_gray-900_02">
                  {info?.getValue?.()}
                </span>
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex pb-[15px] pr-[20%] pt-[17px] md:p-5 md:pr-5">
            <Heading as="h5" className="self-start">
              Số sản phẩm
            </Heading>
          </div>
        ),
        meta: { width: "10%" },
      }),
      tableShopsColumnsHelper.accessor("trngthi", {
        cell: (info) => (
          <div className="flex items-center justify-center  gap-5">
            <Button
              color="green_A700_e5"
              size="3xl"
              shape="round"
              className="w-[40px] self-center !rounded-[5px]"
            >
              ...
            </Button>
          </div>
        ),
        header: (info) => (
          <Heading as="h6" className="px-px py-[17px] md:p-5">
          </Heading>
        ),
        meta: { width: "10%" },
      }),
    ];
  },);
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
                </div>
                <div className="flex flex-col items-center gap-[42px] self-stretch rounded-[16px] bg-white-A700 px-[30px] pb-[31px] pt-[30px] shadow-3xl sm:p-5">
                  <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                    <Input
                      shape="round"
                      name="search"
                      placeholder={`Tìm...`}
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
                            src="images/img_search1.svg"
                            alt="search 1"
                            className="h-[20px] w-[20px] cursor-pointer"
                          />
                        )
                      }
                      className="w-[29%] gap-[35px] border border-solid border-gray-200_01 md:w-full"
                    />
                  </div>
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "md:flex-col" }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch bg-white-A700"
                    columns={tableShopsColumns}
                    data={tableData}
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
