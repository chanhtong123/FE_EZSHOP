import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img, SelectBox } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" }, { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },];

const table6Data = [
  { snphmone: "Áo thun tay ngắn cổ tròn", rowngi: "120.000đ", hy: "images/img_close.svg" },
  { snphmone: "Áo thun tay ngắn cổ tròn", rowngi: "120.000đ", hy: "images/img_close.svg" },];

export default function CartDetailPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper();
    return [


      table6ColumnHelper.accessor("snphmone", {
        cell: (info) => (<div className="mt-[21px] flex flex-col gap-[79px] md:gap-[59px] sm:gap-[39px]">
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_image_65.png" alt="imagesixtyfive" className="mb-2.5 h-[93px] w-[93px] object-cover" />
            <div className="flex flex-col items-start gap-[7px]">
              <Text size="md" as="p">
                {info?.getValue?.()}
              </Text>
              <Heading size="lg" as="p" className="!font-semibold capitalize !text-gray-900_06">
                <span className="text-blue_gray-900_02">Size:&nbsp;</span>
                <span className="font-normal text-blue_gray-900_02">M</span>
              </Heading>
              <Text as="p" className="!font-jost !font-normal">
                Màu sắc: Xám bạc
              </Text>
            </div>
          </div>
          <div className="flex items-start justify-between gap-5">
            <Img src="images/img_image_65.png" alt="imagesixtysix" className="mb-2.5 h-[93px] w-[93px] object-cover" />
            <div className="flex flex-col items-start gap-1.5">
              <div className="flex flex-col items-start gap-2">
                <Text size="md" as="p">
                  Áo thun tay ngắn cổ tròn
                </Text>
                <Heading size="lg" as="p" className="!font-semibold capitalize !text-gray-900_06">
                  <span className="text-blue_gray-900_02">Size:&nbsp;</span>
                  <span className="font-normal text-blue_gray-900_02">M</span>
                </Heading>
              </div>
              <Text as="p" className="!font-jost !font-normal">
                Màu sắc: Xám bạc
              </Text>
            </div>
          </div>
        </div>
        ),

        header: (info) => (
          <Heading size="lg" as="h2" className="py-[26px] pl-[35px] !font-semibold capitalize md:p-5 sm:py-5 sm:pl-5">
            SẢN PHẨM
          </Heading>), meta: { width: "402px" },
      }),

      table6ColumnHelper.accessor("rowngi", {
        cell: (info) => (
          <div className="mt-9 flex flex-col gap-[139px] md:gap-[104px] sm:gap-[69px]">
            <div className="flex items-center">
              <Heading size="lg" as="p" className="flex !font-semibold capitalize">
                <span className="text-blue_gray-900_02">120.000</span>
                <a href="#" className="text-blue_gray-900_02 underline">
                  đ
                </a>
              </Heading>




              <div className="ml-[69px] flex w-[44%] items-center justify-center gap-4 rounded-[21px] border border-solid border-gray-200_01 bg-white-A700 px-[5px] py-1.5">
                <div className="w-[36%] rounded-[15px] bg-white-A700 px-2.5 pb-3.5 pt-[15px]">
                  <div className="h-px w-[10px] rotate-[90deg] bg-blue_gray-900_02" />
                </div>
                <Text size="md" as="p" className="self-end">
                  3                </Text>
                <Button size="2xl" shape="circle" className="w-[30px] !rounded-[15px]">
                  <Img src="images/img_plus.svg" />
                </Button>
              </div>
              <Heading size="lg" as="p" className="ml-11 flex !font-semibold capitalize">
                <span className="text-blue_gray-900_02">360.000</span>
                <a href="#" className="text-blue_gray-900_02 underline">
                  đ
                </a>
              </Heading>
            </div>
            <div className="flex items-center">
              <Heading size="lg" as="p" className="flex !font-semibold capitalize">
                <span className="text-blue_gray-900_02">120.000</span>
                <a href="#" className="text-blue_gray-900_02 underline">
                  đ
                </a>
              </Heading>
              <div className="ml-[69px] flex w-[44%] items-center justify-center gap-4 rounded-[21px] border border-solid border-gray-200_01 bg-white-A700 px-[5px] py-1.5">
                <div className="w-[36%] rounded-[15px] bg-white-A700 px-2.5 pb-3.5 pt-[15px]">
                  <div className="h-px w-[10px] rotate-[90deg] bg-blue_gray-900_02" />
                </div>
                <Text size="md" as="p" className="self-end">
                  3
                </Text>
                <Button size="2xl" shape="circle" className="w-[30px] !rounded-[15px]">
                  <Img src="images/img_plus.svg" />
                </Button>
              </div>
              <Heading size="lg" as="p" className="ml-11 flex !font-semibold capitalize">
                <span className="text-blue_gray-900_02">360.000</span>
                <a href="#" className="text-blue_gray-900_02 underline">
                  đ
                </a>
              </Heading>
            </div>
          </div>
        ),


        header: (info) => (<div className="flex flex-1 flex-wrap items-start justify-between gap-5 pb-[21px] pr-[75px] pt-[22px] md:self-stretch md:p-5 md:pr-5 sm:py-5">
          <Heading size="lg" as="h3" className="!font-semibold capitalize">
            ĐƠN GIÁ
          </Heading>
          <Heading size="lg" as="h4" className="!font-semibold capitalize">
            SỐ LƯỢNG
          </Heading>
          <Heading size="lg" as="h5" className="!font-semibold capitalize">
            TỔNG
          </Heading>
        </div>
        ), meta: { width: "425px" },
      }), table6ColumnHelper.accessor("hy", {
        cell: (info) => (
          <div className="flex flex-col items-center justify-center gap-[167px] md:gap-[125px] sm:gap-[83px]">
            <Img src={info?.getValue?.()} alt="close" className="h-[14px] w-[14px]" />
            <Img src="images/img_close.svg" alt="close_eleven" className="h-[14px] w-[14px]" />
          </div>
        ), header: (info) => (
          <Heading size="lg" as="h6" className="py-[26px] !font-semibold capitalize md:p-5 sm:py-5">
            HỦY
          </Heading>
        ), meta: { width: "98px" },
      }),];

  }, []);


  return (<>
    <Helmet>
      <title>FE_EzShop</title>
      <meta name="description" content="Web site created using create-react-app" />
    </Helmet>
    <div className="w-full bg-white-A700">
      <div className="flex flex-col items-center">
        <header className="relative flex flex-col items-center self-stretch bg-white-A700 pt-[11px]">
          <div className="flex flex-col items-center gap-[9px] self-stretch">
            <div className="container-sm flex items-center justify-between gap-5 pr-1 md:flex-col md:p-5">
              <div className="flex items-end self-start sm:flex-col">
                <div className="flex items-center gap-[5px]">
                  <a href="#">
                    <Img src="images/img_pin_1.svg" alt="pinone" className="h-[16px] w-[16px]" />
                  </a>
                  <Text size="s" as="p" className="self-end">
                    118 Cách Mạng Tháng 8
                  </Text>
                  <div className="h-full w-px bg-gray-200_01" />
                </div>
                <a href="#">
                  <Img src="images/img_phone_1.svg" alt="phoneone" className="ml-[19px] h-[16px] w-[16px] sm:ml-0 sm:w-full" />
                </a>
                <Text size="s" as="p" className="ml-[5px] !font-jost sm:ml-0">
                  <span className="font-bevietnampro text-blue_gray-900_02">Bạn cần trợ giúp? Gọi ngay:&nbsp;</span>
                  <span className="font-bevietnampro font-medium text-blue_gray-900_02">+84 1800 900</span>
                </Text>
              </div>
              <div className="flex w-[34%] items-center justify-center gap-[23px] md:w-full sm:flex-col">
                <SelectBox shape="square" indicator={
                  <Img
                    src="images/img_vector_blue_gray_900_02.svg"
                    alt="vector"
                    className="h-[5px] w-[8px]" />}
                  name="tingvitvn" placeholder={`Tiếng Việt / VNĐ`}
                  options={dropDownOptions}
                  className="flex-grow gap-px text-blue_gray-900_02" />
                <div className="flex w-[18%] items-center justify-center gap-4 sm:w-full">
                  <div className="h-[21px] w-px bg-gray-200_01" />
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_vector_blue_gray_900_02.svg"
                        alt="vector"
                        className="h-[5px] w-[8px]" />}
                    name="trgip"
                    placeholder={`Trợ giúp`}
                    options={dropDownOptions}
                    className="flex-grow gap-px text-blue_gray-900_02" />
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-[21px] w-px bg-gray-200_01" />
                  <Text size="s" as="p" className="self-end">
                    Tìm cửa hàng
                  </Text>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-full w-px bg-gray-200_01" />
                  <div className="flex items-center gap-4 self-end">
                    <Img src="images/img_facebook.svg" alt="close" className="h-[12px]" />
                    <Img src="images/img_facebook.svg" alt="close" className="h-[12px]" />
                    <Img src="images/img_facebook.svg" alt="close" className="h-[12px]" />
                    <Img src="images/img_facebook_blue_gray_900_02.png" alt="close" className="h-[11px] self-start object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px w-full self-stretch bg-gray-200_01" />
          </div>
          <div className="mt-[15px] flex w-[75%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
            <Img src="images/img_header_logo.png" alt="headerlogo" className="mb-[7px] h-[33px] w-[94px] object-contain" />
            <div className="flex w-[79%] items-center justify-center gap-6 md:w-full md:flex-col">
              <div className="flex flex-1 items-center justify-between gap-5 self-end rounded-md border border-solid border-green-A700_02 py-[11px] pl-[27px] pr-4 md:self-stretch sm:pl-5">
                <div className="flex w-[34%] items-start justify-center gap-5">
                  <SelectBox
                    size="md"
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_vector_blue_gray_900_02.svg"
                        alt="vector"
                        className="h-[5px] w-[8px]" />}
                    name="danhmc"
                    placeholder={`Danh mục`}
                    options={dropDownOptions}
                    className="flex-grow gap-px text-blue_gray-900_02 sm:pr-5" />
                  <Text
                    size="md" as="p"
                    className="!text-blue_gray-600">
                    Tìm kiếm
                  </Text>
                </div>
                <a href="#">
                  <Img
                    src="images/img_search_1.svg"
                    alt="searchone"
                    className="h-[20px] w-[20px]" />
                </a>
              </div>


              <div className="flex w-[43%] items-end justify-center gap-[17px] md:w-full sm:flex-col">
                <div className="flex flex-1 items-start justify-center gap-[15px] sm:self-stretch">
                  <a href="#">
                    <Button shape="round" className="w-[50px]">
                      <Img src="images/img_heart_1.svg" />
                    </Button>
                  </a>
                  <Heading size="lg" as="p" className="w-[61%] !font-inter leading-[22px]">
                    <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                      <>    Yêu thích  <br />
                      </>   </span>
                    <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">Sản phẩm</span>
                  </Heading>
                </div>
                <a href="#">
                  <Button shape="round" className="w-[50px]">
                    <Img
                      src="images/img_profile_1.svg" />
                  </Button>
                </a>
                <Heading size="lg" as="p" className="w-[17%] !font-inter leading-[22px] sm:w-full">
                  <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">
                    <>Đăng nhập <br /></></span>
                  <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">Tài khoản</span>
                </Heading>
                <div className="flex-1 sm:self-stretch">
                  <div className="flex items-center gap-[9px]">
                    <div className="relative h-[55px] w-[38%]">
                      <a href="#">
                        <Button shape="round" className="absolute bottom-[0.00px] left-[0.00px] m-auto w-[50px]">
                          <Img src="images/img_cart.svg" />
                        </Button>
                      </a>
                      <Heading size="xs" as="p" className="absolute right-[0.00px] top-[0.00px] m-auto flex h-[15px] w-[15px] items-center justify-center rounded-[7px] bg-orange-300 text-center !text-blue_gray-900_01"    >
                        2
                      </Heading>
                    </div>


                    <Heading size="lg" as="p" className="w-[62%] self-end !font-inter leading-[22px]">
                      <span className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02">289.000</span>
                      <a href="#" className="font-bevietnampro text-[13px] font-normal text-blue_gray-900_02 underline"
                      >    <>đ<br /></></a>
                      <span className="font-bevietnampro text-base font-medium text-blue_gray-900_02">
                        Thanh toán
                      </span>
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 h-px w-full self-stretch bg-gray-200_01" />
          <div className="container-sm flex items-center justify-center gap-[31px] pr-[5px] md:flex-col md:p-5">
            <div className="relative h-[60px] w-[20%] bg-green-A700_02 py-[19px] pl-5 pr-[21px] md:h-auto md:w-full sm:pr-5">
              <div className="flex w-full flex-col items-start">
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <div className="flex w-[50%] items-center justify-center gap-[15px]">
                    <div className="h-[2px] w-[20px] bg-white-A700" />
                    <Heading as="h6" className="!text-white-A700">
                      Danh mục
                    </Heading>
                  </div>
                  <Img src="images/img_vector_white_a700.svg" alt="vector" className="mb-[7px] h-[5px] self-end" />
                </div>
                <div className="relative mt-[-3px] h-[2px] w-[15px] bg-white-A700" />
              </div>
              <div className="absolute left-[25.00px] top-[21.00px] m-auto h-[2px] w-[15px] bg-white-A700" />
            </div>
            <div className="flex flex-1 items-center justify-between gap-5 pr-[118px] md:flex-col md:self-stretch md:pr-5">
              <div className="flex items-center gap-1 sm:flex-col">
                <ul className="flex gap-[38px] sm:flex-col">
                  <li onMouseLeave={() => { setMenuOpen(false); }} onMouseEnter={() => { setMenuOpen(true); }} >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Text as="p">Trang chủ</Text>
                      <Img src="images/img_vector_blue_gray_900_02.svg" alt="vector" className="mb-1.5 h-[5px] w-[8px]" />
                    </div>
                    {menuOpen ? <MegaMenu1 /> : null}
                  </li>
                  <li onMouseLeave={() => { setMenuOpen1(false); }} onMouseEnter={() => { setMenuOpen1(true); }} >
                    <div className="flex cursor-pointer items-center gap-1">
                      <Text as="p">Sản phẩm</Text>
                      <Img
                        src="images/img_vector_blue_gray_900_02.svg"
                        alt="vector"
                        className="mb-[5px] h-[5px] w-[8px]" />
                    </div>
                    {menuOpen1 ? <MegaMenu1 /> : null}
                  </li>
                  <li onMouseLeave={() => { setMenuOpen2(false); }} onMouseEnter={() => { setMenuOpen2(true); }} >
                    <div className="flex cursor-pointer items-center gap-[3px]">
                      <Text as="p">Liên hệ</Text>
                      <Img src="images/img_vector_blue_gray_900_02.svg" alt="vector" className="mb-1.5 h-[5px] w-[8px]" />
                    </div>
                    {menuOpen2 ? <MegaMenu1 /> : null}
                  </li>
                  <li onMouseLeave={() => { setMenuOpen3(false); }} onMouseEnter={() => { setMenuOpen3(true); }}   >

                    <div className="flex w-[60px] cursor-pointer text-base font-medium text-blue_gray-900_02">
                      Bài viết
                    </div>
                    {menuOpen3 ? <MegaMenu1 /> : null}
                  </li>
                </ul>
                <Img src="images/img_vector_blue_gray_900_02.svg" alt="vector" className="mb-1.5 h-[5px] self-end sm:w-full" />
              </div>
              <ul className="flex flex-wrap gap-4">
                <li>
                  <a href="#">
                    <Text as="p">đãi</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Ưu</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">trong</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="mt-[21px] flex w-[73%] flex-col items-start md:w-full md:p-5">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p">
              Trang chủ
            </Text>
            <Text size="md" as="p">
              /{" "}
            </Text>
            <Text size="md" as="p" className="!text-blue_gray-600">
              Giỏ hàng
            </Text>
          </div>


          <div className="container-xs flex">
            <div className="flex w-full flex-col items-center">
              <Heading size="9xl" as="h1" className="uppercase">
                Giỏ hàng
              </Heading>
              <Text size="lg" as="p" className="mt-[51px] flex !font-medium">
                <span className="text-blue_gray-900_02">Mua thêm&nbsp;</span>
                <span className="text-green-A700_02">312.000</span>
                <a href="#" className="text-green-A700_02 underline">
                  đ để được MIỄN PHÍ Vận chuyển
                </a>
              </Text>
              <div className="relative mt-1.5 h-[40px] w-[32%]">
                <div className="relative bottom-0 left-0 right-0 top-0 m-auto h-[6px] w-full rounded-[3px] bg-gray-100_05">
                  <div style={{ width: "57%" }} className="absolute h-full rounded-[3px] bg-orange-300" />
                </div>
                <Img
                  src="images/img_icon_white_a700.svg"
                  alt="icon"
                  className="absolute bottom-0 right-[39%] top-0 my-auto h-[40px] w-[40px]"
                />
              </div>
              <div className="mt-[30px] flex items-start gap-[27px] self-stretch md:flex-col">                  <div className="flex-1 rounded-md border border-solid border-gray-200_01 bg-white-A700 pb-[53px] md:self-stretch md:pb-5">                    <ReactTable size="2xl" bodyProps={{ className: "" }} headerProps={{ className: "bg-gray-100_02 rounded-tl-md rounded-tr-md md:flex-col" }} rowDataProps={{ className: "md:flex-col" }} columns={table6Columns} data={table6Data} />                  </div>                  <div className="flex w-[33%] flex-col items-start gap-[29px] rounded-md border border-solid border-gray-200_01 bg-white-A700 px-[30px] py-7 md:w-full sm:p-5">                    <Heading size="5xl" as="h5" className="uppercase">                      Tổng Thanh toán                    </Heading>                    <div className="flex flex-col gap-[47px] self-stretch">                      <div className="flex justify-between gap-5">

                <Text
                  size="md"
                  as="p"
                  className="w-[37%] capitalize leading-[30px]"><> Tổng Đơn hàng  <br /> Giảm giá <br />Tổng phí vận chuyển   </>
                </Text>
                <Heading size="lg" as="p" className="w-[21%] text-right !font-semibold capitalize leading-[30px]" >
                  <span className="text-blue_gray-900_02">1.080.000</span>
                  <a href="#" className="text-blue_gray-900_02 underline"><> đ<br /> </>
                  </a>
                  <span className="text-blue_gray-900_02">80.000</span>
                  <a href="#" className="text-blue_gray-900_02 underline">  <>      đ<br />   </>  </a>
                  <span className="text-blue_gray-900_02">24.000</span>
                  <a href="#" className="text-blue_gray-900_02 underline">đ   </a>
                </Heading>
              </div>
                <div className="flex flex-col gap-[13px]">
                  <div className="h-px bg-gray-200_01" />
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <Text size="md" as="p">
                      Tổng thanh toán
                    </Text>
                    <Heading as="h6" className="flex">
                      <span className="text-blue_gray-900_02">1.080.000</span>
                      <a href="#" className="text-blue_gray-900_02 underline">
                        đ
                      </a>
                    </Heading>
                  </div>
                </div>
              </div>
                <Button size="10xl" shape="round" className="w-full border border-solid border-green-A700_02 !text-gray-100_02 shadow-sm sm:px-5"
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
                  <Heading size="lg" as="p" className="self-start !font-semibold capitalize underline">
                    Nhập mã
                  </Heading>
                </div>
                <Button size="10xl" variant="outline" shape="round" color="undefined_undefined" className="min-w-[134px] sm:px-5" >
                  Quay về
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[71px] flex-col self-stretch" />
      </div>
    </div>

  </>);
}