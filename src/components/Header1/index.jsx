import React from "react";
import { Text, Img, Heading, Button, SelectBox } from "./..";

const dropDownOptions = [{ label: "Điều khoản sử dụng", value: "option1" }];
export default function Header1({ ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginClick = () => {
    window.location.href = "/login";
  };

  return (
    <header
      {...props}
      className={`${props.className} self-stretch pt-[11px] bg-white-A700 relative`}
    >
      <div className="flex w-full flex-col items-center">
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
                  51a Làng Tăng Phú, Tăng Nhơn Phú A, TP Thủ Đức
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
                  +84 334989612
                </span>
              </Text>
            </div>
            <div className="flex w-[30%] justify-between">
              <div className="flex sm:w-full items-center gap-2 bg-white"></div>

              <div className="flex items-ends gap-2.5">
                <div className="h-full w-px bg-gray-200_01" />
                <SelectBox
                  variant="fill"
                  color="white_A700"
                  shape="square"
                  indicator={
                    <Img
                      src="images/img_vector.svg"
                      alt="vector"
                      className="h-[5px] w-[8px]"
                    />
                  }
                  name="trgip"
                  placeholder="Trợ giúp"
                  options={dropDownOptions}
                  className="w-full h-full flex-shrink-0"
                />
                <div className="flex items-center gap-4 self-end">
                  <Img
                    src="images/img_facebook.svg"
                    alt="close"
                    className="h-[21px] self-start"
                  />
                  <Img
                    src="images/img_inta.svg"
                    alt="close"
                    className="h-[21px] self-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[15px] flex w-full max-w-[1440px] items-center justify-between gap-5 md:flex-col md:p-5">
          <div className="flex w-[10%]">
            <a href="/homepage">
              <Img
                src="images/img_header_logo.png"
                alt="headerlogo"
                className="mb-[7px] h-[33px] w-[94px] object-contain"
              />
            </a>
          </div>

          <div className="flex w-[80%] items-center justify-center gap-6 md:w-full md:flex-col">
            <div className="flex flex-1 items-center justify-between gap-5 self-end rounded-md border border-solid border-green-A700_02 py-[11px] pl-[27px] pr-4 md:self-stretch sm:pl-5">
              <div className="flex w-[18%] items-start justify-between">
                <div className="flex w-[100%] items-start justify-between">
                  {/* <Text size="md" as="p" className="center">
                    Danh mục
                  </Text>
                  <Img
                    src="images/img_vector.svg"
                    alt="vector"
                    className="mb-2.5 mt-2.5 h-[5px]"
                  /> */}
                </div>
              </div>
              <Button color="white_A701" outline="green_50_01" shape={"circle"}>
                <Img src="images/img_search1.svg" alt="searchone" />
              </Button>
            </div>
            <div className="flex w-[40%] items-end justify-center gap-[17px] md:w-full sm:flex-col">
              <div className="flex items-center w-[30%]">
                <a href="/profile">
                  <Button
                    color="green_A700_11"
                    shape="round"
                    className="w-[50px] h-[50px]"
                  >
                    <Img src="images/img_profile1.svg" />
                  </Button>
                </a>
                <Heading
                  size="lg"
                  as="p"
                  className="!font-inter leading-[22px] sm:w-full"
                >
                  <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                    <a href="/profile">Tài khoản</a>
                  </span>
                </Heading>
              </div>
              <div className="flex items-center w-[30%]">
                <a href="/cartdetail">
                  <Button shape="round" className="w-[50px] h-[50px]">
                    <Img src="images/img_cart.svg" />
                  </Button>
                </a>
                <Heading
                  size="lg"
                  as="p"
                  className="!font-inter leading-[22px] sm:w-full whitespace-nowrap overflow-hidden overflow-ellipsis"
                >
                  <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                    <a href="/cartdetail">Thanh toán</a>
                  </span>
                </Heading>
              </div>

              {/* <div className="flex-1 w-[40%] sm:self-stretch">
                <a href="/cartdetail">
                  <div className="flex items-center">
                    <div className="relative w-[38%]">
                      <Button shape="round" className="w-[50px] h-[50px]">
                        <Img src="images/img_cart.svg" />
                      </Button>
                    </div>

                    <Heading
                      size="lg"
                      as="p"
                      className="w-[62%] self-end !font-inter leading-[50px]"
                    >
                      <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                        Thanh toán
                      </span>
                    </Heading>
                  </div>

                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
        <div className="container-md flex items-center justify-between gap-5 pr-[5px] md:flex-col md:p-5">
          <div className="flex w-[50%] items-center justify-between gap-5 md:w-full md:flex-col">
            <div
              className="relative h-[60px] w-[38%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5 "
              onClick={toggleDropdown}
            >
              <div className="flex w-full flex-col items-start">
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <div className="flex w-[50%] items-center justify-center gap-[15px]">
                    <h6 className="text-white-A700"> Danh mục</h6>
                  </div>
                  <img
                    src="images/img_vector_white_a700.svg"
                    alt="vector"
                    className="mb-[7px] h-[5px] self-end"
                  />
                </div>
              </div>

              {isOpen && (
                <div
                className="absolute top-[100%] left-0 w-full bg-white border border-gray-200_01 z-50"
                style={{
                  zIndex: 9999,
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                }}
              >
                  <ul className="py-2 text-lg text-gray-700 dark:text-gray-200">
                    <li className="flex items-center gap-[10px]">
                      <Text size="lg" as="p" className="leading-[50px] pl-5">
                        Ưu đãi hấp dẫn hôm nay
                      </Text>
                    </li>
                    <li className="flex items-center gap-[10px]">
                      <Text size="lg" as="p" className="leading-[50px] pl-5">
                        Nhà & Bếp
                      </Text>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <ul className="flex w-[60%] justify-between">
              <li>
                <div className="flex cursor-pointer items-center gap-1">
                  <a href="/homepage">
                    <Text as="p">Trang chủ</Text>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex cursor-pointer items-center gap-1">
                  <a href="/product">
                    <Text as="p">Sản phẩm</Text>
                  </a>
                </div>
              </li>

              <li>
                <div className="flex cursor-pointer items-center gap-1">
                  <a href="/shops">
                    <Text as="p">Cửa Hàng</Text>
                  </a>
                </div>
              </li>

              <li>
                <a href="/blog">
                  <div className="flex cursor-pointer items-center gap-1">
                    <Text as="p">Bài viết</Text>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex w-[40%] justify-between">
            <li>
              <a href="/product">
                <Text as="p">Ưu đãi trong ngày</Text>
              </a>
            </li>
            <li>
              <a href="/product">
                <Text as="p">Ưu đãi hấp dẫn</Text>
              </a>
            </li>
            <li>
              <a href="/shops">
                <Text as="p">Cửa hàng nổi bật</Text>
              </a>
            </li>
            <li>
              <a href="/product">
                <Text as="p">Hàng mới về</Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
