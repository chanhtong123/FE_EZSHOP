import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Text, Heading, Img } from "../../components";
import { useLocation } from 'react-router-dom';

export default function PaymentSuccessPage() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { orderId } = location.state;
  useEffect(() => {
    axios.get(`http://localhost:8080/guest/api/orders/id?id=${orderId}`)
      .then(response => {
        setOrder(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching the order:", error);
        setLoading(false);
      });
      console.log("Order", orderId);
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Error loading order details</div>;
  }

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
        <div className="container-md mt-[19px] md:p-5">
          <div className="flex flex-col items-start gap-3">
            <Text size="md" as="p" className="!font-jost">
              <span className="font-bevietnampro text-blue_gray-900_02">
                Trang chủ / Áo thun / Áo nam / &nbsp;
              </span>
              <span className="font-bevietnampro text-blue_gray-600">
                Thanh toán
              </span>
            </Text>
            <div className="flex w-[80%] flex-col items-center gap-[46px] self-end md:w-full">
              <div className="flex flex-col items-center">
                <Img
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                  className="h-[75px]"
                />
                <Heading size="5xl" as="h1" className="mt-1 uppercase">
                  Đơn hàng của bạn đã hoàn tất!
                </Heading>
                <Text size="md" as="p" className="mt-4 !text-blue_gray-600">
                  Cảm ơn. Đơn đặt hàng của bạn đã được nhận.
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] self-stretch">
                <div className="flex justify-center rounded-md border border-dashed border-blue_gray-600 bg-white-A700 px-[37px] pb-[46px] pt-[37px] md:pb-5 sm:p-5">
                  <div className="flex w-[80%] items-center justify-between gap-5 md:w-full md:flex-col">
                    <div className="flex w-[42%] flex-col gap-[9px] md:w-full">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Mã đơn hàng
                        </Text>
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Ngày đặt hàng
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading
                          size="lg"
                          as="h2"
                          className="self-start !font-semibold capitalize"
                        >
                          {order.id}
                        </Heading>
                        <Heading
                          size="lg"
                          as="h3"
                          className="!font-semibold capitalize"
                        >
                          {new Date(order.orderDate).toLocaleDateString()}
                        </Heading>
                      </div>
                    </div>
                    <div className="flex w-[47%] items-center justify-between gap-5 md:w-full">
                      <div className="flex flex-col items-start gap-3">
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Tổng đơn hàng
                        </Text>
                        <Heading
                          size="lg"
                          as="h4"
                          className="flex !font-semibold capitalize"
                        >
                          <span className="text-blue_gray-900_02">{order.totalAmount}đ</span>
                        </Heading>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <Text size="md" as="p" className="!text-blue_gray-600">
                          Phương thức thanh toán
                        </Text>
                        <Heading
                          size="lg"
                          as="h5"
                          className="!font-semibold capitalize"
                        >
                          {order.payment_method}
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[26px] rounded-md border border-solid border-gray-200_01 bg-white-A700 px-[52px] py-9 md:px-5 sm:p-5">
                  <Heading size="5xl" as="h6" className="uppercase">
                    Chi tiết đơn hàng
                  </Heading>
                  <div className="self-stretch">
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p">Sản phẩm</Text>
                        <Text as="p">Tổng thanh toán</Text>
                      </div>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="mt-2.5 flex flex-col gap-3.5">
                      {order.cart_items.map(item => (
                        <div key={item.id} className="flex flex-wrap justify-between gap-5">
                          <Text size="lg" as="p" className="self-start">
                            {item.name || "Unnamed Product"}
                          </Text>
                          <Text size="lg" as="p" className="flex self-end">
                            <span className="text-blue_gray-900_02">{item.price}đ</span>
                          </Text>
                        </div>
                      ))}
                    </div>
                    <div className="mt-[9px] flex flex-col gap-4">
                      <div className="h-px bg-gray-200_01" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="self-start">
                          Tổng đơn hàng
                        </Text>
                        <Text as="p" className="flex self-end">
                          <span className="text-blue_gray-900_02">{order.totalAmount}đ</span>
                        </Text>
                      </div>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
                      <Text as="p">Tổng phí vận chuyển</Text>
                      <Text size="lg" as="p">
                        Miễn phí vận chuyển
                      </Text>
                    </div>
                    <div className="mt-[17px] flex flex-col gap-[17px]">
                      <div className="h-px bg-gray-200_01" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p">VAT</Text>
                        <Text as="p" className="flex h-[21px] w-[22px]">
                          <span className="text-blue_gray-900_02">0đ</span>
                        </Text>
                      </div>
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="mt-4 flex flex-wrap justify-between gap-5">
                      <Text as="p">Hình thức thanh toán</Text>
                      <Text as="p">{order.payment_method}</Text>
                    </div>
                    <div className="mt-[17px] flex flex-col gap-4">
                      <div className="h-px bg-gray-200_01" />
                      <div className="flex flex-wrap justify-between gap-5">
                        <Text as="p" className="self-start">
                          Tổng cộng
                        </Text>
                        <Text as="p" className="flex">
                          <span className="text-blue_gray-900_02">{order.totalAmount}đ</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
