import { useMemo } from "react";
import "./component1.css";

const Component1 = ({
  image30,
  greatValueUltraStrongPape,
  propMarginLeft,
  onContainer2Click,
}) => {
  const div7Style = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className="div190" onClick={onContainer2Click} style={div7Style}>
      <div className="child21" />
      <div className="images35">
        <div className="images-child25" />
        <img className="image-30-icon26" alt="" src={image30} />
      </div>
      <div className="info-wrapper13">
        <div className="info35">
          <div className="price44">
            <div className="div191">$32.50</div>
            <div className="div192">$45</div>
          </div>
          <div className="brand26">
            <div className="in-t26">Thời trang</div>
          </div>
          <div className="title26">
            <div className="great-value-ultra18">
              {greatValueUltraStrongPape}
            </div>
          </div>
          <div className="review26">
            <div className="stars-wrapper14">
              <div className="stars31">
                <img className="star-1-138" alt="" src="/star-1-1.svg" />
                <img className="star-1-238" alt="" src="/star-1-1.svg" />
                <img className="star-1-338" alt="" src="/star-1-1.svg" />
                <img className="star-1-438" alt="" src="/star-1-1.svg" />
                <img className="star-1-538" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi28">3,014 đánh giá</div>
          </div>
          <div className="price45">
            <div className="div193">
              278.000
              <span className="span50">đ</span>
            </div>
            <div className="wrapper19">
              <div className="div194">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
