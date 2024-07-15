import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Text,
  RatingBar,
  Img,
  Heading,
  SelectBox,
} from "../../components";
import CompareProductsBreadcrumb from "../../components/CompareProductsBreadcrumb";
import Footer1 from "../../components/Footer1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function CompareProductsPage() {
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <header className="self-stretch bg-white-A700 pt-[11px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-[9px] self-stretch">
              <div className="container-md flex items-center justify-between gap-5 pr-1 md:flex-col md:p-5">
                <div className="flex items-end self-start sm:flex-col">
                  <div className="flex items-center gap-[5px]">
                    <a href="#">
                      <Img
                        src="images/img_pin_1.svg"
                        alt="pinone"
                        className="h-[16px] w-[16px]"
                      />
                    </a>
                    <Text size="s" as="p" className="self-end">
                      118 Cách Mạng Tháng 8
                    </Text>
                    <div className="h-full w-px bg-gray-200_01" />
                  </div>
                  <a href="#">
                    <Img
                      src="images/img_phone_1.svg"
                      alt="phoneone"
                      className="ml-[19px] h-[16px] w-[16px] sm:ml-0 sm:w-full"
                    />
                  </a>
                  <Text size="s" as="p" className="ml-[5px] !font-jost sm:ml-0">
                    <span className="font-bevietnampro text-blue_gray-900_02">
                      Bạn cần trợ giúp? Gọi ngay:&nbsp;
                    </span>
                    <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                      +84 1800 900
                    </span>
                  </Text>
                </div>
                <div className="flex w-[34%] items-center justify-center gap-[23px] md:w-full sm:flex-col">
                  <div className="flex items-start">
                    <Text size="s" as="p">
                      Tiếng Việt / VNĐ
                    </Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mt-[5px] h-[5px]"
                    />
                  </div>
                  <div className="flex w-[18%] items-center justify-center gap-4 sm:w-full">
                    <div className="h-[21px] w-px bg-gray-200_01" />
                    <SelectBox
                      shape="square"
                      indicator={
                        <Img
                          src="images/img_vector_blue_gray_900_02.svg"
                          alt="vector"
                          className="h-[5px] w-[8px]"
                        />
                      }
                      name="trgip"
                      placeholder={`Trợ giúp`}
                      options={dropDownOptions}
                      className="flex-grow gap-px text-blue_gray-900_02"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-[21px] w-px bg-gray-200_01" />
                    <Text size="s" as="p" className="self-end">
                      Tìm cửa hàng
                    </Text>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-full w-px bg-gray-200_01" />
                    <div className="flex items-center gap-4 self-end">
                      <Img
                        src="images/img_facebook.svg"
                        alt="close"
                        className="h-[12px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close"
                        className="h-[12px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close"
                        className="h-[12px]"
                      />
                      <Img
                        src="images/img_facebook_blue_gray_900_02.png"
                        alt="close"
                        className="h-[11px] self-start object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full self-stretch bg-gray-200_01" />
            </div>
            <div className="mt-[15px] flex w-[75%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                <Img
                  src="images/img_header_logo.png"
                  alt="headerlogo"
                  className="mb-[7px] h-[33px] w-[94px] object-contain"
                />
              </a>
              <div className="flex w-[79%] items-center justify-center gap-6 md:w-full md:flex-col">
                <div className="flex flex-1 items-center justify-between gap-5 self-end rounded-md border border-solid border-green-A700_02 py-[11px] pl-[27px] pr-4 md:self-stretch sm:pl-5">
                  <div className="flex w-[34%] items-start justify-center gap-5">
                    <div className="flex flex-1 items-end justify-between gap-5">
                      <Text size="md" as="p">
                        Danh mục
                      </Text>
                      <Img
                        src="images/img_vector_blue_gray_900_02.svg"
                        alt="vector"
                        className="mb-2.5 h-[5px]"
                      />
                      <div className="h-full w-px rounded-bl-[50%] rounded-tl-[50%] bg-green-400_01" />
                    </div>
                    <Text size="md" as="p" className="!text-blue_gray-600">
                      Tìm kiếm
                    </Text>
                  </div>
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_search_1.svg"
                      alt="searchone"
                      className="h-[20px] w-[20px]"
                    />
                  </a>
                </div>
                <div className="flex w-[43%] items-center justify-center gap-[17px] md:w-full sm:flex-col">
                  <div className="flex w-full items-start justify-center gap-[15px] self-end sm:w-full">
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Button
                        color="green_A700_11"
                        shape="round"
                        className="w-[50px]"
                      >
                        <Img src="images/img_heart_1.svg" />
                      </Button>
                    </a>
                    <Heading
                      size="lg"
                      as="p"
                      className="w-[61%] !font-inter leading-[22px]"
                    >
                      <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                        <>
                          Yêu thích <br />
                        </>
                      </span>
                      <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                        Sản phẩm
                      </span>
                    </Heading>
                  </div>
                  <div className="flex w-full items-start justify-center gap-[15px] self-end sm:w-full">
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Button
                        color="green_A700_11"
                        shape="round"
                        className="w-[50px]"
                      >
                        <Img src="images/img_profile_1.svg" />
                      </Button>
                    </a>
                    <Heading
                      size="lg"
                      as="p"
                      className="w-[61%] !font-inter leading-[22px]"
                    >
                      <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                        <>
                          Đăng nhập <br />
                        </>
                      </span>
                      <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                        Tài khoản
                      </span>
                    </Heading>
                  </div>
                  <div className="flex w-full items-center gap-[9px] sm:w-full">
                    <div className="relative h-[55px] w-[38%]">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          shape="round"
                          className="absolute bottom-[0.00px] left-[0.00px] m-auto w-[50px]"
                        >
                          <Img src="images/img_cart.svg" />
                        </Button>
                      </a>
                      <Heading
                        size="xs"
                        as="p"
                        className="absolute right-[0.00px] top-[0.00px] m-auto flex h-[15px] w-[15px] items-center justify-center rounded-[7px] bg-orange-300 text-center !text-blue_gray-900_01"
                      >
                        2
                      </Heading>
                    </div>
                    <Heading
                      size="lg"
                      as="p"
                      className="w-[62%] self-end !font-inter leading-[22px]"
                    >
                      <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                        289.000
                      </span>
                      <a
                        href="#"
                        className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02 underline"
                      >
                        <>
                          đ<br />
                        </>
                      </a>
                      <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                        Thanh toán
                      </span>
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
            <div className="container-md flex items-center justify-between gap-5 md:flex-col md:p-5">
              <div className="flex w-[53%] items-end justify-center md:w-full md:flex-col">
                <div className="relative h-[60px] w-[47%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5">
                  <div className="flex w-full flex-col items-start">
                    <div className="flex items-center justify-between gap-5 self-stretch">
                      <div className="flex w-[50%] items-center justify-center gap-[15px]">
                        <div className="h-[2px] w-[20px] bg-white-A700" />
                        <Heading as="h6" className="!text-white-A700">
                          Danh mục
                        </Heading>
                      </div>
                      <Img
                        src="images/img_vector_white_a700.svg"
                        alt="vector"
                        className="mb-[7px] h-[5px] self-end"
                      />
                    </div>
                    <div className="relative mt-[-3px] h-[2px] w-[15px] bg-white-A700" />
                  </div>
                  <div className="absolute left-[25.00px] top-[21.00px] m-auto h-[2px] w-[15px] bg-white-A700" />
                </div>
                <Text as="p" className="ml-[31px] md:ml-0">
                  Trang chủ
                </Text>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector"
                  className="mb-6 h-[5px] md:w-full"
                />
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Text as="p" className="ml-[38px] md:ml-0">
                    Sản phẩm
                  </Text>
                </a>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector"
                  className="mb-6 h-[5px] md:w-full"
                />
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Text as="p" className="mb-[17px] ml-[39px] md:ml-0">
                    Liên hệ
                  </Text>
                </a>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector_eleven"
                  className="mb-6 h-[5px] md:w-full"
                />
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Text as="p" className="ml-10 mt-[18px] md:ml-0">
                    Bài viết
                  </Text>
                </a>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector_thirteen"
                  className="mb-6 h-[5px] md:w-full"
                />
              </div>
              <ul className="flex flex-wrap gap-[17px]">
                <li>
                  <a href="#">
                    <Text as="p">Bán chạy nhất</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Ưu đãi trong ngày</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Ưu đãi hấp dẫn</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Hàng mới về</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="mt-[21px] flex w-[73%] flex-col items-start gap-[59px] md:w-full md:p-5 sm:gap-[29px]">
          <div className="flex w-[67%] items-start justify-between gap-5 md:w-full md:flex-col">
            <CompareProductsBreadcrumb />
            <Heading size="8xl" as="h1" className="mt-[11px] uppercase">
              SO SÁNH SẢN PHẨM
            </Heading>
          </div>
          <div className="mx-auto flex w-full max-w-[1403px] md:flex-col">
            <div className="w-[24%] border border-solid border-gray-200_11 bg-green-A700_11 pb-[122px] pt-[31px] md:w-full md:pb-5 sm:py-5">
              <div className="flex flex-col items-start">
                <Text
                  size="md"
                  as="p"
                  className="ml-11 !font-jost !font-medium md:ml-0"
                >
                  PRODUCT
                </Text>
                <div className="mt-[363px] flex flex-col items-start gap-6 self-stretch">
                  <div className="h-px w-full self-stretch bg-gray-200_01" />
                  <Text size="md" as="p" className="ml-11 !font-medium md:ml-0">
                    GIÁ
                  </Text>
                  <div className="h-px w-full self-stretch bg-gray-200_01" />
                </div>
                <Text
                  size="md"
                  as="p"
                  className="ml-11 mt-[23px] !font-medium md:ml-0"
                >
                  TÌNH TRẠNG
                </Text>
                <div className="mt-6 h-px w-full self-stretch bg-gray-200_01" />
                <Text
                  size="md"
                  as="p"
                  className="ml-11 mt-[21px] !font-medium md:ml-0"
                >
                  MÔ TẢ
                </Text>
                <div className="mt-[142px] flex flex-col items-start gap-[25px] self-stretch">
                  <div className="flex flex-col items-start gap-[25px] self-stretch">
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
                    <Text
                      size="md"
                      as="p"
                      className="ml-11 !font-medium md:ml-0"
                    >
                      MÃ SẢN PHẨM
                    </Text>
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
                  </div>
                  <Text size="md" as="p" className="ml-11 !font-medium md:ml-0">
                    CÂN NẶNG
                  </Text>
                  <div className="flex flex-col items-start gap-[25px] self-stretch">
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
                    <Text
                      size="md"
                      as="p"
                      className="ml-11 !font-medium md:ml-0"
                    >
                      KÍCH THƯỚC
                    </Text>
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
                  </div>
                  <Text size="md" as="p" className="ml-11 !font-medium md:ml-0">
                    MÀU SẮC
                  </Text>
                  <div className="flex flex-col items-start gap-[25px] self-stretch">
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
                    <Text
                      size="md"
                      as="p"
                      className="ml-11 !font-medium md:ml-0"
                    >
                      THƯƠNG HIỆU
                    </Text>
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ml-[-1px] flex flex-1 md:ml-0 md:flex-col md:self-stretch">
              <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-10 sm:pb-5">
                <div className="w-[89%] md:w-full md:p-5">
                  <div className="flex flex-col items-start">
                    <div className="self-stretch">
                      <div className="flex flex-col gap-[3px]">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 bg-white-A700 px-5 py-[25px] sm:py-5">
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              <Img
                                src="images/img_image_65.png"
                                alt="nike"
                                className="h-[230px] w-[230px] object-cover"
                              />
                            </a>
                          </div>
                          <Button
                            color="gray_100_05"
                            size="2xl"
                            shape="round"
                            className="mt-[9px] w-[30px]"
                          >
                            <Img src="images/img_close.svg" />
                          </Button>
                        </div>
                        <div className="ml-3.5 flex w-[79%] flex-col items-start gap-[9px] md:ml-0 md:w-full">
                          <Text
                            size="s"
                            as="p"
                            className="uppercase !text-blue_gray-600"
                          >
                            NIKE
                          </Text>
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            <Text as="p" className="w-full leading-7">
                              Áo thun Nike SB màu xám chất lượng cao
                            </Text>
                          </a>
                          <div className="flex w-[76%] items-start gap-2.5 md:w-full">
                            <RatingBar
                              value={1}
                              isEditable={true}
                              size={10}
                              className="flex justify-between"
                            />
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-600"
                            >
                              3,014 Đánh giá
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-3.5 mt-[41px] flex flex-wrap items-center gap-2.5 md:ml-0">
                      <Text size="2xl" as="p">
                        150.000đ
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="!text-blue_gray-600 line-through"
                      >
                        150.000đ
                      </Text>
                    </div>
                    <Text
                      as="p"
                      className="ml-3.5 mt-12 !font-normal !text-green-A700_02 md:ml-0"
                    >
                      82 đang có sẵn
                    </Text>
                    <Text
                      as="p"
                      className="mt-11 w-[92%] !font-normal leading-7 !text-blue_gray-600 md:w-full"
                    >
                      Cho dù bạn mặc nó sau khi tập gym hay chuẩn bị bắt đầu
                      ngày mới, áo phông này đang gọi tên bạn.
                    </Text>
                    <Text
                      as="p"
                      className="ml-3.5 mt-[101px] !font-normal md:ml-0"
                    >
                      5487FB8/44
                    </Text>
                    <Text
                      as="p"
                      className="ml-3.5 mt-12 !font-jost !font-normal md:ml-0"
                    >
                      500g
                    </Text>
                    <Text
                      as="p"
                      className="ml-3.5 mt-[42px] !font-jost !font-normal md:ml-0"
                    >
                      M
                    </Text>
                    <Text
                      as="p"
                      className="ml-3.5 mt-[46px] !font-normal md:ml-0"
                    >
                      Xám
                    </Text>
                    <Text as="p" className="ml-3.5 mt-12 !font-normal md:ml-0">
                      Nike
                    </Text>
                    <Button
                      size="10xl"
                      shape="round"
                      className="ml-[7px] mt-[52px] min-w-[176px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm md:ml-0 sm:px-5"
                    >
                      Thêm vào giỏ
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-10 sm:pb-5">
                <div className="flex w-[89%] flex-col items-start md:w-full md:p-5">
                  <div className="self-stretch">
                    <div className="flex flex-col gap-[3px]">
                      <div className="flex items-start gap-4">
                        <div className="flex-1 bg-white-A700 px-5 py-[25px] sm:py-5">
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            <Img
                              src="images/img_image_65.png"
                              alt="imagethirty"
                              className="h-[230px] w-[230px] object-cover"
                            />
                          </a>
                        </div>
                        <Button
                          color="gray_100_05"
                          size="2xl"
                          shape="round"
                          className="mt-[9px] w-[30px]"
                        >
                          <Img src="images/img_close.svg" />
                        </Button>
                      </div>
                      <div className="ml-3.5 flex w-[79%] flex-col items-start gap-[9px] md:ml-0 md:w-full">
                        <Text
                          size="s"
                          as="p"
                          className="uppercase !text-blue_gray-600"
                        >
                          NIKE
                        </Text>
                        <a
                          href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                          target="_blank"
                        >
                          <Text as="p" className="w-full leading-7">
                            Áo thun Nike SB màu xám chất lượng cao
                          </Text>
                        </a>
                        <div className="flex w-[76%] items-start gap-2.5 md:w-full">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between"
                          />
                          <Text
                            size="md"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            3,014 Đánh giá
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-3.5 mt-[41px] flex flex-wrap items-center gap-2.5 md:ml-0">
                    <Text size="2xl" as="p">
                      150.000đ
                    </Text>
                    <Text
                      size="md"
                      as="p"
                      className="!text-blue_gray-600 line-through"
                    >
                      150.000đ
                    </Text>
                  </div>
                  <Text
                    as="p"
                    className="ml-3.5 mt-12 !font-normal !text-green-A700_02 md:ml-0"
                  >
                    82 đang có sẵn
                  </Text>
                  <Text
                    as="p"
                    className="mt-11 w-[92%] !font-normal leading-7 !text-blue_gray-600 md:w-full"
                  >
                    Cho dù bạn mặc nó sau khi tập gym hay chuẩn bị bắt đầu ngày
                    mới, áo phông này đang gọi tên bạn.
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-[101px] !font-normal md:ml-0"
                  >
                    5487FB8/44
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-12 !font-jost !font-normal md:ml-0"
                  >
                    500g
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-[43px] !font-jost !font-normal md:ml-0"
                  >
                    S
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-[45px] !font-normal md:ml-0"
                  >
                    Xám
                  </Text>
                  <Text as="p" className="ml-3.5 mt-12 !font-normal md:ml-0">
                    Nike
                  </Text>
                  <Button
                    size="10xl"
                    shape="round"
                    className="ml-[7px] mt-[52px] min-w-[176px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm md:ml-0 sm:px-5"
                  >
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-10 sm:pb-5">
                <div className="flex w-[89%] flex-col items-start md:w-full md:p-5">
                  <div className="self-stretch">
                    <div className="flex flex-col gap-[3px]">
                      <div className="flex items-start gap-4">
                        <div className="flex-1 bg-white-A700 px-5 py-[25px] sm:py-5">
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            <Img
                              src="images/img_image_65.png"
                              alt="imagethirty"
                              className="h-[230px] w-[230px] object-cover"
                            />
                          </a>
                        </div>
                        <Button
                          color="gray_100_05"
                          size="2xl"
                          shape="round"
                          className="mt-[9px] w-[30px]"
                        >
                          <Img src="images/img_close.svg" />
                        </Button>
                      </div>
                      <div className="ml-3.5 flex w-[79%] flex-col items-start gap-[9px] md:ml-0 md:w-full">
                        <Text
                          size="s"
                          as="p"
                          className="uppercase !text-blue_gray-600"
                        >
                          NIKE
                        </Text>
                        <a
                          href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                          target="_blank"
                        >
                          <Text as="p" className="w-full leading-7">
                            Áo thun Nike SB màu xám chất lượng cao
                          </Text>
                        </a>
                        <div className="flex w-[76%] items-start gap-2.5 md:w-full">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between"
                          />
                          <Text
                            size="md"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            3,014 Đánh giá
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-3.5 mt-[41px] flex flex-wrap items-center gap-2.5 md:ml-0">
                    <Text size="2xl" as="p">
                      150.000đ
                    </Text>
                    <Text
                      size="md"
                      as="p"
                      className="!text-blue_gray-600 line-through"
                    >
                      150.000đ
                    </Text>
                  </div>
                  <Text
                    as="p"
                    className="ml-3.5 mt-12 !font-normal !text-green-A700_02 md:ml-0"
                  >
                    82 đang có sẵn
                  </Text>
                  <Text
                    as="p"
                    className="mt-11 w-[92%] !font-normal leading-7 !text-blue_gray-600 md:w-full"
                  >
                    Cho dù bạn mặc nó sau khi tập gym hay chuẩn bị bắt đầu ngày
                    mới, áo phông này đang gọi tên bạn.
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-[101px] !font-normal md:ml-0"
                  >
                    5487FB8/44
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-12 !font-jost !font-normal md:ml-0"
                  >
                    500g
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-[43px] !font-jost !font-normal md:ml-0"
                  >
                    XL
                  </Text>
                  <Text
                    as="p"
                    className="ml-3.5 mt-[45px] !font-normal md:ml-0"
                  >
                    Xám
                  </Text>
                  <Text as="p" className="ml-3.5 mt-12 !font-normal md:ml-0">
                    Nike
                  </Text>
                  <Button
                    size="10xl"
                    shape="round"
                    className="ml-[7px] mt-[52px] min-w-[176px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm md:ml-0 sm:px-5"
                  >
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[100px] flex-col self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
