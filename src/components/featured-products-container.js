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
      <div className="images29">
        {!rectangleDiv && <div className="images-child20" />}
        <img className="image-30-icon20" loading="lazy" alt="" src={image30} />
      </div>
      <div className="info-wrapper8">
        <div className="info29">
          <div className="price36">
            <div className="div144">$32.50</div>
            <div className="div145">$45</div>
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
                <img className="star-1-131" alt="" src="/star-1-1.svg" />
                <img className="star-1-231" alt="" src="/star-1-1.svg" />
                <img className="star-1-331" alt="" src="/star-1-1.svg" />
                <img className="star-1-431" alt="" src="/star-1-1.svg" />
                <img className="star-1-531" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="nh-gi22">3,014 đánh giá</div>
          </div>
          <div className="price37">
            <div className="div146">
              278.000
              <span className="span40">đ</span>
            </div>
            <div className="wrapper13">
              <div className="div147">328.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsContainer;
