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
      <div className="images28">
        <div className="product-image-container" />
        <img className="image-30-icon21" loading="lazy" alt="" src={image30} />
      </div>
      <div className="product-info-container-wrapper">
        <div className="product-info-container">
          <div className="info30">
            <div className="brand-review-container">
              <div className="brand21">
                <div className="in-t21">Thời trang</div>
              </div>
              <div className="title21">
                <div className="ergonomic-concrete-lamp-container1">
                  <p className="vy-body-m">{vyBodyMSt}</p>
                  <p className="khng-co-gin">{khngCoGin}</p>
                </div>
              </div>
            </div>
            <div className="review-price-container">
              <div className="review21">
                <div className="stars-wrapper9">
                  <div className="stars26">
                    <img className="star-1-133" alt="" src="/star-1-1.svg" />
                    <img className="star-1-233" alt="" src="/star-1-1.svg" />
                    <img className="star-1-333" alt="" src="/star-1-1.svg" />
                    <img className="star-1-433" alt="" src="/star-1-1.svg" />
                    <img className="star-1-533" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="nh-gi23">3,014 đánh giá</div>
              </div>
              <div className="price38">
                <div className="div162">
                  278.000
                  <span className="span43">đ</span>
                </div>
                <div className="discount-tag">
                  <div className="div163">328.000đ</div>
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
