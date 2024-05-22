import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input } from "./..";
export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <header {...props}>
      <div className="flex w-full justify-between gap-5 md:flex-col">
        <div className="flex w-[40%] items-center justify-between gap-5 md:w-full sm:flex-col">
          <div className="flex w-[20%] items-center justify-center gap-[30px] sm:w-full">
            <a href="#">
              <Img
                src="images/img_television_gray_900_03.svg"
                alt="television"
                className="h-[18px]"
              />
            </a>
            <Img
              src="images/img_header_logo.png"
              alt="headerlogo"
              className="h-[36px] w-[94px] object-contain"
            />
          </div>
          <Input
            size="lg"
            shape="round"
            name="search"
            placeholder={`Tìm kiếm`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue("")}
                  fillColor="#041e42ff"
                />
              ) : (
                <Img
                  src="images/img_search_1_blue_gray_900_02.svg"
                  alt="search 1"
                  className="h-[20px] w-[20px] cursor-pointer"
                />
              )
            }
            className="w-[55%] gap-[35px] border border-solid border-gray-200_01 sm:w-full"
          />
        </div>
        <div className="flex gap-[30px]">
          <div className="flex items-center">
            <a href="#">
              <Button color="gray_100_04" className="w-[50px] rounded-[16px]">
                <Img src="images/img_trophy.svg" />
              </Button>
            </a>
            <a href="#">
              <Img
                src="images/img_mail_inbox_app_1.svg"
                alt="mailinboxapp"
                className="ml-7 h-[20px] w-[20px]"
              />
            </a>
            <a href="#">
              <Img
                src="images/img_notification_2.svg"
                alt="notificationtwo"
                className="ml-10 h-[20px] w-[20px]"
              />
            </a>
          </div>
          <a href="#">
            <Img
              src="/public/images/chuoi.jpg"
              alt="image119"
              className="h-[50px] w-[50px] rounded-[16px] object-cover"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
