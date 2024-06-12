// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import {
  Text,
  Heading,
  Button,
  Img,
  CheckBox,
  SeekBar,
  Input,
  SelectBox,
} from "../../components";
import SalesShopPagination from "../../components/SalesShopPagination";
import { Link } from "react-router-dom";

export default function ProductPage() {

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

        <div className="flex items-start md:flex-col h-full">
          <div className="flex-[1] container mx-auto p-4">
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

          <div className="flex-[4] relative ml-[-3px] flex flex-1 flex-col items-center md:ml-0 md:self-stretch">



            <div className="mt-[71px] flex w-[96%] flex-col gap-8 md:w-full">
              <div className="flex flex-col items-start gap-[51px] sm:gap-[25px]">
                {/* <Text size="7xl" as="p">
                  Tất cả sản phẩm
                </Text> */}
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
                        <img
                          src={product.image}
                          // alt={product.name || "thời_trang"}
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
                          {product.name}
                        </Heading>
                        {/* <Text size="xs" as="p" className="!text-blue_gray-600">
            {product.description}
          </Text> */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <Heading size="3xl" as="h6" className="flex">
                            <span className="text-blue_gray-900_02 text-red-600">
                              {typeof product.price === "number"
                                ? product.price.toLocaleString()
                                : "278.000đ"}
                            </span>
                          </Heading>
                          <Text
                            size="md"
                            as="p"
                            className="self-start capitalize  line-through" 
                          >
                            {typeof product.price === "number"
                              ? `${product.price.toLocaleString()}đ`
                              : "328.000đ"}
                          </Text>

                        </div>
                        <Text
                          size="md"
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
                          {product.description && product.description.length > 10
                            ? `${product.description.slice(0, 30)}...`
                            : product.description}
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
    </>
  );
}
