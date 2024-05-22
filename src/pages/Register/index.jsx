import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[71px] bg-white-A700 md:gap-[53px] sm:gap-[35px]">
        <Header1 />
        <div className="container-md pl-[479px] pr-[382px] md:p-5 md:px-5">
          <div className="relative h-[848px]">
            <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[82%] flex-col items-center justify-center rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[65px] pl-[41px] pr-10 pt-[131px] shadow-xs md:py-5 md:pl-5 sm:p-5">
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <Heading as="h1">Tên</Heading>
                <Input
                  shape="round"
                  name="your_name"
                  placeholder={`Ali Tufan`}
                  className="self-stretch border border-solid border-blue_gray-900_02 !text-blue_gray-900_02 shadow-md sm:pr-5"
                />
              </div>
              <div className="mt-5 flex flex-col items-start gap-[11px] self-stretch">
                <Heading as="h2">Tài khoản</Heading>
                <Input
                  shape="round"
                  name="your_name_one"
                  placeholder={`alitfn`}
                  className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                />
              </div>
              <div className="mt-5 flex flex-col items-start gap-2.5 self-stretch">
                <Heading as="h3">Email</Heading>
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`creativelayers088@gmail.com`}
                  className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                />
              </div>
              <div className="mt-5 flex flex-col items-start gap-2.5 self-stretch">
                <Heading as="h4">Mật khẩu</Heading>
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder={`******************`}
                  className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                />
              </div>
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                <Button
                  size="10xl"
                  shape="round"
                  className="mt-5 w-full border border-solid border-green-A700_02 font-semibold shadow-sm sm:px-5"
                >
                  Tạo tài khoản
                </Button>
              </a>
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                <Text size="md" as="p" className="mt-5">
                  <span className="text-blue_gray-900_02">
                    Bạn đã có tài khoản?&nbsp;
                  </span>
                  <span className="text-green-A700_02">Đăng nhập</span>
                </Text>
              </a>
              <div className="mt-[27px] flex w-[13%] items-start md:w-full">
                <div className="h-[40px] w-[40px] rounded-[20px] bg-white-A700" />
                <Text size="md" as="p" className="relative ml-[-26px] mt-[9px]">
                  hoặc
                </Text>
              </div>
              <div className="mt-[15px] flex gap-4 self-stretch">
                <div className="flex w-full justify-center rounded-lg border border-solid border-blue-700_01 bg-white-A700 px-[13px] pb-3.5 pt-[13px]">
                  <Img
                    src="images/img_facebook_blue_700_01.svg"
                    alt="facebook"
                    className="h-[17px]"
                  />
                </div>
                <div className="flex w-full justify-center rounded-lg border border-solid border-red-700 bg-white-A700 px-3.5 pb-[13px] pt-3.5">
                  <Img
                    src="images/img_contrast.svg"
                    alt="contrast"
                    className="h-[17px]"
                  />
                </div>
                <div className="flex w-full justify-center rounded-lg border border-solid border-blue-600 bg-white-A700 px-[13px] pb-3 pt-[13px]">
                  <Img
                    src="images/img_trash.svg"
                    alt="trash"
                    className="h-[19px]"
                  />
                </div>
                <div className="flex w-full justify-center rounded-lg border border-solid border-blue_gray-900_02 bg-white-A700 px-[11px] pb-3 pt-[11px]">
                  <Img
                    src="images/img_facebook.svg"
                    alt="close"
                    className="h-[21px]"
                  />
                </div>
              </div>
            </div>
            <Heading
              size="7xl"
              as="h5"
              className="absolute right-[160.00px] top-[5%] m-auto uppercase"
            >
              Tạo tài khoản
            </Heading>
          </div>
        </div>
        <Footer1 className="justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
