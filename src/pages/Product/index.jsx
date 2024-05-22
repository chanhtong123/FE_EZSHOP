import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Heading,
  RatingBar,
  Img,
  Button,
  CheckBox,
  SeekBar,
  Input,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
import HomePageThree from "../../components/HomePageThree";
import MegaMenu1 from "../../components/MegaMenu1";
import SalesShopPagination from "../../components/SalesShopPagination";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ProductPage() {
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
      <div className="flex w-full flex-col items-center gap-[67px] bg-white-A700 sm:gap-[33px]">
        <header className="relative self-stretch bg-white-A700 pt-[11px]">
          <div className="flex flex-col items-center">
            <div className="container-md flex items-center justify-between gap-5 pr-1 md:flex-col md:p-5">
              <div className="flex items-end self-start sm:flex-col">
                <a href="#">
                  <Img
                    src="images/img_pin_1.svg"
                    alt="pinone"
                    className="h-[16px] w-[16px] sm:w-full"
                  />
                </a>
                <Text size="s" as="p" className="ml-[5px] sm:ml-0">
                  118 Cách Mạng Tháng 8
                </Text>
                <div className="ml-[5px] h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />
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
              <div className="flex w-[34%] items-center justify-center md:w-full sm:flex-col">
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
                <div className="ml-[23px] flex w-[21%] items-center justify-center gap-4 sm:ml-0 sm:w-full">
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
                <div className="ml-[23px] h-[21px] w-px self-start bg-gray-200_01 sm:ml-0 sm:h-px sm:w-[21px]" />
                <Text size="s" as="p" className="ml-4 self-end sm:ml-0">
                  Tìm cửa hàng
                </Text>
                <div className="ml-[23px] flex items-center gap-2.5 sm:ml-0">
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
            <div className="mt-[9px] h-px w-full self-stretch bg-gray-200_01" />
            <div className="mt-[15px] flex w-[75%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
              <Img
                src="images/img_header_logo.png"
                alt="headerlogo"
                className="mb-[7px] h-[33px] w-[94px] object-contain"
              />
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
                  <a href="#">
                    <Img
                      src="images/img_search_1.svg"
                      alt="searchone"
                      className="h-[20px] w-[20px]"
                    />
                  </a>
                </div>
                <div className="flex w-[43%] items-center justify-center gap-[17px] md:w-full sm:flex-col">
                  <div className="flex w-full items-start justify-center gap-[15px] self-end sm:w-full">
                    <a href="#">
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
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
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
                    </a>
                  </div>
                  <div className="w-full sm:w-full">
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
            <div className="container-md md:p-5">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[58%] items-center justify-between gap-5 md:w-full md:flex-col">
                  <div className="relative h-[60px] w-[38%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5">
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
                        <Text as="p">Sản phẩm</Text>
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
                          alt="vector_eleven"
                          className="h-[5px] w-[8px]"
                        />
                      </div>
                      {menuOpen3 ? <MegaMenu1 /> : null}
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-wrap gap-3.5">
                  <li>
                    <a href="#">
                      <Text as="p">Ưu</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">đãi</Text>
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
          </div>
        </header>
        <div className="w-[74%] md:w-full md:p-5">
          <div className="flex items-start md:flex-col">
            <div className="relative z-[2] flex w-[18%] flex-col md:w-full">
              <div className="flex items-start justify-between gap-5">
                <Text size="2xl" as="p">
                  Lọc theo thương hiệu
                </Text>
                <div className="mt-[9px] h-px w-[15px] bg-blue_gray-900_02" />
              </div>
              <div className="mt-6 flex w-[82%] flex-col gap-6 md:w-full">
                <div className="flex flex-col gap-5">
                  <Input
                    size="md"
                    shape="round"
                    name="search_one"
                    placeholder={`Tìm thương hiệu`}
                    className="border border-solid border-gray-200_01 !text-blue_gray-900_02 sm:pr-5"
                  />
                  <div className="flex flex-col items-start gap-2.5">
                    <div className="flex justify-between gap-5 self-stretch">
                      <div className="relative h-[150px] w-[38%] md:h-auto">
                        <CheckBox
                          name="appleasusacerde"
                          label="AppleAsusAcerDellLenovo"
                          id="appleasusacerde"
                          className="gap-2.5 text-left text-[15px] leading-[30px] text-blue_gray-900_02"
                        />
                        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[20%] flex-col">
                          <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                          <div className="mt-3.5 flex flex-col items-center rounded bg-blue_gray-900_02 p-1">
                            <Img
                              src="images/img_check_1_1.svg"
                              alt="check1one"
                              className="h-[8px] w-[8px]"
                            />
                          </div>
                          <div className="mt-11 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                          <div className="mt-3.5 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                        </div>
                      </div>
                      <Text
                        size="s"
                        as="p"
                        className="w-[11%] text-right leading-[30px] !text-blue_gray-600"
                      >
                        <>
                          87 <br /> 92 <br /> 123 <br /> 49 <br /> 12
                        </>
                      </Text>
                    </div>
                    <div className="flex w-[39%] flex-col items-start gap-[5px] shadow-sm md:w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-gray-900_06"
                      >
                        Xem tất cả
                      </Text>
                      <div className="h-[2px] w-[32px] bg-gray-900_06" />
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="mt-[15px] flex w-[75%] items-center justify-between gap-5 md:w-full">
                <Text size="2xl" as="p">
                  Giá
                </Text>
                <div className="h-px w-[15px] bg-blue_gray-900_02" />
              </div>
              <div className="mt-[26px] flex w-[82%] flex-col gap-[25px] md:w-full">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-[5px]">
                    <div className="flex w-[70%] flex-wrap justify-between gap-5 md:w-full">
                      <Text size="lg" as="p">
                        Thấp
                      </Text>
                      <Text size="lg" as="p">
                        Cao
                      </Text>
                    </div>
                    <div className="flex gap-5">
                      <Input
                        size="md"
                        shape="round"
                        name="50000đ"
                        placeholder={`50.000đ`}
                        className="w-full border border-solid border-gray-200_01 sm:pr-5"
                      />
                      <Input
                        size="md"
                        shape="round"
                        name="750000đ"
                        placeholder={`750.000đ`}
                        className="w-full border border-solid border-gray-200_01"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[18px] pt-1.5">
                    <div className="self-stretch">
                      <SeekBar
                        inputValue={[10, 20]}
                        trackColors={["#f3f5f6", "#041e42", "#f3f5f6"]}
                        className="flex h-[14px] rounded-[1px]"
                        trackClassName="h-[2px] w-full rounded-[1px]"
                        thumbClassName="flex justify-center items-center h-[14px] w-[14px] rounded-[50%] border-blue_gray-900_02 border-2 border-solid bg-white-A700"
                      />
                    </div>
                    <Text size="md" as="p" className="flex">
                      <span className="text-blue_gray-900_02">50.000</span>
                      <a href="#" className="text-blue_gray-900_02 underline">
                        đ
                      </a>
                      <span className="text-blue_gray-900_02">
                        &nbsp;- 750.000
                      </span>
                      <a href="#" className="text-blue_gray-900_02 underline">
                        đ
                      </a>
                    </Text>
                  </div>
                </div>
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="mt-[15px] flex w-[82%] items-center justify-between gap-5 md:w-full">
                <Text size="2xl" as="p">
                  CPU Manufacturer
                </Text>
                <div className="h-px w-[15px] bg-blue_gray-900_02" />
              </div>
              <div className="mt-6 flex w-[82%] flex-col gap-6 md:w-full">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex justify-between gap-5 self-stretch">
                    <div className="relative h-[150px] w-[41%] md:h-auto">
                      <CheckBox
                        name="adidasnikediorc"
                        label="AdidasNikeDiorChannelGucci"
                        id="adidasnikediorc"
                        className="gap-2.5 text-left text-[15px] leading-[30px] text-blue_gray-900_02"
                      />
                      <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[19%] flex-col">
                        <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                        <div className="mt-3.5 flex flex-col items-center rounded bg-blue_gray-900_02 p-1">
                          <Img
                            src="images/img_check_1_1.svg"
                            alt="check1one"
                            className="h-[8px] w-[8px]"
                          />
                        </div>
                        <div className="mt-11 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                        <div className="mt-3.5 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                      </div>
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="w-[11%] text-right leading-[30px] !text-blue_gray-600"
                    >
                      <>
                        87 <br /> 92 <br /> 123 <br /> 49 <br /> 12
                      </>
                    </Text>
                  </div>
                  <div className="flex w-[39%] flex-col items-start gap-[5px] shadow-sm md:w-full">
                    <Text
                      size="lg"
                      as="p"
                      className="!font-medium !text-gray-900_06"
                    >
                      Xem tất cả
                    </Text>
                    <div className="h-[2px] w-[32px] bg-gray-900_06" />
                  </div>
                </div>
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="mt-[15px] flex w-[57%] items-center justify-between gap-5 md:w-full">
                <Text size="2xl" as="p">
                  Kích thước
                </Text>
                <div className="h-px w-[15px] bg-blue_gray-900_02" />
              </div>
              <div className="mt-6 flex w-[82%] flex-col gap-6 md:w-full">
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex justify-between gap-5 self-stretch">
                    <div className="relative h-[150px] w-[27%] md:h-auto">
                      <CheckBox
                        name="smlxlxxl"
                        label="SMLXLXXL"
                        id="smlxlxxl"
                        className="gap-2.5 text-left text-[15px] leading-[30px] text-blue_gray-900_02"
                      />
                      <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[28%] flex-col">
                        <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                        <div className="mt-3.5 flex flex-col items-center rounded bg-blue_gray-900_02 p-1">
                          <Img
                            src="images/img_check_1_1.svg"
                            alt="check1one"
                            className="h-[8px] w-[8px]"
                          />
                        </div>
                        <div className="mt-11 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                        <div className="mt-3.5 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                      </div>
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="w-[11%] text-right leading-[30px] !text-blue_gray-600"
                    >
                      <>
                        87 <br /> 92 <br /> 123 <br /> 49 <br /> 12
                      </>
                    </Text>
                  </div>
                  <div className="flex w-[39%] flex-col items-start gap-[5px] shadow-sm md:w-full">
                    <Text
                      size="lg"
                      as="p"
                      className="!font-medium !text-gray-900_06"
                    >
                      Xem tất cả
                    </Text>
                    <div className="h-[2px] w-[32px] bg-gray-900_06" />
                  </div>
                </div>
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="mt-[13px] flex w-[82%] items-center justify-between gap-5 md:w-full">
                <Text size="2xl" as="p">
                  Màu sắc
                </Text>
                <div className="mb-2 h-px w-[15px] self-end bg-blue_gray-900_02" />
              </div>
              <div className="mt-[26px] flex w-[82%] flex-col gap-6 md:w-full">
                <Img
                  src="images/img_inner.svg"
                  alt="inner"
                  className="h-[26px]"
                />
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="mt-4 flex w-[82%] items-start justify-between gap-5 md:w-full">
                <Text size="2xl" as="p">
                  Lượt đánh giá
                </Text>
                <div className="mt-[9px] h-px w-[15px] bg-blue_gray-900_02" />
              </div>
              <div className="mt-6 flex w-[82%] flex-col gap-6 md:w-full">
                <div className="flex flex-col gap-px pb-[7px] md:flex-row">
                  <Text
                    size="lg"
                    as="p"
                    className="mr-[70px] w-[24%] leading-[30px] md:mr-0"
                  >
                    <>
                      & up <br />& up <br />& up <br />& up
                    </>
                  </Text>
                  <Text
                    size="s"
                    as="p"
                    className="w-[11%] text-right leading-[30px] !text-blue_gray-600"
                  >
                    <>
                      87 <br /> 92 <br /> 123 <br /> 49
                    </>
                  </Text>
                  <div className="h-[16px] w-[16px] rounded-lg border border-solid border-gray-900_04" />
                  <div className="ml-[27px] flex flex-col gap-5 md:ml-0">
                    <div className="flex gap-[5px] self-start">
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                    <div className="flex gap-[5px] self-start">
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="image"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                    <div className="flex gap-[5px] self-start">
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image_ten"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image_eleven"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="image_twelve"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="image_thirteen"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="imageteen"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                    <div className="flex gap-[5px] self-start">
                      <Img
                        src="images/img_star_1_1.svg"
                        alt="image_fifteen"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="imageteen"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="imageteen"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="imageeen"
                        className="h-[10px] w-[10px]"
                      />
                      <Img
                        src="images/img_star_1_5.svg"
                        alt="imageteen"
                        className="h-[10px] w-[10px]"
                      />
                    </div>
                  </div>
                  <div className="flex w-[8%] flex-col rounded-lg bg-blue_gray-900_02 p-[3px] md:w-full">
                    <div className="h-[10px] w-[10px] rounded-[5px] bg-white-A700" />
                  </div>
                  <div className="h-[16px] w-[16px] rounded-lg border border-solid border-gray-900_04" />
                  <div className="h-[16px] w-[16px] rounded-lg border border-solid border-gray-900_04" />
                </div>
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="mt-4 flex w-[83%] items-start justify-between gap-5 md:w-full">
                <Text size="2xl" as="p">
                  Tình trạng
                </Text>
                <div className="mt-[9px] h-px w-[15px] bg-blue_gray-900_02" />
              </div>
              <div className="mt-6 flex w-[82%] md:w-full">
                <div className="flex w-full justify-between gap-5">
                  <div className="flex w-[44%] items-center justify-center gap-2.5">
                    <div className="flex w-[19%] flex-col gap-3.5">
                      <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                      <div className="flex flex-col items-center rounded bg-blue_gray-900_02 p-1">
                        <Img
                          src="images/img_check_1_1.svg"
                          alt="check1one"
                          className="h-[8px] w-[8px]"
                        />
                      </div>
                      <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                    </div>
                    <Text size="lg" as="p" className="w-[81%] leading-[30px]">
                      <>
                        New <br /> Used <br /> Renewed
                      </>
                    </Text>
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="w-[11%] text-right leading-[30px] !text-blue_gray-600"
                  >
                    <>
                      87 <br /> 92 <br /> 123
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="relative ml-[-3px] flex flex-1 flex-col items-center md:ml-0 md:self-stretch">
              <div className="flex w-[96%] items-start justify-center gap-[23px] rounded-md bg-gray-100_02 px-4 pt-4 md:w-full md:flex-col">
                <div className="mt-[52px] flex w-[50%] flex-col items-start md:w-full">
                  <Heading
                    size="8xl"
                    as="h1"
                    className="w-full uppercase leading-[60px]"
                  >
                    GIẢM GIÁ 500K CHO THỜI TRANG Đôi
                  </Heading>
                  <Text
                    as="p"
                    className="w-[73%] !font-normal leading-7 !text-blue_gray-600 md:w-full"
                  >
                    Tất cả các loại sản phẩm ở một nơi. Bắt đầu từ $1. Nhận tiền
                    hoàn lại và ưu đãi
                  </Text>
                  <Button
                    size="9xl"
                    shape="round"
                    className="mt-[17px] min-w-[176px] !text-gray-100_02 sm:px-5"
                  >
                    Khám phá ngay
                  </Button>
                </div>
                <div className="flex w-[41%] items-center justify-center md:w-full sm:flex-col">
                  <Img
                    src="images/img_model_man.png"
                    alt="modelman"
                    className="h-[384px] w-[49%] rounded-md object-cover sm:w-full"
                  />
                  <Img
                    src="images/img_model_women.png"
                    alt="modelwomen"
                    className="relative ml-[-80px] h-[376px] w-[51%] rounded-md object-cover sm:ml-0 sm:w-full"
                  />
                </div>
              </div>
              <Text
                size="7xl"
                as="p"
                className="ml-[25px] mt-[60px] self-start md:ml-0"
              >
                Sản phẩm bán chạy
              </Text>
              <div className="mt-[30px] flex self-stretch md:flex-col">
                <div className="flex w-full items-center">
                  <Button
                    color="white_A700"
                    shape="circle"
                    className="relative z-[1] w-[50px] !rounded-[25px] border border-solid border-gray-200_01"
                  >
                    <Img src="images/img_arrow_left_blue_gray_900.svg" />
                  </Button>
                  <HomePageThree
                    starimage1="images/img_star_1_1.svg"
                    starimage2="images/img_star_1_1.svg"
                    starimage3="images/img_star_1_1.svg"
                    starimage4="images/img_star_1_1.svg"
                    starimage5="images/img_star_1_1.svg"
                    className="relative ml-[-25px] flex-1 sm:pb-5"
                  />
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                  <div className="relative h-[280px] self-stretch bg-white-A700 pb-[19px] pl-3.5 pr-4 pt-5 md:h-auto">
                    <Img
                      src="images/img_image_30_1.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-end gap-[74px] md:gap-[55px] sm:gap-[37px]">
                      <div className="flex flex-col gap-[7px]">
                        <Button
                          color="gray_100_05"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px] shadow-xs"
                        >
                          <Img src="images/img_heart_1.svg" />
                        </Button>
                        <Button
                          color="white_A700"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px]"
                        >
                          <Img src="images/img_show_1.svg" />
                        </Button>
                        <Button
                          color="white_A700"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px]"
                        >
                          <Img src="images/img_graph_1.svg" />
                        </Button>
                      </div>
                      <Button
                        size="9xl"
                        shape="round"
                        className="w-full sm:px-5"
                      >
                        Thêm vào giỏ hàng
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h2" className="w-full leading-[150%]">
                      Áo tập gym thoáng mát Nike thấm hút mồ hôi
                    </Heading>
                    <div className="flex items-start gap-2.5">
                      <div className="flex gap-[5px]">
                        <Img
                          src="images/img_star_1_1.svg"
                          alt="image"
                          className="h-[10px] w-[10px]"
                        />
                        <Img
                          src="images/img_star_1_1.svg"
                          alt="image"
                          className="h-[10px] w-[10px]"
                        />
                        <Img
                          src="images/img_star_1_1.svg"
                          alt="image"
                          className="h-[10px] w-[10px]"
                        />
                        <Img
                          src="images/img_star_1_1.svg"
                          alt="image"
                          className="h-[10px] w-[10px]"
                        />
                        <Img
                          src="images/img_star_1_1.svg"
                          alt="image"
                          className="h-[10px] w-[10px]"
                        />
                      </div>
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-start gap-2.5">
                      <Text size="2xl" as="p" className="flex !font-jost">
                        <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
                          278.000
                        </span>
                        <a
                          href="#"
                          className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
                        >
                          đ
                        </a>
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30_2.png"
                        alt="imagethirty"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h3" className="w-full leading-[150%]">
                        Áo nỉ chần bông màu xám có dây Nike
                      </Heading>
                      <div className="flex items-start gap-2.5">
                        <div className="flex gap-[5px]">
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                        </div>
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Heading size="3xl" as="h4" className="flex">
                          <span className="text-blue_gray-900_02">278.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex w-full items-center">
                  <HomePageThree
                    image="images/img_image_30_230x230.png"
                    description="Khoác gió chống nắng thời trang Adidas"
                    starimage1="images/img_star_1_1.svg"
                    starimage2="images/img_star_1_1.svg"
                    starimage3="images/img_star_1_1.svg"
                    starimage4="images/img_star_1_1.svg"
                    starimage5="images/img_star_1_1.svg"
                    className="flex-1 sm:pb-5"
                  />
                  <Button
                    color="white_A700"
                    shape="circle"
                    className="relative ml-[-25px] w-[50px] !rounded-[25px] border border-solid border-blue_gray-900"
                  >
                    <Img src="images/img_arrow_right.svg" />
                  </Button>
                </div>
              </div>
              <div className="mt-[71px] flex w-[96%] flex-col gap-8 md:w-full">
                <div className="flex flex-col items-start gap-[51px] sm:gap-[25px]">
                  <Text size="7xl" as="p">
                    Tất cả sản phẩm
                  </Text>
                  <div className="h-px w-full self-stretch bg-gray-200_01" />
                </div>
                <div className="flex justify-between gap-5 md:flex-col">
                  <div className="flex items-center gap-2.5 sm:flex-col">
                    <Text size="lg" as="p" className="!text-blue_gray-600">
                      Hiển thị 1–20 trong 175 kết quả.
                    </Text>
                    <div className="h-full w-px bg-gray-200_01 sm:h-px sm:w-full" />
                    <Text
                      size="lg"
                      as="p"
                      className="h-[19px] w-[20px] self-end !text-blue_gray-600 underline"
                    >
                      20
                    </Text>
                    <div className="h-full w-px bg-gray-200_01 sm:h-px sm:w-full" />
                    <Text size="lg" as="p" className="!text-blue_gray-600">
                      40
                    </Text>
                    <div className="h-full w-px bg-gray-200_01 sm:h-px sm:w-full" />
                    <Text size="lg" as="p" className="!text-blue_gray-600">
                      60
                    </Text>
                    <div className="h-full w-px bg-gray-200_01 sm:h-px sm:w-full" />
                    <Text
                      size="lg"
                      as="p"
                      className="self-start !text-blue_gray-600"
                    >
                      Tất cả
                    </Text>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="flex items-start gap-[9px]">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-600"
                      >
                        Lọc sản phẩm
                      </Text>
                      <Img
                        src="images/img_vector_blue_gray_600.svg"
                        alt="vector_thirteen"
                        className="mt-1.5 h-[5px]"
                      />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="h-full w-px bg-gray-200_01" />
                      <Text size="lg" as="p" className="!text-blue_gray-600">
                        Danh sách
                      </Text>
                      <div className="h-full w-px bg-gray-200_01" />
                      <Text
                        size="lg"
                        as="p"
                        className="self-end !text-blue_gray-600 underline"
                      >
                        Lưới
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[31px] grid w-[96%] grid-cols-4 justify-center gap-px md:grid-cols-2 sm:grid-cols-1">
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30_230x230.png"
                        alt="thời_trang"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h5" className="w-full leading-[150%]">
                        Áo Hoodie Nike dành cho mùa đông lạnh
                      </Heading>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Heading size="3xl" as="h6" className="flex">
                          <span className="text-blue_gray-900_02">278.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                  <div className="relative h-[280px] self-stretch bg-white-A700 pb-[19px] pl-3.5 pr-4 pt-5 md:h-auto">
                    <Img
                      src="images/img_image_30_1.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-end gap-[74px] md:gap-[55px] sm:gap-[37px]">
                      <div className="flex flex-col gap-[7px]">
                        <Button
                          color="gray_100_05"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px] shadow-xs"
                        >
                          <Img src="images/img_heart_1.svg" />
                        </Button>
                        <Button
                          color="white_A700"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px]"
                        >
                          <Img src="images/img_show_1.svg" />
                        </Button>
                        <Button
                          color="white_A700"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px]"
                        >
                          <Img src="images/img_graph_1.svg" />
                        </Button>
                      </div>
                      <Button
                        size="9xl"
                        shape="round"
                        className="w-full sm:px-5"
                      >
                        Thêm vào giỏ hàng
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo tập gym thoáng mát Nike thấm hút mồ hôi
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-start gap-2.5">
                      <Text size="2xl" as="p" className="flex !font-jost">
                        <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
                          278.000
                        </span>
                        <a
                          href="#"
                          className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
                        >
                          đ
                        </a>
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30.png"
                        alt="imagethirty"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h6" className="w-full leading-[150%]">
                        Áo Hoodie Nike dành cho mùa đông lạnh
                      </Heading>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Heading size="3xl" as="h6" className="flex">
                          <span className="text-blue_gray-900_02">278.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30_230x230.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30_2.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30_2.png"
                        alt="imagethirty"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h6" className="w-full leading-[150%]">
                        Áo Hoodie Nike dành cho mùa đông lạnh
                      </Heading>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Heading size="3xl" as="h6" className="flex">
                          <span className="text-blue_gray-900_02">278.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30_2.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30_230x230.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                  <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                    <Img
                      src="images/img_image_30.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h6" className="w-full leading-[150%]">
                      Áo Hoodie Nike dành cho mùa đông lạnh
                    </Heading>
                    <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={10}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        3,014 đánh giá
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading size="3xl" as="h6" className="flex">
                        <span className="text-blue_gray-900_02">278.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="self-start capitalize !text-blue_gray-600 line-through"
                      >
                        328.000đ
                      </Text>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30_2.png"
                        alt="imagethirty"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h6" className="w-full leading-[150%]">
                        Áo Hoodie Nike dành cho mùa đông lạnh
                      </Heading>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Heading size="3xl" as="h6" className="flex">
                          <span className="text-blue_gray-900_02">278.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <SalesShopPagination className="mt-8 w-[42%] gap-[22px] md:w-full" />
            </div>
          </div>
        </div>
        <Footer1 className="justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
