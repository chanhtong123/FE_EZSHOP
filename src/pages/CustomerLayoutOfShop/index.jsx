import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import SalesShopPagination from "../../components/SalesShopPagination";
import Sidebar2 from "../../components/Sidebar2";
import { createColumnHelper } from "@tanstack/react-table";
const tableData = [
  {
    id: "#1923",
    tn: "Cameron Williamson",
    sinthoi: "(704) 555-0127",
    chitiu: "$211.00",
    snhng: "10",
    chnhsa: "images/img_menu.svg",
  },
  {
    id: "#1923",
    tn: "Eleanor Pena",
    sinthoi: "(201) 555-0124",
    chitiu: "$211.00",
    snhng: "15",
    chnhsa: "images/img_menu.svg",
  },
  {
    id: "#1923",
    tn: "Darrell Steward",
    sinthoi: "(319) 555-0115",
    chitiu: "$211.00",
    snhng: "20",
    chnhsa: "images/img_menu.svg",
  },
  {
    id: "#1923",
    tn: "Esther Howard",
    sinthoi: "(316) 555-0116",
    chitiu: "$211.00",
    snhng: "15",
    chnhsa: "images/img_menu.svg",
  },
  {
    id: "#1923",
    tn: "Dianne Russell",
    sinthoi: "(302) 555-0107",
    chitiu: "$211.00",
    snhng: "10",
    chnhsa: "images/img_menu.svg",
  },
  {
    id: "#1923",
    tn: "Jerome Bell",
    sinthoi: "(307) 555-0133",
    chitiu: "$211.00",
    snhng: "20",
    chnhsa: "images/img_menu.svg",
  },
  {
    id: "#1923",
    tn: "Jacob Jones",
    sinthoi: "(229) 555-0109",
    chitiu: "$211.00",
    snhng: "20",
    chnhsa: "images/img_menu.svg",
  },
];
export default function CustomerLayoutOfShopPage() {
  const [searchBarValue33, setSearchBarValue33] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("id", {
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
      tableColumnHelper.accessor("tn", {
        cell: (info) => (
          <div className="flex items-center gap-[11px]">
            <Img
              src="images/img_play.png"
              alt="play"
              className="h-[41px] w-[40px] object-cover"
            />
            <div className="flex flex-col items-start gap-1.5">
              <Text as="p">{info?.getValue?.()}</Text>
              <Text size="lg" as="p">
                creativelayers088@gmail.com
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Tên
          </Text>
        ),
        meta: { width: "616px" },
      }),
      tableColumnHelper.accessor("sinthoi", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Số điện thoại
          </Text>
        ),
        meta: { width: "211px" },
      }),
      tableColumnHelper.accessor("chitiu", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Chi tiêu
          </Text>
        ),
        meta: { width: "166px" },
      }),
      tableColumnHelper.accessor("snhng", {
        cell: (info) => (
          <Text size="lg" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-6 sm:py-5">
            Số đơn hàng
          </Text>
        ),
        meta: { width: "187px" },
      }),
      tableColumnHelper.accessor("chnhsa", {
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
            Chỉnh sửa
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
            <Sidebar2 />
            <div className="flex flex-1 flex-col items-center gap-[30px] md:self-stretch">
              <div className="flex flex-col items-start justify-center gap-[60px] self-stretch rounded-[16px] bg-gray-100_05 pb-[60px] pl-[60px] pr-14 pt-[61px] md:p-5 sm:gap-[30px]">
                <div className="flex flex-col items-start gap-[11px]">
                  <Text size="7xl" as="p">
                    Khách hàng
                  </Text>
                  <Text as="p" className="!font-normal">
                    Lorem ipsum dolor sit amet, consectetur.
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-[35px] self-stretch rounded-[16px] bg-white-A700 px-[30px] pb-[31px] pt-[30px] shadow-3xl sm:p-5">
                  <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                    <Input
                      shape="round"
                      name="search"
                      placeholder={`Tìm kiếm khách hàng`}
                      value={searchBarValue33}
                      onChange={(e) => setSearchBarValue33(e)}
                      suffix={
                        searchBarValue33?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue33("")}
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
                      className="min-w-[201px] border border-solid border-green-A700_02 font-medium !text-green-50_01 shadow-sm sm:px-5"
                    >
                      Thêm khách hàng
                    </Button>
                  </div>
                  <ReactTable
                    size="lg"
                    bodyProps={{ className: "" }}
                    headerProps={{
                      className: "bg-gray-100_02 flex-wrap rounded-md",
                    }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch"
                    columns={tableColumns}
                    data={tableData}
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
