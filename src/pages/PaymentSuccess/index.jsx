import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, SelectBox } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function PaymentSuccessPage() {
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
        <header className="relative self-stretch bg-white-A700 pt-[11px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-[9px] self-stretch">
              <div className="container-md flex items-center justify-between gap-5 pr-1 md:flex-col md:p-5">
                <div className="flex items-center self-start sm:flex-col">
                  <a href="#">
                    <Img
                      src="images/img_pin_1.svg"
                      alt="pinone"
                      className="h-[16px] w-[16px] sm:w-full"
                    />
                  </a>
                  <div className="ml-[5px] flex items-center gap-[5px] sm:ml-0">
                    <Text size="s" as="p" className="self-end">
                      118 Cách Mạng Tháng 8
                    </Text>
                    <div className="h-full w-px bg-gray-200_01" />
                  </div>
                  <a href="#">
                    <Img
                      src="images/img_phone_1.svg"
                      alt="phoneone"
                      className="ml-[19px] h-[16px] w-[16px] self-end sm:ml-0 sm:w-full"
                    />
                  </a>
                  <Text
                    size="s"
                    as="p"
                    className="ml-[5px] self-end !font-jost sm:ml-0"
                  >
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
                  <a href="#">
                    <Img
                      src="images/img_search_1.svg"
                      alt="searchone"
                      className="h-[20px] w-[20px]"
                    />
                  </a>
                </div>
                <div className="flex w-[43%] items-end justify-center gap-[17px] md:w-full sm:flex-col">
                  <div className="flex flex-1 items-start justify-center gap-[15px] sm:self-stretch">
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
                  <a href="#">
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
            <div className="container-md md:p-5">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[65%] items-center justify-between gap-5 md:w-full md:flex-col">
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
                        <Text as="p">Liên hệ</Text>
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
                        <Text as="p">Bài viết</Text>
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
                <ul className="flex flex-wrap gap-5">
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
            </div>
          </div>
        </header>
        <div className="container-md mt-[19px] md:p-5">
          <div className="flex flex-col items-start gap-3">
            <Text size="md" as="p" className="!font-jost">
              <span className="font-bevietnampro text-blue_gray-900_02">
                Trang chủ / Áo thun / Áo nam / &nbsp;
              </span>
              <span className="font-bevietnampro text-blue_gray-600">
                Thanh toán
              </span>
            </Text>
            <div className="flex w-[80%] flex-col items-center gap-[46px] self-end md:w-full">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center rounded-[40px] bg-green-A700_02 px-6 pb-5 pt-6 sm:px-5 sm:pt-5">
                  <Img
                    src="images/img_checkmark_gray_100_01.svg"
                    alt="checkmark"
                    className="h-[35px]"
                  />
                </div>
                <Heading size="5xl" as="h1" className="mt-1 uppercase">
                  Đơn hàng của bạn đã hoàn tất!
                </Heading>
                <Text size="md" as="p" className="mt-4 !text-blue_gray-600">
                  Cảm ơn. Đơn đặt hàng của bạn đã được nhận.
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] self-stretch">
                <div className="flex justify-center rounded-md border border-dashed border-blue_gray-600 bg-white-A700 px-[37px] pb-[46px] pt-[37px] md:pb-5 sm:p-5">
                  <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:flex-col">
                    <div className="flex w-[42%] flex-col gap-[9px] md:w-full">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Mã đơn hàng
                        </Text>
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Ngày đặt hàng
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading
                          size="lg"
                          as="h2"
                          className="self-start !font-semibold capitalize"
                        >
                          039422
                        </Heading>
                        <Heading
                          size="lg"
                          as="h3"
                          className="!font-semibold capitalize"
                        >
                          27/04/2024
                        </Heading>
                      </div>
                    </div>
                    <div className="flex w-[47%] items-center justify-between gap-5 md:w-full">
                      <div className="flex flex-col items-start gap-3">
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Tổng đơn hàng
                        </Text>
                        <Heading
                          size="lg"
                          as="h4"
                          className="flex !font-semibold capitalize"
                        >
                          <span className="text-blue_gray-900_02">300.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Phương thức thanh toán
                        </Text>
                        <Heading
                          size="lg"
                          as="h5"
                          className="!font-semibold capitalize"
                        >
                          Chuyển khoản trực tiếp
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[26px] rounded-md border border-solid border-gray-200_01 bg-white-A700 px-[52px] py-9 md:px-5 sm:p-5">
                  <Heading size="5xl" as="h6" className="uppercase">
                    Chi tiết đơn hàng
                  </Heading>
                  <div className="self-stretch">
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p">Sản phẩm</Text>
                        <Text as="p">Tổng thanh toán</Text>
                      </div>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="mt-2.5 flex flex-col gap-3.5">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text size="lg" as="p" className="self-start">
                          Áo thun Nam màu trơn
                        </Text>
                        <Text size="lg" as="p" className="flex self-end">
                          <span className="text-blue_gray-900_02">150.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text size="lg" as="p" className="self-start">
                          Áo thun Nam màu trơn
                        </Text>
                        <Text size="lg" as="p" className="flex self-end">
                          <span className="text-blue_gray-900_02">150.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Text>
                      </div>
                    </div>
                    <div className="mt-[9px] flex flex-col gap-4">
                      <div className="h-px bg-gray-200_01" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="self-start">
                          Tổng đơn hàng
                        </Text>
                        <Text as="p" className="flex self-end">
                          <span className="text-blue_gray-900_02">300.000</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Text>
                      </div>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
                      <Text as="p">Tổng phí vận chuyển</Text>
                      <Text size="lg" as="p">
                        Miễn phí vận chuyển
                      </Text>
                    </div>
                    <div className="mt-[17px] flex flex-col gap-[17px]">
                      <div className="h-px bg-gray-200_01" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p">VAT</Text>
                        <Text as="p" className="flex h-[21px] w-[22px]">
                          <span className="text-blue_gray-900_02">0</span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Text>
                      </div>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="mt-4 flex flex-wrap justify-between gap-5">
                      <Text as="p">Hình thức thanh toán</Text>
                      <Text as="p">Chuyển khoản trực tiếp</Text>
                    </div>
                    <div className="mt-[17px] flex flex-col gap-4">
                      <div className="h-px bg-gray-200_01" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="self-start">
                          Tổng cộng
                        </Text>
                        <Text as="p" className="flex">
                          <span className="text-blue_gray-900_02">300.000</span>
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
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[100px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
