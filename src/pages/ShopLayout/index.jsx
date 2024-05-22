import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar2 from "../../components/Sidebar2";
import { createColumnHelper } from "@tanstack/react-table";
const table5Data = [
  {
    tndanhmc: "Nhà & Bếp",
    mdanhmc: "home-kitchen",
    rowthigianto: "15 - 12 - 2023",
  },
  {
    tndanhmc: "Nội thất",
    mdanhmc: "furniture",
    rowthigianto: "15 - 12 - 2023",
  },
  {
    tndanhmc: "Điện tử",
    mdanhmc: "electronics",
    rowthigianto: "15 - 12 - 2023",
  },
  {
    tndanhmc: "Quần áo & Phụ kiện",
    mdanhmc: "clothing-accessories",
    rowthigianto: "15 - 12 - 2023",
  },
  {
    tndanhmc: "Tạp hóa & Chợ",
    mdanhmc: "grocery-market",
    rowthigianto: "15 - 12 - 2023",
  },
];
export default function ShopLayoutPage() {
  const [searchBarValue52, setSearchBarValue52] = React.useState("");
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper();
    return [
      table5ColumnHelper.accessor("tndanhmc", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 pl-[30px] md:p-5 sm:py-5 sm:pl-5">
            Tên danh mục
          </Text>
        ),
        meta: { width: "605px" },
      }),
      table5ColumnHelper.accessor("mdanhmc", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 md:p-5 sm:py-5">
            Mã danh mục
          </Text>
        ),
        meta: { width: "358px" },
      }),
      table5ColumnHelper.accessor("rowthigianto", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            <Text size="lg" as="p">
              {info?.getValue?.()}
            </Text>
            <div className="flex gap-[5px]">
              <Button
                color="gray_100_05"
                size="5xl"
                shape="round"
                className="w-[40px] !rounded-[5px]"
              >
                <Img src="images/img_menu.svg" />
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
          </div>
        ),
        header: (info) => (
          <div className="flex flex-wrap pb-[22px] pr-9 pt-[23px] md:p-5 sm:py-5 sm:pr-5">
            <Text as="p" className="self-end">
              Thời gian tạo
            </Text>
            <Text as="p" className="self-start">
              Chỉnh sửa
            </Text>
          </div>
        ),
        meta: { width: "447px" },
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
      <div className="w-full bg-white-A700 px-5 pb-7 pt-5 sm:pb-5">
        <div className="flex flex-col gap-5">
          <Header />
          <div className="flex items-start gap-[30px] md:flex-col">
            <Sidebar2 />
            <div className="flex flex-1 flex-col items-center gap-[31px] md:self-stretch">
              <div className="flex flex-col items-start justify-center gap-[60px] self-stretch rounded-[16px] bg-gray-100_05 pb-[60px] pl-[60px] pr-14 pt-[62px] md:p-5 sm:gap-[30px]">
                <div className="flex flex-col items-start gap-2.5">
                  <Text size="7xl" as="p">
                    Danh mục
                  </Text>
                  <Text as="p" className="!font-normal">
                    Lorem ipsum dolor sit amet, consectetur.
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-[30px] self-stretch rounded-[16px] bg-white-A700 pb-[31px] pl-[30px] pr-[25px] pt-[30px] shadow-3xl sm:p-5">
                  <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                    <Input
                      shape="round"
                      name="search"
                      placeholder={`Tìm kiếm`}
                      value={searchBarValue52}
                      onChange={(e) => setSearchBarValue52(e)}
                      suffix={
                        searchBarValue52?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue52("")}
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
                      className="w-[29%] gap-[35px] border border-solid border-gray-200_01 sm:w-full"
                    />
                    <Button
                      size="10xl"
                      shape="round"
                      className="min-w-[138px] border border-solid border-green-A700_02 font-medium !text-green-50_01 shadow-sm sm:px-5"
                    >
                      Add New
                    </Button>
                  </div>
                  <ReactTable
                    size="xl"
                    bodyProps={{ className: "" }}
                    headerProps={{
                      className: "bg-gray-100_02 md:flex-col rounded-md",
                    }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch"
                    columns={table5Columns}
                    data={table5Data}
                  />
                  <SalesShopPagination
                    text120of300="1 – 20 of 300+ properties found"
                    className="w-[35%] gap-[22px] md:w-full"
                  />
                </div>
              </div>
              <div className="flex w-[82%] items-center justify-between gap-5 md:w-full md:flex-col">
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
    </>
  );
}
