import React from "react";
import { Text, Img } from "./..";
export default function HomePageOne({
  productimage = "images/img_61jlicovxvl_1.png",
  productname = "Apple",
  productcount = "",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full`}
    >
      <div className="flex flex-col items-center self-stretch rounded-[75px] bg-gray-100 p-[30px] sm:p-5">
      <Img
        src={productimage}
        className="w-[200px] h-[200px] object-cover"
        alt="Product Image"
      />
      </div>
      <div className="flex flex-col items-center">
        <Text as="p" className="!font-jost">
          {productname}
        </Text>
        <Text size="xs" as="p" className="!text-blue_gray-600">
          {productcount}
        </Text>
      </div>
    </div>
  );
}
