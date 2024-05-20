import { useMemo } from "react";
import "./component2.css";

const Component2 = ({ greatValueUltraStrongPape, propBottom, propTop }) => {
  const div3Style = useMemo(() => {
    return {
      bottom: propBottom,
      top: propTop,
    };
  }, [propBottom, propTop]);

  return (
    <div className="div150" style={div3Style}>
      <div className="child18" />
      <div className="images27">
        <div className="images-child19" />
        <img
          className="image-30-icon20"
          loading="lazy"
          alt=""
          src="/image-30-11@2x.png"
        />
      </div>
      <div className="info-wrapper9">
        <div className="info29">
          <div className="price36">
            <div className="div151">$32.50</div>
            <div className="div152">$45</div>
          </div>
          <div className="brand20">
            <div className="in-t20">Thời trang</div>
          </div>
          <div className="title20">
            <div className="great-value-ultra15">
              {greatValueUltraStrongPape}
            </div>
          </div>
          <div className="review20">
            <div className="stars-wrapper8">
              <div className="stars25">
                <img className="star-1-132" alt="" src="/star-1-1.svg" />
                <img className="star-1-232" alt="" src="/star-1-1.svg" />
                <img className="star-1-332" alt="" src="/star-1-1.svg" />
                <img className="star-1-432" alt="" src="/star-1-1.svg" />
                <img className="star-1-532" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi22">3,014 đánh giá</div>
          </div>
          <div className="price37">
            <div className="div153">
              278.000
              <span className="span40">đ</span>
            </div>
            <div className="wrapper15">
              <div className="div154">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
