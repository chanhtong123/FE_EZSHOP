import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./h-e-a-d-e-r2.css";

const HEADER2 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onItemsContainerClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  const onAccountContainerClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    // Please sync "Thanh toán" to the project
  }, []);

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

  return (
    <div className="header-77">
      <header className="top-parent3">
        <div className="top17">
          <div className="top-inner6">
            <div className="left-parent3">
              <div className="left7">
                <div className="div246">
                  <div className="frame-parent43">
                    <div className="pin-1-wrapper4">
                      <img className="pin-1-icon7" alt="" src="/pin-1-1.svg" />
                    </div>
                    <div className="cch-mng-thng7">118 Cách Mạng Tháng 8</div>
                    <div className="frame-child39" />
                  </div>
                  <div className="phone-block">
                    <div className="phone-1-wrapper2">
                      <img
                        className="phone-1-icon7"
                        alt=""
                        src="/phone-1-1.svg"
                      />
                    </div>
                    <div className="bn-cn-tr-container7">
                      <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                      <span className="span61">+84 1800 900</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rights7">
                <div className="div247">
                  <div className="ting-vit13">Tiếng Việt / VNĐ</div>
                  <div className="vector-wrapper54">
                    <img
                      className="vector-icon63"
                      alt=""
                      src="/vector-10.svg"
                    />
                  </div>
                </div>
                <div className="help-block">
                  <div className="help-block-child" />
                  <div className="tr-gip-parent2">
                    <div className="tr-gip7">Trợ giúp</div>
                    <div className="vector-wrapper55">
                      <img
                        className="vector-icon64"
                        alt=""
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="store-block">
                  <div className="store-block-child" />
                  <div className="tm-ca-hng7">Tìm cửa hàng</div>
                </div>
                <div className="social-block">
                  <div className="social-block-child" />
                  <nav className="parent10">
                    <div className="div248"></div>
                    <div className="div249"></div>
                    <div className="div250"></div>
                    <div className="div251"></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="top-child1" />
        </div>
        <div className="center-header">
          <div className="center7">
            <div className="logo-wrapper3">
              <div className="logo7" onClick={onLogoContainerClick}>
                <h3 className="ezshop7">EZSHOP</h3>
              </div>
            </div>
            <div className="search-block">
              <div className="search8">
                <div className="search-inner" />
                <div className="categories-parent2">
                  <div className="categories18">
                    <div className="danh-mc-wrapper3">
                      <div className="danh-mc15">Danh mục</div>
                    </div>
                    <div className="vector-wrapper56">
                      <img
                        className="vector-icon65"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                    <div className="categories-child2" />
                  </div>
                  <div className="tm-kim-wrapper1">
                    <div className="tm-kim7">Tìm kiếm</div>
                  </div>
                </div>
                <div className="button-frame">
                  <img className="button-icon7" alt="" src="/button-1.svg" />
                </div>
              </div>
              <div className="right-box7">
                <div className="items15" onClick={onItemsContainerClick}>
                  <div className="action-icons" />
                  <div className="action-labels1">
                    <div className="yu-thch-sn-container7">
                      <p className="yu-thch8">Yêu thích</p>
                      <p className="sn-phm18">Sản phẩm</p>
                    </div>
                  </div>
                  <img
                    className="heart-1-icon8"
                    loading="lazy"
                    alt=""
                    src="/heart-1-1.svg"
                  />
                </div>
                <div className="account7" onClick={onAccountContainerClick}>
                  <div className="account-child5" />
                  <div className="ng-nhp-ti-khon-wrapper4">
                    <div className="ng-nhp-ti-container7">
                      <p className="ng-nhp9">Đăng nhập</p>
                      <p className="ti-khon7">Tài khoản</p>
                    </div>
                  </div>
                  <img
                    className="profile-1-icon7"
                    loading="lazy"
                    alt=""
                    src="/profile-1-1.svg"
                  />
                </div>
                <div className="cart15" onClick={onCartContainerClick}>
                  <b className="cart16">Cart</b>
                  <div className="cart-icon1">
                    <div className="shopping-cart">
                      <div className="cart-background1" />
                      <img
                        className="shopping-cart-1-icon7"
                        loading="lazy"
                        alt=""
                        src="/shoppingcart-1-1.svg"
                      />
                    </div>
                  </div>
                  <div className="number8">
                    <div className="number-child3" />
                    <b className="item-count2">2</b>
                  </div>
                  <div className="cart-total1">
                    <div className="thanh-ton14">
                      <p className="p22">
                        <span>
                          289.000
                          <span className="span62">đ</span>
                        </span>
                      </p>
                      <p className="thanh-ton15">Thanh toán</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bottom13">
        <div className="footer-top-background" />
        <div className="footer-top-content">
          <div className="footer-left-parent">
            <div className="footer-left">
              <div className="categories19">
                <div className="categories-background" />
                <div className="categories-icon-parent">
                  <div className="categories-icon">
                    <div className="category-icons10">
                      <div className="icon-set" />
                      <div className="icon-set1" />
                      <div className="icon-set2" />
                    </div>
                  </div>
                  <div className="categories-label">
                    <div className="danh-mc16">Danh mục</div>
                  </div>
                  <div className="vector-wrapper57">
                    <img
                      className="vector-icon66"
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="navigation2">
                <div className="nav7">
                  <div className="link-items">
                    <div className="trang-ch9" onClick={onTrangChTextClick}>
                      Trang chủ
                    </div>
                    <div className="vector-wrapper58">
                      <img
                        className="vector-icon67"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-items1">
                    <div className="sn-phm19" onClick={onSnPhmTextClick}>
                      Sản phẩm
                    </div>
                    <div className="vector-wrapper59">
                      <img
                        className="vector-icon68"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-items2">
                    <div className="lin-h7" onClick={onLinHTextClick}>
                      Liên hệ
                    </div>
                    <div className="vector-wrapper60">
                      <img
                        className="vector-icon69"
                        alt=""
                        src="/vector-14.svg"
                      />
                    </div>
                  </div>
                  <div className="link-items3">
                    <div className="bi-vit7" onClick={onBiVitTextClick}>
                      Bài viết
                    </div>
                    <div className="vector-wrapper61">
                      <img
                        className="vector-icon70"
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-nav8">
              <div className="right-nav9">
                <div className="u-i-trong7">
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
