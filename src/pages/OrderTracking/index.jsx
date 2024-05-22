import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img, SelectBox } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function OrderTrackingPage() {
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
                <div className="flex items-center gap-4">
                  <div className="h-[21px] w-px bg-gray-200_01" />
                  <div className="flex items-start">
                    <Text size="s" as="p">
                      Trợ giúp
                    </Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mt-1 h-[5px]"
                    />
                  </div>
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
          <div className="container-md flex items-center justify-between gap-5 pr-[255px] md:flex-col md:p-5 md:pr-5">
            <div className="flex w-[65%] items-center justify-between gap-5 md:w-full md:flex-col">
              <SelectBox
                color="green_A700_02"
                size="2xl"
                shape="square"
                indicator={
                  <Img
                    src="images/img_vector_white_a700.svg"
                    alt="vector"
                    className="h-[5px] w-[8px]"
                  />
                }
                name="danhmc_one"
                placeholder={`Danh mục`}
                options={dropDownOptions}
                className="w-[38%] font-semibold md:w-full sm:px-5"
              />
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
            </div>
            <ul className="flex flex-wrap gap-[17px]">
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
            </ul>
          </div>
        </header>
        <div className="mt-[19px] flex w-[73%] flex-col items-start gap-[31px] md:w-full md:p-5">
          <Text size="md" as="p" className="!font-jost">
            <span className="font-bevietnampro text-blue_gray-900_02">
              Trang chủ / Áo thun / Áo nam / &nbsp;
            </span>
            <span className="font-bevietnampro text-blue_gray-600">
              Thanh toán
            </span>
          </Text>
          <div className="container-xs flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[49%] justify-center rounded-md bg-deep_orange-100 pt-[91px] md:w-full md:pt-5">
              <Img
                src="images/img_online_delivery.png"
                alt="onlinedelivery"
                className="h-[559px] w-full rounded-md object-cover md:h-auto"
              />
            </div>
            <div className="flex w-[41%] flex-col gap-12 md:w-full">
              <div className="flex flex-col items-start gap-[18px]">
                <Heading size="8xl" as="h1" className="uppercase">
                  THEO DÕI ĐƠN HÀNG
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="w-full leading-[150%] !text-blue_gray-600"
                >
                  Để theo dõi đơn hàng của bạn, vui lòng nhập Mã đơn hàng của
                  bạn vào ô bên dưới và nhấn nút &quot;Theo dõi&quot;. Điều này
                  đã được trao cho bạn trên biên nhận của bạn và trong email xác
                  nhận mà lẽ ra bạn phải nhận được.
                </Text>
              </div>
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col items-start gap-[7px] self-stretch pt-1">
                  <Text as="p">Mã đơn hàng</Text>
                  <Input
                    size="2xl"
                    shape="round"
                    name="edittext"
                    className="self-stretch border border-solid border-green-A700_02 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <Text as="p">Email thanh toán</Text>
                  <Input
                    size="2xl"
                    shape="round"
                    name="email"
                    className="self-stretch border border-solid border-green-A700_02 sm:pr-5"
                  />
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <Button
                    size="10xl"
                    shape="round"
                    className="min-w-[136px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                  >
                    Kiểm tra
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[100px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
