import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Input, Heading, Button } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const data = [
  { nhngcabn: "Đơn hàng của bạn" },
  { nhngcabn: "Đổi trả và Hoàn tiền" },
  { nhngcabn: "Thiết bị di động và gói cước" },
  { nhngcabn: "Thanh toán và Mua hàng" },
  { nhngcabn: "Vận chuyển, Giao hàng và Nhận hàng" },
  { nhngcabn: "Quà tặng và Mua sắm ngày lễ" },
];

export default function CustomerCarePage() {
  const [searchBarValue41, setSearchBarValue41] = React.useState("");
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
              <div className="flex items-center sm:flex-col">
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
                <div className="ml-[23px] flex items-center gap-4 sm:ml-0">
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
            <div className="flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch">
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
              <ul className="flex flex-wrap gap-[18px]">
                <li>
                  <a href="#">
                    <Text as="p">Ưu đãi hấp dẫn</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Ưu đãi trong ngày</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Bán chạy nhất</Text>
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
        <div className="mt-[18px] flex w-[73%] flex-col items-start gap-[34px] md:w-full md:p-5">
          <div className="flex gap-[7px]">
            <div className="flex flex-wrap gap-[7px]">
              <Text size="md" as="p">
                Trang chủ
              </Text>
              <Text size="md" as="p">
                /
              </Text>
            </div>
            <Text size="md" as="p" className="!text-blue_gray-600">
              Trợ giúp và Chăm sóc khách hàng
            </Text>
          </div>
          <div className="container-xs flex flex-col items-center gap-[90px] md:gap-[67px] sm:gap-[45px]">
            <div className="flex w-[67%] flex-col items-center gap-[17px] md:w-full">
              <Heading size="8xl" as="h1" className="uppercase">
                Trợ giúp và Chăm sóc khách hàng
              </Heading>
              <Input
                size="4xl"
                shape="round"
                name="search"
                placeholder={`Bạn cần trợ giúp điều gì?`}
                value={searchBarValue41}
                onChange={(e) => setSearchBarValue41(e)}
                suffix={
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-bl-[0px] rounded-br-md rounded-tl-[0px] rounded-tr-md bg-green-A700_02">
                    {searchBarValue41?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue41("")}
                        fillColor="#dcf2ddff"
                      />
                    ) : (
                      <Img
                        src="images/img_search_1_green_50_01.svg"
                        alt="search 1"
                        className="h-[20px] w-[20px] cursor-pointer"
                      />
                    )}
                  </div>
                }
                className="w-[68%] gap-[35px] border border-solid border-gray-200_01 !text-blue_gray-900_02 sm:pl-5"
              />
            </div>
            <div className="grid grid-cols-3 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
              {data.map((d, index) => (
                <div
                  key={"items" + index}
                  className="flex w-full flex-col items-start justify-center gap-[7px] rounded-md bg-gray-100_05 px-[50px] pb-[50px] pt-[76px] md:p-5"
                >
                  <Text size="3xl" as="p">
                    {d.nhngcabn}
                  </Text>
                  <Text
                    as="p"
                    className="w-[93%] !font-jost !font-normal leading-10 md:w-full"
                  >
                    <span className="font-bevietnampro text-blue_gray-900_02">
                      <>
                        Cách đặt hàng <br />
                      </>
                    </span>
                    <a
                      href="#"
                      className="font-bevietnampro text-green-A700_02 underline"
                    >
                      <>
                        Xem tình trạng đơn hàng <br />
                      </>
                    </a>
                    <span className="font-bevietnampro text-blue_gray-900_02">
                      <>
                        Tìm kiếm đơn hàng <br /> Hủy hoặc chỉnh sửa thông tin
                        đơn hàng <br /> Liên hệ chúng tôi <br /> Đơn hàng đặt
                        trước
                      </>
                    </span>
                  </Text>
                </div>
              ))}
            </div>
            <div className="flex w-[66%] flex-col items-center gap-[62px] md:w-full sm:gap-[31px]">
              <Text size="7xl" as="p">
                Câu hỏi thường gặp
              </Text>
              <Accordion
                preExpanded={[0]}
                className="flex flex-col gap-[29px] self-stretch"
              >
                {[...Array(5)].map((_, i) => (
                  <AccordionItem uuid={i} key={`inner${i}`}>
                    <div className="flex flex-1 flex-col gap-1 pb-[31px] sm:pb-5">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex items-center justify-between gap-5 md:flex-col">
                                  <div className="flex flex-wrap items-center gap-[15px]">
                                    <Text
                                      size="7xl"
                                      as="p"
                                      className="!font-jost"
                                    >
                                      01
                                    </Text>
                                    <Text size="3xl" as="p">
                                      Chi phí hàng tháng cho tài khoản của tôi
                                      là bao nhiêu?
                                    </Text>
                                  </div>
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_rectangle_272.svg"
                                      alt="image"
                                      className="mb-[17px] h-px self-end md:w-full"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_plus_blue_gray_900_02.svg"
                                      alt="plus"
                                      className="mt-1.5 h-[15px] w-[15px] md:w-full"
                                    />
                                  )}
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div>
                          <Text as="p" className="!font-normal leading-7">
                            <span className="text-blue_gray-900_02">
                              Chi phí để sử dụng hệ thống mua hàng và bán hàng
                              cơ bản của chúng tôi là miễn phí. Tuy nhiên, một
                              số chức năng nâng cao ví dụ bán hàng nhanh chóng
                              hơn thì chúng tôi sẽ có các gói nâng cấp hỗ trợ.
                              Chi tiết&nbsp;
                            </span>
                            <span className="text-green-A700_02">
                              TẠI ĐÂY&nbsp;
                            </span>
                          </Text>
                        </div>
                      </AccordionItemPanel>
                    </div>
                    <div className="h-px w-full rotate-[0deg] bg-gray-200_01" />
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[118px] flex-col self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
