import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosConfig";
import { getToken, removeToken } from "../../utils/authUtils";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, Img, SelectBox } from "../../components";
import FavoriteProductSidebar from "../../components/FavoriteProductSidebar";

export default function ProfilePage() {
  // const [profileItems, setProfileItems] = useState([]);
  const navigate = useNavigate();
  const [profileItems, setProfileItems] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [profileItems2, setProfileItems2] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfileItems = async () => {
      try {
        const response = await axiosInstance.get("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileItems(response.data);
        setProfileItems2(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          removeToken();
          navigate("/login");
        } else {
          console.error("Đã xảy ra lỗi khi lấy dữ liệu.", error);
        }
      }
    };

    fetchProfileItems();
  }, [navigate]);

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axiosInstance.put(
        "/user",
        {
          firstName: profileItems.firstName,
          lastName: profileItems.lastName,
          email: profileItems.email,
          phone: profileItems.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("User profile updated successfully:", response.data);
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 403) {
        removeToken();
        navigate("/login");
      } else {
        console.error("Đã xảy ra lỗi khi cập nhật dữ liệu.", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileItems((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="container-md mt-[33px] flex justify-center pr-1.5 md:p-5">
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            <FavoriteProductSidebar/>
            <div className="flex w-[80%] flex-col items-start gap-[11px] md:w-full">
              <Heading size="8xl" as="h1" className="uppercase">
                Thông tin tài khoản
              </Heading>
              <Heading as="h2">Thông tin tài khoản Mật khẩu</Heading>
              <div className="flex flex-col items-start self-stretch">
                <div className="h-[2px] w-[12%] bg-blue_gray-900_02" />
                <div className="mt-6 self-stretch">
                  <form onSubmit={handleSubmit}>
                    <div className="flex items-start gap-[25px] md:flex-col">
                      <div className="flex w-full flex-col gap-4">
                        <div className="flex flex-col items-start gap-2">
                          <Text as="p">Tên</Text>
                          <Input
                            shape="round"
                            name="firstName"
                            value={profileItems.firstName}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <Text as="p">Email</Text>
                          <Input
                            shape="round"
                            type="email"
                            name="email"
                            value={profileItems.email}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-[36%] items-center justify-between gap-5 md:w-full">
                          <Button
                            size="9xl"
                            shape="round"
                            className="min-w-[95px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                          >
                            Lưu
                          </Button>
                          <Text
                            size="md"
                            as="p"
                            className="!text-blue_gray-600"
                          >
                            Hủy bỏ
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-full flex-col gap-4">
                        <div className="flex flex-col items-start gap-1.5 pt-[5px]">
                          <Text as="p" className="h-[21px] w-[22px]">
                            Họ
                          </Text>
                          <Input
                            shape="round"
                            name="lastName"
                            value={profileItems.lastName}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[7px]">
                          <Text as="p">Số điện thoại</Text>
                          <Input
                            shape="round"
                            name="phone"
                            value={profileItems.phone}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <div className="mt-12 flex w-[49%] flex-col gap-4 md:w-full">
                  <div className="flex flex-col items-start gap-2">
                    <Text as="p">Nhập Mật khẩu</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your Name`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text as="p">Mật khẩu mới</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your Name`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text as="p">Xác nhận mật khẩu mới</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your Name`}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex w-[36%] items-center justify-between gap-5 md:w-full">
                    <Button
                      size="10xl"
                      shape="round"
                      className="min-w-[99px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                    >
                      Lưu
                    </Button>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Hủy bỏ
                    </Text>
                  </div>
                </div>
                <div className="mt-12 flex w-[61%] flex-col gap-4 md:w-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-1">
                      <div className="flex w-full flex-col items-start">
                        <div className="flex items-start justify-between gap-5 self-stretch">
                          <Text as="p">SMS</Text>
                        </div>
                        <Text as="p" className="!font-normal">
                          Mã được gửi đến điện thoại di động của bạn qua phương
                          thức SMS
                        </Text>
                        <div className="mt-[22px] h-px w-full self-stretch bg-gray-200_01" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start">
                      <div className="flex items-start justify-between gap-5 self-stretch">
                        <Text as="p">Email</Text>
                      </div>
                      <Text as="p" className="!font-normal">
                        Mã xác thực được gửi đến email của bạn
                      </Text>
                      <div className="mt-[22px] h-px w-full self-stretch bg-gray-200_01" />
                    </div>
                    <div className="flex flex-1 flex-col items-start">
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <Text as="p">Điện thoại</Text>
                      </div>
                      <Text as="p" className="!font-normal">
                        Nhân viên EZShop sẽ gọi điện thoại tới di động của bạn
                      </Text>
                      <div className="mt-[22px] h-px w-full self-stretch bg-gray-200_01" />
                    </div>
                  </div>
                  <div className="flex w-[29%] items-center justify-between gap-5 md:w-full">
                    <Button
                      size="10xl"
                      shape="round"
                      className="min-w-[99px] border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                    >
                      Lưu
                    </Button>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Hủy bỏ
                    </Text>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
