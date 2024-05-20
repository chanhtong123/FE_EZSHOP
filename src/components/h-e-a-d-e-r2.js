import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./h-e-a-d-e-r2.css";

const HEADER2 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/hompage");
  }, [navigate]);

  const onItemsContainerClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  const onAccountContainerClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onCartContainerClick = useCallback(() => {
    // Please sync "Thanh toán" to the project
  }, []);

  const onTrangChTextClick = useCallback(() => {
    navigate("/hompage");
  }, [navigate]);

  const onSnPhmTextClick = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onLinHTextClick = useCallback(() => {
    // Please sync "Liên hệ" to the project
  }, []);

  const onBiVitTextClick = useCallback(() => {
    // Please sync "Bài viết" to the project
  }, []);

  return (
    <div className="header-72">
      <header className="frame-header">
        <div className="top8">
          <div className="top-inner1">
            <div className="left-group">
              <div className="left2">
                <div className="div135">
                  <div className="frame-parent18">
                    <div className="pin-1-frame">
                      <img className="pin-1-icon2" alt="" src="/pin-1-1.svg" />
                    </div>
                    <div className="cch-mng-thng2">118 Cách Mạng Tháng 8</div>
                    <div className="frame-child15" />
                  </div>
                  <div className="phone-block">
                    <div className="phone-1-frame">
                      <img
                        className="phone-1-icon2"
                        alt=""
                        src="/phone-1-1.svg"
                      />
                    </div>
                    <div className="bn-cn-tr-container2">
                      <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                      <span className="span37">+84 1800 900</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rights2">
                <div className="div136">
                  <div className="ting-vit4">Tiếng Việt / VNĐ</div>
                  <div className="vector-wrapper17">
                    <img
                      className="vector-icon23"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                </div>
                <div className="help-block">
                  <div className="help-block-child" />
                  <div className="tr-gip-group">
                    <div className="tr-gip2">Trợ giúp</div>
                    <div className="vector-wrapper18">
                      <img
                        className="vector-icon24"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="store-block">
                  <div className="store-block-child" />
                  <div className="tm-ca-hng2">Tìm cửa hàng</div>
                </div>
                <div className="social-block">
                  <div className="social-block-child" />
                  <nav className="parent2">
                    <div className="div137"></div>
                    <div className="div138"></div>
                    <div className="div139"></div>
                    <div className="div140"></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="top-item" />
        </div>
        <div className="center-header">
          <div className="center2">
            <div className="logo-frame">
              <div className="logo2" onClick={onLogoContainerClick}>
                <h3 className="ezshop2">EZSHOP</h3>
              </div>
            </div>
            <div className="search-block">
              <div className="search2">
                <div className="search-child" />
                <div className="categories-group">
                  <div className="categories8">
                    <div className="danh-mc-container">
                      <div className="danh-mc5">Danh mục</div>
                    </div>
                    <div className="vector-wrapper19">
                      <img
                        className="vector-icon25"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                    <div className="categories-inner" />
                  </div>
                  <div className="tm-kim-container">
                    <div className="tm-kim2">Tìm kiếm</div>
                  </div>
                </div>
                <div className="button-wrapper">
                  <img className="button-icon2" alt="" src="/button-1.svg" />
                </div>
              </div>
              <div className="right-box2">
                <div className="items10" onClick={onItemsContainerClick}>
                  <div className="action-icons" />
                  <div className="action-labels1">
                    <div className="yu-thch-sn-container2">
                      <p className="yu-thch3">Yêu thích</p>
                      <p className="sn-phm6">Sản phẩm</p>
                    </div>
                  </div>
                  <img
                    className="heart-1-icon3"
                    loading="lazy"
                    alt=""
                    src="/heart-1-1.svg"
                  />
                </div>
                <div className="account2" onClick={onAccountContainerClick}>
                  <div className="account-inner" />
                  <div className="ng-nhp-ti-khon-frame">
                    <div className="ng-nhp-ti-container2">
                      <p className="ng-nhp2">Đăng nhập</p>
                      <p className="ti-khon2">Tài khoản</p>
                    </div>
                  </div>
                  <img
                    className="profile-1-icon2"
                    loading="lazy"
                    alt=""
                    src="/profile-1-1.svg"
                  />
                </div>
                <div className="cart5" onClick={onCartContainerClick}>
                  <b className="cart6">Cart</b>
                  <div className="cart-icon1">
                    <div className="shopping-cart">
                      <div className="cart-background" />
                      <img
                        className="shopping-cart-1-icon2"
                        loading="lazy"
                        alt=""
                        src="/shoppingcart-1-1.svg"
                      />
                    </div>
                  </div>
                  <div className="number3">
                    <div className="number-inner" />
                    <b className="item-count1">2</b>
                  </div>
                  <div className="cart-total1">
                    <div className="thanh-ton4">
                      <p className="p12">
                        <span>
                          289.000
                          <span className="span38">đ</span>
                        </span>
                      </p>
                      <p className="thanh-ton5">Thanh toán</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bottom4">
        <div className="footer-top-background" />
        <div className="footer-top-content">
          <div className="footer-left-parent">
            <div className="footer-left">
              <div className="categories9">
                <div className="categories-background" />
                <div className="categories-icon-parent">
                  <div className="categories-icon">
                    <div className="category-icons3">
                      <div className="icon-set" />
                      <div className="icon-set1" />
                      <div className="icon-set2" />
                    </div>
                  </div>
                  <div className="categories-label">
                    <div className="danh-mc6">Danh mục</div>
                  </div>
                  <div className="vector-wrapper20">
                    <img
                      className="vector-icon26"
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="navigation1">
                <div className="nav2">
                  <div className="link-items">
                    <div className="trang-ch4" onClick={onTrangChTextClick}>
                      Trang chủ
                    </div>
                    <div className="vector-wrapper21">
                      <img
                        className="vector-icon27"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-items1">
                    <div className="sn-phm7" onClick={onSnPhmTextClick}>
                      Sản phẩm
                    </div>
                    <div className="vector-wrapper22">
                      <img
                        className="vector-icon28"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-items2">
                    <div className="lin-h2" onClick={onLinHTextClick}>
                      Liên hệ
                    </div>
                    <div className="vector-wrapper23">
                      <img
                        className="vector-icon29"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-items3">
                    <div className="bi-vit2" onClick={onBiVitTextClick}>
                      Bài viết
                    </div>
                    <div className="vector-wrapper24">
                      <img
                        className="vector-icon30"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-nav2">
              <div className="right-nav3">
                <div className="u-i-trong2">
                  Ưu đãi trong ngày Ưu đãi hấp dẫn Bán chạy nhất Hàng mới về
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HEADER2;
