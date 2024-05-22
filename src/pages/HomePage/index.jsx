import React from "react";
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
import Header1 from "../../components/Header1";
import HomePageArrowbullet from "../../components/HomePageArrowbullet";
import HomePageFive from "../../components/HomePageFive";
import HomePageFour from "../../components/HomePageFour";
import HomePageOne from "../../components/HomePageOne";
import HomePageSix from "../../components/HomePageSix";
import HomePageThree from "../../components/HomePageThree";
const data = [
  {
    productimage: "images/img_61jlicovxvl_1.png",
    productname: "Apple",
    productcount: "29 sản phẩm",
  },
  {
    productimage: "images/img_image_44.png",
    productname: "Samsung",
    productcount: "29 sản phẩm",
  },
  {
    productimage: "images/img_image_45.png",
    productname: "Sony",
    productcount: "29 sản phẩm",
  },
  {
    productimage: "images/img_image_46.png",
    productname: "Nike",
    productcount: "29 sản phẩm",
  },
  {
    productimage: "images/img_image_47.png",
    productname: "Adidas",
    productcount: "29 sản phẩm",
  },
  {
    productimage: "images/img_image_48.png",
    productname: "Xiaomi",
    productcount: "29 sản phẩm",
  },
  {
    productimage: "images/img_image_49.png",
    productname: "Ray-Ban",
    productcount: "29 sản phẩm",
  },
  {
    productimage: "images/img_image_50.png",
    productname: "Michael Kors",
    productcount: "29 sản phẩm",
  },
];
const data1 = [
  {
    image: "images/img_image_30_190x190.png",
    category: "Thời trang",
    title: "Dễ Thương Dép Bông Đi Trong Nhà",
    reviewcount: "3,014 đánh giá",
    price2: "328.000đ",
  },
  {
    image: "images/img_image_30_14.png",
    category: "Thời trang",
    title: "Vớ Lông Cừu Dày Dặn Giữ Ấm Màu Hồng",
    reviewcount: "3,014 đánh giá",
    price2: "328.000đ",
  },
  {
    image: "images/img_image_30_15.png",
    category: "Thời trang",
    title: "Quần jeans Ống Rộng Lưng Cao Thêu Hình",
    reviewcount: "3,014 đánh giá",
    price2: "328.000đ",
  },
  {
    image: "images/img_image_30_16.png",
    category: "Thời trang",
    title: "Bộ Đồ Ngủ Hình Hello Kitty Xinh Xắn",
    reviewcount: "3,014 đánh giá",
    price2: "328.000đ",
  },
];
export default function HomePagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);
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
        <Header1 className="shadow-lg" />
        <div className="flex w-[76%] flex-col gap-[59px] md:w-full md:p-5 sm:gap-[29px]">
          <div className="container-md flex flex-col">
            <div className="flex gap-[31px] md:flex-col">
              <div className="relative h-[500px] w-[20%] rounded-bl-md rounded-br-md border border-solid border-gray-200_01 bg-white-A700 md:w-full">
                <Img
                  src="images/img_line.svg"
                  alt="line"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[402px] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[85%] items-center justify-center">
                  <div className="flex flex-col items-start gap-[34px]">
                    <Img
                      src="images/img_thumbs_up_blue_gray_900_02_1.svg"
                      alt="thumbsup"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_cooking_1.svg"
                      alt="cookingone"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_armchair_1.svg"
                      alt="armchairone"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_smartphone_1_1.svg"
                      alt="smartphone1one"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_bride_dress_1.svg"
                      alt="bridedressone"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_heart_beat_1.svg"
                      alt="heartbeatone"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_vector_blue_gray_900_02_1.svg"
                      alt="vector_thirteen"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_groceries_1.svg"
                      alt="groceriesone"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_games_1_1.svg"
                      alt="games1one"
                      className="h-[16px] w-full self-center"
                    />
                    <Img
                      src="images/img_feeding_bottle_1.svg"
                      alt="feedingbottle"
                      className="h-[14px] w-[14px]"
                    />
                  </div>
                  <Text
                    size="lg"
                    as="p"
                    className="ml-[19px] w-[90%] leading-[50px]"
                  >
                    <span className="text-blue_gray-900_02">
                      <>
                        Ưu đãi hấp dẫn hôm nay <br /> Nhà & Bếp <br /> Nội thất
                        <br />
                      </>
                    </span>
                    <span className="text-green-A700_02">
                      <>
                        Thiết bị điện tử <br /> Quần áo & Phụ kiện <br /> Sức
                        khỏe & Làm đẹp <br /> Thể thao & Ngoài trời <br /> Cửa
                        hàng tạp hóa & chợ <br /> Trò chơi đồ chơi & video
                        <br /> Bé & Mẹ
                      </>
                    </span>
                  </Text>
                  <div className="flex flex-col gap-[41px]">
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_green_400.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_arrow_right_blue_gray_900_02.svg"
                      alt="arrowright"
                      className="h-[8px]"
                    />
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch">
                <div className="flex w-full max-w-[1099px]">
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
                <div className="flex w-[41%] items-center justify-center gap-4 md:w-full sm:flex-col">
                  <Text size="7xl" as="p" className="self-start">
                    Ưu đãi hàng đầu trong ngày
                  </Text>
                  <div className="flex w-[32%] flex-wrap justify-evenly rounded-md bg-green-A700_02 py-[9px] sm:w-full">
                    <Text as="p" className="!text-gray-100_02">
                      178 :
                    </Text>
                    <Text as="p" className="!text-gray-100_02">
                      23 :
                    </Text>
                    <Text as="p" className="!text-gray-100_02">
                      14 :
                    </Text>
                    <Text
                      as="p"
                      className="h-[21px] w-[22px] !text-gray-100_02"
                    >
                      39
                    </Text>
                  </div>
                </div>
                <div className="flex w-[6%] flex-col items-start gap-[5px] shadow-sm md:w-full">
                  <Text
                    size="lg"
                    as="p"
                    className="!font-medium !text-gray-900_06"
                  >
                    Xem tất cả
                  </Text>
                  <div className="h-[2px] w-[32px] bg-gray-900_06" />
                </div>
              </div>
              <div className="flex w-full max-w-[1401px] self-stretch">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  disableDotsControls
                  activeIndex={sliderState2}
                  onSlideChanged={(e) => {
                    setSliderState2(e?.item);
                  }}
                  ref={sliderRef2}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex md:flex-col">
                        <HomePageSix />
                        <HomePageSix
                          imagethirtyOne="images/img_image_30_10.png"
                          ergonomic="<>Giày cao gót đế mảnh<br />màu hồng</>"
                        />
                        <HomePageSix
                          imagethirtyOne="images/img_image_30_11.png"
                          ergonomic="<>Áo khoác lông<br />siêu ấm</>"
                        />
                        <HomePageSix
                          imagethirtyOne="images/img_image_30_12.png"
                          ergonomic="<>Túi cầm tay mang đi làm<br />màu nâu tiện dụng</>"
                        />
                        <HomePageSix
                          imagethirtyOne="images/img_image_30_13.png"
                          ergonomic="<>Mắt kính chống nắng<br />thời trang</>"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
              <div className="flex w-[13%] items-center gap-5 md:w-full">
                <div className="h-[24px] flex-1 rotate-[180deg]" />
                <Img
                  src="images/img_settings.svg"
                  alt="settings"
                  className="h-[20px] w-[58%]"
                />
                <div className="h-[24px] flex-1" />
              </div>
            </div>
            <div className="mt-[60px] flex flex-col gap-[29px]">
              <div className="flex items-start justify-between gap-5">
                <div className="flex">
                  <Text size="7xl" as="p">
                    Danh mục
                  </Text>
                </div>
                <div className="flex w-[6%] flex-col items-start gap-[5px] shadow-sm">
                  <Text
                    size="lg"
                    as="p"
                    className="!font-medium !text-gray-900_06"
                  >
                    Xem tất cả
                  </Text>
                  <div className="h-[2px] w-[32px] bg-gray-900_06" />
                </div>
              </div>
              <div className="flex gap-7 md:flex-col">
                {data.map((d, index) => (
                  <HomePageOne
                    {...d}
                    key={"inner" + index}
                    className="gap-[18px] md:w-full"
                  />
                ))}
              </div>
            </div>
            <div className="mt-[59px] flex justify-center bg-gray-100_02 px-[5px] pt-[5px]">
              <div className="flex w-[84%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[43%] flex-col items-start gap-6 md:w-full">
                  <div className="flex flex-col items-start gap-2.5 self-stretch">
                    <Text size="md" as="p" className="!text-blue_gray-600">
                      ĐỒNG HỒ ĐÔI - GẮN KẾT YÊU THƯƠNG
                    </Text>
                    <Heading
                      size="8xl"
                      as="h2"
                      className="w-full uppercase leading-[60px]"
                    >
                      <>
                        TÌM KIẾM MỚI <br /> ĐỒNG HỒ CỦA BẠN
                      </>
                    </Heading>
                    <Text
                      size="md"
                      as="p"
                      className="w-[52%] leading-[150%] !text-blue_gray-600 md:w-full"
                    >
                      Đồng hồ và dây đeo của bạn phải kết hợp hoàn hảo với nhau.
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
                <div className="relative h-[394px] w-[48%] md:h-auto md:w-full">
                  <div className="mr-6 h-[312px] w-[80%] rounded-[226px] bg-green-A700_19 md:mr-0" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[394px] w-full">
                    <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[385px] w-[81%] md:h-auto">
                      <Img
                        src="images/img_model_women_385x460.png"
                        alt="modelwomen"
                        className="h-[385px] w-full object-cover"
                      />
                      <div className="absolute bottom-[-0.61px] right-[23%] m-auto h-[172px] w-[29%] rotate-[-16deg] rounded-[50%] bg-gray-900_99_01 blur-[60.00px] backdrop-opacity-[0.5]" />
                    </div>
                    <div className="absolute bottom-0 right-[-0.25px] top-0 my-auto flex h-max w-[66%] flex-col items-start">
                      <Img
                        src="images/img_model_men.png"
                        alt="modelmen"
                        className="h-[394px] w-full object-cover md:h-auto"
                      />
                      <div className="relative ml-[59px] mt-[-46px] h-[46px] w-[27px] rotate-[-4deg] rounded-[50%] bg-light_green-900_99 blur-[40.00px] backdrop-opacity-[0.5] md:ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[60px] sm:gap-[30px]">
            <div className="flex flex-col gap-[31px]">
              <div className="container-md flex items-center justify-between gap-5 md:flex-col md:p-5">
                <Text size="7xl" as="p">
                  Sản phẩm nổi bật
                </Text>
                <div className="flex w-[29%] flex-col items-start gap-[3px] md:w-full">
                  <Heading as="h2" className="!text-blue_gray-600">
                    Top 10 Điện tử Thời trang Gia dụng Tất cả
                  </Heading>
                  <div className="h-[2px] w-[48px] bg-blue_gray-900_02" />
                </div>
              </div>
              <div className="flex md:flex-col">
                <div className="flex flex-1 items-center md:self-stretch">
                  <Button
                    color="white_A700"
                    shape="circle"
                    className="relative z-[3] w-[50px] !rounded-[25px] border border-solid border-gray-200_01"
                  >
                    <Img src="images/img_arrow_left_blue_gray_900.svg" />
                  </Button>
                  <HomePageThree className="relative ml-[-25px] flex-1 sm:pb-5" />
                </div>
                <HomePageFour className="flex-1 md:ml-0 md:self-stretch" />
                <div className="relative z-[4] ml-[-1px] flex w-[60%] md:ml-0 md:w-full md:flex-col">
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30_2.png"
                        alt="thời_trang"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h3" className="w-full leading-[150%]">
                        Áo nỉ chần bông màu xám có dây Nike
                      </Heading>
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
                        <Heading size="3xl" as="h4" className="flex">
                          <span className="text-blue_gray-900_02">278.000</span>
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
                      <Img
                        src="images/img_image_30_230x230.png"
                        alt="imagethirty"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h5" className="w-full leading-[150%]">
                        Khoác gió chống nắng thời trang Adidas
                      </Heading>
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
                          <span className="text-blue_gray-900_02">278.000</span>
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
                  <div className="flex w-full items-center">
                    <HomePageThree
                      image="images/img_image_30_3.png"
                      description="Áo khoác unisex màu trắng tập gym Adidas"
                      className="flex-1 sm:pb-5"
                    />
                    <Button
                      color="white_A700"
                      shape="circle"
                      className="relative ml-[-25px] w-[50px] !rounded-[25px] border border-solid border-blue_gray-900"
                    >
                      <Img src="images/img_arrow_right.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-md flex flex-col gap-[29px] md:p-5">
              <div className="flex items-start justify-between gap-5">
                <Text size="7xl" as="p">
                  Thời trang
                </Text>
                <div className="flex w-[13%] items-center justify-center gap-5">
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
                  <Img
                    src="images/img_arrow_left.svg"
                    alt="arrowleft"
                    className="h-[24px] w-[24px]"
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
                <div className="flex flex-1 md:flex-col md:self-stretch">
                  {data1.map((d, index) => (
                    <HomePageFive
                      {...d}
                      key={"items" + index}
                      className="w-full sm:pb-5"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="container-md flex flex-col gap-7 md:p-5">
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
            </div>
            <div className="container-md flex flex-col gap-[31px] md:p-5">
              <div className="flex items-start justify-between gap-5">
                <Text size="7xl" as="p">
                  Sắc đẹp
                </Text>
                <HomePageArrowbullet />
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
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(12)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <HomePageFive
                          image="images/img_image_30_20.png"
                          category="Sắc đẹp"
                          title="<>Son Romand siêu đẹp<br />mới dùng</>"
                          className="sm:pb-5"
                        />
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[31px]">
              <div className="container-md flex items-center justify-between gap-5 md:p-5 sm:flex-col">
                <Text size="7xl" as="p">
                  Sản phẩm gần đây
                </Text>
                <div className="flex w-[13%] items-center gap-5 sm:w-full">
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
              <div className="flex md:flex-col">
                <div className="flex flex-1 items-center md:self-stretch">
                  <Button
                    color="white_A700"
                    shape="circle"
                    className="relative z-[5] w-[50px] !rounded-[25px] border border-solid border-gray-200_01"
                  >
                    <Img src="images/img_arrow_left_blue_gray_900.svg" />
                  </Button>
                  <HomePageThree
                    description="Áo hoodie Nike thấm hút mồ hôi cho ngày đông lạnh "
                    className="relative ml-[-25px] flex-1 sm:pb-5"
                  />
                </div>
                <HomePageFour
                  titletext="Áo thun nam thoáng mát, thích hợp chạy bộ"
                  className="flex-1 md:ml-0 md:self-stretch"
                />
                <div className="relative z-[6] ml-[-1px] flex w-[60%] md:ml-0 md:w-full md:flex-col">
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30_2.png"
                        alt="thời_trang"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h6" className="w-full leading-[150%]">
                        Áo mùa đông lạnh giá Nike chần bông ấm áp
                      </Heading>
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
                          <span className="text-blue_gray-900_02">278.000</span>
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
                      <Img
                        src="images/img_image_30_230x230.png"
                        alt="imagethirty"
                        className="h-[230px] w-[230px] object-cover"
                      />
                    </div>
                    <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                      <Text size="xs" as="p" className="!text-blue_gray-600">
                        Thời trang
                      </Text>
                      <Heading as="h6" className="w-full leading-[150%]">
                        Quần tập nữ Adidas siêu co giãn chống nước
                      </Heading>
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
                          <span className="text-blue_gray-900_02">278.000</span>
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
                  <div className="flex w-full items-center">
                    <HomePageThree
                      image="images/img_image_30_3.png"
                      description="Áo khoác chống nắng Adidas màu trắng tiện lợi"
                      className="flex-1 sm:pb-5"
                    />
                    <Button
                      color="white_A700"
                      shape="circle"
                      className="relative ml-[-25px] w-[50px] !rounded-[25px] border border-solid border-blue_gray-900"
                    >
                      <Img src="images/img_arrow_right.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-md flex flex-col items-center gap-6 md:p-5">
              <Text as="p" className="!font-normal">
                Được tin cậy bởi những Nhãn Hàng Lớn
              </Text>
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
        <Footer1 className="mt-[100px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
