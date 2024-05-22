import Footer1 from "../../components/Footer1";
import {
  Button,
  TextArea,
  Heading,
  Input,
  Img,
  Text,
  GoogleMap,
} from "../../components";
import ContactOne from "../../components/ContactOne";
import React from "react";
import { Helmet } from "react-helmet";
import MegaMenu1 from "../../components/MegaMenu1";
export default function ContactPage() {
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
      <div className="w-full bg-white-A700">
        <header className="relative bg-white-A700 pt-[11px]">
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
                <div className="flex items-center gap-[23px] sm:flex-col">
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
                  <div className="flex items-center">
                    <div className="h-[21px] w-px bg-gray-200_01" />
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="s" as="p" className="ml-4 self-end">
                        Trợ giúp
                      </Text>
                    </a>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="h-[5px]"
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
                  <div className="w-full sm:w-full">
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
            <div className="container-md md:p-5">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[73%] items-center justify-between gap-5 md:w-full md:flex-col">
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
                        <Img
                          src="images/img_vector_blue_gray_900_02.svg"
                          alt="vector_eleven"
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
                          alt="vector_thirteen"
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
                          alt="vector_fifteen"
                          className="h-[5px] w-[8px]"
                        />
                      </div>
                      {menuOpen3 ? <MegaMenu1 /> : null}
                    </li>
                  </ul>
                </div>
                <Text as="p">Ưu</Text>
              </div>
            </div>
          </div>
        </header>
        <div className="mt-[18px] flex flex-col items-center">
          <div className="container-md flex flex-col items-center md:p-5">
            <div className="flex flex-wrap gap-[7px] self-start">
              <Text size="md" as="p">
                Trang chủ
              </Text>
              <Text size="md" as="p" className="self-start">
                /
              </Text>
              <Text size="md" as="p" className="!text-blue_gray-600">
                Liên hệ
              </Text>
            </div>
          </div>
          <GoogleMap
            showMarker={false}
            className="mt-[18px] h-[600px] self-stretch"
          />
          <div className="container-md mt-[74px] flex flex-col gap-[55px] md:p-5 sm:gap-[27px]">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[32%] flex-col gap-[62px] md:w-full sm:gap-[31px]">
                <div className="flex flex-col gap-1.5">
                  <Heading
                    size="5xl"
                    as="h1"
                    className="w-[59%] uppercase leading-[150%] md:w-full"
                  >
                    Liên hệ với chúng tôi ngay hôm nay
                  </Heading>
                  <Text as="p" className="!font-jost !font-normal leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam purus sit amet luctus venenatis lectus.
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-7">
                  <div className="flex flex-col items-end">
                    <div className="flex items-start gap-[25px] self-start">
                      <Img
                        src="images/img_phone_call_1.svg"
                        alt="phonecallone"
                        className="h-[30px] w-[30px]"
                      />
                      <Heading as="h2">Điện thoại Hotline</Heading>
                    </div>
                    <Text as="p" className="!font-normal">
                      +(1) 123 456 7890
                    </Text>
                  </div>
                  <div className="flex items-start gap-[25px]">
                    <Img
                      src="images/img_email_1.svg"
                      alt="emailone"
                      className="h-[30px] w-[30px]"
                    />
                    <div className="flex flex-col gap-[9px]">
                      <Heading as="h3">Bạn cần trợ giúp?</Heading>
                      <Text size="lg" as="p" className="!font-jost">
                        support@ezshop.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text size="2xl" as="p" className="!font-jost">
                      Follow us
                    </Text>
                    <div className="flex gap-[19px]">
                      <Img
                        src="images/img_facebook.svg"
                        alt="close"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_eleven"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_thirteen"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_fifteen"
                        className="h-[17px] self-start"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[49%] flex-col items-start gap-[25px] md:w-full">
                <div className="flex gap-7 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <Heading as="h4">Tên</Heading>
                    <Input
                      shape="round"
                      name="your_name"
                      placeholder={`Ali Tufan`}
                      className="self-stretch border border-solid border-blue_gray-900_02 !text-blue_gray-900_02 shadow-md sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <Heading as="h5">Email</Heading>
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Nhập Email`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[11px] self-stretch">
                  <Heading as="h6">Tiêu đề</Heading>
                  <Input
                    shape="round"
                    name="your_name_one"
                    placeholder={`Ali Tufan`}
                    className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-[9px] self-stretch">
                  <Heading as="h6">Nội dung</Heading>
                  <TextArea
                    shape="round"
                    name="group4013"
                    placeholder={`Nhập nội dung`}
                    className="self-stretch !border-gray-200_01 text-blue_gray-600 sm:py-5 sm:pr-5"
                  />
                </div>
                <Button
                  size="10xl"
                  shape="round"
                  className="min-w-[166px] border border-solid border-green-A700_02 font-semibold shadow-sm sm:px-5"
                >
                  Gửi tin nhắn
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[60px] sm:gap-[30px]">
              <div className="h-px bg-gray-200_01" />
              <div className="flex gap-[126px] md:flex-col">
                {[...Array(4)].map((d, index) => (
                  <ContactOne key={"items" + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[62px] flex-col border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
