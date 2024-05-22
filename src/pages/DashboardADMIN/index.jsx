import React from "react";
import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  Heading,
  Button,
  RatingBar,
  SelectBox,
} from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table1Data = [
  {
    id: "#1923",
    tncahng: "Cửa hàng quần áo nam",
    snhng: "15",
    nhgi: 1,
    tngdoanhthu: "20.000.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
  {
    id: "#1922",
    tncahng: "Cửa hàng giày dép Adidas",
    snhng: "15",
    nhgi: "images/img_star_1_1.svg",
    tngdoanhthu: "20.000.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
  {
    id: "#1921",
    tncahng: "Cửa hàng giày dép Adidas",
    snhng: "15",
    nhgi: 1,
    tngdoanhthu: "20.000.000đ",
    thm: "images/.png",
  },
  {
    id: "#1920",
    tncahng: "Cửa hàng thời trang nữ",
    snhng: "15",
    nhgi: 1,
    tngdoanhthu: "20.000.000đ",
    thm: "images/.png",
  },
  {
    id: "#1919",
    tncahng: "Cửa hàng giày dép Adidas",
    snhng: "15",
    nhgi: "images/img_star_1_1.svg",
    tngdoanhthu: "20.000.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
];
export default function DashboardADMINPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text size="lg" as="p">
            {" "}
            {info?.getValue?.()}{" "}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5 pl-5">
            {" "}
            ID{" "}
          </Text>
        ),
        meta: { width: "137px" },
      }),
      table1ColumnHelper.accessor("tncahng", {
        cell: (info) => (
          <Text size="lg" as="p">
            {" "}
            {info?.getValue?.()}{" "}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            {" "}
            Tên cửa hàng{" "}
          </Text>
        ),
        meta: { width: "228px" },
      }),
      table1ColumnHelper.accessor("snhng", {
        cell: (info) => (
          <Text size="lg" as="p">
            {" "}
            {info?.getValue?.()}{" "}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            {" "}
            Số đơn hàng{" "}
          </Text>
        ),
        meta: { width: "158px" },
      }),
      table1ColumnHelper.accessor("nhgi", {
        cell: (info) => (
          <div className="flex flex-1 md:self-stretch">
            {" "}
            <RatingBar
              value={info?.getValue?.()}
              isEditable={true}
              size={10}
              className="flex justify-between"
            />{" "}
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            {" "}
            Đánh giá{" "}
          </Text>
        ),
        meta: { width: "141px" },
      }),
      table1ColumnHelper.accessor("tngdoanhthu", {
        cell: (info) => (
          <Heading size="lg" as="p" className="flex !font-semibold capitalize">
            {" "}
            <span className="text-blue_gray-900_02">20.000.000</span>{" "}
            <a href="#" className="text-blue_gray-900_02 underline">
              {" "}
              đ{" "}
            </a>{" "}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            {" "}
            Tổng doanh thu{" "}
          </Text>
        ),
        meta: { width: "191px" },
      }),
      table1ColumnHelper.accessor("thm", {
        cell: (info) => (
          <div className="flex">
            {" "}
            <Img
              src={info?.getValue?.()}
              alt="upload"
              className="h-[24px] w-[24px]"
            />{" "}
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            {" "}
            Thêm{" "}
          </Text>
        ),
        meta: { width: "55px" },
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
      <div className="w-full bg-white-A700 px-5 pb-[30px] pt-5 sm:pb-5">
        <div className="flex flex-col gap-5">
          <Header />
          <div className="flex items-start gap-[30px] md:flex-col">
            <Sidebar1 className="mt-16" />
            <div className="flex flex-1 flex-col items-center gap-[29px] md:self-stretch">
              <div className="flex flex-col gap-[33px] self-stretch rounded-[16px] bg-gray-100_05 pb-[60px] pl-[60px] pr-14 pt-[52px] md:p-5">
                <div className="flex flex-col items-start gap-3.5">
                  <Heading size="8xl" as="h1" className="uppercase">
                    Bảng quản lý
                  </Heading>
                  <Text
                    as="p"
                    className="!font-jost !font-normal !text-blue_gray-600"
                  >
                    Lorem ipsum dolor sit amet, consectetur.
                  </Text>
                </div>
                <div className="flex gap-[30px] md:flex-col">
                  <div className="flex w-full items-center justify-center gap-1 rounded-[16px] bg-white-A700 px-[22px] pb-[39px] pt-[22px] shadow-3xl sm:p-5">
                    <div className="flex flex-1 flex-col items-start gap-[15px]">
                      <Heading as="h2" className="uppercase">
                        Tổng Thu Nhập
                      </Heading>
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <Heading size="5xl" as="h3">
                          365TR.256
                        </Heading>
                        <Button
                          size="lg"
                          shape="round"
                          leftIcon={
                            <Img
                              src="images/img_arrows_1_1.svg"
                              alt="arrows (1) 1"
                              className="h-[14px] w-[14px]"
                            />
                          }
                          className="min-w-[60px] gap-[3px] !text-gray-100_02"
                        >
                          2.2%
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <Text
                          size="md"
                          as="p"
                          className="flex self-end !text-green-A700_02"
                        >
                          <span className="text-green-A700_02">59.021.100</span>
                          <a href="#" className="text-green-A700_02 underline">
                            đ
                          </a>
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="self-start !text-blue_gray-600"
                        >
                          Sản phẩm mới
                        </Text>
                      </div>
                    </div>
                    <Button
                      color="gray_100_02"
                      size="md"
                      className="mb-[15px] w-[60px] self-end rounded-[16px]"
                    >
                      <Img src="images/img_settings_green_a700_02.svg" />
                    </Button>
                  </div>
                  <div className="flex w-full rounded-[16px] bg-white-A700 px-[26px] pb-[39px] pt-[26px] shadow-3xl sm:p-5">
                    <div className="flex w-full flex-col">
                      <div className="flex items-start justify-between gap-5">
                        <div className="mb-4 flex flex-col items-start gap-[22px]">
                          <Heading as="h4" className="self-center uppercase">
                            Cửa hàng
                          </Heading>
                          <Heading size="5xl" as="h5">
                            66,894
                          </Heading>
                        </div>
                        <Button
                          color="gray_100_02"
                          size="md"
                          className="w-[60px] rounded-[16px]"
                        >
                          <Img src="images/img_sent_1.svg" />
                        </Button>
                      </div>
                      <div className="relative mt-[-3px] flex gap-[3px]">
                        <div className="flex flex-col self-start">
                          <Text
                            size="md"
                            as="p"
                            className="!text-green-A700_02"
                          >
                            500+
                          </Text>
                          <Text
                            size="md"
                            as="p"
                            className="relative mt-[-18px] !text-green-A700_02"
                          >
                            500+
                          </Text>
                        </div>
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Cửa hàng mới
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full rounded-[16px] bg-white-A700 px-[23px] pb-[39px] pt-[23px] shadow-3xl sm:p-5">
                    <div className="flex w-full flex-col">
                      <div className="flex items-start justify-between gap-5">
                        <div className="mb-[19px] flex flex-col items-start gap-[23px]">
                          <Heading as="h6" className="uppercase">
                            Khách Hàng
                          </Heading>
                          <Heading size="5xl" as="h5">
                            583.350
                          </Heading>
                        </div>
                        <Button
                          color="gray_100_02"
                          size="md"
                          className="w-[60px] rounded-[16px]"
                        >
                          <Img src="images/img_settings_green_a700_02_60x60.svg" />
                        </Button>
                      </div>
                      <div className="relative mt-[-3px] flex flex-wrap gap-[5px]">
                        <Text
                          size="md"
                          as="p"
                          className="self-start !text-green-A700_02"
                        >
                          50+
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="self-end !text-blue_gray-600"
                        >
                          Khách hàng mới
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex rounded-[16px] bg-white-A700 px-[19px] pb-[39px] pt-[19px] shadow-3xl sm:pb-5">
                    <div className="flex flex-col items-start">
                      <div className="relative z-[2] flex items-end">
                        <div className="mb-[18px] flex flex-col items-start gap-[18px]">
                          <Heading as="h6" className="uppercase">
                            Số Dư Hệ Thống
                          </Heading>
                          <Heading size="5xl" as="h5">
                            365TR.256
                          </Heading>
                        </div>
                        <Button
                          color="red_400"
                          size="lg"
                          shape="round"
                          leftIcon={
                            <Img
                              src="images/img_arrows_2_1.svg"
                              alt="arrows (2) 1"
                              className="h-[14px] w-[14px]"
                            />
                          }
                          className="mb-[18px] ml-[27px] min-w-[60px] gap-0.5"
                        >
                          2.2%
                        </Button>
                        <Button
                          color="gray_100_02"
                          size="md"
                          className="ml-1.5 w-[60px] rounded-[16px]"
                        >
                          <Img src="images/img_wallet_1.svg" />
                        </Button>
                      </div>
                      <div className="relative mt-[-4px] flex flex-wrap gap-[5px]">
                        <Text
                          size="md"
                          as="p"
                          className="flex self-end !text-green-A700_02"
                        >
                          <span className="text-green-A700_02">
                            100.000.000
                          </span>
                          <a href="#" className="text-green-A700_02 underline">
                            đ
                          </a>
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="self-start !text-blue_gray-600"
                        >
                          Số dư
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex gap-[30px] md:flex-col">
                      <div className="flex flex-1 flex-col gap-[29px] rounded-[16px] bg-white-A700 py-[30px] pl-[30px] pr-[27px] shadow-3xl md:self-stretch sm:p-5">
                        <div className="flex items-start justify-between gap-5 sm:flex-col">
                          <Text size="2xl" as="p" className="uppercase">
                            Thống kê thu nhập
                          </Text>
                          <div className="flex w-[33%] justify-center gap-[15px] sm:w-full">
                            <Button
                              color="gray_100_05"
                              size="6xl"
                              shape="round"
                              className="min-w-[158px] !rounded-lg"
                            >
                              Báo cáo xuất khẩu
                            </Button>
                            <SelectBox
                              color="gray_200"
                              size="lg"
                              variant="outline"
                              shape="round"
                              indicator={
                                <Img
                                  src="images/img_checkmark.svg"
                                  alt="checkmark"
                                  className="h-[15px] w-[15px]"
                                />
                              }
                              name="tunny"
                              placeholder={`Tuần này`}
                              options={dropDownOptions}
                              className="w-[45%] gap-px !rounded-lg sm:pr-5"
                            />
                          </div>
                        </div>
                        <div className="flex items-start md:flex-col">
                          <div className="flex flex-col items-start gap-[22px]">
                            <Text
                              size="s"
                              as="p"
                              className="!text-blue_gray-700"
                            >
                              300
                            </Text>
                            <Text
                              size="s"
                              as="p"
                              className="!text-blue_gray-700"
                            >
                              250
                            </Text>
                            <Text
                              size="s"
                              as="p"
                              className="!text-blue_gray-700"
                            >
                              200
                            </Text>
                            <Text
                              size="s"
                              as="p"
                              className="!text-blue_gray-700"
                            >
                              150
                            </Text>
                            <Text
                              size="s"
                              as="p"
                              className="!text-blue_gray-700"
                            >
                              100
                            </Text>
                            <Text
                              size="s"
                              as="p"
                              className="h-[17px] w-[17px] !text-blue_gray-700"
                            >
                              50
                            </Text>
                            <Text
                              size="s"
                              as="p"
                              className="!text-blue_gray-700"
                            >
                              0
                            </Text>
                          </div>
                          <div className="relative ml-[-4px] flex-1 md:ml-0 md:self-stretch">
                            <div className="relative h-[247px]">
                              <Img
                                src="images/img_graphics.png"
                                alt="graphics"
                                className="absolute bottom-[0.00px] left-0 right-0 m-auto h-[196px] w-full object-cover"
                              />
                              <div className="absolute bottom-0 right-[37%] top-0 my-auto flex h-max w-[14%] flex-col items-center">
                                <div className="relative z-[3] flex flex-col items-center gap-[15px] self-stretch">
                                  <div className="flex flex-col items-center gap-2 self-stretch rounded-md bg-white-A700 pb-[9px] pt-3 shadow-4xl">
                                    <Heading
                                      size="s"
                                      as="p"
                                      className="!font-lato tracking-[0.10px] !text-blue_gray-600"
                                    >
                                      Tháng 4
                                    </Heading>
                                    <div className="self-stretch">
                                      <div className="flex flex-col items-center gap-2.5">
                                        <div className="h-px w-full self-stretch rounded-[1px] bg-gray-200_01" />
                                        <div className="flex w-[85%] items-start gap-[7px] md:w-full">
                                          <div className="h-[7px] w-[7px] rounded-[3px] bg-teal-800_01" />
                                          <Heading
                                            size="s"
                                            as="p"
                                            className="tracking-[0.10px]"
                                          >
                                            Lượt bán : 59K
                                          </Heading>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[16px] w-[16px] rounded-lg border border-solid border-deep_purple-800 bg-white-A700 shadow-5xl" />
                                </div>
                                <div className="relative mt-[-97px] h-[239px] w-px bg-deep_purple-800" />
                              </div>
                            </div>
                            <div className="flex items-start gap-10 md:flex-col">
                              <div className="flex w-full flex-col items-end px-[11px] pb-[3px]">
                                <div className="mr-[5px] h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-blue_gray-700"
                                >
                                  T1
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end pb-[3px] pl-[9px] pr-2.5">
                                <div className="mr-1.5 h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[17px] !text-blue_gray-700"
                                >
                                  T2
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end px-[9px] pb-[18px]">
                                <div className="mr-[7px] h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[17px] !text-blue_gray-700"
                                >
                                  T3
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end px-[9px] pb-[3px]">
                                <div className="mr-1.5 h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[16px] !text-blue_gray-700"
                                >
                                  T4
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end pb-[3px] pl-[9px] pr-2.5">
                                <div className="mr-1.5 h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[17px] !text-blue_gray-700"
                                >
                                  T5
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end pb-[3px] pl-[9px] pr-2.5">
                                <div className="mr-1.5 h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[16px] !text-blue_gray-700"
                                >
                                  T6
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-center px-[9px] pb-[3px]">
                                <div className="h-[6px] w-px bg-blue_gray-100" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[17px] !text-blue_gray-700"
                                >
                                  T7
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end pb-[3px] pl-[9px] pr-2.5">
                                <div className="mr-1.5 h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[17px] !text-blue_gray-700"
                                >
                                  T8
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end px-[9px] pb-[3px]">
                                <div className="mr-[7px] h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[17px] !text-blue_gray-700"
                                >
                                  T9
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end px-1.5 pb-[3px]">
                                <div className="mr-[9px] h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-blue_gray-700"
                                >
                                  T10
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end px-[9px] pb-[3px]">
                                <div className="mr-[7px] h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="h-[17px] w-[18px] !text-blue_gray-700"
                                >
                                  T11
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end pb-[3px] pl-1.5 pr-[7px]">
                                <div className="mr-[9px] h-[6px] w-px bg-blue_gray-100 md:mr-0" />
                                <Text
                                  size="s"
                                  as="p"
                                  className="!text-blue_gray-700"
                                >
                                  T12
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[33%] flex-col gap-11 rounded-[16px] bg-white-A700 px-[29px] pb-[79px] pt-[29px] shadow-3xl md:w-full md:pb-5 sm:p-5">
                        <div className="flex items-start justify-between gap-5">
                          <Text size="2xl" as="p" className="uppercase">
                            THU NHẬP
                          </Text>
                          <SelectBox
                            color="gray_200"
                            size="lg"
                            variant="outline"
                            shape="round"
                            indicator={
                              <Img
                                src="images/img_checkmark.svg"
                                alt="checkmark"
                                className="h-[15px] w-[15px]"
                              />
                            }
                            name="tunny_one"
                            placeholder={`Tuần này`}
                            options={dropDownOptions}
                            className="w-[31%] gap-px !rounded-lg sm:pr-5"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-5">
                          <div className="flex w-[22%] flex-col gap-[27px]">
                            <div className="flex flex-col items-start">
                              <div className="flex items-start gap-2 self-stretch">
                                <div className="h-[9px] w-[9px] rounded bg-green-50" />
                                <Text size="lg" as="p" className="!font-medium">
                                  Thu nhập
                                </Text>
                              </div>
                              <Text
                                size="md"
                                as="p"
                                className="ml-[17px] !text-blue_gray-600_b2 md:ml-0"
                              >
                                32%
                              </Text>
                            </div>
                            <div className="flex w-[64%] flex-col items-end gap-1 md:w-full">
                              <div className="flex items-center gap-2 self-stretch">
                                <div className="h-[9px] w-[9px] rounded bg-light_green-300" />
                                <Text size="lg" as="p" className="!font-medium">
                                  Thuế
                                </Text>
                              </div>
                              <Text
                                size="md"
                                as="p"
                                className="mr-[7px] !text-blue_gray-600_b2 md:mr-0"
                              >
                                28%
                              </Text>
                            </div>
                            <div className="flex w-[57%] flex-col items-start gap-[3px] md:w-full">
                              <div className="flex w-[82%] items-start gap-2 md:w-full">
                                <div className="h-[9px] w-[9px] rounded bg-green-A700_02" />
                                <Text size="lg" as="p" className="!font-medium">
                                  Phí
                                </Text>
                              </div>
                              <Text
                                size="md"
                                as="p"
                                className="self-end !text-blue_gray-600_b2"
                              >
                                40%
                              </Text>
                            </div>
                          </div>
                          <div className="flex h-[227px] flex-col items-center justify-center bg-[url(/public/images/img_group_4133.svg)] bg-cover bg-no-repeat pb-24 pl-10 pr-9 pt-[94px] md:h-auto md:py-5 sm:p-5">
                            <Text size="7xl" as="p" className="flex">
                              <span className="text-blue_gray-900_02">
                                56TR330
                              </span>
                              <a
                                href="#"
                                className="text-blue_gray-900_02 underline"
                              >
                                đ
                              </a>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[30px] md:flex-col">
                      <div className="flex flex-1 flex-col items-start gap-[33px] rounded-[16px] bg-white-A700 px-[30px] pb-20 pt-[29px] shadow-3xl md:self-stretch md:pb-5 sm:p-5">
                        <Text size="2xl" as="p" className="uppercase">
                          TOP doanh thu
                        </Text>
                        <ReactTable
                          size="md"
                          bodyProps={{ className: "" }}
                          headerProps={{
                            className: "bg-gray-100_02 flex-wrap rounded-md",
                          }}
                          rowDataProps={{ className: "md:flex-col" }}
                          className="self-stretch"
                          columns={table1Columns}
                          data={table1Data}
                        />
                      </div>
                      <div className="flex w-[33%] flex-col items-start gap-[17px] rounded-[16px] bg-white-A700 px-[30px] pb-4 pt-[23px] shadow-3xl md:w-full sm:px-5 sm:pt-5">
                        <Text size="2xl" as="p" className="uppercase">
                          HOẠT ĐỘNG GẦN ĐÂY
                        </Text>
                        <div className="flex flex-col self-stretch">
                          <div>
                            <div className="flex items-start gap-[11px] sm:flex-col">
                              <div className="flex w-[15%] flex-col items-end sm:w-full">
                                <div className="flex items-start gap-[9px] self-stretch">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="!font-jost !font-medium"
                                  >
                                    08:42
                                  </Text>
                                  <div className="h-[13px] w-[13px] rounded-md border-[3px] border-solid border-gray-800" />
                                </div>
                                <div className="mr-[5px] h-[40px] w-[3px] rounded-[1px] bg-indigo-50_01 md:mr-0" />
                              </div>
                              <Text
                                as="p"
                                className="w-[85%] !font-normal leading-[150%] !text-blue_gray-600 sm:w-full"
                              >
                                <>
                                  Thanh toán bởi Ali Price <br /> Sản phẩm đồng
                                  hồ thông minh
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex w-[88%] md:w-full">
                            <div className="flex w-full items-start gap-[11px]">
                              <div className="flex w-[17%] flex-col items-end">
                                <div className="flex items-start gap-2.5 self-stretch">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="!font-jost !font-medium"
                                  >
                                    10:00
                                  </Text>
                                  <div className="h-[13px] w-[13px] rounded-md border-[3px] border-solid border-cyan-400" />
                                </div>
                                <div className="mr-[5px] h-[100px] w-[3px] rounded-[1px] bg-indigo-50_01 md:mr-0" />
                              </div>
                              <div className="flex flex-1 flex-col gap-1.5">
                                <Text
                                  as="p"
                                  className="!font-normal leading-[150%] !text-blue_gray-600"
                                >
                                  <>
                                    Đã thêm bộ sưu tập phong cách mới <br /> Bởi
                                    TFN Technologies
                                  </>
                                </Text>
                                <div className="flex gap-2.5">
                                  <div className="flex flex-col items-center rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[7px]">
                                    <Img
                                      src="images/img_image_75_45x45.png"
                                      alt="imageseventyfiv"
                                      className="h-[45px] w-[45px] object-cover"
                                    />
                                  </div>
                                  <div className="flex flex-col items-center rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[7px]">
                                    <Img
                                      src="images/img_image_76_45x45.png"
                                      alt="imageseventysix"
                                      className="h-[45px] w-[45px] object-cover"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-[60%] md:w-full">
                            <div className="flex w-full flex-col items-start">
                              <div className="flex gap-[11px] self-stretch">
                                <Text
                                  size="md"
                                  as="p"
                                  className="!font-jost !font-medium"
                                >
                                  14:37
                                </Text>
                                <div className="flex flex-1 items-start gap-[11px]">
                                  <div className="h-[13px] w-[13px] rounded-md border-[3px] border-solid border-red-A200" />
                                  <Heading as="h6" className="!font-bold">
                                    Gửi 700 USD vào TFN
                                  </Heading>
                                </div>
                              </div>
                              <div className="ml-[53px] h-[24px] w-[3px] rounded-[1px] bg-indigo-50_01 md:ml-0" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-px">
                            <div className="flex flex-1 items-center gap-[11px] sm:flex-col">
                              <div className="w-[16%] sm:w-full">
                                <div className="flex flex-col items-end">
                                  <div className="flex items-start gap-[11px] self-stretch">
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-jost !font-medium"
                                    >
                                      16:50
                                    </Text>
                                    <div className="h-[13px] w-[13px] rounded-md border-[3px] border-solid border-blue-400" />
                                  </div>
                                  <div className="mr-[5px] h-[50px] w-[3px] rounded-[1px] bg-indigo-50_01 md:mr-0" />
                                </div>
                              </div>
                              <Text
                                as="p"
                                className="w-[84%] !font-normal leading-[150%] !text-blue_gray-600 sm:w-full"
                              >
                                <>
                                  Natasha Carey đã thích sản phẩm. <br /> Cho
                                  phép người dùng thích sản phẩm trong cửa hàng
                                  của bạn.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-1 items-start gap-2.5 sm:flex-col">
                              <div className="flex w-[16%] flex-col items-end sm:w-full">
                                <div className="flex items-start gap-[11px] self-stretch">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="!font-jost !font-medium"
                                  >
                                    21:03
                                  </Text>
                                  <div className="h-[13px] w-[13px] rounded-md border-[3px] border-solid border-deep_orange-500" />
                                </div>
                                <div className="mr-[5px] h-[40px] w-[3px] rounded-[1px] bg-indigo-50_01 md:mr-0" />
                              </div>
                              <Text
                                as="p"
                                className="w-[84%] !font-normal leading-[150%] !text-blue_gray-600 sm:w-full"
                              >
                                <>
                                  Sản phẩm được yêu thích <br /> Esther James có
                                  sản phẩm yêu thích.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-1 items-start sm:flex-col">
                              <Text
                                size="md"
                                as="p"
                                className="!font-jost !font-medium"
                              >
                                23:07
                              </Text>
                              <div className="ml-[9px] mt-[5px] h-[13px] w-[13px] rounded-md border-[3px] border-solid border-deep_purple-A200 sm:ml-0" />
                              <Text
                                as="p"
                                className="ml-3.5 w-[87%] !font-normal leading-[150%] !text-blue_gray-600 sm:ml-0 sm:w-full"
                              >
                                <>
                                  Ưu đãi hôm nay của Digitech Galaxy <br /> Ưu
                                  đãi chỉ áp dụng cho đơn hàng từ 500 Rupee trở
                                  lên.
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[82%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="mb-[9px] flex flex-wrap gap-2 self-end">
                  <Text size="md" as="p">
                    © 2022 Zenmart. All Rights Reserved
                  </Text>
                  <Text size="md" as="p">
                    Privacy · Terms · Sitemap
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
