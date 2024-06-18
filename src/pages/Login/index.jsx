import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
import { Helmet } from "react-helmet";
import CustomToast from "../../components/CustomToast";
import {
  Img,
  Text,
  Button,
  CheckBox,
  Input,
  Heading,
  SelectBox,
} from "../../components";

export default function LoginPage() {
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", { userName, passWord }); 
      const token = response.data.token; 
      localStorage.setItem("token", token);
      localStorage.setItem("toastMessage", "Login successful!");
      localStorage.setItem("toastType", "success");
      navigate("/"); 
    } catch (error) {
      console.error("Login failed:", error);
      setToastMessage("Login failed!");
      setToastType("error");
    }
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
      <div className="flex w-full flex-col items-center gap-[71px] bg-white-A700 md:gap-[53px] sm:gap-[35px] pt-16">
        <div className="container-md pl-[479px] pr-[480px] md:p-5 md:px-5">
          <div className="flex flex-col items-start gap-[22px] rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[47px] pl-[41px] pr-10 pt-10 shadow-xs md:pb-5 md:pl-5 sm:p-5">
            <Heading size="8xl" as="h1" className="uppercase">
              Đăng nhập
            </Heading>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center self-stretch">
                <div className="flex flex-col gap-[22px] self-stretch">
                  <div className="flex flex-col items-start gap-[11px]">
                    <Heading as="h2">Tài khoản</Heading>
                    <input
                      shape="round"
                      type="text"
                      placeholder="Nguyen Van A"
                      value={userName}
                      onChange={(e) => setUsername(e.target.value)}
                      className="self-stretch border border-solid border-blue_gray-900_02 !text-blue_gray-900_02 shadow-md sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading as="h3">Mật khẩu</Heading>
                    <input
                      shape="round"
                      type="password"
                      placeholder="12345"
                      value={passWord}
                      onChange={(e) => setPassword(e.target.value)}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex justify-between gap-5">
                    <CheckBox
                      name="nhớmậtkhẩu"
                      label="Nhớ mật khẩu"
                      id="nhmtkhu"
                      className="gap-2.5 text-sm text-blue_gray-900_02"
                    />
                    <Text size="md" as="p" className="!text-blue_gray-600">
                      Quên mật khẩu?
                    </Text>
                  </div>
                  <button
                    size="10xl"
                    shape="round"
                    type="submit"
                    className="w-full border border-solid border-green-A700_02 font-semibold shadow-sm sm:px-5"
                  >
                    Đăng nhập
                  </button>
                </div>
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text size="md" as="p" className="mt-5" style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="text-blue_gray-900_02">
                      Bạn chưa có tài khoản?&nbsp;
                    </span>
                    <a className="text-green-A700_02" 
                    href="/register" style={{ marginLeft: '5px' }}>Đăng ký</a>
                  </Text>
                </a>
                <div className="mt-[27px] flex w-[13%] items-start md:w-full">
                  <div className="h-[40px] w-[40px] rounded-[20px] bg-white-A700" />
                  <Text size="md" as="p" className="relative ml-[-26px] mt-[9px]">
                    hoặc
                  </Text>
                </div>
                <div className="mt-[15px] flex gap-4 self-stretch">
                  <div className="flex w-full justify-center rounded-lg border border-solid border-blue-700_01 bg-white-A700 px-[13px] pb-3.5 pt-[13px]">
                    <Img
                      src="images/img_facebook_blue_700_01.svg"
                      alt="facebook"
                      className="h-[17px]"
                    />
                  </div>
                  <div className="flex w-full justify-center rounded-lg border border-solid border-red-700 bg-white-A700 px-3.5 pb-[13px] pt-3.5">
                    <Img
                      src="images/img_contrast.svg"
                      alt="contrast"
                      className="h-[17px]"
                    />
                  </div>
                  <div className="flex w-full justify-center rounded-lg border border-solid border-blue-600 bg-white-A700 px-[13px] pb-3 pt-[13px]">
                    <Img
                      src="images/img_trash.svg"
                      alt="trash"
                      className="h-[19px]"
                    />
                  </div>
                  <div className="flex w-full justify-center rounded-lg border border-solid border-blue_gray-900_02 bg-white-A700 px-[11px] pb-3 pt-[11px]">
                    <Img
                      src="images/img_facebook.svg"
                      alt="close"
                      className="h-[21px]"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CustomToast message={toastMessage} type={toastType} />
    </>
  );
}
