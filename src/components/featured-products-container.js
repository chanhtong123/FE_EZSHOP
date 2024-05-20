import { useMemo } from "react";
import "./featured-products-container.css";

const FeaturedProductsContainer = ({
  image30,
  greatValueUltraStrongPape,
  rectangleDiv,
  propWidth,
  propFlex,
  onFeaturedProductsContainerClick,
}) => {
  const featuredProductsContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className="featured-products-container"
      onClick={onFeaturedProductsContainerClick}
      style={featuredProductsContainerStyle}
    >
      <div className="featured-card" />
      <div className="images31">
        {!rectangleDiv && <div className="images-child22" />}
        <img className="image-30-icon22" loading="lazy" alt="" src={image30} />
      </div>
      <div className="info-wrapper10">
        <div className="info31">
          <div className="price39">
            <div className="div164">$32.50</div>
            <div className="div165">$45</div>
          </div>
          <div className="brand22">
            <div className="in-t22">Thời trang</div>
          </div>
          <div className="title22">
            <div className="great-value-ultra16">
              {greatValueUltraStrongPape}
            </div>
          </div>
          <div className="review22">
            <div className="stars-wrapper10">
              <div className="stars27">
                <img className="star-1-134" alt="" src="/star-1-1.svg" />
                <img className="star-1-234" alt="" src="/star-1-1.svg" />
                <img className="star-1-334" alt="" src="/star-1-1.svg" />
                <img className="star-1-434" alt="" src="/star-1-1.svg" />
                <img className="star-1-534" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi24">3,014 đánh giá</div>
          </div>
          <div className="price40">
            <div className="div166">
              278.000
              <span className="span44">đ</span>
            </div>
            <div className="wrapper16">
              <div className="div167">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsContainer;
