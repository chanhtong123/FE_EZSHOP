import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./login1.css";

const Login1 = () => {
  const navigate = useNavigate();

  const onBnChaCClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className="login1">
      <div className="login-child" />
      <form className="input-fields">
        <div className="login-button">
          <h1 className="ng-nhp6">Đăng nhập</h1>
        </div>
        <div className="input10">
          <div className="hover2">Tài khoản</div>
          <div className="info38">
            <div className="your-name6">Ali Tufan</div>
          </div>
          <div className="name-input-background" />
        </div>
        <div className="input11">
          <div className="input12">Mật khẩu</div>
          <div className="info39">
            <div className="your-name7">Mật khẩu của bạn</div>
          </div>
          <div className="input-child4" />
        </div>
        <div className="remember-forgot-password">
          <div className="remember-password">
            <div className="checkbox-container">
              <div className="checkbox10">
                <div className="checkbox-mark" />
              </div>
            </div>
            <div className="nh-mt-khu">Nhớ mật khẩu</div>
          </div>
          <div className="qun-mt-khu">Quên mật khẩu?</div>
        </div>
        <div className="shop-now-signup">
          <div className="large-button-radius-621">
            <div className="shop-now14">Đăng nhập</div>
          </div>
          <div className="bn-cha-c-ti-khon-ng-k-wrapper">
            <div className="bn-cha-c-container" onClick={onBnChaCClick}>
              <span className="bn-cha-c">{`Bạn chưa có tài khoản? `}</span>
              <span className="ng-k">Đăng ký</span>
            </div>
          </div>
        </div>
      </form>
      <div className="social-login">
        <div className="social-login-separator">
          <div className="rectangle-parent15">
            <div className="frame-child38" />
            <div className="separator-circle" />
            <div className="hoc">hoặc</div>
          </div>
        </div>
        <div className="social-icons">
          <div className="div213">
            <div className="child23" />
            <div className="div214"></div>
          </div>
          <div className="div215">
            <div className="child24" />
            <div className="div216"></div>
          </div>
          <div className="div217">
            <div className="child25" />
            <div className="div218"></div>
          </div>
          <div className="div219">
            <div className="child26" />
            <div className="div220"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;
