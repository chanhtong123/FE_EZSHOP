import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, CheckBox, Button } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
export default function ChatboxPage() {
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700 px-5 pt-5">
        <div className="flex flex-col gap-4">
          <Header />
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <Sidebar1 className="mt-[22px]" />
            <div className="flex w-[84%] flex-col items-start md:w-full">
              <div className="flex w-[84%] flex-col items-start md:w-full">
                <Heading size="8xl" as="h1" className="uppercase">
                  Hộp thư đến
                </Heading>
                <div className="relative mt-[-4px] flex justify-between gap-5 self-stretch md:flex-col">
                  <div className="flex w-[29%] flex-col items-start rounded-[14px] border border-solid border-gray-400 bg-white-A700 pb-[43px] pl-[33px] pr-[30px] pt-[27px] md:w-full md:pb-5 sm:p-5">
                    <Button
                      color="green_A700_e5"
                      size="9xl"
                      shape="round"
                      className="w-full !rounded-lg font-nunitosans font-bold tracking-[-0.05px] sm:px-5"
                    >
                      + Soạn thư mới
                    </Button>
                    <div className="mt-[26px] flex flex-col items-start gap-[22px] self-stretch">
                      <Heading
                        as="h2"
                        className="!font-nunitosans !font-bold tracking-[-0.06px]"
                      >
                        Email của tôi
                      </Heading>
                      <div className="flex flex-col items-center self-stretch">
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
                        <div className="mt-3.5 flex w-[86%] items-center justify-between gap-5 md:w-full">
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
                        <div className="mt-[29px] flex w-[86%] items-center justify-between gap-5 md:w-full">
                          <div className="flex items-center gap-4 self-end">
                            <Img
                              src="images/img_save.svg"
                              alt="save"
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
                        <div className="mt-[29px] flex w-[86%] justify-between gap-5 md:w-full">
                          <div className="flex items-center gap-4">
                            <Img
                              src="images/img_edit.svg"
                              alt="edit"
                              className="h-[17px] self-end"
                            />
                            <Text size="md" as="p">
                              Draft
                            </Text>
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="h-[18px] w-[19px] !text-blue_gray-900_99"
                          >
                            09
                          </Text>
                        </div>
                        <div className="mt-[30px] flex w-[87%] items-center gap-[17px] md:w-full">
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
                        <div className="mt-[31px] flex w-[86%] justify-between gap-5 md:w-full">
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
                        <div className="mt-[29px] flex w-[86%] justify-between gap-5 md:w-full">
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
                    <div className="mt-[50px] flex w-[53%] flex-col items-start gap-8 md:w-full">
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
                  <div className="flex w-[64%] flex-col gap-[151px] rounded-[14px] border border-solid border-gray-400 bg-white-A700 pb-[17px] pt-[13px] md:w-full md:gap-[113px] sm:gap-[75px]">
                    <div className="flex flex-col items-start gap-10">
                      <div className="self-stretch">
                        <div className="flex flex-col items-center gap-[13px]">
                          <div className="flex w-[93%] items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="mb-[5px] flex items-center self-end">
                              <Img
                                src="images/img_arrow_left_gray_100_05.svg"
                                alt="arrowleft"
                                className="h-[24px] w-[24px]"
                              />
                              <Heading
                                size="4xl"
                                as="h5"
                                className="ml-4 !font-nunitosans !font-bold"
                              >
                                Phương Uyên
                              </Heading>
                              <div className="ml-6 flex self-start">
                                <Text
                                  size="xs"
                                  as="p"
                                  className="flex items-center justify-center rounded-[3px] bg-purple-A200_33 px-[9px] py-[3px] !text-purple-A200"
                                >
                                  Bạn bè
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_other_action_gray_50_03.svg"
                              alt="otheraction"
                              className="h-[40px] w-[17%] sm:w-full"
                            />
                          </div>
                          <div className="h-px w-full self-stretch bg-gray-300_7f" />
                        </div>
                      </div>
                      <div className="ml-[29px] flex w-[81%] items-center gap-[17px] md:ml-0 md:w-full md:flex-col">
                        <Img
                          src="images/img_close_blue_gray_100_02.svg"
                          alt="close"
                          className="h-[40px] w-[40px] self-end md:w-full"
                        />
                        <div className="flex-1 rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] bg-gray-100_06 px-[19px] pb-3.5 pt-[19px] md:self-stretch">
                          <div className="flex flex-col items-end gap-[21px]">
                            <Text
                              size="md"
                              as="p"
                              className="w-full leading-[150%] !text-blue_gray-900_f2"
                            >
                              Một thực tế đã được chứng minh từ lâu là người đọc
                              sẽ bị phân tâm bởi nội dung có thể đọc được của
                              một trang khi nhìn vào bố cục của nó. Mục đích của
                              việc sử dụng Lorem Ipsum là nó có sự phân bố chữ
                              cái ít nhiều bình thường.
                            </Text>
                            <div className="flex items-center gap-4">
                              <Text
                                size="xs"
                                as="p"
                                className="!font-nunitosans !text-blue_gray-600"
                              >
                                6.30 pm
                              </Text>
                              <Img
                                src="images/img_more.svg"
                                alt="more"
                                className="h-[15px] self-start"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mr-7 flex w-[73%] justify-center self-end rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] bg-green-A700_02 px-5 pb-[15px] pt-[21px] md:mr-0 md:w-full sm:pt-5">
                        <div className="flex w-full flex-col items-end gap-5">
                          <Text
                            size="md"
                            as="p"
                            className="w-full leading-[150%] !text-white-A700"
                          >
                            Có rất nhiều biến thể của Lorem Ipsum, nhưng phần
                            lớn đã được thay đổi dưới một hình thức nào đó, bằng
                            cách thêm vào sự hài hước,
                          </Text>
                          <div className="flex items-center gap-[15px]">
                            <Text size="xs" as="p" className="!text-white-A700">
                              6.34 pm
                            </Text>
                            <Img
                              src="images/img_more_white_a700.svg"
                              alt="more"
                              className="h-[15px] self-start"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-[29px] flex w-[81%] items-center gap-[17px] md:ml-0 md:w-full md:flex-col">
                        <Img
                          src="images/img_close_blue_gray_100_02.svg"
                          alt="close"
                          className="h-[40px] w-[40px] self-end md:w-full"
                        />
                        <div className="flex-1 rounded-tl-[16px] rounded-tr-[16px] bg-gray-100_06 px-[19px] pb-[15px] pt-[19px] md:self-stretch">
                          <div className="flex flex-col items-end">
                            <Text
                              size="md"
                              as="p"
                              className="w-full leading-[150%] !text-blue_gray-900_f2"
                            >
                              Mục đích của việc sử dụng Lorem Ipsum là nó có sự
                              phân bố chữ cái ít nhiều bình thường, trái ngược
                              với việc sử dụng &#39;Nội dung ở đây, nội dung ở
                              đây&#39;, khiến nó trông giống như tiếng Anh có
                              thể đọc được. Nhiều gói xuất bản dành cho máy tính
                              để bàn và trình chỉnh sửa trang web hiện sử dụng
                              Lorem Ipsum làm mặc định. Trái ngược với suy nghĩ
                              phổ biến, Lorem Ipsum không chỉ đơn g văn bản mẫu
                              cho công ty của bạn.
                            </Text>
                            <div className="flex items-center gap-[9px]">
                              <Text
                                size="xs"
                                as="p"
                                className="!text-blue_gray-600"
                              >
                                6.38 pm
                              </Text>
                              <Img
                                src="images/img_more.svg"
                                alt="more"
                                className="h-[15px] self-start"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                      <div className="h-px w-full self-stretch bg-gray-300" />
                      <div className="flex w-[94%] items-center justify-between gap-5 md:w-full">
                        <div className="flex items-center gap-5">
                          <Img
                            src="images/img_attach.svg"
                            alt="attach"
                            className="h-[21px]"
                          />
                          <Text
                            as="p"
                            className="!font-nunitosans !font-normal tracking-[0.20px] !text-blue_gray-600"
                          >
                            Viết nội dung
                          </Text>
                        </div>
                        <div className="flex w-[24%] items-center justify-between gap-5">
                          <Img
                            src="images/img_attach.svg"
                            alt="attach"
                            className="h-[21px]"
                          />
                          <Img
                            src="images/img_attach.svg"
                            alt="attach"
                            className="h-[21px]"
                          />
                          <div className="flex w-[51%] flex-col items-center">
                            <div className="relative z-[2] flex justify-center self-stretch rounded-md bg-green-A700_02 px-2 pb-[7px] pt-2">
                              <div className="flex items-center gap-[7px]">
                                <Heading
                                  size="s"
                                  as="p"
                                  className="self-start !font-semibold !text-white-A700"
                                >
                                  Gửi
                                </Heading>
                                <Img
                                  src="images/img_save_white_a700.svg"
                                  alt="save"
                                  className="h-[14px] self-end"
                                />
                              </div>
                            </div>
                            <div className="relative mt-[-3px] h-[5px] w-[45px] rounded-sm bg-deep_orange-400_7a blur-[16.00px] backdrop-opacity-[0.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_indicator.svg"
                alt="indicator"
                className="mt-[66px] h-[32px] w-[7%] self-end"
              />
              <Text
                size="md"
                as="p"
                className="ml-[439px] mt-[19px] !text-gray-900_99 md:ml-0"
              >
                Đang xem 1-12 của 1,253
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
