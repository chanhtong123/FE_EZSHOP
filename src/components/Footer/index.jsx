import React from "react";
import { Img, Text } from "./..";
export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="container-md flex flex-col gap-[47px]">
        <div>
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="flex w-[72%] items-start justify-between gap-5 md:w-full md:flex-col">
              <div className="mt-1.5 flex w-[31%] flex-col items-start gap-8 md:w-full">
                <Text size="2xl" as="p" className="uppercase">
                  Liên hệ chúng tôi
                </Text>
                <div className="flex">
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-[25px]">
                      <Img
                        src="images/img_phone_call_1.svg"
                        alt="phonecallone"
                        className="h-[30px] w-[30px]"
                      />
                      <Text size="lg" as="p" className="!font-medium">
                        Thứ Hai - Thứ Sáu: 08h00 - 21h00
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="ml-[55px] md:ml-0">
                      +(1) 123 456 7890
                    </Text>
                  </div>
                </div>
                <div className="flex w-[71%] md:w-full">
                  <div className="flex flex-col items-start gap-[5px]">
                    <div className="flex items-start gap-[25px]">
                      <Img
                        src="images/img_email_1.svg"
                        alt="emailone"
                        className="h-[30px] w-[30px]"
                      />
                      <Text size="lg" as="p" className="!font-medium">
                        Bạn cần giúp đỡ?
                      </Text>
                    </div>
                    <Text size="lg" as="p" className="self-end">
                      support@ezshop.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[63%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="flex flex-col gap-[19px]">
                  <Text size="2xl" as="p" className="uppercase">
                    Về EZShop
                  </Text>
                  <ul className="flex flex-col gap-[27px]">
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Theo dõi đơn hàng của bạn
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Hướng dẫn sản phẩm
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Danh sách yêu thích
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Chính sách bảo mật
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Định vị cửa hàng
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[19px]">
                  <Text size="2xl" as="p" className="uppercase">
                    Hỗ trợ khách hàng
                  </Text>
                  <ul className="flex flex-col gap-[27px]">
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Liên hệ chúng tôi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Trung tâm trợ giúp
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Trả lại & Trao đổi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Tài trợ mua tốt nhất
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Thẻ quà tặng mua tốt nhất
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-[19px]">
                  <Text size="2xl" as="p" className="uppercase">
                    Dịch vụ
                  </Text>
                  <ul className="flex flex-col items-start gap-[27px]">
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Biệt đội đam mê
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Cố vấn tại nhà
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Chương trình trao đổi
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Tái chế đồ điện tử
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="md" as="p">
                          Sức khỏe mua tốt nhất
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-[5px] flex flex-col items-start gap-[45px]">
              <div className="flex flex-col items-start gap-[25px]">
                <Text size="2xl" as="p" className="uppercase">
                  Theo dõi
                </Text>
                <div className="flex gap-[19px]">
                  <Img
                    src="images/img_facebook.svg"
                    alt="facebook"
                    className="h-[17px]"
                  />
                  <Img
                    src="images/img_facebook.svg"
                    alt="facebook_eleven"
                    className="h-[17px]"
                  />
                  <Img
                    src="images/img_facebook.svg"
                    alt="facebook"
                    className="h-[17px]"
                  />
                  <Img
                    src="images/img_facebook.svg"
                    alt="facebook"
                    className="h-[17px] self-start"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-6">
                <Text size="2xl" as="p" className="uppercase">
                  Phương thức thanh toán
                </Text>
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <div className="h-px bg-gray-200_01" />
            <div className="flex items-center self-start md:flex-col">
              <Text size="md" as="p" className="mb-[9px] self-end">
                © 2024 EZShop. All Rights Reserved
              </Text>
              <Text size="md" as="p" className="ml-[41px] md:ml-0">
                Quyền riêng tư · Điều khoản · Sơ đồ trang web
              </Text>
              <div className="ml-[527px] flex flex-wrap items-center md:ml-0 md:flex-col">
                <Text size="md" as="p">
                  Tiền tệ:
                </Text>
                <Text size="md" as="p">
                  VNĐ
                </Text>
                <Img
                  src="images/img_vector_blue_gray_900_02_5x8.svg"
                  alt="vector_fifteen"
                  className="h-[5px] md:w-full"
                />
              </div>
              <div className="ml-8 flex pb-[9px] pt-[11px] md:ml-0">
                <Text size="md" as="p">
                  Ngôn ngữ:
                </Text>
                <div className="flex items-center self-start">
                  <Text size="md" as="p">
                    Tiếng Việt
                  </Text>
                  <Img
                    src="images/img_vector_blue_gray_900_02_5x8.svg"
                    alt="vector"
                    className="h-[5px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
