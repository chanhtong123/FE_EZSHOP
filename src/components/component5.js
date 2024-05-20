import { useMemo } from "react";
import "./component5.css";

const Component5 = ({
  image30,
  kINLOHydratingGoldenFacia,
  propBottom,
  onLargeButtonRadius6ContainerClick,
}) => {
  const divStyle = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div className="div127" style={divStyle}>
      <div className="child15" />
      <div className="images-parent">
        <div className="images24">
          <div className="images-child16" />
          <img className="image-30-icon17" alt="" src={image30} />
        </div>
        <div className="hover-effect2">
          <div className="icons4">
            <div className="wrapper-group-3">
              <img
                className="wrapper-group-3-child"
                loading="lazy"
                alt=""
                src="/group-3.svg"
              />
            </div>
            <img className="icons-child4" alt="" src="/group-2.svg" />
            <img className="icons-child5" alt="" src="/group-1.svg" />
          </div>
          <div
            className="large-button-radius-615"
            onClick={onLargeButtonRadius6ContainerClick}
          >
            <div className="thm-vo-gi2">Thêm vào giỏ hàng</div>
          </div>
        </div>
      </div>
      <div className="info-wrapper6">
        <div className="info26">
          <div className="brand17">
            <div className="in-t17">Thời trang</div>
          </div>
          <div className="product-title-block">
            <div className="title17">
              <div className="kinlo-hydrating-golden2">
                {kINLOHydratingGoldenFacia}
              </div>
            </div>
            <div className="review-block">
              <div className="review17">
                <div className="stars-wrapper5">
                  <div className="stars22">
                    <img className="star-1-128" alt="" src="/star-1-1.svg" />
                    <img className="star-1-228" alt="" src="/star-1-1.svg" />
                    <img className="star-1-328" alt="" src="/star-1-1.svg" />
                    <img className="star-1-428" alt="" src="/star-1-1.svg" />
                    <img className="star-1-528" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="nh-gi19">3,014 đánh giá</div>
              </div>
              <div className="price32">
                <div className="div128">
                  278.000
                  <span className="span35">đ</span>
                </div>
                <div className="wrapper12">
                  <div className="div129">328.000đ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component5;
