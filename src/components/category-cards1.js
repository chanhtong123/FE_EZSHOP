import { useMemo } from "react";
import "./category-cards1.css";

const CategoryCards1 = ({
  jLiCovxVL1,
  apple,
  propPadding,
  propHeight,
  propPadding1,
  propMinWidth,
  onCategoryCardsContainerClick,
}) => {
  const imagesStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const jLiCovxVL1IconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const categoryNamesStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const appleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="category-cards1" onClick={onCategoryCardsContainerClick}>
      <div className="images29" style={imagesStyle}>
        <div className="images-child20" />
        <img
          className="jlicovxvl-1-icon"
          alt=""
          src={jLiCovxVL1}
          style={jLiCovxVL1IconStyle}
        />
      </div>
      <div className="category-name-container-wrapper">
        <div className="category-name-container">
          <div className="category-names" style={categoryNamesStyle}>
            <div className="apple" style={appleStyle}>
              {apple}
            </div>
          </div>
          <div className="sn-phm10">29 sản phẩm</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards1;
