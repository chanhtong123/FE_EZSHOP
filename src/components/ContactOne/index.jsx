import React from "react";
import { Text, Img } from "./..";
export default function ContactOne({
  shippingimage = "images/img_fast_delivery_1.svg",
  shippingtext = "Free Shipping",
  shippingprice = "Free Shipping for orders over $200",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start gap-[15px]`}
    >
      <Img
        src={shippingimage}
        alt="free_shipping"
        className="h-[35px] w-[35px]"
      />
      <div className="flex flex-col items-start gap-[5px]">
        <Text as="p" className="!font-jost !font-normal">
          {shippingtext}
        </Text>
        <Text size="lg" as="p" className="!font-jost !text-blue_gray-600">
          {shippingprice}
        </Text>
      </div>
    </div>
  );
}
