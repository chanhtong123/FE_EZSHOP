import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./h-e-a-d-e-r.css";

const HEADER = () => {
  const navigate = useNavigate();

  const onTrGipTextClick = useCallback(() => {
    // Please sync "Trợ giúp" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  const onRectangle2Click = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onProfile1IconClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
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
    <div className="header-74">
      <header className="frame-header">
        <div className="top11">
          <div className="top-inner3">
            <div className="left-container">
              <div className="left4">
                <div className="left-placeholder">
                  <div className="left-inner-placeholder">
                    <div className="pin-1-wrapper1">
                      <img
                        className="pin-1-icon4"
                        loading="lazy"
                        alt=""
                        src="/pin-1-1.svg"
                      />
                    </div>
                    <div className="cch-mng-thng4">118 Cách Mạng Tháng 8</div>
                    <div className="left-inner-placeholder-child" />
                  </div>
                  <div className="frame-parent37">
                    <div className="phone-1-wrapper1">
                      <img
                        className="phone-1-icon4"
                        alt=""
                        src="/phone-1-1.svg"
                      />
                    </div>
                    <div className="bn-cn-tr-container4">
                      <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                      <span className="span53">+84 1800 900</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rights4">
                <div className="div188">
                  <div className="ting-vit7">Tiếng Việt / VNĐ</div>
                  <div className="vector-wrapper28">
                    <img
                      className="vector-icon35"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                </div>
                <div className="div189">
                  <div className="child20" />
                  <div className="tr-gip-container">
                    <div className="tr-gip4" onClick={onTrGipTextClick}>
                      Trợ giúp
                    </div>
                    <div className="vector-wrapper29">
                      <img
                        className="vector-icon36"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="div190">
                  <div className="child21" />
                  <div className="tm-ca-hng4">Tìm cửa hàng</div>
                </div>
                <div className="div191">
                  <div className="child22" />
                  <nav className="frame-nav">
                    <div className="div192"></div>
                    <div className="div193"></div>
                    <div className="div194"></div>
                    <div className="div195"></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="top-item" />
        </div>
        <div className="center-frame">
          <div className="center4">
            <div className="logo-wrapper2">
              <div className="logo4">
                <h3 className="ezshop4">EZSHOP</h3>
              </div>
            </div>
            <div className="search-parent">
              <div className="search5">
                <div className="search-item" />
                <div className="categories-container">
                  <div className="categories12">
                    <div className="danh-mc-frame">
                      <div className="danh-mc9">Danh mục</div>
                    </div>
                    <div className="vector-wrapper30">
                      <img
                        className="vector-icon37"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                    <div className="categories-inner" />
                  </div>
                  <div className="tm-kim-frame">
                    <div className="tm-kim4">Tìm kiếm</div>
                  </div>
                </div>
                <div className="button-container">
                  <img className="button-icon4" alt="" src="/button-1.svg" />
                </div>
              </div>
              <div className="right-box4">
                <div className="items12">
                  <div className="items-child" onClick={onRectangleClick} />
                  <div className="yu-thch-sn-phm-wrapper">
                    <div className="yu-thch-sn-container4">
                      <p className="yu-thch5">Yêu thích</p>
                      <p className="sn-phm12">Sản phẩm</p>
                    </div>
                  </div>
                  <img
                    className="heart-1-icon5"
                    loading="lazy"
                    alt=""
                    src="/heart-1-1.svg"
                  />
                </div>
                <div className="account4">
                  <div className="account-child2" onClick={onRectangle2Click} />
                  <div className="ng-nhp-ti-khon-wrapper1">
                    <div className="ng-nhp-ti-container4">
                      <p className="ng-nhp4">Đăng nhập</p>
                      <p className="ti-khon4">Tài khoản</p>
                    </div>
                  </div>
                  <img
                    className="profile-1-icon4"
                    loading="lazy"
                    alt=""
                    src="/profile-1-1.svg"
                    onClick={onProfile1IconClick}
                  />
                </div>
                <div className="cart9">
                  <b className="cart10">Cart</b>
                  <div className="cart-inner">
                    <div className="rectangle-parent13">
                      <div
                        className="frame-child33"
                        onClick={onRectangle3Click}
                      />
                      <img
                        className="shopping-cart-1-icon4"
                        loading="lazy"
                        alt=""
                        src="/shoppingcart-1-1.svg"
                        onClick={onShoppingCart1IconClick}
                      />
                    </div>
                  </div>
                  <div className="number5">
                    <div className="number-child1" />
                    <b className="item-count1">2</b>
                  </div>
                  <div className="thanh-ton-container">
                    <div className="thanh-ton8">
                      <p className="p19">
                        <span>
                          289.000
                          <span className="span54">đ</span>
                        </span>
                      </p>
                      <p className="thanh-ton9">Thanh toán</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bottom7">
        <div className="bottom-item" />
        <div className="bottom-inner2">
          <div className="frame-parent38">
            <div className="categories-parent1">
              <div className="categories13">
                <div className="categories-child1" />
                <div className="frame-parent39">
                  <div className="frame-wrapper10">
                    <div className="category-icons-group">
                      <div className="category-icons6" />
                      <div className="category-icons7" />
                      <div className="category-icons8" />
                    </div>
                  </div>
                  <div className="danh-mc-wrapper1">
                    <div className="danh-mc10">Danh mục</div>
                  </div>
                  <div className="vector-wrapper31">
                    <img
                      className="vector-icon38"
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="nav-container">
                <div className="nav4">
                  <div className="navigation-items">
                    <div className="trang-ch6">Trang chủ</div>
                    <div className="vector-wrapper32">
                      <img
                        className="vector-icon39"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="navigation-items1">
                    <div className="sn-phm13" onClick={onSnPhmTextClick}>
                      Sản phẩm
                    </div>
                    <div className="vector-wrapper33">
                      <img
                        className="vector-icon40"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="navigation-items2">
                    <div className="lin-h4" onClick={onLinHTextClick}>
                      Liên hệ
                    </div>
                    <div className="vector-wrapper34">
                      <img
                        className="vector-icon41"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="navigation-items3">
                    <div className="bi-vit4" onClick={onBiVitTextClick}>
                      Bài viết
                    </div>
                    <div className="vector-wrapper35">
                      <img
                        className="vector-icon42"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-nav-container">
              <div className="right-nav5">
                <div className="u-i-trong4">
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

export default HEADER;
