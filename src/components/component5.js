import { useMemo } from "react";
import "./component5.css";

const Component5 = ({
  image30,
  kINLOHydratingGoldenFacia,
  propBottom,
  onLargeButtonRadius6ContainerClick,
}) => {
  const div7Style = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div className="div238" style={div7Style}>
      <div className="child27" />
      <div className="images-group">
        <div className="images36">
          <div className="images-child26" />
          <img className="image-30-icon27" alt="" src={image30} />
        </div>
        <div className="hover-effect4">
          <div className="icons9">
            <div className="wrapper-group-32">
              <img
                className="wrapper-group-3-inner"
                loading="lazy"
                alt=""
                src="/group-3.svg"
              />
            </div>
            <img className="icons-child8" alt="" src="/group-2.svg" />
            <img className="icons-child9" alt="" src="/group-1.svg" />
          </div>
          <div
            className="large-button-radius-623"
            onClick={onLargeButtonRadius6ContainerClick}
          >
            <div className="thm-vo-gi4">Thêm vào giỏ hàng</div>
          </div>
        </div>
      </div>
      <div className="info-wrapper16">
        <div className="info43">
          <div className="brand27">
            <div className="in-t27">Thời trang</div>
          </div>
          <div className="product-title-block">
            <div className="title28">
              <div className="kinlo-hydrating-golden4">
                {kINLOHydratingGoldenFacia}
              </div>
            </div>
            <div className="review-block">
              <div className="review27">
                <div className="stars-wrapper14">
                  <div className="stars32">
                    <img className="star-1-138" alt="" src="/star-1-1.svg" />
                    <img className="star-1-238" alt="" src="/star-1-1.svg" />
                    <img className="star-1-338" alt="" src="/star-1-1.svg" />
                    <img className="star-1-438" alt="" src="/star-1-1.svg" />
                    <img className="star-1-538" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="nh-gi29">3,014 đánh giá</div>
              </div>
              <div className="price47">
                <div className="div239">
                  278.000
                  <span className="span59">đ</span>
                </div>
                <div className="wrapper18">
                  <div className="div240">328.000đ</div>
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
