import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-detail.css";

const CartDetail = () => {
  const navigate = useNavigate();

  const onTrGipTextClick = useCallback(() => {
    // Please sync "Trợ giúp" to the project
  }, []);

  const onEZSHOPTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onActionButtonsClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onTrangChTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSnPhmTextClick = useCallback(() => {
    navigate("/sn-phm");
  }, [navigate]);

  const onLinHTextClick = useCallback(() => {
    // Please sync "Liên hệ" to the project
  }, []);

  const onBiVitTextClick = useCallback(() => {
    // Please sync "Bài viết" to the project
  }, []);

  const onTrangChText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onChnhSchTextClick = useCallback(() => {
    navigate("/sn-phm");
  }, [navigate]);

  const onLargeButtonRadius6ContainerClick = useCallback(() => {
    // Please sync "Thanh toán" to the project
  }, []);

  const onShopNowTextClick = useCallback(() => {
    // Please sync "Thanh toán" to the project
  }, []);

  return (
    <div className="cartdetail">
      <div className="header-7">
        <header className="top-parent">
          <div className="top">
            <div className="top-inner">
              <div className="left-parent">
                <div className="left">
                  <div className="div48">
                    <div className="frame-parent1">
                      <div className="pin-1-wrapper">
                        <img
                          className="pin-1-icon"
                          loading="lazy"
                          alt=""
                          src="/pin-1-1.svg"
                        />
                      </div>
                      <div className="cch-mng-thng">118 Cách Mạng Tháng 8</div>
                      <div className="left-rect" />
                    </div>
                    <div className="frame-parent2">
                      <div className="phone-1-wrapper">
                        <img
                          className="phone-1-icon"
                          loading="lazy"
                          alt=""
                          src="/phone-1-1.svg"
                        />
                      </div>
                      <div className="bn-cn-tr-container">
                        <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                        <span className="span11">+84 1800 900</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rights">
                  <div className="div49">
                    <div className="ting-vit">Tiếng Việt / VNĐ</div>
                    <div className="lang-icon">
                      <img className="icon8" alt="" src="/vector-10.svg" />
                    </div>
                  </div>
                  <div className="help-button">
                    <div className="help-rect" />
                    <div className="help-label">
                      <div className="tr-gip" onClick={onTrGipTextClick}>
                        Trợ giúp
                      </div>
                      <div className="vector-wrapper">
                        <img
                          className="vector-icon"
                          alt=""
                          src="/vector-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="store-button">
                    <div className="store-rect" />
                    <div className="tm-ca-hng">Tìm cửa hàng</div>
                  </div>
                  <div className="div50">
                    <div className="social-rect" />
                    <nav className="social-links">
                      <div className="div51"></div>
                      <div className="div52"></div>
                      <div className="div53"></div>
                      <div className="div54"></div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-separator" />
          </div>
          <div className="content">
            <div className="center">
              <div className="logo-wrapper">
                <div className="logo">
                  <h2 className="ezshop" onClick={onEZSHOPTextClick}>
                    EZSHOP
                  </h2>
                </div>
              </div>
              <div className="search-navigation">
                <div className="search">
                  <div className="search-rect" />
                  <div className="search-input">
                    <div className="categories3">
                      <div className="dropdown-label">
                        <div className="danh-mc1">Danh mục</div>
                      </div>
                      <div className="dropdown-icon-wrapper">
                        <img
                          className="dropdown-icon"
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                      <div className="dropdown-separator" />
                    </div>
                    <div className="tm-kim-wrapper">
                      <div className="tm-kim">Tìm kiếm</div>
                    </div>
                  </div>
                  <div className="search-button">
                    <img className="button-icon" alt="" src="/button-1.svg" />
                  </div>
                </div>
                <div className="right-box">
                  <div className="items6">
                    <div
                      className="action-buttons"
                      onClick={onActionButtonsClick}
                    />
                    <div className="action-labels">
                      <div className="yu-thch-sn-container">
                        <p className="yu-thch">Yêu thích</p>
                        <p className="sn-phm1">Sản phẩm</p>
                      </div>
                    </div>
                    <img
                      className="heart-1-icon"
                      loading="lazy"
                      alt=""
                      src="/heart-1-1.svg"
                    />
                  </div>
                  <div className="account">
                    <div className="account-child" onClick={onRectangleClick} />
                    <div className="ng-nhp-ti-khon-wrapper">
                      <div className="ng-nhp-ti-container">
                        <p className="ng-nhp">Đăng nhập</p>
                        <p className="ti-khon">Tài khoản</p>
                      </div>
                    </div>
                    <img
                      className="profile-1-icon"
                      loading="lazy"
                      alt=""
                      src="/profile-1-1.svg"
                    />
                  </div>
                  <div className="cart">
                    <b className="cart1">Cart</b>
                    <div className="cart-icon">
                      <div className="cart-button">
                        <div className="cart-rect" />
                        <img
                          className="shopping-cart-1-icon"
                          loading="lazy"
                          alt=""
                          src="/shoppingcart-1-1.svg"
                        />
                      </div>
                    </div>
                    <div className="number">
                      <div className="number-child" />
                      <b className="counter">2</b>
                    </div>
                    <div className="cart-total">
                      <div className="thanh-ton">
                        <p className="p">
                          <span>
                            289.000
                            <span className="span12">đ</span>
                          </span>
                        </p>
                        <p className="thanh-ton1">Thanh toán</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="bottom">
          <div className="bottom-separator" />
          <div className="bottom-content">
            <div className="nav-categories">
              <div className="navigation-categories">
                <div className="categories4">
                  <div className="categories-rect" />
                  <div className="group-div">
                    <div className="frame-wrapper">
                      <div className="category-icons-parent">
                        <div className="category-icons" />
                        <div className="category-icons1" />
                        <div className="category-icons2" />
                      </div>
                    </div>
                    <div className="category-name">
                      <div className="danh-mc2">Danh mục</div>
                    </div>
                    <div className="category-icon-wrapper">
                      <img
                        className="category-icon"
                        alt=""
                        src="/vector-13.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="bottom-nav">
                  <div className="nav">
                    <div className="bottom-links">
                      <div className="trang-ch" onClick={onTrangChTextClick}>
                        Trang chủ
                      </div>
                      <div className="link-icons">
                        <img
                          className="nav-icons"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                    </div>
                    <div className="bottom-links1">
                      <div className="sn-phm2" onClick={onSnPhmTextClick}>
                        Sản phẩm
                      </div>
                      <div className="vector-container">
                        <img
                          className="vector-icon1"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                    </div>
                    <div className="bottom-links2">
                      <div className="lin-h" onClick={onLinHTextClick}>
                        Liên hệ
                      </div>
                      <div className="vector-frame">
                        <img
                          className="vector-icon2"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                    </div>
                    <div className="bottom-links3">
                      <div className="bi-vit" onClick={onBiVitTextClick}>
                        Bài viết
                      </div>
                      <div className="vector-wrapper1">
                        <img
                          className="vector-icon3"
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight">
                <div className="right-nav">
                  <div className="u-i-trong">
                    Ưu đãi trong ngày Ưu đãi hấp dẫn Bán chạy nhất Hàng mới về
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <div className="breadcrumb1">
            <div className="trang-ch1" onClick={onTrangChText1Click}>
              Trang chủ
            </div>
            <div className="breadcrumb-items">{`/ `}</div>
            <div className="chnh-sch" onClick={onChnhSchTextClick}>
              Sản phẩm
            </div>
            <div className="div55">{`/ `}</div>
            <div className="chnh-sch-bo">Giỏ hàng</div>
          </div>
          <div className="gi-hng-wrapper">
            <h1 className="gi-hng">Giỏ hàng</h1>
          </div>
        </div>
      </div>
      <section className="main-content">
        <div className="content-wrapper">
          <div className="inner-content">
            <div className="content-block">
              <div className="shipping-banner">
                <div className="mua-thm-312000-container">
                  <span className="mua-thm">{`Mua thêm `}</span>
                  <span>312.000</span>
                  <span>
                    <span className="span13">đ</span>
                  </span>
                  <span className="c-min-ph"> để được MIỄN PHÍ Vận chuyển</span>
                </div>
              </div>
              <img className="bar-icon" loading="lazy" alt="" src="/bar.svg" />
            </div>
          </div>
          <div className="table-wrapper">
            <div className="table-container">
              <div className="table">
                <div className="table-child" />
                <div className="table-header-row">
                  <div className="table-head">
                    <div className="table-head-child" />
                    <div className="sn-phm3">SẢN PHẨM</div>
                    <div className="quantity-actions-header">
                      <div className="price-header">
                        <div className="n-gi">ĐƠN GIÁ</div>
                      </div>
                      <div className="s-lng">SỐ LƯỢNG</div>
                      <div className="tng">TỔNG</div>
                      <div className="hy">HỦY</div>
                    </div>
                  </div>
                </div>
                <div className="table-content">
                  <div className="product-row">
                    <div className="product-image">
                      <img
                        className="image-65-icon"
                        loading="lazy"
                        alt=""
                        src="/image-651@2x.png"
                      />
                    </div>
                    <div className="product-info">
                      <div className="product-details">
                        <div className="o-thun-tay">
                          Áo thun tay ngắn cổ tròn
                        </div>
                        <div className="size-m">
                          <span className="size">{`Size: `}</span>
                          <span className="m">M</span>
                        </div>
                        <div className="mu-sc-xm">Màu sắc: Xám bạc</div>
                      </div>
                    </div>
                    <div className="price-wrapper">
                      <div className="div56">
                        120.000
                        <span className="span14">đ</span>
                      </div>
                    </div>
                    <div className="quantity-controls">
                      <div className="quantity">
                        <div className="quantity-child" />
                        <div className="minus">
                          <div className="minus-child" />
                          <div className="button-icons" />
                        </div>
                        <div className="quantity-value">
                          <div className="quantity-count">3</div>
                        </div>
                        <div className="plus">
                          <div className="plus-child" />
                          <div className="minus-icon-parent">
                            <div className="minus-icon" />
                            <div className="plus-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="price-wrapper1">
                      <div className="div57">
                        360.000
                        <span className="span15">đ</span>
                      </div>
                    </div>
                    <div className="close-button">
                      <img
                        className="close-1-icon"
                        loading="lazy"
                        alt=""
                        src="/close-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-row1">
                  <div className="row-separator" />
                  <div className="product-wrapper">
                    <div className="price-columns">
                      <div className="image-container">
                        <img
                          className="image-66-icon"
                          loading="lazy"
                          alt=""
                          src="/image-651@2x.png"
                        />
                      </div>
                      <div className="info-wrapper">
                        <div className="details-container">
                          <div className="o-thun-tay1">
                            Áo thun tay ngắn cổ tròn
                          </div>
                          <div className="size-m1">
                            <span className="size1">{`Size: `}</span>
                            <span className="m1">M</span>
                          </div>
                          <div className="mu-sc-xm1">Màu sắc: Xám bạc</div>
                        </div>
                      </div>
                      <div className="price-cells">
                        <div className="div58">
                          120.000
                          <span className="span16">đ</span>
                        </div>
                      </div>
                      <div className="quantity-wrapper">
                        <div className="quantity1">
                          <div className="quantity-item" />
                          <div className="minus1">
                            <div className="minus-item" />
                            <div className="control-icons" />
                          </div>
                          <div className="counter1">
                            <div className="quantity-display">3</div>
                          </div>
                          <div className="plus1">
                            <div className="plus-item" />
                            <div className="minus-symbol-parent">
                              <div className="minus-symbol" />
                              <div className="plus-symbol" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="price-cells1">
                        <div className="div59">
                          360.000
                          <span className="span17">đ</span>
                        </div>
                      </div>
                      <div className="close-2-wrapper">
                        <img
                          className="close-2-icon"
                          loading="lazy"
                          alt=""
                          src="/close-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="additional-row">
                  <div className="empty-space">
                    <div className="empty-space-child" />
                  </div>
                  <div className="price-structure-wrapper">
                    <div className="price-structure">
                      <div className="image-67-wrapper">
                        <img
                          className="image-67-icon"
                          loading="lazy"
                          alt=""
                          src="/image-651@2x.png"
                        />
                      </div>
                      <div className="content-area">
                        <div className="o-thun-tay-ngn-c-trn-parent">
                          <div className="o-thun-tay2">
                            Áo thun tay ngắn cổ tròn
                          </div>
                          <div className="size-m2">
                            <span className="size2">{`Size: `}</span>
                            <span className="m2">M</span>
                          </div>
                          <div className="mu-sc-xm2">Màu sắc: Xám bạc</div>
                        </div>
                      </div>
                      <div className="value-elements">
                        <div className="div60">
                          120.000
                          <span className="span18">đ</span>
                        </div>
                      </div>
                      <div className="adjustment-panel">
                        <div className="quantity2">
                          <div className="quantity-inner" />
                          <div className="minus2">
                            <div className="minus-inner" />
                            <div className="icons3" />
                          </div>
                          <div className="number-area">
                            <div className="quantity3">3</div>
                          </div>
                          <div className="plus2">
                            <div className="plus-inner" />
                            <div className="minus-mark-parent">
                              <div className="minus-mark" />
                              <div className="plus-mark" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="value-elements1">
                        <div className="div61">
                          360.000
                          <span className="span19">đ</span>
                        </div>
                      </div>
                      <div className="close-3-wrapper">
                        <img
                          className="close-3-icon"
                          loading="lazy"
                          alt=""
                          src="/close-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar">
                <div className="sidebar-child" />
                <div className="total-title">
                  <h3 className="tng-thanh-ton">Tổng Thanh toán</h3>
                  <div className="breakdown">
                    <div className="tng-n-hng-container">
                      <span>
                        <p className="tng-n-hng">Tổng Đơn hàng</p>
                        <p className="gim-gi">Giảm giá</p>
                        <p className="tng-ph-vn">Tổng phí vận chuyển</p>
                      </span>
                    </div>
                    <div className="div62">
                      <p className="p1">
                        1.080.000
                        <span className="span20">đ</span>
                      </p>
                      <p className="p2">
                        80.000
                        <span className="span21">đ</span>
                      </p>
                      <p className="p3">
                        24.000
                        <span className="span22">đ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="checkout-button-parent">
                  <div className="checkout-button">
                    <div className="checkout-button-child" />
                    <div className="label-container">
                      <div className="payment-info">
                        <div className="tng-thanh-ton1">Tổng thanh toán</div>
                      </div>
                      <div className="div63">
                        1.080.000
                        <span className="span23">đ</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="large-button-radius-66"
                    onClick={onLargeButtonRadius6ContainerClick}
                  >
                    <div className="shop-now1" onClick={onShopNowTextClick}>
                      Thanh toán ngay
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-bottom">
              <div className="coupon">
                <div className="coupon-child" />
                <div className="m-khuyn-mi">Mã khuyến mãi</div>
                <div className="nhp-m">Nhập mã</div>
              </div>
              <div className="large-button-radius-67">
                <div className="quay-v">Quay về</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-background" />
        <div className="top1">
          <div className="footer-contact">
            <div className="contact-block">
              <div className="lin-h-chng">Liên hệ chúng tôi</div>
              <div className="inner2">
                <div className="contact-hours">
                  <div className="phone-icon">
                    <img
                      className="phone-call-1-icon"
                      loading="lazy"
                      alt=""
                      src="/phonecall-1.svg"
                    />
                  </div>
                  <div className="schedule-info">
                    <div className="th-hai-">
                      Thứ Hai - Thứ Sáu: 08h00 - 21h00
                    </div>
                    <div className="separator">+(1) 123 456 7890</div>
                  </div>
                </div>
                <div className="email-block">
                  <div className="email-icon">
                    <img
                      className="email-1-icon"
                      loading="lazy"
                      alt=""
                      src="/email-1.svg"
                    />
                    <div className="bn-cn-gip">Bạn cần giúp đỡ?</div>
                  </div>
                  <div className="email-info">
                    <div className="supportezshopcom">support@ezshop.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="links">
              <div className="ezshop-info">
                <div className="ezshop-title">
                  <div className="v-ezshop">Về EZShop</div>
                </div>
                <div className="theo-di-n-container">
                  <p className="theo-di-n">Theo dõi đơn hàng của bạn</p>
                  <p className="hng-dn-sn">Hướng dẫn sản phẩm</p>
                  <p className="danh-sch-yu">Danh sách yêu thích</p>
                  <p className="chnh-sch-bo1">Chính sách bảo mật</p>
                  <p className="nh-v-ca">Định vị cửa hàng</p>
                </div>
              </div>
              <div className="links-content">
                <div className="h-tr-khch">Hỗ trợ khách hàng</div>
                <div className="lin-h-chng-container">
                  <p className="lin-h-chng1">Liên hệ chúng tôi</p>
                  <p className="trung-tm-tr">Trung tâm trợ giúp</p>
                  <p className="tr-li">{`Trả lại & Trao đổi`}</p>
                  <p className="ti-tr-mua">Tài trợ mua tốt nhất</p>
                  <p className="th-qu-tng">Thẻ quà tặng mua tốt nhất</p>
                </div>
              </div>
              <div className="links-content1">
                <div className="dch-v">Dịch vụ</div>
                <div className="bit-i-am-container">
                  <p className="bit-i-am">Biệt đội đam mê</p>
                  <p className="c-vn-ti">Cố vấn tại nhà</p>
                  <p className="chng-trnh-trao">Chương trình trao đổi</p>
                  <p className="ti-ch">Tái chế đồ điện tử</p>
                  <p className="sc-khe-mua">Sức khỏe mua tốt nhất</p>
                </div>
              </div>
            </div>
          </div>
          <div className="follow">
            <div className="track-block">
              <div className="theo-di">Theo dõi</div>
              <div className="inner3">
                <div className="div64"></div>
                <div className="div65"></div>
                <div className="div66"></div>
                <div className="div67"></div>
              </div>
            </div>
            <div className="payments-block">
              <div className="phng-thc-thanh">Phương thức thanh toán</div>
              <div className="inner4">
                <img className="payment-icons" alt="" src="/1-1.svg" />
                <img className="payment-icons1" alt="" src="/2-1.svg" />
                <img className="payment-icons2" alt="" src="/3-1.svg" />
                <img className="payment-icons3" alt="" src="/4-1.svg" />
                <img className="payment-icons4" alt="" src="/5-1.svg" />
                <img className="payment-icons5" alt="" src="/6-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom1">
          <div className="copyright-background" />
          <div className="copyright-info">
            <div className="copyrights">
              <div className="ezshop-all-rights">
                © 2024 EZShop. All Rights Reserved
              </div>
              <div className="quyn-ring-t">
                Quyền riêng tư · Điều khoản · Sơ đồ trang web
              </div>
            </div>
            <div className="localization">
              <div className="currency">
                <div className="tin-t">Tiền tệ:</div>
                <div className="vn">VNĐ</div>
                <div className="dropdown-icons">
                  <img className="dropdown-icon1" alt="" src="/vector-8.svg" />
                </div>
              </div>
              <div className="language">
                <div className="ngn-ng">Ngôn ngữ:</div>
                <div className="ting-vit1">Tiếng Việt</div>
                <div className="vector-wrapper2">
                  <img className="vector-icon4" alt="" src="/vector-8.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartDetail;
