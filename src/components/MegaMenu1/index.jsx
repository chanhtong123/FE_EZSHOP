import React from "react";
import { Text } from "../../components";
export default function MegaMenu1() {
  return (
    <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
      <div className="w-full rounded-lg bg-white-A700 p-5 shadow-7xl">
        <div className="flex gap-[30px] md:flex-row">
          <div className="flex flex-col items-start gap-4">
            <Text className="!font-opensans text-lg font-bold !text-black-A700_01">
              Title 1
            </Text>
            <div className="flex flex-col items-start gap-3">
              <a href="#">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 1
                </Text>
              </a>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 2
                </Text>
              </a>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 3
                </Text>
              </a>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 4
                </Text>
              </a>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 5
                </Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Text className="!font-opensans text-lg font-bold !text-black-A700_01">
              Title 2
            </Text>
            <div className="flex flex-col items-start gap-3">
              <a href="#">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 1
                </Text>
              </a>
              <Text className="self-center !font-opensans text-base font-normal !text-black-600">
                Menu 2
              </Text>
              <Text className="self-center !font-opensans text-base font-normal !text-black-600">
                Menu 3
              </Text>
              <Text className="self-center !font-opensans text-base font-normal !text-black-600">
                Menu 4
              </Text>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 5
                </Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Text className="!font-opensans text-lg font-bold !text-black-A700_01">
              Title 3
            </Text>
            <div className="flex flex-col items-start gap-3">
              <a href="#">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 1
                </Text>
              </a>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 2
                </Text>
              </a>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 3
                </Text>
              </a>
              <a href="#" className="self-center">
                <Text className="!font-opensans text-base font-normal !text-black-600">
                  Menu 4
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
