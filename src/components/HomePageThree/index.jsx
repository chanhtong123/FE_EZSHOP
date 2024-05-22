import React from "react";
import { Text, Img } from "./..";
export default function HomePageThree({
  image = "images/img_image_30.png",
  title = "Thời trang",
  description = "Áo Hoodie Nike dành cho mùa đông lạnh",
  starimage1,
  starimage2,
  starimage3,
  starimage4,
  starimage5,
  reviewcount = "3,014 đánh giá",
  oldprice,
  newprice = "328.000đ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center pb-[25px] border-gray-200_01 border border-solid bg-white-A700`}
    >
      <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
        <Img
          src={image}
          alt="thời_trang"
          className="h-[230px] w-[230px] object-cover"
        />
      </div>
      <div className="flex w-[86%] flex-col items-start gap-[11px]">
        <Text className="text-xs font-normal !text-blue_gray-600">{title}</Text>
        <Text className="w-full text-base font-semibold leading-[150%]">
          {description}
        </Text>
        <div className="flex items-start gap-2.5">
          <div className="flex gap-[5px]">
            {!!starimage1 ? (
              <Img src={starimage1} alt="image" className="h-[10px] w-[10px]" />
            ) : null}
            {!!starimage2 ? (
              <Img src={starimage2} alt="image" className="h-[10px] w-[10px]" />
            ) : null}
            {!!starimage3 ? (
              <Img src={starimage3} alt="image" className="h-[10px] w-[10px]" />
            ) : null}
            {!!starimage4 ? (
              <Img src={starimage4} alt="image" className="h-[10px] w-[10px]" />
            ) : null}
            {!!starimage5 ? (
              <Img src={starimage5} alt="image" className="h-[10px] w-[10px]" />
            ) : null}
          </div>
          <Text className="text-xs font-normal !text-blue_gray-600">
            {reviewcount}
          </Text>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Text className="flex text-lg font-semibold">
            <span className="text-blue_gray-900_02">278.000</span>
            <a href="#" className="text-blue_gray-900_02 underline">
              đ
            </a>
          </Text>
          <Text className="self-start text-sm font-normal capitalize !text-blue_gray-600 line-through">
            {newprice}
          </Text>
        </div>
      </div>
    </div>
  );
}
