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
              <div className="flex w-[15%] flex-col gap-[21px] md:w-full">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-[25px]">
                    <text size="2xl" as="p">
                      Lọc theo danh mục
                    </text>
                    <div className="h-px w-[15px] bg-blue_gray-900_02" />

                  </div>
                  <div className="flex flex-col items-start">
                    <Input
                      size="md"
                      shape="round"
                      name="search"
                      placeholder={`Tìm kiếm`}
                      value={searchBarValue35}
                      onChange={(e) => setSearchBarValue35(e)}
                      suffix={
                        searchBarValue35?.length > 0 ? (
                          <CloseSVG onClick={() => setSearchBarValue35("")} />
                        ) : null
                      }
                      className="self-stretch border border-solid border-gray-200_01 !text-blue_gray-900_02 sm:pr-5"
                    />
                    <div className="mt-5 flex gap-5 self-stretch">
                      <div className="relative h-[150px] flex-1 md:h-auto">
                        <CheckBox
                          name="đanggiảmgiánhàb"
                          label="Đang giảm giáNhà & BếpNhà & Nội thấtĐiện tửQuần áo & Phụ kiện"
                          id="anggimginhb"
                          className="gap-2.5 text-left font-jost text-[15px] leading-[30px] text-blue_gray-900_02"
                        />
                        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[10%] flex-col">
                          <div className="h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                          <div className="mt-3.5 flex flex-col items-center rounded bg-green-A700_02 p-1">
                            <Img
                              src="images/img_check_1_1.svg"
                              alt="check1one"
                              className="h-[8px] w-[8px]"
                            />
                          </div>
                          <div className="mt-11 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                          <div className="mt-3.5 h-[16px] w-[16px] rounded border border-solid border-blue_gray-900_02" />
                        </div>
                      </div>
                      <Text
                        size="s"
                        as="p"
                        className="w-[12%] text-right leading-[30px]"
                      >
                        <>
                          87 <br /> 92 <br /> 123 <br /> 49 <br /> 12
                        </>
                      </Text>
                    </div>
                    <div className="mt-2.5 flex w-[35%] flex-col items-start gap-1 shadow-sm md:w-full">
                      <Text size="lg" as="p">
                        Xem thêm
                      </Text>
                      <div className="h-[2px] w-[32px] bg-blue_gray-900_02" />
                    </div>
                  </div>
                  <div className="h-px bg-gray-200_01" />
                </div>
                <Accordion preExpanded={[0]} className="flex flex-col gap-px">
                  {[...Array(1)].map((_, i) => (
                    <AccordionItem uuid={i} key={`filtersidebar${i}`}>
                      <div className="flex flex-1 flex-col gap-[21px]">
                        <div className="flex items-center justify-between gap-5">
                          <Text size="2xl" as="p">
                            Lọc theo vị trí
                          </Text>
                          <div className="h-px w-[15px] bg-blue_gray-900_02" />
                        </div>
                        <div className="flex flex-col gap-2.5">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex items-start justify-between gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[11px] pl-[15px] pr-3 pt-3.5">
                                      <Text size="lg" as="p">
                                        Quốc gia
                                      </Text>
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex items-start justify-between gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[11px] pl-[15px] pr-3 pt-3.5">
                                      <Text size="lg" as="p">
                                        Tỉnh/ Thành phố
                                      </Text>
                                      <Img
                                        src="images/img_vector_blue_gray_900_02.svg"
                                        alt="vector"
                                        className="mt-1.5 h-[5px]"
                                      />
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex items-start justify-between gap-5 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-2.5 pl-[15px] pr-3 pt-[15px]">
                                      <Text size="lg" as="p">
                                        Quận/ Huyện
                                      </Text>
                                      <Img
                                        src="images/img_vector_blue_gray_900_02.svg"
                                        alt="vectorteen"
                                        className="mt-[5px] h-[5px]"
                                      />
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <Input
                            size="md"
                            shape="round"
                            name="four_one"
                            placeholder={`Mã vùng`}
                            className="border border-solid border-gray-200_01 !text-blue_gray-900_02 sm:pr-5"
                          />
                        </div>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex w-[80%] flex-col items-center gap-[25px] md:w-full">
                <div className="flex items-center justify-between gap-5 self-stretch">
                
                  <div className="flex items-start gap-[9px]">
                    
                    
                  </div>
                </div>




                {/* list shop */}

                <div className="grid grid-cols-3 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
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
