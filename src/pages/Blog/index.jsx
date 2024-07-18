// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Text, Img, SelectBox, Heading, Button } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import SalesShopPagination from "../../components/SalesShopPagination";
import { Link } from "react-router-dom";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function BlogPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://ezshop-be.azurewebsites.net/guest/api/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
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
        <div className="container-md mt-[19px] flex flex-col gap-[11px] md:p-5">
          <div className="flex flex-wrap gap-[7px]">
          <a href="/homepage">
              <Text size="md" as="p" className="self-end">
                Trang chủ
              </Text>
            </a>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <Text size="md" as="p" className="self-start !text-blue_gray-600">
              Bài viết
            </Text>
          </div>
          <div className="flex flex-col items-center gap-[66px] sm:gap-[33px]">
            <Text size="7xl" as="p">
              Bài viết
            </Text>
            {/* <div className="flex flex-col items-center gap-[63px] self-stretch sm:gap-[31px]">
              <div className="grid grid-cols-3 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  <div className="flex w-full flex-col gap-6">
                    <div className="relative h-[300px] md:h-auto">
                      <Img
                        src="images/img_cute_girl_works.png"
                        alt="mẹo_thủ_thuật"
                        className="h-[300px] w-full rounded-md object-cover"
                      />
                      <Img
                        src="images/img_image_123.png"
                        alt="mẹo_thủ_thuật"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] w-full rounded-md object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                      <Text as="p" className="!font-normal !text-blue_gray-600">
                        Mẹo & Thủ thuật
                      </Text>
                      <Text size="3xl" as="p">
                        Cách định giá và thanh lý đồ cũ nhanh nhất
                      </Text>
                      <Text as="p" className="!font-normal !text-blue_gray-600">
                        10 - 6 - 2023
                      </Text>
                    </div>
                  </div>
                </a>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_300x448.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        10 cửa hàng uy tín nhất năm - EZSHOP
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_1.png"
                      alt="cutegirlworks"
                      className="h-[300px] rounded-md object-cover"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Làm thế nào mua đồ trên EZSHOP hiệu quả?
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_2.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Hãy là người tiêu dùng thông minh!
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_3.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Mẹo tái chế quần áo cực chất
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      11 - 10 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_4.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        5 cách kiểm tra thật - giả khi mua đồ cũ
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_296x448.png"
                      alt="cutegirlworks"
                      className="h-[296px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Thử nhuộm áo tại nhà
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_5.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Mẹo vặt cuộc sống bạn cần biết
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_cute_girl_works_6.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      <Text size="3xl" as="p">
                        Hãy là người tiêu dùng thông minh!
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      31 - 10 - 2019
                    </Text>
                  </div>
                </div>
              </div>
              <SalesShopPagination
                text120of300="1 – 20 trên 90 tìm kiếm"
                className="w-[35%] gap-5 md:w-full"
              />
            </div> */}
            <div className="flex flex-col items-center gap-[63px] self-stretch sm:gap-[31px]">
              <div className="grid grid-cols-3 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
                {blogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blogdetail/${blog.id}`}
                    rel="noopener noreferrer"
                  >
                    <div className="flex w-full flex-col gap-6">
                      <div className="relative h-[300px] md:h-auto">
                        <img
                          src={blog.image}
                          // alt={blog.name}
                          className="h-[300px] w-full rounded-md object-cover"
                        />
                        {/* <img
                          // src={blog.imageOverlay}
                          // alt={blog.name}
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] w-full rounded-md object-cover"
                        /> */}
                      </div>
                      <div className="flex flex-col items-start gap-3.5">
                        <p className="font-bold text-xl text-blue_gray-600">
                          {blog.name}
                        </p>
                        <p className="text-3xl">{blog.title}</p>
                        <p
                          className="!font-normal !text-blue_gray-600"
                          style={{ marginTop: "-1rem" }}
                        >
                          {blog.formattedDate}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
