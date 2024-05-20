import { useMemo } from "react";
import "./component4.css";

const Component = ({ image30, propLeft, propTop, onContainer3Click }) => {
  const div6Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="div183" onClick={onContainer3Click} style={div6Style}>
      <div className="child19" />
      <div className="images35">
        <div className="images-child25" />
        <img className="image-30-icon26" alt="" src={image30} />
      </div>
      <div className="info-wrapper13">
        <div className="info35">
          <div className="price45">
            <div className="div184">$32.50</div>
            <div className="div185">$45</div>
          </div>
          <div className="brand26">
            <div className="in-t26">Thời trang</div>
          </div>
          <div className="title26">
            <div className="great-value-ultra19">
              Áo Hoodie Nike dành cho mùa đông lạnh
            </div>
          </div>
          <div className="review26">
            <div className="product-review1">
              <div className="stars31">
                <img className="star-1-137" alt="" src="/star-1-1.svg" />
                <img className="star-1-237" alt="" src="/star-1-1.svg" />
                <img className="star-1-337" alt="" src="/star-1-1.svg" />
                <img className="star-1-437" alt="" src="/star-1-1.svg" />
                <img className="star-1-537" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi28">3,014 đánh giá</div>
          </div>
          <div className="price46">
            <div className="div186">
              278.000
              <span className="span52">đ</span>
            </div>
            <div className="value-container">
              <div className="div187">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
