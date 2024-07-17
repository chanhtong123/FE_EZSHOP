import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, RatingBar, Button } from "../../components";
import FavoriteProductSidebar from "../../components/FavoriteProductSidebar";
import Header1 from "../../components/Header1";
export default function FavoriteProductPage() {
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
        
        <Header1 />
        <div className="container-md mt-[30px] md:p-5">
          
          <div>
            
            <div className="flex items-start justify-between gap-5 md:flex-col">
              
              <FavoriteProductSidebar className="mt-2.5 w-[16%]" />
              <div className="flex w-[80%] flex-col items-start gap-[42px] md:w-full">
                
                <Heading size="8xl" as="h1" className="uppercase">
                  
                  Sản phẩm yêu thích
                </Heading>
                <div className="grid grid-cols-4 gap-px self-stretch md:grid-cols-2 sm:grid-cols-1">
                  
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30.png"
                          alt="thời_trang"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h2" className="w-full leading-[150%]">
                          
                          Áo Hoodie Nike dành cho mùa đông lạnh
                        </Heading>
                      </a>
                      <div className="flex items-start gap-2.5">
                        
                        <div className="flex gap-[5px]">
                          
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                        </div>
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        
                        <Heading size="3xl" as="h3" className="flex">
                          
                          <span className="text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="relative h-[280px] self-stretch bg-white-A700 pb-[25px] pl-5 pt-[7px] sm:pb-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_230x230.png"
                          alt="imagethirty"
                          className="absolute bottom-[25.00px] left-[20.00px] m-auto h-[230px] w-[230px] object-cover"
                        />
                      </a>
                      <Button
                        color="gray_100_05"
                        size="2xl"
                        shape="round"
                        className="absolute right-[3.00px] top-[7.00px] m-auto w-[30px]"
                      >
                        
                        <Img src="images/img_close.svg" />
                      </Button>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h4" className="w-full leading-[150%]">
                          
                          Khoác gió chống nắng thời trang Adidas
                        </Heading>
                      </a>
                      <div className="flex items-start gap-2.5">
                        
                        <div className="flex gap-[5px]">
                          
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                        </div>
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        
                        <Heading size="3xl" as="h5" className="flex">
                          
                          <span className="text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_1.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo tập gym thoáng mát Nike thấm hút mồ hôi
                        </Heading>
                      </a>
                      <div className="flex items-start gap-2.5">
                        
                        <div className="flex gap-[5px]">
                          
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                        </div>
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-start gap-2.5">
                        
                        <Text size="2xl" as="p" className="flex !font-jost">
                          
                          <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_1.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo tập gym thoáng mát Nike thấm hút mồ hôi
                        </Heading>
                      </a>
                      <div className="flex items-start gap-2.5">
                        
                        <div className="flex gap-[5px]">
                          
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                          <Img
                            src="images/img_star_1_1.svg"
                            alt="image"
                            className="h-[10px] w-[10px]"
                          />
                        </div>
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-start gap-2.5">
                        
                        <Text size="2xl" as="p" className="flex !font-jost">
                          
                          <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_1.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo tập gym thoáng mát Nike thấm hút mồ hôi
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-start gap-2.5">
                        
                        <Text size="2xl" as="p" className="flex !font-jost">
                          
                          <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_1.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo tập gym thoáng mát Nike thấm hút mồ hôi
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-start gap-2.5">
                        
                        <Text size="2xl" as="p" className="flex !font-jost">
                          
                          <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_1.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo tập gym thoáng mát Nike thấm hút mồ hôi
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-start gap-2.5">
                        
                        <Text size="2xl" as="p" className="flex !font-jost">
                          
                          <span className="font-bevietnampro font-semibold text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="font-bevietnampro font-semibold text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        
                        <Heading size="3xl" as="h6" className="flex">
                          
                          <span className="text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        
                        <Heading size="3xl" as="h6" className="flex">
                          
                          <span className="text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        
                        <Heading size="3xl" as="h6" className="flex">
                          
                          <span className="text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] flex-col gap-2.5 md:w-full">
                        
                        <div className="flex items-start gap-2.5">
                          
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={10}
                            className="flex justify-between"
                          />
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            
                            3,014 đánh giá
                          </Text>
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5 self-start">
                          
                          <Heading size="3xl" as="h6" className="flex">
                            
                            <span className="text-blue_gray-900_02">
                              278.000
                            </span>
                            <a
                              href="#"
                              className="text-blue_gray-900_02 underline"
                            >
                              
                              đ
                            </a>
                          </Heading>
                          <Text
                            size="md"
                            as="p"
                            className="self-start capitalize !text-blue_gray-600 line-through"
                          >
                            
                            328.000đ
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Img
                          src="images/img_image_30_2.png"
                          alt="imagethirty"
                          className="h-[230px] w-[230px] object-cover"
                        />
                      </a>
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        
                        Thời trang
                      </Text>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        
                        <Heading as="h6" className="w-full leading-[150%]">
                          
                          Áo nỉ chần bông màu xám có dây Nike
                        </Heading>
                      </a>
                      <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                        
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={10}
                          className="flex justify-between"
                        />
                        <Text size="xs" as="p" className="!text-blue_gray-600">
                          
                          3,014 đánh giá
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        
                        <Heading size="3xl" as="h6" className="flex">
                          
                          <span className="text-blue_gray-900_02">
                            278.000
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            
                            đ
                          </a>
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="self-start capitalize !text-blue_gray-600 line-through"
                        >
                          
                          328.000đ
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-20 flex flex-col items-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5">
          
          <div className="flex w-[78%] flex-col gap-[47px] md:w-full">
            
            <div className="container-md md:p-5">
              
              <div className="flex items-start justify-between gap-5 md:flex-col">
                
                <div className="flex w-[72%] items-start justify-between gap-5 md:w-full md:flex-col">
                  
                  <div className="mt-1.5 flex w-[31%] flex-col items-start gap-8 md:w-full">
                    
                    <Text className="text-lg font-medium uppercase">
                      Liên hệ chúng tôi
                    </Text>
                    <div className="flex">
                      
                      <div className="flex flex-col items-start">
                        
                        <div className="flex items-start gap-[25px]">
                          
                          <Img
                            src="images/img_phone_call_1.svg"
                            alt="phonecallone"
                            className="h-[30px] w-[30px]"
                          />
                          <Text className="text-[15px] font-medium">
                            Thứ Hai - Thứ Sáu: 08h00 - 21h00
                          </Text>
                        </div>
                        <Text className="ml-[55px] text-[15px] font-normal md:ml-0">
                          +(1) 123 456 7890
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[71%] md:w-full">
                      
                      <div className="flex flex-col items-start gap-[5px]">
                        
                        <div className="flex items-start gap-[25px]">
                          
                          <Img
                            src="images/img_email_1.svg"
                            alt="emailone"
                            className="h-[30px] w-[30px]"
                          />
                          <Text className="text-[15px] font-medium">
                            Bạn cần giúp đỡ?
                          </Text>
                        </div>
                        <Text className="self-end text-[15px] font-normal">
                          support@ezshop.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[63%] items-center justify-between gap-5 md:w-full md:flex-col">
                    
                    <div className="flex flex-col gap-[19px]">
                      
                      <Text className="text-lg font-medium uppercase">
                        Về EZShop
                      </Text>
                      <ul className="flex flex-col gap-[50px]">
                        
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Theo dõi đơn hàng của bạn
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Hướng dẫn sản phẩm
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Danh sách yêu thích
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Chính sách bảo mật
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Định vị cửa hàng
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-[19px]">
                      
                      <Text className="text-lg font-medium uppercase">
                        Hỗ trợ khách hàng
                      </Text>
                      <ul className="flex flex-col gap-[50px]">
                        
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Liên hệ chúng tôi
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Trung tâm trợ giúp
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Trả lại & Trao đổi
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Tài trợ mua tốt nhất
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Thẻ quà tặng mua tốt nhất
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start gap-[19px]">
                      
                      <Text className="text-lg font-medium uppercase">
                        Dịch vụ
                      </Text>
                      <ul className="flex flex-col items-start gap-[50px]">
                        
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Biệt đội đam mê
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Cố vấn tại nhà
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Chương trình trao đổi
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Tái chế đồ điện tử
                            </Text>
                          </a>
                        </li>
                        <li>
                          
                          <a href="#">
                            
                            <Text className="text-sm font-normal">
                              Sức khỏe mua tốt nhất
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-[5px] flex flex-col items-start gap-[45px]">
                  
                  <div className="flex flex-col items-start gap-[25px]">
                    
                    <Text className="text-lg font-medium uppercase">
                      Theo dõi
                    </Text>
                    <div className="flex gap-[19px]">
                      
                      <Img
                        src="images/img_facebook.svg"
                        alt="close"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_eleven"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_thirteen"
                        className="h-[17px]"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        alt="close_fifteen"
                        className="h-[17px] self-start"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-6">
                    
                    <Text className="text-lg font-medium uppercase">
                      Phương thức thanh toán
                    </Text>
                    <div className="flex gap-2.5">
                      
                      <Img
                        src="images/img_television_gray_100_04.svg"
                        alt="television"
                        className="h-[24px]"
                      />
                      <Img
                        src="images/img_close_gray_100_04.svg"
                        alt="closeteen"
                        className="h-[24px]"
                      />
                      <Img
                        src="images/img_3.svg"
                        alt="three"
                        className="h-[24px]"
                      />
                      <Img
                        src="images/img_4.png"
                        alt="four"
                        className="h-[24px] object-cover"
                      />
                      <Img
                        src="images/img_television_gray_100_04_24x38.svg"
                        alt="television"
                        className="h-[24px]"
                      />
                      <Img
                        src="images/img_thumbs_up.svg"
                        alt="thumbsup"
                        className="h-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-sm flex md:p-5">
              
              <div className="flex w-full flex-col gap-5">
                
                <div className="h-px bg-gray-200_01" />
                <div className="flex items-center self-start md:flex-col">
                  
                  <Text className="mb-[9px] self-end text-sm font-normal">
                    © 2024 EZShop. All Rights Reserved
                  </Text>
                  <Text className="ml-[41px] text-sm font-normal md:ml-0">
                    
                    Quyền riêng tư · Điều khoản · Sơ đồ trang web
                  </Text>
                  <div className="ml-[527px] flex flex-wrap items-center md:ml-0 md:flex-col">
                    
                    <Text className="text-sm font-normal">Tiền tệ:</Text>
                    <Text className="text-sm font-normal">VNĐ</Text>
                    <Img
                      src="images/img_vector_blue_gray_900_02_5x8.svg"
                      alt="vector_fifteen"
                      className="h-[5px] md:w-full"
                    />
                  </div>
                  <div className="ml-8 flex pb-[9px] pt-[11px] md:ml-0">
                    
                    <Text className="text-sm font-normal">Ngôn ngữ:</Text>
                    <div className="flex items-center self-start">
                      
                      <Text className="text-sm font-normal">
                        Tiếng Việt
                      </Text>
                      <Img
                        src="images/img_vector_blue_gray_900_02_5x8.svg"
                        alt="vector"
                        className="h-[5px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
