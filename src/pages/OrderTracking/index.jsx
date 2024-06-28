import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img, SelectBox } from "../../components";
export default function OrderTrackingPage() {

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

        <div className="mt-[19px] flex w-[73%] flex-col items-start gap-[31px] md:w-full md:p-5">
          <Text size="md" as="p" className="!font-jost">
            <span className="font-bevietnampro text-blue_gray-900_02">
              Trang chủ / Áo thun / Áo nam / &nbsp;
            </span>
            <span className="font-bevietnampro text-blue_gray-600">
              Thanh toán
            </span>
          </Text>
          <div className="container-xs flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[49%] justify-center rounded-md bg-deep_orange-100 pt-[91px] md:w-full md:pt-5">
              <Img
                src="images/img_online_delivery.png"
                alt="onlinedelivery"
                className="h-[559px] w-full rounded-md object-cover md:h-auto"
              />
            </div>
            <div className="flex w-[41%] flex-col gap-12 md:w-full">
              <div className="flex flex-col items-start gap-[18px]">
                <Heading size="8xl" as="h1" className="uppercase">
                  THEO DÕI ĐƠN HÀNG
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="w-full leading-[150%] !text-blue_gray-600"
                >
                  Để theo dõi đơn hàng của bạn, vui lòng nhập Mã đơn hàng của
                  bạn vào ô bên dưới và nhấn nút &quot;Theo dõi&quot;. Điều này
                  đã được trao cho bạn trên biên nhận của bạn và trong email xác
                  nhận mà lẽ ra bạn phải nhận được.
                </Text>
              </div>
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col items-start gap-[7px] self-stretch pt-1">
                  <Text as="p">Mã đơn hàng</Text>
                  <Input
                    size="2xl"
                    shape="round"
                    name="edittext"
                    className="self-stretch border border-solid border-green-A700_02 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <Text as="p">Email thanh toán</Text>
                  <Input
                    size="2xl"
                    shape="round"
                    name="email"
                    className="self-stretch border border-solid border-green-A700_02 sm:pr-5"
                  />
                </div>
                {/* <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                > */}
                  <Button
                    size="10xl"
                    shape="round"
                    className="min-w-[136px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                  >
                    Kiểm tra
                  </Button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
