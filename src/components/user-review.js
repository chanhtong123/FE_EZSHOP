import "./user-review.css";

const UserReview = () => {
  return (
    <div className="user-review">
      <div className="reviewer-details">
        <div className="at3">A.T</div>
        <div className="profile-icon">
          <div className="profile-circle" />
          <img className="icon12" alt="" src="/icon-3.svg" />
        </div>
      </div>
      <div className="review-content1">
        <div className="frame-parent44">
          <div className="star-container-parent">
            <div className="star-container">
              <div className="stars-row">
                <img className="star-1-140" alt="" src="/star-1-1.svg" />
                <img className="star-1-240" alt="" src="/star-1-1.svg" />
                <img className="star-1-340" alt="" src="/star-1-1.svg" />
                <img className="star-1-440" alt="" src="/star-1-1.svg" />
                <img className="star-1-540" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="sn-phm-tuyt">Sản phẩm tuyệt vời</div>
          </div>
          <div className="nh-gi-bi">Đánh giá bởi Ali Tufan - 27.04.2022</div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
