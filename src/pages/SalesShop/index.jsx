import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  CheckBox,
  Input,
  Text,
  TextArea,
  RatingBar,
  Img,
  Heading,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import SalesShopPagination from "../../components/SalesShopPagination";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function SalesShopPage() {
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
            <div className="flex flex-col items-center gap-[15px] self-stretch">
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
                    <Text
                      size="s"
                      as="p"
                      className="ml-[5px] !font-jost sm:ml-0"
                    >
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
                <div className="h-px w-full self-stretch bg-gray-200_01" />
              </div>
              <div className="flex w-[75%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
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
                <ul className="flex flex-wrap gap-[15px]">
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
        <div className="container-md mt-[17px] flex flex-col md:p-5">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p">
              /
            </Text>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Text size="md" as="p" className="self-end">
                Danh sách cửa hàng
              </Text>
            </a>
            <Text size="md" as="p">
              /
            </Text>
            <Text size="md" as="p" className="self-start !text-blue_gray-600">
              Adidas store
            </Text>
          </div>
          <div className="relative mt-6 h-[400px] pr-[5px] md:h-auto">
            <Img
              src="images/img_young_man_weari.png"
              alt="youngmanweari"
              className="h-[400px] w-full rounded-md object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-between gap-5 rounded-md bg-blue_gray-900_66 py-[150px] pl-[60px] pr-[61px] md:p-5 sm:relative sm:flex-col">
              <div className="flex w-[24%] items-center justify-center gap-5 rounded-md sm:w-full">
                <div className="flex w-[35%] flex-col items-start rounded-[50px] bg-pink-500 pb-5 pl-5 pr-[9px]">
                  <Button
                    color="white_A700"
                    size="xs"
                    shape="circle"
                    className="w-[20px] self-end !rounded-[10px]"
                  >
                    <Img src="images/img_verify_1.svg" />
                  </Button>
                  <Img
                    src="images/img_image_98.png"
                    alt="imageninetyeigh"
                    className="h-[60px] w-[60px] rounded-[50%]"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-3.5 rounded-md">
                  <Heading
                    size="5xl"
                    as="h1"
                    className="uppercase !text-white-A700"
                  >
                    ADIDAS Store
                  </Heading>
                  <div className="flex items-start gap-[11px] self-stretch">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      size={10}
                      className="flex justify-between rounded-[5px]"
                    />
                    <Text size="xs" as="p" className="!text-white-A700">
                      965 lượt đánh giá
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                size="9xl"
                shape="round"
                className="min-w-[130px] sm:p-5 sm:px-5"
              >
                Theo dõi
              </Button>
            </div>
          </div>
          <div className="mt-[62px] flex flex-col gap-[61px] sm:gap-[30px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex w-[29%] flex-col items-start gap-1 md:w-full">
                <Text as="p" className="!font-jost !text-blue_gray-600">
                  <span className="font-bevietnampro text-blue_gray-900_02">
                    Sản phẩm
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; Về chúng tôi Chính sách Đánh giá
                  </span>
                </Text>
                <div className="h-[2px] w-[19%] bg-blue_gray-900_02" />
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
                  <Text size="7xl" as="p">
                    Sản phẩm bán chạy nhất
                  </Text>
                  <div className="flex w-[13%] items-center justify-between gap-5 sm:w-full">
                    <Img
                      src="images/img_arrow_down.svg"
                      alt="arrowdown"
                      className="h-[24px] w-[24px]"
                    />
                    <Img
                      src="images/img_settings.svg"
                      alt="settings"
                      className="h-[20px] w-[51%]"
                    />
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="arrowleft"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-5 justify-center gap-px self-stretch md:grid-cols-3 sm:grid-cols-1">
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30.png"
                          alt="thời_trang"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h2" className="w-full leading-[150%]">
                          Áo Hoodie Nike dành cho mùa đông lạnh
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Heading size="3xl" as="h3" className="flex">
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                    <div className="relative h-[280px] self-stretch bg-white-A700 pb-[19px] pl-3.5 pr-4 pt-5 md:h-auto">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_1.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
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
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h4" className="w-full leading-[150%]">
                          Áo tập gym thoáng mát Nike thấm hút mồ hôi
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h5" className="w-full leading-[150%]">
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_230x230.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Khoác gió chống nắng thời trang Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_3.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Áo khoác unisex màu trắng tập gym Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full items-center justify-center gap-[9px] rounded-[18px] bg-gray-100_02 px-[9px] pb-1.5 pt-[9px]">
                    <Img
                      src="images/img_sort_1_1.svg"
                      alt="sort1one"
                      className="h-[18px] w-[18px] self-start"
                    />
                    <Text size="lg" as="p" className="self-end !font-medium">
                      Bộ lọc
                    </Text>
                  </div>
                  <div className="flex w-full items-center justify-center gap-[9px] rounded-[18px] bg-gray-100_02 p-2">
                    <Text size="lg" as="p" className="!font-medium">
                      Giá
                    </Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="h-[5px]"
                    />
                  </div>
                  <div className="flex w-full items-start justify-center gap-[9px] rounded-[18px] bg-gray-100_02 px-2.5 pb-1.5 pt-2.5">
                    <Text size="lg" as="p" className="!font-medium">
                      Thương hiệu
                    </Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mt-[5px] h-[5px]"
                    />
                  </div>
                  <div className="flex w-full items-center justify-center gap-[9px] rounded-[18px] bg-gray-100_02 px-[7px] pb-[9px] pt-[7px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Màu sắc
                    </Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mb-[5px] h-[5px] self-end"
                    />
                  </div>
                  <Text size="lg" as="p" className="w-full !font-medium">
                    Mặc định
                  </Text>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector"
                    className="h-[5px] w-full"
                  />
                  <Text size="lg" as="p" className="w-full">
                    Lọc
                  </Text>
                  <Text size="lg" as="p" className="w-full underline">
                    Lưới
                  </Text>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Áo Hoodie Nike dành cho mùa đông lạnh
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_230x230.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Khoác gió chống nắng thời trang Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_230x230.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Khoác gió chống nắng thời trang Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] flex-col gap-2.5 md:w-full">
                        <div className="flex items-start gap-2.5">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between rounded-[5px]"
                          />
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            3,014 đánh giá
                          </Text>
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5 self-start">
                          <Heading size="3xl" as="h6" className="flex">
                            <span className="text-blue_gray-900_02">
                              278.000
                            </span>
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
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_3.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Áo khoác unisex màu trắng tập gym Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Áo Hoodie Nike dành cho mùa đông lạnh
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_230x230.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Khoác gió chống nắng thời trang Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_230x230.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Khoác gió chống nắng thời trang Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Img
                          src="images/img_image_30_3.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Heading as="h6" className="w-full leading-[150%]">
                          Áo khoác unisex màu trắng tập gym Adidas
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between rounded-[5px]"
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
                </div>
                <SalesShopPagination className="w-[35%] gap-[22px] md:w-full" />
              </div>
            </div>
            <div className="flex w-[66%] flex-col gap-[30px] md:w-full">
              <div className="flex w-[65%] flex-col items-start md:w-full">
                <Text
                  size="5xl"
                  as="p"
                  className="relative z-[1] !font-jost !text-blue_gray-600"
                >
                  <span className="font-bevietnampro text-blue_gray-600">
                    Sản phẩm
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-900_02">
                    Về chúng tôi&nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; Chính sách Đánh giá
                  </span>
                </Text>
                <Img
                  src="images/img_rectangle_264.svg"
                  alt="image"
                  className="ml-[153px] h-[2px] w-[32%] md:ml-0"
                />
              </div>
              <div className="flex flex-col items-start gap-[23px]">
                <Text size="3xl" as="p">
                  Điều gì tạo nên sự khác biệt của chúng tôi?
                </Text>
                <Text as="p" className="w-full !font-normal leading-7">
                  <>
                    Khởi đầu hành trình vào năm 2013, LIBÉ lấy cảm hứng sáng tạo
                    từ nhu cầu sở hữu một tủ đồ đơn giản nhưng vẫn hiện đại của
                    các cô gái. Đó là lí do vì sao ở LIBÉ, bạn luôn có thể dễ
                    dàng chọn cho mình một bộ trang phục đẹp - dù là để đến công
                    sở hay đi cà phê dạo phố cùng bạn bè. <br /> Đối với chúng
                    mình, từng sản phẩm gửi đến khách hàng đều mang theo sự chân
                    thật, cảm hứng tươi vui.
                  </>
                </Text>
                <div className="flex w-[94%] md:w-full">
                  <div className="flex w-full items-center gap-2.5 md:flex-col">
                    <div className="flex w-[7px] flex-col gap-[33px]">
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                    </div>
                    <Text as="p" className="w-full !font-normal leading-10">
                      <>
                        Bên cạnh sự trưởng thành của thương hiệu, LIBÉ Community
                        cũng dần được hình thành. <br /> được chăm chút tỉ mỉ
                        bằng cả tấm lòng đúng như những giá trị mà LIBÉ cam kết.
                        <br /> Việc chọn mua một bộ cánh từ LIBÉ đã trở nên
                        nhanh chóng và dễ dàng hơn bao giờ hết. <br /> Rất vui
                        vì bạn đã ở đây! Hãy cùng LIBÉ mang lại một làn gió mới
                        cho tủ quần áo của mình nhé!
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[26px]">
              <div className="flex w-[29%] flex-col items-end self-start md:w-full">
                <Text as="p" className="!font-jost !text-blue_gray-600">
                  <span className="font-bevietnampro text-blue_gray-600">
                    Sản phẩm
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    Về chúng tôi
                  </span>
                  <span className="font-bevietnampro text-blue_gray-900_02">
                    &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; Chính sách &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-900">
                    Đánh giá
                  </span>
                </Text>
                <Img
                  src="images/img_rectangle_264.svg"
                  alt="image"
                  className="h-[2px] w-[17%]"
                />
              </div>
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[29%] flex-col items-start gap-[27px] md:w-full">
                  <div className="flex w-[58%] items-center gap-[22px] md:w-full">
                    <Text size="8xl" as="p" className="!font-jost">
                      4.9
                    </Text>
                    <div className="flex flex-1 flex-col items-start gap-[13px]">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={17}
                        className="flex justify-between self-stretch rounded-[5px]"
                      />
                      <Text size="lg" as="p">
                        2 đánh giá
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] self-stretch">
                    <div className="flex items-center gap-[21px] sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        5 sao
                      </Text>
                      <div className="mt-2 h-[6px] w-[78%] self-start" />
                      <Text as="p" className="!font-jost !font-normal">
                        89%
                      </Text>
                    </div>
                    <div className="flex items-center sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        4 sao
                      </Text>
                      <div className="ml-5 mt-2 h-[6px] flex-1 self-start sm:ml-0 sm:self-stretch" />
                      <Text
                        as="p"
                        className="ml-7 !font-jost !font-normal sm:ml-0"
                      >
                        4%
                      </Text>
                    </div>
                    <div className="flex items-center sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        3 sao
                      </Text>
                      <div className="ml-[21px] mt-2 h-[6px] flex-1 self-start sm:ml-0 sm:self-stretch" />
                      <Text
                        as="p"
                        className="ml-[29px] !font-jost !font-normal sm:ml-0"
                      >
                        3%
                      </Text>
                    </div>
                    <div className="flex items-center sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        2 sao
                      </Text>
                      <div className="ml-[21px] mt-2 h-[6px] flex-1 self-start sm:ml-0 sm:self-stretch" />
                      <Text
                        as="p"
                        className="ml-[30px] !font-jost !font-normal sm:ml-0"
                      >
                        1%
                      </Text>
                    </div>
                    <div className="flex items-center gap-[23px] sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        1 sao
                      </Text>
                      <div className="mt-2 h-[6px] flex-1 self-start sm:self-stretch" />
                      <Text as="p" className="!font-jost !font-normal">
                        4%
                      </Text>
                    </div>
                  </div>
                  <Button
                    size="9xl"
                    variant="outline"
                    shape="round"
                    className="min-w-[169px] font-medium sm:px-5"
                  >
                    Viết đánh giá
                  </Button>
                </div>
                <div className="mt-2 flex w-[66%] flex-col items-start gap-[34px] md:w-full">
                  <Text size="2xl" as="p">
                    39 Đánh Giá Cho Sản Phẩm
                  </Text>
                  <div className="flex flex-col gap-[30px] self-stretch">
                    <div className="flex flex-1 flex-col gap-5">
                      <div className="flex w-[40%] items-center justify-between gap-5 md:w-full">
                        <div className="relative h-[71px] w-[20%]">
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center rounded-[35px] bg-gray-100_02 pb-[22px] pl-[23px] pr-[22px] pt-[23px] sm:p-5">
                            <Text
                              as="p"
                              className="h-[24px] w-[25px] !font-jost"
                            >
                              A.T
                            </Text>
                          </div>
                          <Button
                            color="white_A700"
                            size="xs"
                            shape="circle"
                            className="absolute right-[0.00px] top-[0.00px] m-auto w-[20px] !rounded-[10px]"
                          >
                            <Img src="images/img_verify_1.svg" />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                          <div className="flex flex-wrap items-center">
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="sản_phẩm_tuyệt"
                              className="h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="sản_phẩm_tuyệt"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="sản_phẩm_tuyệt"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="sản_phẩm_tuyệt"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="sản_phẩm_tuyệt"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Text as="p" className="ml-2.5">
                              Sản phẩm tuyệt vời
                            </Text>
                          </div>
                          <Text as="p" className="!font-normal">
                            Đánh giá bởi Ali Tufan - 27.04.2022
                          </Text>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="!font-normal leading-7 !text-blue_gray-600"
                      >
                        <>
                          Đây là một bước tiến lớn bất thường so với các mẫu máy
                          trước đó, đặc biệt là về sức mạnh tính toán thô cũng
                          như những điều thú vị như hỗ trợ màn hình và tai nghe.
                          <br /> <br /> Danh sách Amazon này có hai bộ xử lý
                          khác nhau, M1 Pro (được liệt kê là &quot;kiểu GPU 16
                          lõi&quot;) và M1 Max (GPU 32 lõi). Tôi sẽ gọi một
                          người là Pro, người còn lại là Max. Tôi đã mua phiên
                          bản Pro cơ bản, nhưng phần lớn những gì tôi sẽ nói đều
                          áp dụng cho cả hai phiên bản này và tôi cũng sẽ có một
                          số nhận xét cụ thể về phiên bản Max.
                        </>
                      </Text>
                      <div className="flex w-[45%] md:w-full">
                        <div className="flex w-full flex-col gap-5">
                          <div className="flex gap-5 sm:flex-col">
                            <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                            <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                            <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                            <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                          </div>
                          <div className="flex items-center gap-3.5">
                            <Button
                              color="gray_200_01"
                              size="6xl"
                              variant="outline"
                              shape="round"
                              className="min-w-[105px] font-medium sm:px-5"
                            >
                              Hữu ích
                            </Button>
                            <Text
                              size="lg"
                              as="p"
                              className="mb-[9px] self-end !font-medium !text-blue_gray-600"
                            >
                              Báo cáo lạm dụng
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-5">
                      <div className="flex w-[40%] items-center gap-[19px] md:w-full">
                        <div className="relative h-[71px] w-[20%]">
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center rounded-[35px] bg-gray-100_02 pb-[22px] pl-[23px] pr-[22px] pt-[23px] sm:p-5">
                            <Text
                              as="p"
                              className="h-[24px] w-[25px] !font-jost"
                            >
                              A.T
                            </Text>
                          </div>
                          <Button
                            color="white_A700"
                            size="xs"
                            shape="circle"
                            className="absolute right-[0.00px] top-[0.00px] m-auto w-[20px] !rounded-[10px]"
                          >
                            <Img src="images/img_verify_1.svg" />
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-col items-start gap-3">
                          <div className="flex w-[83%] items-center gap-2.5 md:w-full">
                            <RatingBar
                              value={1}
                              isEditable={true}
                              size={10}
                              className="flex justify-between rounded-[5px]"
                            />
                            <Text as="p">Sản phẩm tuyệt vời</Text>
                          </div>
                          <Text as="p" className="!font-normal">
                            Đánh giá bởi Ali Tufan - 27.04.2022
                          </Text>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="!font-normal leading-7 !text-blue_gray-600"
                      >
                        <>
                          Đây là một bước tiến lớn bất thường so với các mẫu máy
                          trước đó, đặc biệt là về sức mạnh tính toán thô cũng
                          như những điều thú vị như hỗ trợ màn hình và tai nghe.
                          <br /> <br /> Danh sách Amazon này có hai bộ xử lý
                          khác nhau, M1 Pro (được liệt kê là &quot;kiểu GPU 16
                          lõi&quot;) và M1 Max (GPU 32 lõi). Tôi sẽ gọi một
                          người là Pro, người còn lại là Max. Tôi đã mua phiên
                          bản Pro cơ bản, nhưng phần lớn những gì tôi sẽ nói đều
                          áp dụng cho cả hai phiên bản này và tôi cũng sẽ có một
                          số nhận xét cụ thể về phiên bản Max.
                        </>
                      </Text>
                      <div className="flex w-[45%] gap-5 md:w-full sm:flex-col">
                        <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                        <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                        <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                        <div className="h-[90px] w-full rounded-md bg-green-A700_02" />
                      </div>
                      <div className="flex items-center gap-3.5">
                        <Button
                          color="gray_200_01"
                          size="6xl"
                          variant="outline"
                          shape="round"
                          className="min-w-[105px] font-medium sm:px-5"
                        >
                          Hữu ích
                        </Button>
                        <Text
                          size="lg"
                          as="p"
                          className="mb-[9px] self-end !font-medium !text-blue_gray-600"
                        >
                          Báo cáo lạm dụng
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-[66%] bg-gray-200_01" />
              <div className="flex w-[66%] flex-col items-center gap-[31px] md:w-full">
                <Button
                  size="9xl"
                  variant="outline"
                  shape="round"
                  className="min-w-[156px] font-medium sm:px-5"
                >
                  Xem Tất Cả
                </Button>
                <div className="flex flex-col items-start gap-[26px] self-stretch">
                  <Text size="2xl" as="p">
                    Viết đánh giá
                  </Text>
                  <div className="flex flex-col items-start gap-[23px] self-stretch">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Địa chỉ email của bạn sẽ không được công bố. Các trường
                      bắt buộc được đánh dấu *
                    </Text>
                    <div className="flex w-[26%] flex-col items-start gap-2.5 md:w-full">
                      <Text as="p">Đánh giá của bạn về sản phẩm</Text>
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={14}
                        className="flex justify-between rounded-[5px]"
                      />
                    </div>
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex flex-col items-start gap-[7px] pt-[5px]">
                        <Text as="p">Bình luận</Text>
                        <TextArea
                          shape="round"
                          name="group4107"
                          placeholder={`Viết bình luận của bạn ở đây`}
                          className="self-stretch !border-gray-200_01 text-blue_gray-900_02 sm:py-5 sm:pr-5"
                        />
                      </div>
                      <div className="flex gap-7 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-2">
                          <Text as="p">Tên</Text>
                          <Input
                            shape="round"
                            name="your_name"
                            placeholder={`Ali Tufan`}
                            className="self-stretch border border-solid border-green-A700_02 !text-blue_gray-900_02 shadow-md sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                          <Text as="p">Email</Text>
                          <Input
                            shape="round"
                            type="email"
                            name="email"
                            placeholder={`Email của bạn`}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[73%] flex-col items-start gap-[23px] md:w-full">
                      <CheckBox
                        name="lưutênemailvàtr"
                        label="Lưu tên, email và trang web của tôi trong trình duyệt này cho lần đánh giá tiếp theo."
                        id="lutnemailvtr"
                        className="gap-2.5 self-stretch text-base text-blue_gray-900_02"
                      />
                      <Button
                        size="9xl"
                        shape="round"
                        className="min-w-[135px] border border-solid border-green-A700_02 font-medium !text-gray-100_02 shadow-sm sm:px-5"
                      >
                        Hoàn tất
                      </Button>
                    </div>
                  </div>d
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-20 justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
