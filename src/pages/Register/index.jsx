import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import CustomToast from "../../components/CustomToast";
import { Heading, Img, Text, Button, Input } from "../../components";
export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleRegister = async (redirectUrl) => {
    try {
      const role = "USER";
      const status = true;
      const response = await axios.post("http://localhost:8080/register", {
        firstName,
        userName,
        passWord,
        role,
        status,
        email,
      });

     
      const token = response.data.token; 
      localStorage.setItem("token", token);
      localStorage.setItem("toastMessage", "Register successful!");
      localStorage.setItem("toastType", "success");
      navigate(redirectUrl);
      
    } catch (error) {
      console.error("Register failed:", error);
      setToastMessage("Register failed!");
      setToastType("error");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const redirectTo =
      new URLSearchParams(location.search).get("redirect") || "/login";
    handleRegister(redirectTo);
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
      <div className="flex w-full flex-col items-center gap-[71px] bg-gray-50_07 md:gap-[53px] sm:gap-[35px] pt-16 pb-16">
        <div>

          <div className="flex flex-col items-start gap-[22px] rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[47px] pl-[150px] pr-10 pt-10 shadow-xs md:pb-5 md:pl-5 sm:p-5">
            <Heading size="6xl" as="h1" className="uppercase ml-[-15px] mr-[90px]">
              Tạo tài khoản
            </Heading>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center self-stretch">
                <div className="flex flex-col gap-[22px] self-stretch">
                  <div className="flex flex-col items-start gap-2.5 self-stretch">
                    <Heading as="h1">Tên</Heading>
                    <Input
                      type="text"
                      placeholder=""
                      shape="round"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[11px]">
                    <Heading as="h2">Tài khoản</Heading>
                    <Input
                      shape="round"
                      type="text"
                      placeholder=""
                      value={userName}
                      onChange={(e) => setUsername(e.target.value)}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[11px]">
                    <Heading as="h3">Email</Heading>
                    <Input
                      shape="round"
                      type="text"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[11px]">
                    <Heading as="h4">Mật khẩu</Heading>
                    <Input
                      shape="round"
                      type="password"
                      placeholder=""
                      value={passWord}
                      onChange={(e) => setPassword(e.target.value)}
                      className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                    />
                  </div>
                  <Button
                    shape="round"
                    size="10xl"
                    type="submit"
                    className="w-full border border-solid border-green-A700_02 font-semibold shadow-sm sm:px-5"
                  >
                    Tạo tài khoản
                  </Button>
                </div>
                <Text
                  size="md"
                  as="p"
                  className="mt-5"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className="text-blue_gray-900_02">
                    Bạn đã có tài khoản?&nbsp;
                  </span>
                  <a
                    className="text-green-A700_02"
                    href="/login"
                    style={{ marginLeft: "5px" }}
                  >
                    Đăng nhập
                  </a>
                </Text>
                <div className="mt-[27px] flex w-[13%] items-start md:w-full">
                  <div className="h-[40px] w-[40px] rounded-[20px] bg-white-A700" />
                  <Text
                    size="md"
                    as="p"
                    className="relative ml-[-26px] mt-[9px]"
                  >
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
        <CustomToast message={toastMessage} type={toastType} />
      </div>
    </>
  );
}
