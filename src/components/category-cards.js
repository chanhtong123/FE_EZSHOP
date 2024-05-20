import { useMemo } from "react";
import "./category-cards.css";

const CategoryCards = ({
  image44,
  samsung,
  propPadding,
  propHeight,
  propWidth,
  propPadding1,
  propMinWidth,
  onCategoryCardsContainer1Click,
}) => {
  const images1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image44IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const samsungStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="category-cards2" onClick={onCategoryCardsContainer1Click}>
      <div className="images30" style={images1Style}>
        <div className="images-child21" />
        <img
          className="image-44-icon"
          alt=""
          src={image44}
          style={image44IconStyle}
        />
      </div>
      <div className="category-cards-child">
        <div className="frame-parent23">
          <div className="samsung-wrapper" style={frameDivStyle}>
            <div className="samsung" style={samsungStyle}>
              {samsung}
            </div>
          </div>
          <div className="sn-phm11">29 sản phẩm</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
