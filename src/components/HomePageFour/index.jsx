import React from "react";
import { Text, RatingBar, Heading, Button, Img } from "./..";
export default function HomePageFour({
  image = "images/img_image_30_1.png",
  addtocartbutton = "Thêm vào giỏ hàng",
  categorytext = "Thời trang",
  titletext = "Áo tập gym thoáng mát Nike thấm hút mồ hôi",
  reviewtext = "3,014 đánh giá",
  originalpricetext,
  discountedpricetext = "328.000đ",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center ml-[-1px] pb-[19px] relative border-gray-200_01 border border-solid bg-white-A700`}
    >
      <div className="relative h-[280px] self-stretch bg-white-A700 pb-[19px] pl-3.5 pr-4 pt-5 md:h-auto">
        <Img
          src={image}
          alt="imagethirty"
          className="h-[230px] w-[230px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-end gap-[74px] md:gap-[55px] sm:gap-[37px]">
          <div className="flex flex-col gap-[7px]">
            <Button
              color="gray_100_05"
              size="4xl"
              shape="circle"
              className="w-[34px] !rounded-[17px] shadow-xs"
            >
              <Img src="images/img_heart_1.svg" />
            </Button>
            <Button
              color="white_A700"
              size="4xl"
              shape="circle"
              className="w-[34px] !rounded-[17px]"
            >
              <Img src="images/img_show_1.svg" />
            </Button>
            <Button
              color="white_A700"
              size="4xl"
              shape="circle"
              className="w-[34px] !rounded-[17px]"
            >
              <Img src="images/img_graph_1.svg" />
            </Button>
          </div>
          <Button size="9xl" shape="round" className="w-full sm:px-5">
            {addtocartbutton}
          </Button>
        </div>
      </div>
      <div className="flex w-[86%] flex-col items-start gap-[11px]">
        <Text size="xs" as="p" className="!text-blue_gray-600">
          {categorytext}
        </Text>
        <Heading as="h6" className="w-full leading-[150%]">
          {titletext}
        </Heading>
        <div className="flex w-[70%] items-start gap-2.5 md:w-full">
          <RatingBar
            value={1}
            isEditable={true}
            size={10}
            className="flex justify-between"
          />
          <Text size="xs" as="p" className="!text-blue_gray-600">
            {reviewtext}
          </Text>
        </div>
        <div className="flex flex-wrap items-start gap-2.5">
          <Text size="2xl" as="p" className="flex !font-jost">
            <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
              278.000
            </span>
            <a
              href="#"
              className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
            >
              đ
            </a>
          </Text>
          <Text
            size="md"
            as="p"
            className="capitalize !text-blue_gray-600 line-through"
          >
            {discountedpricetext}
          </Text>
        </div>
      </div>
    </div>
  );
}
