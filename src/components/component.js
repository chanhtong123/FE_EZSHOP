import { useMemo } from "react";
import "./component.css";

const Component = ({ image30, propLeft, propTop, onContainer3Click }) => {
  const div8Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="div203" onClick={onContainer3Click} style={div8Style}>
      <div className="child23" />
      <div className="images37">
        <div className="images-child27" />
        <img className="image-30-icon28" alt="" src={image30} />
      </div>
      <div className="info-wrapper15">
        <div className="info37">
          <div className="price48">
            <div className="div204">$32.50</div>
            <div className="div205">$45</div>
          </div>
          <div className="brand28">
            <div className="in-t28">Thời trang</div>
          </div>
          <div className="title28">
            <div className="great-value-ultra20">
              Áo Hoodie Nike dành cho mùa đông lạnh
            </div>
          </div>
          <div className="review28">
            <div className="product-review1">
              <div className="stars33">
                <img className="star-1-140" alt="" src="/star-1-1.svg" />
                <img className="star-1-240" alt="" src="/star-1-1.svg" />
                <img className="star-1-340" alt="" src="/star-1-1.svg" />
                <img className="star-1-440" alt="" src="/star-1-1.svg" />
                <img className="star-1-540" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi30">3,014 đánh giá</div>
          </div>
          <div className="price49">
            <div className="div206">
              278.000
              <span className="span56">đ</span>
            </div>
            <div className="value-container">
              <div className="div207">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
