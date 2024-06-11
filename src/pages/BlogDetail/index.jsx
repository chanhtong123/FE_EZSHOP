import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  Button,
  CheckBox,
  Input,
  TextArea,
  RatingBar,
  Heading,
  SelectBox,
} from "../../components";
import Footer1 from "../../components/Footer1";

const data = [
  {
    image: "images/img_armchair_toys_children_s_room.png",
    mccmica: "Mức độ cũ mới của đồ đạc là như thế nào?",
  },
  {
    image: "images/img_boy_plays_with.png",
    mccmica: "Đồ đạc đã được sửa chữa nào không?",
  },
];

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogDetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]); // State để lưu danh sách blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/guest/api/blogs/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/guest/api/blogs`
        );
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!blog) return <div>No Blog Found</div>;

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
        <div className="container-md mt-[19px] flex flex-col gap-[62px] md:p-5 sm:gap-[31px]">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Text size="md" as="p" className="self-start">
                Bài viết
              </Text>
            </a>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <Text size="md" as="p" className="!text-blue_gray-600">
              {blog.name}
            </Text>
          </div>
          <div className="flex flex-col gap-[59px] sm:gap-[29px]">
            <div className="flex flex-col items-center gap-[38px]">
              <div className="ml-[238px] flex flex-col items-start gap-3.5 self-start md:ml-0">
                {/* <Text as="p" className="!font-normal !text-blue_gray-600">
    {blog.name}
  </Text> */}
                <Text size="7xl" as="p">
                  {blog.name}
                </Text>
                <Text as="p" className="!font-normal !text-blue_gray-600">
                  {blog.formattedDate}
                </Text>
              </div>
              <div className="w-full h-0 pb-[56.25%] relative">
                <Img
                  src={blog.image}
                  alt={blog.name}
                  className="absolute top-0 left-0 w-full h-full rounded-md object-cover"
                />
              </div>
              {/* <div className="flex w-[66%] flex-col gap-[31px] md:w-full">
                <Text as="p" className="!font-normal leading-7">
                  Một trong những việc khó khăn khi bán đồ cũ trong nhà là xác
                  định được giá cả phù hợp. Bạn không thể bán được giá cao như
                  khi mới mua, nhưng cũng không nên bán quá rẻ để lỗ. Để bán
                  được giá hợp lý, bạn cần phải nghiên cứu thị trường và so sánh
                  giá cả của các sản phẩm tương tự. Ví dụ, nếu bạn muốn bán một
                  chiếc tivi cũ, bạn nên xem giá của các loại tivi cùng kích
                  thước, thương hiệu và đời máy trên các trang web mua bán hoặc
                  các cửa hàng điện tử.
                </Text>
                <div className="flex flex-col items-start">
                  <Text size="3xl" as="p">
                    Những gì bạn cần phải làm là?
                  </Text>
                  <Text as="p" className="mt-6 w-full !font-normal leading-7">
                    Bạn cũng nên xem xét tình trạng và chất lượng của đồ cũ,
                    cũng như mức độ hiếm có và phổ biến của chúng. Ví dụ, nếu
                    bạn có một chiếc đồng hồ cổ, bạn có thể bán được giá cao hơn
                    nếu nó là một sản phẩm độc đáo hoặc có giá trị lịch sử. Một
                    số yếu tố khác như thời gian, địa điểm và cách thức bán cũng
                    ảnh hưởng đến giá trị của đồ đạc đã qua sử dụng. Ví dụ, bạn
                    có thể bán được giá cao hơn nếu bạn bán vào mùa lễ hội.
                  </Text>
                  <div className="mt-[22px] flex w-[94%] md:w-full">
                    <div className="flex w-full items-center gap-2.5 md:flex-col">
                      <div className="flex w-[7px] flex-col gap-[33px]">
                        <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                        <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                        <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                        <div className="h-[7px] w-[7px] rounded-[3px] bg-gray-900_04" />
                      </div>
                      <Text as="p" className="w-full !font-normal leading-10">
                        <>
                          Rửa, lau sạch, và đánh bóng hàng đã qua sử dụng là
                          những bước quan trọng để bán được giá cao nhất <br />
                          Tìm kiếm một vài sản phẩm có mẫu mã tương tự với món
                          đồ của bạn <br /> Bán hầu hết đồ đạc ở mức 70-80% giá
                          tiền hàng mới <br /> So sánh tình trạng hiện tại với
                          tình trạng của sản phẩm khi bạn mới mua
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="mt-[30px] flex items-center gap-[22px] self-stretch md:flex-col">
                    <div className="h-full w-[5px] bg-green-A700_02 md:h-[5px] md:w-full" />
                    <Img
                      src="images/img_settings_gray_100_05.svg"
                      alt="settings"
                      className="mt-[13px] h-[24px] self-start md:w-full"
                    />
                    <Text
                      size="2xl"
                      as="p"
                      className="w-[94%] leading-[35px] md:w-full"
                    >
                      “Nếu bạn mua một chiếc máy tính bảng giá $800, và bạn sử
                      dụng nó hàng ngày trong một năm, bạn có thể bán lại giá
                      $600”
                    </Text>
                  </div>
                  <Text
                    as="p"
                    className="mt-[30px] w-full !font-normal leading-7"
                  >
                    <>
                      Ngoài ra, nếu một món đồ cũ là đồ cổ, tức là được sản xuất
                      trước năm 1970 và vẫn còn nguyên vẹn, thì giá trị của nó
                      có thể tăng lên theo thời gian, tùy thuộc vào sự hiếm có
                      và nhu cầu của người sưu tầm. Ví dụ, một chiếc đồng hồ
                      Rolex cổ có thể có giá cao hơn nhiều so với một chiếc đồng
                      hồ mới, vì nó có thiết kế độc đáo, chất liệu bền bỉ và
                      lịch sử phong phú. Bạn nên tìm hiểu kỹ về lịch sử và đặc
                      điểm của đồ cổ trước khi mua bán. <br /> <br /> Để bán
                      được đồ nội thất cũ với giá cao, bạn cần chọn những món đồ
                      có cấu trúc và chất liệu tốt. Đồ gỗ chất lượng sẽ có trọng
                      lượng nặng, không bị rung lắc hay lỏng lẻo khi di chuyển.
                      Bạn cũng nên kiểm tra các mối nối xem có khít và chắc
                      không. Nếu bạn mua đồ nội thất giá rẻ, hãy biết rằng bạn
                      sẽ không thể bán lại với giá cao.
                    </>
                  </Text>
                  <div className="mt-[81px] flex gap-7 self-stretch md:flex-col">
                    {data.map((d, index) => (
                      <div
                        key={"listmccmica" + index}
                        className="flex w-full flex-col items-start gap-[5px]"
                      >
                        <Img
                          src={d.image}
                          alt="image"
                          className="h-[350px] w-full rounded-md object-cover md:h-auto"
                        />
                        <Text as="p" className="!font-normal">
                          {d.mccmica}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <Text
                    as="p"
                    className="mt-[33px] w-full !font-normal leading-7"
                  >
                    <>
                      Đồ cổ là những đồ vật có tuổi đời xưa kỹ, có giá trị văn
                      hóa hoặc lịch sử, và thường hiếm gặp. Ví dụ như những bức
                      tranh, đồng hồ, đồ gốm, đồ trang sức, hay sách cũ. Để bán
                      được đồ cổ với giá cao, bạn cần phải biết chính xác giá
                      trị của chúng. Bạn có thể làm điều này bằng cách nhờ
                      chuyên gia định giá đồ cổ cho bạn. <br /> <br /> Những
                      người chuyên gia này có kinh nghiệm và kiến thức sâu rộng
                      về thị trường đồ cổ, và có thể cho bạn biết giá thị trường
                      hiện tại của món đồ cổ mà bạn muốn bán. Bạn có thể tìm
                      thấy những chuyên gia này ở các cửa hàng đồ cổ, các viện
                      bảo tàng, hoặc các tổ chức liên quan. Khi nhờ chuyên gia
                      định giá, bạn nên cung cấp cho họ những thông tin chi tiết
                      về món đồ cổ của bạn, như năm sản xuất, xuất xứ, mẫu mã,
                      tình trạng, và nguồn gốc. Những thông tin này sẽ giúp
                      chuyên gia đưa ra một đánh giá chính xác và công bằng hơn.
                    </>
                  </Text>
                  <div className="mt-[58px] flex items-center justify-between gap-5 self-stretch sm:flex-col">
                    <div className="flex w-[25%] items-center justify-center gap-[23px] sm:w-full">
                      <Text as="p">Share</Text>
                      <Img
                        src="images/img_icon.svg"
                        alt="icon"
                        className="h-[40px] w-[78%]"
                      />
                    </div>
                    <div className="flex w-[27%] justify-center gap-[7px] sm:w-full">
                      <Button
                        size="6xl"
                        shape="round"
                        className="min-w-[91px] font-medium !text-green-50_01 sm:px-5"
                      >
                        Apple
                      </Button>
                      <Button
                        color="green_50_01"
                        size="6xl"
                        variant="outline"
                        shape="round"
                        className="w-full flex-1 font-medium sm:px-5"
                      >
                        Dell
                      </Button>
                      <Button
                        color="gray_200_01"
                        size="6xl"
                        variant="outline"
                        shape="round"
                        className="w-full flex-1 !border font-medium sm:px-5"
                      >
                        Hp
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div className="h-px bg-gray-200_01" />
                  <div className="flex items-start gap-[30px] md:flex-col">
                    <Img
                      src="images/img_ellipse_44.png"
                      alt="circleimage"
                      className="h-[70px] w-[70px] rounded-[50%]"
                    />
                    <div className="flex flex-1 flex-col items-start md:self-stretch">
                      <Text size="2xl" as="p">
                        Brooklyn Simmons
                      </Text>
                      <Text
                        size="md"
                        as="p"
                        className="mt-[5px] !text-blue_gray-600"
                      >
                        Người viết truyện
                      </Text>
                      <Text
                        as="p"
                        className="mt-[22px] w-full !font-normal leading-7"
                      >
                        Bạn nên kiểm tra kỹ các chi tiết như vết trầy xước, vết
                        ố, vết nứt, vết mòn hay vết bẩn. Bạn cũng nên kiểm tra
                        chức năng của các bộ phận như khóa, bản lề, ngăn kéo hay
                        công tắc.
                      </Text>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="h-px bg-gray-200_01" />
                    <div className="mt-8 flex items-center justify-between gap-5 md:flex-col">
                      <div className="flex flex-col items-start gap-[13px]">
                        <div className="flex items-center gap-5">
                          <Img
                            src="images/img_arrow_down_blue_gray_900_02.svg"
                            alt="arrowdown"
                            className="h-[12px]"
                          />
                          <Text as="p">Trước</Text>
                        </div>
                        <Text
                          as="p"
                          className="self-end !font-jost !font-normal"
                        >
                          10 cửa hàng uy tín nhất năm - EZSHOP
                        </Text>
                      </div>
                      <Img
                        src="images/img_grid.svg"
                        alt="grid"
                        className="mt-[17px] h-[20px] w-[20px] self-start md:w-full"
                      />
                      <div className="flex flex-col items-start gap-[11px]">
                        <div className="flex items-start gap-[29px] self-end">
                          <Text
                            as="p"
                            className="!font-jost !text-green-A700_02"
                          >
                            Sau
                          </Text>
                          <Img
                            src="images/img_arrow_left_deep_purple_800.svg"
                            alt="arrowleft"
                            className="mt-[5px] h-[12px]"
                          />
                        </div>
                        <Text as="p" className="!font-jost !font-normal">
                          Hãy là người tiêu dùng thông minh!
                        </Text>
                      </div>
                    </div>
                    <div className="mt-[58px] h-px bg-gray-200_01" />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <Text size="3xl" as="p">
                    Đánh giá bài viết
                  </Text>
                  <div className="mt-[18px] flex flex-col gap-[35px] self-stretch">
                    <div className="flex flex-1 flex-col gap-5">
                      <div className="flex w-[40%] items-center gap-[19px] md:w-full">
                        <div className="relative h-[71px] w-[20%]">
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center rounded-[35px] bg-green-50_01 pb-[22px] pl-[23px] pr-[22px] pt-[23px] sm:p-5">
                            <Text
                              as="p"
                              className="h-[24px] w-[25px] !font-jost"
                            >
                              A.T
                            </Text>
                          </div>
                          <Button
                            color="white_A700"
                            size="xs"
                            shape="circle"
                            className="absolute right-[0.00px] top-[0.00px] m-auto w-[20px] !rounded-[10px]"
                          >
                            <Img src="images/img_verify_1.svg" />
                          </Button>
                        </div>
                        <div className="mb-1.5 flex flex-1 flex-col items-start gap-[11px] self-end">
                          <div className="flex w-[87%] items-start gap-2.5 md:w-full">
                            <RatingBar
                              value={1}
                              isEditable={true}
                              size={10}
                              className="flex justify-between"
                            />
                            <Text as="p">Đỉnh cao nghệ thuật!</Text>
                          </div>
                          <Text as="p" className="!font-normal">
                            Đánh giá bởi Ali Tufan - 27.04.2022
                          </Text>
                        </div>
                      </div>
                      <Text
                        as="p"
                        className="!font-normal leading-7 !text-blue_gray-600"
                      >
                        Bạn không cần phải bỏ ra $500 để mua một cái bàn thanh
                        lý chất lượng cao. Thay vào đó, bạn có thể tìm một cái
                        bàn bền, đẹp mắt nhưng có vấn đề về bề mặt, như trầy
                        xước, phai màu hay hỏng hóc. Bạn có thể mua cái bàn đó
                        với giá rẻ và tự sửa chữa nó. Chỉ cần một hộp sơn hoặc
                        sơn gỗ và một ít thời gian, bạn có thể biến một món đồ
                        cũ kỹ thành một món đồ mới tinh. Bạn sẽ vừa có được một
                        cái bàn ưng ý vừa tiết kiệm được nhiều tiền. Ngoài ra,
                        bạn cũng có thể áp dụng cách này cho những món đồ khác,
                        như ghế, tủ, kệ hay giường. Bạn chỉ cần có mắt nhìn và
                        sự sáng tạo để tận dụng những món đồ cũ và biến chúng
                        thành những món đồ mới lạ.
                      </Text>
                      <div className="flex items-center gap-3.5">
                        <Button
                          color="gray_200_01"
                          size="6xl"
                          variant="outline"
                          shape="round"
                          className="min-w-[105px] font-medium sm:px-5"
                        >
                          Hữu ích
                        </Button>
                        <Text
                          size="lg"
                          as="p"
                          className="mb-[9px] self-end !font-medium !text-blue_gray-600"
                        >
                          Báo cáo lạm dụng
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-5">
                      <div className="flex w-[40%] items-center gap-[19px] md:w-full">
                        <div className="relative h-[71px] w-[21%]">
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center rounded-[35px] bg-green-50_01 px-[23px] pb-[22px] pt-[23px] sm:p-5">
                            <Text
                              as="p"
                              className="h-[24px] w-[24px] !font-jost"
                            >
                              P.U
                            </Text>
                          </div>
                          <Button
                            color="white_A700"
                            size="xs"
                            shape="circle"
                            className="absolute right-[0.00px] top-[0.00px] m-auto w-[20px] !rounded-[10px]"
                          >
                            <Img src="images/img_verify_1.svg" />
                          </Button>
                        </div>
                        <div className="mb-1.5 flex flex-1 flex-col items-start gap-3 self-end">
                          <div className="flex w-[77%] items-start gap-2.5 md:w-full">
                            <RatingBar
                              value={1}
                              isEditable={true}
                              size={10}
                              className="mt-1 flex justify-between"
                            />
                            <Text as="p">Bài viết tuyệt vời</Text>
                          </div>
                          <Text as="p" className="!font-normal">
                            Đánh giá bởi P.JUyen - 09.07.2022
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <Text
                          as="p"
                          className="relative z-[1] !font-normal leading-7 !text-blue_gray-600"
                        >
                          <>
                            Ngoài ra, bạn cũng nên hỏi về nguồn gốc hay xuất xứ
                            của đồ đạc. Nếu người bán tuyên bố rằng đó là đồ cổ
                            hay hiếm có, bạn cần hỏi về năm sản xuất hay lịch sử
                            của chúng. Nếu người bán không thể cung cấp thông
                            tin chính xác, hoặc nó được sản xuất sau năm 1970
                            thì có thể đó không phải là đồ cổ hay hiếm có.
                            <br /> Bạn nên suy xét kỹ trước khi trả một mức giá
                            cao cho những sản phẩm không xứng đáng. Bằng cách
                            hỏi những câu hỏi thông minh, bạn có thể hiểu được
                            giá trị thực của đồ đạc cũ và tránh bị lừa gạt hay
                            mất tiền oan. Hãy mua sắm thông minh và tiết kiệm!
                          </>
                        </Text>
                        <div className="relative mt-[-8px] flex items-center gap-3.5">
                          <Button
                            color="gray_200_01"
                            size="6xl"
                            variant="outline"
                            shape="round"
                            className="min-w-[105px] font-medium sm:px-5"
                          >
                            Hữu ích
                          </Button>
                          <Text
                            size="lg"
                            as="p"
                            className="mb-[9px] self-end !font-medium !text-blue_gray-600"
                          >
                            Báo cáo lạm dụng
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[60px] flex flex-col items-center gap-[30px] self-stretch">
                    <Button
                      size="10xl"
                      variant="outline"
                      shape="round"
                      className="min-w-[140px] font-jost font-medium sm:px-5"
                    >
                      Xem tất cả
                    </Button>
                    <div className="h-px w-full self-stretch bg-gray-200_01" />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[33px]">
                  <Text size="3xl" as="p">
                    Để lại lời nhắn
                  </Text>
                  <div className="flex flex-col items-start gap-[23px] self-stretch">
                    <div className="flex flex-col gap-5 self-stretch">
                      <div className="flex flex-col items-start gap-[7px] pt-1">
                        <Text as="p">Đánh giá của bạn</Text>
                        <TextArea
                          shape="round"
                          name="group4056"
                          placeholder={`Viết bình luận`}
                          className="self-stretch !border-gray-200_01 text-blue_gray-900_02 sm:py-5 sm:pr-5"
                        />
                      </div>
                      <div className="flex gap-7 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-2">
                          <Text as="p">Tên</Text>
                          <Input
                            shape="round"
                            name="your_name"
                            placeholder={`Ali Tufan`}
                            className="self-stretch border border-solid border-blue_gray-900_02 !text-blue_gray-900_02 shadow-md sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                          <Text as="p">Email</Text>
                          <Input
                            shape="round"
                            type="email"
                            name="email"
                            placeholder={`Email của bạn`}
                            className="self-stretch border border-solid border-gray-200_01 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                    <CheckBox
                      name="lưutênemailvàtr"
                      label="Lưu tên, email và trang web của tôi trong trình duyệt này cho lần đánh giá tiếp theo."
                      id="lutnemailvtr"
                      className="gap-2.5 text-base text-blue_gray-900_02"
                    />
                    <Button
                      size="10xl"
                      shape="round"
                      className="min-w-[126px] border border-solid border-green-A700_02 font-jost font-medium !text-green-50_01 shadow-sm sm:px-5"
                    >
                      Hoàn tất
                    </Button>
                  </div>
                </div>
              </div> */}
              <div className="flex w-[66%] flex-col gap-[31px] md:w-full">
                <Text as="p" className="!font-normal leading-7">
                  {blog.content}
                </Text>
                {/* Các phần còn lại của giao diện */}
              </div>
            </div>
            <div className="flex flex-col items-start gap-[43px]">
              <Text size="7xl" as="p">
                Bài viết liên quan
              </Text>

              <div className="grid w-full grid-cols-3 gap-x-7 gap-y-20 md:grid-cols-2 sm:grid-cols-1">
                {blogs.map((blogItem) => (
                  <Link
                    key={blogItem.id}
                    to={`/blogdetail/${blogItem.id}`}
                    className="relative h-[300px] w-full"
                  >
                    <Img
                      src={blogItem.image || "images/default_image.png"} // Assuming image is a field in your blog data
                      alt={blogItem.title}
                      className="h-[300px] w-full rounded-md object-cover"
                    />
                    <div className="flex flex-col items-start gap-2 p-2">
                      <p className="font-bold text-xl text-blue_gray-600">
                        {blogItem.name}
                      </p>
                      <p className="text-sm !font-normal !text-blue_gray-600">
                        {blogItem.formattedDate}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="mt-[277px] justify-center self-stretch border-t border-solid border-gray-200_01 bg-white-A700 px-14 pb-[17px] pt-[82px] md:px-5 md:pt-5" />
      </div>
    </>
  );
};
export default BlogDetailPage;
