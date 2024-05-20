import FrameComponent from "./frame-component";
import Bottom from "./bottom";
import "./h-e-a-d-e-r.css";

const HEADER = () => {
  return (
    <div className="header-74">
      <div className="top12">
        <div className="top-inner-wrapper">
          <div className="top-inner3">
            <div className="left4">
              <div className="contact-info">
                <img className="pin-1-icon4" alt="" src="/pin-1-1.svg" />
                <div className="cch-mng-thng4">118 Cách Mạng Tháng 8</div>
                <div className="address-background" />
                <div className="bn-cn-tr-container4">
                  <span>{`Bạn cần trợ giúp? Gọi ngay: `}</span>
                  <span className="span48">+84 1800 900</span>
                </div>
                <img className="phone-1-icon4" alt="" src="/phone-1-1.svg" />
              </div>
            </div>
            <div className="rights4">
              <div className="language-currency1">
                <div className="ting-vit8">Tiếng Việt / VNĐ</div>
                <img
                  className="language-dropdown-icon"
                  alt=""
                  src="/vector-10.svg"
                />
              </div>
              <div className="help">
                <div className="help-background1" />
                <div className="help-label1">
                  <div className="tr-gip4">Trợ giúp</div>
                  <img
                    className="help-dropdown-icon"
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
              </div>
              <div className="store">
                <div className="store-background1" />
                <div className="tm-ca-hng4">Tìm cửa hàng</div>
              </div>
              <div className="socials-container">
                <div className="social-background1" />
                <div className="social-links1">
                  <div className="div183"></div>
                  <div className="div184"></div>
                  <div className="div185"></div>
                  <div className="div186"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider1" />
      </div>
      <FrameComponent />
      <Bottom />
    </div>
  );
};

export default HEADER;
