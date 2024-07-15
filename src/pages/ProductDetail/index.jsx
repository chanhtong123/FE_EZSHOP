import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';
import { getToken, removeToken } from '../../utils/authUtils';
import { Helmet } from "react-helmet";
import CustomToast from "../../components/CustomToast";




import {
  Button,
  Img,
  Text,

} from "../../components";


const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartId, setCartId] = useState(null);
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/guest/api/products/${id}`
        );
        setProduct(response.data);
        setMainImage(response.data.image)
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);


  useEffect(() => {
    const fetchCartId = async () => {

      const token = getToken();


      try {
        const response = await axiosInstance.get('/api/cart/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCartId(response.data.id);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCartId();
  }, []);



  const handleAddToCart = async () => {
    const token = getToken();

    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await axiosInstance.post('http://localhost:8080/cart_item/cart-details/create', null, {
        params: {
          productId: product.id,
          cartId: cartId,
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setToastMessage("Thêm sản phẩm thành công.Hãy vào trang thanh toán để có thể xem giỏ hàng của bạn");
      setToastType('success');
      console.log("Added to cart:", response.data);
      
    } catch (error) {
      console.error("Error adding to cart:", error);
      setToastMessage("Lỗi.");
      setToastType('error');
    }
  };



 
  


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
                  Trang chủ / Thời Trang  / {product.name}
                </Text>
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="w-[6%] md:w-full">
                    <div className="flex flex-col gap-2.5 md:flex-row" >

                      <div

                        className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5"
                      >
                        <Img
                          onClick={() => setMainImage(product.image2)}
                          src={product.image2}
                          alt="imageseventyfiv"
                          className="h-[60px] w-[60px] object-cover"
                        />

                      </div>
                      <div

                        className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5"
                      >
                        <Img
                          onClick={() => setMainImage(product.image3)}
                          src={product.image3}
                          alt="imageseventyfiv"
                          className="h-[60px] w-[60px] object-cover"
                        />

                      </div>
                      <div

                        className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5"
                      >
                        <Img
                          onClick={() => setMainImage(product.image4)}
                          src={product.image4}
                          alt="imageseventyfiv"
                          className="h-[60px] w-[60px] object-cover"
                        />



                      </div>

                      <div

                        className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5"
                      >
                        <Img
                          onClick={() => setMainImage(product.image)}
                          src={product.image}
                          alt="imageseventyfiv"
                          className="h-[60px] w-[60px] object-cover"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="flex w-[47%] flex-col items-start md:w-full">

                    <Img
                      src={mainImage}
                      alt="ảnh product"
                      className="mt-3.5 h-[612px] w-[612px] object-cover"
                    />

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
                      <div className="flex gap-2 sm:flex-col">
                        <Button
                          onClick={handleAddToCart}
                          size="9xl"
                          color="bg-green-100"
                          className="w-[60%] rounded-[5px] border border-solid border-green-A700_02 !text-green-700 sm:px-2"
                        >
                          Thêm Vào Giỏ hàng
                        </Button>
                        <CustomToast message={toastMessage} type={toastType} />
                     
                        <Button
                          size="9xl"
                          className="w-[40%] rounded-[5px] border border-solid border-green-A700_02 !text-gray-100_02 sm:px-2"
                        >
                          Mua Ngay
                        </Button>
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
                    {/* <Text size="3xl" as="p">
                      Tổng Quan
                    </Text> */}
                    <div className="flex flex-col gap-[17px] self-stretch pb-[9px]">
                      <Text as="p" className="!font-normal leading-7 !text-blue_gray-600">
                        {/* {product.overview} */}
                      </Text>
                      <div className="flex items-center">
                        {/* <Text as="p" className="!font-normal !text-green-A700_02">
                          Xem Thêm
                        </Text> */}
                        {/* <Img
                          src="images/img_vector_green_a700_02.svg"
                          alt="vector_fifteen"
                          className="mb-[5px] h-[5px] self-end"
                        /> */}
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
             
                <div className="flex flex-col items-end gap-7">
               

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
