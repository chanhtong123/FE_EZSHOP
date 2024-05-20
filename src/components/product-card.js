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
        <div className="images34">
          {!rectangleDiv && <div className="images-child24" />}
          <img className="image-30-icon25" alt="" src="/image-30-10@2x.png" />
        </div>
        <div className="hover-effect4">
          <div className="icons6" style={iconsStyle}>
            <div className="wrapper-group-32">
              <img
                className="wrapper-group-3-inner"
                loading="lazy"
                alt=""
                src="/group-3.svg"
              />
            </div>
            <img
              className="icons-child8"
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <img
              className="icons-child9"
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div
            className="large-button-radius-618"
            onClick={onLargeButtonRadius6ContainerClick}
          >
            <div className="thm-vo-gi4">Thêm vào giỏ hàng</div>
          </div>
        </div>
      </div>
      <div className="brand-title">
        <div className="info34">
          <div className="brand25">
            <div className="in-t25">Thời trang</div>
          </div>
          <div className="product-review">
            <div className="title25">
              <div className="kinlo-hydrating-golden4">
                Áo tập gym thoáng mát Nike thấm hút mồ hôi
              </div>
            </div>
            <div className="review-wrapper">
              <div className="review25">
                <div className="stars-wrapper13">
                  <div className="stars30">
                    <img className="star-1-137" alt="" src="/star-1-1.svg" />
                    <img className="star-1-237" alt="" src="/star-1-1.svg" />
                    <img className="star-1-337" alt="" src="/star-1-1.svg" />
                    <img className="star-1-437" alt="" src="/star-1-1.svg" />
                    <img className="star-1-537" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="nh-gi27">3,014 đánh giá</div>
              </div>
              <div className="price43">
                <div className="div187">
                  278.000
                  <span className="span49">đ</span>
                </div>
                <div className="price-wrapper2">
                  <div className="div188">328.000đ</div>
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
