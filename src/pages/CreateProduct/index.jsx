import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Radio,
  RadioGroup,
  Heading,
  TextArea,
  SelectBox,
  Img,
  Input,
} from "../../components";
import CreateProductSidebar from "../../components/CreateProductSidebar";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function CreateProductPage() {
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
        <Header1 />
        <div className="container-md mt-[41px] flex items-start justify-between gap-5 pr-[5px] md:flex-col md:p-5">
          <CreateProductSidebar />
          <div className="flex w-[80%] flex-col gap-12 md:w-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <Input
                  color="green_50_01"
                  size="lg"
                  shape="square"
                  name="heading_one"
                  placeholder={`HÌNH ẢNH SẢN PHẨM`}
                  className="font-semibold sm:pr-5"
                />
                <div className="flex flex-col items-center gap-[23px] border border-dashed border-gray-300_01 bg-white-A700 px-14 py-[59px] md:p-5">
                  <Img
                    src="images/img_twitter.svg"
                    alt="twitter"
                    className="h-[48px] w-[48px] rounded-[5px]"
                  />
                  <div className="flex flex-col items-start gap-[9px]">
                    <Heading
                      as="h1"
                      className="ml-[75px] !text-gray-900_01 md:ml-0"
                    >
                      Thả tệp vào đây hoặc nhấp để tải lên
                    </Heading>
                    <Text size="md" as="p" className="!text-gray-600">
                      Đây chỉ là một dropzone demo. Các tệp đã chọn không thực
                      sự được tải lên
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Input
                  color="green_50_01"
                  size="lg"
                  shape="square"
                  name="heading_three"
                  placeholder={`MÔ TẢ CHUNG`}
                  className="font-semibold sm:pr-5"
                />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h2" className="!text-gray-900_01">
                      Tiêu đề
                    </Heading>
                    <Input
                      shape="round"
                      name="input_one"
                      placeholder={`Nhập tiêu đề`}
                      className="self-stretch border border-solid border-gray-300_01 !text-gray-600 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[9px]">
                    <Heading as="h3" className="!text-gray-900_01">
                      Từ khóa
                    </Heading>
                    <Input
                      shape="round"
                      name="input_three"
                      placeholder={`Nhập từ khóa`}
                      className="self-stretch border border-solid border-gray-300_01 !text-gray-600 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h4" className="!text-gray-900_01">
                      Mô tả
                    </Heading>
                    <TextArea
                      size="sm"
                      variant="tarGREY2"
                      shape="round"
                      name="input_five"
                      placeholder={`Nhập mô tả`}
                      className="self-stretch !border-gray-300_01 text-gray-600 sm:pb-5 sm:pr-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <Input
                color="green_50_01"
                size="lg"
                shape="square"
                name="heading_five"
                placeholder={`DỮ LIỆU CHUNG`}
                className="self-stretch font-manrope font-bold sm:pr-5"
              />
              <div className="mt-4 flex gap-7 self-stretch md:flex-col">
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-[9px]">
                      <Heading as="h5">Tên sản phẩm</Heading>
                      <Input
                        shape="round"
                        name="input_seven"
                        placeholder={`Áo thun`}
                        className="self-stretch border border-solid border-gray-600 sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[7px]">
                      <Heading as="h6">Danh mục</Heading>
                      <SelectBox
                        color="white_A700"
                        size="xl"
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_600.svg"
                            alt="arrow_down"
                            className="h-[20px] w-[20px]"
                          />
                        }
                        name="chn"
                        placeholder={`Chọn`}
                        options={dropDownOptions}
                        className="gap-px self-stretch border border-solid border-gray-300_01 sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[9px]">
                    <Heading as="h6">Giới tính</Heading>
                    <SelectBox
                      color="white_A700"
                      size="xl"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_600.svg"
                          alt="arrow_down"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      name="chn_one"
                      placeholder={`Chọn`}
                      options={dropDownOptions}
                      className="gap-px self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h6">Liên quan</Heading>
                    <Input
                      shape="round"
                      name="input_nine"
                      placeholder={`Màu xanh, áo phông`}
                      className="self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h6">Giá cả</Heading>
                    <Input
                      shape="round"
                      name="input_eleven"
                      placeholder={`Nhập giá cả`}
                      className="self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[9px]">
                    <Heading as="h6">Kích thước</Heading>
                    <SelectBox
                      color="white_A700"
                      size="xl"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_600.svg"
                          alt="arrow_down"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      name="chn_two"
                      placeholder={`Chọn`}
                      options={dropDownOptions}
                      className="gap-px self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    />
                  </div>
                </div>
              </div>
              <Heading as="h6" className="mt-[17px] !text-gray-900_01">
                Chi tiết sản phẩm
              </Heading>
              <TextArea
                size="md"
                variant="tarGREY2"
                shape="round"
                name="input_thirteen"
                placeholder={`Viết điều gì đó về mô tả sản phẩm`}
                className="mt-[9px] self-stretch !border-gray-300_01 text-blue_gray-600 sm:pb-5 sm:pr-5"
              />
              <Heading as="h6" className="mt-[17px] !text-gray-900_01">
                Tóm tắt sản phẩm
              </Heading>
              <TextArea
                size="xs"
                variant="tarGREY2"
                shape="round"
                name="input_fifteen"
                placeholder={`Nhập tóm tắt`}
                className="mt-[9px] self-stretch !border-gray-300_01 text-blue_gray-600 sm:pb-5 sm:pr-5"
              />
              <div className="mt-4 flex flex-col items-start gap-[7px] self-stretch">
                <Heading as="h6" className="!text-gray-900_01">
                  Bình luận
                </Heading>
                <TextArea
                  size="xs"
                  variant="tarGREY2"
                  shape="round"
                  name="input_seventeen"
                  placeholder={`Nhập bình luận`}
                  className="self-stretch !border-gray-300_01 text-blue_gray-600 sm:pb-5 sm:pr-5"
                />
              </div>
              <div className="mt-4 flex w-[54%] flex-col items-start gap-[7px] md:w-full">
                <Heading as="h6" className="!text-gray-900_01">
                  Tình trạng
                </Heading>
                <RadioGroup name="tnhtrng" className="flex">
                  <Radio
                    value="online"
                    label="Online"
                    className="w-full gap-2 p-px text-sm text-gray-900_01"
                  />
                  <Radio
                    value="offline"
                    label="Offline"
                    className="ml-7 w-full gap-2 p-px text-sm text-gray-900_01"
                  />
                  <Radio
                    value="nhp"
                    label="Nháp"
                    className="ml-7 w-full py-px text-sm text-gray-900_01"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                <Button
                  size="10xl"
                  shape="round"
                  className="min-w-[138px] border border-solid border-green-A700_02 !text-green-50_01 shadow-sm sm:px-5"
                >
                  Đăng tải
                </Button>
              </a>
              <Text as="p" className="!font-normal !text-blue_gray-600">
                Hủy bỏ
              </Text>
            </div>
          </div>
        </div>
        <Footer1 className="mt-20 justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
