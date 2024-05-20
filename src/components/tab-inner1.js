import Input from "./input";
import "./tab-inner1.css";

const TabInner1 = () => {
  return (
    <form className="tab-inner">
      <Input input="Tên" yourName="Nhập tên" />
      <Input
        input="Họ"
        yourName="Nhập họ"
        inputLeft="573px"
        inputTop="0px"
        inputMinWidth="22px"
        yourNameMinWidth="62px"
        yourNameDisplay="inline-block"
      />
      <Input
        input="Email"
        yourName="Nhập email"
        inputLeft="0px"
        inputTop="104px"
        inputMinWidth="44px"
        yourNameMinWidth="83px"
        yourNameDisplay="inline-block"
      />
      <Input
        input="Số điện thoại"
        yourName="Nhập số điện thoại"
        inputLeft="573px"
        inputTop="104px"
        inputMinWidth="105px"
        yourNameMinWidth="unset"
        yourNameDisplay="unset"
      />
      <div className="btns3">
        <div className="large-button-radius-620">
          <div className="shop-now13">Lưu</div>
        </div>
        <div className="hy-b-frame">
          <div className="hy-b2">Hủy bỏ</div>
        </div>
      </div>
    </form>
  );
};

export default TabInner1;
