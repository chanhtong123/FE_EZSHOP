import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosConfig";
import { getToken, removeToken } from "../../utils/authUtils";
import { Text, Img } from "../../components";

export default function FavoriteProductSidebar(){
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


  return (
<>
<div className="mt-[7px] flex w-[15%] flex-col gap-2.5 pt-[5px] md:w-full">
<div className="flex flex-col gap-[9px]">
  <div className="flex items-start gap-[11px]">
    <Img
      src="images/user.png"
      alt="circleimage"
      className="h-[40px] w-[40px] rounded-[50%]"
    />
    <div className="flex flex-col items-start gap-[5px]">
      <Text as="p">
        {profileItems2.lastName} {profileItems2.firstName}
      </Text>
      {/* <Text size="lg" as="p" className="!text-blue_gray-600">
        {profileItems.email}
      </Text> */}
    </div>
  </div>
  <div className="h-px bg-gray-200_01" />
</div>
<div className="flex items-center justify-between gap-5">
  <div className="flex flex-col gap-[25px]">
    <a href="/profile" className="flex items-center gap-2">
      <Img
        src="images/img_growth_1.svg"
        alt="growthone"
        className="h-[20px]"
      />
      <span>Thông tin tài khoản</span>
    </a>
    <a href="/order" className="flex items-center gap-2">
      <Img
        src="images/img_checkbox.svg"
        alt="vector_eleven"
        className="h-[20px]"
      />
      <span>Đặt hàng</span>
    </a>
    <a href="/address" className="flex items-center gap-2">
      <Img
        src="images/img_location_1.svg"
        alt="locationone"
        className="h-[20px]"
      />
      <span>Địa chỉ</span>
    </a>
    <a href="/favorite" className="flex items-center gap-2">
      <Img
        src="images/img_badge_1.svg"
        alt="badgeone"
        className="h-[20px]"
      />
      <span>Danh sách yêu thích</span>
    </a>
    <a href="/login" className="flex items-center gap-2">
      <Img
        src="images/img_television.svg"
        alt="television"
        className="h-[20px]"
      />
      <button onClick={handleLogout}>Đăng xuất</button>
    </a>
  </div>
</div>
</div>
</>

  );
}
