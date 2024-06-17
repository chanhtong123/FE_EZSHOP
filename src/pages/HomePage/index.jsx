import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import {
  Img,
  Button,
  Input,
  Text,
  Heading,
  RatingBar,
  Slider,
} from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header1";
import HomePageArrowbullet from "../../components/HomePageArrowbullet";
import HomePageFive from "../../components/HomePageFive";
import HomePageFour from "../../components/HomePageFour";
import HomePageOne from "../../components/HomePageOne";
import HomePageSix from "../../components/HomePageSix";
import HomePageThree from "../../components/HomePageThree";
import axiosInstance from '../../config/axiosConfig';
import { Link } from "react-router-dom";



export default function HomePagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axiosInstance.get("/guest/api/products/search");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
        setError("Error fetching products: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
        {/* <Header className="shadow-lg" /> */}
        <div className="flex w-[76%] flex-col gap-[59px] md:w-full md:p-5 sm:gap-[29px]">
          <div className="container-md flex flex-col">
            <div className="flex gap-[31px] md:flex-col">
              <div className="relative h-[500px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch center pt-5 ">
                <div className="flex w-full max-w-[1099px] justify-center items-center">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 1 },
                    }}
                    disableDotsControls
                    activeIndex={sliderState3}
                    onSlideChanged={(e) => {
                      setSliderState3(e?.item);
                    }}
                    ref={sliderRef3}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="relative h-[500px] rounded-md bg-gray-100_02 pl-[30px] pt-[18px] md:h-auto sm:pl-5">
                          <div className="mr-[33px] h-[371px] w-[51%] rounded-[272px] bg-green-A700_19 md:mr-0" />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-end">
                            <div className="flex w-[90%] items-center justify-end md:w-full md:flex-col">
                              <div className="relative z-[1] flex w-[28%] flex-col items-start gap-6 md:w-full">
                                <div className="flex flex-col items-start gap-[11px] self-stretch">
                                  <Button
                                    color="blue_gray_900_02"
                                    size="xl"
                                    shape="round"
                                    className="min-w-[173px] font-medium"
                                  >
                                    Khuyến mãi cuối tháng
                                  </Button>
                                  <Heading
                                    size="8xl"
                                    as="h1"
                                    className="w-[86%] uppercase leading-[60px] md:w-full"
                                  >
                                    <>
                                      BỘ SƯU TẬP <br /> MÙA ĐÔNG
                                    </>
                                  </Heading>
                                  <Text
                                    as="p"
                                    className="w-full !font-normal leading-[150%] !text-blue_gray-600_01"
                                  >
                                    Những gì chúng tôi mất hàng giờ để thực hiện
                                    sẽ là của bạn để tận hưởng
                                  </Text>
                                </div>
                                <Button
                                  size="9xl"
                                  shape="round"
                                  className="min-w-[176px] sm:px-5"
                                >
                                  Khám phá ngay
                                </Button>
                              </div>
                              <div className="relative ml-[-271px] h-[481px] flex-1 md:ml-0 md:w-full md:flex-none md:self-stretch">
                                <Img
                                  src="images/img_man.png"
                                  alt="man"
                                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[481px] w-full rounded-md object-cover"
                                />
                                <div className="absolute bottom-[-0.38px] right-[29%] m-auto h-[232px] w-[10%] rounded-[50%] bg-gray-900_cc blur-[20.00px] backdrop-opacity-[0.5]" />
                                <Img
                                  src="images/img_women.png"
                                  alt="women"
                                  className="absolute bottom-[-0.63px] right-[-0.76px] m-auto h-[431px] w-[54%] rounded-md object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] m-auto flex h-max w-[95%] justify-between gap-5">
                  <Button
                    color="white_A700"
                    shape="circle"
                    onClick={() => {
                      sliderRef3?.current?.slidePrev();
                    }}
                    className="w-[50px] !rounded-[25px] shadow-xl"
                  />
                  <Button
                    color="white_A700"
                    shape="circle"
                    onClick={() => {
                      sliderRef3?.current?.slideNext();
                    }}
                    className="w-[50px] !rounded-[25px] shadow-xl"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center rounded-md border border-solid border-gray-200_01 px-[31px] pb-[30px] pt-[31px] md:flex-col sm:p-5">
              <div className="flex items-start gap-[15px]">
                <Img
                  src="images/img_fast_delivery_1_green_400.svg"
                  alt="fastdeliveryone"
                  className="h-[35px] w-[35px]"
                />
                <div className="flex flex-col items-start gap-2.5">
                  <Text as="p">Miễn phí giao hàng</Text>
                  <Text size="lg" as="p" className="!text-blue_gray-600">
                    Miễn phí cho đơn hàng trên 200K
                  </Text>
                </div>
              </div>
              <div className="ml-[81px] flex items-start gap-[15px] md:ml-0">
                <Img
                  src="images/img_shield_1_green_400.svg"
                  alt="shieldone"
                  className="h-[35px] w-[35px]"
                />
                <div className="flex flex-col items-start gap-[11px]">
                  <Text as="p">Đảm bảo hoàn tiền</Text>
                  <Text size="lg" as="p" className="!text-blue_gray-600">
                    Đổi trả trong vòng 30 ngày
                  </Text>
                </div>
              </div>
              <div className="ml-[103px] flex gap-10 md:ml-0 md:flex-col">
                <div className="flex items-start gap-[15px]">
                  <Img
                    src="images/img_headphones_1_green_400.svg"
                    alt="headphonesone"
                    className="h-[35px] w-[35px]"
                  />
                  <div className="flex flex-col items-start gap-2.5">
                    <Text as="p">Hỗ trợ trực tuyến</Text>
                    <Text size="lg" as="p" className="!text-blue_gray-600">
                      24 giờ một ngày, 7 ngày một tuần
                    </Text>
                  </div>
                </div>
                <div className="flex items-start gap-[15px]">
                  <Img
                    src="images/img_credit_card_1_green_400.svg"
                    alt="creditcardone"
                    className="h-[35px] w-[35px]"
                  />
                  <div className="mt-[5px] flex flex-col items-start gap-2">
                    <Text as="p">Thanh toán linh hoạt</Text>
                    <Text size="lg" as="p" className="!text-blue_gray-600">
                      Thanh toán bằng thẻ tín dụng
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[60px] flex flex-col items-center gap-8">
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">

                <div className="flex w-[6%] flex-col items-start gap-[5px] shadow-sm md:w-full">
                  <a href="/product">
                  <Text
                    size="lg"
                    as="p"
                    className="!font-medium !text-gray-900_06"
                  >
                    Xem tất cả
                  </Text>
                  </a>
                  <div className="h-[2px] w-[32px] bg-gray-900_06" />
                </div>
              </div>


              <section>
             
                  <div className="flex w-full max-w-[1401px] self-stretch">
                    <Slider
                      autoPlay
                      autoPlayInterval={1000}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 2 },
                        1050: { items: 3 },
                        1400: { items: 4 },
                        1750: { items: 5 },
                        2100: { items: 6 },
                      }}
                      disableDotsControls
                      activeIndex={sliderState2}
                      onSlideChanged={(e) => {
                        setSliderState2(e?.item);
                      }}
                      ref={sliderRef2}
                      items={products.map((product) => (
                        <Link
                        key={product.id}
                        to={`/productdetail/${product.id}`}
                        rel="noopener noreferrer"
                      >
                        <React.Fragment key={product.id}>
                          <div className="flex md:flex-col">
                            <HomePageSix
                              imagethirtyOne={product.image}
                              ergonomic={
                                <>
                                  {product.name}
                                  <br />
                                  {product.price} VND
                                 
                                </>
                              }
                            />
                          </div>
                          
                        </React.Fragment>
                        </Link>
                      ))}
                    />
                  </div>
              </section>




              {/* <div className="flex w-[13%] items-center gap-5 md:w-full">
                <div className="h-[24px] flex-1 rotate-[180deg]" />
                <Img
                  src="images/img_settings.svg"
                  alt="settings"
                  className="h-[20px] w-[58%]"
                />
                <div className="h-[24px] flex-1" />
              </div> */}
            </div>
            <div className="mt-[60px] flex flex-col gap-[29px]">
              <div className="flex items-start justify-between gap-5">
              
                {/* <div className="flex w-[6%] flex-col items-start gap-[5px] shadow-sm">
                  <Text
                    size="lg"
                    as="p"
                    className="!font-medium !text-gray-900_06"
                  >
                    Xem tất cả
                  </Text>
                  <div className="h-[2px] w-[32px] bg-gray-900_06" />
                </div> */}
              </div>
              {/* <div className="flex gap-7 md:flex-col">
                {data.map((d, index) => (
                  <HomePageOne
                    {...d}
                    key={"inner" + index}
                    className="gap-[18px] md:w-full"
                  />
                ))}
              </div> */}
            </div>
            <div className="mt-[59px] flex justify-center bg-gray-100_02 px-[5px] pt-[5px]">
             
            </div>
          </div>
          <div className="flex flex-col gap-[60px] sm:gap-[30px]">
            <div className="flex flex-col gap-[31px]">
              <div className="container-md flex items-center justify-between gap-5 md:flex-col md:p-5">
                <Text size="7xl" as="p">
                  Sản phẩm nổi bật
                </Text>
               
              </div>
              <section>
              
              
                  <div className="flex w-full max-w-[1401px] self-stretch">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 2 },
                        1050: { items: 3 },
                        1400: { items: 4 },
                        1750: { items: 5 },
                        2100: { items: 6 },
                      }}
                      disableDotsControls
                      activeIndex={sliderState2}
                      onSlideChanged={(e) => {
                        setSliderState2(e?.item);
                      }}
                      ref={sliderRef2}
                      items={products.map((product) => (
                        <Link
                        key={product.id}
                        to={`/productdetail/${product.id}`}
                        rel="noopener noreferrer"
                      >
                        <React.Fragment key={product.id}>
                          <div className="flex md:flex-col">
                            <HomePageSix
                              imagethirtyOne={product.image}
                              ergonomic={
                                <>
                                  {product.name}
                                  <br />
                                  {product.price} VND
                                  <br />
                                 
                                </>
                              }
                            />
                          </div>
                        </React.Fragment>
                        </Link>
                      ))}
                    />
                  </div>
              
              </section>

            </div>
            <div className="container-md flex flex-col gap-[29px] md:p-5">
             
           
            </div>
            {/* <div className="container-md flex flex-col gap-7 md:p-5">
              <div className="flex items-start justify-between gap-5">
                <Text size="7xl" as="p">
                  Phụ kiện
                </Text>
                <div className="flex w-[13%] items-center gap-5">
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
                </div>
              </div>
              <div className="flex items-center gap-[29px] md:flex-col">
                <div className="relative h-[391px] w-[32%] rounded-md bg-gray-100_02 pl-10 pt-[42px] md:w-full md:pt-5 sm:pl-5">
                  <Img
                    src="images/img_men_s_clothing.png"
                    alt="mensclothing"
                    className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[234px] w-[94%] rounded-md object-cover"
                  />
                  <div className="absolute left-[9%] top-[11%] m-auto flex w-[55%] flex-col items-start gap-[9px]">
                    <Text size="md" as="p" className="!text-blue-A700">
                      Chỉ từ 150K
                    </Text>
                    <Text size="7xl" as="p" className="w-full leading-[35px]">
                      <>
                        Discover Real <br /> Organic Flavors
                      </>
                    </Text>
                    <div className="flex w-[33%] flex-col items-start gap-0.5 shadow-sm md:w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-gray-900_06"
                      >
                        Mua ngay
                      </Text>
                      <div className="h-[2px] w-[32px] bg-gray-900_06" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full max-w-[933px] md:flex-col md:self-stretch">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 2 },
                      1050: { items: 4 },
                    }}
                    disableDotsControls
                    activeIndex={sliderState1}
                    onSlideChanged={(e) => {
                      setSliderState1(e?.item);
                    }}
                    ref={sliderRef1}
                    items={[...Array(12)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <HomePageFive
                          image="images/img_image_30_17.png"
                          category="Điện tử"
                          title="Đồng hồ Apple Watch Series 9"
                          className="sm:pb-5"
                        />
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div> */}
            <div className="container-md flex flex-col gap-[31px] md:p-5">
            
            
            </div>
            <div className="flex flex-col gap-[31px]">
            
          
            </div>
            <div className="container-md flex flex-col items-center gap-6 md:p-5">
              
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <Img
                  src="images/img_1.png"
                  alt="one"
                  className="h-[48px] w-[9%] object-cover md:w-full"
                />
                <Img
                  src="images/img_2.png"
                  alt="two"
                  className="h-[15px] w-[9%] object-cover md:w-full"
                />
                <Img
                  src="images/img_3_18x120.png"
                  alt="three"
                  className="h-[18px] w-[9%] object-cover md:w-full"
                />
                <Img
                  src="images/img_4_15x120.png"
                  alt="four"
                  className="h-[15px] w-[9%] object-cover md:w-full"
                />
                <Img
                  src="images/img_5.png"
                  alt="five"
                  className="h-[34px] w-[9%] object-cover md:w-full"
                />
                <Img
                  src="images/img_6.png"
                  alt="six"
                  className="h-[32px] w-[6%] object-cover md:w-full"
                />
                <Img
                  src="images/img_7.png"
                  alt="seven"
                  className="h-[30px] w-[9%] object-cover md:w-full"
                />
                <Img
                  src="images/img_8.png"
                  alt="eight"
                  className="h-[16px] w-[9%] object-cover md:w-full"
                />
              </div>
            </div>
            <div className="container-xs flex md:p-5">
              <div className="flex w-full items-center justify-between gap-5 rounded-md bg-gray-100_02 pl-[60px] pr-[21px] md:flex-col md:pl-5 sm:px-5">
                <div className="flex w-[50%] flex-col items-start md:w-full">
                  <Heading
                    size="6xl"
                    as="h2"
                    className="w-full uppercase leading-[140%]"
                  >
                    <>
                      Ở nhà và nhận hàng ngày của bạn <br /> nhu cầu từ cửa hàng
                      của chúng tôi
                    </>
                  </Heading>
                  <Text as="p" className="mt-[5px] !font-normal">
                    Bắt đầu mua sắm hàng ngày của bạn với EZShop
                  </Text>
                  <div className="mt-11 flex w-[90%] gap-2.5 md:w-full sm:flex-col">
                    <Input
                      size="3xl"
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Địa chỉ Email của bạn`}
                      className="flex-grow sm:px-5"
                    />
                    <Button
                      color="green_400"
                      size="11xl"
                      shape="round"
                      className="min-w-[131px] border border-solid border-green-400 sm:px-5"
                    >
                      Gửi ngay
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_fashion_3_1.png"
                  alt="fashion3one"
                  className="h-[400px] w-[46%] rounded-md object-cover md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Footer1 className="mt-[100px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" /> */}
      </div>
    </>
  );
}
