import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import {
  Button,
  Text,
  RatingBar,
  Img,
  Input,
  CheckBox,
  SelectBox,
  Heading,
} from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import SalesShopPagination from "../../components/SalesShopPagination";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ListOfShopPage() {
  const [searchBarValue35, setSearchBarValue35] = React.useState("");
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
              <ul className="flex flex-wrap gap-[17px]">
                <li>
                  <a href="#">
                    <Text as="p">Ưu đãi hấp dẫn</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Bán chạy nhất</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Ưu đãi trong ngày</Text>
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
        <div className="mt-[19px] flex w-[75%] flex-col gap-[76px] md:w-full md:gap-[57px] md:p-5 sm:gap-[38px]">
          <div className="container-md flex flex-col items-center">
            <div className="flex flex-wrap gap-[7px] self-start">
              <Text size="md" as="p">
                Trang chủ
              </Text>
              <Text size="md" as="p">
                /
              </Text>
              <Text size="md" as="p" className="!text-blue_gray-600">
                Danh sách cửa hàng
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[92px] md:gap-[69px] sm:gap-[46px]">
            <Text size="7xl" as="p">
              Danh sách cửa hàng
            </Text>
            <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[15%] flex-col gap-[21px] md:w-full">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-[25px]">
                    <Text size="2xl" as="p">
                      Lọc theo danh mục
                    </Text>
                    <div className="h-px w-[15px] bg-blue_gray-900_02" />
                  </div>
                  <div className="flex flex-col items-start">
                    <Input
                      size="md"
                      shape="round"
                      name="search"
                      placeholder={`Tìm kiếm`}
                      value={searchBarValue35}
                      onChange={(e) => setSearchBarValue35(e)}
                      suffix={
                        searchBarValue35?.length > 0 ? (
                          <CloseSVG onClick={() => setSearchBarValue35("")} />
                        ) : null
                      }
                      className="self-stretch border border-solid border-gray-200_01 !text-blue_gray-900_02 sm:pr-5"
                    />
                    <div className="mt-5 flex gap-5 self-stretch">
                      <div className="relative h-[150px] flex-1 md:h-auto">
                        <CheckBox
                          name="đanggiảmgiánhàb"
                          label="Đang giảm giáNhà & BếpNhà & Nội thấtĐiện tửQuần áo & Phụ kiện"
                          id="anggimginhb"
                          className="gap-2.5 text-left font-jost text-[15px] leading-[30px] text-blue_gray-900_02"
                        />
                        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[10%] flex-col">
                          <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                          <div className="mt-3.5 flex flex-col items-center rounded bg-green-A700_02 p-1">
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
                        className="w-[12%] text-right leading-[30px]"
                      >
                        <>
                          87 <br /> 92 <br /> 123 <br /> 49 <br /> 12
                        </>
                      </Text>
                    </div>
                    <div className="mt-2.5 flex w-[35%] flex-col items-start gap-1 shadow-sm md:w-full">
                      <Text size="lg" as="p">
                        Xem thêm
                      </Text>
                      <div className="h-[2px] w-[32px] bg-blue_gray-900_02" />
                    </div>
                  </div>
                  <div className="h-px bg-gray-200_01" />
                </div>
                <Accordion preExpanded={[0]} className="flex flex-col gap-px">
                  {[...Array(1)].map((_, i) => (
                    <AccordionItem uuid={i} key={`filtersidebar${i}`}>
                      <div className="flex flex-1 flex-col gap-[21px]">
                        <div className="flex items-center justify-between gap-5">
                          <Text size="2xl" as="p">
                            Lọc theo vị trí
                          </Text>
                          <div className="h-px w-[15px] bg-blue_gray-900_02" />
                        </div>
                        <div className="flex flex-col gap-2.5">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex items-start justify-between gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[11px] pl-[15px] pr-3 pt-3.5">
                                      <Text size="lg" as="p">
                                        Quốc gia
                                      </Text>
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex items-start justify-between gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[11px] pl-[15px] pr-3 pt-3.5">
                                      <Text size="lg" as="p">
                                        Tỉnh/ Thành phố
                                      </Text>
                                      <Img
                                        src="images/img_vector_blue_gray_900_02.svg"
                                        alt="vector"
                                        className="mt-1.5 h-[5px]"
                                      />
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex items-start justify-between gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-2.5 pl-[15px] pr-3 pt-[15px]">
                                      <Text size="lg" as="p">
                                        Quận/ Huyện
                                      </Text>
                                      <Img
                                        src="images/img_vector_blue_gray_900_02.svg"
                                        alt="vectorteen"
                                        className="mt-[5px] h-[5px]"
                                      />
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <Input
                            size="md"
                            shape="round"
                            name="four_one"
                            placeholder={`Mã vùng`}
                            className="border border-solid border-gray-200_01 !text-blue_gray-900_02 sm:pr-5"
                          />
                        </div>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex w-[80%] flex-col items-center gap-[25px] md:w-full">
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <Text size="lg" as="p" className="self-end">
                    Hiển thị 1–20 của 175 kết quả
                  </Text>
                  <div className="flex items-start gap-[9px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Lọc mặc định
                    </Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mt-1 h-[5px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
                  <div className="flex w-full flex-col gap-[21px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5">
                    <Img
                      src="images/img_beautiful_young.png"
                      alt="apple_store"
                      className="h-[200px] rounded-md object-cover"
                    />
                    <div className="flex flex-col gap-5">
                      <div className="flex">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!font-jost">
                            Apple Store
                          </Text>
                          <div className="flex flex-wrap items-center">
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="965_seller"
                              className="h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="965_seller"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="965_seller"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="965_seller"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="965_seller"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Text
                              size="md"
                              as="p"
                              className="ml-2.5 !font-jost"
                            >
                              965 seller reviews
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="!font-jost !font-normal leading-7"
                      >
                        <>
                          1418 River Drive, Suite 35 Cottonhall, CA 9622 United
                          States <br /> sale@zenmart.com <br /> +3 8493 92 932
                          021
                        </>
                      </Text>
                    </div>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Button
                        size="10xl"
                        shape="round"
                        className="w-full border border-solid border-green-A700_02 font-medium !text-green-50_01 sm:px-5"
                      >
                        Xem cửa hàng
                      </Button>
                    </a>
                  </div>
                  <div className="flex w-full flex-col gap-[23px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5">
                    <Img
                      src="images/img_beautiful_young_200x295.png"
                      alt="beautifulyoung"
                      className="h-[200px] rounded-md object-cover"
                    />
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex">
                        <div className="flex flex-col items-start">
                          <Text as="p" className="!font-jost">
                            Apple Store
                          </Text>
                          <div className="flex flex-wrap items-center">
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="image"
                              className="h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="image"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="image"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="image"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Img
                              src="images/img_star_1_1.svg"
                              alt="image"
                              className="ml-[5px] h-[10px] w-[10px]"
                            />
                            <Text
                              size="md"
                              as="p"
                              className="ml-2.5 !font-jost"
                            >
                              965 seller reviews
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="w-[96%] !font-jost !font-normal leading-7 md:w-full"
                      >
                        <>
                          1418 River Drive, Suite 35 Cottonhall, CA 9622 United
                          States <br /> sale@zenmart.com <br /> +3 8493 92 932
                          021
                        </>
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          size="9xl"
                          variant="outline"
                          shape="round"
                          className="w-full font-medium sm:px-5"
                        >
                          Xem cửa hàng
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[23px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5">
                    <Img
                      src="images/img_beautiful_young_1.png"
                      alt="beautifulyoung"
                      className="h-[200px] rounded-md object-cover"
                    />
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex flex-col items-start">
                        <Text as="p" className="!font-jost">
                          Apple Store
                        </Text>
                        <div className="flex flex-wrap items-center">
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="ml-[5px] h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="ml-[5px] h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="ml-[5px] h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="ml-[5px] h-[10px] w-[10px]"
                          />
                          <Text size="md" as="p" className="ml-2.5 !font-jost">
                            965 seller reviews
                          </Text>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="w-[96%] !font-jost !font-normal leading-7 md:w-full"
                      >
                        <>
                          1418 River Drive, Suite 35 Cottonhall, CA 9622 United
                          States <br /> sale@zenmart.com <br /> +3 8493 92 932
                          021
                        </>
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          size="9xl"
                          variant="outline"
                          shape="round"
                          className="w-full font-medium sm:px-5"
                        >
                          Xem cửa hàng
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[23px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5">
                    <Img
                      src="images/img_beautiful_young_2.png"
                      alt="beautifulyoung"
                      className="h-[200px] rounded-md object-cover"
                    />
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex w-[64%] flex-col items-start md:w-full">
                        <Text as="p" className="!font-jost">
                          Apple Store
                        </Text>
                        <div className="flex items-center gap-2.5 self-stretch">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between"
                          />
                          <Text size="md" as="p" className="!font-jost">
                            965 seller reviews
                          </Text>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="w-[96%] !font-jost !font-normal leading-7 md:w-full"
                      >
                        <>
                          1418 River Drive, Suite 35 Cottonhall, CA 9622 United
                          States <br /> sale@zenmart.com <br /> +3 8493 92 932
                          021
                        </>
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          size="9xl"
                          variant="outline"
                          shape="round"
                          className="w-full font-medium sm:px-5"
                        >
                          Xem cửa hàng
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[23px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5">
                    <Img
                      src="images/img_beautiful_young_3.png"
                      alt="beautifulyoung"
                      className="h-[200px] rounded-md object-cover"
                    />
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex w-[64%] flex-col items-start md:w-full">
                        <Text as="p" className="!font-jost">
                          Apple Store
                        </Text>
                        <div className="flex items-center gap-2.5 self-stretch">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between"
                          />
                          <Text size="md" as="p" className="!font-jost">
                            965 seller reviews
                          </Text>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="w-[96%] !font-jost !font-normal leading-7 md:w-full"
                      >
                        <>
                          1418 River Drive, Suite 35 Cottonhall, CA 9622 United
                          States <br /> sale@zenmart.com <br /> +3 8493 92 932
                          021
                        </>
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          size="9xl"
                          variant="outline"
                          shape="round"
                          className="w-full font-medium sm:px-5"
                        >
                          Xem cửa hàng
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[23px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5">
                    <Img
                      src="images/img_beautiful_young_4.png"
                      alt="beautifulyoung"
                      className="h-[200px] rounded-md object-cover"
                    />
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex w-[64%] flex-col items-start md:w-full">
                        <Text as="p" className="!font-jost">
                          Apple Store
                        </Text>
                        <div className="flex items-center gap-2.5 self-stretch">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between"
                          />
                          <Text size="md" as="p" className="!font-jost">
                            965 seller reviews
                          </Text>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="w-[96%] !font-jost !font-normal leading-7 md:w-full"
                      >
                        <>
                          1418 River Drive, Suite 35 Cottonhall, CA 9622 United
                          States <br /> sale@zenmart.com <br /> +3 8493 92 932
                          021
                        </>
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          size="9xl"
                          variant="outline"
                          shape="round"
                          className="w-full font-medium sm:px-5"
                        >
                          Xem cửa hàng
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <SalesShopPagination
                  text120of300="1 – 20 trên 300+ cửa hàng"
                  className="w-[44%] gap-[22px] md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[113px] flex-col self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
