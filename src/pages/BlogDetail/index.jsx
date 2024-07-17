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
        <div className="container-md mt-[19px] flex flex-col gap-[62px] md:p-5 sm:gap-[31px]">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
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
