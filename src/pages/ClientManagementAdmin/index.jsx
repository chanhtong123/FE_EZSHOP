import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input, Heading } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/FooterAdmin";
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
        meta: { width: "10%" },
      }),
      table3ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-center gap-[11px]">
            <Img
              src="images/img_user.png"
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
            User
          </Text>
        ),
        meta: { width: "30%" },
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
        meta: { width: "10%" },
      }),
      table3ColumnHelper.accessor("balances", {
        cell: (info) => (
          <Text as="p" className="!font-normal align-text-center">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Balances
          </Text>
        ),
        meta: { width: "10%" },
      }),
      table3ColumnHelper.accessor("totalorders", {
        cell: (info) => (
          <Text size="lg" as="p" className="align-text-center">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Total orders
          </Text>
        ),
        meta: { width: "10%" },
      }),
      table3ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex gap-[5px] justify-center">
            <Button
              color="gray_100_05"
              size="5xl"
              shape="round"
              className="w-[40px] !rounded-[5px]"
            >
              <Img src="images/img_edit_1.svg" />
            </Button>
            <Button
              color="gray_100_05"
              size="5xl"
              shape="round"
              className="w-[40px] !rounded-[5px]"
            >
              <Img src="images/img_delete_1.svg" />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Action
          </Text>
        ),
        meta: { width: "10%" },
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
                    QUẢN LÝ NGƯỜI DÙNG
                  </Heading>
                </div>
                <div className="flex flex-col items-center gap-[35px] self-stretch rounded-[16px] bg-white-A700 px-[30px] pb-[31px] pt-[30px] shadow-3xl sm:p-5">
                  <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                    <Input
                      shape="round"
                      name="search"
                      placeholder={`Tìm...`}
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
