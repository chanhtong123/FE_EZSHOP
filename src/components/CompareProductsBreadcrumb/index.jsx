import React from "react";
import { Text } from "./..";
export default function CompareProductsBreadcrumb({
  hometext = "Trang chủ",
  prop = "/ ",
  producttext = "Sản phẩm",
  one = "/ ",
  comparetext = "So sánh sản phẩm",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-[7px]`}
    >
      <Text className="self-end text-sm font-normal">{hometext}</Text>
      <Text className="text-sm font-normal">{prop}</Text>
      <Text className="self-start text-sm font-normal">{producttext}</Text>
      <div className="flex flex-wrap gap-[7px]">
        <Text className="text-sm font-normal">{one}</Text>
        <Text className="text-sm font-normal !text-blue_gray-600">
          {comparetext}
        </Text>
      </div>
    </div>
  );
}
