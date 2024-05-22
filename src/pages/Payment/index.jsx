import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  CheckBox,
  Heading,
  Img,
  Text,
  TextArea,
  Input,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function PaymentPage() {
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
        <div className="container-md mt-[19px] flex flex-col gap-[66px] md:p-5 sm:gap-[33px]">
          <div className="flex flex-col items-start">
            <Text size="md" as="p" className="relative z-[1] !font-jost">
              <span className="font-bevietnampro text-blue_gray-900_02">
                Trang chủ / Áo thun / Áo nam / &nbsp;
              </span>
              <span className="font-bevietnampro text-blue_gray-600">
                Thanh toán
              </span>
            </Text>
            <Heading
              size="8xl"
              as="h1"
              className="relative mt-[-4px] self-end uppercase"
            >
              THANH TOÁN
            </Heading>
          </div>
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="flex w-[61%] flex-col items-start gap-[46px] md:w-full">
              <Text as="p" className="flex !font-normal">
                <span className="text-blue_gray-900_02">
                  Phản hồi của khách hàng?&nbsp;
                </span>
                <a
                  href="#"
                  className="font-bold text-blue_gray-900_02 underline"
                >
                  Đăng nhập
                </a>
              </Text>
              <div className="flex flex-col items-start gap-7 self-stretch">
                <Heading size="5xl" as="h2" className="uppercase">
                  Thông tin thanh toán
                </Heading>
                <div className="flex flex-col gap-6 self-stretch">
                  <div className="flex flex-col gap-[23px]">
                    <div className="flex gap-[30px] md:flex-col">
                      <div className="flex w-full flex-col items-start gap-[13px]">
                        <Heading
                          size="lg"
                          as="h3"
                          className="!font-semibold capitalize"
                        >
                          Họ*
                        </Heading>
                        <Input
                          shape="round"
                          name="your_name"
                          placeholder={`Ali `}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-[15px]">
                        <Heading
                          size="lg"
                          as="h4"
                          className="!font-semibold capitalize"
                        >
                          Tên*
                        </Heading>
                        <Input
                          size="2xl"
                          shape="round"
                          name="edittext"
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                      <Heading
                        size="lg"
                        as="h5"
                        className="!font-semibold capitalize"
                      >
                        Địa chỉ *
                      </Heading>
                      <Input
                        size="2xl"
                        shape="round"
                        name="edittext_one"
                        className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <Heading
                        size="lg"
                        as="h6"
                        className="!font-semibold capitalize"
                      >
                        Thành phố *
                      </Heading>
                      <Input
                        size="2xl"
                        shape="round"
                        name="edittext_two"
                        className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                      <Heading
                        size="lg"
                        as="p"
                        className="!font-semibold capitalize"
                      >
                        Quận/ Huyện *
                      </Heading>
                      <SelectBox
                        color="white_A700"
                        size="xl"
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_vector_blue_gray_900_02.svg"
                            alt="vector"
                            className="h-[5px] w-[8px]"
                          />
                        }
                        name="select"
                        placeholder={`Select`}
                        options={dropDownOptions}
                        className="gap-px self-stretch border border-solid border-gray-200_01 sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[15px]">
                      <Heading
                        size="lg"
                        as="p"
                        className="!font-semibold capitalize"
                      >
                        Mã ZIP *
                      </Heading>
                      <Input
                        size="2xl"
                        shape="round"
                        name="edittext_three"
                        className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                      />
                    </div>
                    <div className="flex gap-[30px] md:flex-col">
                      <div className="flex w-full flex-col items-start gap-3.5">
                        <Heading
                          size="lg"
                          as="p"
                          className="!font-semibold capitalize"
                        >
                          Số điện thoại *
                        </Heading>
                        <Input
                          shape="round"
                          name="your_name_one"
                          placeholder={`+90 `}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-3.5">
                        <Heading
                          size="lg"
                          as="p"
                          className="!font-semibold capitalize"
                        >
                          Địa chỉ Email*
                        </Heading>
                        <Input
                          size="2xl"
                          shape="round"
                          name="email"
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                    </div>
                  </div>
                  <CheckBox
                    name="tạotàikhoản"
                    label="Tạo tài khoản"
                    id="totikhon"
                    className="gap-3.5 p-px text-sm font-semibold capitalize text-blue_gray-900_02"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[29px] self-stretch">
                <Heading size="5xl" as="h5" className="uppercase">
                  Chi tiết về vận chuyển
                </Heading>
                <div className="flex flex-col gap-[18px] self-stretch">
                  <CheckBox
                    name="gửiđếnmộtđịachỉ"
                    label="Gửi đến một địa chỉ khác?"
                    id="ginmtach"
                    className="gap-3.5 p-px text-sm text-blue_gray-900_02"
                  />
                  <div className="flex flex-col items-start gap-3.5">
                    <Heading
                      size="lg"
                      as="p"
                      className="!font-semibold capitalize"
                    >
                      Order notes (optional)
                    </Heading>
                    <TextArea
                      size="lg"
                      shape="round"
                      name="group4073"
                      placeholder={`Nội dung ghi chú`}
                      className="self-stretch !border-gray-200_01 text-blue_gray-600 sm:py-5 sm:pr-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[32%] md:w-full">
              <div className="flex flex-col items-start gap-[13px] rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[68px] pl-[30px] pr-[29px] pt-[26px] md:pb-5 sm:p-5">
                <Heading size="5xl" as="h5" className="uppercase">
                  Đơn hàng của bạn
                </Heading>
                <div className="flex flex-col gap-7 self-stretch">
                  <div className="flex flex-wrap justify-between gap-5">
                    <Text size="md" as="p">
                      Áo thun nam cổ tròn
                    </Text>
                    <Heading
                      size="lg"
                      as="p"
                      className="flex !font-semibold capitalize"
                    >
                      <span className="text-lg text-blue_gray-900_02">
                        278.000
                      </span>
                      <a
                        href="#"
                        className="text-lg text-blue_gray-900_02 underline"
                      >
                        đ
                      </a>
                    </Heading>
                  </div>
                  <div className="flex flex-wrap justify-between gap-5">
                    <Text size="md" as="p">
                      Áo thun Nam màu trơn
                    </Text>
                    <Heading
                      size="lg"
                      as="p"
                      className="flex !font-semibold capitalize"
                    >
                      <span className="text-lg text-blue_gray-900_02">
                        148.000
                      </span>
                      <a
                        href="#"
                        className="text-lg text-blue_gray-900_02 underline"
                      >
                        đ
                      </a>
                    </Heading>
                  </div>
                  <div className="flex flex-col gap-[25px]">
                    <div className="flex flex-1">
                      <div className="flex w-full flex-col gap-2.5">
                        <div className="h-px bg-gray-200_01" />
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text size="md" as="p" className="self-start">
                            Sub Total
                          </Text>
                          <Heading
                            size="lg"
                            as="p"
                            className="flex self-end !font-semibold capitalize"
                          >
                            <span className="text-lg text-blue_gray-900_02">
                              1278.000
                            </span>
                            <a
                              href="#"
                              className="text-lg text-blue_gray-900_02 underline"
                            >
                              đ
                            </a>
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1">
                      <div className="flex w-full flex-col gap-3">
                        <div className="h-px bg-gray-200_01" />
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text size="md" as="p" className="self-start">
                            Shipping
                          </Text>
                          <Heading
                            size="lg"
                            as="p"
                            className="flex !font-semibold capitalize"
                          >
                            <span className="text-lg text-blue_gray-900_02">
                              28.000
                            </span>
                            <a
                              href="#"
                              className="text-lg text-blue_gray-900_02 underline"
                            >
                              đ
                            </a>
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2.5">
                      <div className="h-px bg-gray-200_01" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text size="md" as="p" className="self-start">
                          Total
                        </Text>
                        <Heading
                          size="lg"
                          as="p"
                          className="flex self-end !font-semibold capitalize"
                        >
                          <span className="text-lg text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="text-lg text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px] flex flex-col gap-2">
                <div className="flex flex-col items-start gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 px-[30px] pb-[37px] pt-[30px] sm:p-5">
                  <Heading size="5xl" as="h5" className="uppercase">
                    Thông tin thanh toán
                  </Heading>
                  <div className="flex flex-col items-start gap-[17px] self-stretch">
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <Heading as="h6">Chuyển khoản trực tiếp</Heading>
                      <Text
                        size="md"
                        as="p"
                        className="w-full leading-[17px] !text-blue_gray-600"
                      >
                        Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng
                        của chúng tôi. Vui lòng sử dụng ID đơn hàng của bạn làm
                        tài liệu tham khảo thanh toán.
                      </Text>
                      <div className="flex flex-col items-start gap-2 self-stretch">
                        <div className="flex gap-2.5">
                          <Img
                            src="images/img_television_gray_100_04.svg"
                            alt="television"
                            className="h-[24px]"
                          />
                          <Img
                            src="images/img_close_gray_100_04.svg"
                            alt="close"
                            className="h-[24px]"
                          />
                          <Img
                            src="images/img_3.svg"
                            alt="three"
                            className="h-[24px]"
                          />
                          <Img
                            src="images/img_4.png"
                            alt="four"
                            className="h-[24px] object-cover"
                          />
                          <Img
                            src="images/img_television_gray_100_04_24x38.svg"
                            alt="television"
                            className="h-[24px]"
                          />
                          <Img
                            src="images/img_thumbs_up.svg"
                            alt="thumbsup"
                            className="h-[24px]"
                          />
                        </div>
                        <div className="h-px w-full self-stretch bg-gray-200_01" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 self-stretch">
                      <Heading as="h6">Kiểm tra thanh toán</Heading>
                      <div className="h-px w-full self-stretch bg-gray-200_01" />
                    </div>
                    <Heading as="h6">Thanh toán khi giao hàng</Heading>
                  </div>
                </div>
                <CheckBox
                  name="dữliệucánhâncủa"
                  label="Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn trên trang web."
                  id="dliucnhnca"
                  className="gap-3.5 text-left text-[15px] leading-[22px] text-blue_gray-900_02"
                />
              </div>
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                <Button
                  size="10xl"
                  shape="round"
                  className="mt-[55px] w-full border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                >
                  Thanh Toán
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[70px] flex-col self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
