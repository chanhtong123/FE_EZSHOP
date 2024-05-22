import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img, SelectBox } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option2", value: "option2" },
];
export default function CartDetailPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
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
        <header className="relative flex flex-col items-center self-stretch bg-white-A700 pt-[11px]">
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
                <SelectBox
                  shape="square"
                  indicator={
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="h-[5px] w-[8px]"
                    />
                  }
                  name="tingvitvn"
                  placeholder={`Tiếng Việt / VNĐ`}
                  options={dropDownOptions}
                  className="flex-grow gap-px text-blue_gray-900_02"
                />
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
            <Img
              src="images/img_header_logo.png"
              alt="headerlogo"
              className="mb-[7px] h-[33px] w-[94px] object-contain"
            />
            <div className="flex w-[79%] items-center justify-center gap-6 md:w-full md:flex-col">
              <div className="flex flex-1 items-center justify-between gap-5 self-end rounded-md border border-solid border-green-A700_02 py-[11px] pl-[27px] pr-4 md:self-stretch sm:pl-5">
                <div className="flex w-[34%] items-start justify-center gap-5">
                  <SelectBox
                    size="md"
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_vector_blue_gray_900_02.svg"
                        alt="vector"
                        className="h-[5px] w-[8px]"
                      />
                    }
                    name="danhmc"
                    placeholder={`Danh mục`}
                    options={dropDownOptions}
                    className="flex-grow gap-px text-blue_gray-900_02 sm:pr-5"
                  />
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
              <div className="flex w-[43%] items-end justify-center gap-[17px] md:w-full sm:flex-col">
                <div className="flex flex-1 items-start justify-center gap-[15px] sm:self-stretch">
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
                  className="w-[17%] !font-inter leading-[22px] sm:w-full"
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
                <div className="flex-1 sm:self-stretch">
                  <div className="flex items-center gap-[9px]">
                    <div className="relative h-[55px] w-[38%]">
                      <a href="#">
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
          </div>
          <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
          <div className="container-md flex items-center justify-center gap-[31px] pr-[5px] md:flex-col md:p-5">
            <div className="relative h-[60px] w-[20%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5">
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
            <div className="flex flex-1 items-center justify-between gap-5 pr-[118px] md:flex-col md:self-stretch md:pr-5">
              <ul className="flex gap-[38px] sm:flex-col">
                <li
                  onMouseLeave={() => {
                    setMenuOpen(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-1">
                    <Text as="p">Trang chủ</Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mb-1.5 h-[5px] w-[8px]"
                    />
                  </div>
                  {menuOpen ? <MegaMenu1 /> : null}
                </li>
                <li
                  onMouseLeave={() => {
                    setMenuOpen1(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen1(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-1">
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mb-[5px] h-[5px] w-[8px]"
                    />
                  </div>
                  {menuOpen1 ? <MegaMenu1 /> : null}
                </li>
                <li
                  onMouseLeave={() => {
                    setMenuOpen2(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen2(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-[3px]">
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mb-1.5 h-[5px] w-[8px]"
                    />
                  </div>
                  {menuOpen2 ? <MegaMenu1 /> : null}
                </li>
                <li
                  onMouseLeave={() => {
                    setMenuOpen3(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen3(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-1">
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="h-[5px] w-[8px]"
                    />
                  </div>
                  {menuOpen3 ? <MegaMenu1 /> : null}
                </li>
              </ul>
              <ul className="flex flex-wrap gap-4">
                <li>
                  <a href="#">
                    <Text as="p">đãi</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Ưu</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">trong</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="mt-[21px] flex w-[73%] flex-col items-start md:w-full md:p-5">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p">
              Trang chủ
            </Text>
            <Text size="md" as="p">
              /
            </Text>
            <Text size="md" as="p" className="!text-blue_gray-600">
              Giỏ hàng
            </Text>
          </div>
          <div className="container-xs flex flex-col items-center">
            <Heading size="8xl" as="h1" className="uppercase">
              Giỏ hàng
            </Heading>
            <div className="mt-[51px] flex w-[32%] flex-col items-center gap-1.5 md:w-full">
              <Text size="lg" as="p" className="flex !font-medium">
                <span className="text-blue_gray-900_02">Mua thêm&nbsp;</span>
                <span className="text-green-A700_02">312.000</span>
                <a href="#" className="text-green-A700_02 underline">
                  đ để được MIỄN PHÍ Vận chuyển
                </a>
              </Text>
              <div className="relative h-[40px] self-stretch">
                <div className="relative bottom-0 left-0 right-0 top-0 m-auto h-[6px] w-full rounded-[3px] bg-gray-100_05">
                  <div
                    style={{ width: "57%" }}
                    className="absolute h-full rounded-[3px] bg-orange-300"
                  />
                </div>
                <Img
                  src="images/img_icon_white_a700.svg"
                  alt="icon"
                  className="absolute bottom-0 right-[39%] top-0 my-auto h-[40px] w-[40px]"
                />
              </div>
            </div>
            <div className="mt-[30px] self-stretch">
              <div className="flex flex-col gap-[30px]">
                <div className="flex items-start gap-[27px] md:flex-col">
                  <div className="flex-1 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[548px] pt-[71px] md:self-stretch md:py-5">
                    <div className="relative z-[2] mt-[-618px] flex items-start justify-between gap-5 rounded-tl-md rounded-tr-md bg-gray-100_02 pb-[21px] pl-[52px] pr-[67px] pt-[22px] md:px-5 sm:flex-col sm:p-5">
                      <Heading
                        size="lg"
                        as="h2"
                        className="!font-semibold capitalize"
                      >
                        SẢN PHẨM
                      </Heading>
                      <div className="flex w-[56%] flex-wrap items-start justify-between gap-5 sm:w-full">
                        <Heading
                          size="lg"
                          as="h3"
                          className="!font-semibold capitalize"
                        >
                          ĐƠN GIÁ
                        </Heading>
                        <Heading
                          size="lg"
                          as="h4"
                          className="!font-semibold capitalize"
                        >
                          SỐ LƯỢNG
                        </Heading>
                        <Heading
                          size="lg"
                          as="h5"
                          className="!font-semibold capitalize"
                        >
                          TỔNG
                        </Heading>
                        <Heading
                          size="lg"
                          as="h6"
                          className="!font-semibold capitalize"
                        >
                          HỦY
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col pb-[53px] pt-[21px] md:pb-5 sm:py-5">
                      <Img
                        src="images/img_image_65.png"
                        alt="imagesixtyfive"
                        className="relative z-[1] ml-[43px] h-[93px] w-[93px] object-cover md:ml-0"
                      />
                      <div className="relative mt-[-78px] h-[458px]">
                        <div className="absolute bottom-0 right-[8%] top-0 my-auto flex w-[72%] flex-col gap-[92px] md:relative">
                          <div className="flex flex-1 items-start justify-between gap-5 sm:flex-col">
                            <div className="mt-3 flex w-[43%] items-start justify-between gap-5 sm:w-full">
                              <div className="flex flex-col items-start gap-[7px]">
                                <Text size="md" as="p">
                                  Áo thun tay ngắn cổ tròn
                                </Text>
                                <Heading
                                  size="lg"
                                  as="p"
                                  className="!font-semibold capitalize !text-gray-900_06"
                                >
                                  <span className="text-blue_gray-900_02">
                                    Size:&nbsp;
                                  </span>
                                  <span className="font-normal text-blue_gray-900_02">
                                    M
                                  </span>
                                </Heading>
                                <Text
                                  as="p"
                                  className="!font-jost !font-normal"
                                >
                                  Màu sắc: Xám bạc
                                </Text>
                              </div>
                              <Heading
                                size="lg"
                                as="p"
                                className="flex !font-semibold capitalize"
                              >
                                <span className="text-blue_gray-900_02">
                                  120.000
                                </span>
                                <a
                                  href="#"
                                  className="text-blue_gray-900_02 underline"
                                >
                                  đ
                                </a>
                              </Heading>
                            </div>
                            <div className="flex w-[34%] items-center justify-between gap-5 sm:w-full">
                              <div className="flex w-[49%] items-center justify-center gap-4 rounded-[21px] border border-solid border-gray-200_01 bg-white-A700 px-[5px] py-1.5">
                                <div className="w-[36%] rounded-[15px] bg-white-A700 px-2.5 pb-3.5 pt-[15px]">
                                  <div className="h-px w-[10px] rotate-[90deg] bg-blue_gray-900_02" />
                                </div>
                                <Text size="md" as="p" className="self-end">
                                  3
                                </Text>
                                <Button
                                  color="gray_100_05"
                                  size="2xl"
                                  shape="circle"
                                  className="w-[30px] !rounded-[15px]"
                                >
                                  <Img src="images/img_plus.svg" />
                                </Button>
                              </div>
                              <Heading
                                size="lg"
                                as="p"
                                className="flex !font-semibold capitalize"
                              >
                                <span className="text-blue_gray-900_02">
                                  360.000
                                </span>
                                <a
                                  href="#"
                                  className="text-blue_gray-900_02 underline"
                                >
                                  đ
                                </a>
                              </Heading>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              alt="image"
                              className="mt-3 h-[14px] w-[14px] sm:w-full"
                            />
                          </div>
                          <div className="flex flex-1 items-start justify-between gap-5 sm:flex-col">
                            <div className="mt-3 flex w-[43%] items-start justify-between gap-5 sm:w-full">
                              <div className="flex flex-col items-start gap-1.5">
                                <div className="flex flex-col items-start gap-2">
                                  <Text size="md" as="p">
                                    Áo thun tay ngắn cổ tròn
                                  </Text>
                                  <Heading
                                    size="lg"
                                    as="p"
                                    className="!font-semibold capitalize !text-gray-900_06"
                                  >
                                    <span className="text-blue_gray-900_02">
                                      Size:&nbsp;
                                    </span>
                                    <span className="font-normal text-blue_gray-900_02">
                                      M
                                    </span>
                                  </Heading>
                                </div>
                                <Text
                                  as="p"
                                  className="!font-jost !font-normal"
                                >
                                  Màu sắc: Xám bạc
                                </Text>
                              </div>
                              <Heading
                                size="lg"
                                as="p"
                                className="flex !font-semibold capitalize"
                              >
                                <span className="text-blue_gray-900_02">
                                  120.000
                                </span>
                                <a
                                  href="#"
                                  className="text-blue_gray-900_02 underline"
                                >
                                  đ
                                </a>
                              </Heading>
                            </div>
                            <div className="flex w-[34%] items-center justify-between gap-5 sm:w-full">
                              <div className="flex w-[49%] items-center justify-center gap-4 rounded-[21px] border border-solid border-gray-200_01 bg-white-A700 px-[5px] py-1.5">
                                <div className="w-[36%] rounded-[15px] bg-white-A700 px-2.5 pb-3.5 pt-[15px]">
                                  <div className="h-px w-[10px] rotate-[90deg] bg-blue_gray-900_02" />
                                </div>
                                <Text size="md" as="p" className="self-end">
                                  3
                                </Text>
                                <Button
                                  color="gray_100_05"
                                  size="2xl"
                                  shape="circle"
                                  className="w-[30px] !rounded-[15px]"
                                >
                                  <Img src="images/img_plus.svg" />
                                </Button>
                              </div>
                              <Heading
                                size="lg"
                                as="p"
                                className="flex !font-semibold capitalize"
                              >
                                <span className="text-blue_gray-900_02">
                                  360.000
                                </span>
                                <a
                                  href="#"
                                  className="text-blue_gray-900_02 underline"
                                >
                                  đ
                                </a>
                              </Heading>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              alt="close"
                              className="mt-3 h-[14px] w-[14px] sm:w-full"
                            />
                          </div>
                          <div className="flex flex-1 items-start justify-between gap-5 sm:flex-col">
                            <div className="mt-3 flex w-[43%] items-start justify-between gap-5 sm:w-full">
                              <div className="flex flex-col items-start gap-[7px]">
                                <Text size="md" as="p">
                                  Áo thun tay ngắn cổ tròn
                                </Text>
                                <Heading
                                  size="lg"
                                  as="p"
                                  className="!font-semibold capitalize !text-gray-900_06"
                                >
                                  <span className="text-blue_gray-900_02">
                                    Size:&nbsp;
                                  </span>
                                  <span className="font-normal text-blue_gray-900_02">
                                    M
                                  </span>
                                </Heading>
                                <Text
                                  as="p"
                                  className="!font-jost !font-normal"
                                >
                                  Màu sắc: Xám bạc
                                </Text>
                              </div>
                              <Heading
                                size="lg"
                                as="p"
                                className="flex !font-semibold capitalize"
                              >
                                <span className="text-blue_gray-900_02">
                                  120.000
                                </span>
                                <a
                                  href="#"
                                  className="text-blue_gray-900_02 underline"
                                >
                                  đ
                                </a>
                              </Heading>
                            </div>
                            <div className="flex w-[34%] items-center justify-between gap-5 sm:w-full">
                              <div className="flex w-[49%] items-center justify-center gap-4 rounded-[21px] border border-solid border-gray-200_01 bg-white-A700 px-[5px] py-1.5">
                                <div className="w-[36%] rounded-[15px] bg-white-A700 px-2.5 pb-3.5 pt-[15px]">
                                  <div className="h-px w-[10px] rotate-[90deg] bg-blue_gray-900_02" />
                                </div>
                                <Text size="md" as="p" className="self-end">
                                  3
                                </Text>
                                <Button
                                  color="gray_100_05"
                                  size="2xl"
                                  shape="circle"
                                  className="w-[30px] !rounded-[15px]"
                                >
                                  <Img src="images/img_plus.svg" />
                                </Button>
                              </div>
                              <Heading
                                size="lg"
                                as="p"
                                className="flex !font-semibold capitalize"
                              >
                                <span className="text-blue_gray-900_02">
                                  360.000
                                </span>
                                <a
                                  href="#"
                                  className="text-blue_gray-900_02 underline"
                                >
                                  đ
                                </a>
                              </Heading>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              alt="close"
                              className="mt-3 h-[14px] w-[14px] sm:w-full"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_rectangle_311.svg"
                          alt="image"
                          className="absolute bottom-[28%] left-0 right-0 m-auto h-px w-full"
                        />
                        <Img
                          src="images/img_image_65.png"
                          alt="imagesixtysix"
                          className="absolute left-[5%] top-[37%] m-auto h-[93px] w-[93px] object-cover"
                        />
                        <Img
                          src="images/img_image_65.png"
                          alt="imagesixtyseven"
                          className="absolute bottom-[10.00px] left-[5%] m-auto h-[93px] w-[93px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[33%] flex-col items-start gap-[29px] rounded-md border border-solid border-gray-200_01 bg-white-A700 px-[30px] py-7 md:w-full sm:p-5">
                    <Heading size="5xl" as="h5" className="uppercase">
                      Tổng Thanh toán
                    </Heading>
                    <div className="flex flex-col gap-[47px] self-stretch">
                      <div className="flex justify-between gap-5">
                        <Text
                          size="md"
                          as="p"
                          className="w-[37%] capitalize leading-[30px]"
                        >
                          <>
                            Tổng Đơn hàng <br /> Giảm giá <br /> Tổng phí vận
                            chuyển
                          </>
                        </Text>
                        <Heading
                          size="lg"
                          as="p"
                          className="w-[21%] text-right !font-semibold capitalize leading-[30px]"
                        >
                          <span className="text-blue_gray-900_02">
                            1.080.000
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            <>
                              đ<br />
                            </>
                          </a>
                          <span className="text-blue_gray-900_02">80.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            <>
                              đ<br />
                            </>
                          </a>
                          <span className="text-blue_gray-900_02">24.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                      </div>
                      <div className="flex flex-col gap-[13px]">
                        <div className="h-px bg-gray-200_01" />
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="md" as="p">
                            Tổng thanh toán
                          </Text>
                          <Heading as="h6" className="flex">
                            <span className="text-blue_gray-900_02">
                              1.080.000
                            </span>
                            <a
                              href="#"
                              className="text-blue_gray-900_02 underline"
                            >
                              đ
                            </a>
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Button
                        size="10xl"
                        shape="round"
                        className="w-full border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                      >
                        Thanh toán ngay
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="flex w-[61%] items-center justify-between gap-5 md:w-full sm:flex-col">
                  <div className="flex w-[41%] flex-wrap justify-between gap-5 rounded-md border border-dashed border-blue_gray-600 bg-white-A700 pb-[17px] pl-4 pr-[22px] pt-[19px] sm:w-full sm:pr-5">
                    <Text size="md" as="p">
                      Mã khuyến mãi
                    </Text>
                    <Heading
                      size="lg"
                      as="p"
                      className="self-start !font-semibold capitalize underline"
                    >
                      Nhập mã
                    </Heading>
                  </div>
                  <Button
                    size="10xl"
                    variant="outline"
                    shape="round"
                    className="min-w-[134px] sm:px-5"
                  >
                    Quay về
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[71px] self-stretch" />
      </div>
    </>
  );
}
