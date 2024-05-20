import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/product-card";
import FrameComponent from "../components/frame-component";
import Component from "../components/component";
import "./product.css";

const Product = () => {
  const navigate = useNavigate();

  const onProductCardContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLargeButtonRadius6ContainerClick = useCallback(() => {
    navigate("/cartdetail");
  }, [navigate]);

  const onContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer8Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer9Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer10Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer11Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer12Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer13Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer14Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer15Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/hompage");
  }, [navigate]);

  const onItemsContainerClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onNgNhpTiClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onCartContainerClick = useCallback(() => {
    // Please sync "Thanh toán" to the project
  }, []);

  const onTrangChTextClick = useCallback(() => {
    navigate("/hompage");
  }, [navigate]);

  const onLinHTextClick = useCallback(() => {
    // Please sync "Liên hệ" to the project
  }, []);

  const onBiVitTextClick = useCallback(() => {
    // Please sync "Bài viết" to the project
  }, []);

  return (
    <div className="product">
      <div className="items7" />
      <ProductCard
        rectangleDiv={false}
        onProductCardContainerClick={onProductCardContainerClick}
        onLargeButtonRadius6ContainerClick={onLargeButtonRadius6ContainerClick}
      />
      <img
        className="arrows-1-icon12"
        loading="lazy"
        alt=""
        src="/arrows1.svg"
      />
      <img className="arrows-1-icon13" alt="" src="/arrows1-1.svg" />
      <div className="slider-wrapper">
        <div className="range" />
        <div className="range1" />
      </div>
      <div className="header-71">
        <header className="top-group">
          <div className="top5">
            <div className="left-content-wrapper">
              <div className="left-content">
                <div className="left1">
                  <div className="phone-support">
                    <div className="phone-icon-wrapper">
                      <div className="pin-1-container">
                        <img
                          className="pin-1-icon1"
                          alt=""
                          src="/pin-1-1.svg"
                        />
                      </div>
                      <div className="cch-mng-thng1">118 Cách Mạng Tháng 8</div>
                      <div className="phone-icon-wrapper-child" />
                    </div>
                    <div className="call-center">
                      <div className="phone-1-container">
                        <img
                          className="phone-1-icon1"
                          alt=""
                          src="/phone-1-1.svg"
                        />
                      </div>
                      <div className="bn-cn-tr-container1">
                        <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                        <span className="span33">+84 1800 900</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rights1">
                  <div className="lang-currency">
                    <div className="ting-vit2">Tiếng Việt / VNĐ</div>
                    <div className="vector-wrapper7">
                      <img
                        className="vector-icon13"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                  <div className="help-button1">
                    <div className="help-rect1" />
                    <div className="tr-gip-parent">
                      <div className="tr-gip1">Trợ giúp</div>
                      <div className="vector-wrapper8">
                        <img
                          className="vector-icon14"
                          alt=""
                          src="/vector-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="store-locator">
                    <div className="locator-rect" />
                    <div className="tm-ca-hng1">Tìm cửa hàng</div>
                  </div>
                  <div className="social-media">
                    <div className="social-rect1" />
                    <nav className="frame-nav">
                      <div className="div104"></div>
                      <div className="div105"></div>
                      <div className="div106"></div>
                      <div className="div107"></div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-child" />
          </div>
          <div className="header-center">
            <div className="center1">
              <div className="logo-container">
                <div className="logo1" onClick={onLogoContainerClick}>
                  <h2 className="ezshop1">EZSHOP</h2>
                </div>
              </div>
              <div className="search-navigation1">
                <div className="search1">
                  <div className="search-rect1" />
                  <div className="search-bar">
                    <div className="categories5">
                      <div className="category-name-wrapper">
                        <div className="danh-mc3">Danh mục</div>
                      </div>
                      <div className="vector-wrapper9">
                        <img
                          className="vector-icon15"
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                      <div className="categories-child" />
                    </div>
                    <div className="search-input1">
                      <div className="tm-kim1">Tìm kiếm</div>
                    </div>
                  </div>
                  <div className="search-btn">
                    <img className="button-icon1" alt="" src="/button-1.svg" />
                  </div>
                </div>
                <div className="right-box1">
                  <div className="items8" onClick={onItemsContainerClick}>
                    <div className="item-account-rect" />
                    <div className="wishlist-login">
                      <div className="yu-thch-sn-container1">
                        <p className="yu-thch2">Yêu thích</p>
                        <p className="sn-phm4">Sản phẩm</p>
                      </div>
                    </div>
                    <img
                      className="heart-1-icon2"
                      loading="lazy"
                      alt=""
                      src="/heart-1-1.svg"
                    />
                  </div>
                  <div className="account1">
                    <div className="account-item" onClick={onRectangleClick} />
                    <div className="ng-nhp-ti-khon-container">
                      <div
                        className="ng-nhp-ti-container1"
                        onClick={onNgNhpTiClick}
                      >
                        <p className="ng-nhp1">Đăng nhập</p>
                        <p className="ti-khon1">Tài khoản</p>
                      </div>
                    </div>
                    <img
                      className="profile-1-icon1"
                      loading="lazy"
                      alt=""
                      src="/profile-1-1.svg"
                    />
                  </div>
                  <div className="cart3" onClick={onCartContainerClick}>
                    <b className="cart4">Cart</b>
                    <div className="cart-wrapper">
                      <div className="cart-icon-wrapper">
                        <div className="cart-icon-wrapper-child" />
                        <img
                          className="shopping-cart-1-icon1"
                          alt=""
                          src="/shoppingcart-1-1.svg"
                        />
                      </div>
                    </div>
                    <div className="number1">
                      <div className="number-item" />
                      <b className="item-count">2</b>
                    </div>
                    <div className="checkout">
                      <div className="thanh-ton2">
                        <p className="p4">
                          <span>
                            289.000
                            <span className="span34">đ</span>
                          </span>
                        </p>
                        <p className="thanh-ton3">Thanh toán</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="bottom2">
          <div className="bottom-child" />
          <div className="bottom-inner">
            <div className="frame-parent8">
              <div className="categories-parent">
                <div className="categories6">
                  <div className="categories-item" />
                  <div className="frame-parent9">
                    <div className="frame-wrapper1">
                      <div className="rectangle-parent2">
                        <div className="frame-child2" />
                        <div className="frame-child3" />
                        <div className="frame-child4" />
                      </div>
                    </div>
                    <div className="danh-mc-wrapper">
                      <div className="danh-mc4">Danh mục</div>
                    </div>
                    <div className="vector-wrapper10">
                      <img
                        className="vector-icon16"
                        alt=""
                        src="/vector-13.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="nav-wrapper">
                  <div className="nav1">
                    <div className="trang-ch-parent">
                      <div className="trang-ch3" onClick={onTrangChTextClick}>
                        Trang chủ
                      </div>
                      <div className="vector-wrapper11">
                        <img
                          className="vector-icon17"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                    </div>
                    <div className="sn-phm-parent">
                      <div className="sn-phm5">Sản phẩm</div>
                      <div className="vector-wrapper12">
                        <img
                          className="vector-icon18"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                    </div>
                    <div className="lin-h-parent">
                      <div className="lin-h1" onClick={onLinHTextClick}>
                        Liên hệ
                      </div>
                      <div className="vector-wrapper13">
                        <img
                          className="vector-icon19"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                    </div>
                    <div className="bi-vit-parent">
                      <div className="bi-vit1" onClick={onBiVitTextClick}>
                        Bài viết
                      </div>
                      <div className="vector-wrapper14">
                        <img
                          className="vector-icon20"
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-nav-wrapper">
                <div className="right-nav1">
                  <div className="u-i-trong1">
                    Ưu đãi trong ngày Ưu đãi hấp dẫn Bán chạy nhất Hàng mới về
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="product-inner">
        <section className="frame-section">
          <FrameComponent />
          <div className="frame-parent10">
            <div className="inner-parent">
              <img
                className="inner-icon1"
                loading="lazy"
                alt=""
                src="/inner.svg"
              />
              <div className="frame-child5" />
            </div>
            <div className="top-wrapper">
              <div className="top6">
                <div className="hin-th-120-trong-175-kt-qu-parent">
                  <div className="hin-th-120">
                    Hiển thị 1–20 trong 175 kết quả.
                  </div>
                  <div className="frame-child6" />
                  <div className="div108">20</div>
                  <div className="frame-child7" />
                  <div className="div109">40</div>
                  <div className="frame-child8" />
                  <div className="div110">60</div>
                  <div className="frame-child9" />
                  <div className="tt-c">Tất cả</div>
                </div>
                <div className="lc-sn-phm-parent">
                  <div className="lc-sn-phm">Lọc sản phẩm</div>
                  <div className="vector-wrapper15">
                    <img
                      className="vector-icon21"
                      alt=""
                      src="/vector-82.svg"
                    />
                  </div>
                  <div className="frame-child10" />
                  <div className="danh-sch">Danh sách</div>
                  <div className="frame-child11" />
                  <div className="li">Lưới</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent11">
            <div className="frame-parent12">
              <div className="frame-parent13">
                <div className="lt-nh-gi-parent">
                  <div className="lt-nh-gi">Lượt đánh giá</div>
                  <div className="rectangle-wrapper">
                    <div className="frame-child12" />
                  </div>
                </div>
                <div className="frame-parent14">
                  <div className="frame-wrapper2">
                    <div className="frame-parent15">
                      <div className="radio-parent">
                        <div className="radio">
                          <div className="radio-child" />
                        </div>
                        <div className="frame-wrapper3">
                          <div className="star-1-1-group">
                            <img
                              className="star-1-124"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-224"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-324"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-424"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-524"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radio-group">
                        <div className="radio1">
                          <div className="radio-item" />
                          <div className="radio-inner" />
                        </div>
                        <div className="frame-wrapper4">
                          <div className="star-1-1-container">
                            <img
                              className="star-1-125"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-225"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-325"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-425"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                            <img
                              className="star-1-525"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radio-container">
                        <div className="radio2">
                          <div className="radio-child1" />
                        </div>
                        <div className="frame-wrapper5">
                          <div className="star-1-1-parent1">
                            <img
                              className="star-1-126"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-226"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-326"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                            <img
                              className="star-1-426"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                            <img
                              className="star-1-526"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="radio-parent1">
                        <div className="radio3">
                          <div className="radio-child2" />
                        </div>
                        <div className="frame-wrapper6">
                          <div className="star-1-1-parent2">
                            <img
                              className="star-1-127"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-227"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                            <img
                              className="star-1-327"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                            <img
                              className="star-1-427"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                            <img
                              className="star-1-527"
                              alt=""
                              src="/star-1-5-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="up-up-up-up-wrapper">
                    <div className="up-up-container">
                      <p className="up">{`& up`}</p>
                      <p className="up1">{`& up`}</p>
                      <p className="up2">{`& up`}</p>
                      <p className="up3">{`& up`}</p>
                    </div>
                  </div>
                  <div className="div111">
                    <p className="p5">87</p>
                    <p className="p6">92</p>
                    <p className="p7">123</p>
                    <p className="p8">49</p>
                  </div>
                </div>
                <div className="rectangle-parent3">
                  <div className="frame-child13" />
                  <div className="tnh-trng-parent">
                    <div className="tnh-trng">Tình trạng</div>
                    <div className="rectangle-frame">
                      <div className="frame-child14" />
                    </div>
                  </div>
                </div>
                <div className="frame-parent16">
                  <div className="frame-parent17">
                    <div className="frame-wrapper7">
                      <div className="checkbox-parent">
                        <div className="checkbox2">
                          <div className="checkbox-inner" />
                        </div>
                        <div className="checkbox3">
                          <div className="checkbox-child1" />
                          <img
                            className="check-1-1"
                            alt=""
                            src="/check-1-1.svg"
                          />
                        </div>
                        <div className="checkbox4">
                          <div className="checkbox-child2" />
                        </div>
                      </div>
                    </div>
                    <div className="new-used-renewed-container">
                      <p className="new">New</p>
                      <p className="used">Used</p>
                      <p className="renewed">Renewed</p>
                    </div>
                  </div>
                  <div className="div112">
                    <p className="p9">87</p>
                    <p className="p10">92</p>
                    <p className="p11">123</p>
                  </div>
                </div>
              </div>
              <div className="items-wrapper">
                <div className="items9">
                  <Component
                    image30="/image-30-11@2x.png"
                    onContainer3Click={onContainerClick}
                  />
                  <ProductCard
                    rectangleDiv
                    productInfoTop="0px"
                    productInfoLeft="280px"
                    groupIconPadding="unset"
                    onProductCardContainerClick={onContainer1Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="560px"
                    propTop="0px"
                    onContainer3Click={onContainer2Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="840px"
                    propTop="0px"
                    onContainer3Click={onContainer3Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="0px"
                    propTop="452px"
                    onContainer3Click={onContainer4Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="280px"
                    propTop="452px"
                    onContainer3Click={onContainer5Click}
                  />
                  <Component
                    image30="/image-30-11@2x.png"
                    propLeft="560px"
                    propTop="452px"
                    onContainer3Click={onContainer6Click}
                  />
                  <Component
                    image30="/image-30-18@2x.png"
                    propLeft="840px"
                    propTop="452px"
                    onContainer3Click={onContainer7Click}
                  />
                  <Component
                    image30="/image-30-18@2x.png"
                    propLeft="0px"
                    propTop="904px"
                    onContainer3Click={onContainer8Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="280px"
                    propTop="904px"
                    onContainer3Click={onContainer9Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="560px"
                    propTop="904px"
                    onContainer3Click={onContainer10Click}
                  />
                  <Component
                    image30="/image-30-18@2x.png"
                    propLeft="840px"
                    propTop="904px"
                    onContainer3Click={onContainer11Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="0px"
                    propTop="1356px"
                    onContainer3Click={onContainer12Click}
                  />
                  <Component
                    image30="/image-30-11@2x.png"
                    propLeft="280px"
                    propTop="1356px"
                    onContainer3Click={onContainer13Click}
                  />
                  <Component
                    image30="/image-30-17@2x.png"
                    propLeft="560px"
                    propTop="1356px"
                    onContainer3Click={onContainer14Click}
                  />
                  <Component
                    image30="/image-30-18@2x.png"
                    propLeft="840px"
                    propTop="1356px"
                    onContainer3Click={onContainer15Click}
                  />
                </div>
              </div>
            </div>
            <div className="pagination-container">
              <div className="panigation">
                <div className="navigation">
                  <div className="arrow2">
                    <img
                      className="arrows-1-icon14"
                      alt=""
                      src="/arrows1-2.svg"
                    />
                    <img
                      className="arrows-1-icon15"
                      alt=""
                      src="/arrows1-3.svg"
                    />
                  </div>
                  <div className="number2">
                    <div className="page-numbers">
                      <div className="active-page-indicator">
                        <div className="active-page-indicator-child" />
                        <div className="page-dot">1</div>
                      </div>
                    </div>
                    <div className="page-numbers1">
                      <div className="page-numbers-child" />
                      <div className="div113">2</div>
                    </div>
                    <div className="page-numbers2">
                      <div className="div114">
                        <div className="ellipse-div" />
                        <div className="div115">3</div>
                      </div>
                    </div>
                    <div className="page-numbers3">
                      <div className="page-numbers-item" />
                      <div className="div116">4</div>
                    </div>
                    <div className="page-numbers4">
                      <div className="div117">
                        <div className="child12" />
                        <div className="div118">5</div>
                      </div>
                    </div>
                    <div className="page-numbers5">
                      <div className="div119">
                        <div className="child13" />
                        <div className="div120">...</div>
                      </div>
                    </div>
                    <div className="page-numbers6">
                      <div className="div121">
                        <div className="child14" />
                        <div className="div122">20</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="results-count">
                  <div className="of-300-properties">
                    Tìm thấy 1 – 20 trong số hơn 300 cơ sở kinh doanh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer1">
        <div className="footer-background1" />
        <div className="top7">
          <div className="top-container">
            <div className="contact">
              <div className="lin-h-chng2">Liên hệ chúng tôi</div>
              <div className="inner5">
                <div className="details">
                  <div className="phone">
                    <img
                      className="phone-call-1-icon1"
                      loading="lazy"
                      alt=""
                      src="/phonecall-1.svg"
                    />
                  </div>
                  <div className="schedule">
                    <div className="th-hai-1">
                      Thứ Hai - Thứ Sáu: 08h00 - 21h00
                    </div>
                    <div className="space">+(1) 123 456 7890</div>
                  </div>
                </div>
                <div className="email-container">
                  <div className="email-info1">
                    <img
                      className="email-1-icon1"
                      loading="lazy"
                      alt=""
                      src="/email-1.svg"
                    />
                    <div className="bn-cn-gip1">Bạn cần giúp đỡ?</div>
                  </div>
                  <div className="email-address">
                    <div className="supportezshopcom1">support@ezshop.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="categories7">
              <div className="about">
                <div className="about-heading">
                  <div className="v-ezshop1">Về EZShop</div>
                </div>
                <div className="theo-di-n-container1">
                  <p className="theo-di-n1">Theo dõi đơn hàng của bạn</p>
                  <p className="hng-dn-sn1">Hướng dẫn sản phẩm</p>
                  <p className="danh-sch-yu1">Danh sách yêu thích</p>
                  <p className="chnh-sch-bo2">Chính sách bảo mật</p>
                  <p className="nh-v-ca1">Định vị cửa hàng</p>
                </div>
              </div>
              <div className="support-services">
                <div className="h-tr-khch1">Hỗ trợ khách hàng</div>
                <div className="lin-h-chng-container1">
                  <p className="lin-h-chng3">Liên hệ chúng tôi</p>
                  <p className="trung-tm-tr1">Trung tâm trợ giúp</p>
                  <p className="tr-li1">{`Trả lại & Trao đổi`}</p>
                  <p className="ti-tr-mua1">Tài trợ mua tốt nhất</p>
                  <p className="th-qu-tng1">Thẻ quà tặng mua tốt nhất</p>
                </div>
              </div>
              <div className="support-services1">
                <div className="dch-v1">Dịch vụ</div>
                <div className="bit-i-am-container1">
                  <p className="bit-i-am1">Biệt đội đam mê</p>
                  <p className="c-vn-ti1">Cố vấn tại nhà</p>
                  <p className="chng-trnh-trao1">Chương trình trao đổi</p>
                  <p className="ti-ch1">Tái chế đồ điện tử</p>
                  <p className="sc-khe-mua1">Sức khỏe mua tốt nhất</p>
                </div>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="follow-us">
              <div className="theo-di1">Theo dõi</div>
              <div className="inner6">
                <div className="div123"></div>
                <div className="div124"></div>
                <div className="div125"></div>
                <div className="div126"></div>
              </div>
            </div>
            <div className="payments">
              <div className="phng-thc-thanh1">Phương thức thanh toán</div>
              <div className="inner7">
                <img className="payment-icons6" alt="" src="/1-1.svg" />
                <img className="payment-icons7" alt="" src="/2-1.svg" />
                <img className="payment-icons8" alt="" src="/3-1.svg" />
                <img className="payment-icons9" alt="" src="/4-1.svg" />
                <img className="payment-icons10" alt="" src="/5-1.svg" />
                <img className="payment-icons11" alt="" src="/6-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom3">
          <div className="bottom-background" />
          <div className="footer-info">
            <div className="copyright">
              <div className="ezshop-all-rights1">
                © 2024 EZShop. All Rights Reserved
              </div>
              <div className="quyn-ring-t1">
                Quyền riêng tư · Điều khoản · Sơ đồ trang web
              </div>
            </div>
            <div className="preferences">
              <div className="currency1">
                <div className="tin-t1">Tiền tệ:</div>
                <div className="vn1">VNĐ</div>
                <div className="currency-dropdown">
                  <img className="dropdown-icon2" alt="" src="/vector-8.svg" />
                </div>
              </div>
              <div className="language1">
                <div className="ngn-ng1">Ngôn ngữ:</div>
                <div className="ting-vit3">Tiếng Việt</div>
                <div className="vector-wrapper16">
                  <img className="vector-icon22" alt="" src="/vector-8.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
