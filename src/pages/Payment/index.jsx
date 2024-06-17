import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Button, CheckBox, Heading, Text, Input, Img } from "../../components";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 10 };
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/paymentsuccess", { state: { orderId } });
    }
    console.log(totalAmount);
  }, [success, navigate, totalAmount, orderId, setOrderId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const fullName = formData.firstName + " " + formData.lastName;

      const response = await axios.post(
        "http://localhost:8080/guest/api/orders/",
        {
          orderDate: "2024-06-11 15:05:23",
          orderStatus: "Pending",
          userId: 1,
          shopId: 1,
          orderDetailId: 1,
          totalAmount: totalAmount,
          customerName: "string",
          profit: 111,
          paymentStatus: 1,
          notes: "string",
          discounts: "string",
          email: "string",
          province: "string",
          district: "string",
          ward: "string",
          address: "string",
          active: true,
          payment_method: "string",
          shipping_method: "string",
          shipping_date: "2024-06-14",
          fullName: fullName,
          phone_number: "string",
          ...formData,
        }
      );
      if (response.status === 201) {
        setSuccess(true);
      }
      setOrderId(response.data.id);
    } catch (error) {
      setError(
        "Failed to create order: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
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
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="container-md mt-[19px] flex flex-col gap-[66px] md:p-5 sm:gap-[33px]">
          <div className="flex flex-col items-start">
            <Text size="md" as="p" className="relative z-[1] !font-jost">
              <span className="font-bevietnampro text-blue_gray-900_02">
                Trang chủ / Áo thun / Áo nam / &nbsp;
              </span>
              <span className="font-bevietnampro text-blue_gray-600">
                Thanh toán
              </span>
            </Text>
            <Heading
              size="8xl"
              as="h1"
              className="relative mt-[-4px] self-end uppercase"
            >
              THANH TOÁN
            </Heading>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[61%] flex-col items-start gap-[46px] md:w-full">
                <div className="flex flex-col items-start gap-7 self-stretch">
                  <Heading size="5xl" as="h2" className="uppercase">
                    Thông tin thanh toán
                  </Heading>
                  <div className="flex flex-col gap-6 self-stretch">
                    <div className="flex flex-col gap-[23px]">
                      <div className="flex gap-[30px] md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[13px]">
                          <Heading
                            size="lg"
                            as="h3"
                            className="!font-semibold capitalize"
                          >
                            Họ*
                          </Heading>
                          <Input
                            size="2xl"
                            shape="round"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                            required
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[15px]">
                          <Heading
                            size="lg"
                            as="h4"
                            className="!font-semibold capitalize"
                          >
                            Tên*
                          </Heading>
                          <Input
                            size="2xl"
                            shape="round"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-3.5">
                        <Heading
                          size="lg"
                          as="h5"
                          className="!font-semibold capitalize"
                        >
                          Địa chỉ *
                        </Heading>
                        <Input
                          size="2xl"
                          shape="round"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <Heading
                          size="lg"
                          as="h6"
                          className="!font-semibold capitalize"
                        >
                          Tỉnh *
                        </Heading>
                        <Input
                          size="2xl"
                          shape="round"
                          name="province"
                          value={formData.province}
                          onChange={handleChange}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-3.5">
                        <Heading
                          size="lg"
                          as="p"
                          className="!font-semibold capitalize"
                        >
                          Quận *
                        </Heading>
                        <Input
                          size="2xl"
                          shape="round"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-[15px]">
                        <Heading
                          size="lg"
                          as="p"
                          className="!font-semibold capitalize"
                        >
                          Huyện *
                        </Heading>
                        <Input
                          size="2xl"
                          shape="round"
                          name="ward"
                          value={formData.ward}
                          onChange={handleChange}
                          className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                        />
                      </div>
                      <div className="flex gap-[30px] md:flex-col">
                        <div className="flex w-full flex-col items-start gap-3.5">
                          <Heading
                            size="lg"
                            as="p"
                            className="!font-semibold capitalize"
                          >
                            Số điện thoại *
                          </Heading>
                          <Input
                            shape="round"
                            name="phone"
                            placeholder={`+84 `}
                            value={formData.phone}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-3.5">
                          <Heading
                            size="lg"
                            as="p"
                            className="!font-semibold capitalize"
                          >
                            Địa chỉ Email*
                          </Heading>
                          <Input
                            size="2xl"
                            shape="round"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[29px] self-stretch">
                  <Heading size="5xl" as="h5" className="uppercase">
                    Chi tiết về vận chuyển
                  </Heading>
                  <div className="flex flex-col gap-[18px] self-stretch">
                    <div className="flex flex-col items-start gap-3.5">
                      <Heading
                        size="lg"
                        as="h6"
                        className="!font-semibold capitalize"
                      >
                        Ghi chú
                      </Heading>
                      <Input
                        shape="round"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[32%] md:w-full">
                <div className="flex flex-col items-start gap-[13px] rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[68px] pl-[30px] pr-[29px] pt-[26px] md:pb-5 sm:p-5">
                  <Heading size="5xl" as="h5" className="uppercase">
                    Đơn hàng của bạn
                  </Heading>
                  <div className="flex flex-col gap-7 self-stretch">
                    <div className="flex justify-between py-2">
                      <Text size="md" as="p">
                        Áo thun
                      </Text>
                      <Heading
                        size="lg"
                        as="p"
                        className="flex !font-semibold "
                      >
                        <span className="text-lg text-blue_gray-900_02">
                          {totalAmount}đ
                        </span>
                      </Heading>
                    </div>

                    <div className="flex flex-col gap-[25px]">
                      <div className="flex flex-1">
                        <div className="flex w-full flex-col gap-2.5">
                          <div className="h-px bg-gray-200_01" />
                          <div className="flex flex-wrap justify-between gap-5">
                            <Text size="md" as="p" className="self-start">
                              Sub Total
                            </Text>
                            <Heading
                              size="lg"
                              as="p"
                              className="flex self-end !font-semibold capitalize"
                            >
                              <span className="text-lg text-blue_gray-900_02">
                                0đ
                              </span>
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <div className="flex w-full flex-col gap-3">
                          <div className="h-px bg-gray-200_01" />
                          <div className="flex flex-wrap justify-between gap-5">
                            <Text size="md" as="p" className="self-start">
                              Shipping
                            </Text>
                            <Heading
                              size="lg"
                              as="p"
                              className="flex !font-semibold capitalize"
                            >
                              <span className="text-lg text-blue_gray-900_02">
                                0đ
                              </span>
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-2.5">
                        <div className="h-px bg-gray-200_01" />
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text size="md" as="p" className="self-start">
                            Total
                          </Text>
                          <Heading
                            size="lg"
                            as="p"
                            className="flex self-end !font-semibold capitalize"
                          >
                            <span className="text-lg text-blue_gray-900_02">
                              {totalAmount}đ
                            </span>
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[30px] flex flex-col gap-2">
                  <div className="flex flex-col items-start gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 px-[30px] pb-[37px] pt-[30px] sm:p-5">
                    <Heading size="5xl" as="h5" className="uppercase">
                      Thông tin thanh toán
                    </Heading>
                    <div className="flex flex-col items-start gap-[17px] self-stretch">
                      <div className="flex flex-col items-start gap-2 self-stretch">
                        <Heading as="h6">Chuyển khoản trực tiếp</Heading>
                        <Text
                          size="md"
                          as="p"
                          className="w-full leading-[17px] !text-blue_gray-600"
                        >
                          Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng
                          của chúng tôi. Vui lòng sử dụng ID đơn hàng của bạn
                          làm tài liệu tham khảo thanh toán.
                        </Text>
                        <div className="flex flex-col items-start gap-2 self-stretch">
                          {/* <div className="flex gap-2.5">
                            <Img
                              src="images/img_television_gray_100_04.svg"
                              alt="television"
                              className="h-[24px]"
                            />
                            <Img
                              src="images/img_close_gray_100_04.svg"
                              alt="close"
                              className="h-[24px]"
                            />
                            <Img
                              src="images/img_3.svg"
                              alt="three"
                              className="h-[24px]"
                            />
                            <Img
                              src="images/img_4.png"
                              alt="four"
                              className="h-[24px] object-cover"
                            />
                            <Img
                              src="images/img_television_gray_100_04_24x38.svg"
                              alt="television"
                              className="h-[24px]"
                            />
                            <Img
                              src="images/img_thumbs_up.svg"
                              alt="thumbsup"
                              className="h-[24px]"
                            />
                          </div> */}
                          <div className="h-px w-full self-stretch bg-gray-200_01" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-4 self-stretch">
                        <Heading as="h6">Kiểm tra thanh toán</Heading>
                        <div className="h-px w-full self-stretch bg-gray-200_01" />
                      </div>
                      <Heading as="h6">Thanh toán khi giao hàng</Heading>
                    </div>
                  </div>
                  <CheckBox
                    name="dữliệucánhâncủa"
                    label="Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn trên trang web."
                    id="dliucnhnca"
                    className="gap-3.5 text-left text-[15px] leading-[22px] text-blue_gray-900_02"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  size="10xl"
                  shape="round"
                  className="mt-[55px] w-full border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                >
                  {loading ? "Đang xử lý..." : "Thanh Toán"}
                </Button>
                {error && <Text className="text-red-500 mt-4">{error}</Text>}
                {success && (
                  <Text className="text-green-500 mt-4">
                    Order created successfully!
                  </Text>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
