import { useCallback } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const onBadge1IconClick = useCallback(() => {
    // Please sync "Sản phẩm yêu thích" to the project
  }, []);

  return (
    <div className="sidebar1">
      <div className="name">
        <div className="frame-parent40">
          <div className="avatar-wrapper">
            <img
              className="avatar-icon"
              loading="lazy"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
          <div className="name1">
            <div className="phuong-uyennn">Phuong Uyennn</div>
            <div className="uyen2506gmailcom">alitfn58@gmail.com</div>
          </div>
        </div>
        <div className="name-child" />
      </div>
      <div className="inner12">
        <div className="inner-child">
          <div className="growth-1-parent">
            <img
              className="growth-1-icon"
              loading="lazy"
              alt=""
              src="/growth-1.svg"
            />
            <img
              className="checked-box-1-icon"
              loading="lazy"
              alt=""
              src="/checkedbox-1.svg"
            />
            <img
              className="location-1-icon"
              loading="lazy"
              alt=""
              src="/location-1.svg"
            />
            <img
              className="badge-1-icon"
              loading="lazy"
              alt=""
              src="/badge-1.svg"
              onClick={onBadge1IconClick}
            />
            <img
              className="exit-1-icon"
              loading="lazy"
              alt=""
              src="/exit-1.svg"
            />
          </div>
        </div>
        <div className="thng-tin-ti-container">
          <p className="thng-tin-ti2">Thông tin tài khoản</p>
          <p className="t-hng">Đặt hàng</p>
          <p className="a-ch">Địa chỉ</p>
          <p className="danh-sch-yu3">Danh sách yêu thích</p>
          <p className="ng-xut">Đăng xuất</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
