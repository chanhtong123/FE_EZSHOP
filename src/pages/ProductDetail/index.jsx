import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosConfig";
import { getToken, removeToken } from "../../utils/authUtils";
import { Helmet } from "react-helmet";
import CustomToast from "../../components/CustomToast";
import HomePageSix from "../../components/HomePageSix";

import {
  Button,
  Img,
  Slider,
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
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartId, setCartId] = useState(null);
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [products, setProducts] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shop, setShop] = useState(null);

  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ezshop-be.azurewebsites.net/guest/api/products/${id}`
        );
        setProduct(response.data);
        setMainImage(response.data.image);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const response = await axios.get(
          `https://ezshop-be.azurewebsites.net/guest/shop/byProduct/${id}`
        );
        setShop(response.data);
        console.log("Shop: ", response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchShop();
  }, [id]);

  useEffect(() => {
    const fetchCartId = async () => {
      const token = getToken();

      try {
        const response = await axiosInstance.get("/api/cart/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCartId(response.data.id);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCartId();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axiosInstance.get(
          "https://ezshop-be.azurewebsites.net/guest/api/products/search"
        );
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

  const handleAddToCart = async () => {
    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "https://ezshop-be.azurewebsites.net/cart_item/cart-details/create",
        null,
        {
          params: {
            productId: product.id,
            cartId: cartId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setToastMessage("Thêm sản phẩm thành công!");
      setToastType("success");
      console.log("Added to cart:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setToastMessage("Lỗi.");
      setToastType("error");
    }
  };

  

  const handleAddToCart2 = async () => {
    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "https://ezshop-be.azurewebsites.net/cart_item/cart-details/create",
        null,
        {
          params: {
            productId: product.id,
            cartId: cartId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setToastMessage("Thêm sản phẩm thành công!");
      setToastType("success");
      console.log("Added to cart:", response.data);
      if (response.status === 201) {
        navigate("/cartdetail");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setToastMessage("Lỗi.");
      setToastType("error");
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
                  Trang chủ / Thời Trang / {product.name}
                </Text>
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="w-[6%] md:w-full">
                    <div className="flex flex-col gap-2.5 md:flex-row">
                      <div className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5">
                        <Img
                          onClick={() => setMainImage(product.image2)}
                          src={product.image2}
                          alt="imageseventyfiv"
                          className="h-[60px] w-[60px] object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5">
                        <Img
                          onClick={() => setMainImage(product.image3)}
                          src={product.image3}
                          alt="imageseventyfiv"
                          className="h-[60px] w-[60px] object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5">
                        <Img
                          onClick={() => setMainImage(product.image4)}
                          src={product.image4}
                          alt="imageseventyfiv"
                          className="h-[60px] w-[60px] object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col rounded-md border border-solid border-gray-200_01 bg-white-A700 p-2.5">
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
                            {product.price.toLocaleString()}đ
                          </span>
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
                          onClick={handleAddToCart2}
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
                    {shop && (
                      <div className="flex flex-row gap-[17px] self-stretch pb-[9px] items-center">

                        <Link to={`/sales-shop/${shop.shopId}`}>
                          <Img
                            src={shop.image}
                            className="h-[200px] w-[200px] rounded-md object-cover"
                            alt={shop.nameShop}
                          />
                        </Link>


                        <div className="flex flex-col gap-[10px]">
                          <Text
                            as="p"
                            style={{ fontWeight: "bold", color: "#FF0000" }}
                            className="leading-7"
                          >
                            {shop.nameShop}
                          </Text>

                          <Text as="p" className="!font-normal ">
                            Địa chi: {shop.address}
                          </Text>
                        </div>
                      </div>

                    )}
                  </div>

                  <div className="h-px bg-gray-200_01" />
                </div>

                <div className="flex flex-col items-start gap-[15px]">
                  <div className="flex items-center justify-between gap-5 self-stretch">
                    <Text size="3xl" as="p">
                      Thông Tin Chi Tiết
                    </Text>
                  </div>
                  <div className="flex w-[87%] flex-col gap-[19px] md:w-full">
                    <div className="flex flex-col items-start gap-[13px]">
                      <Text as="p">Đặc điểm</Text>
                      <div className="self-stretch">
                        <div className="flex items-start md:flex-col">
                          <Text
                            as="p"
                            className="ml-2.5 w-full !font-normal leading-10 !text-blue_gray-600 md:ml-0"
                          >
                            {product.description
                              .split("\n")
                              .map((line, index) => (
                                <span key={index}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[13px]">
                      <div className="flex items-start self-stretch md:flex-col"></div>
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
                <section>
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
                                    <span style={{ color: "red" }}>
                                      {product.price} VND
                                    </span>
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
            </div>
          </div>
          <div className="flex flex-col gap-[60px]"></div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
