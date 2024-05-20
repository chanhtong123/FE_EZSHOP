import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./frame-component1";
import Component1 from "./component1";
import "./frame-component.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="frame-parent27">
      <div className="frame-parent28">
        <div className="lc-theo-thng-hiu-wrapper">
          <div className="lc-theo-thng">Lọc theo thương hiệu</div>
        </div>
        <div className="search5">
          <div className="search-item" />
          <div className="tm-thng-hiu">Tìm thương hiệu</div>
        </div>
        <FrameComponent1
          apple="Apple"
          asus="Asus"
          acer="Acer"
          dell="Dell"
          lenovo="Lenovo"
        />
        <div className="rectangle-parent4">
          <div className="frame-child16" />
          <div className="gi-parent">
            <div className="gi">Giá</div>
            <div className="rectangle-wrapper1">
              <div className="frame-child17" />
            </div>
          </div>
        </div>
        <div className="frame-parent29">
          <div className="frame-parent30">
            <div className="thp-parent">
              <div className="thp">Thấp</div>
              <div className="cao">Cao</div>
            </div>
            <div className="frame-parent31">
              <div className="rectangle-parent5">
                <div className="frame-child18" />
                <div className="div195">
                  50.000
                  <span className="span51">đ</span>
                </div>
              </div>
              <div className="rectangle-parent6">
                <div className="frame-child19" />
                <div className="div196">
                  750.000
                  <span className="span52">đ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse-parent">
            <div className="frame-child20" />
            <div className="frame-child21" />
          </div>
          <div className="div197">
            50.000
            <span className="span53">đ</span> - 750.000
            <span className="span54">đ</span>
          </div>
        </div>
        <div className="rectangle-parent7">
          <div className="frame-child22" />
          <div className="cpu-manufacturer-parent">
            <div className="cpu-manufacturer">CPU Manufacturer</div>
            <div className="rectangle-wrapper2">
              <div className="frame-child23" />
            </div>
          </div>
        </div>
        <FrameComponent1
          apple="Adidas"
          asus="Nike"
          acer="Dior"
          dell="Channel"
          lenovo="Gucci"
          propWidth="86px"
          propAlignSelf="stretch"
        />
        <div className="rectangle-parent8">
          <div className="frame-child24" />
          <div className="kch-thc-parent">
            <div className="kch-thc">Kích thước</div>
            <div className="rectangle-wrapper3">
              <div className="frame-child25" />
            </div>
          </div>
        </div>
        <FrameComponent1
          apple="S"
          asus="M"
          acer="L"
          dell="XL"
          lenovo="XXL"
          propWidth="unset"
          propAlignSelf="unset"
        />
        <div className="rectangle-parent9">
          <div className="frame-child26" />
          <div className="mu-sc-parent">
            <div className="mu-sc1">Màu sắc</div>
            <div className="rectangle-wrapper4">
              <div className="frame-child27" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-child28" />
      <div className="frame-parent32">
        <div className="page-banner-wrapper">
          <div className="page-banner">
            <div className="page-banner-child" />
            <img
              className="page-banner-item"
              loading="lazy"
              alt=""
              src="/group-18@2x.png"
            />
            <div className="gim-gi-500k-cho-thi-trang-parent">
              <h1 className="gim-gi-500k">GIẢM GIÁ 500K CHO THỜI TRANG Đôi</h1>
              <div className="tt-c-cc">
                Tất cả các loại sản phẩm ở một nơi. Bắt đầu từ $1. Nhận tiền
                hoàn lại và ưu đãi
              </div>
            </div>
            <div className="large-button-radius-619">
              <div className="khm-ph-ngay1">Khám phá ngay</div>
            </div>
          </div>
        </div>
        <div className="sn-phm-bn-chy-parent">
          <h1 className="sn-phm-bn">Sản phẩm bán chạy</h1>
          <div className="frame-parent33">
            <div className="parent4">
              <div className="div198" onClick={onContainer2Click}>
                <div className="child22" />
                <div className="images36">
                  <div className="images-child26" />
                  <img
                    className="image-30-icon27"
                    alt=""
                    src="/image-30-17@2x.png"
                  />
                </div>
                <div className="info-wrapper14">
                  <div className="info36">
                    <div className="price46">
                      <div className="div199">$32.50</div>
                      <div className="div200">$45</div>
                    </div>
                    <div className="brand27">
                      <div className="in-t27">Thời trang</div>
                    </div>
                    <div className="title27">
                      <div className="great-value-ultra19">
                        Áo Hoodie Nike dành cho mùa đông lạnh
                      </div>
                    </div>
                    <div className="review27">
                      <div className="stars-wrapper15">
                        <div className="stars32">
                          <img
                            className="star-1-139"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-239"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-339"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-439"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-539"
                            alt=""
                            src="/star-1-1.svg"
                          />
                        </div>
                      </div>
                      <div className="nh-gi29">3,014 đánh giá</div>
                    </div>
                    <div className="price47">
                      <div className="div201">
                        278.000
                        <span className="span55">đ</span>
                      </div>
                      <div className="wrapper20">
                        <div className="div202">328.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="tt-c-sn">Tất cả sản phẩm</h1>
            </div>
            <div className="parent5">
              <Component1
                image30="/image-30-18@2x.png"
                greatValueUltraStrongPape="Áo nỉ chần bông màu xám có dây Nike"
                onContainer2Click={onContainerClick}
              />
              <Component1
                image30="/image-30-11@2x.png"
                greatValueUltraStrongPape="Khoác gió chống nắng thời trang Adidas"
                propMarginLeft="-1px"
                onContainer2Click={onContainer1Click}
              />
            </div>
          </div>
        </div>
        <div className="frame-child29" />
      </div>
    </div>
  );
};

export default FrameComponent;
