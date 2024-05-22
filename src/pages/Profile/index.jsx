import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Input,
  Heading,
  Img,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ProfilePage() {
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
              <div className="flex flex-1 items-center justify-between gap-5 pr-[117px] md:flex-col md:self-stretch md:pr-5">
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
                    alt="vector"
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
                    alt="vector"
                    className="mb-1.5 h-[5px] sm:w-full"
                  />
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
        <div className="container-md mt-[33px] flex justify-center pr-1.5 md:p-5">
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            <div className="mt-[7px] flex w-[15%] flex-col gap-2.5 pt-[5px] md:w-full">
              <div className="flex flex-col gap-[9px]">
                <div className="flex items-start gap-[11px]">
                  <Img
                    src="images/img_150_25_1.png"
                    alt="circleimage"
                    className="h-[40px] w-[40px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start gap-[5px]">
                    <Text as="p">Phuong Uyennn</Text>
                    <Text size="lg" as="p" className="!text-blue_gray-600">
                      alitfn58@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-col gap-[25px]">
                  <Img
                    src="images/img_growth_1.svg"
                    alt="growthone"
                    className="h-[20px]"
                  />
                  <Img
                    src="images/img_vector.svg"
                    alt="vector_eleven"
                    className="h-[20px]"
                  />
                  <Img
                    src="images/img_location_1.svg"
                    alt="locationone"
                    className="h-[20px]"
                  />
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_badge_1.svg"
                      alt="badgeone"
                      className="h-[20px]"
                    />
                  </a>
                  <Img
                    src="images/img_television.svg"
                    alt="television"
                    className="h-[20px]"
                  />
                </div>
                <Text size="lg" as="p" className="w-[89%] leading-[45px]">
                  <>
                    Thông tin tài khoản <br /> Đặt hàng <br /> Địa chỉ <br />
                    Danh sách yêu thích <br /> Đăng xuất
                  </>
                </Text>
              </div>
            </div>
            <div className="flex w-[80%] flex-col items-start gap-[11px] md:w-full">
              <Heading size="8xl" as="h1" className="uppercase">
                Thông tin tài khoản
              </Heading>
              <Heading as="h2">Thông tin tài khoản Mật khẩu</Heading>
              <div className="flex flex-col items-start self-stretch">
                <div className="h-[2px] w-[12%] bg-blue_gray-900_02" />
                <div className="mt-6 self-stretch">
                  <div className="flex items-start gap-[25px] md:flex-col">
                    <div className="flex w-full flex-col gap-4">
                      <div className="flex flex-col items-start gap-2">
                        <Text as="p">Tên</Text>
                        <Input
                          shape="round"
                          name="your_name"
                          placeholder={`Nhập tên`}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-2">
                        <Text as="p">Email</Text>
                        <Input
                          shape="round"
                          type="email"
                          name="email"
                          placeholder={`Nhập email`}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex w-[36%] items-center justify-between gap-5 md:w-full">
                        <Button
                          size="9xl"
                          shape="round"
                          className="min-w-[95px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                        >
                          Lưu
                        </Button>
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Hủy bỏ
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                      <div className="flex flex-col items-start gap-1.5 pt-[5px]">
                        <Text as="p" className="h-[21px] w-[22px]">
                          Họ
                        </Text>
                        <Input
                          shape="round"
                          name="your_name_one"
                          placeholder={`Nhập họ`}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-[7px]">
                        <Text as="p">Số điện thoại</Text>
                        <Input
                          shape="round"
                          name="your_name_two"
                          placeholder={`Nhập số điện thoại`}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex w-[49%] flex-col gap-4 md:w-full">
                  <div className="flex flex-col items-start gap-2">
                    <Text as="p">Mật khẩu gần đây</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your Name`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text as="p">Mật khẩu mới</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your Name`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text as="p">Xác nhận mật khẩu mới</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your Name`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex w-[36%] items-center justify-between gap-5 md:w-full">
                    <Button
                      size="10xl"
                      shape="round"
                      className="min-w-[99px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                    >
                      Lưu
                    </Button>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Hủy bỏ
                    </Text>
                  </div>
                </div>
                <div className="mt-12 flex w-[61%] flex-col gap-4 md:w-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-1">
                      <div className="flex w-full flex-col items-start">
                        <div className="flex items-start justify-between gap-5 self-stretch">
                          <Text as="p">SMS</Text>
                        </div>
                        <Text as="p" className="!font-normal">
                          Mã được gửi đến điện thoại di động của bạn qua phương
                          thức SMS
                        </Text>
                        <div className="mt-[22px] h-px w-full self-stretch bg-gray-200_01" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start">
                      <div className="flex items-start justify-between gap-5 self-stretch">
                        <Text as="p">Email</Text> 
                      </div>
                      <Text as="p" className="!font-normal">
                        Mã xác thực được gửi đến email của bạn
                      </Text>
                      <div className="mt-[22px] h-px w-full self-stretch bg-gray-200_01" />
                    </div>
                    <div className="flex flex-1 flex-col items-start">
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <Text as="p">Điện thoại</Text>
                      </div>
                      <Text as="p" className="!font-normal">
                        Nhân viên EZShop sẽ gọi điện thoại tới di động của bạn
                      </Text>
                      <div className="mt-[22px] h-px w-full self-stretch bg-gray-200_01" />
                    </div>
                  </div>
                  <div className="flex w-[29%] items-center justify-between gap-5 md:w-full">
                    <Button
                      size="10xl"
                      shape="round"
                      className="min-w-[99px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                    >
                      Lưu
                    </Button>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Hủy bỏ
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-20 flex-col self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
