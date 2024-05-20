import "./top2.css";

const Top2 = () => {
  return (
    <div className="top16">
      <div className="contact-info1">
        <div className="contact-details">
          <div className="lin-h-chng10">Liên hệ chúng tôi</div>
          <div className="inner19">
            <div className="phone-info">
              <div className="phone-icon1">
                <img
                  className="phone-call-1-icon5"
                  loading="lazy"
                  alt=""
                  src="/phonecall-1.svg"
                />
              </div>
              <div className="hours-info">
                <div className="th-hai-5">Thứ Hai - Thứ Sáu: 08h00 - 21h00</div>
                <div className="hours-space">+(1) 123 456 7890</div>
              </div>
            </div>
            <div className="email-info2">
              <div className="email-icon1">
                <img
                  className="email-1-icon5"
                  loading="lazy"
                  alt=""
                  src="/email-1.svg"
                />
                <div className="bn-cn-gip5">Bạn cần giúp đỡ?</div>
              </div>
              <div className="support-email1">
                <div className="supportezshopcom5">support@ezshop.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="about-link">
            <div className="about-title1">
              <div className="v-ezshop5">Về EZShop</div>
            </div>
            <div className="theo-di-n-container5">
              <p className="theo-di-n5">Theo dõi đơn hàng của bạn</p>
              <p className="hng-dn-sn5">Hướng dẫn sản phẩm</p>
              <p className="danh-sch-yu6">Danh sách yêu thích</p>
              <p className="chnh-sch-bo6">Chính sách bảo mật</p>
              <p className="nh-v-ca5">Định vị cửa hàng</p>
            </div>
          </div>
          <div className="link-columns">
            <div className="h-tr-khch5">Hỗ trợ khách hàng</div>
            <div className="lin-h-chng-container5">
              <p className="lin-h-chng11">Liên hệ chúng tôi</p>
              <p className="trung-tm-tr5">Trung tâm trợ giúp</p>
              <p className="tr-li5">{`Trả lại & Trao đổi`}</p>
              <p className="ti-tr-mua5">Tài trợ mua tốt nhất</p>
              <p className="th-qu-tng5">Thẻ quà tặng mua tốt nhất</p>
            </div>
          </div>
          <div className="link-columns1">
            <div className="dch-v5">Dịch vụ</div>
            <div className="bit-i-am-container5">
              <p className="bit-i-am5">Biệt đội đam mê</p>
              <p className="c-vn-ti5">Cố vấn tại nhà</p>
              <p className="chng-trnh-trao5">Chương trình trao đổi</p>
              <p className="ti-ch5">Tái chế đồ điện tử</p>
              <p className="sc-khe-mua5">Sức khỏe mua tốt nhất</p>
            </div>
          </div>
        </div>
      </div>
      <div className="social-container1">
        <div className="social-info">
          <div className="theo-di5">Theo dõi</div>
          <div className="inner20">
            <div className="div234"></div>
            <div className="div235"></div>
            <div className="div236"></div>
            <div className="div237"></div>
          </div>
        </div>
        <div className="payment-info1">
          <div className="phng-thc-thanh5">Phương thức thanh toán</div>
          <div className="inner21">
            <img className="payment-icon" alt="" src="/1-1.svg" />
            <img className="payment-icon1" alt="" src="/2-1.svg" />
            <img className="payment-icon2" alt="" src="/3-1.svg" />
            <img className="payment-icon3" alt="" src="/4-1.svg" />
            <img className="payment-icon4" alt="" src="/5-1.svg" />
            <img className="payment-icon5" alt="" src="/6-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top2;
