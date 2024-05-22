import React from "react";
import { Img, Text } from "./..";
export default function ProductDetailDetails({
  detailandspecstext = "Chi tiết & Thông số kỹ thuật",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col flex-1`}>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <Text size="3xl" as="p">
          {detailandspecstext}
        </Text>
        <Img
          src="images/img_arrow_down_blue_gray_900_02_7x11.png"
          alt="image"
          className="mb-2 h-[7px] self-end object-cover"
        />
      </div>
      <div className="h-px w-full self-stretch bg-gray-200_01" />
    </div>
  );
}
