import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  Button,
  CheckBox,
  Input,
  TextArea,
  RatingBar,
  Heading,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";

const data = [
  {
    image: "images/img_armchair_toys_children_s_room.png",
    mccmica: "Mức độ cũ mới của đồ đạc là như thế nào?",
  },
  {
    image: "images/img_boy_plays_with.png",
    mccmica: "Đồ đạc đã được sửa chữa nào không?",
  },
];

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogDetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]); // State để lưu danh sách blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/guest/api/blogs/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/guest/api/blogs`
        );
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!blog) return <div>No Blog Found</div>;

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
        <header className="self-stretch bg-white-A700 pt-[11px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-[15px] self-stretch">
              <div className="flex flex-col items-center gap-[9px] self-stretch">
                <div className="container-md flex items-center justify-between gap-5 pr-1 md:flex-col md:p-5">
                  <div className="flex items-end self-start sm:flex-col">
                    <a href="/map">
                      <Img
                        src="images/img_pin_1.svg"
                        alt="pinone"
                        className="h-[16px] w-[16px] sm:w-full"
                      />
                    </a>
                    <Text size="s" as="p" className="ml-[5px] sm:ml-0">
                      118 Cách Mạng Tháng 8
                    </Text>
                    <div className="ml-[5px] h-full w-px bg-gray-200_01 sm:ml-0 sm:h-px sm:w-full" />
                    <a href="/contact">
                      <Img
                        src="images/img_phone_1.svg"
                        alt="phoneone"
                        className="ml-[19px] h-[16px] w-[16px] sm:ml-0 sm:w-full"
                      />
                    </a>
                    <Text
                      size="s"
                      as="p"
                      className="ml-[5px] !font-jost sm:ml-0"
                    >
                      <span className="font-bevietnampro text-blue_gray-900_02">
                        Bạn cần trợ giúp? Gọi ngay:&nbsp;
                      </span>
                      <span className="font-bevietnampro font-medium text-blue_gray-900_02">
                        +84 1800 900
                      </span>
                    </Text>
                  </div>
                  <div className="flex w-[34%] items-center justify-center md:w-full sm:flex-col">
                    <SelectBox
                      shape="square"
                      indicator={
                        <Img
                          src="images/img_vector_blue_gray_900_02.svg"
                          alt="vector"
                          className="h-[5px] w-[8px]"
                        />
                      }
                      name="tingvitvn"
                      placeholder={`Tiếng Việt / VNĐ`}
                      options={dropDownOptions}
                      className="flex-grow gap-px text-blue_gray-900_02"
                    />
                    <div className="ml-[23px] flex items-center gap-4 sm:ml-0">
                      <div className="h-[21px] w-px bg-gray-200_01" />
                      <div className="flex items-start">
                        <a
                          href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text size="s" as="p">
                            Trợ giúp
                          </Text>
                        </a>
                        <Img
                          src="images/img_vector_blue_gray_900_02.svg"
                          alt="vector"
                          className="mt-1 h-[5px]"
                        />
                      </div>
                    </div>
                    <div className="ml-[23px] h-[21px] w-px self-start bg-gray-200_01 sm:ml-0 sm:h-px sm:w-[21px]" />
                    <Text size="s" as="p" className="ml-4 self-end sm:ml-0">
                      Tìm cửa hàng
                    </Text>
                    <div className="ml-[23px] flex items-center gap-2.5 sm:ml-0">
                      <div className="h-full w-px bg-gray-200_01" />
                      <div className="flex items-center gap-4 self-end">
                        <Img
                          src="images/img_facebook.svg"
                          alt="close"
                          className="h-[12px]"
                        />
                        <Img
                          src="images/img_facebook.svg"
                          alt="close"
                          className="h-[12px]"
                        />
                        <Img
                          src="images/img_facebook.svg"
                          alt="close"
                          className="h-[12px]"
                        />
                        <Img
                          src="images/img_facebook_blue_gray_900_02.png"
                          alt="close"
                          className="h-[11px] self-start object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-px w-full self-stretch bg-gray-200_01" />
              </div>
              <div className="flex w-[75%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
                <Img
                  src="images/img_header_logo.png"
                  alt="headerlogo"
                  className="mb-[7px] h-[33px] w-[94px] object-contain"
                />
                <div className="flex w-[79%] items-center justify-center gap-6 md:w-full md:flex-col">
                  <div className="flex flex-1 items-center justify-between gap-5 self-end rounded-md border border-solid border-green-A700_02 py-[11px] pl-[27px] pr-4 md:self-stretch sm:pl-5">
                    <div className="flex w-[34%] items-start justify-center gap-5">
                      <div className="flex flex-1 items-end justify-between gap-5">
                        <Text size="md" as="p">
                          Danh mục
                        </Text>
                        <Img
                          src="images/img_vector_blue_gray_900_02.svg"
                          alt="vector"
                          className="mb-2.5 h-[5px]"
                        />
                        <div className="h-full w-px rounded-bl-[50%] rounded-tl-[50%] bg-green-400_01" />
                      </div>
                      <Text size="md" as="p" className="!text-blue_gray-600">
                        Tìm kiếm
                      </Text>
                    </div>
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Img
                        src="images/img_search_1.svg"
                        alt="searchone"
                        className="h-[20px] w-[20px]"
                      />
                    </a>
                  </div>
                  <div className="flex w-[43%] items-center justify-center gap-[17px] md:w-full sm:flex-col">
                    <div className="flex w-full items-start justify-center gap-[15px] self-end sm:w-full">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          color="green_A700_11"
                          shape="round"
                          className="w-[50px]"
                        >
                          <Img src="images/img_heart_1.svg" />
                        </Button>
                      </a>
                      <Heading
                        size="lg"
                        as="p"
                        className="w-[61%] !font-inter leading-[22px]"
                      >
                        <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                          <>
                            Yêu thích <br />
                          </>
                        </span>
                        <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                          Sản phẩm
                        </span>
                      </Heading>
                    </div>
                    <div className="flex w-full items-start justify-center gap-[15px] self-end sm:w-full">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          color="green_A700_11"
                          shape="round"
                          className="w-[50px]"
                        >
                          <Img src="images/img_profile_1.svg" />
                        </Button>
                      </a>
                      <Heading
                        size="lg"
                        as="p"
                        className="w-[61%] !font-inter leading-[22px]"
                      >
                        <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                          <>
                            Đăng nhập <br />
                          </>
                        </span>
                        <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                          Tài khoản
                        </span>
                      </Heading>
                    </div>
                    <div className="w-full sm:w-full">
                      <div className="flex items-center gap-[9px]">
                        <div className="relative h-[55px] w-[38%]">
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button
                              shape="round"
                              className="absolute bottom-[0.00px] left-[0.00px] m-auto w-[50px]"
                            >
                              <Img src="images/img_cart.svg" />
                            </Button>
                          </a>
                          <Heading
                            size="xs"
                            as="p"
                            className="absolute right-[0.00px] top-[0.00px] m-auto flex h-[15px] w-[15px] items-center justify-center rounded-[7px] bg-orange-300 text-center !text-blue_gray-900_01"
                          >
                            2
                          </Heading>
                        </div>
                        <Heading
                          size="lg"
                          as="p"
                          className="w-[62%] self-end !font-inter leading-[22px]"
                        >
                          <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                            289.000đ
                          </span>
                          <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                            Thanh toán
                          </span>
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
            <div className="container-md md:p-5">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[65%] items-end justify-center md:w-full md:flex-col">
                  <div className="relative h-[60px] w-[47%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5">
                    <div className="flex w-full flex-col items-start">
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <div className="flex w-[50%] items-center justify-center gap-[15px]">
                          <div className="h-[2px] w-[20px] bg-white-A700" />
                          <Heading as="h6" className="!text-white-A700">
                            Danh mục
                          </Heading>
                        </div>
                        <Img
                          src="images/img_vector_white_a700.svg"
                          alt="vector"
                          className="mb-[7px] h-[5px] self-end"
                        />
                      </div>
                      <div className="relative mt-[-3px] h-[2px] w-[15px] bg-white-A700" />
                    </div>
                    <div className="absolute left-[25.00px] top-[21.00px] m-auto h-[2px] w-[15px] bg-white-A700" />
                  </div>
                  <Text as="p" className="ml-[31px] md:ml-0">
                    Trang chủ
                  </Text>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector"
                    className="mb-6 h-[5px] md:w-full"
                  />
                  <a
                    href="/product"
                    target="_blank"
                  >
                    <Text as="p" className="ml-[38px] md:ml-0">
                      Sản phẩm
                    </Text>
                  </a>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector"
                    className="mb-6 h-[5px] md:w-full"
                  />
                  <a
                    href="/contact"
                    target="_blank"
                    
                  >
                    <Text as="p" className="mb-[17px] ml-[39px] md:ml-0">
                      Liên hệ
                    </Text>
                  </a>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector_eleven"
                    className="mb-6 h-[5px] md:w-full"
                  />
                  <a
                    href="/blog"
                    target="_blank"
                  >
                    <Text as="p" className="ml-10 mt-[18px] md:ml-0">
                      Bài viết
                    </Text>
                  </a>
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector_thirteen"
                    className="mb-6 h-[5px] md:w-full"
                  />
                </div>
                <ul className="flex flex-wrap gap-3.5">
                  <li>
                    <a href="#">
                      <Text as="p">Ưu đãi</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="container-md mt-[19px] flex flex-col gap-[62px] md:p-5 sm:gap-[31px]">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <a href="/blog" target="_blank">
              <Text size="md" as="p" className="self-start">
                Bài viết
              </Text>
            </a>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <Text size="md" as="p" className="!text-blue_gray-600">
              {blog.name}
            </Text>
          </div>
          <div className="flex flex-col gap-[59px] sm:gap-[29px]">
            <div className="flex flex-col items-center gap-[38px]">
              <div className="ml-[238px] flex flex-col items-start gap-3.5 self-start md:ml-0">
                <Text size="7xl" as="p">
                  {blog.name}
                </Text>
                <Text as="p" className="!font-normal !text-blue_gray-600">
                  {blog.formattedDate}
                </Text>
              </div>
              <div className="w-full h-0 pb-[56.25%] relative">
                <Img
                  src={blog.image}
                  alt={blog.name}
                  className="absolute top-0 left-0 w-full h-full rounded-md object-cover"
                />
              </div>

              <div className="flex w-[66%] flex-col gap-[31px] md:w-full">
                <style jsx>{`
                  .blog-content p {
                    text-indent: 2em; /* Thụt vào 2 ô */
                    margin-bottom: 1em; /* Cách dòng trên 1 hàng */
                       font-size: 1.99rem;
                  }
                `}</style>
                <div
                  className="!font-normal leading-7 blog-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                {/* Các phần còn lại của giao diện */}
              </div>
            </div>
            <div className="flex flex-col items-start gap-[43px]">
              <Text size="7xl" as="p">
                Bài viết liên quan
              </Text>

              <div className="grid w-full grid-cols-3 gap-x-7 gap-y-20 md:grid-cols-2 sm:grid-cols-1">
                {blogs.map((blogItem) => (
                  <Link
                    key={blogItem.id}
                    to={`/blogdetail/${blogItem.id}`}
                    className="relative h-[300px] w-full"
                    style={{ marginBottom: "20px" }} // Thêm margin dưới cho mỗi blog item
                  >
                    <Img
                      src={blogItem.image || "images/default_image.png"} // Assuming image is a field in your blog data
                      alt={blogItem.title}
                      className="h-[300px] w-full rounded-md object-cover"
                    />
                    <div className="flex flex-col items-start gap-2 p-2">
                      <p className="font-bold text-xl text-blue_gray-600">
                        {blogItem.name}
                      </p>
                      <p className="text-sm !font-normal !text-blue_gray-600">
                        {blogItem.formattedDate}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[277px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
};
export default BlogDetailPage;
