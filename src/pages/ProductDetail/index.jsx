import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Img,
  Text,
  CheckBox,
  Input,
  TextArea,
  RatingBar,
  Heading,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
import HomePageFour from "../../components/HomePageFour";
import HomePageThree from "../../components/HomePageThree";
import ProductDetailDetails from "../../components/ProductDetailDetails";
const data = [
  { imageseventyfiv: "images/img_image_75.png" },
  { imageseventyfiv: "images/img_image_76.png" },
  { imageseventyfiv: "images/img_image_65.png" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ProductDetailPage() {
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
        <header className="self-stretch bg-white-A700 pt-[11px]">
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
                <div className="flex w-[58%] items-end justify-center md:w-full md:flex-col">
                  <div className="relative h-[60px] w-[47%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5">
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
                  <Text as="p" className="ml-[31px] md:ml-0">
                    Trang chủ
                  </Text>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector"
                    className="mb-6 h-[5px] md:w-full"
                  />
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Text as="p" className="ml-[38px] md:ml-0">
                      Sản phẩm
                    </Text>
                  </a>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector"
                    className="mb-6 h-[5px] md:w-full"
                  />
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Text as="p" className="mb-[17px] ml-[39px] md:ml-0">
                      Liên hệ
                    </Text>
                  </a>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector_eleven"
                    className="mb-6 h-[5px] md:w-full"
                  />
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Text as="p" className="ml-10 mt-[18px] md:ml-0">
                      Bài viết
                    </Text>
                  </a>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector_thirteen"
                    className="mb-6 h-[5px] md:w-full"
                  />
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
        <div className="mt-[21px] flex w-[76%] flex-col gap-20 md:w-full md:gap-[60px] md:p-5 sm:gap-10">
          <div className="container-xs flex flex-col gap-[60px] sm:gap-[30px]">
            <div className="pr-[5px]">
              <div className="flex flex-col items-start gap-[50px]">
                <Text
                  size="md"
                  as="p"
                  className="!font-bevietnamprolight !font-light"
                >
                  Trang chủ / Thời Trang / Thời Trang Nam / Áo Thun
                </Text>
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="w-[6%] md:w-full">
                    <div className="flex flex-col gap-2.5 md:flex-row">
                      {data.map((d, index) => (
                        <div
                          key={"thumbnail" + index}
                          className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5"
                        >
                          <Img
                            src={d.imageseventyfiv}
                            alt="imageseventyfiv"
                            className="h-[60px] w-[60px] object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-[47%] flex-col items-start md:w-full">
                    <Img
                      src="images/img_full_screen_1.svg"
                      alt="fullscreenone"
                      className="h-[30px] w-[30px] self-end"
                    />
                    <Img
                      src="images/img_image_65.png"
                      alt="imageseventyeig"
                      className="mt-3.5 h-[612px] w-[612px] object-cover"
                    />
                    <Text size="lg" as="p" className="ml-[209px] mt-6 md:ml-0">
                      Cuộn để phóng to hình ảnh
                    </Text>
                  </div>
                  <div className="mt-2 flex w-[32%] flex-col items-start gap-[19px] rounded-md border border-solid border-gray-200_01 bg-white-A700 py-[30px] pl-[30px] pr-[26px] shadow-xs md:w-full sm:p-5">
                    <div className="flex flex-col gap-[18px] self-stretch">
                      <div className="flex items-center gap-2.5 self-start sm:flex-col">
                        <Text size="s" as="p" className="uppercase">
                          Nike
                        </Text>
                        <div className="h-[20px] w-px bg-gray-200_01 sm:h-px sm:w-[20px]" />
                        <div className="flex items-start gap-2.5 self-end">
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
                          <Text size="md" as="p">
                            3,014 Đánh giá
                          </Text>
                        </div>
                        <div className="h-[20px] w-px bg-gray-200_01 sm:h-px sm:w-[20px]" />
                        <Text size="md" as="p" className="!text-green-A700_02">
                          33 sản phẩm có sẵn
                        </Text>
                      </div>
                      <Text size="4xl" as="p" className="leading-[27px]">
                        Xả Hàng VNXK Áo Phông Nam Nike Khô Thoáng Swoosh
                      </Text>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="flex flex-wrap items-center gap-[9px]">
                      <Text size="6xl" as="p" className="flex !font-jost">
                        <span className="text-blue_gray-900_02">250.000</span>
                        <a href="#" className="text-blue_gray-900_02 underline">
                          đ
                        </a>
                      </Text>
                      <Text
                        as="p"
                        className="flex !font-jost !font-normal !text-blue_gray-600 line-through"
                      >
                        <span className="text-blue_gray-600">500.000</span>
                        <a href="#" className="text-blue_gray-600 underline">
                          đ
                        </a>
                      </Text>
                    </div>
                    <div className="flex w-[54%] flex-col items-start gap-3 md:w-full">
                      <Text
                        size="md"
                        as="p"
                        className="!font-jost !text-gray-900_06"
                      >
                        <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                          Màu sắc:
                        </span>
                        <span className="font-bevietnampro text-blue_gray-900_02">
                          &nbsp;Xám
                        </span>
                      </Text>
                      <Img
                        src="images/img_inner.svg"
                        alt="inner"
                        className="h-[26px] w-full md:h-auto"
                      />
                    </div>
                    <div className="flex w-[74%] flex-col items-start gap-2.5 md:w-full">
                      <Text
                        size="md"
                        as="p"
                        className="!font-jost !text-gray-900_06"
                      >
                        <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                          Size:
                        </span>
                        <span className="font-bevietnampro text-blue_gray-900_02">
                          &nbsp;M
                        </span>
                      </Text>
                      <div className="flex gap-[15px] self-stretch">
                        <Button
                          color="gray_200_01"
                          size="xl"
                          variant="outline"
                          shape="round"
                          className="w-full !border font-jost font-medium sm:px-5"
                        >
                          S
                        </Button>
                        <Button
                          size="xl"
                          shape="round"
                          className="w-full border border-solid border-green-A700_02 font-jost font-medium sm:px-5"
                        >
                          M
                        </Button>
                        <Button
                          color="gray_200_01"
                          size="xl"
                          variant="outline"
                          shape="round"
                          className="w-full !border font-jost font-medium sm:px-5"
                        >
                          L
                        </Button>
                        <Button
                          color="gray_200_01"
                          size="xl"
                          variant="outline"
                          shape="round"
                          className="w-full !border font-jost font-medium sm:px-5"
                        >
                          XL
                        </Button>
                      </div>
                    </div>
                    <div className="h-px self-stretch bg-gray-200_01" />
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex gap-5 sm:flex-col">
                        <div className="flex w-[36%] items-center justify-between gap-5 rounded-[26px] border border-solid border-gray-200_01 bg-white-A700 px-2.5 py-[11px] sm:w-full">
                          <div className="w-[27%] rounded-[15px] bg-white-A700 px-2.5 pb-3.5 pt-[15px]">
                            <div className="h-px w-[10px] rotate-[90deg] bg-blue_gray-900_02" />
                          </div>
                          <Text size="lg" as="p" className="!font-jost">
                            3
                          </Text>
                          <Button
                            color="gray_100_05"
                            size="2xl"
                            shape="circle"
                            className="w-[30px] !rounded-[15px]"
                          >
                            <Img src="images/img_plus.svg" />
                          </Button>
                        </div>
                        <a
                          href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                          target="_blank"
                        >
                          <Button
                            size="10xl"
                            className="min-w-[236px] rounded-[26px] border border-solid border-green-A700_02 !text-gray-100_02 sm:px-5"
                          >
                            Thêm Vào Giỏ hàng
                          </Button>
                        </a>
                      </div>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          size="10xl"
                          variant="outline"
                          className="w-full rounded-[26px] font-bevietnamprosemibold font-semibold sm:px-5"
                        >
                          Mua Ngay
                        </Button>
                      </a>
                      <div className="flex items-center self-start sm:flex-col">
                        <div className="flex gap-1 self-start">
                          <Img
                            src="images/img_heart_1.svg"
                            alt="heartone"
                            className="h-[16px] w-[16px]"
                          />
                          <Text size="xs" as="p">
                            Yêu Thích
                          </Text>
                        </div>
                        <div className="ml-1 h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />
                        <div className="ml-[7px] flex items-center gap-2.5 self-start sm:ml-0">
                          <Img
                            src="images/img_graph_1.svg"
                            alt="graphone"
                            className="h-[14px] w-[14px] self-start"
                          />
                          <Text size="xs" as="p">
                            So Sánh
                          </Text>
                        </div>
                        <div className="ml-3 h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />
                        <div className="ml-[7px] flex gap-[9px] sm:ml-0">
                          <Img
                            src="images/img_profile.svg"
                            alt="profile"
                            className="h-[16px] w-[16px]"
                          />
                          <Text size="xs" as="p">
                            Đặt Câu Hỏi
                          </Text>
                        </div>
                        <div className="ml-[25px] h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />
                        <div className="ml-[7px] flex gap-[9px] sm:ml-0">
                          <Img
                            src="images/img_share_1.svg"
                            alt="shareone"
                            className="h-[16px] w-[16px] self-end"
                          />
                          <Text size="xs" as="p" className="self-start">
                            Chia sẻ
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[23px]">
              <div className="flex w-[66%] flex-col gap-6 md:w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-start gap-[15px]">
                    <Text size="3xl" as="p">
                      Tổng Quan
                    </Text>
                    <div className="flex flex-col gap-[17px] self-stretch pb-[9px]">
                      <Text
                        as="p"
                        className="!font-normal leading-7 !text-blue_gray-600"
                      >
                        Cho dù bạn mặc nó sau khi tập gym hay chuẩn bị bắt đầu
                        ngày mới, chiếc áo phông này đang gọi tên bạn. Được
                        thiết kế cho phong cách thoải mái và dễ dàng, thể hiện
                        trọn vẹn niềm tự hào của bạn. Kết hợp với mọi món đồ
                        trong tủ quần áo của bạn - cảm giác thể thao cổ điển phù
                        hợp với mọi kiểu dáng.
                      </Text>
                      <div className="flex items-center">
                        <Text
                          as="p"
                          className="!font-normal !text-green-A700_02"
                        >
                          Xem Thêm
                        </Text>
                        <Img
                          src="images/img_vector_green_a700_02.svg"
                          alt="vector_fifteen"
                          className="mb-[5px] h-[5px] self-end"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-gray-200_01" />
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Text size="3xl" as="p">
                      Thông Tin Chi Tiết
                    </Text>
                    <Img
                      src="images/img_arrow_up.svg"
                      alt="arrowup"
                      className="mb-2 h-[7px] self-end"
                    />
                  </div>
                  <div className="flex w-[87%] flex-col gap-[19px] md:w-full">
                    <div className="flex flex-col items-start gap-[13px]">
                      <Text as="p">Đặc điểm</Text>
                      <div className="self-stretch">
                        <div className="flex items-start md:flex-col">
                          <div className="mt-[19px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:self-stretch" />
                          <div className="relative ml-[-4px] mt-[59px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative ml-[-4px] mt-[99px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative mb-[97px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative mb-[57px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative mb-[17px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <Text
                            as="p"
                            className="ml-2.5 w-full !font-normal leading-10 !text-blue_gray-600 md:ml-0"
                          >
                            <>
                              Thiết kế dáng rộng có phần vai trễ xuống mang lại
                              vẻ ngoài và cảm giác thoải mái. <br /> Chất liệu
                              cotton dày dặn có độ rủ cứng giúp outfits của bạn
                              trông bắt mắt và đặc biệt hơn. <br /> Logo thêu
                              phía trước tạo điểm nhấn tinh tế. <br /> Kiểu dáng
                              loose fit. <br /> Sản phẩm có thể giặt máy. <br />
                              Chất liệu: 100% cotton.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[13px]">
                      <Text as="p" className="capitalize !text-gray-900_06">
                        <span className="text-blue_gray-900_02">
                          Hướng&nbsp;
                        </span>
                        <span className="text-blue_gray-900_02">
                          dẫn chọn kích cỡ quần áo phù hợp
                        </span>
                      </Text>
                      <div className="flex items-start self-stretch md:flex-col">
                        <div className="mt-[19px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:self-stretch" />
                        <div className="relative ml-[-4px] mt-[59px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <div className="relative ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <div className="relative mb-[57px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <div className="relative mb-[17px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <Text
                          as="p"
                          className="ml-2.5 w-full !font-normal leading-10 !text-blue_gray-600 md:ml-0"
                        >
                          <>
                            Để đo được kích cỡ đúng, dùng thước dây đo. <br />
                            Đo quanh phần hẹp nhất của thắt lưng, giữ thước dây
                            thẳng theo phương ngang. <br /> Đứng khép hai chân
                            và đo phần nở nhất của hông, giữ thước dây thẳng
                            theo phương ngang. <br /> Đo chiều dài từ đỉnh vai
                            cho đến cuối tay áo. <br /> Xin lưu ý số đo này dựa
                            trên kiểu đường may viền trong thông thường.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full self-stretch bg-gray-200_01" />
                </div>
                <div className="flex flex-col gap-[21px]">
                  {[...Array(5)].map((d, index) => (
                    <ProductDetailDetails
                      key={"listchititthng" + index}
                      className="gap-[22px]"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[17px]">
                <div className="flex w-[66%] items-center justify-between gap-5 md:w-full">
                  <Text size="3xl" as="p" className="!font-bevietnampromedium">
                    Đánh Giá Sản Phẩm
                  </Text>
                  <Img
                    src="images/img_arrow_up_blue_gray_900_02.png"
                    alt="arrowup"
                    className="mb-[5px] h-[7px] self-end object-cover"
                  />
                </div>
                <div className="flex flex-col items-end gap-7">
                  <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                    <div className="flex w-[29%] flex-col items-start md:w-full">
                      <div className="flex w-[58%] items-center gap-[22px] md:w-full">
                        <Text size="8xl" as="p" className="!font-jost">
                          4.9
                        </Text>
                        <div className="flex flex-1 flex-col items-start gap-[13px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={17}
                            className="flex justify-between self-stretch"
                          />
                          <Text size="lg" as="p">
                            2 đánh giá
                          </Text>
                        </div>
                      </div>
                      <div className="mt-[23px] flex items-center gap-[21px] self-stretch sm:flex-col">
                        <Text as="p" className="!font-jost !font-normal">
                          5 sao
                        </Text>
                        <div className="mt-2 h-[6px] w-[78%] self-start" />
                        <Text as="p" className="!font-jost !font-normal">
                          89%
                        </Text>
                      </div>
                      <div className="mt-[13px] flex items-center self-stretch sm:flex-col">
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
                      <div className="mt-[13px] flex items-center self-stretch sm:flex-col">
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
                      <div className="mt-[13px] flex items-center self-stretch sm:flex-col">
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
                      <div className="mt-3.5 flex items-center gap-[23px] self-stretch sm:flex-col">
                        <Text as="p" className="!font-jost !font-normal">
                          1 sao
                        </Text>
                        <div className="mt-2 h-[6px] flex-1 self-start sm:self-stretch" />
                        <Text as="p" className="!font-jost !font-normal">
                          4%
                        </Text>
                      </div>
                      <Button
                        size="9xl"
                        variant="outline"
                        shape="round"
                        className="mt-[31px] min-w-[169px] font-medium sm:px-5"
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
                          <div className="flex flex-col gap-5">
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
                                <div className="flex items-center gap-2.5">
                                  <div className="flex gap-[5px]">
                                    <Img
                                      src="images/img_star_1_1.svg"
                                      alt="at"
                                      className="h-[10px] w-[10px]"
                                    />
                                    <Img
                                      src="images/img_star_1_1.svg"
                                      alt="at"
                                      className="h-[10px] w-[10px]"
                                    />
                                    <Img
                                      src="images/img_star_1_1.svg"
                                      alt="at"
                                      className="h-[10px] w-[10px]"
                                    />
                                    <Img
                                      src="images/img_star_1_1.svg"
                                      alt="at"
                                      className="h-[10px] w-[10px]"
                                    />
                                    <Img
                                      src="images/img_star_1_1.svg"
                                      alt="at"
                                      className="h-[10px] w-[10px]"
                                    />
                                  </div>
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
                                Đây là một bước tiến lớn bất thường so với các
                                mẫu máy trước đó, đặc biệt là về sức mạnh tính
                                toán thô cũng như những điều thú vị như hỗ trợ
                                màn hình và tai nghe. <br /> <br /> Danh sách
                                Amazon này có hai bộ xử lý khác nhau, M1 Pro
                                (được liệt kê là &quot;kiểu GPU 16 lõi&quot;) và
                                M1 Max (GPU 32 lõi). Tôi sẽ gọi một người là
                                Pro, người còn lại là Max. Tôi đã mua phiên bản
                                Pro cơ bản, nhưng phần lớn những gì tôi sẽ nói
                                đều áp dụng cho cả hai phiên bản này và tôi cũng
                                sẽ có một số nhận xét cụ thể về phiên bản Max.
                              </>
                            </Text>
                            <div className="flex w-[45%] gap-5 md:w-full md:flex-row sm:flex-col">
                              {[...Array(4)].map((d, index) => (
                                <Img
                                  key={"gallery1" + index}
                                  src="images/img_rectangle_294.png"
                                  alt="đây_là_một_bước"
                                  className="h-[90px] w-[21%] rounded object-cover sm:w-full"
                                />
                              ))}
                            </div>
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
                                  className="flex justify-between"
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
                              Đây là một bước tiến lớn bất thường so với các mẫu
                              máy trước đó, đặc biệt là về sức mạnh tính toán
                              thô cũng như những điều thú vị như hỗ trợ màn hình
                              và tai nghe. <br /> <br /> Danh sách Amazon này có
                              hai bộ xử lý khác nhau, M1 Pro (được liệt kê là
                              &quot;kiểu GPU 16 lõi&quot;) và M1 Max (GPU 32
                              lõi). Tôi sẽ gọi một người là Pro, người còn lại
                              là Max. Tôi đã mua phiên bản Pro cơ bản, nhưng
                              phần lớn những gì tôi sẽ nói đều áp dụng cho cả
                              hai phiên bản này và tôi cũng sẽ có một số nhận
                              xét cụ thể về phiên bản Max.
                            </>
                          </Text>
                          <div className="flex w-[45%] gap-5 md:w-full md:flex-row sm:flex-col">
                            {[...Array(4)].map((d, index) => (
                              <Img
                                key={"gallery" + index}
                                src="images/img_rectangle_294.png"
                                alt="rectangle"
                                className="h-[90px] w-[21%] rounded object-cover sm:w-full"
                              />
                            ))}
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
                  <div className="flex w-[66%] flex-col items-center gap-[30px] md:w-full">
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
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
                        <Text
                          as="p"
                          className="!font-normal !text-blue_gray-600"
                        >
                          Địa chỉ email của bạn sẽ không được công bố. Các
                          trường bắt buộc được đánh dấu *
                        </Text>
                        <div className="flex w-[26%] flex-col items-start gap-2.5 md:w-full">
                          <Text as="p">Đánh giá của bạn về sản phẩm</Text>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={14}
                            className="flex justify-between"
                          />
                        </div>
                        <div className="flex flex-col gap-5 self-stretch">
                          <div className="flex flex-col items-start gap-[7px] pt-[5px]">
                            <Text as="p">Bình luận</Text>
                            <TextArea
                              shape="round"
                              name="group4098"
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
                        <CheckBox
                          name="lưutênemailvàtr"
                          label="Lưu tên, email và trang web của tôi trong trình duyệt này cho lần đánh giá tiếp theo."
                          id="lutnemailvtr"
                          className="gap-2.5 text-base text-blue_gray-900_02"
                        />
                        <Button
                          size="9xl"
                          shape="round"
                          className="min-w-[135px] border border-solid border-green-A700_02 font-medium !text-gray-100_02 shadow-sm sm:px-5"
                        >
                          Hoàn tất
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-1 flex-col gap-[31px]">
              <div className="container-md flex items-center justify-between gap-5 pr-[5px] md:p-5 sm:flex-col">
                <Text size="7xl" as="p">
                  Sản phẩm liên quan
                </Text>
                <div className="flex w-[13%] items-center justify-center gap-5 sm:w-full">
                  <Img
                    src="images/img_arrow_down.svg"
                    alt="sản_phẩm_liên"
                    className="h-[24px] w-[24px]"
                  />
                  <Img
                    src="images/img_settings.svg"
                    alt="sản_phẩm_liên"
                    className="h-[20px] w-[58%]"
                  />
                  <Img
                    src="images/img_arrow_left.svg"
                    alt="sản_phẩm_liên"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div>
                <div className="flex md:flex-col">
                  <div className="flex w-full items-center">
                    <Button
                      color="white_A700"
                      shape="circle"
                      className="relative z-[1] w-[50px] !rounded-[25px] border border-solid border-gray-200_01"
                    >
                      <Img src="images/img_arrow_left_blue_gray_900.svg" />
                    </Button>
                    <HomePageThree
                      description="Áo hoodie Nike thấm hút mồ hôi cho ngày đông lạnh "
                      className="relative ml-[-25px] flex-1 sm:pb-5"
                    />
                  </div>
                  <HomePageFour
                    titletext="Áo thun nam thoáng mát, thích hợp chạy bộ"
                    className="w-full md:ml-0"
                  />
                  <HomePageThree
                    image="images/img_image_30_2.png"
                    description="Áo mùa đông lạnh giá Nike chần bông ấm áp"
                    className="relative z-[2] ml-[-1px] w-full md:ml-0 sm:pb-5"
                  />
                  <HomePageThree
                    image="images/img_image_30_230x230.png"
                    description="Khoác gió chống nắng thời trang Adidas"
                    className="relative ml-[-1px] w-full md:ml-0 sm:pb-5"
                  />
                  <div className="relative ml-[-1px] flex w-full items-center md:ml-0">
                    <HomePageThree
                      image="images/img_image_30_3.png"
                      description="Quần tập nữ Adidas siêu co giãn chống nước"
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
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[31px]">
              <div className="container-md flex items-center justify-between gap-5 pr-[5px] md:p-5 sm:flex-col">
                <Text size="7xl" as="p">
                  Có thể bạn sẽ thích
                </Text>
                <div className="flex w-[13%] items-center justify-center gap-5 sm:w-full">
                  <Img
                    src="images/img_arrow_down.svg"
                    alt="arrowdown"
                    className="h-[24px] w-[24px]"
                  />
                  <Img
                    src="images/img_settings.svg"
                    alt="settings"
                    className="h-[20px] w-[58%]"
                  />
                  <Img
                    src="images/img_arrow_left.svg"
                    alt="arrowleft"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex md:flex-col">
                <div className="flex w-full items-center">
                  <Button
                    color="white_A700"
                    shape="circle"
                    className="relative z-[3] w-[50px] !rounded-[25px] border border-solid border-gray-200_01"
                  >
                    <Img src="images/img_arrow_left_blue_gray_900.svg" />
                  </Button>
                  <HomePageThree
                    image="images/img_image_30_4.png"
                    description="Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double "
                    className="relative ml-[-25px] flex-1 sm:pb-5"
                  />
                </div>
                <HomePageFour
                  image="images/img_image_30_5.png"
                  titletext="KINLO Hydrating Golden Facial Mist with Sweet Orange and"
                  className="w-full md:ml-0"
                />
                <HomePageThree
                  image="images/img_image_30_6.png"
                  description="Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double "
                  className="relative z-[4] ml-[-1px] w-full md:ml-0 sm:pb-5"
                />
                <HomePageThree
                  image="images/img_image_30_7.png"
                  description="Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double "
                  className="relative ml-[-1px] w-full md:ml-0 sm:pb-5"
                />
                <div className="relative ml-[-1px] flex w-full items-center md:ml-0">
                  <HomePageThree
                    image="images/img_image_30_8.png"
                    description="Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double "
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
            </div>
          </div>
        </div>
        <Footer1 className="mt-20 justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
