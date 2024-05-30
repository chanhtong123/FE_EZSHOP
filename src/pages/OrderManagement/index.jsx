import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, SelectBox, Heading, Input, Button } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/FooterAdmin";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table2Data = [
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
  {
    id: "#6548",
    create: "2 phút trước",
    owner: "Joseph Wheeler",
    total: 250000,
    status: "Waiting",
    money : 50000
  },
];
export default function OrderManagementPage() {
  const [searchBarValue46, setSearchBarValue46] = React.useState("");
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("id", {
        cell: (info) => (
          <Heading size="xl" as="p">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <div className="flex flex-wrap pb-[15px] pr-[20%] pt-[17px] md:p-5 md:pr-5">
            <Heading as="h5" className="self-start">
              Mã đơn hàng
            </Heading>
          </div>
        ),
        meta: { width: "10%" },
      }),

      table2ColumnHelper.accessor("create", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h3" className="px-px py-[17px] md:p-5">
            Đã tạo
          </Heading>
        ),
        meta: { width: "10%" },
      }),

      table2ColumnHelper.accessor("owner", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h4" className="px-px py-[17px] md:p-5">
            Khách hàng
          </Heading>
        ),
        meta: { width: "20%" },
      }),

      table2ColumnHelper.accessor("total", {
        cell: (info) => (
          <div className="flex items-center justify-center gap-5">
            <Text as="p" className="!font-normal">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
            <Heading as="h5" className="self-start">
              Tổng cộng
            </Heading>
        ),
        meta: { width: "20%" },
      }),

      table2ColumnHelper.accessor("money", {
        cell: (info) => (
          <div className="flex gap-[5px] justify-center">
            <Text>
            {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
            <Heading as="h5" className="self-start">
                Lợi Nhuận
            </Heading>
        ),
        meta: { width: "20%" },
      }),

      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex gap-[5px] justify-center">
            <Text>
            {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
            <Heading as="h5" className="self-start">
                Trạng thái
            </Heading>
        ),
        meta: { width: "20%" },
      }),

      table2ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex gap-[5px] justify-center">
            <Button
              color="green_A700_e5"
              size="3x1"
              shape="round"
              className="w-[40px] !rounded-[5px]"
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
                      size="6xl"
                      variant="outline"
                      className="min-w-[147px] rounded-tl-md border-b-2 !text-green-A700_02"
                    >
                      Chờ xác nhận
                    </Button>
                    <Text
                      as="p"
                      className="mb-2 ml-5 self-end !font-normal !text-blue_gray-600 md:ml-0"
                    >
                      Đã xác nhận
                    </Text>
                    <Text
                      as="p"
                      className="mb-2 ml-10 self-end !font-normal !text-blue_gray-600 md:ml-0"
                    >
                      Đang xử lý
                    </Text>
                    <Text
                      as="p"
                      className="ml-10 !font-normal !text-blue_gray-600 md:ml-0"
                    >
                      Đã lấy hàng
                    </Text>
                    <Text
                      as="p"
                      className="ml-10 !font-normal !text-blue_gray-600 md:ml-0"
                    >
                      Đang vận chuyển
                    </Text>
                    <Text
                      as="p"
                      className="ml-10 !font-normal !text-blue_gray-600 md:ml-0"
                    >
                      Đã vận chuyển
                    </Text>
                    <Text
                      as="p"
                      className="ml-10 !font-normal !text-blue_gray-600 md:ml-0"
                    >
                      Đã huỷ
                    </Text>
                  </div>
                </div>
                <div className="flex w-[95%] flex-col items-center gap-10 rounded-[16px] bg-white-A700 px-[30px] pb-[29px] pt-[30px] md:w-full sm:p-5">
                  <div className="flex justify-between gap-5 self-stretch sm:flex-col">
                    <Input
                      size="xs"
                      shape="round"
                      name="search"
                      placeholder={`Tìm kiếm...`}
                      value={searchBarValue46}
                      onChange={(e) => setSearchBarValue46(e)}
                      suffix={
                        searchBarValue46?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue46("")}
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
                      className="w-[19%] gap-[35px] !rounded shadow-6xl sm:w-full"
                    />
                    {/* <SelectBox
                      color="white_A700"
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_arrowdown_blue_gray_600.svg"
                          alt="arrow_down"
                          className="h-[16px] w-[16px]"
                        />
                      }
                      name="arrowdown"
                      placeholder={`Lọc bởi danh mục`}
                      options={dropDownOptions}
                      className="w-[12%] gap-px shadow-6xl sm:w-full sm:pr-5"
                    /> */}
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
                    columns={table2Columns}
                    data={table2Data}
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
    <Footer/>
    </>
  );
}
