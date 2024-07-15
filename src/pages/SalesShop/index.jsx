import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Button,
  Text,
  RatingBar,
  Img,
  Heading
} from "../../components";
import Footer1 from "../../components/Footer1";
import SalesShopPagination from "../../components/SalesShopPagination";



export default function SalesShopPage() {

  const [shop, setShop] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const { id } = useParams();




  useEffect(() => {
    const fetchProfileItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/public/shop/${id}`);
        setShop(response.data);

        const productsResponse = await axios.get(`http://localhost:8080/guest/api/products/products/shop/${id}`);
        setProductsData(productsResponse.data);

      } catch (error) {
        console.error('Đã xảy ra lỗi khi lấy dữ liệu:', error.message);
      }
    };

    fetchProfileItems();
  }, [id]);



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
        <div className="container-md mt-[17px] flex flex-col md:p-5">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p">
              /
            </Text>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Text size="md" as="p" className="self-end">
                Danh sách cửa hàng
              </Text>
            </a>
            <Text size="md" as="p">
              /
            </Text>
            <text size="md" as="p" className="self-start !text-blue_gray-600">
              {shop.nameShop}
            </text>
          </div>
          <div className="relative mt-6 h-[400px] pr-[5px] md:h-auto">
            <img
              src={shop.backgroundImage}
              alt="youngmanweari"
              className="h-[400px] w-full rounded-md object-cover"
            />



            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-between gap-5 rounded-md bg-blue_gray-900_66 py-[150px] pl-[60px] pr-[61px] md:p-5 sm:relative sm:flex-col">
              <div className="flex w-[24%] items-center justify-center gap-5 rounded-md sm:w-full">
                <div className="flex w-[35%] flex-col items-start  pb-5 pl-5 pr-[9px]">
                  <button
                    color="white_A700"
                    size="xs"
                    shape="circle"
                    className="w-[20px] self-end !rounded-[10px]"
                  >
                  </button>
                  <img
                    src={shop.image}

                    alt="imageninetyeigh"
                    className="w-full h-full rounded-[50%]"
                  />
                
                </div>

                <div className="flex flex-1 flex-col items-start gap-3.5 rounded-md">
                  <text
                    size="8xl"
                    as="h1"
                    className="uppercase !text-white-A700"
                  >
                    {shop.nameShop}
                  </text>
                
              
                </div>

              </div>

              <div className="flex flex-1 flex-col items-start gap-3.5 rounded-md">
                  <text
                    size="8xl"
                    as="h1"
                    className="uppercase !text-white-A700"
                  >
                    {shop.address}
                  </text>
                
              
                </div>


              <Button
                size="9xl"
                shape="round"
                className="min-w-[130px] sm:p-5 sm:px-5"
              >
                Theo dõi
              </Button>



              

            </div>

           

          </div>

          <div className="mt-[62px] flex flex-col gap-[61px] sm:gap-[30px]">
            <div className="flex flex-col gap-[30px]">

              <div className="flex flex-col items-center gap-8">
                <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
                  <Text size="7xl" as="p">
                    Sản phẩm của cửa hàng
                  </Text>

                </div>


                {/* product_shop */}

                <div className="grid grid-cols-5 justify-center gap-px self-stretch md:grid-cols-3 sm:grid-cols-1">

                  {productsData.map(product => (

                    <Link
                      key={product.id}
                      to={`/productdetail/${product.id}`}
                      rel="noopener noreferrer"
                    >

                      <div key={product.id}>
                        <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                          <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">

                            <Img
                              src={product.image}
                              alt="thời_trang"
                              className="h-[230px] w-[230px] object-cover"
                            />

                          </div>
                          <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                            <Text size="xs" as="p" className="!text-blue_gray-600">
                              {product.category}
                            </Text>

                            <Heading as="h2" className="w-full leading-[150%]">
                              {product.name}
                            </Heading>

                            <div className="flex w-[70%] items-start gap-2.5 md:w-full">
                              <RatingBar
                                value={1}
                                isEditable={true}
                                size={10}
                                className="flex justify-between rounded-[5px]"
                              />

                            </div>
                            <div className="flex flex-wrap items-center gap-2.5">
                              <Heading size="3xl" as="h3" className="flex">
                                <span className="text-blue_gray-900_02  text-red-600">{product.price}đ</span>
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
                    </Link>
                  ))}
                </div>


                {/* <SalesShopPagination className="w-[44%] gap-[10px] md:w-full mt-2" /> */}


              </div>

            </div>
            {/* <div className="flex w-[66%] flex-col gap-[30px] md:w-full">
              <div className="flex w-[65%] flex-col items-start md:w-full">
                <Text
                  size="5xl"
                  as="p"
                  className="relative z-[1] !font-jost !text-blue_gray-600"
                >
                  <span className="font-bevietnampro text-blue_gray-600">
                    Sản phẩm
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-900_02">
                    Về chúng tôi&nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; Chính sách Đánh giá
                  </span>
                </Text>
                <Img
                  src="images/img_rectangle_264.svg"
                  alt="image"
                  className="ml-[153px] h-[2px] w-[32%] md:ml-0"
                />
              </div>
              <div className="flex flex-col items-start gap-[23px]">
                <Text size="3xl" as="p">
                  Điều gì tạo nên sự khác biệt của chúng tôi?
                </Text>
                <Text as="p" className="w-full !font-normal leading-7">
                  <>
                    Khởi đầu hành trình vào năm 2013, LIBÉ lấy cảm hứng sáng tạo
                    từ nhu cầu sở hữu một tủ đồ đơn giản nhưng vẫn hiện đại của
                    các cô gái. Đó là lí do vì sao ở LIBÉ, bạn luôn có thể dễ
                    dàng chọn cho mình một bộ trang phục đẹp - dù là để đến công
                    sở hay đi cà phê dạo phố cùng bạn bè. <br /> Đối với chúng
                    mình, từng sản phẩm gửi đến khách hàng đều mang theo sự chân
                    thật, cảm hứng tươi vui.
                  </>
                </Text>
                <div className="flex w-[94%] md:w-full">
                  <div className="flex w-full items-center gap-2.5 md:flex-col">
                    <div className="flex w-[7px] flex-col gap-[33px]">
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                      <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                    </div>
                    <Text as="p" className="w-full !font-normal leading-10">
                      <>
                        Bên cạnh sự trưởng thành của thương hiệu, LIBÉ Community
                        cũng dần được hình thành. <br /> được chăm chút tỉ mỉ
                        bằng cả tấm lòng đúng như những giá trị mà LIBÉ cam kết.
                        <br /> Việc chọn mua một bộ cánh từ LIBÉ đã trở nên
                        nhanh chóng và dễ dàng hơn bao giờ hết. <br /> Rất vui
                        vì bạn đã ở đây! Hãy cùng LIBÉ mang lại một làn gió mới
                        cho tủ quần áo của mình nhé!
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="flex flex-col items-end gap-[26px]">
              <div className="flex w-[29%] flex-col items-end self-start md:w-full">
                <Text as="p" className="!font-jost !text-blue_gray-600">
                  <span className="font-bevietnampro text-blue_gray-600">
                    Sản phẩm
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    Về chúng tôi
                  </span>
                  <span className="font-bevietnampro text-blue_gray-900_02">
                    &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-600">
                    &nbsp; Chính sách &nbsp;
                  </span>
                  <span className="font-bevietnampro text-blue_gray-900">
                    Đánh giá
                  </span>
                </Text>
                <Img
                  src="images/img_rectangle_264.svg"
                  alt="image"
                  className="h-[2px] w-[17%]"
                />
              </div>
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[29%] flex-col items-start gap-[27px] md:w-full">
                  <div className="flex w-[58%] items-center gap-[22px] md:w-full">
                    <Text size="8xl" as="p" className="!font-jost">
                      4.9
                    </Text>
                    <div className="flex flex-1 flex-col items-start gap-[13px]">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={17}
                        className="flex justify-between self-stretch rounded-[5px]"
                      />
                      <Text size="lg" as="p">
                        2 đánh giá
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] self-stretch">
                    <div className="flex items-center gap-[21px] sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        5 sao
                      </Text>
                      <div className="mt-2 h-[6px] w-[78%] self-start" />
                      <Text as="p" className="!font-jost !font-normal">
                        89%
                      </Text>
                    </div>
                    <div className="flex items-center sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        4 sao
                      </Text>
                      <div className="ml-5 mt-2 h-[6px] flex-1 self-start sm:ml-0 sm:self-stretch" />
                      <Text
                        as="p"
                        className="ml-7 !font-jost !font-normal sm:ml-0"
                      >
                        4%
                      </Text>
                    </div>
                    <div className="flex items-center sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        3 sao
                      </Text>
                      <div className="ml-[21px] mt-2 h-[6px] flex-1 self-start sm:ml-0 sm:self-stretch" />
                      <Text
                        as="p"
                        className="ml-[29px] !font-jost !font-normal sm:ml-0"
                      >
                        3%
                      </Text>
                    </div>
                    <div className="flex items-center sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        2 sao
                      </Text>
                      <div className="ml-[21px] mt-2 h-[6px] flex-1 self-start sm:ml-0 sm:self-stretch" />
                      <Text
                        as="p"
                        className="ml-[30px] !font-jost !font-normal sm:ml-0"
                      >
                        1%
                      </Text>
                    </div>
                    <div className="flex items-center gap-[23px] sm:flex-col">
                      <Text as="p" className="!font-jost !font-normal">
                        1 sao
                      </Text>
                      <div className="mt-2 h-[6px] flex-1 self-start sm:self-stretch" />
                      <Text as="p" className="!font-jost !font-normal">
                        4%
                      </Text>
                    </div>
                  </div>
                  <Button
                    size="9xl"
                    variant="outline"
                    shape="round"
                    className="min-w-[169px] font-medium sm:px-5"
                  >
                    Viết đánh giá
                  </Button>
                </div>

              </div>
            </div> */}
          </div>
        </div>
        {/* <Footer1 className="mt-20 justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" /> */}
      </div>
    </>
  );
}
