import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Input, CheckBox, Button } from "../../components";
import Sidebar1 from "../../components/Sidebar1";
export default function MailboxPage() {
  const [searchBarValue44, setSearchBarValue44] = React.useState("");
  const [searchBarValue45, setSearchBarValue45] = React.useState("");
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700 px-5 pb-[35px] pt-5 sm:pb-5">
        <div className="flex flex-col gap-[39px]">
          <header>
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[8%] items-center justify-center gap-[30px] md:w-full">
                <a href="#">
                  <Img
                    src="images/img_television_gray_900_03.svg"
                    alt="television"
                    className="h-[18px]"
                  />
                </a>
                <Img
                  src="images/img_header_logo.png"
                  alt="headerlogo"
                  className="h-[36px] w-[94px] object-contain"
                />
              </div>
              <div className="flex w-[82%] justify-between gap-5 md:w-full md:flex-col">
                <Input
                  name="search"
                  placeholder={`Tìm kiếm`}
                  value={searchBarValue45}
                  onChange={(e) => setSearchBarValue45(e)}
                  suffix={
                    searchBarValue45?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue45("")}
                        fillColor="#041e42ff"
                      />
                    ) : (
                      <Img
                        src="images/img_search_1_blue_gray_900_02.svg"
                        alt="search 1"
                        className="h-[20px] w-[20px] cursor-pointer"
                      />
                    )
                  }
                  className="h-[50px] w-[26%] gap-[35px] rounded-md border border-solid border-gray-200_01 bg-white-A700 pl-5 pr-3.5 text-sm text-blue_gray-600 md:w-full"
                />
                <div className="flex gap-[30px]">
                  <div className="flex items-center">
                    <a href="#">
                      <Button className="h-[50px] w-[50px] rounded-[16px] bg-gray-100_05 px-3">
                        <Img src="images/img_trophy.svg" />
                      </Button>
                    </a>
                    <a href="#">
                      <Img
                        src="images/img_mail_inbox_app_1.svg"
                        alt="mailinboxapp"
                        className="ml-7 h-[20px] w-[20px]"
                      />
                    </a>
                    <a href="#">
                      <Img
                        src="images/img_notification_2.svg"
                        alt="notificationtwo"
                        className="ml-10 h-[20px] w-[20px]"
                      />
                    </a>
                  </div>
                  <a href="#">
                    <Img
                      src="images/img_image_119.png"
                      alt="image119"
                      className="h-[50px] w-[50px] rounded-[16px] object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <Sidebar1 />
            <div className="flex w-[82%] justify-center md:w-full">
              <div className="flex w-full flex-col items-start">
                <Heading size="8xl" as="h1" className="uppercase">
                  Hộp thư đến
                </Heading>
                <div className="mt-[11px] flex gap-9 self-stretch md:flex-col">
                  <div className="flex w-[26%] flex-col gap-[26px] rounded-[14px] border border-solid border-gray-400 bg-white-A700 px-[27px] pb-[146px] pt-[27px] md:w-full md:pb-5 sm:p-5">
                    <Button
                      color="green_A700_e5"
                      size="9xl"
                      shape="round"
                      className="w-full !rounded-lg font-nunitosans font-bold tracking-[-0.05px] sm:px-5"
                    >
                      + Soạn thư mới
                    </Button>
                    <div className="flex flex-col gap-[50px]">
                      <div className="flex flex-col items-start gap-[22px]">
                        <Heading
                          as="h2"
                          className="!font-nunitosans !font-bold tracking-[-0.06px]"
                        >
                          Email của tôi
                        </Heading>
                        <div className="flex flex-col items-center gap-3.5 self-stretch">
                          <div className="flex justify-between gap-5 self-stretch rounded bg-green-A700_21 py-[15px] pl-[21px] pr-[35px] sm:px-5">
                            <div className="flex items-center gap-4">
                              <div className="flex self-end rounded-[1px] border-[0.5px] border-solid border-green-A700_02 px-px pb-1.5 pt-px">
                                <Img
                                  src="images/img_path.svg"
                                  alt="path"
                                  className="h-[5px]"
                                />
                              </div>
                              <Text
                                size="md"
                                as="p"
                                className="!text-green-A700_02"
                              >
                                Hộp thư đến
                              </Text>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="!text-green-A700_cc"
                            >
                              1253
                            </Text>
                          </div>
                          <div className="flex w-[87%] flex-col gap-[30px] pt-12 md:w-full md:pt-5">
                            <div className="flex flex-1 items-center justify-between gap-5">
                              <div className="flex items-center gap-4 self-end">
                                <Img
                                  src="images/img_save.svg"
                                  alt="đã_gửi"
                                  className="h-[16px] self-start"
                                />
                                <Text size="md" as="p">
                                  Đã gửi
                                </Text>
                              </div>
                              <Heading
                                size="lg"
                                as="h3"
                                className="self-start !font-nunitosans !font-semibold !text-blue_gray-900_99"
                              >
                                24,532
                              </Heading>
                            </div>
                            <div className="flex flex-1 items-center justify-between gap-5">
                              <div className="flex items-center gap-4">
                                <Img
                                  src="images/img_signal.svg"
                                  alt="signal"
                                  className="h-[17px] self-end"
                                />
                                <Text size="md" as="p" className="self-start">
                                  Đánh dấu sao
                                </Text>
                              </div>
                              <Text
                                size="md"
                                as="p"
                                className="self-end !text-blue_gray-900_99"
                              >
                                245
                              </Text>
                            </div>
                            <div className="flex flex-1 items-center gap-4">
                              <Img
                                src="images/img_edit.svg"
                                alt="edit"
                                className="h-[17px] self-end"
                              />
                              <div className="flex flex-1 flex-wrap justify-between gap-5">
                                <Text size="md" as="p">
                                  Draft
                                </Text>
                                <Text
                                  size="md"
                                  as="p"
                                  className="h-[18px] w-[19px] !text-blue_gray-900_99"
                                >
                                  09
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 items-center gap-[17px]">
                              <Img
                                src="images/img_video_camera.svg"
                                alt="videocamera"
                                className="h-[17px]"
                              />
                              <div className="flex flex-1 flex-wrap justify-between gap-5">
                                <Text size="md" as="p">
                                  Làm phiền
                                </Text>
                                <Text
                                  size="md"
                                  as="p"
                                  className="!text-blue_gray-900_99"
                                >
                                  14
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 justify-between gap-5">
                              <div className="flex items-center gap-4 self-end">
                                <Img
                                  src="images/img_laptop.svg"
                                  alt="laptop"
                                  className="h-[17px] self-start"
                                />
                                <Text size="md" as="p">
                                  Quan trọng
                                </Text>
                              </div>
                              <Text
                                size="md"
                                as="p"
                                className="self-start !text-blue_gray-900_99"
                              >
                                18
                              </Text>
                            </div>
                            <div className="flex flex-1 justify-between gap-5">
                              <div className="flex items-center gap-4">
                                <Img
                                  src="images/img_thumbs_up_blue_gray_900_02.svg"
                                  alt="thumbsup"
                                  className="h-[16px]"
                                />
                                <Text size="md" as="p">
                                  Rác
                                </Text>
                              </div>
                              <Text
                                size="md"
                                as="p"
                                className="!text-blue_gray-900_99"
                              >
                                9
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[53%] flex-col items-start gap-8 md:w-full">
                        <div className="flex w-[62%] flex-col items-end gap-[30px] md:w-full">
                          <Heading
                            as="h4"
                            className="self-start !font-nunitosans !font-bold tracking-[-0.06px]"
                          >
                            Nhãn dán
                          </Heading>
                          <CheckBox
                            name="cơbản"
                            label="Cơ bản"
                            id="cbn"
                            className="gap-[17px] p-px font-nunitosans text-sm font-semibold tracking-[-0.05px] text-blue_gray-900_02"
                          />
                          <CheckBox
                            name="xãhội"
                            label="Xã hội"
                            id="xhi"
                            className="mr-[5px] gap-[17px] font-nunitosans text-sm font-semibold tracking-[-0.05px] text-blue_gray-900_02 md:mr-0"
                          />
                          <CheckBox
                            name="việc"
                            label="Việc"
                            id="vic"
                            className="gap-[17px] self-center font-nunitosans text-sm font-semibold tracking-[-0.05px] text-blue_gray-900_02"
                          />
                          <CheckBox
                            name="bạnbè"
                            label="Bạn bè"
                            id="bnb"
                            className="gap-[17px] font-nunitosans text-sm font-semibold tracking-[-0.05px] text-blue_gray-900_02"
                          />
                        </div>
                        <div className="flex flex-wrap items-center gap-[22px] self-end">
                          <Heading
                            size="4xl"
                            as="h5"
                            className="!font-nunitosans tracking-[-0.07px] !text-blue_gray-900_7f"
                          >
                            +
                          </Heading>
                          <Heading
                            size="lg"
                            as="h6"
                            className="!font-nunitosans !font-semibold tracking-[-0.05px] !text-blue_gray-900_7f"
                          >
                            Tạo nhãn dán mới
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-[59px] rounded-[14px] border border-solid border-gray-400 bg-white-A700 pb-[21px] pt-[27px] md:self-stretch sm:gap-[29px] sm:py-5">
                    <div className="flex w-[94%] justify-between gap-5 md:w-full md:flex-col md:p-5">
                      <Input
                        color="gray_100_04"
                        size="md"
                        name="search"
                        placeholder={`Tìm kiếm`}
                        value={searchBarValue44}
                        onChange={(e) => setSearchBarValue44(e)}
                        prefix={
                          <Img
                            src="images/img_rewind.svg"
                            alt="rewind"
                            className="h-[17px] w-[20px] cursor-pointer"
                          />
                        }
                        suffix={
                          searchBarValue44?.length > 0 ? (
                            <CloseSVG
                              onClick={() => setSearchBarValue44("")}
                              height={17}
                              fillColor="#000000ff"
                            />
                          ) : null
                        }
                        className="w-[42%] gap-[17px] rounded-[20px] border border-solid border-blue_gray-100_03 text-blue_gray-900_99 md:w-full sm:px-5"
                      />
                      <Img
                        src="images/img_other_action.svg"
                        alt="otheraction"
                        className="h-[45px] w-[17%] md:w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[22px] self-stretch">
                      <div className="flex flex-1">
                        <div className="flex w-full flex-col items-center gap-5">
                          <div className="flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[18%] items-center justify-between gap-5 md:w-full">
                              <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                              <Img
                                src="images/img_signal_blue_gray_600.svg"
                                alt="jullu_jalal"
                                className="h-[18px] self-start"
                              />
                              <Heading as="h6">Jullu Jalal</Heading>
                            </div>
                            <div className="flex items-center gap-[26px] sm:flex-col">
                              <div className="flex rounded-[3px] bg-teal-A700_33 px-2 pt-2">
                                <Text
                                  size="md"
                                  as="p"
                                  className="!text-teal-A700"
                                >
                                  Primary
                                </Text>
                              </div>
                              <Text
                                as="p"
                                className="!font-normal !text-blue_gray-900_e5"
                              >
                                Chương trình Cử nhân Thương mại của chúng tôi
                                được ACBSP công nhận.
                              </Text>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-900_b2"
                            >
                              8:38 AM
                            </Text>
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center gap-5">
                        <div className="flex w-[93%] items-start justify-between gap-5 md:w-full md:flex-col">
                          <div className="flex w-[62%] items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="flex w-[38%] items-center justify-between gap-5 self-end sm:w-full">
                              <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                              <Img
                                src="images/img_signal_blue_gray_600.svg"
                                alt="signal"
                                className="h-[18px] self-start"
                              />
                              <Heading as="h6">Minerva Barnett</Heading>
                            </div>
                            <div className="flex items-start gap-[26px]">
                              <div className="flex">
                                <Text
                                  size="md"
                                  as="p"
                                  className="flex items-center justify-center rounded-[3px] bg-deep_orange-300_33 px-[22px] pb-px pt-1.5 !text-deep_orange-300 sm:px-5"
                                >
                                  Work
                                </Text>
                              </div>
                              <Text
                                as="p"
                                className="!font-normal !text-blue_gray-900_e5"
                              >
                                Luôn nhìn theo hướng tích cực
                              </Text>
                            </div>
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="!text-blue_gray-900_b2"
                          >
                            8:13 AM
                          </Text>
                        </div>
                        <div className="h-px w-full self-stretch bg-gray-300" />
                      </div>
                      <div className="flex flex-1 flex-col gap-5">
                        <div className="flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
                          <div className="flex w-[58%] items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="flex w-[34%] items-center justify-between gap-5 self-end sm:w-full">
                              <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                              <Img
                                src="images/img_signal_blue_gray_600.svg"
                                alt="peter_lewis"
                                className="h-[18px] self-start"
                              />
                              <Heading as="h6">Peter Lewis</Heading>
                            </div>
                            <div className="flex items-center gap-[26px]">
                              <div className="flex rounded-[3px] bg-purple-A200_33 px-2 pt-2">
                                <Text
                                  size="md"
                                  as="p"
                                  className="!text-purple-700"
                                >
                                  Bạn bè
                                </Text>
                              </div>
                              <Text
                                as="p"
                                className="self-end !font-normal !text-blue_gray-900_e5"
                              >
                                Cho thuê nhà nghỉ dưỡng
                              </Text>
                            </div>
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="!text-blue_gray-900_b2"
                          >
                            7:52 PM
                          </Text>
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <Text
                          size="md"
                          as="p"
                          className="ml-[333px] flex items-center justify-center rounded-[3px] bg-deep_orange-300_33 px-[22px] pb-px pt-1.5 !text-deep_orange-300 md:ml-0 sm:px-5"
                        >
                          Work
                        </Text>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1 flex-col items-center gap-5">
                          <div className="flex w-[94%] items-center gap-10 md:w-full md:flex-col">
                            <div className="flex w-[7%] justify-between gap-5 self-end md:w-full">
                              <div className="h-[18px] w-[21px] rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                              <Img
                                src="images/img_signal_orange_a100.svg"
                                alt="signal"
                                className="h-[18px]"
                              />
                            </div>
                            <div className="flex flex-1 items-start justify-between gap-5 md:flex-col md:self-stretch">
                              <Heading as="h6">Anthony Briggs</Heading>
                              <div className="mb-[5px] flex w-[68%] flex-wrap items-center justify-between gap-5 md:w-full">
                                <Text
                                  as="p"
                                  className="!font-normal !text-blue_gray-900_e5"
                                >
                                  Rao vặt miễn phí sử dụng chúng để quảng cáo
                                  nội dung của bạn trực tuyến
                                </Text>
                                <Text
                                  size="md"
                                  as="p"
                                  className="self-end !text-blue_gray-900_b2"
                                >
                                  7:52 PM
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300" />
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1">
                          <div className="flex w-full flex-col items-center gap-5">
                            <div className="flex w-[93%] items-center justify-between gap-5 md:w-full md:flex-col">
                              <div className="flex w-[23%] items-center justify-between gap-5 self-end md:w-full">
                                <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                                <Img
                                  src="images/img_signal_blue_gray_600.svg"
                                  alt="signal"
                                  className="h-[18px] self-start"
                                />
                                <Heading as="h6">Clifford Morgan</Heading>
                              </div>
                              <div className="flex w-[70%] items-center justify-center self-start md:w-full md:flex-col">
                                <div className="flex h-[25px] w-[12%] items-center justify-center bg-[url(/public/images/img_label_social.svg)] bg-cover bg-no-repeat px-[5px] pt-[5px] md:h-auto md:w-full">
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="!text-blue-A200"
                                  >
                                    Xã hội
                                  </Text>
                                </div>
                                <Text
                                  as="p"
                                  className="ml-[26px] !font-normal !text-blue_gray-900_e5 md:ml-0"
                                >
                                  Nâng cao tiềm năng thương hiệu của bạn với
                                  những quả bóng quảng cáo
                                </Text>
                                <Text
                                  size="md"
                                  as="p"
                                  className="ml-14 self-start !text-blue_gray-900_b2 md:ml-0"
                                >
                                  4:13 PM
                                </Text>
                              </div>
                            </div>
                            <div className="h-px w-full self-stretch bg-gray-300" />
                          </div>
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1 flex-col items-center gap-5">
                          <div className="flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[62%] items-center justify-between gap-5 md:w-full sm:flex-col">
                              <div className="flex w-[38%] items-center justify-between gap-5 self-end sm:w-full">
                                <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                                <Img
                                  src="images/img_signal_blue_gray_600.svg"
                                  alt="signal"
                                  className="h-[18px] self-start"
                                />
                                <Heading as="h6">Cecilia Webster</Heading>
                              </div>
                              <div className="flex items-center gap-[26px]">
                                <div className="flex rounded-[3px] bg-purple-A200_33 px-2 pt-2">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="!text-purple-A200"
                                  >
                                    Bạn bè
                                  </Text>
                                </div>
                                <Text
                                  as="p"
                                  className="self-end !font-normal !text-blue_gray-900_e5"
                                >
                                  Luôn nhìn theo hướng tích cực
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-900_b2"
                            >
                              3:52 PM
                            </Text>
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300" />
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1">
                          <div className="flex w-full flex-col items-start">
                            <Text
                              size="md"
                              as="p"
                              className="ml-[334px] flex items-center justify-center rounded-[3px] bg-deep_orange-300_33 px-[22px] pb-px pt-1.5 !text-deep_orange-300 md:ml-0 sm:px-5"
                            >
                              Work
                            </Text>
                            <div className="relative mt-[-23px] flex flex-col items-center gap-5 self-stretch">
                              <div className="flex w-[94%] justify-between gap-5 md:w-full md:flex-col">
                                <div className="flex w-[23%] items-center justify-between gap-5 self-end md:w-full">
                                  <div className="flex w-[31%] justify-between gap-5 self-start">
                                    <div className="h-[18px] w-[21px] rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                                    <Img
                                      src="images/img_signal_orange_a100.svg"
                                      alt="signal"
                                      className="h-[18px]"
                                    />
                                  </div>
                                  <Heading as="h6">Harvey Manning</Heading>
                                </div>
                                <div className="flex flex-wrap items-center gap-[41px] self-start">
                                  <Text
                                    as="p"
                                    className="!font-normal !text-blue_gray-900_e5"
                                  >
                                    Bàn là uốn tóc cũng mang tính cá nhân như
                                    những người phụ nữ sử dụng chúng
                                  </Text>
                                  <Text
                                    size="md"
                                    as="p"
                                    className="self-start !text-blue_gray-900_b2"
                                  >
                                    2:30 PM
                                  </Text>
                                </div>
                              </div>
                              <div className="h-px w-full self-stretch bg-gray-300" />
                            </div>
                          </div>
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1 flex-col items-center gap-5">
                          <div className="flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
                              <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                              <Img
                                src="images/img_signal_blue_gray_600.svg"
                                alt="signal"
                                className="h-[18px] self-start"
                              />
                              <Heading as="h6">Willie Blake</Heading>
                            </div>
                            <div className="flex items-center gap-[26px] sm:flex-col">
                              <div className="flex rounded-[3px] bg-teal-A700_33 px-2 pt-2">
                                <Text
                                  size="md"
                                  as="p"
                                  className="!text-teal-A700"
                                >
                                  Primary
                                </Text>
                              </div>
                              <Text
                                as="p"
                                className="!font-normal !text-blue_gray-900_e5"
                              >
                                Chương trình Cử nhân Thương mại của chúng tôi
                                được ACBSP công nhận.
                              </Text>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-900_b2"
                            >
                              8:38 AM
                            </Text>
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300" />
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1 flex-col items-center gap-[21px]">
                          <div className="flex w-[93%] items-start justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[78%] items-center justify-between gap-5 md:w-full md:flex-col">
                              <div className="flex w-[30%] items-center justify-between gap-5 self-end md:w-full">
                                <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                                <Img
                                  src="images/img_signal_blue_gray_600.svg"
                                  alt="signal"
                                  className="h-[18px] self-start"
                                />
                                <Heading as="h6">Minerva Barnett</Heading>
                              </div>
                              <div className="flex items-center gap-[26px] sm:flex-col">
                                <div className="flex">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="flex items-center justify-center rounded-[3px] bg-deep_orange-300_33 px-[22px] pb-px pt-1.5 !text-deep_orange-300 sm:px-5"
                                  >
                                    Work
                                  </Text>
                                </div>
                                <Text
                                  as="p"
                                  className="self-end !font-normal !text-blue_gray-900_e5"
                                >
                                  Nhận nhà quảng cáo tốt nhất trong túi bên của
                                  bạn
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="!text-blue_gray-900_b2"
                            >
                              8:13 AM
                            </Text>
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300" />
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <Text
                          size="md"
                          as="p"
                          className="ml-[333px] flex items-center justify-center rounded-[3px] bg-deep_orange-300_33 px-[22px] pb-px pt-1.5 !text-deep_orange-300 md:ml-0 sm:px-5"
                        >
                          Work
                        </Text>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1 flex-col items-center gap-5">
                          <div className="flex w-[94%] justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[22%] items-center justify-between gap-5 self-end md:w-full">
                              <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                              <Img
                                src="images/img_signal_orange_a100.svg"
                                alt="signal"
                                className="h-[18px] self-start"
                              />
                              <Heading as="h6">Fanny Weaver</Heading>
                            </div>
                            <div className="flex w-[60%] flex-wrap items-center justify-between gap-5 self-start md:w-full">
                              <Text
                                as="p"
                                className="!font-normal !text-blue_gray-900_e5"
                              >
                                Rao vặt miễn phí sử dụng chúng để quảng cáo nội
                                dung của bạn trực tuyến
                              </Text>
                              <Text
                                size="md"
                                as="p"
                                className="self-start !text-blue_gray-900_b2"
                              >
                                7:52 PM
                              </Text>
                            </div>
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300" />
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex flex-1 flex-col items-center gap-5">
                          <div className="flex w-[93%] items-center gap-8 md:w-full md:flex-col">
                            <div className="h-[18px] w-[21px] rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                            <div className="flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch">
                              <div className="flex w-[16%] items-center justify-between gap-5 self-end md:w-full">
                                <Img
                                  src="images/img_signal_blue_gray_600.svg"
                                  alt="signal"
                                  className="h-[18px] self-start"
                                />
                                <Heading as="h6">Olga Hogan</Heading>
                              </div>
                              <div className="flex items-center self-start md:flex-col">
                                <div className="flex h-[25px] items-center bg-[url(/public/images/img_label_social.svg)] bg-cover bg-no-repeat px-1.5 pt-1.5 md:h-auto">
                                  <Text
                                    size="md"
                                    as="p"
                                    className="!text-blue-A200"
                                  >
                                    Social
                                  </Text>
                                </div>
                                <Text
                                  as="p"
                                  className="ml-[26px] !font-normal !text-blue_gray-900_e5 md:ml-0"
                                >
                                  Nâng cao tiềm năng thương hiệu của bạn với
                                  những quả bóng quảng cáo
                                </Text>
                                <Text
                                  size="md"
                                  as="p"
                                  className="ml-14 self-start !text-blue_gray-900_b2 md:ml-0"
                                >
                                  4:13 PM
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300" />
                        </div>
                        <div className="h-px w-full bg-gray-300" />
                        <div className="flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
                          <div className="flex w-[58%] items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="flex w-[36%] items-center justify-center self-end sm:w-full">
                              <div className="h-[18px] w-[21px] self-start rounded-[3px] border-[0.5px] border-solid border-blue_gray-600" />
                              <Img
                                src="images/img_signal_blue_gray_600.svg"
                                alt="signal"
                                className="ml-8 h-[18px] self-start"
                              />
                              <Heading as="h6" className="ml-10">
                                Lora Houston
                              </Heading>
                            </div>
                            <div className="flex items-center gap-[26px]">
                              <div className="flex rounded-[3px] bg-purple-A200_33 px-2 pt-2">
                                <Text
                                  size="md"
                                  as="p"
                                  className="!text-purple-A200"
                                >
                                  Bạn bè
                                </Text>
                              </div>
                              <Text
                                as="p"
                                className="self-end !font-normal !text-blue_gray-900_e5"
                              >
                                Cho thuê nhà nghỉ dưỡng
                              </Text>
                            </div>
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="!text-blue_gray-900_b2"
                          >
                            7:52 PM
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[47px] flex w-[73%] items-center justify-between gap-5 self-end md:w-full">
                  <Text
                    size="md"
                    as="p"
                    className="mb-1.5 self-end !text-gray-900_99"
                  >
                    Đang xem 1-12 của 1,253
                  </Text>
                  <Img
                    src="images/img_indicator.svg"
                    alt="indicator"
                    className="h-[35px] w-[10%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
