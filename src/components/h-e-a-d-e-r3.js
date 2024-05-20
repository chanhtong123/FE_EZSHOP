import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./h-e-a-d-e-r3.css";

const HEADER3 = () => {
  const navigate = useNavigate();

  const onTrGipTextClick = useCallback(() => {
    // Please sync "Trợ giúp" to the project
  }, []);

  const onItemBackgroundsClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onCartBackgroundClick = useCallback(() => {
    navigate("/gi-hng");
  }, [navigate]);

  const onShoppingCart1IconClick = useCallback(() => {
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
    <div className="header-76">
      <header className="top-parent2">
        <div className="top15">
          <div className="top-inner5">
            <div className="left-parent2">
              <div className="left6">
                <div className="div225">
                  <div className="frame-parent42">
                    <div className="pin-1-wrapper3">
                      <img
                        className="pin-1-icon6"
                        loading="lazy"
                        alt=""
                        src="/pin-1-1.svg"
                      />
                    </div>
                    <div className="cch-mng-thng6">118 Cách Mạng Tháng 8</div>
                    <div className="slogan-background" />
                  </div>
                  <div className="phone-number-container-parent">
                    <div className="phone-number-container">
                      <img
                        className="phone-1-icon6"
                        loading="lazy"
                        alt=""
                        src="/phone-1-1.svg"
                      />
                    </div>
                    <div className="bn-cn-tr-container6">
                      <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                      <span className="span57">+84 1800 900</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rights6">
                <div className="language-currency2">
                  <div className="ting-vit11">Tiếng Việt / VNĐ</div>
                  <div className="flag-icon">
                    <img className="flag-icon1" alt="" src="/vector-10.svg" />
                  </div>
                </div>
                <div className="help1">
                  <div className="help-button2" />
                  <div className="tr-gip-parent1">
                    <div className="tr-gip6" onClick={onTrGipTextClick}>
                      Trợ giúp
                    </div>
                    <div className="vector-wrapper46">
                      <img
                        className="vector-icon55"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="store-locator1">
                  <div className="store-locator-button" />
                  <div className="tm-ca-hng6">Tìm cửa hàng</div>
                </div>
                <div className="social-media1">
                  <div className="social-media-button" />
                  <nav className="social-media-icons1">
                    <div className="div226"></div>
                    <div className="div227"></div>
                    <div className="div228"></div>
                    <div className="div229"></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="background1" />
        </div>
        <div className="center-content">
          <div className="center6">
            <div className="logo-container2">
              <div className="logo6">
                <h2 className="ezshop6">EZSHOP</h2>
              </div>
            </div>
            <div className="search-group">
              <div className="search7">
                <div className="search-bar3" />
                <div className="search-input3">
                  <div className="categories16">
                    <div className="dropdown-content">
                      <div className="danh-mc13">Danh mục</div>
                    </div>
                    <div className="vector-wrapper47">
                      <img
                        className="vector-icon56"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                    <div className="dropdown-background1" />
                  </div>
                  <div className="placeholder">
                    <div className="tm-kim6">Tìm kiếm</div>
                  </div>
                </div>
                <div className="search-button2">
                  <img className="button-icon6" alt="" src="/button-1.svg" />
                </div>
              </div>
              <div className="right-box6">
                <div className="items14">
                  <div
                    className="item-backgrounds"
                    onClick={onItemBackgroundsClick}
                  />
                  <div className="item-labels">
                    <div className="yu-thch-sn-container6">
                      <p className="yu-thch7">Yêu thích</p>
                      <p className="sn-phm16">Sản phẩm</p>
                    </div>
                  </div>
                  <img
                    className="heart-1-icon7"
                    loading="lazy"
                    alt=""
                    src="/heart-1-1.svg"
                  />
                </div>
                <div className="account6">
                  <div className="account-child4" onClick={onRectangleClick} />
                  <div className="ng-nhp-ti-khon-wrapper3">
                    <div className="ng-nhp-ti-container6">
                      <p className="ng-nhp7">Đăng nhập</p>
                      <p className="ti-khon6">Tài khoản</p>
                    </div>
                  </div>
                  <img
                    className="profile-1-icon6"
                    loading="lazy"
                    alt=""
                    src="/profile-1-1.svg"
                  />
                </div>
                <div className="cart13">
                  <b className="cart14">Cart</b>
                  <div className="cart-icon-container1">
                    <div className="cart-item">
                      <div
                        className="cart-background"
                        onClick={onCartBackgroundClick}
                      />
                      <img
                        className="shopping-cart-1-icon6"
                        loading="lazy"
                        alt=""
                        src="/shoppingcart-1-1.svg"
                        onClick={onShoppingCart1IconClick}
                      />
                    </div>
                  </div>
                  <div className="number7">
                    <div className="counter4" />
                    <b className="count">2</b>
                  </div>
                  <div className="checkout1">
                    <div className="thanh-ton12">
                      <p className="p21">
                        <span>
                          289.000
                          <span className="span58">đ</span>
                        </span>
                      </p>
                      <p className="thanh-ton13">Thanh toán</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bottom11">
        <div className="footer-background5" />
        <div className="footer-content1">
          <div className="left-footer-parent">
            <div className="left-footer">
              <div className="categories17">
                <div className="category-background1" />
                <div className="category-items-parent">
                  <div className="category-items">
                    <div className="category-icons9">
                      <div className="icons6" />
                      <div className="icons7" />
                      <div className="icons8" />
                    </div>
                  </div>
                  <div className="category-label-footer">
                    <div className="danh-mc14">Danh mục</div>
                  </div>
                  <div className="vector-wrapper48">
                    <img
                      className="vector-icon57"
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="navigation1">
                <div className="nav6">
                  <div className="link-labels">
                    <div className="trang-ch8">Trang chủ</div>
                    <div className="vector-wrapper49">
                      <img
                        className="vector-icon58"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-labels1">
                    <div className="sn-phm17" onClick={onSnPhmTextClick}>
                      Sản phẩm
                    </div>
                    <div className="vector-wrapper50">
                      <img
                        className="vector-icon59"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-labels2">
                    <div className="lin-h6" onClick={onLinHTextClick}>
                      Liên hệ
                    </div>
                    <div className="vector-wrapper51">
                      <img
                        className="vector-icon60"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-labels3">
                    <div className="bi-vit6" onClick={onBiVitTextClick}>
                      Bài viết
                    </div>
                    <div className="vector-wrapper52">
                      <img
                        className="vector-icon61"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-footer">
              <div className="right-nav7">
                <div className="u-i-trong6">
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

export default HEADER3;
