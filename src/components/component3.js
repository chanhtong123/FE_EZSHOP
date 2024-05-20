import { useMemo } from "react";
import "./component3.css";

const Component3 = ({
  kINLOHydratingGoldenFacia,
  propBottom,
  propTop,
  onLargeButtonRadius6ContainerClick,
}) => {
  const div2Style = useMemo(() => {
    return {
      bottom: propBottom,
      top: propTop,
    };
  }, [propBottom, propTop]);

  return (
    <div className="div147" style={div2Style}>
      <div className="child17" />
      <div className="images-group">
        <div className="images26">
          <div className="images-child18" />
          <img className="image-30-icon19" alt="" src="/image-30-10@2x.png" />
        </div>
        <div className="hover-effect3">
          <div className="icons5">
            <div className="wrapper-group-31">
              <img className="wrapper-group-3-item" alt="" src="/group-3.svg" />
            </div>
            <img className="icons-child6" alt="" src="/group-2.svg" />
            <img className="icons-child7" alt="" src="/group-1.svg" />
          </div>
          <div
            className="large-button-radius-617"
            onClick={onLargeButtonRadius6ContainerClick}
          >
            <div className="thm-vo-gi3">Thêm vào giỏ hàng</div>
          </div>
        </div>
      </div>
      <div className="info-wrapper8">
        <div className="info28">
          <div className="brand19">
            <div className="in-t19">Thời trang</div>
          </div>
          <div className="title-parent">
            <div className="title19">
              <div className="kinlo-hydrating-golden3">
                {kINLOHydratingGoldenFacia}
              </div>
            </div>
            <div className="review-group">
              <div className="review19">
                <div className="stars-wrapper7">
                  <div className="stars24">
                    <img className="star-1-131" alt="" src="/star-1-1.svg" />
                    <img className="star-1-231" alt="" src="/star-1-1.svg" />
                    <img className="star-1-331" alt="" src="/star-1-1.svg" />
                    <img className="star-1-431" alt="" src="/star-1-1.svg" />
                    <img className="star-1-531" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="nh-gi21">3,014 đánh giá</div>
              </div>
              <div className="price35">
                <div className="div148">
                  278.000
                  <span className="span39">đ</span>
                </div>
                <div className="wrapper14">
                  <div className="div149">328.000đ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
