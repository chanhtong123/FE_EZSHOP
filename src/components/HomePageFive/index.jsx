import React from "react";
import { Text, RatingBar, Heading, Img } from "./..";
export default function HomePageFive({
  image = "images/img_image_30_190x190.png",
  category = "Thời trang",
  title = "Dễ Thương Dép Bông Đi Trong Nhà",
  reviewcount = "3,014 đánh giá",
  price1,
  price2 = "328.000đ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center pb-[22px] border-gray-200_01 border border-solid bg-white-A700`}
    >
      <div className="self-stretch bg-white-A700 p-[15px]">
        <Img
          src={image}
          alt="thời_trang"
          className="h-[190px] w-[190px] object-cover"
        />
      </div>
      <div className="flex w-[82%] flex-col items-start gap-[11px]">
        <Text size="xs" as="p" className="!text-blue_gray-600">
          {category}
        </Text>
        <Heading as="h6" className="w-full leading-[150%]">
          {title}
        </Heading>
        <div className="flex w-[88%] items-start gap-2.5 md:w-full">
          <RatingBar
            value={1}
            isEditable={true}
            size={10}
            className="flex justify-between"
          />
          <Text size="xs" as="p" className="!text-blue_gray-600">
            {reviewcount}
          </Text>
        </div>
        <div className="flex flex-wrap items-start gap-2.5">
          <Text as="p" className="flex !font-jost">
            <span className="font-bevietnampro text-lg font-semibold text-blue_gray-900_02">
              278.000
            </span>
            <a
              href="#"
              className="font-bevietnampro text-lg font-semibold text-blue_gray-900_02 underline"
            >
              đ
            </a>
          </Text>
          <Text
            size="md"
            as="p"
            className="capitalize !text-blue_gray-600 line-through"
          >
            {price2}
          </Text>
        </div>
      </div>
    </div>
  );
}
