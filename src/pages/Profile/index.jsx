import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';
import { getToken, removeToken } from '../../utils/authUtils';
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Input,
  Heading,
  Img,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ProfilePage() {

  const [profileItems, setProfileItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfileItems = async () => {
      try {
        const response = await axiosInstance.get('/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setProfileItems(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          removeToken();
          navigate('/login');
        } else {
          console.error('Đã xảy ra lỗi khi lấy dữ liệu.', error);
        }
      }
    }

    fetchProfileItems();
  }, [navigate]);


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
            <div className="mt-[7px] flex w-[15%] flex-col gap-2.5 pt-[5px] md:w-full">
              <div className="flex flex-col gap-[9px]">
                <div className="flex items-start gap-[11px]">
                  <Img
                     src={profileItems.image}
                    alt="circleimage"
                    className="h-[40px] w-[40px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start gap-[5px]">
                    <Text as="p">{profileItems.lastName} {profileItems.firstName}</Text>
                    {/* <Text size="lg" as="p" className="!text-blue_gray-600">
                      {profileItems.email}
                    </Text> */}
                  </div>
                </div>
                <div className="h-px bg-gray-200_01" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-col gap-[25px]">
                  <Img
                    src="images/img_growth_1.svg"
                    alt="growthone"
                    className="h-[20px]"
                  />
                  <Img
                    src="images/img_vector.svg"
                    alt="vector_eleven"
                    className="h-[20px]"
                  />
                  <Img
                    src="images/img_location_1.svg"
                    alt="locationone"
                    className="h-[20px]"
                  />
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    <Img
                      src="images/img_badge_1.svg"
                      alt="badgeone"
                      className="h-[20px]"
                    />
                  </a>
                  <Img
                    src="images/img_television.svg"
                    alt="television"
                    className="h-[20px]"
                  />
                </div>
                <Text size="lg" as="p" className="w-[89%] leading-[45px]">
                  <>
                    Thông tin tài khoản <br />
                     Đặt hàng <br />
                      Địa chỉ <br />
                    Danh sách yêu thích
                     <br /> 
                     Đăng xuất
                  </>
                </Text>
              </div>
            </div>
            <div className="flex w-[80%] flex-col items-start gap-[11px] md:w-full">
              <Heading size="8xl" as="h1" className="uppercase">
                Thông tin tài khoản
              </Heading>
              <Heading as="h2">Thông tin tài khoản Mật khẩu</Heading>
              <div className="flex flex-col items-start self-stretch">
                <div className="h-[2px] w-[12%] bg-blue_gray-900_02" />
                <div className="mt-6 self-stretch">



                  <form>
                    <div className="flex items-start gap-[25px] md:flex-col">
                      <div className="flex w-full flex-col gap-4">
                        <div className="flex flex-col items-start gap-2">
                          <Text as="p">Tên</Text>
                          <Input
                            shape="round"
                            name="your_name"
                            placeholder={profileItems.firstName}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <Text as="p">Email</Text>
                          <Input
                            shape="round"
                            type="email"
                            name="email"
                            placeholder={profileItems.email}
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
                          <Text size="md" as="p" className="!text-blue_gray-600">
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
                            name="your_name_one"
                            placeholder={profileItems.lastName}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[7px]">
                          <Text as="p">Số điện thoại</Text>
                          <Input
                            shape="round"
                            name="your_name_two"
                            placeholder={profileItems.phone}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                  </form>




                </div>
                <div className="mt-12 flex w-[49%] flex-col gap-4 md:w-full">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-20 flex-col self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
