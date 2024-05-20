import HEADER from "../components/h-e-a-d-e-r";
import Sidebar from "../components/sidebar";
import TabInner1 from "../components/tab-inner1";
import Input from "../components/input";
import Top1 from "../components/top1";
import Bottom from "../components/bottom";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <main className="header-7-group">
        <HEADER />
        <section className="frame-wrapper8">
          <div className="sidebar-parent">
            <Sidebar />
            <div className="frame-parent13">
              <div className="thng-tin-ti-khon-parent">
                <h1 className="thng-tin-ti">Thông tin tài khoản</h1>
                <div className="thng-tin-ti1">Thông tin tài khoản Mật khẩu</div>
                <div className="frame-child12" />
              </div>
              <div className="tab-inner-wrapper">
                <TabInner1 />
              </div>
              <div className="frame-parent14">
                <form className="input-parent">
                  <Input input="Mật khẩu gần đây" />
                  <Input
                    input="Mật khẩu mới"
                    propDisplay="inline-block"
                    propMinWidth="106px"
                  />
                  <Input
                    input="Xác nhận mật khẩu mới"
                    propDisplay="unset"
                    propMinWidth="unset"
                  />
                  <div className="frame-parent15">
                    <div className="frame-parent16">
                      <div className="large-button-radius-6-parent">
                        <div className="large-button-radius-68">
                          <div className="shop-now2">Lưu</div>
                        </div>
                        <div className="hy-b-wrapper">
                          <div className="hy-b">Hủy bỏ</div>
                        </div>
                      </div>
                      <div className="sms-parent">
                        <div className="sms">SMS</div>
                        <div className="m-c-gi">
                          Mã được gửi đến điện thoại di động của bạn qua phương
                          thức SMS
                        </div>
                      </div>
                    </div>
                    <div className="switch-wrapper">
                      <div className="switch">
                        <div className="switch-child" />
                        <div className="switch-item" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="rectangle-parent1">
                  <div className="frame-child13" />
                  <div className="frame-parent17">
                    <div className="email-parent">
                      <div className="email">Email</div>
                      <div className="m-xc-thc">
                        Mã xác thực được gửi đến email của bạn
                      </div>
                    </div>
                    <div className="switch1">
                      <div className="switch-inner" />
                      <div className="switch-child1" />
                    </div>
                  </div>
                </div>
                <div className="rectangle-parent2">
                  <div className="frame-child14" />
                  <div className="frame-parent18">
                    <div className="in-thoi-parent">
                      <div className="in-thoi">Điện thoại</div>
                      <div className="nhn-vin-ezshop">{`Nhân viên EZShop sẽ gọi điện thoại tới di động của bạn `}</div>
                    </div>
                    <div className="switch2">
                      <div className="switch-child2" />
                      <div className="switch-child3" />
                    </div>
                  </div>
                </div>
                <div className="rectangle-parent3">
                  <div className="frame-child15" />
                  <div className="large-button-radius-6-group">
                    <div className="large-button-radius-69">
                      <div className="shop-now3">Lưu</div>
                    </div>
                    <div className="hy-b-container">
                      <div className="hy-b1">Hủy bỏ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer2">
        <div className="footer-child" />
        <Top1 />
        <Bottom />
      </footer>
    </div>
  );
};

export default Profile;
