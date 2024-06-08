import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Button,
  Img,
  Text,
  CheckBox,
  Input,
  TextArea,
  RatingBar,
  Heading,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
import HomePageFour from "../../components/HomePageFour";
import HomePageThree from "../../components/HomePageThree";
import ProductDetailDetails from "../../components/ProductDetailDetails";
const data = [
  { imageseventyfiv: "images/img_image_75.png" },
  { imageseventyfiv: "images/img_image_76.png" },
  { imageseventyfiv: "images/img_image_65.png" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/guest/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
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
     
        <div className="mt-[21px] flex w-[76%] flex-col gap-20 md:w-full md:gap-[60px] md:p-5 sm:gap-10">
          <div className="container-xs flex flex-col gap-[60px] sm:gap-[30px]">
            <div className="pr-[5px]">
              <div className="flex flex-col items-start gap-[50px]">
                <Text
                  size="md"
                  as="p"
                  className="!font-bevietnamprolight !font-light"
                >
                  Trang chủ / Thời Trang / Thời Trang Nam / Áo Thun
                </Text>
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="w-[6%] md:w-full">
                    <div className="flex flex-col gap-2.5 md:flex-row">
                      {data.map((d, index) => (
                        <div
                          key={"thumbnail" + index}
                          className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5"
                        >
                          <Img
                            src={d.image}
                            alt="imageseventyfiv"
                            className="h-[60px] w-[60px] object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-[47%] flex-col items-start md:w-full">
                    <Img
                      src={product.image}
                      alt="fullscreenone"
                      className="h-[30px] w-[30px] self-end"
                    />
                    <Img
                      src={product.image}
                      alt="ảnh product"
                      className="mt-3.5 h-[612px] w-[612px] object-cover"
                    />
                    <Text size="lg" as="p" className="ml-[209px] mt-6 md:ml-0">
                      Cuộn để phóng to hình ảnh
                    </Text>
                  </div>
                  <div className="mt-2 flex w-[32%] flex-col items-start gap-[19px] rounded-md border border-solid border-gray-200_01 bg-white-A700 py-[30px] pl-[30px] pr-[26px] shadow-xs md:w-full sm:p-5">
                    <div>
                      <div className="flex flex-col gap-[18px] self-stretch">
                        <div className="flex items-center gap-2.5 self-start sm:flex-col">
                          <Text size="s" as="p" className="uppercase">
                            {product.brand}
                          </Text>
                          <div className="h-[20px] w-px bg-gray-200_01 sm:h-px sm:w-[20px]" />
                        </div>
                        <Text size="4xl" as="p" className="leading-[27px]">
                          {product.name}
                        </Text>
                        <div className="h-px bg-gray-200_01" />
                      </div>
                      <div className="flex flex-wrap items-center gap-[9px]">
                        <Text size="6xl" as="p" className="flex !font-jost">
                          <span className="text-blue_gray-900_02">
                            {product.price.toLocaleString()}
                          </span>
                          <a
                            href="#"
                            className="text-blue_gray-900_02 underline"
                          >
                            đ
                          </a>
                        </Text>
                      </div>
                      <div className="flex w-[54%] flex-col items-start gap-3 md:w-full">
                        <Text
                          size="md"
                          as="p"
                          className="!font-jost !text-gray-900_06"
                        >
                          <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                            Màu sắc:
                          </span>
                          <span className="font-bevietnampro text-blue_gray-900_02">
                            &nbsp;{product.color}
                          </span>
                        </Text>
                      </div>
                      <div className="flex w-[74%] flex-col items-start gap-2.5 md:w-full">
                        <Text
                          size="md"
                          as="p"
                          className="!font-jost !text-gray-900_06"
                        >
                          <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                            Trọng lượng:
                          </span>
                          <span className="font-bevietnampro text-blue_gray-900_02">
                            &nbsp;{product.weight}g
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[74%] flex-col items-start gap-2.5 md:w-full">
                      <Text
                        size="md"
                        as="p"
                        className="!font-jost !text-gray-900_06"
                      >
                        <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                          Size:
                        </span>
                        <span className="font-bevietnampro text-blue_gray-900_02">
                          &nbsp;M
                        </span>
                      </Text>
                    </div>
                    <div className="h-px self-stretch bg-gray-200_01" />
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex gap-5 sm:flex-col">
                        <a
                          href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                          target="_blank"
                        >
                          <Button
                            size="10xl"
                            className="min-w-[236px] rounded-[26px] border border-solid border-green-A700_02 !text-gray-100_02 sm:px-5"
                          >
                            Thêm Vào Giỏ hàng
                          </Button>
                        </a>
                      </div>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          size="10xl"
                          variant="outline"
                          className="w-full rounded-[26px] font-bevietnamprosemibold font-semibold sm:px-5"
                        >
                          Mua Ngay
                        </Button>
                      </a>
                      <div className="flex items-center self-start sm:flex-col">
                        <div className="flex gap-1 self-start">
                          <Img
                            src="images/img_heart_1.svg"
                            alt="heartone"
                            className="h-[16px] w-[16px]"
                          />
                          <Text size="xs" as="p">
                            Yêu Thích
                          </Text>
                        </div>
                        <div className="ml-1 h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />

                        <div className="ml-3 h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />

                        <div className="ml-[25px] h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />
                        <div className="ml-[7px] flex gap-[9px] sm:ml-0">
                          <Img
                            src="images/img_share_1.svg"
                            alt="shareone"
                            className="h-[16px] w-[16px] self-end"
                          />
                          <Text size="xs" as="p" className="self-start">
                            Chia sẻ
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[23px]">
              <div className="flex w-[66%] flex-col gap-6 md:w-full">
                <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-[15px]">
        <Text size="3xl" as="p">
          Tổng Quan
        </Text>
        <div className="flex flex-col gap-[17px] self-stretch pb-[9px]">
          <Text as="p" className="!font-normal leading-7 !text-blue_gray-600">
            {product.overview}
          </Text>
          <div className="flex items-center">
            <Text as="p" className="!font-normal !text-green-A700_02">
              Xem Thêm
            </Text>
            <Img
              src="images/img_vector_green_a700_02.svg"
              alt="vector_fifteen"
              className="mb-[5px] h-[5px] self-end"
            />
          </div>
        </div>
      </div>
                  <div className="h-px bg-gray-200_01" />
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Text size="3xl" as="p">
                      Thông Tin Chi Tiết
                    </Text>
                    <Img
                      src="images/img_arrow_up.svg"
                      alt="arrowup"
                      className="mb-2 h-[7px] self-end"
                    />
                  </div>
                  <div className="flex w-[87%] flex-col gap-[19px] md:w-full">
                    <div className="flex flex-col items-start gap-[13px]">
                      <Text as="p">Đặc điểm</Text>
                      <div className="self-stretch">
                        <div className="flex items-start md:flex-col">
                          <div className="mt-[19px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:self-stretch" />
                          <div className="relative ml-[-4px] mt-[59px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative ml-[-4px] mt-[99px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative mb-[97px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative mb-[57px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <div className="relative mb-[17px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                          <Text
                            as="p"
                            className="ml-2.5 w-full !font-normal leading-10 !text-blue_gray-600 md:ml-0"
                          >
                            <>
                              Thiết kế dáng rộng có phần vai trễ xuống mang lại
                              vẻ ngoài và cảm giác thoải mái. <br /> Chất liệu
                              cotton dày dặn có độ rủ cứng giúp outfits của bạn
                              trông bắt mắt và đặc biệt hơn. <br /> Logo thêu
                              phía trước tạo điểm nhấn tinh tế. <br /> Kiểu dáng
                              loose fit. <br /> Sản phẩm có thể giặt máy. <br />
                              Chất liệu: 100% cotton.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[13px]">
                      <Text as="p" className="capitalize !text-gray-900_06">
                        <span className="text-blue_gray-900_02">
                          Hướng&nbsp;
                        </span>
                        <span className="text-blue_gray-900_02">
                          dẫn chọn kích cỡ quần áo phù hợp
                        </span>
                      </Text>
                      <div className="flex items-start self-stretch md:flex-col">
                        <div className="mt-[19px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:self-stretch" />
                        <div className="relative ml-[-4px] mt-[59px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <div className="relative ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <div className="relative mb-[57px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <div className="relative mb-[17px] ml-[-4px] h-[4px] w-[4px] flex-1 rounded-sm bg-blue_gray-900_02 md:ml-0 md:self-stretch" />
                        <Text
                          as="p"
                          className="ml-2.5 w-full !font-normal leading-10 !text-blue_gray-600 md:ml-0"
                        >
                          <>
                            Để đo được kích cỡ đúng, dùng thước dây đo. <br />
                            Đo quanh phần hẹp nhất của thắt lưng, giữ thước dây
                            thẳng theo phương ngang. <br /> Đứng khép hai chân
                            và đo phần nở nhất của hông, giữ thước dây thẳng
                            theo phương ngang. <br /> Đo chiều dài từ đỉnh vai
                            cho đến cuối tay áo. <br /> Xin lưu ý số đo này dựa
                            trên kiểu đường may viền trong thông thường.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full self-stretch bg-gray-200_01" />
                </div>
                {/* <div className="flex flex-col gap-[21px]">
                  {[...Array(5)].map((d, index) => (
                    <ProductDetailDetails
                      key={"listchititthng" + index}
                      className="gap-[22px]"
                    />
                  ))}
                </div> */}
              </div>
              <div className="flex flex-col gap-[17px]">
                <div className="flex w-[66%] items-center justify-between gap-5 md:w-full">
                  <Text size="3xl" as="p" className="!font-bevietnampromedium">
                    Đánh Giá Sản Phẩm
                  </Text>
                  <Img
                    src="images/img_arrow_up_blue_gray_900_02.png"
                    alt="arrowup"
                    className="mb-[5px] h-[7px] self-end object-cover"
                  />
                </div>
                <div className="flex flex-col items-end gap-7">
                  <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                    <div className="flex w-[29%] flex-col items-start md:w-full">
                      <div className="flex w-[58%] items-center gap-[22px] md:w-full">
                        <Text size="8xl" as="p" className="!font-jost">
                          4.9
                        </Text>
                        <div className="flex flex-1 flex-col items-start gap-[13px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            size={17}
                            className="flex justify-between self-stretch"
                          />
                          <Text size="lg" as="p">
                            2 đánh giá
                          </Text>
                        </div>
                      </div>
                      <div className="mt-[23px] flex items-center gap-[21px] self-stretch sm:flex-col">
                        <Text as="p" className="!font-jost !font-normal">
                          5 sao
                        </Text>
                        <div className="mt-2 h-[6px] w-[78%] self-start" />
                        <Text as="p" className="!font-jost !font-normal">
                          89%
                        </Text>
                      </div>
                      <div className="mt-[13px] flex items-center self-stretch sm:flex-col">
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
                      <div className="mt-[13px] flex items-center self-stretch sm:flex-col">
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
                      <div className="mt-[13px] flex items-center self-stretch sm:flex-col">
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
                      <div className="mt-3.5 flex items-center gap-[23px] self-stretch sm:flex-col">
                        <Text as="p" className="!font-jost !font-normal">
                          1 sao
                        </Text>
                        <div className="mt-2 h-[6px] flex-1 self-start sm:self-stretch" />
                        <Text as="p" className="!font-jost !font-normal">
                          4%
                        </Text>
                      </div>
                      <Button
                        size="9xl"
                        variant="outline"
                        shape="round"
                        className="mt-[31px] min-w-[169px] font-medium sm:px-5"
                      >
                        Viết đánh giá
                      </Button>
                    </div>
                  
                  </div>
              
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[60px]">
        
           
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
