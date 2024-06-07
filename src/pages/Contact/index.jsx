import Footer1 from "../../components/Footer1";
import {
  Button,
  TextArea,
  Heading,
  Input,
  Img,
  Text,
  GoogleMap,
} from "../../components";
import ContactOne from "../../components/ContactOne";
import React from "react";
import { Helmet } from "react-helmet";
import MegaMenu1 from "../../components/MegaMenu1";
export default function ContactPage() {
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
      <div className="w-full bg-white-A700">
        <div className="mt-[18px] flex flex-col items-center">
          <div className="container-md flex flex-col items-center md:p-5">
            <div className="flex flex-wrap gap-[7px] self-start">
              <Text size="md" as="p">
                Trang chủ
              </Text>
              <Text size="md" as="p" className="self-start">
                /
              </Text>
              <Text size="md" as="p" className="!text-blue_gray-600">
                Liên hệ
              </Text>
            </div>
          </div>
          <GoogleMap
            showMarker={false}
            className="mt-[18px] h-[600px] self-stretch"
          />
          <div className="container-md mt-[74px] flex flex-col gap-[55px] md:p-5 sm:gap-[27px]">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[32%] flex-col gap-[62px] md:w-full sm:gap-[31px]">
                <div className="flex flex-col gap-1.5">
                  <Heading
                    size="5xl"
                    as="h1"
                    className="w-[59%] uppercase leading-[150%] md:w-full"
                  >
                    Liên hệ với chúng tôi ngay hôm nay
                  </Heading>
                  <Text as="p" className="!font-jost !font-normal leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam purus sit amet luctus venenatis lectus.
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-7">
                  <div className="flex flex-col items-end">
                    <div className="flex items-start gap-[25px] self-start">
                      <Img
                        src="images/img_phone_call_1.svg"
                        alt="phonecallone"
                        className="h-[30px] w-[30px]"
                      />
                      <Heading as="h2">Điện thoại Hotline</Heading>
                    </div>
                    <Text as="p" className="!font-normal">
                      +(1) 123 456 7890
                    </Text>
                  </div>
                  <div className="flex items-start gap-[25px]">
                    <Img
                      src="images/img_email_1.svg"
                      alt="emailone"
                      className="h-[30px] w-[30px]"
                    />
                    <div className="flex flex-col gap-[9px]">
                      <Heading as="h3">Bạn cần trợ giúp?</Heading>
                      <Text size="lg" as="p" className="!font-jost">
                        support@ezshop.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text size="2xl" as="p" className="!font-jost">
                      Follow us
                    </Text>
                    <div className="flex gap-[19px]">
                      <Img
                        src="images/img_facebook.svg"
                        alt="close"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_eleven"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_thirteen"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_fifteen"
                        className="h-[17px] self-start"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[49%] flex-col items-start gap-[25px] md:w-full">
                <div className="flex gap-7 self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <Heading as="h4">Tên</Heading>
                    <Input
                      shape="round"
                      name="your_name"
                      placeholder={`Ali Tufan`}
                      className="self-stretch border border-solid border-blue_gray-900_02 !text-blue_gray-900_02 shadow-md sm:pr-5"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <Heading as="h5">Email</Heading>
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Nhập Email`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[11px] self-stretch">
                  <Heading as="h6">Tiêu đề</Heading>
                  <Input
                    shape="round"
                    name="your_name_one"
                    placeholder={`Ali Tufan`}
                    className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col items-start gap-[9px] self-stretch">
                  <Heading as="h6">Nội dung</Heading>
                  <TextArea
                    shape="round"
                    name="group4013"
                    placeholder={`Nhập nội dung`}
                    className="self-stretch !border-gray-200_01 text-blue_gray-600 sm:py-5 sm:pr-5"
                  />
                </div>
                <Button
                  size="10xl"
                  shape="round"
                  className="min-w-[166px] border border-solid border-green-A700_02 font-semibold shadow-sm sm:px-5"
                >
                  Gửi tin nhắn
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[60px] sm:gap-[30px]">
              <div className="h-px bg-gray-200_01" />
              <div className="flex gap-[126px] md:flex-col">
                {[...Array(4)].map((d, index) => (
                  <ContactOne key={"items" + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
