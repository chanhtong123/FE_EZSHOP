import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Link } from 'react-router-dom';

import {
  Button,
  Text,
  RatingBar,
  Img,
  Input,
  CheckBox,
  SelectBox,
  Heading,
} from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import SalesShopPagination from "../../components/SalesShopPagination";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ListOfShopPage() {
  const [searchBarValue35, setSearchBarValue35] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);

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

        <div className="mt-[19px] flex w-[75%] flex-col gap-[76px] md:w-full md:gap-[57px] md:p-5 sm:gap-[38px]">
          <div className="container-md flex flex-col items-center">
            <div className="flex flex-wrap gap-[7px] self-start">
              <text size="md" as="p">
                Trang chủ
              </text>
              <Text size="md" as="p">
                /
              </Text>
              <Text size="md" as="p" className="!text-blue_gray-600">
                Danh sách cửa hàng
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[92px] md:gap-[69px] sm:gap-[46px]">
           
            <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            
              <div className="flex w-[100%] flex-col items-center gap-[25px] md:w-full">
              




                {/* list shop */}

                <div className="grid grid-cols-5 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
                  {shops.map(shop => (
                    <div key={shop.shopId} className="flex w-full flex-col gap-[21px] rounded-md border border-solid border-gray-200_01 bg-white-A700 p-[30px] sm:p-5">
                      <img
                        src={shop.image}
                        className="h-[200px] rounded-md object-cover"
                      />
                      <div className="flex flex-col gap-5">
                        <div className="flex">
                          <div className="flex flex-col items-start">
                            <Text as="p" className="!font-jost">
                              {shop.nameShop}
                            </Text>
                            <div className="flex flex-wrap items-center">
                            <Text as="p" className="!font-jost">
                              {shop.address}
                            </Text>
                            </div>
                            <div className="flex flex-wrap items-center">
                            <Text as="p" className="!font-jost">
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
              
        
              <SalesShopPagination className="w-[44%] gap-[10px] md:w-full mt-2" />
            

              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[113px] flex-col self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
}
