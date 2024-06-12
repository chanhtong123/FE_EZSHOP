import React from "react";
import { Text, Button, Img } from "./..";
export default function SalesShopPagination({
  textone = "1",
  texttwo = "2",
  textthree = "3",
  textfour = "4",
  textfive = "5",
  textellipsis = "...",
  texttwenty = "",
  text120of300 = "",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center`}>
      <div className="flex items-start self-stretch sm:flex-col">
        <Button className="h-[50px] w-[50px] rounded-[25px] border border-solid border-gray-A700_02 bg-white-A700 px-[17px]">
          <Img src="images/img_arrow_left.svg" />
        </Button>
        <Text className="ml-[34px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
          {textone}
        </Text>
        <Text className="ml-[26px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
          {texttwo}
        </Text>
        <Text className="ml-[26px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
          {textthree}
        </Text>
        <Text className="ml-[26px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
          {textfour}
        </Text>
        <Text className="ml-[26px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
          {textfive}
        </Text>  
        <Button className="ml-11 h-[50px] w-[50px] rounded-[25px] border border-solid border-green-A700_02 bg-white-A700 px-[17px] sm:ml-0">
          <Img src="images/img_arrow_right.svg" />
        </Button>
      </div>
    </div>
  );
}
