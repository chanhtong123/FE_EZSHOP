import React from "react";
import { Img } from "./..";
export default function HomePageArrowbullet({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center w-[13%] gap-5`}
    >
      <Img
        src="images/img_arrow_down.svg"
        alt="arrowdown"
        className="h-[24px] w-[24px]"
      />
      <Img
        src="images/img_settings.svg"
        alt="settings"
        className="h-[20px] w-[58%]"
      />
      <div className="flex w-[15%] flex-col gap-[495px] self-start md:gap-[371px] sm:gap-[247px]">
        <div className="h-[24px]" />
        <div className="flex flex-col gap-[500px] md:gap-[375px] sm:gap-[250px]">
          <div className="h-[24px]" />
        </div>
      </div>
    </div>
  );
}
