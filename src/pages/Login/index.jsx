import React from "react";
import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  Button,
  CheckBox,
  Input,
  Heading,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[71px] bg-white-A700 md:gap-[53px] sm:gap-[35px]">
        <header className="flex flex-col items-center self-stretch bg-white-A700 pt-[11px]">
          <div className="flex flex-col items-center gap-[9px] self-stretch">
            <div className="container-md flex items-center justify-between gap-5 md:flex-col md:p-5">
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
                  <div className="flex gap-4 self-end">
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
                    <div className="flex items-center gap-[18px]">
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
              <div className="flex flex-1 items-center gap-5 rounded-md border border-solid border-green-A700_02 p-[11px] md:flex-col md:self-stretch">
                <div className="flex w-[21%] items-end justify-between gap-5 md:w-full">
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
                <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
                  <Text
                    size="md"
                    as="p"
                    className="self-start !text-blue_gray-600"
                  >
                    Tìm kiếm
                  </Text>
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
          </div>
          <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
          <div className="container-md flex items-center justify-between gap-5 pr-[122px] md:flex-col md:p-5 md:pr-5">
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
              <div className="flex flex-wrap items-end sm:flex-col">
                <Text as="p">Trang chủ</Text>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Text as="p" className="ml-[38px] sm:ml-0">
                    Sản phẩm
                  </Text>
                </a>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Text as="p" className="ml-[39px] sm:ml-0">
                    Liên hệ
                  </Text>
                </a>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector_eleven"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Text as="p" className="ml-10 sm:ml-0">
                    Bài viết
                  </Text>
                </a>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector_thirteen"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
              </div>
            </div>
            <ul className="flex flex-wrap gap-[18px]">
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
        </header>
        <div className="container-md pl-[479px] pr-[480px] md:p-5 md:px-5">
          <div className="flex flex-col items-start gap-[22px] rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[47px] pl-[41px] pr-10 pt-10 shadow-xs md:pb-5 md:pl-5 sm:p-5">
            <Heading size="8xl" as="h1" className=" uppercase ">
              Đăng nhập
            </Heading>
            <div className="flex flex-col items-center self-stretch">
              <div className="flex flex-col gap-[22px] self-stretch">
                <div className="flex flex-col items-start gap-[11px]">
                  <Heading as="h2">Tài khoản</Heading>
                  <Input
                    shape="round"
                    name="your_name"
                    placeholder={`Ali Tufan`}
                    className="self-stretch border border-solid border-blue_gray-900_02 !text-blue_gray-900_02 shadow-md sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  <Heading as="h3">Mật khẩu</Heading>
                  <Input
                    shape="round"
                    type="password"
                    name="your_name_one"
                    placeholder={`Mật khẩu của bạn`}
                    className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <CheckBox
                    name="nhớmậtkhẩu"
                    label="Nhớ mật khẩu"
                    id="nhmtkhu"
                    className="gap-2.5 text-sm text-blue_gray-900_02"
                  />
                  <Text size="md" as="p" className="!text-blue_gray-600">
                    Quên mật khẩu?
                  </Text>
                </div>
                <Button
                  size="10xl"
                  shape="round"
                  className="w-full border border-solid border-green-A700_02 font-semibold shadow-sm sm:px-5"
                >
                  Đăng nhập
                </Button>
              </div>
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                <Text size="md" as="p" className="mt-5">
                  <span className="text-blue_gray-900_02">
                    Bạn chưa có tài khoản?&nbsp;
                  </span>
                  <span className="text-green-A700_02">Đăng ký</span>
                </Text>
              </a>
              <div className="mt-[27px] flex w-[13%] items-start md:w-full">
                <div className="h-[40px] w-[40px] rounded-[20px] bg-white-A700" />
                <Text size="md" as="p" className="relative ml-[-26px] mt-[9px]">
                  hoặc
                </Text>
              </div>
              <div className="mt-[15px] flex gap-4 self-stretch">
                <div className="flex w-full justify-center rounded-lg border border-solid border-blue-700_01 bg-white-A700 px-[13px] pb-3.5 pt-[13px]">
                  <Img
                    src="images/img_facebook_blue_700_01.svg"
                    alt="facebook"
                    className="h-[17px]"
                  />
                </div>
                <div className="flex w-full justify-center rounded-lg border border-solid border-red-700 bg-white-A700 px-3.5 pb-[13px] pt-3.5">
                  <Img
                    src="images/img_contrast.svg"
                    alt="contrast"
                    className="h-[17px]"
                  />
                </div>
                <div className="flex w-full justify-center rounded-lg border border-solid border-blue-600 bg-white-A700 px-[13px] pb-3 pt-[13px]">
                  <Img
                    src="images/img_trash.svg"
                    alt="trash"
                    className="h-[19px]"
                  />
                </div>
                <div className="flex w-full justify-center rounded-lg border border-solid border-blue_gray-900_02 bg-white-A700 px-[11px] pb-3 pt-[11px]">
                  <Img
                    src="images/img_facebook.svg"
                    alt="close"
                    className="h-[21px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
