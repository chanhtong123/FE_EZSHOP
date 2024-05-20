import { useMemo } from "react";
import "./product-card.css";

const ProductCard = ({
  rectangleDiv,
  productInfoTop,
  productInfoLeft,
  groupIconPadding,
  onProductCardContainerClick,
  onLargeButtonRadius6ContainerClick,
}) => {
  const productCardStyle = useMemo(() => {
    return {
      top: productInfoTop,
      left: productInfoLeft,
    };
  }, [productInfoTop, productInfoLeft]);

  const iconsStyle = useMemo(() => {
    return {
      padding: groupIconPadding,
    };
  }, [groupIconPadding]);

  return (
    <div
      className="product-card1"
      onClick={onProductCardContainerClick}
      style={productCardStyle}
    >
      <div className="rect" />
      <div className="product-info3">
        <div className="images32">
          {!rectangleDiv && <div className="images-child22" />}
          <img className="image-30-icon23" alt="" src="/image-30-10@2x.png" />
        </div>
        <div className="hover-effect3">
          <div className="icons5" style={iconsStyle}>
            <div className="wrapper-group-31">
              <img
                className="wrapper-group-3-item"
                loading="lazy"
                alt=""
                src="/group-3.svg"
              />
            </div>
            <img
              className="icons-child6"
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <img
              className="icons-child7"
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div
            className="large-button-radius-618"
            onClick={onLargeButtonRadius6ContainerClick}
          >
            <div className="thm-vo-gi3">Thêm vào giỏ hàng</div>
          </div>
        </div>
      </div>
      <div className="brand-title">
        <div className="info32">
          <div className="brand23">
            <div className="in-t23">Thời trang</div>
          </div>
          <div className="product-review">
            <div className="title23">
              <div className="kinlo-hydrating-golden3">
                Áo tập gym thoáng mát Nike thấm hút mồ hôi
              </div>
            </div>
            <div className="review-wrapper">
              <div className="review23">
                <div className="stars-wrapper11">
                  <div className="stars28">
                    <img className="star-1-134" alt="" src="/star-1-1.svg" />
                    <img className="star-1-234" alt="" src="/star-1-1.svg" />
                    <img className="star-1-334" alt="" src="/star-1-1.svg" />
                    <img className="star-1-434" alt="" src="/star-1-1.svg" />
                    <img className="star-1-534" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="nh-gi25">3,014 đánh giá</div>
              </div>
              <div className="price40">
                <div className="div167">
                  278.000
                  <span className="span45">đ</span>
                </div>
                <div className="price-wrapper2">
                  <div className="div168">328.000đ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
