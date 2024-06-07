// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import {
  Text,
  Heading,
  RatingBar,
  Img,
  Button,
  CheckBox,
  SeekBar,
  Input,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
import HomePageThree from "../../components/HomePageThree";
import MegaMenu1 from "../../components/MegaMenu1";
import SalesShopPagination from "../../components/SalesShopPagination";
import { Link } from "react-router-dom";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ProductPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [situation, setSituation] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState("");

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/guest/api/products"
  //       ); // Đảm bảo đường dẫn này đúng
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Lỗi khi lấy sản phẩm:", error);
  //       setError("Lỗi khi lấy sản phẩm: " + error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // if (loading) {
  //   return <div>Đang tải...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (products.length === 0) {
  //   return <div>Không có sản phẩm nào</div>;
  // }
  // const handleSearch = async () => {
  //   try {
  //     const situationParam = situation.length > 0 ? situation[0] : null; // API expects a single situation

  //     const response = await axios.get(
  //       "http://localhost:8080/guest/api/products/search",
  //       {
  //         params: {
  //           name,
  //           price: price || null, // Ensure null if price is empty
  //           brand: selectedBrands.length > 0 ? selectedBrands.join(",") : null,
  //           situation: situationParam,
  //         },
  //         paramsSerializer: (params) => {
  //           return Object.entries(params)
  //             .filter(([key, value]) => value !== null && value !== "") // Filter out null or empty values
  //             .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  //             .join("&");
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching products", error);
  //   }
  // };
  const fetchProducts = async (searchParams = {}) => {
    setLoading(true);
    setError("");
    try {
      const situationParam =
        searchParams.situation?.length > 0 ? searchParams.situation[0] : null; // API expects a single situation

      const response = await axios.get(
        "http://localhost:8080/guest/api/products/search",
        {
          params: {
            name: searchParams.name || "",
            minPrice: searchParams.minPrice || null, // Ensure null if price is empty
            maxPrice: searchParams.maxPrice || null,
            brand:
              searchParams.selectedBrands?.length > 0
                ? searchParams.selectedBrands.join(",")
                : null,
            situation: situationParam,
          },
          paramsSerializer: (params) => {
            return Object.entries(params)
              .filter(([key, value]) => value !== null && value !== "") // Filter out null or empty values
              .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
              .join("&");
          },
        }
      );
      setProducts(response.data); // Update products state with the fetched data
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
      setError("Error fetching products: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  const handleSearch = () => {
    // Fetch products when search button is clicked
    fetchProducts({
      name,
      minPrice,
      maxPrice,
      selectedBrands,
      situation,
    });
  };

  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[67px] bg-white-A700 sm:gap-[33px]">
        <div className="w-[74%] md:w-full md:p-5">
          <div className="flex items-start md:flex-col">
            <div className="container mx-auto p-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Tìm kiếm sản phẩm theo tên
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tên sản phẩm"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Giá
                </label>
                <div className="flex">
                  <input
                    id="minPrice"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Từ"
                    className="w-1/2 mr-2 border rounded px-3 py-2"
                  />
                  <input
                    id="maxPrice"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Đến"
                    className="w-1/2 border rounded px-3 py-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Thương hiệu
                </label>
                <div className="flex flex-col">
                  {["Nike", "Adidas", "Hihi", "Hoho"].map((brandName) => (
                    <label
                      key={brandName}
                      className="flex items-center gap-2 mb-2"
                    >
                      <input
                        type="checkbox"
                        value={brandName}
                        checked={selectedBrands.includes(brandName)}
                        onChange={(e) => {
                          const newBrand = e.target.value;
                          setSelectedBrands((prevBrands) =>
                            prevBrands.includes(newBrand)
                              ? prevBrands.filter((b) => b !== newBrand)
                              : [...prevBrands, newBrand]
                          );
                        }}
                      />
                      {brandName}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Tình trạng (%)
                </label>
                <div className="flex flex-col">
                  {[100, 95, 90, 85, 80].map((value) => (
                    <label key={value} className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        value={value}
                        checked={situation.includes(value)}
                        onChange={(e) => {
                          const newValue = parseInt(e.target.value);
                          setSituation((prevSituation) =>
                            prevSituation.includes(newValue)
                              ? prevSituation.filter((sit) => sit !== newValue)
                              : [newValue]
                          );
                        }}
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Tìm kiếm
              </button>
            </div>

            <div className="relative ml-[-3px] flex flex-1 flex-col items-center md:ml-0 md:self-stretch">
              <div className="flex w-[96%] items-start justify-center gap-[23px] rounded-md bg-gray-100_02 px-4 pt-4 md:w-full md:flex-col">
                <div className="mt-[52px] flex w-[50%] flex-col items-start md:w-full">
                  <Heading
                    size="8xl"
                    as="h1"
                    className="w-full uppercase leading-[60px]"
                  >
                    GIẢM GIÁ 500K CHO THỜI TRANG Đôi
                  </Heading>
                  <Text
                    as="p"
                    className="w-[73%] !font-normal leading-7 !text-blue_gray-600 md:w-full"
                  >
                    Tất cả các loại sản phẩm ở một nơi. Bắt đầu từ $1. Nhận tiền
                    hoàn lại và ưu đãi
                  </Text>
                  <Button
                    size="9xl"
                    shape="round"
                    className="mt-[17px] min-w-[176px] !text-gray-100_02 sm:px-5"
                  >
                    Khám phá ngay
                  </Button>
                </div>
                <div className="flex w-[41%] items-center justify-center md:w-full sm:flex-col">
                  <Img
                    src="images/img_model_man.png"
                    alt="modelman"
                    className="h-[384px] w-[49%] rounded-md object-cover sm:w-full"
                  />
                  <Img
                    src="images/img_model_women.png"
                    alt="modelwomen"
                    className="relative ml-[-80px] h-[376px] w-[51%] rounded-md object-cover sm:ml-0 sm:w-full"
                  />
                </div>
              </div>
              <Text
                size="7xl"
                as="p"
                className="ml-[25px] mt-[60px] self-start md:ml-0"
              >
                Sản phẩm bán chạy
              </Text>
              <div className="mt-[30px] flex self-stretch md:flex-col">
                <div className="flex w-full items-center">
                  <Button
                    color="white_A700"
                    shape="circle"
                    className="relative z-[1] w-[50px] !rounded-[25px] border border-solid border-gray-200_01"
                  >
                    <Img src="images/img_arrow_left_blue_gray_900.svg" />
                  </Button>
                  <HomePageThree
                    starimage1="images/img_star_1_1.svg"
                    starimage2="images/img_star_1_1.svg"
                    starimage3="images/img_star_1_1.svg"
                    starimage4="images/img_star_1_1.svg"
                    starimage5="images/img_star_1_1.svg"
                    className="relative ml-[-25px] flex-1 sm:pb-5"
                  />
                </div>
                <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[19px]">
                  <div className="relative h-[280px] self-stretch bg-white-A700 pb-[19px] pl-3.5 pr-4 pt-5 md:h-auto">
                    <Img
                      src="images/img_image_30_1.png"
                      alt="imagethirty"
                      className="h-[230px] w-[230px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-end gap-[74px] md:gap-[55px] sm:gap-[37px]">
                      <div className="flex flex-col gap-[7px]">
                        <Button
                          color="gray_100_05"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px] shadow-xs"
                        >
                          <Img src="images/img_heart_1.svg" />
                        </Button>
                        <Button
                          color="white_A700"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px]"
                        >
                          <Img src="images/img_show_1.svg" />
                        </Button>
                        <Button
                          color="white_A700"
                          size="4xl"
                          shape="circle"
                          className="w-[34px] !rounded-[17px]"
                        >
                          <Img src="images/img_graph_1.svg" />
                        </Button>
                      </div>
                      <Button
                        size="9xl"
                        shape="round"
                        className="w-full sm:px-5"
                      >
                        Thêm vào giỏ hàng
                      </Button>
                    </div>
                  </div>
                  <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                    <Text size="xs" as="p" className="!text-blue_gray-600">
                      Thời trang
                    </Text>
                    <Heading as="h2" className="w-full leading-[150%]">
                      Áo tập gym thoáng mát Nike thấm hút mồ hôi
                    </Heading>
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
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                    <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                      <Img
                        src="images/img_image_30_2.png"
                        alt="imagethirty"
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
                </a>
                <div className="flex w-full items-center">
                  <HomePageThree
                    image="images/img_image_30_230x230.png"
                    description="Khoác gió chống nắng thời trang Adidas"
                    starimage1="images/img_star_1_1.svg"
                    starimage2="images/img_star_1_1.svg"
                    starimage3="images/img_star_1_1.svg"
                    starimage4="images/img_star_1_1.svg"
                    starimage5="images/img_star_1_1.svg"
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
              <div className="mt-[71px] flex w-[96%] flex-col gap-8 md:w-full">
                <div className="flex flex-col items-start gap-[51px] sm:gap-[25px]">
                  <Text size="7xl" as="p">
                    Tất cả sản phẩm
                  </Text>
                </div>
              </div>
              <div className="mt-[31px] grid w-[96%] grid-cols-4 justify-center gap-px md:grid-cols-2 sm:grid-cols-1">
                {products.map((product) => {
                  console.log("Rendering product:", product);
                  return (
                    <Link
                      key={product.id}  
                      to={`/productdetail/${product.id}`}
                      rel="noopener noreferrer"
                    >
                      <div className="flex w-full flex-col items-center border border-solid border-gray-200_01 bg-white-A700 pb-[25px] sm:pb-5">
                        <div className="self-stretch bg-white-A700 px-5 py-[25px] sm:py-5">
                          <Img
                            // src={product.imageUrl || 'images/img_image_30_230x230.png'} // Assuming imageUrl is a field in your product data
                            alt={product.name || "thời_trang"}
                            className="h-[230px] w-[230px] object-cover"
                          />
                        </div>
                        <div className="flex w-[86%] flex-col items-start gap-[11px] md:w-full md:p-5">
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            {Array.isArray(product.categories)
                              ? product.categories
                                  .map((category) => category.name)
                                  .join(", ")
                              : "Thời trang"}
                          </Text>
                          <Heading as="h5" className="w-full leading-[150%]">
                            {product.product_name}
                          </Heading>
                          {/* <Text size="xs" as="p" className="!text-blue_gray-600">
            {product.description}
          </Text> */}
                          <div className="flex flex-wrap items-center gap-2.5">
                            <Heading size="3xl" as="h6" className="flex">
                              <span className="text-blue_gray-900_02">
                                {typeof product.price === "number"
                                  ? product.price.toLocaleString()
                                  : "278.000"}
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
                              {typeof product.price === "number"
                                ? `${product.price.toLocaleString()}đ`
                                : "328.000đ"}
                            </Text>
                          </div>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            {product.brand}
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            {product.code}
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            {product.weight}
                          </Text>
                          {/* {product.title && (
            <Text size="xs" as="p" className="!text-blue_gray-600">
              {product.title.name}
            </Text>
          )} */}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <SalesShopPagination className="mt-8 w-[42%] gap-[22px] md:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
