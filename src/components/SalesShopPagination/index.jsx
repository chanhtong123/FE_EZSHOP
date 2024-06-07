// import React from "react";
// import { Text, Button, Img } from "./..";
// export default function SalesShopPagination({
//   textone = "1",
//   texttwo = "2",
//   textthree = "3",
//   textfour = "4",
//   textfive = "5",
//   textellipsis = "...",
//   texttwenty = "20",
//   text120of300 = "Tìm thấy 1 – 20 trong số hơn 300 cơ sở kinh doanh",
//   ...props
// }) {
//   return (
//     <div {...props} className={`${props.className} flex flex-col items-center`}>
//       <div className="flex items-start self-stretch sm:flex-col">
//         <Button className="h-[50px] w-[50px] rounded-[25px] border border-solid border-green-A700_02 bg-white-A700 px-[17px]">
//           <Img src="images/img_arrow_left_blue_gray_900.svg" />
//         </Button>
//         <Text className="ml-[34px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
//           {textone}
//         </Text>
//         <Text className="ml-[26px] flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-green-A700_02 bg-green-A700_02 text-center !font-jost text-sm font-medium !text-gray-100_02 sm:ml-0">
//           {texttwo}
//         </Text>
//         <Text className="ml-[26px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
//           {textthree}
//         </Text>
//         <Text className="ml-[25px] flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-gray-100_02 bg-gray-100_02 text-center !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
//           {textfour}
//         </Text>
//         <Text className="ml-[26px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
//           {textfive}
//         </Text>
//         <Text className="ml-[39px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
//           {textellipsis}
//         </Text>
//         <Text className="ml-[34px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0">
//           {texttwenty}
//         </Text>
//         <Button className="ml-11 h-[50px] w-[50px] rounded-[25px] border border-solid border-green-A700_02 bg-white-A700 px-[17px] sm:ml-0">
//           <Img src="images/img_arrow_right.svg" />
//         </Button>
//       </div>
//       <Text className="text-sm font-normal !text-blue_gray-600">
//         {text120of300}
//       </Text>
//     </div>
//   );
// }
import React from "react";
import { Text, Button, Img } from "./..";

export default function SalesShopPagination({
  currentPage,
  totalPages,
  onPageChange,
  ...props
}) {
  const createPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div {...props} className={`${props.className} flex flex-col items-center`}>
      <div className="flex items-start self-stretch sm:flex-col">
        <Button
          className="h-[50px] w-[50px] rounded-[25px] border border-solid border-green-A700_02 bg-white-A700 px-[17px]"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Img src="images/img_arrow_left_blue_gray_900.svg" />
        </Button>
        {createPageNumbers().map((page) => (
          <Text
            key={page}
            className={`ml-[26px] mt-[9px] !font-jost text-sm font-medium !text-gray-900_04 sm:ml-0 ${
              currentPage === page
                ? "bg-green-A700_02 text-gray-100_02 rounded-[20px] border border-solid border-green-A700_02 flex h-[40px] w-[40px] items-center justify-center"
                : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Text>
        ))}
        <Button
          className="ml-11 h-[50px] w-[50px] rounded-[25px] border border-solid border-green-A700_02 bg-white-A700 px-[17px] sm:ml-0"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Img src="images/img_arrow_right.svg" />
        </Button>
      </div>
      <Text className="text-sm font-normal !text-blue_gray-600">
        Tìm thấy {Math.min((currentPage - 1) * 10 + 1, totalPages * 10)} –{" "}
        {Math.min(currentPage * 10, totalPages * 10)} trong số hơn{" "}
        {totalPages * 10} cơ sở kinh doanh
      </Text>
    </div>
  );
}
