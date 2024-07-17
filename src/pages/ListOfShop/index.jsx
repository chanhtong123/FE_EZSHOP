import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Button, Text } from "../../components";

export default function ListOfShopPage() {
  const [shops, setShops] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axiosInstance.get("/public/shop");
        setShops(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
            <Text size="md" as="p" className="!text-blue_gray-600">
              <span className="font-bevietnampro text-blue_gray-900_02">
                Trang chủ/&nbsp;
              </span>
              <span className="font-bevietnampro text-blue_gray-600">
                Danh sách cửa hàng
              </span>
            </Text>
          </div>
          <div className="flex w-full flex-col gap-[59px] md:w-full md:p-5 sm:gap-[29px] pt-20">
            <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[100%] flex-col items-center gap-[25px] md:w-full">
                {/* list shop */}

                <div className="grid grid-cols-5 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
                  {shops.map((shop) => (
                    <div
                      key={shop.shopId}
                      className="flex w-full flex-col gap-[21px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5"
                    >
                      <Link to={`/sales-shop/${shop.shopId}`} key={shop.shopId}>
                        <img
                          src={shop.image}
                          className="h-[200px] rounded-md object-cover"
                        />
                      </Link>
                      <div className="flex flex-col gap-5">
                        <div className="flex">
                          <div className="flex flex-col items-start">
                            <Text as="p" className="!font-jost">
                              {shop.nameShop}
                            </Text>
                            <div className="flex flex-wrap items-center">
                              <Text
                                as="p"
                                className="!font-jost"
                                style={{ opacity: 0.5 }}
                              >
                                {shop.address}
                              </Text>
                            </div>
                            <div className="flex flex-wrap items-center">
                              <Text
                                as="p"
                                className="!font-jost"
                                style={{ opacity: 0.5 }}
                              >
                                {shop.phoneNumber}
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          as="p"
                          className="!font-jost !font-normal leading-7"
                        >
                          {shop.owner}
                        </Text>
                      </div>
                      <Link to={`/sales-shop/${shop.shopId}`} key={shop.shopId}>
                        <Button
                          size="10xl"
                          shape="round"
                          className="w-full border border-solid border-green-A700_02 font-medium !text-green-50_01 sm:px-5"
                        >
                          Xem cửa hàng
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* <SalesShopPagination className="w-[44%] gap-[10px] md:w-full mt-2" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
