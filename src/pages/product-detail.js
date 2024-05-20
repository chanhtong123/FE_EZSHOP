import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component5 from "../components/component5";
import Component4 from "../components/component4";
import HEADER2 from "../components/h-e-a-d-e-r2";
import UserReview from "../components/user-review";
import AddReviewContainer from "../components/add-review-container";
import FOOTER1 from "../components/f-o-o-t-e-r1";
import "./product-detail.css";

const ProductDetail = () => {
  const navigate = useNavigate();

  const onLargeButtonRadius6ContainerClick = useCallback(() => {
    navigate("/cartdetail");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    navigate("/cartdetail");
  }, [navigate]);

  const onBuyContainerClick = useCallback(() => {
    // Please sync "Thanh toán" to the project
  }, []);

  return (
    <div className="productdetail">
      <div className="inner">
        <div className="large-button-radius-6">
          <div className="shop-now">Xác nhận</div>
        </div>
        <div className="check">
          <div className="save-my-name">
            Save my name, email, and website in this browser for the next time I
            comment.
          </div>
          <div className="checkbox">
            <div className="checkbox-child" />
          </div>
        </div>
        <div className="form">
          <div className="textarea">
            <div className="textarea-child" />
            <div className="info">
              <div className="beautiful-super-large">
                Write your comments here
              </div>
            </div>
            <div className="textarea1">Your review</div>
          </div>
          <div className="input">
            <div className="input-child" />
            <div className="info1">
              <div className="your-name">Ali Tufan</div>
            </div>
            <div className="hover">Họ tên</div>
          </div>
          <div className="input1">
            <div className="input-item" />
            <div className="info2">
              <div className="your-name1">Nhập</div>
            </div>
            <div className="input2">Email</div>
          </div>
        </div>
        <div className="ratnig">
          <div className="stars">
            <img className="star-1-1" alt="" src="/star-1-11.svg" />
            <img className="star-1-2" alt="" src="/star-1-2.svg" />
            <img className="star-1-3" alt="" src="/star-1-3.svg" />
            <img className="star-1-4" alt="" src="/star-1-4.svg" />
            <img className="star-1-5" alt="" src="/star-1-5.svg" />
          </div>
          <div className="your-rating-of">Your rating of this product</div>
        </div>
        <div className="your-email-address">
          Your email address will not be published. Required fields are marked *
        </div>
      </div>
      <div className="add-a-review">Add a Review</div>
      <div className="list">
        <div className="div">
          <div className="btns">
            <div className="report-abuse">Report abuse</div>
            <div className="large-button-radius-61">
              <div className="shop-now1">Helpful</div>
            </div>
          </div>
          <div className="gallery">
            <div className="gallery-child" />
            <div className="gallery-item" />
            <div className="gallery-inner" />
            <div className="rectangle-div" />
          </div>
          <div className="this-is-an-container">
            <p className="this-is-an">
              This is an unusually large advance over previous models,
              especially in raw computing power, but also in fun things like
              screen and headphone support.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="this-amazon-listing">
              This Amazon listing has two different processors, the M1 Pro
              (listed as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll
              call one the Pro, the other the Max. I got the base Pro, but much
              of what I'll say applies to both, and I'll have some comments
              specifically about the Max too. (MBP below = MacBook Pro.)
            </p>
          </div>
          <div className="top">
            <div className="info3">
              <div className="a-high-performance">
                A high performance Mac with a long lasting battery
              </div>
              <div className="reviewed-by-ali">
                Reviewed by Ali Tufan - April 27, 2022
              </div>
              <div className="stars1">
                <img className="star-1-11" alt="" src="/star-1-1.svg" />
                <img className="star-1-21" alt="" src="/star-1-1.svg" />
                <img className="star-1-31" alt="" src="/star-1-1.svg" />
                <img className="star-1-41" alt="" src="/star-1-1.svg" />
                <img className="star-1-51" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="user-img">
              <div className="user-img-child" />
              <div className="at">A.T</div>
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className="div1">
          <div className="btns1">
            <div className="report-abuse1">Report abuse</div>
            <div className="large-button-radius-62">
              <div className="shop-now2">Helpful</div>
            </div>
          </div>
          <div className="gallery1">
            <div className="gallery-child1" />
            <div className="gallery-child2" />
            <div className="gallery-child3" />
            <div className="gallery-child4" />
          </div>
          <div className="this-is-an-container1">
            <p className="this-is-an1">
              This is an unusually large advance over previous models,
              especially in raw computing power, but also in fun things like
              screen and headphone support.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="this-amazon-listing1">
              This Amazon listing has two different processors, the M1 Pro
              (listed as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll
              call one the Pro, the other the Max. I got the base Pro, but much
              of what I'll say applies to both, and I'll have some comments
              specifically about the Max too. (MBP below = MacBook Pro.)
            </p>
          </div>
          <div className="top1">
            <div className="info4">
              <div className="a-high-performance1">
                A high performance Mac with a long lasting battery
              </div>
              <div className="reviewed-by-ali1">
                Reviewed by Ali Tufan - April 27, 2022
              </div>
              <div className="stars2">
                <img className="star-1-12" alt="" src="/star-1-1.svg" />
                <img className="star-1-22" alt="" src="/star-1-1.svg" />
                <img className="star-1-32" alt="" src="/star-1-1.svg" />
                <img className="star-1-42" alt="" src="/star-1-1.svg" />
                <img className="star-1-52" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="user-img1">
              <div className="user-img-item" />
              <div className="at1">A.T</div>
              <img className="icon1" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className="review-for-this">10 Review For This Product</div>
      </div>
      <div className="div2">
        <div className="btns2">
          <div className="report-abuse2">Report abuse</div>
          <div className="large-button-radius-63">
            <div className="shop-now3">Helpful</div>
          </div>
        </div>
        <div className="gallery2">
          <div className="gallery-child5" />
          <div className="gallery-child6" />
          <div className="gallery-child7" />
          <div className="gallery-child8" />
        </div>
        <div className="this-is-an-container2">
          <p className="this-is-an2">
            This is an unusually large advance over previous models, especially
            in raw computing power, but also in fun things like screen and
            headphone support.
          </p>
          <p className="blank-line2">&nbsp;</p>
          <p className="this-amazon-listing2">
            This Amazon listing has two different processors, the M1 Pro (listed
            as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll call one
            the Pro, the other the Max. I got the base Pro, but much of what
            I'll say applies to both, and I'll have some comments specifically
            about the Max too. (MBP below = MacBook Pro.)
          </p>
        </div>
        <div className="top2">
          <div className="info5">
            <div className="a-high-performance2">
              A high performance Mac with a long lasting battery
            </div>
            <div className="reviewed-by-ali2">
              Reviewed by Ali Tufan - April 27, 2022
            </div>
            <div className="stars3">
              <img className="star-1-13" alt="" src="/star-1-1.svg" />
              <img className="star-1-23" alt="" src="/star-1-1.svg" />
              <img className="star-1-33" alt="" src="/star-1-1.svg" />
              <img className="star-1-43" alt="" src="/star-1-1.svg" />
              <img className="star-1-53" alt="" src="/star-1-1.svg" />
            </div>
          </div>
          <div className="user-img2">
            <div className="user-img-inner" />
            <div className="at2">A.T</div>
            <img className="icon2" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <Component5
        image30="/image-30-10@2x.png"
        kINLOHydratingGoldenFacia="Áo thun nam thoáng mát, thích hợp chạy bộ"
        onLargeButtonRadius6ContainerClick={onLargeButtonRadius6ContainerClick}
      />
      <Component4
        image30="/image-30-11@2x.png"
        greatValueUltraStrongPape="Khoác gió chống nắng thời trang Adidas"
      />
      <img className="arrows-1-icon" loading="lazy" alt="" src="/arrows1.svg" />
      <img className="arrows-1-icon1" alt="" src="/arrows1-1.svg" />
      <Component5
        image30="/image-30-2@2x.png"
        kINLOHydratingGoldenFacia="KINLO Hydrating Golden Facial Mist with Sweet Orange and"
        propBottom="542px"
      />
      <Component4
        image30="/image-30-3@2x.png"
        greatValueUltraStrongPape="Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double "
        propBottom="542px"
      />
      <HEADER2 />
      <img className="arrows-1-icon2" alt="" src="/arrows1.svg" />
      <img className="arrows-1-icon3" alt="" src="/arrows1-1.svg" />
      <main className="info-tabs-wrapper">
        <section className="info-tabs">
          <div className="breadcrumb">
            <div className="trang-ch">
              Trang chủ / Thời Trang / Thời Trang Nam / Áo Thun
            </div>
          </div>
          <div className="gallery3">
            <div className="gallery-content">
              <div className="product-gallery">
                <div className="thumbnail">
                  <div className="rectangle-parent">
                    <div className="frame-child" />
                    <img
                      className="image-75-icon"
                      loading="lazy"
                      alt=""
                      src="/image-75@2x.png"
                    />
                  </div>
                  <div className="rectangle-group">
                    <div className="frame-item" />
                    <img
                      className="image-76-icon"
                      alt=""
                      src="/image-76@2x.png"
                    />
                  </div>
                  <div className="rectangle-container">
                    <div className="frame-inner" />
                    <img
                      className="image-65-icon"
                      alt=""
                      src="/image-65@2x.png"
                    />
                  </div>
                </div>
                <div className="full-image">
                  <div className="image-78-wrapper">
                    <img
                      className="image-78-icon"
                      loading="lazy"
                      alt=""
                      src="/image-78@2x.png"
                    />
                  </div>
                  <img
                    className="full-screen-1-1"
                    loading="lazy"
                    alt=""
                    src="/fullscreen-1-1.svg"
                  />
                </div>
                <div className="image-bar">
                  <div className="fixed-bar">
                    <div className="product-info">
                      <div className="nike">Nike</div>
                      <div className="rating">
                        <div className="stars4">
                          <div className="half-star">
                            <div className="half-star-background" />
                            <img
                              className="star-1-14"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-2-wrapper">
                            <img
                              className="star-1-24"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-3-wrapper">
                            <img
                              className="star-1-34"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-4-wrapper">
                            <img
                              className="star-1-44"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-5-wrapper">
                            <img
                              className="star-1-54"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nh-gi">3,014 Đánh giá</div>
                      <div className="review-count">
                        <div className="count-background" />
                      </div>
                      <div className="sn-phm-c">33 sản phẩm có sẵn</div>
                    </div>
                    <h3 className="x-hng-vnxk">{`Xả Hàng VNXK Áo Phông Nam Nike Khô Thoáng Swoosh `}</h3>
                    <div className="bar-background" />
                    <div className="product-details">
                      <div className="price-info">
                        <div className="parent">
                          <div className="div3">
                            250.000
                            <span className="span">đ</span>
                          </div>
                          <div className="price">
                            <div className="div4">
                              <span className="span1">500.000</span>
                              <span className="span2">đ</span>
                            </div>
                          </div>
                        </div>
                        <div className="mu-sc-xm-container">
                          <span className="mu-sc">Màu sắc:</span>
                          <span> Xám</span>
                        </div>
                      </div>
                      <img
                        className="inner-icon"
                        loading="lazy"
                        alt=""
                        src="/inner.svg"
                      />
                    </div>
                    <div className="size-label">
                      <div className="size-m">
                        <span className="size">Size:</span>
                        <span> M</span>
                      </div>
                      <div className="size-options">
                        <div className="size-list">
                          <div className="s">S</div>
                        </div>
                        <div className="size-list1">
                          <div className="m">M</div>
                        </div>
                        <div className="size-list2">
                          <div className="l">L</div>
                        </div>
                        <div className="size-list3">
                          <div className="xl">XL</div>
                        </div>
                      </div>
                    </div>
                    <div className="bar-background1" />
                    <div className="quantity">
                      <div className="quantity1">
                        <div className="quantity-child" />
                        <div className="minus">
                          <div className="minus-child" />
                          <div className="button-icons" />
                        </div>
                        <div className="quantity-display">
                          <div className="quantity-value">3</div>
                        </div>
                        <div className="plus">
                          <div className="plus-child" />
                          <div className="minus-icon-parent">
                            <div className="minus-icon" />
                            <div className="plus-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="cart" onClick={onCartContainerClick}>
                        <div className="shop-now4">Thêm Vào Giỏ hàng</div>
                      </div>
                    </div>
                    <div className="buy" onClick={onBuyContainerClick}>
                      <div className="shop-now5">Mua Ngay</div>
                    </div>
                    <div className="product-actions">
                      <div className="actions-right">
                        <div className="compare-favorite">
                          <div className="heart-1-wrapper">
                            <img
                              className="heart-1-icon"
                              alt=""
                              src="/heart-1-11.svg"
                            />
                          </div>
                          <div className="yu-thch">Yêu Thích</div>
                          <div className="favorite-divider" />
                          <div className="graph-1-wrapper">
                            <img
                              className="graph-1-icon"
                              alt=""
                              src="/graph-1.svg"
                            />
                          </div>
                        </div>
                        <div className="so-snh">So Sánh</div>
                      </div>
                      <div className="actions-left">
                        <div className="action-icons-left" />
                        <div className="question-share-icons">
                          <img
                            className="question-1-icon"
                            alt=""
                            src="/question-1.svg"
                          />
                        </div>
                        <div className="t-cu-hi">Đặt Câu Hỏi</div>
                      </div>
                      <div className="actions-left1">
                        <div className="actions-left-child" />
                        <div className="share-1-wrapper">
                          <img
                            className="share-1-icon"
                            alt=""
                            src="/share-1.svg"
                          />
                        </div>
                        <div className="chia-s">Chia sẻ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zoom-instructions">
                <div className="cun-phng">Cuộn để phóng to hình ảnh</div>
              </div>
              <div className="tng-quan">Tổng Quan</div>
              <div className="cho-d-bn">
                Cho dù bạn mặc nó sau khi tập gym hay chuẩn bị bắt đầu ngày mới,
                chiếc áo phông này đang gọi tên bạn. Được thiết kế cho phong
                cách thoải mái và dễ dàng, thể hiện trọn vẹn niềm tự hào của
                bạn. Kết hợp với mọi món đồ trong tủ quần áo của bạn - cảm giác
                thể thao cổ điển phù hợp với mọi kiểu dáng.
              </div>
            </div>
          </div>
          <div className="view-more-wrapper">
            <div className="view-more">
              <div className="xem-thm">Xem Thêm</div>
              <div className="view-more-icon">
                <img className="vector-icon" alt="" src="/vector-81.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items">
            <div className="tab-content" />
          </div>
          <div className="detail-tabs-container-wrapper">
            <div className="detail-tabs-container">
              <div className="details-content">
                <div className="details-column">
                  <div className="features-and-size">
                    <div className="thng-tin-chi">Thông Tin Chi Tiết</div>
                    <div className="c-im">Đặc điểm</div>
                  </div>
                  <div className="feature-description">
                    <div className="description-container">
                      <div className="feature-images">
                        <div className="images" />
                        <div className="images1" />
                        <div className="images2" />
                        <div className="images3" />
                        <div className="images4" />
                        <div className="images5" />
                      </div>
                    </div>
                    <div className="thit-k-dng-container">
                      <p className="thit-k-dng">
                        Thiết kế dáng rộng có phần vai trễ xuống mang lại vẻ
                        ngoài và cảm giác thoải mái.
                      </p>
                      <p className="cht-liu-cotton">
                        Chất liệu cotton dày dặn có độ rủ cứng giúp outfits của
                        bạn trông bắt mắt và đặc biệt hơn.
                      </p>
                      <p className="logo-thu-pha">
                        Logo thêu phía trước tạo điểm nhấn tinh tế.
                      </p>
                      <p className="kiu-dng-loose">Kiểu dáng loose fit.</p>
                      <p className="sn-phm-c1">Sản phẩm có thể giặt máy.</p>
                      <p className="cht-liu-100">Chất liệu: 100% cotton.</p>
                    </div>
                  </div>
                </div>
                <div className="size-chart">
                  <div className="hng-dn-chn-container">
                    <span className="hng">{`Hướng `}</span>dẫn chọn kích cỡ quần
                    áo phù hợp
                  </div>
                  <div className="size-chart-container">
                    <div className="chart-description">
                      <div className="chart-images">
                        <div className="chart-images1" />
                        <div className="chart-images2" />
                        <div className="chart-images3" />
                        <div className="chart-images4" />
                        <div className="chart-images5" />
                      </div>
                    </div>
                    <div className="o-c-kch-container">
                      <p className="o-c-kch">
                        Để đo được kích cỡ đúng, dùng thước dây đo.
                      </p>
                      <p className="o-quanh-phn">
                        Đo quanh phần hẹp nhất của thắt lưng, giữ thước dây
                        thẳng theo phương ngang.
                      </p>
                      <p className="ng-khp-hai">
                        Đứng khép hai chân và đo phần nở nhất của hông, giữ
                        thước dây thẳng theo phương ngang. 
                      </p>
                      <p className="o-chiu-di">
                        Đo chiều dài từ đỉnh vai cho đến cuối tay áo.
                      </p>
                      <p className="xin-lu">
                        Xin lưu ý số đo này dựa trên kiểu đường may viền trong
                        thông thường.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details-separator">
                <img className="vector-icon1" alt="" src="/vector-9.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items1">
            <div className="tab-items-child" />
          </div>
          <div className="tab-items2">
            <div className="chi-tit-thng-s-k-thut-parent">
              <div className="chi-tit">{`Chi tiết & Thông số kỹ thuật`}</div>
              <div className="vector-wrapper">
                <img className="vector-icon2" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items3">
            <div className="tab-items-item" />
          </div>
          <div className="tab-items4">
            <div className="bao-gm-parent">
              <div className="bao-gm">Bao Gồm</div>
              <div className="vector-container">
                <img className="vector-icon3" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items5">
            <div className="tab-items-inner" />
          </div>
          <div className="tab-items6">
            <div className="v-ngi-bn-parent">
              <div className="v-ngi-bn">Về Người Bán</div>
              <div className="vector-frame">
                <img className="vector-icon4" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items7">
            <div className="tab-items-child1" />
          </div>
          <div className="tab-items8">
            <div className="chnh-sch-mua-hng-parent">
              <div className="chnh-sch-mua">Chính Sách Mua Hàng</div>
              <div className="frame-div">
                <img className="vector-icon5" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items9">
            <div className="tab-items-child2" />
          </div>
          <div className="tab-items10">
            <div className="cu-hi-v-tr-li-parent">
              <div className="cu-hi-v">Câu Hỏi Và Trả Lời</div>
              <div className="vector-wrapper1">
                <img className="vector-icon6" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items11">
            <div className="tab-items-child3" />
          </div>
          <div className="review-content-wrapper">
            <div className="review-content">
              <div className="review-header">
                <div className="nh-gi-sn">Đánh Giá Sản Phẩm</div>
                <div className="review-rating">
                  <div className="rating-number">
                    <div className="review-count1">4.9</div>
                    <div className="stars-container">
                      <div className="rating-stars-parent">
                        <div className="rating-stars">
                          <img
                            className="star-1-15"
                            alt=""
                            src="/star-1-1-9.svg"
                          />
                          <img
                            className="star-1-25"
                            alt=""
                            src="/star-1-2-9.svg"
                          />
                          <img
                            className="star-1-35"
                            alt=""
                            src="/star-1-3-9.svg"
                          />
                          <img
                            className="star-1-45"
                            alt=""
                            src="/star-1-4-9.svg"
                          />
                          <img
                            className="star-1-55"
                            alt=""
                            src="/star-1-5-9.svg"
                          />
                        </div>
                        <div className="nh-gi1">2 đánh giá</div>
                      </div>
                    </div>
                  </div>
                  <div className="bars">
                    <div className="rating-levels">
                      <div className="sao">5 sao</div>
                      <div className="bars1">
                        <div className="bar">
                          <div className="bar-child" />
                          <div className="bars2" />
                        </div>
                      </div>
                      <div className="counts">89%</div>
                    </div>
                    <div className="rating-levels1">
                      <div className="sao1">4 sao</div>
                      <div className="bar-wrapper">
                        <div className="bar1">
                          <div className="bar-item" />
                          <div className="bar-inner" />
                        </div>
                      </div>
                      <div className="div5">4%</div>
                    </div>
                    <div className="rating-levels2">
                      <div className="sao2">3 sao</div>
                      <div className="bar-container">
                        <div className="bar2">
                          <div className="bar-child1" />
                          <div className="bar-child2" />
                        </div>
                      </div>
                      <div className="div6">3%</div>
                    </div>
                    <div className="rating-levels3">
                      <div className="sao3">2 sao</div>
                      <div className="bar-frame">
                        <div className="bar3">
                          <div className="bar-child3" />
                          <div className="bar-child4" />
                        </div>
                      </div>
                      <div className="div7">1%</div>
                    </div>
                    <div className="rating-levels4">
                      <div className="sao4">1 sao</div>
                      <div className="bar-wrapper1">
                        <div className="bar4">
                          <div className="bar-child5" />
                          <div className="bar-child6" />
                        </div>
                      </div>
                      <div className="div8">4%</div>
                    </div>
                  </div>
                </div>
                <div className="large-button-radius-64">
                  <div className="shop-now6">Viết đánh giá</div>
                </div>
              </div>
              <div className="add-review">
                <div className="review-form-title-parent">
                  <div className="review-form-title">
                    <div className="form-title-container">
                      <img
                        className="vector-icon7"
                        alt=""
                        src="/vector-15.svg"
                      />
                    </div>
                    <div className="nh-gi-cho">39 Đánh Giá Cho Sản Phẩm</div>
                  </div>
                  <UserReview />
                  <div className="y-l-mt-container">
                    <p className="y-l-mt">
                      Đây là một bước tiến lớn bất thường so với các mẫu máy
                      trước đó, đặc biệt là về sức mạnh tính toán thô cũng như
                      những điều thú vị như hỗ trợ màn hình và tai nghe.
                    </p>
                    <p className="blank-line3">&nbsp;</p>
                    <p className="danh-sch-amazon">
                      Danh sách Amazon này có hai bộ xử lý khác nhau, M1 Pro
                      (được liệt kê là "kiểu GPU 16 lõi") và M1 Max (GPU 32
                      lõi). Tôi sẽ gọi một người là Pro, người còn lại là Max.
                      Tôi đã mua phiên bản Pro cơ bản, nhưng phần lớn những gì
                      tôi sẽ nói đều áp dụng cho cả hai phiên bản này và tôi
                      cũng sẽ có một số nhận xét cụ thể về phiên bản Max.
                    </p>
                  </div>
                  <AddReviewContainer />
                  <div className="another-review">
                    <UserReview />
                    <div className="y-l-mt-container1">
                      <p className="y-l-mt1">
                        Đây là một bước tiến lớn bất thường so với các mẫu máy
                        trước đó, đặc biệt là về sức mạnh tính toán thô cũng như
                        những điều thú vị như hỗ trợ màn hình và tai nghe.
                      </p>
                      <p className="blank-line4">&nbsp;</p>
                      <p className="danh-sch-amazon1">
                        Danh sách Amazon này có hai bộ xử lý khác nhau, M1 Pro
                        (được liệt kê là "kiểu GPU 16 lõi") và M1 Max (GPU 32
                        lõi). Tôi sẽ gọi một người là Pro, người còn lại là Max.
                        Tôi đã mua phiên bản Pro cơ bản, nhưng phần lớn những gì
                        tôi sẽ nói đều áp dụng cho cả hai phiên bản này và tôi
                        cũng sẽ có một số nhận xét cụ thể về phiên bản Max.
                      </p>
                    </div>
                  </div>
                  <AddReviewContainer propPadding="0px 0px 8.1px" />
                  <div className="forpeople-stu" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent">
            <form className="frame-group">
              <div className="large-button-radius-6-wrapper">
                <div className="large-button-radius-65">
                  <div className="shop-now7">Xem Tất Cả</div>
                </div>
              </div>
              <div className="vit-nh-gi-wrapper">
                <div className="vit-nh-gi">Viết đánh giá</div>
              </div>
              <div className="a-ch-email">
                Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc
                được đánh dấu *
              </div>
              <div className="nh-gi-ca-bn-v-sn-phm-parent">
                <div className="nh-gi-ca">Đánh giá của bạn về sản phẩm</div>
                <div className="frame-container">
                  <div className="star-1-1-parent">
                    <img className="star-1-16" alt="" src="/star-1-11.svg" />
                    <img className="star-1-26" alt="" src="/star-1-2.svg" />
                  </div>
                  <img className="star-1-36" alt="" src="/star-1-3.svg" />
                  <img className="star-1-46" alt="" src="/star-1-4.svg" />
                  <img className="star-1-56" alt="" src="/star-1-5.svg" />
                </div>
              </div>
              <div className="textarea2">
                <div className="textarea3">Bình luận</div>
                <div className="info6">
                  <div className="beautiful-super-large1">
                    Viết bình luận của bạn ở đây
                  </div>
                </div>
                <div className="textarea-item" />
              </div>
              <div className="input-parent">
                <div className="input3">
                  <div className="input-inner" />
                  <div className="hover1">Tên</div>
                  <div className="info-wrapper">
                    <div className="info7">
                      <div className="your-name2">Ali Tufan</div>
                    </div>
                  </div>
                </div>
                <div className="input4">
                  <div className="input-child1" />
                  <div className="input5">Email</div>
                  <div className="info-container">
                    <div className="info8">
                      <div className="your-name3">Email của bạn</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="checkbox-wrapper">
                  <div className="checkbox1">
                    <div className="checkbox-item" />
                  </div>
                </div>
                <div className="lu-tn-email">
                  Lưu tên, email và trang web của tôi trong trình duyệt này cho
                  lần đánh giá tiếp theo.
                </div>
              </div>
              <div className="large-button-radius-66">
                <div className="shop-now8">Hoàn tất</div>
              </div>
            </form>
            <div className="head">
              <h2 className="sn-phm-lin">Sản phẩm liên quan</h2>
              <div className="arrow-bullet-wrapper">
                <img
                  className="arrow-bullet-icon"
                  loading="lazy"
                  alt=""
                  src="/arrowbullet.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="group">
              <div className="div9">
                <div className="child" />
                <div className="images6">
                  <div className="images-child" />
                  <img
                    className="image-30-icon"
                    alt=""
                    src="/image-30-17@2x.png"
                  />
                </div>
                <div className="info-frame">
                  <div className="info9">
                    <div className="price1">
                      <div className="div10">$32.50</div>
                      <div className="div11">$45</div>
                    </div>
                    <div className="brand">
                      <div className="in-t">Thời trang</div>
                    </div>
                    <div className="title">
                      <div className="great-value-ultra">{`Áo hoodie Nike thấm hút mồ hôi cho ngày đông lạnh `}</div>
                    </div>
                    <div className="review">
                      <div className="stars-wrapper">
                        <div className="stars5">
                          <img
                            className="star-1-17"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-27"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-37"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-47"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-57"
                            alt=""
                            src="/star-1-1.svg"
                          />
                        </div>
                      </div>
                      <div className="nh-gi2">3,014 đánh giá</div>
                    </div>
                    <div className="price2">
                      <div className="div12">
                        278.000
                        <span className="span3">đ</span>
                      </div>
                      <div className="wrapper">
                        <div className="div13">328.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div14">
                <div className="item" />
                <div className="images7">
                  <div className="images-item" />
                  <img
                    className="image-30-icon1"
                    alt=""
                    src="/image-30-18@2x.png"
                  />
                </div>
                <div className="info-wrapper1">
                  <div className="info10">
                    <div className="price3">
                      <div className="div15">$32.50</div>
                      <div className="div16">$45</div>
                    </div>
                    <div className="brand1">
                      <div className="in-t1">Thời trang</div>
                    </div>
                    <div className="title1">
                      <div className="great-value-ultra1">
                        Áo mùa đông lạnh giá Nike chần bông ấm áp
                      </div>
                    </div>
                    <div className="review1">
                      <div className="stars-frame">
                        <div className="stars6">
                          <img
                            className="star-1-18"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-28"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-38"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-48"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-58"
                            alt=""
                            src="/star-1-1.svg"
                          />
                        </div>
                      </div>
                      <div className="nh-gi3">3,014 đánh giá</div>
                    </div>
                    <div className="price4">
                      <div className="div17">
                        278.000
                        <span className="span4">đ</span>
                      </div>
                      <div className="container">
                        <div className="div18">328.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div19">
                <div className="child1" />
                <div className="images8">
                  <div className="images-inner" />
                  <img
                    className="image-30-icon2"
                    alt=""
                    src="/image-30-19@2x.png"
                  />
                </div>
                <div className="info-wrapper2">
                  <div className="info11">
                    <div className="price5">
                      <div className="div20">$32.50</div>
                      <div className="div21">$45</div>
                    </div>
                    <div className="brand2">
                      <div className="in-t2">Thời trang</div>
                    </div>
                    <div className="title2">
                      <div className="great-value-ultra2">
                        Quần tập nữ Adidas siêu co giãn chống nước
                      </div>
                    </div>
                    <div className="review2">
                      <div className="stars-wrapper1">
                        <div className="stars7">
                          <img
                            className="star-1-19"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-29"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-39"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-49"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-59"
                            alt=""
                            src="/star-1-1.svg"
                          />
                        </div>
                      </div>
                      <div className="nh-gi4">3,014 đánh giá</div>
                    </div>
                    <div className="price6">
                      <div className="div22">
                        278.000
                        <span className="span5">đ</span>
                      </div>
                      <div className="frame">
                        <div className="div23">328.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="head-parent">
              <div className="head1">
                <h2 className="c-th-bn">Có thể bạn sẽ thích</h2>
                <div className="arrow-bullet-container">
                  <img
                    className="arrow-bullet-icon1"
                    alt=""
                    src="/arrowbullet.svg"
                  />
                </div>
              </div>
              <div className="related-product-item-parent">
                <div className="related-product-item">
                  <div className="product-card" />
                  <div className="images9">
                    <div className="images-child1" />
                    <img
                      className="image-30-icon3"
                      alt=""
                      src="/image-30-7@2x.png"
                    />
                  </div>
                  <div className="product-info1">
                    <div className="info12">
                      <div className="price7">
                        <div className="div24">$32.50</div>
                        <div className="div25">$45</div>
                      </div>
                      <div className="brand3">
                        <div className="in-t3">Thời trang</div>
                      </div>
                      <div className="title3">
                        <div className="great-value-ultra3">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                      </div>
                      <div className="review3">
                        <div className="review-details">
                          <div className="stars8">
                            <img
                              className="star-1-110"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-210"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-310"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-410"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-510"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                        <div className="nh-gi5">3,014 đánh giá</div>
                      </div>
                      <div className="price8">
                        <div className="div26">
                          278.000
                          <span className="span6">đ</span>
                        </div>
                        <div className="inner-price">
                          <div className="div27">328.000đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-product-item1">
                  <div className="related-product-item-child" />
                  <div className="images10">
                    <div className="images-child2" />
                    <img
                      className="image-30-icon4"
                      alt=""
                      src="/image-30-8@2x.png"
                    />
                  </div>
                  <div className="info-wrapper3">
                    <div className="info13">
                      <div className="price9">
                        <div className="div28">$32.50</div>
                        <div className="div29">$45</div>
                      </div>
                      <div className="brand4">
                        <div className="in-t4">Thời trang</div>
                      </div>
                      <div className="title4">
                        <div className="great-value-ultra4">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                      </div>
                      <div className="review4">
                        <div className="stars-wrapper2">
                          <div className="stars9">
                            <img
                              className="star-1-111"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-211"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-311"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-411"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-511"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                        <div className="nh-gi6">3,014 đánh giá</div>
                      </div>
                      <div className="price10">
                        <div className="div30">
                          278.000
                          <span className="span7">đ</span>
                        </div>
                        <div className="wrapper1">
                          <div className="div31">328.000đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-product-item2">
                  <div className="related-product-item-item" />
                  <div className="images11">
                    <div className="images-child3" />
                    <img
                      className="image-30-icon5"
                      alt=""
                      src="/image-30-9@2x.png"
                    />
                  </div>
                  <div className="info-wrapper4">
                    <div className="info14">
                      <div className="price11">
                        <div className="div32">$32.50</div>
                        <div className="div33">$45</div>
                      </div>
                      <div className="brand5">
                        <div className="in-t5">Thời trang</div>
                      </div>
                      <div className="title5">
                        <div className="great-value-ultra5">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                      </div>
                      <div className="review5">
                        <div className="stars-wrapper3">
                          <div className="stars10">
                            <img
                              className="star-1-112"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-212"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-312"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-412"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-512"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                        <div className="nh-gi7">3,014 đánh giá</div>
                      </div>
                      <div className="price12">
                        <div className="div34">
                          278.000
                          <span className="span8">đ</span>
                        </div>
                        <div className="wrapper2">
                          <div className="div35">328.000đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FOOTER1 />
    </div>
  );
};

export default ProductDetail;
