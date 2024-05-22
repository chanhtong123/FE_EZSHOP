import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, SelectBox, Heading, Button } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import SalesShopPagination from "../../components/SalesShopPagination";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function BlogPage() {
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
                <div className="flex items-center gap-4">
                  <div className="h-[21px] w-px bg-gray-200_01" />
                  <div className="flex items-start">
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="s" as="p">
                        Trợ giúp
                      </Text>
                    </a>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mt-1 h-[5px]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center gap-4 sm:self-stretch">
                  <div className="h-[21px] w-px bg-gray-200_01" />
                  <SelectBox
                    size="xs"
                    shape="square"
                    name="tmcahng_one"
                    options={dropDownOptions}
                    className="flex-grow self-end"
                  />
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
          <div className="container-md flex items-center justify-between gap-5 pr-[5px] md:flex-col md:p-5">
            <div className="flex w-[53%] items-center justify-between gap-5 md:w-full md:flex-col">
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
                      alt="vector_eleven"
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
                      alt="vector_thirteen"
                      className="h-[5px] w-[8px]"
                    />
                  </div>
                  {menuOpen3 ? <MegaMenu1 /> : null}
                </li>
              </ul>
            </div>
            <Text as="p">
              Ưu đãi trong ngày Ưu đãi hấp dẫn Bán chạy nhất Hàng mới về
            </Text>
          </div>
        </header>
        <div className="container-md mt-[19px] flex flex-col gap-[11px] md:p-5">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <Text size="md" as="p" className="self-start !text-blue_gray-600">
              Bài viết
            </Text>
          </div>
          <div className="flex flex-col items-center gap-[66px] sm:gap-[33px]">
            <Text size="7xl" as="p">
              Bài viết
            </Text>
            <div className="flex flex-col items-center gap-[63px] self-stretch sm:gap-[31px]">
              <div className="grid grid-cols-3 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col gap-6">
                    <div className="relative h-[300px] md:h-auto">
                      <Img
                        src="images/img_cute_girl_works.png"
                        alt="mẹo_thủ_thuật"
                        className="h-[300px] w-full rounded-md object-cover"
                      />
                      <Img
                        src="images/img_image_123.png"
                        alt="mẹo_thủ_thuật"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] w-full rounded-md object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                      <Text as="p" className="!font-normal !text-blue_gray-600">
                        Mẹo & Thủ thuật
                      </Text>
                      <Text size="3xl" as="p">
                        Cách định giá và thanh lý đồ cũ nhanh nhất
                      </Text>
                      <Text as="p" className="!font-normal !text-blue_gray-600">
                        10 - 6 - 2023
                      </Text>
                    </div>
                  </div>
                </a>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_300x448.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        10 cửa hàng uy tín nhất năm - EZSHOP
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_1.png"
                      alt="cutegirlworks"
                      className="h-[300px] rounded-md object-cover"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Làm thế nào mua đồ trên EZSHOP hiệu quả?
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_2.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Hãy là người tiêu dùng thông minh!
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_3.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Mẹo tái chế quần áo cực chất
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      11 - 10 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_4.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        5 cách kiểm tra thật - giả khi mua đồ cũ
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_296x448.png"
                      alt="cutegirlworks"
                      className="h-[296px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Thử nhuộm áo tại nhà
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_5.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Mẹo vặt cuộc sống bạn cần biết
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_6.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Hãy là người tiêu dùng thông minh!
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      31 - 10 - 2019
                    </Text>
                  </div>
                </div>
              </div>
              <SalesShopPagination
                text120of300="1 – 20 trên 90 tìm kiếm"
                className="w-[35%] gap-5 md:w-full"
              />
            </div>
          </div>
        </div>
        <Footer1 className="mt-[77px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
