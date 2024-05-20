import { useMemo } from "react";
import "./add-review-container.css";

const AddReviewContainer = ({ propPadding }) => {
  const addReviewContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="add-review-container" style={addReviewContainerStyle}>
      <div className="abuse-report-parent">
        <div className="abuse-report">
          <img
            className="abuse-icons"
            loading="lazy"
            alt=""
            src="/rectangle-294@2x.png"
          />
          <div className="large-button-radius-616">
            <div className="shop-now11">Hữu ích</div>
          </div>
        </div>
        <div className="review-form">
          <div className="form-container">
            <img
              className="report-icons"
              loading="lazy"
              alt=""
              src="/rectangle-294@2x.png"
            />
            <img
              className="divider-icon"
              loading="lazy"
              alt=""
              src="/rectangle-294@2x.png"
            />
          </div>
          <div className="bo-co-lm-dng-wrapper">
            <div className="bo-co-lm">Báo cáo lạm dụng</div>
          </div>
        </div>
      </div>
      <img
        className="form-divider-icon"
        loading="lazy"
        alt=""
        src="/rectangle-294@2x.png"
      />
    </div>
  );
};

export default AddReviewContainer;
