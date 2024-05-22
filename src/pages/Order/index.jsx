import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, SelectBox } from "../../components";
import FavoriteProductSidebar from "../../components/FavoriteProductSidebar";
import Footer1 from "../../components/Footer1";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table4Data = [
  {
    id: "#1923",
    snphmone: "Áo Thun Nam Nike",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Hoàn thành",
    tng: "250.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
  {
    id: "#1922",
    snphmone: "Áo Thun Nữ Adidas",
    ngy: "15 - 12 - 2023",
    thanhton: "Chưa thanh toán",
    tnhtrng: "Đã hủy",
    tng: "250.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
  {
    id: "#1921",
    snphmone: "Áo Thun Nữ Adidas",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Đang vận chuyển",
    tng: "250.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
  {
    id: "#1920",
    snphmone: "Áo Thun Nam Nike",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Hoàn thành",
    tng: "250.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
  {
    id: "#1919",
    snphmone: "Áo Thun Nữ Adidas",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Đã hủy",
    tng: "250.000đ",
    thm: "images/img_thumbs_up_gray_100_04.svg",
  },
  {
    id: "#1918",
    snphmone: "Áo Thun Nam Nike",
    ngy: "15 - 12 - 2023",
    thanhton: "Đã thanh toán",
    tnhtrng: "Đang vận chuyển",
    tng: "250.000đ",
    thm: "images/img_upload.png",
  },
];
export default function OrderPage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text size="lg" as="p">
            
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5 pl-[25px] sm:pl-5">
            
            ID
          </Text>
        ),
        meta: { width: "120px" },
      }),
      table4ColumnHelper.accessor("snphmone", {
        cell: (info) => (
          <Text size="lg" as="p">
            
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            
            Sản phẩm
          </Text>
        ),
        meta: { width: "253px" },
      }),
      table4ColumnHelper.accessor("ngy", {
        cell: (info) => (
          <Text size="lg" as="p">
            
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            
            Ngày
          </Text>
        ),
        meta: { width: "202px" },
      }),
      table4ColumnHelper.accessor("thanhton", {
        cell: (info) => (
          <Text size="lg" as="p">
            
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            
            Thanh toán
          </Text>
        ),
        meta: { width: "179px" },
      }),
      table4ColumnHelper.accessor("tnhtrng", {
        cell: (info) => (
          <div className="flex">
            
            <Button
              color="gray_50_04"
              size="3xl"
              shape="round"
              className="min-w-[97px] font-medium"
            >
              
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            
            Tình trạng
          </Text>
        ),
        meta: { width: "197px" },
      }),
      table4ColumnHelper.accessor("tng", {
        cell: (info) => (
          <Heading size="lg" as="h2" className="flex !font-semibold capitalize">
            
            <span className="text-blue_gray-900_02">250.000</span>
            <a href="#" className="text-blue_gray-900_02 underline">
              
              đ
            </a>
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            
            Tổng
          </Text>
        ),
        meta: { width: "129px" },
      }),
      table4ColumnHelper.accessor("thm", {
        cell: (info) => (
          <div className="flex">
            
            <Img
              src={info?.getValue?.()}
              alt="upload"
              className="h-[24px]"
            />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-3.5">
            
            Thêm
          </Text>
        ),
        meta: { width: "69px" },
      }),
    ];
  }, []);
  return (
    <>
      
      <Helmet>
        
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        
        <header className="flex flex-col items-center self-stretch bg-white-A700 pt-[11px]">
          
          <div className="flex flex-col items-center gap-[9px] self-stretch">
            
            <div className="container-md flex items-center justify-between gap-5 pr-1 md:flex-col md:p-5">
              
              <div className="flex items-end self-start sm:flex-col">
                
                <a href="#">
                  
                  <Img
                    src="images/img_pin_1.svg"
                    alt="pinone"
                    className="h-[16px] w-[16px] sm:w-full"
                  />
                </a>
                <Text size="s" as="p" className="ml-[5px] sm:ml-0">
                  
                  118 Cách Mạng Tháng 8
                </Text>
                <div className="ml-[5px] h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />
                <a href="#">
                  
                  <Img
                    src="images/img_phone_1.svg"
                    alt="phoneone"
                    className="ml-[19px] h-[16px] w-[16px] sm:ml-0 sm:w-full"
                  />
                </a>
                <Text size="s" as="p" className="ml-[5px] !font-jost sm:ml-0">
                  
                  <span className="font-bevietnampro text-blue_gray-900_02">
                    Bạn cần trợ giúp? Gọi ngay:&nbsp;
                  </span>
                  <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                    +84 1800 900
                  </span>
                </Text>
              </div>
              <div className="flex w-[34%] items-center justify-center gap-[23px] md:w-full sm:flex-col">
                
                <SelectBox
                  shape="square"
                  indicator={
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="h-[5px] w-[8px]"
                    />
                  }
                  name="tingvitvn"
                  placeholder={`Tiếng Việt / VNĐ`}
                  options={dropDownOptions}
                  className="flex-grow gap-px text-blue_gray-900_02"
                />
                <div className="flex w-[18%] items-center justify-center gap-4 sm:w-full">
                  
                  <div className="h-[21px] w-px bg-gray-200_01" />
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_vector_blue_gray_900_02.svg"
                        alt="vector"
                        className="h-[5px] w-[8px]"
                      />
                    }
                    name="trgip"
                    placeholder={`Trợ giúp`}
                    options={dropDownOptions}
                    className="flex-grow gap-px text-blue_gray-900_02"
                  />
                </div>
                <div className="flex items-center gap-4">
                  
                  <div className="h-[21px] w-px bg-gray-200_01" />
                  <Text size="s" as="p" className="self-end">
                    
                    Tìm cửa hàng
                  </Text>
                </div>
                <div className="flex items-center gap-2.5">
                  
                  <div className="h-full w-px bg-gray-200_01" />
                  <div className="flex items-center gap-4 self-end">
                    
                    <Img
                      src="images/img_facebook.svg"
                      alt="close"
                      className="h-[12px]"
                    />
                    <Img
                      src="images/img_facebook.svg"
                      alt="close"
                      className="h-[12px]"
                    />
                    <Img
                      src="images/img_facebook.svg"
                      alt="close"
                      className="h-[12px]"
                    />
                    <Img
                      src="images/img_facebook_blue_gray_900_02.png"
                      alt="close"
                      className="h-[11px] self-start object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px w-full self-stretch bg-gray-200_01" />
          </div>
          <div className="mt-[15px] flex w-[75%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
            
            <Img
              src="images/img_header_logo.png"
              alt="headerlogo"
              className="mb-[7px] h-[33px] w-[94px] object-contain"
            />
            <div className="flex w-[79%] items-center justify-center gap-6 md:w-full md:flex-col">
              
              <div className="flex flex-1 items-center justify-between gap-5 self-end rounded-md border border-solid border-green-A700_02 py-[11px] pl-[27px] pr-4 md:self-stretch sm:pl-5">
                
                <div className="flex w-[34%] items-start justify-center gap-5">
                  
                  <div className="flex flex-1 items-end justify-between gap-5">
                    
                    <Text size="md" as="p">
                      
                      Danh mục
                    </Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02.svg"
                      alt="vector"
                      className="mb-2.5 h-[5px]"
                    />
                    <div className="h-full w-px rounded-bl-[50%] rounded-tl-[50%] bg-green-400_01" />
                  </div>
                  <Text size="md" as="p" className="!text-blue_gray-600">
                    
                    Tìm kiếm
                  </Text>
                </div>
                <a href="#">
                  
                  <Img
                    src="images/img_search_1.svg"
                    alt="searchone"
                    className="h-[20px] w-[20px]"
                  />
                </a>
              </div>
              <div className="flex w-[43%] items-end justify-center gap-[17px] md:w-full sm:flex-col">
                
                <div className="flex flex-1 items-start justify-center gap-[15px] sm:self-stretch">
                  
                  <a href="#">
                    
                    <Button
                      color="green_A700_11"
                      shape="round"
                      className="w-[50px]"
                    >
                      
                      <Img src="images/img_heart_1.svg" />
                    </Button>
                  </a>
                  <Heading
                    size="lg"
                    as="p"
                    className="w-[61%] !font-inter leading-[22px]"
                  >
                    
                    <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                      
                      <>
                        
                        Yêu thích <br />
                      </>
                    </span>
                    <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                      Sản phẩm
                    </span>
                  </Heading>
                </div>
                <a href="#">
                  
                  <Button
                    color="green_A700_11"
                    shape="round"
                    className="w-[50px]"
                  >
                    
                    <Img src="images/img_profile_1.svg" />
                  </Button>
                </a>
                <Heading
                  size="lg"
                  as="p"
                  className="w-[17%] !font-inter leading-[22px] sm:w-full"
                >
                  
                  <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                    
                    <>
                      
                      Đăng nhập <br />
                    </>
                  </span>
                  <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                    Tài khoản
                  </span>
                </Heading>
                <div className="flex-1 sm:self-stretch">
                  
                  <div className="flex items-center gap-[9px]">
                    
                    <div className="relative h-[55px] w-[38%]">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Button
                          shape="round"
                          className="absolute bottom-[0.00px] left-[0.00px] m-auto w-[50px]"
                        >
                          
                          <Img src="images/img_cart.svg" />
                        </Button>
                      </a>
                      <Heading
                        size="xs"
                        as="p"
                        className="absolute right-[0.00px] top-[0.00px] m-auto flex h-[15px] w-[15px] items-center justify-center rounded-[7px] bg-orange-300 text-center !text-blue_gray-900_01"
                      >
                        
                        2
                      </Heading>
                    </div>
                    <Heading
                      size="lg"
                      as="p"
                      className="w-[62%] self-end !font-inter leading-[22px]"
                    >
                      
                      <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                        289.000
                      </span>
                      <a
                        href="#"
                        className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02 underline"
                      >
                        
                        <>
                          
                          đ<br />
                        </>
                      </a>
                      <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                        Thanh toán
                      </span>
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
          <div className="container-md flex items-center justify-between gap-5 pr-[123px] md:flex-col md:p-5 md:pr-5">
            
            <div className="flex w-[58%] items-center justify-between gap-5 md:w-full md:flex-col">
              
              <div className="relative h-[60px] w-[38%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5">
                
                <div className="flex w-full flex-col items-start">
                  
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    
                    <div className="flex w-[50%] items-center justify-center gap-[15px]">
                      
                      <div className="h-[2px] w-[20px] bg-white-A700" />
                      <Heading as="h6" className="!text-white-A700">
                        
                        Danh mục
                      </Heading>
                    </div>
                    <Img
                      src="images/img_vector_white_a700.svg"
                      alt="vector"
                      className="mb-[7px] h-[5px] self-end"
                    />
                  </div>
                  <div className="relative mt-[-3px] h-[2px] w-[15px] bg-white-A700" />
                </div>
                <div className="absolute left-[25.00px] top-[21.00px] m-auto h-[2px] w-[15px] bg-white-A700" />
              </div>
              <div className="flex flex-wrap items-end sm:flex-col">
                
                <Text as="p">Trang chủ</Text>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
                <Text as="p" className="ml-[38px] sm:ml-0">
                  
                  Sản phẩm
                </Text>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
                <Text as="p" className="ml-[39px] sm:ml-0">
                  
                  Liên hệ
                </Text>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
                <Text as="p" className="ml-10 sm:ml-0">
                  
                  Bài viết
                </Text>
                <Img
                  src="images/img_vector_blue_gray_900_02.svg"
                  alt="vector_eleven"
                  className="mb-1.5 h-[5px] sm:w-full"
                />
              </div>
            </div>
            <ul className="flex flex-wrap gap-[17px]">
              
              <li>
                
                <a href="#">
                  
                  <Text as="p">đãi</Text>
                </a>
              </li>
              <li>
                
                <a href="#">
                  
                  <Text as="p">Ưu</Text>
                </a>
              </li>
              <li>
                
                <a href="#">
                  
                  <Text as="p">trong</Text>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="mt-[34px] flex w-[74%] items-start justify-between gap-5 md:w-full md:flex-col md:p-5">
          
          <FavoriteProductSidebar
            emailtext="alitfn58@gmail.com"
            className="mt-1.5 w-[15%]"
          />
          <div className="flex w-[81%] flex-col items-start gap-[38px] md:w-full">
            
            <Heading size="8xl" as="h1" className="uppercase">
              
              Đơn hàng
            </Heading>
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{ className: "bg-gray-100_02 flex-wrap rounded-md" }}
              rowDataProps={{ className: "md:flex-col" }}
              className="self-stretch"
              columns={table4Columns}
              data={table4Data}
            />
          </div>
        </div>
        <Footer1 className="mt-20 justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
