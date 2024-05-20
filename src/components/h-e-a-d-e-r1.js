import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./h-e-a-d-e-r1.css";

const HEADER1 = () => {
  const navigate = useNavigate();

  const onTrGipTextClick = useCallback(() => {
    // Please sync "Trợ giúp" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  const onRectangle2Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCartRectClick = useCallback(() => {
    navigate("/gi-hng");
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

  return (
    <div className="header-75">
      <header className="top-container1">
        <div className="top13">
          <div className="top-inner4">
            <div className="left-parent1">
              <div className="left5">
                <div className="left-nested-empty">
                  <div className="frame-parent41">
                    <div className="pin-1-wrapper2">
                      <img
                        className="pin-1-icon5"
                        loading="lazy"
                        alt=""
                        src="/pin-1-1.svg"
                      />
                    </div>
                    <div className="cch-mng-thng5">118 Cách Mạng Tháng 8</div>
                    <div className="frame-child34" />
                  </div>
                  <div className="help-container">
                    <div className="phone-container">
                      <img
                        className="phone-1-icon5"
                        loading="lazy"
                        alt=""
                        src="/phone-1-1.svg"
                      />
                    </div>
                    <div className="bn-cn-tr-container5">
                      <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                      <span className="span55">+84 1800 900</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rights5">
                <div className="language-container">
                  <div className="ting-vit9">Tiếng Việt / VNĐ</div>
                  <div className="vector-wrapper37">
                    <img
                      className="vector-icon45"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                </div>
                <div className="help-button-container">
                  <div className="help-button-rect" />
                  <div className="help-label-container">
                    <div className="tr-gip5" onClick={onTrGipTextClick}>
                      Trợ giúp
                    </div>
                    <div className="vector-wrapper38">
                      <img
                        className="vector-icon46"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="store-container">
                  <div className="store-button-rect" />
                  <div className="tm-ca-hng5">Tìm cửa hàng</div>
                </div>
                <div className="social-container">
                  <div className="social-button-rect" />
                  <nav className="parent9">
                    <div className="div209"></div>
                    <div className="div210"></div>
                    <div className="div211"></div>
                    <div className="div212"></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="header-rect" />
        </div>
        <div className="center5">
          <div className="logo-container1">
            <div className="logo5">
              <h2 className="ezshop5">EZSHOP</h2>
            </div>
          </div>
          <div className="search-container1">
            <div className="search6">
              <div className="search-rect2" />
              <div className="dropdown-container">
                <div className="categories14">
                  <div className="danh-mc-wrapper2">
                    <div className="danh-mc11">Danh mục</div>
                  </div>
                  <div className="vector-wrapper39">
                    <img
                      className="vector-icon47"
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                  <div className="category-dropdown-rect" />
                </div>
                <div className="placeholder-container">
                  <div className="tm-kim5">Tìm kiếm</div>
                </div>
              </div>
              <div className="search-button-container">
                <img className="button-icon5" alt="" src="/button-1.svg" />
              </div>
            </div>
            <div className="right-box5">
              <div className="items13">
                <div className="items-item" onClick={onRectangleClick} />
                <div className="user-labels-container">
                  <div className="yu-thch-sn-container5">
                    <p className="yu-thch6">Yêu thích</p>
                    <p className="sn-phm14">Sản phẩm</p>
                  </div>
                </div>
                <img
                  className="heart-1-icon6"
                  loading="lazy"
                  alt=""
                  src="/heart-1-1.svg"
                />
              </div>
              <div className="account5">
                <div className="account-child3" onClick={onRectangle2Click} />
                <div className="ng-nhp-ti-khon-wrapper2">
                  <div className="ng-nhp-ti-container5">
                    <p className="ng-nhp5">Đăng nhập</p>
                    <p className="ti-khon5">Tài khoản</p>
                  </div>
                </div>
                <img
                  className="profile-1-icon5"
                  loading="lazy"
                  alt=""
                  src="/profile-1-1.svg"
                />
              </div>
              <div className="cart11">
                <b className="cart12">Cart</b>
                <div className="cart-icon-container">
                  <div className="nested-cart-container">
                    <div className="cart-rect1" onClick={onCartRectClick} />
                    <img
                      className="shopping-cart-1-icon5"
                      loading="lazy"
                      alt=""
                      src="/shoppingcart-1-1.svg"
                    />
                  </div>
                </div>
                <div className="number6">
                  <div className="number-child2" />
                  <b className="counter3">2</b>
                </div>
                <div className="checkout-container">
                  <div className="thanh-ton10">
                    <p className="p20">
                      <span>
                        289.000
                        <span className="span56">đ</span>
                      </span>
                    </p>
                    <p className="thanh-ton11">Thanh toán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bottom9">
        <div className="bottom-rect" />
        <div className="footer-containers">
          <div className="inner-footer-containers">
            <div className="left-containers">
              <div className="categories15">
                <div className="category-footer-rect" />
                <div className="footer-icons-container-parent">
                  <div className="footer-icons-container">
                    <div className="rectangle-parent14">
                      <div className="frame-child35" />
                      <div className="frame-child36" />
                      <div className="frame-child37" />
                    </div>
                  </div>
                  <div className="footer-label-container">
                    <div className="danh-mc12">Danh mục</div>
                  </div>
                  <div className="vector-wrapper40">
                    <img
                      className="vector-icon48"
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="nav-links">
                <div className="nav5">
                  <div className="trang-ch-group">
                    <div className="trang-ch7">Trang chủ</div>
                    <div className="vector-wrapper41">
                      <img
                        className="vector-icon49"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="sn-phm-group">
                    <div className="sn-phm15" onClick={onSnPhmTextClick}>
                      Sản phẩm
                    </div>
                    <div className="vector-wrapper42">
                      <img
                        className="vector-icon50"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="lin-h-group">
                    <div className="lin-h5" onClick={onLinHTextClick}>
                      Liên hệ
                    </div>
                    <div className="vector-wrapper43">
                      <img
                        className="vector-icon51"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="bi-vit-group">
                    <div className="bi-vit5" onClick={onBiVitTextClick}>
                      Bài viết
                    </div>
                    <div className="vector-wrapper44">
                      <img
                        className="vector-icon52"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="highlight-container">
              <div className="right-nav6">
                <div className="u-i-trong5">
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

export default HEADER1;
