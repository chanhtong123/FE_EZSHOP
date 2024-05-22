import React from "react";
import { Text, Img } from "./..";
export default function CreateProductSidebar({
  username = "Phuong Uyennn",
  email = "alitfn58@gmail.com",
  descriptiontext = (
    <>
      Thông tin tài khoản <br /> Đặt hàng <br /> Địa chỉ <br /> Danh sách yêu
      thích <br /> Đăng xuất
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[15%] md:w-full pt-[5px] gap-2.5`}
    >
      <div className="self-stretch">
        <div className="flex flex-col gap-[9px]">
          <div className="flex items-start gap-[11px]">
            <Img
              src="images/img_150_25_1.png"
              alt="circleimage"
              className="h-[40px] w-[40px] rounded-[50%]"
            />
            <div className="flex flex-col items-start gap-[5px]">
              <Text className="text-base font-medium">{username}</Text>
              <Text className="text-[15px] font-normal !text-blue_gray-600">
                {email}
              </Text>
            </div>
          </div>
          <div className="h-px bg-gray-200_01" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex flex-col gap-[25px]">
          <Img
            src="images/img_growth_1.svg"
            alt="growthone"
            className="h-[20px]"
          />
          <Img
            src="images/img_vector.svg"
            alt="vector_thirteen"
            className="h-[20px]"
          />
          <Img
            src="images/img_location_1.svg"
            alt="locationone"
            className="h-[20px]"
          />
          <Img
            src="images/img_badge_1.svg"
            alt="badgeone"
            className="h-[20px]"
          />
          <Img
            src="images/img_television.svg"
            alt="television"
            className="h-[20px]"
          />
        </div>
        <Text className="w-[89%] text-[15px] font-normal leading-[45px]">
          {descriptiontext}
        </Text>
      </div>
    </div>
  );
}
