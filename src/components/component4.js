import { useMemo } from "react";
import "./component41.css";

const Component4 = ({ image30, greatValueUltraStrongPape, propBottom }) => {
  const div8Style = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div className="div241" style={div8Style}>
      <div className="child28" />
      <div className="images37">
        <div className="images-child27" />
        <img className="image-30-icon28" alt="" src={image30} />
      </div>
      <div className="info-wrapper17">
        <div className="info44">
          <div className="price48">
            <div className="div242">$32.50</div>
            <div className="div243">$45</div>
          </div>
          <div className="brand28">
            <div className="in-t28">Thời trang</div>
          </div>
          <div className="title29">
            <div className="great-value-ultra20">
              {greatValueUltraStrongPape}
            </div>
          </div>
          <div className="review28">
            <div className="stars-wrapper15">
              <div className="stars33">
                <img className="star-1-139" alt="" src="/star-1-1.svg" />
                <img className="star-1-239" alt="" src="/star-1-1.svg" />
                <img className="star-1-339" alt="" src="/star-1-1.svg" />
                <img className="star-1-439" alt="" src="/star-1-1.svg" />
                <img className="star-1-539" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi30">3,014 đánh giá</div>
          </div>
          <div className="price49">
            <div className="div244">
              278.000
              <span className="span60">đ</span>
            </div>
            <div className="wrapper19">
              <div className="div245">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component4;
