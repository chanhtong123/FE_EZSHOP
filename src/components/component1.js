import { useMemo } from "react";
import "./component1.css";

const Component1 = ({
  image30,
  greatValueUltraStrongPape,
  propMarginLeft,
  onContainer2Click,
}) => {
  const div5Style = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className="div170" onClick={onContainer2Click} style={div5Style}>
      <div className="child17" />
      <div className="images33">
        <div className="images-child23" />
        <img className="image-30-icon24" alt="" src={image30} />
      </div>
      <div className="info-wrapper11">
        <div className="info33">
          <div className="price41">
            <div className="div171">$32.50</div>
            <div className="div172">$45</div>
          </div>
          <div className="brand24">
            <div className="in-t24">Thời trang</div>
          </div>
          <div className="title24">
            <div className="great-value-ultra17">
              {greatValueUltraStrongPape}
            </div>
          </div>
          <div className="review24">
            <div className="stars-wrapper12">
              <div className="stars29">
                <img className="star-1-135" alt="" src="/star-1-1.svg" />
                <img className="star-1-235" alt="" src="/star-1-1.svg" />
                <img className="star-1-335" alt="" src="/star-1-1.svg" />
                <img className="star-1-435" alt="" src="/star-1-1.svg" />
                <img className="star-1-535" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi26">3,014 đánh giá</div>
          </div>
          <div className="price42">
            <div className="div173">
              278.000
              <span className="span46">đ</span>
            </div>
            <div className="wrapper16">
              <div className="div174">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
