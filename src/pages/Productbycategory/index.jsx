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

const ProductPageByCategory = ({ match }) => {
  const categoryId = match.params.categoryId; // Lấy categoryId từ params

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/guest/api/products/category/${categoryId}`);
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]); // Thêm categoryId vào dependencies để khi nào categoryId thay đổi thì fetch lại

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
          {/* <div className="flex-[1] container mx-auto p-4">
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
                {["Nike", "Adidas", "LEVI'S", "Chanel"].map((brandName) => (
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
          </div> */}

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
export default ProductPageByCategory;
