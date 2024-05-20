import { useMemo } from "react";
import "./product-cards.css";

const ProductCards = ({ image30, vyBodyMSt, khngCoGin, propMarginLeft }) => {
  const productCardsStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className="product-cards1" style={productCardsStyle}>
      <div className="product-card-container" />
      <div className="images26">
        <div className="product-image-container" />
        <img className="image-30-icon19" loading="lazy" alt="" src={image30} />
      </div>
      <div className="product-info-container-wrapper">
        <div className="product-info-container">
          <div className="info28">
            <div className="brand-review-container">
              <div className="brand19">
                <div className="in-t19">Thời trang</div>
              </div>
              <div className="title19">
                <div className="ergonomic-concrete-lamp-container1">
                  <p className="vy-body-m">{vyBodyMSt}</p>
                  <p className="khng-co-gin">{khngCoGin}</p>
                </div>
              </div>
            </div>
            <div className="review-price-container">
              <div className="review19">
                <div className="stars-wrapper7">
                  <div className="stars24">
                    <img className="star-1-130" alt="" src="/star-1-1.svg" />
                    <img className="star-1-230" alt="" src="/star-1-1.svg" />
                    <img className="star-1-330" alt="" src="/star-1-1.svg" />
                    <img className="star-1-430" alt="" src="/star-1-1.svg" />
                    <img className="star-1-530" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="nh-gi21">3,014 đánh giá</div>
              </div>
              <div className="price35">
                <div className="div142">
                  278.000
                  <span className="span39">đ</span>
                </div>
                <div className="discount-tag">
                  <div className="div143">328.000đ</div>
                </div>
                <div className="gim-20-container">
                  <div className="gim-201">Giảm 20%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bar6">
            <div className="sold-bar-background" />
            <div className="sold-bar-fill" />
            <div className="bn-561">Đã bán 56</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
