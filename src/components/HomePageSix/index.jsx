import React from "react";
import { Text, Heading, Img } from "./..";

export default function HomePageSix({
  imagethirtyOne = "images/img_image_30_9.png",
  int = "Thời trang",
  ergonomic = (
    <>
      Váy body ôm sát <br /> không co giãn
    </>
  ),
  p3014nhgi = "3,014 đánh giá",
  p278000,
  p328000 = "328.000đ",
  gimtwenty = "Giảm 20%",
  bnfiftysix = "Đã bán 56",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full pb-[23px] sm:pb-5 border-gray-200_01 border border-solid bg-white-A700`}
    >
      <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
        <Img
          src={imagethirtyOne}
          alt="imagethirty"
          className="h-[230px] w-[230px] object-cover"
        />
      </div>
      <div className="flex w-[86%] flex-col items-start">
        <Text size="md" as="p" className="!text-blue_gray-600">
          {int}
        </Text>
        <Heading as="h6" className="mt-2 w-full leading-[150%]">
          {ergonomic}
        </Heading>
        <div className="mt-[19px] flex items-start gap-2.5">
          <div className="flex gap-[5px]">
            <Img
              src="images/img_star_1_1.svg"
              alt="image"
              className="h-[10px] w-[10px]"
            />
            <Img
              src="images/img_star_1_1.svg"
              alt="image"
              className="h-[10px] w-[10px]"
            />
            <Img
              src="images/img_star_1_1.svg"
              alt="image"
              className="h-[10px] w-[10px]"
            />
            <Img
              src="images/img_star_1_1.svg"
              alt="image"
              className="h-[10px] w-[10px]"
            />
            <Img
              src="images/img_star_1_1.svg"
              alt="image"
              className="h-[10px] w-[10px]"
            />
          </div>
          <Text size="xs" as="p" className="!text-blue_gray-600">
            {p3014nhgi}
          </Text>
        </div>
        <div className="mt-[11px] flex flex-wrap items-start gap-2.5">
          <Heading size="3xl" as="h6" className="flex">
            <span className="text-blue_gray-900_02">278.000</span>
            <a href="#" className="text-blue_gray-900_02 underline">
              đ
            </a>
          </Heading>
          <Text
            size="md"
            as="p"
            className="capitalize !text-blue_gray-600 line-through"
          >
            {p328000}
          </Text>
          <Text size="xs" as="p" className="!text-deep_purple-800">
            {gimtwenty}
          </Text>
        </div>
      </div>
      <Text size="xs" as="p" className="ml-3.5 mt-[37px] self-start md:ml-0">
        {bnfiftysix}
      </Text>
    </div>
  );
}
