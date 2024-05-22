import React from "react";
import { Img, Text } from "./..";
export default function Footer1({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex items-center`}>
      <div className="container-sm flex flex-col gap-[47px]">
        <div className="flex items-start md:flex-col">
          <div className="mt-1.5 flex flex-1 flex-col items-start gap-[35px] md:self-stretch">
            <Text className="text-lg font-medium uppercase">
              Liên hệ chúng tôi
            </Text>
            <div className="flex flex-col items-start gap-[30px] self-stretch">
              <div className="flex flex-col items-start">
                <div className="flex items-start gap-[25px]">
                  <Img
                    src="images/img_phone_call_1.svg"
                    alt="phonecallone"
                    className="h-[30px] w-[30px]"
                  />
                  <Text className="text-[15px] font-medium">
                    Thứ Hai - Thứ Sáu: 08h00 - 21h00
                  </Text>
                </div>
                <Text className="ml-[55px] text-[15px] font-normal md:ml-0">
                  +(1) 123 456 7890
                </Text>
              </div>
              <div className="flex flex-col items-start gap-[5px]">
                <div className="flex items-start gap-[25px]">
                  <Img
                    src="images/img_email_1.svg"
                    alt="emailone"
                    className="h-[30px] w-[30px]"
                  />
                  <Text className="text-[15px] font-medium">
                    Bạn cần giúp đỡ?
                  </Text>
                </div>
                <Text className="self-end text-[15px] font-normal">
                  support@ezshop.com
                </Text>
              </div>
            </div>
          </div>
          <div className="ml-[58px] flex w-[52%] items-center justify-between gap-5 md:ml-0 md:w-full md:flex-col">
            <div className="flex flex-col gap-[19px]">
              <Text className="text-lg font-medium uppercase">Về EZShop</Text>
              <ul className="flex flex-col gap-[50px]">
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Theo dõi đơn hàng của bạn
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Hướng dẫn sản phẩm
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Danh sách yêu thích
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Chính sách bảo mật
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Định vị cửa hàng
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[19px]">
              <Text className="text-lg font-medium uppercase">
                Hỗ trợ khách hàng
              </Text>
              <ul className="flex flex-col gap-[50px]">
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Liên hệ chúng tôi
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Trung tâm trợ giúp
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Trả lại & Trao đổi
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Tài trợ mua tốt nhất
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Thẻ quà tặng mua tốt nhất
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[19px]">
              <Text className="text-lg font-medium uppercase">Dịch vụ</Text>
              <ul className="flex flex-col items-start gap-[50px]">
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">Biệt đội đam mê</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">Cố vấn tại nhà</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Chương trình trao đổi
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Tái chế đồ điện tử
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text className="text-sm font-normal">
                      Sức khỏe mua tốt nhất
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-28 mt-[5px] flex flex-col items-start md:ml-0">
            <Text className="text-lg font-medium uppercase">Theo dõi</Text>
            <div className="mt-[25px] flex gap-[19px]">
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
            <Text className="mt-[45px] text-lg font-medium uppercase">
              Phương thức thanh toán
            </Text>
            <div className="mt-6 flex gap-2.5">
              <Img
                src="images/img_television_gray_100_04.svg"
                alt="television"
                className="h-[24px]"
              />
              <Img
                src="images/img_close_gray_100_04.svg"
                alt="closeteen"
                className="h-[24px]"
              />
              <Img src="images/img_3.svg" alt="three" className="h-[24px]" />
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
        <div className="pb-[9px]">
          <div className="flex flex-col gap-[30px]">
            <div className="h-px bg-gray-200_01" />
            <div className="flex items-center gap-8 self-start md:flex-col">
              <div className="flex md:flex-col">
                <Text className="self-end text-sm font-normal">
                  © 2024 EZShop. All Rights Reserved
                </Text>
                <Text className="ml-[41px] self-start text-sm font-normal md:ml-0">
                  Quyền riêng tư · Điều khoản · Sơ đồ trang web
                </Text>
                <div className="ml-[527px] flex flex-wrap items-center self-start md:ml-0 md:flex-col">
                  <Text className="text-sm font-normal">Tiền tệ:</Text>
                  <Text className="text-sm font-normal">VNĐ</Text>
                  <Img
                    src="images/img_vector_blue_gray_900_02_5x8.svg"
                    alt="vector_thirteen"
                    className="h-[5px] md:w-full"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-start">
                <Text className="text-sm font-normal">Ngôn ngữ:</Text>
                <Text className="text-sm font-normal">Tiếng Việt</Text>
                <Img
                  src="images/img_vector_blue_gray_900_02_5x8.svg"
                  alt="vector_fifteen"
                  className="mt-1.5 h-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
