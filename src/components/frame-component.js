import { useCallback } from "react";
import Input1 from "./input1";
import { useNavigate } from "react-router-dom";
import "./frame-component.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onLargeButtonRadius6ContainerClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onShopNowTextClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  const onBnCClick = useCallback(() => {
    navigate("/ng-nhp");
  }, [navigate]);

  return (
    <div className="input-container">
      <div className="input-container-child" />
      <form className="input-fields1">
        <div className="input15">
          <div className="hover3">Tên</div>
          <div className="info41">
            <div className="your-name9">Ali Tufan</div>
          </div>
          <div className="name-input-info" />
        </div>
        <div className="input16">
          <div className="input17">Tài khoản</div>
          <div className="info42">
            <div className="your-name10">alitfn</div>
          </div>
          <div className="input-child6" />
        </div>
        <Input1 input="Email" yourName="creativelayers088@gmail.com" />
        <Input1
          input="Mật khẩu"
          yourName="******************"
          propMinWidth="75px"
          propDisplay="inline-block"
          propMinWidth1="126px"
        />
        <div
          className="large-button-radius-622"
          onClick={onLargeButtonRadius6ContainerClick}
        >
          <div className="shop-now15" onClick={onShopNowTextClick}>
            Tạo tài khoản
          </div>
        </div>
        <div className="login-link">
          <div className="bn-c-container" onClick={onBnCClick}>
            <span className="bn-c">{`Bạn đã có tài khoản? `}</span>
            <span className="ng-nhp8">Đăng nhập</span>
          </div>
        </div>
      </form>
      <div className="separator-container-parent">
        <div className="separator-container">
          <div className="separator1">
            <div className="separator-child" />
            <div className="searchsvgrepocom" />
            <div className="hoc1">hoặc</div>
          </div>
        </div>
        <div className="social-signup">
          <div className="majesticonsdoorexit">
            <div className="majesticonsdoorexit-child" />
            <div className="div230"></div>
          </div>
          <div className="social-icons1">
            <div className="social-icons-child" />
            <div className="div231"></div>
          </div>
          <div className="social-icons2">
            <div className="social-icons-item" />
            <div className="div232"></div>
          </div>
          <div className="title27">
            <div className="title-child" />
            <div className="div233"></div>
          </div>
        </div>
      </div>
      <h1 className="to-ti-khon">Tạo tài khoản</h1>
    </div>
  );
};

export default FrameComponent;
