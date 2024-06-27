import React from "react";
import { Text, Button, Img } from "..";

export default function SalesShopPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  text120of300,
  ...props
}) {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div {...props} className={`${className} flex flex-col items-center`}>
      <div className="flex items-start self-stretch sm:flex-col">
        <Button
          className="h-[50px] w-[50px] rounded-[25px] border border-solid border-gray-A700_02 bg-white-A700 px-[17px]"
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          <Img src="images/img_arrow_left.svg" />
        </Button>
        <div className="flex items-center ml-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <Text
              key={index}
              className={`ml-[10px] mt-[9px] !font-jost text-sm font-medium ${
                currentPage === index ? "!text-green-A700_02" : "!text-gray-900_04"
              }`}
              onClick={() => onPageChange(index)}
            >
              {index + 1}
            </Text>
          ))}
        </div>
        <Button
          className="ml-11 h-[50px] w-[50px] rounded-[25px] border border-solid bg-white-A700 px-[17px] sm:ml-0"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          <Img src="images/img_arrow_right.svg" />
        </Button>
      </div>
      {text120of300 && (
        <Text className="mt-4 text-sm font-medium text-gray-600">
          {text120of300}
        </Text>
      )}
    </div>
  );
}
