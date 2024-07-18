import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import {
  Text,
  Button,
  Radio,
  RadioGroup,
  Heading,
  TextArea,
  SelectBox,
  Img,
  Input,
} from "../../components";
import CreateProductSidebar from "../../components/CreateProductSidebar";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    description: '',
    brand: '',
    situation: 0,
    color: '',
    detail: '',
    size: 'S',
    categories: [], // Will hold selected category IDs
  });
  const [imageFiles, setImageFiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setImageFiles(event.target.files);
  };

  const handleCategoriesChange = (selectedCategories) => {
    setProductData({
      ...productData,
      categories: selectedCategories.map((category) => ({ id: category.id })),
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Product data to be submitted:", productData);

    const formattedProductData = {
      ...productData,
      categories: productData.categories.map((category) => ({ id: category.id })), // Only IDs needed here
    };

    const formData = new FormData();
    formData.append("product", JSON.stringify(formattedProductData));

    // Append image files
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("imageFiles", imageFiles[i]);
    }

    try {
      const response = await axios.post(
        "https://ezshop-be.azurewebsites.net/guest/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
      // Handle success or further actions
    } catch (error) {
      console.error("Error creating product:", error);
      // Handle error
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const [dropDownOptions, setDropDownOptions] = useState({
    categories: [],
    situations: [
      { label: "100", value: "100" },
      { label: "99", value: "99" },
      { label: "98", value: "98" },
      { label: "97", value: "97" },
      { label: "96", value: "96" },
      { label: "95", value: "95" },
    ],
  });

  useEffect(() => {
    // Fetch categories from backend API
    axios
      .get("https://ezshop-be.azurewebsites.net/guest/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
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
        <Header1 />
        <div className="container-md mt-[41px] flex items-start justify-between gap-5 pr-[5px] md:flex-col md:p-5">
          <CreateProductSidebar />
          <div className="flex w-[80%] flex-col gap-12 md:w-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <Input
                  color="green_50_01"
                  size="lg"
                  shape="square"
                  name="heading_one"
                  placeholder={`HÌNH ẢNH SẢN PHẨM`}
                  className="font-semibold sm:pr-5"
                />
                <div className="flex flex-col items-center gap-[23px] border border-dashed border-gray-300_01 bg-white-A700 px-14 py-[59px] md:p-5">
                  <div className="flex flex-col items-start gap-[9px]">
                    <input type="file" multiple onChange={handleImageChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <Input
                color="green_50_01"
                size="lg"
                shape="square"
                name="heading_five"
                placeholder={`DỮ LIỆU CHUNG`}
                className="self-stretch font-manrope font-bold sm:pr-5"
              />
              <div className="mt-4 flex gap-7 self-stretch md:flex-col">
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-[9px]">
                      <Heading as="h5">Tên sản phẩm</Heading>
                      <Input
                        shape="round"
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={productData.name}
                        onChange={handleInputChange}
                        className="self-stretch border border-solid border-gray-600 sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[7px]">
                      <Heading as="h6">Size</Heading>
                      <select
                        name="size"
                        value={productData.size}
                        onChange={handleInputChange}
                        className="self-stretch border border-solid border-gray-600 sm:pr-5"
                      >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[9px]">
                    <Heading as="h6">Loại</Heading>
                    <select
                      name="categories"
                      value={productData.categories[0]}
                      onChange={(e) =>
                        handleCategoriesChange(
                          Array.from(e.target.selectedOptions, (option) => ({
                            id: option.value,
                            name: option.textContent,
                          }))
                        )
                      }
                      className="self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    >
                      <option value="">Choose categories</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h6">Màu sắc</Heading>
                    <Input
                      shape="round"
                      type="text"
                      name="color"
                      placeholder="Color"
                      value={productData.color}
                      onChange={handleInputChange}
                      className="self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h6">Giá cả</Heading>
                    <Input
                      shape="round"
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={productData.price}
                      onChange={handleInputChange}
                      className="self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[9px]">
                    <Heading as="h6">Thương Hiệu</Heading>
                    <Input
                      color="white_A700"
                      size="xl"
                      shape="round"
                      type="text"
                      name="brand"
                      placeholder="Brand"
                      value={productData.brand}
                      onChange={handleInputChange}
                      className="gap-px self-stretch border border-solid border-gray-300_01 sm:pr-5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[9px]">
                <Heading as="h6" className="mt-[17px] !text-gray-900_01">
                  Chi tiết sản phẩm
                </Heading>
                <textarea
                  size="md"
                  variant="tarGREY2"
                  shape="round"
                  name="detail"
                  placeholder="Detail"
                  value={productData.detail}
                  onChange={handleInputChange}
                  className="mt-[9px] self-stretch !border-gray-300_01 text-blue_gray-600 sm:pb-5 sm:pr-5"
                />
              </div>

              <div className="flex flex-col items-start gap-[9px]">
                <Heading as="h6" className="mt-[17px] !text-gray-900_01">
                  Mô Tả
                </Heading>
                <textarea
                  size="xs"
                  variant="tarGREY2"
                  shape="round"
                  name="description"
                  placeholder="Description"
                  value={productData.description}
                  onChange={handleInputChange}
                  className="mt-[9px] self-stretch !border-gray-300_01 text-blue_gray-600 sm:pb-5 sm:pr-5"
                />
              </div>

              <div className="flex flex-col items-start gap-[9px]">
                <Heading as="h6">Chọn tình trạng sản phẩm</Heading>
                <select
                  name="situation"
                  value={productData.situation}
                  onChange={handleInputChange}
                  className="w-full p-px text-sm text-gray-900_01"
                >
                  <option value="">Chọn tình trạng</option>
                  <option value="100">100%</option>
                  <option value="99">99%</option>
                  <option value="98">98%</option>
                </select>
              </div>
            </div>
            <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                <Button
                  size="10xl"
                  shape="round"
                  onClick={handleSubmit}
                  className="min-w-[138px] border border-solid border-green-A700_02 !text-green-50_01 shadow-sm sm:px-5"
                >
                  Đăng tải
                </Button>
              </a>
              <Text as="p" className="!font-normal !text-blue_gray-600">
                Hủy bỏ
              </Text>
            </div>
          </div>
        </div>
        <Footer1 className="mt-20 justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
};
export default CreateProductForm;
// const handleImageChange = (e, index) => {
//   const file = e.target.files[0];
//   if (file && index >= 0 && index <= 3) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreviews((prevState) => ({
//         ...prevState,
//         [`image${index + 1}`]: reader.result,
//       }));

//       const base64Image = reader.result.split(",")[1];
//       setFormData((prevState) => {
//         const newImages = [...prevState.images];
//         newImages[index] = base64Image; // Cập nhật ảnh tại vị trí index
//         return {
//           ...prevState,
//           images: newImages,
//         };
//       });
//     };
//     reader.readAsDataURL(file);
//   }
// };
// const handleChange = (e) => {
//   console.log('Event: ', e);
//   if (e && e.target) {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   } else {
//     console.error('Invalid event or event target:', e);
//   }
// };
// const handleRadioChange = (e) => {
//   // Không cần phá vỡ cấu trúc từ e.target
//   setFormData({ ...formData, situation: e.target.value });
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     console.log("Submitting data:", formData); // Log dữ liệu để kiểm tra
//     const response = await axios.post(
//       "https://ezshop-be.azurewebsites.net/guest/api/products",
//       formData
//     );
//     console.log("Product created:", response.data);
//     // Handle response if needed
//   } catch (error) {
//     console.error("Error creating product:", error);
//     console.error("Response data:", error.response ? error.response.data : "No response data");
//     // Handle error if needed
//   }
// };
