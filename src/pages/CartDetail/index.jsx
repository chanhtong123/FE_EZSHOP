import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../config/axiosConfig";
import { getToken, removeToken } from "../../utils/authUtils";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img, SelectBox } from "../../components";
import Footer1 from "../../components/Footer1";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

export default function CartDetailPage() {
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const originalSize = 93;
  const newSize = originalSize / 3;
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDeleteProduct = async (card_detail_id) => {
    const token = getToken();

    try {
      const response = await axiosInstance.delete(
        `http://localhost:8080/cart_item/delete/${card_detail_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        alert("Đã xóa sản phẩm khỏi giỏ hàng.");
        window.location.reload();
      } else {
        console.error("Xóa sản phẩm không thành công.", response.data);
        alert("Đã xảy ra lỗi khi xóa sản phẩm.");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi xóa sản phẩm.", error);
      alert("Đã xảy ra lỗi khi xóa sản phẩm.");
    }
  };

  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + item.total, 0);
    setTotalAmount(total);
    console.log(total);
  };

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfileItems = async () => {
      try {
        const response = await axiosInstance.get("/api/cart/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(response.data);
        if (response.data && response.data.id) {
          fetchCartItems(response.data.id, token);
        }
      } catch (error) {
        if (error.response && error.response.status === 403) {
          removeToken();
          navigate("/login");
        } else {
          console.error("Đã xảy ra lỗi khi lấy dữ liệu.", error);
        }
      }
    };

    const fetchCartItems = async (cartId, token) => {
      try {
        const response = await axiosInstance.get(`/cart_item/${cartId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const formattedCartItems = response.data.map((item) => ({
          card_detail_id: item.id,
          rowngi: item.price,
          total: item.price,
          name: item.product.name,
          image: item.product.image,
          shop: `${item.shop.nameShop}`,
          shopImage: `${item.shop.image}`,
        }));
        setCartItems(formattedCartItems);
        calculateTotalAmount(formattedCartItems);
      } catch (error) {
        console.error(
          "Đã xảy ra lỗi khi lấy dữ liệu các mặt hàng trong giỏ hàng.",
          error
        );
      }
    };

    fetchProfileItems();
  }, [navigate]);

  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper();

    return [
      table6ColumnHelper.accessor("shop", {
        cell: (info) => (
          <div className="py-[26px] pl-[65px]">
            <Text size="md" as="p" className="mb-2">
              {info.row.original.shop}
              {/* {info?.getValue?.()} */}
            </Text>

            <Img
              src={info.row.original.shopImage}
              style={{ height: `${newSize}px`, width: `${newSize}px` }}
              className="object-cover"
            />
          </div>
        ),
        header: (info) => (
          <Heading
            size="lg"
            as="h2"
            className="py-[26px] pl-[35px] !font-semibold capitalize md:p-5 sm:py-5 sm:pl-5"
          >
            Cửa Hàng
          </Heading>
        ),
        meta: { width: "150px" },
      }),

      table6ColumnHelper.accessor("san pham", {
        cell: (info) => (
          <div className="py-[26px] pl-[125px]">
            <div className="flex items-start gap-5">
              <Img
                src={info.row.original.image}
                alt="product-image"
                className="h-[93px] w-[93px] object-cover"
              />
              <div className="flex flex-col items-start gap-[7px]">
                <Heading
                  size="lg"
                  as="p"
                  className="!font-semibold capitalize !text-gray-900_06"
                >
                  <span className="text-blue_gray-900_02">Size:&nbsp;</span>
                  <span className="font-normal text-blue_gray-900_02">M</span>
                </Heading>
                <Text as="p" className="!font-jost !font-normal">
                  {info.row.original.name}
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Heading
            size="lg"
            as="h2"
            className="py-[26px] pl-[35px] !font-semibold capitalize md:p-5 sm:py-5 sm:pl-5"
          >
            SẢN PHẨM
          </Heading>
        ),
        meta: { width: "402px" },
      }),

      table6ColumnHelper.accessor("rowngi", {
        cell: (info) => (
          <Text size="md" as="p" className="py-[26px] pl-[55px]">
            {info?.getValue?.()}đ
          </Text>
        ),
        header: (info) => (
          <Heading
            size="lg"
            as="h2"
            className="py-[26px] pl-[35px] !font-semibold capitalize md:p-5 sm:py-5 sm:pl-5"
          >
            Số tiền
          </Heading>
        ),
        meta: { width: "150px" },
      }),

      table6ColumnHelper.accessor("delete", {
        cell: (info) => (
          <div className="py-[26px] pl-[90px]">
            <button
              onClick={() =>
                handleDeleteProduct(info.row.original.card_detail_id)
              }
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Xóa
            </button>
          </div>
        ),
        header: (info) => (
          <Heading
            size="lg"
            as="h2"
            className="py-[26px] pl-[35px] !font-semibold capitalize md:p-5 sm:py-5 sm:pl-5"
          >
            Xóa
          </Heading>
        ),
        meta: { width: "210px" },
      }),
    ];
  }, [newSize]);

  const handlePaymentNavigation = () => {
    navigate("/payment", { state: { totalAmount } });
  };

  return (
    <>
      <Helmet>
        <title>FE_EzShop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="mt-[21px] flex w-[73%] flex-col items-start md:w-full md:p-5">
            <div className="flex flex-wrap gap-[7px]">
              <Text size="md" as="p">
                Trang chủ
              </Text>
              <Text size="md" as="p">
                /
              </Text>
              <Text size="md" as="p" className="!text-blue_gray-600">
                Giỏ hàng
              </Text>
            </div>

            <div className="container-xs flex">
              <div className="flex w-full flex-col items-center">
                <div className="mt-[30px] flex items-start gap-[27px] self-stretch md:flex-col">
                  <div className="flex-1 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[53px] md:self-stretch md:pb-5">
                    {cartItems && cartItems.length > 0 ? (
                      <ReactTable
                        columns={table6Columns}
                        data={cartItems}
                        bodyProps={{ className: "" }}
                        headerProps={{
                          className:
                            "bg-gray-100_02 rounded-tl-md rounded-tr-md md:flex-col",
                        }}
                      />
                    ) : (
                      <p>Không có mặt hàng trong giỏ hàng.</p>
                    )}
                  </div>

                  <div className="flex w-[33%] flex-col items-start gap-[29px] rounded-md border border-solid border-gray-200_01 bg-white-A700 px-[30px] py-7 md:w-full sm:p-5">
                    <Heading size="5xl" as="h5" className="uppercase">
                      Tổng Thanh toán
                    </Heading>
                    <div className="flex flex-col gap-[47px] self-stretch">
                      <div className="flex justify-between gap-5">
                        <Text
                          size="md"
                          as="p"
                          className="w-[37%] capitalize leading-[30px]"
                        >
                          <>
                            {" "}
                            Tổng Đơn hàng <br /> Giảm giá <br />
                            Tổng phí vận chuyển{" "}
                          </>
                        </Text>
                        <Heading
                          size="lg"
                          as="p"
                          className="w-[21%] text-right !font-semibold capitalize leading-[30px]"
                        >
                          <span className="text-blue_gray-900_02 ">
                            {totalAmount}đ{" "}
                          </span>
                          <a href="#" className="text-blue_gray-900_02 ">
                            <>
                              {" "}
                              <br />{" "}
                            </>
                          </a>
                          {/* <span className="text-blue_gray-900_02">80.000đ</span>
                          <br/>
                        <span className="text-blue_gray-900_02">24.000đ</span> */}
                        </Heading>
                      </div>
                      <div className="flex flex-col gap-[13px]">
                        <div className="h-px bg-gray-200_01" />
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="md" as="p">
                            Tổng thanh toán
                          </Text>
                          <Heading as="h6" className="flex">
                            <span className="text-blue_gray-900_02">
                              {totalAmount}đ
                            </span>
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="10x1"
                      shape="round"
                      className="w-full border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
                      onClick={handlePaymentNavigation}
                    >
                      Thanh toán ngay
                    </Button>
                  </div>
                </div>

                <div className="mt-[30px] flex w-[61%] items-center justify-between gap-5 self-start md:w-full sm:flex-col">
                  <div className="flex w-[41%] flex-wrap justify-between gap-5 rounded-md border border-dashed border-blue_gray-600 bg-white-A700 pb-[17px] pl-4 pr-[22px] pt-[19px] sm:w-full sm:pr-5">
                    <Text size="md" as="p">
                      Mã khuyến mãi
                    </Text>
                    <Heading
                      size="lg"
                      as="p"
                      className="self-start !font-semibold capitalize underline"
                    >
                      Nhập mã
                    </Heading>
                  </div>
                  <Button
                    size="10x1"
                    variant="outline"
                    shape="round"
                    color="red_400"
                    className="min-w-[134px] sm:px-5"
                  >
                    Quay về
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
