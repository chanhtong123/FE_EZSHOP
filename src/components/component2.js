import { useMemo } from "react";
import "./component2.css";

const Component2 = ({ greatValueUltraStrongPape, propBottom, propTop }) => {
  const div1Style = useMemo(() => {
    return {
      bottom: propBottom,
      top: propTop,
    };
  }, [propBottom, propTop]);

  return (
    <div className="div130" style={div1Style}>
      <div className="child14" />
      <div className="images25">
        <div className="images-child17" />
        <img
          className="image-30-icon18"
          loading="lazy"
          alt=""
          src="/image-30-11@2x.png"
        />
      </div>
      <div className="info-wrapper7">
        <div className="info27">
          <div className="price33">
            <div className="div131">$32.50</div>
            <div className="div132">$45</div>
          </div>
          <div className="brand18">
            <div className="in-t18">Thời trang</div>
          </div>
          <div className="title18">
            <div className="great-value-ultra14">
              {greatValueUltraStrongPape}
            </div>
          </div>
          <div className="review18">
            <div className="stars-wrapper6">
              <div className="stars23">
                <img className="star-1-129" alt="" src="/star-1-1.svg" />
                <img className="star-1-229" alt="" src="/star-1-1.svg" />
                <img className="star-1-329" alt="" src="/star-1-1.svg" />
                <img className="star-1-429" alt="" src="/star-1-1.svg" />
                <img className="star-1-529" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi20">3,014 đánh giá</div>
          </div>
          <div className="price34">
            <div className="div133">
              278.000
              <span className="span36">đ</span>
            </div>
            <div className="wrapper12">
              <div className="div134">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
