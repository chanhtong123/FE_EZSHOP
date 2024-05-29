import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, SelectBox } from "../../components";
import Footer1 from "../../components/Footer1";
import MegaMenu1 from "../../components/MegaMenu1";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function PolicyPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);
  const [menuOpen3, setMenuOpen3] = React.useState(false);
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center self-end">
          <div className="container-md mt-[17px] flex flex-col items-center md:p-5">
            <div className="flex flex-wrap gap-[7px] self-start">
              <Text size="md" as="p" className="self-end">
                Trang chủ
              </Text>
              <Text size="md" as="p">
                /
              </Text>
              <Text size="md" as="p" className="self-start">
                Chính sách
              </Text>
              <Text size="md" as="p">
                /
              </Text>
              <Text size="md" as="p" className="self-end !text-blue_gray-600">
                Chính sách bảo mật thanh toán
              </Text>
            </div>
          </div>
          <div className="relative mt-[98px] h-[1355px] self-stretch">
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center md:p-5">
              <div className="flex w-full flex-col items-center gap-[37px]">
                <Heading size="5xl" as="h1" className="uppercase">
                  Chính sách bảo mật thanh toán
                </Heading>
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="flex w-[21%] flex-col items-start gap-[21px] md:w-full">
                    <Heading as="h2">Danh mục</Heading>
                    <Text as="p" className="w-full !font-normal leading-[45px]">
                      <>
                        Chính sách bảo mật thanh toán <br /> Điều khoản đổi trả
                        <br /> Chính sách bảo mật thông tin cá nhân <br /> Chính
                        sách giải quyết khiếu nại <br /> Chính sách bảo mật
                        thanh toán
                      </>
                    </Text>
                  </div>
                  <div className="flex w-[75%] items-start justify-center gap-[23px] md:w-full md:flex-col">
                    <div className="mt-[11px] h-[1273px] w-px bg-gray-200_01 md:h-px md:w-[1273px]" />
                    <div className="flex flex-1 flex-col items-start md:self-stretch">
                      <div className="flex flex-col items-start gap-1 self-stretch">
                        <Heading as="h3">1. Cam kết bảo mật</Heading>
                        <Text
                          as="p"
                          className="w-full !font-normal leading-[150%]"
                        >
                          Hệ thống thanh toán thẻ được cung cấp bởi các đối tác
                          cổng thanh toán (“Đối Tác Cổng Thanh Toán”) đã được
                          cấp phép hoạt động hợp pháp tại Việt Nam. Theo đó, các
                          tiêu chuẩnbảo mật thanh toán thẻ tại Tiki.vn đảm bảo
                          tuân thủ theo các tiêu chuẩn bảo mật ngành.
                        </Text>
                      </div>
                      <Heading as="h4" className="mt-7">
                        2. Quy định bảo mật
                      </Heading>
                      <Text
                        as="p"
                        className="w-full !font-normal leading-[150%]"
                      >
                        <>
                          - Chính sách giao dịch thanh toán bằng thẻ quốc tế và
                          thẻ nội địa (internet banking) đảmbảo tuân thủ các
                          tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh Toán
                          gồm: <br />• Thông tin tài chính của Khách hàng sẽ
                          được bảo vệ trong suốt quá trình giao dịchbằng giao
                          thức SSL (Secure Sockets Layer). <br />• Chứng nhận
                          tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI
                          DSS) doTrustwave cung cấp. <br />• Mật khẩu sử dụng
                          một lần (OTP) được gửi qua SMS để đảm bảo việc truy
                          cập tàikhoản được xác thực. <br />• Tiêu chuẩn mã hóa
                          MD5 128 bit. <br />• Các nguyên tắc và quy định bảo
                          mật thông tin trong ngành tài chính ngân hàng theoquy
                          định của Ngân hàng nhà nước Việt Nam. <br /> <br />-
                          Chính sách bảo mật giao dịch trong thanh toán của
                          Tiki.vn áp dụng với Khách hàng: <br />• Tiki cung cấp
                          tiện ích lưu giữ token - chỉ lưu chuỗi đã được mã hóa
                          bởi Đối TácCổng Thanh Toán cung cấp cho Tiki. Tiki
                          không trực tiếp lưu trữ thông tin thẻ kháchhàng. Việc
                          bảo mật thông tin thẻ thanh toán Khách hàng được thực
                          hiện bởi Đối TácCổng Thanh Toán đã được cấp phép.
                          <br />• Đối với thẻ quốc tế: thông tin thẻ thanh toán
                          của Khách hàng mà có khả năng sửdụng để xác lập giao
                          dịch không được lưu trên hệ thống của tiki.vn. Đối Tác
                          CổngThanh Toán sẽ lưu trữ và bảo mật. <br />• Đối với
                          thẻ nội địa (internet banking), Tiki chỉ lưu trữ mã
                          đơn hàng, mã giao dịch vàtên ngân hàng. <br /> <br />
                          Ezshop cam kết đảm bảo thực hiện nghiêm túc các biện
                          pháp bảo mật cần thiết cho mọi hoạt độngthanh toán
                          thực hiện trên sàn giao dịch thương mại điện tử
                          ezshop.vn.
                        </>
                      </Text>
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
