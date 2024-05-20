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
    navigate("/gi-hng");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    navigate("/gi-hng");
  }, [navigate]);

  const onBuyContainerClick = useCallback(() => {
    // Please sync "Thanh toán" to the project
  }, []);

  return (
    <div className="productdetail">
      <div className="inner8">
        <div className="large-button-radius-610">
          <div className="shop-now4">Xác nhận</div>
        </div>
        <div className="check">
          <div className="save-my-name">
            Save my name, email, and website in this browser for the next time I
            comment.
          </div>
          <div className="checkbox3">
            <div className="checkbox-child1" />
          </div>
        </div>
        <div className="form">
          <div className="textarea">
            <div className="textarea-child" />
            <div className="info11">
              <div className="beautiful-super-large">
                Write your comments here
              </div>
            </div>
            <div className="textarea1">Your review</div>
          </div>
          <div className="input">
            <div className="input-child" />
            <div className="info12">
              <div className="your-name">Ali Tufan</div>
            </div>
            <div className="hover">Họ tên</div>
          </div>
          <div className="input1">
            <div className="input-item" />
            <div className="info13">
              <div className="your-name1">Nhập</div>
            </div>
            <div className="input2">Email</div>
          </div>
        </div>
        <div className="ratnig">
          <div className="stars11">
            <img className="star-1-115" alt="" src="/star-1-11.svg" />
            <img className="star-1-215" alt="" src="/star-1-2.svg" />
            <img className="star-1-315" alt="" src="/star-1-3.svg" />
            <img className="star-1-415" alt="" src="/star-1-4.svg" />
            <img className="star-1-515" alt="" src="/star-1-5.svg" />
          </div>
          <div className="your-rating-of">Your rating of this product</div>
        </div>
        <div className="your-email-address">
          Your email address will not be published. Required fields are marked *
        </div>
      </div>
      <div className="add-a-review">Add a Review</div>
      <div className="list">
        <div className="div91">
          <div className="btns">
            <div className="report-abuse">Report abuse</div>
            <div className="large-button-radius-611">
              <div className="shop-now5">Helpful</div>
            </div>
          </div>
          <div className="gallery">
            <div className="gallery-child" />
            <div className="gallery-item" />
            <div className="gallery-inner" />
            <div className="gallery-child1" />
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
          <div className="top5">
            <div className="info14">
              <div className="a-high-performance">
                A high performance Mac with a long lasting battery
              </div>
              <div className="reviewed-by-ali">
                Reviewed by Ali Tufan - April 27, 2022
              </div>
              <div className="stars12">
                <img className="star-1-116" alt="" src="/star-1-1.svg" />
                <img className="star-1-216" alt="" src="/star-1-1.svg" />
                <img className="star-1-316" alt="" src="/star-1-1.svg" />
                <img className="star-1-416" alt="" src="/star-1-1.svg" />
                <img className="star-1-516" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="user-img">
              <div className="user-img-child" />
              <div className="at">A.T</div>
              <img className="icon9" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className="div92">
          <div className="btns1">
            <div className="report-abuse1">Report abuse</div>
            <div className="large-button-radius-612">
              <div className="shop-now6">Helpful</div>
            </div>
          </div>
          <div className="gallery1">
            <div className="gallery-child2" />
            <div className="gallery-child3" />
            <div className="gallery-child4" />
            <div className="gallery-child5" />
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
          <div className="top6">
            <div className="info15">
              <div className="a-high-performance1">
                A high performance Mac with a long lasting battery
              </div>
              <div className="reviewed-by-ali1">
                Reviewed by Ali Tufan - April 27, 2022
              </div>
              <div className="stars13">
                <img className="star-1-117" alt="" src="/star-1-1.svg" />
                <img className="star-1-217" alt="" src="/star-1-1.svg" />
                <img className="star-1-317" alt="" src="/star-1-1.svg" />
                <img className="star-1-417" alt="" src="/star-1-1.svg" />
                <img className="star-1-517" alt="" src="/star-1-1.svg" />
              </div>
            </div>
            <div className="user-img1">
              <div className="user-img-item" />
              <div className="at1">A.T</div>
              <img className="icon10" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
        <div className="review-for-this">10 Review For This Product</div>
      </div>
      <div className="div93">
        <div className="btns2">
          <div className="report-abuse2">Report abuse</div>
          <div className="large-button-radius-613">
            <div className="shop-now7">Helpful</div>
          </div>
        </div>
        <div className="gallery2">
          <div className="gallery-child6" />
          <div className="gallery-child7" />
          <div className="gallery-child8" />
          <div className="gallery-child9" />
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
        <div className="top7">
          <div className="info16">
            <div className="a-high-performance2">
              A high performance Mac with a long lasting battery
            </div>
            <div className="reviewed-by-ali2">
              Reviewed by Ali Tufan - April 27, 2022
            </div>
            <div className="stars14">
              <img className="star-1-118" alt="" src="/star-1-1.svg" />
              <img className="star-1-218" alt="" src="/star-1-1.svg" />
              <img className="star-1-318" alt="" src="/star-1-1.svg" />
              <img className="star-1-418" alt="" src="/star-1-1.svg" />
              <img className="star-1-518" alt="" src="/star-1-1.svg" />
            </div>
          </div>
          <div className="user-img2">
            <div className="user-img-inner" />
            <div className="at2">A.T</div>
            <img className="icon11" alt="" src="/icon.svg" />
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
      <img
        className="arrows-1-icon12"
        loading="lazy"
        alt=""
        src="/arrows1.svg"
      />
      <img className="arrows-1-icon13" alt="" src="/arrows1-1.svg" />
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
      <img className="arrows-1-icon14" alt="" src="/arrows1.svg" />
      <img className="arrows-1-icon15" alt="" src="/arrows1-1.svg" />
      <main className="info-tabs-wrapper">
        <section className="info-tabs">
          <div className="breadcrumb2">
            <div className="trang-ch3">
              Trang chủ / Thời Trang / Thời Trang Nam / Áo Thun
            </div>
          </div>
          <div className="gallery3">
            <div className="gallery-content">
              <div className="product-gallery">
                <div className="thumbnail">
                  <div className="rectangle-parent4">
                    <div className="frame-child16" />
                    <img
                      className="image-75-icon"
                      loading="lazy"
                      alt=""
                      src="/image-75@2x.png"
                    />
                  </div>
                  <div className="rectangle-parent5">
                    <div className="frame-child17" />
                    <img
                      className="image-76-icon"
                      alt=""
                      src="/image-76@2x.png"
                    />
                  </div>
                  <div className="rectangle-parent6">
                    <div className="frame-child18" />
                    <img
                      className="image-65-icon1"
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
                    <div className="product-info1">
                      <div className="nike">Nike</div>
                      <div className="rating">
                        <div className="stars15">
                          <div className="half-star">
                            <div className="half-star-background" />
                            <img
                              className="star-1-119"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-2-wrapper">
                            <img
                              className="star-1-219"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-3-wrapper">
                            <img
                              className="star-1-319"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-4-wrapper">
                            <img
                              className="star-1-419"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                          <div className="star-1-5-wrapper">
                            <img
                              className="star-1-519"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="nh-gi11">3,014 Đánh giá</div>
                      <div className="review-count">
                        <div className="count-background" />
                      </div>
                      <div className="sn-phm-c">33 sản phẩm có sẵn</div>
                    </div>
                    <h3 className="x-hng-vnxk">{`Xả Hàng VNXK Áo Phông Nam Nike Khô Thoáng Swoosh `}</h3>
                    <div className="bar-background" />
                    <div className="product-details1">
                      <div className="price-info">
                        <div className="parent1">
                          <div className="div94">
                            250.000
                            <span className="span26">đ</span>
                          </div>
                          <div className="price19">
                            <div className="div95">
                              <span className="span27">500.000</span>
                              <span className="span28">đ</span>
                            </div>
                          </div>
                        </div>
                        <div className="mu-sc-xm-container">
                          <span className="mu-sc">Màu sắc:</span>
                          <span> Xám</span>
                        </div>
                      </div>
                      <img
                        className="inner-icon1"
                        loading="lazy"
                        alt=""
                        src="/inner.svg"
                      />
                    </div>
                    <div className="size-label">
                      <div className="size-m3">
                        <span className="size3">Size:</span>
                        <span> M</span>
                      </div>
                      <div className="size-options">
                        <div className="size-list">
                          <div className="s">S</div>
                        </div>
                        <div className="size-list1">
                          <div className="m3">M</div>
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
                    <div className="quantity4">
                      <div className="quantity5">
                        <div className="quantity-child1" />
                        <div className="minus3">
                          <div className="minus-child1" />
                          <div className="button-icons1" />
                        </div>
                        <div className="quantity-display1">
                          <div className="quantity-value1">3</div>
                        </div>
                        <div className="plus3">
                          <div className="plus-child1" />
                          <div className="minus-icon-group">
                            <div className="minus-icon1" />
                            <div className="plus-icon1" />
                          </div>
                        </div>
                      </div>
                      <div className="cart4" onClick={onCartContainerClick}>
                        <div className="shop-now8">Thêm Vào Giỏ hàng</div>
                      </div>
                    </div>
                    <div className="buy" onClick={onBuyContainerClick}>
                      <div className="shop-now9">Mua Ngay</div>
                    </div>
                    <div className="product-actions">
                      <div className="actions-right">
                        <div className="compare-favorite">
                          <div className="heart-1-wrapper">
                            <img
                              className="heart-1-icon2"
                              alt=""
                              src="/heart-1-11.svg"
                            />
                          </div>
                          <div className="yu-thch2">Yêu Thích</div>
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
                <img className="vector-icon15" alt="" src="/vector-81.svg" />
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
                        <div className="images12" />
                        <div className="images13" />
                        <div className="images14" />
                        <div className="images15" />
                        <div className="images16" />
                        <div className="images17" />
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
                <img className="vector-icon16" alt="" src="/vector-9.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items1">
            <div className="tab-items-child" />
          </div>
          <div className="tab-items2">
            <div className="chi-tit-thng-s-k-thut-parent">
              <div className="chi-tit">{`Chi tiết & Thông số kỹ thuật`}</div>
              <div className="vector-wrapper13">
                <img className="vector-icon17" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items3">
            <div className="tab-items-item" />
          </div>
          <div className="tab-items4">
            <div className="bao-gm-parent">
              <div className="bao-gm">Bao Gồm</div>
              <div className="vector-wrapper14">
                <img className="vector-icon18" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items5">
            <div className="tab-items-inner" />
          </div>
          <div className="tab-items6">
            <div className="v-ngi-bn-parent">
              <div className="v-ngi-bn">Về Người Bán</div>
              <div className="vector-wrapper15">
                <img className="vector-icon19" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items7">
            <div className="tab-items-child1" />
          </div>
          <div className="tab-items8">
            <div className="chnh-sch-mua-hng-parent">
              <div className="chnh-sch-mua">Chính Sách Mua Hàng</div>
              <div className="vector-wrapper16">
                <img className="vector-icon20" alt="" src="/vector-101.svg" />
              </div>
            </div>
          </div>
          <div className="tab-items9">
            <div className="tab-items-child2" />
          </div>
          <div className="tab-items10">
            <div className="cu-hi-v-tr-li-parent">
              <div className="cu-hi-v">Câu Hỏi Và Trả Lời</div>
              <div className="vector-wrapper17">
                <img className="vector-icon21" alt="" src="/vector-101.svg" />
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
                            className="star-1-120"
                            alt=""
                            src="/star-1-1-9.svg"
                          />
                          <img
                            className="star-1-220"
                            alt=""
                            src="/star-1-2-9.svg"
                          />
                          <img
                            className="star-1-320"
                            alt=""
                            src="/star-1-3-9.svg"
                          />
                          <img
                            className="star-1-420"
                            alt=""
                            src="/star-1-4-9.svg"
                          />
                          <img
                            className="star-1-520"
                            alt=""
                            src="/star-1-5-9.svg"
                          />
                        </div>
                        <div className="nh-gi12">2 đánh giá</div>
                      </div>
                    </div>
                  </div>
                  <div className="bars">
                    <div className="rating-levels">
                      <div className="sao">5 sao</div>
                      <div className="bars1">
                        <div className="bar1">
                          <div className="bar-inner" />
                          <div className="bars2" />
                        </div>
                      </div>
                      <div className="counts">89%</div>
                    </div>
                    <div className="rating-levels1">
                      <div className="sao1">4 sao</div>
                      <div className="bar-wrapper">
                        <div className="bar2">
                          <div className="bar-child1" />
                          <div className="bar-child2" />
                        </div>
                      </div>
                      <div className="div96">4%</div>
                    </div>
                    <div className="rating-levels2">
                      <div className="sao2">3 sao</div>
                      <div className="bar-container">
                        <div className="bar3">
                          <div className="bar-child3" />
                          <div className="bar-child4" />
                        </div>
                      </div>
                      <div className="div97">3%</div>
                    </div>
                    <div className="rating-levels3">
                      <div className="sao3">2 sao</div>
                      <div className="bar-frame">
                        <div className="bar4">
                          <div className="bar-child5" />
                          <div className="bar-child6" />
                        </div>
                      </div>
                      <div className="div98">1%</div>
                    </div>
                    <div className="rating-levels4">
                      <div className="sao4">1 sao</div>
                      <div className="bar-wrapper1">
                        <div className="bar5">
                          <div className="bar-child7" />
                          <div className="bar-child8" />
                        </div>
                      </div>
                      <div className="div99">4%</div>
                    </div>
                  </div>
                </div>
                <div className="large-button-radius-614">
                  <div className="shop-now10">Viết đánh giá</div>
                </div>
              </div>
              <div className="add-review">
                <div className="review-form-title-parent">
                  <div className="review-form-title">
                    <div className="form-title-container">
                      <img
                        className="vector-icon22"
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
          <div className="frame-parent19">
            <form className="frame-form">
              <div className="large-button-radius-6-wrapper">
                <div className="large-button-radius-615">
                  <div className="shop-now11">Xem Tất Cả</div>
                </div>
              </div>
              <div className="vit-nh-gi-wrapper">
                <div className="vit-nh-gi">Viết đánh giá</div>
              </div>
              <div className="a-ch-email1">
                Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc
                được đánh dấu *
              </div>
              <div className="nh-gi-ca-bn-v-sn-phm-parent">
                <div className="nh-gi-ca">Đánh giá của bạn về sản phẩm</div>
                <div className="frame-parent20">
                  <div className="star-1-1-parent2">
                    <img className="star-1-121" alt="" src="/star-1-11.svg" />
                    <img className="star-1-221" alt="" src="/star-1-2.svg" />
                  </div>
                  <img className="star-1-321" alt="" src="/star-1-3.svg" />
                  <img className="star-1-421" alt="" src="/star-1-4.svg" />
                  <img className="star-1-521" alt="" src="/star-1-5.svg" />
                </div>
              </div>
              <div className="textarea2">
                <div className="textarea3">Bình luận</div>
                <div className="info17">
                  <div className="beautiful-super-large1">
                    Viết bình luận của bạn ở đây
                  </div>
                </div>
                <div className="textarea-item" />
              </div>
              <div className="input-group">
                <div className="input3">
                  <div className="input-inner" />
                  <div className="hover1">Tên</div>
                  <div className="info-container">
                    <div className="info18">
                      <div className="your-name2">Ali Tufan</div>
                    </div>
                  </div>
                </div>
                <div className="input4">
                  <div className="input-child1" />
                  <div className="input5">Email</div>
                  <div className="info-frame">
                    <div className="info19">
                      <div className="your-name3">Email của bạn</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent21">
                <div className="checkbox-wrapper">
                  <div className="checkbox4">
                    <div className="checkbox-child2" />
                  </div>
                </div>
                <div className="lu-tn-email">
                  Lưu tên, email và trang web của tôi trong trình duyệt này cho
                  lần đánh giá tiếp theo.
                </div>
              </div>
              <div className="large-button-radius-616">
                <div className="shop-now12">Hoàn tất</div>
              </div>
            </form>
            <div className="head8">
              <h2 className="sn-phm-lin">Sản phẩm liên quan</h2>
              <div className="arrow-bullet-frame">
                <img
                  className="arrow-bullet-icon6"
                  loading="lazy"
                  alt=""
                  src="/arrowbullet.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-parent22">
            <div className="parent2">
              <div className="div100">
                <div className="child10" />
                <div className="images18">
                  <div className="images-child10" />
                  <img
                    className="image-30-icon11"
                    alt=""
                    src="/image-30-17@2x.png"
                  />
                </div>
                <div className="info-wrapper1">
                  <div className="info20">
                    <div className="price20">
                      <div className="div101">$32.50</div>
                      <div className="div102">$45</div>
                    </div>
                    <div className="brand11">
                      <div className="in-t11">Thời trang</div>
                    </div>
                    <div className="title11">
                      <div className="great-value-ultra8">{`Áo hoodie Nike thấm hút mồ hôi cho ngày đông lạnh `}</div>
                    </div>
                    <div className="review11">
                      <div className="stars-frame">
                        <div className="stars16">
                          <img
                            className="star-1-122"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-222"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-322"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-422"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-522"
                            alt=""
                            src="/star-1-1.svg"
                          />
                        </div>
                      </div>
                      <div className="nh-gi13">3,014 đánh giá</div>
                    </div>
                    <div className="price21">
                      <div className="div103">
                        278.000
                        <span className="span29">đ</span>
                      </div>
                      <div className="wrapper6">
                        <div className="div104">328.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div105">
                <div className="child11" />
                <div className="images19">
                  <div className="images-child11" />
                  <img
                    className="image-30-icon12"
                    alt=""
                    src="/image-30-18@2x.png"
                  />
                </div>
                <div className="info-wrapper2">
                  <div className="info21">
                    <div className="price22">
                      <div className="div106">$32.50</div>
                      <div className="div107">$45</div>
                    </div>
                    <div className="brand12">
                      <div className="in-t12">Thời trang</div>
                    </div>
                    <div className="title12">
                      <div className="great-value-ultra9">
                        Áo mùa đông lạnh giá Nike chần bông ấm áp
                      </div>
                    </div>
                    <div className="review12">
                      <div className="stars-wrapper1">
                        <div className="stars17">
                          <img
                            className="star-1-123"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-223"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-323"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-423"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-523"
                            alt=""
                            src="/star-1-1.svg"
                          />
                        </div>
                      </div>
                      <div className="nh-gi14">3,014 đánh giá</div>
                    </div>
                    <div className="price23">
                      <div className="div108">
                        278.000
                        <span className="span30">đ</span>
                      </div>
                      <div className="wrapper7">
                        <div className="div109">328.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div110">
                <div className="child12" />
                <div className="images20">
                  <div className="images-child12" />
                  <img
                    className="image-30-icon13"
                    alt=""
                    src="/image-30-19@2x.png"
                  />
                </div>
                <div className="info-wrapper3">
                  <div className="info22">
                    <div className="price24">
                      <div className="div111">$32.50</div>
                      <div className="div112">$45</div>
                    </div>
                    <div className="brand13">
                      <div className="in-t13">Thời trang</div>
                    </div>
                    <div className="title13">
                      <div className="great-value-ultra10">
                        Quần tập nữ Adidas siêu co giãn chống nước
                      </div>
                    </div>
                    <div className="review13">
                      <div className="stars-wrapper2">
                        <div className="stars18">
                          <img
                            className="star-1-124"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-224"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-324"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-424"
                            alt=""
                            src="/star-1-1.svg"
                          />
                          <img
                            className="star-1-524"
                            alt=""
                            src="/star-1-1.svg"
                          />
                        </div>
                      </div>
                      <div className="nh-gi15">3,014 đánh giá</div>
                    </div>
                    <div className="price25">
                      <div className="div113">
                        278.000
                        <span className="span31">đ</span>
                      </div>
                      <div className="wrapper8">
                        <div className="div114">328.000đ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="head-container">
              <div className="head9">
                <h2 className="c-th-bn">Có thể bạn sẽ thích</h2>
                <div className="arrow-bullet-wrapper1">
                  <img
                    className="arrow-bullet-icon7"
                    alt=""
                    src="/arrowbullet.svg"
                  />
                </div>
              </div>
              <div className="related-product-item-parent">
                <div className="related-product-item">
                  <div className="product-card" />
                  <div className="images21">
                    <div className="images-child13" />
                    <img
                      className="image-30-icon14"
                      alt=""
                      src="/image-30-7@2x.png"
                    />
                  </div>
                  <div className="product-info2">
                    <div className="info23">
                      <div className="price26">
                        <div className="div115">$32.50</div>
                        <div className="div116">$45</div>
                      </div>
                      <div className="brand14">
                        <div className="in-t14">Thời trang</div>
                      </div>
                      <div className="title14">
                        <div className="great-value-ultra11">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                      </div>
                      <div className="review14">
                        <div className="review-details">
                          <div className="stars19">
                            <img
                              className="star-1-125"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-225"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-325"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-425"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-525"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                        <div className="nh-gi16">3,014 đánh giá</div>
                      </div>
                      <div className="price27">
                        <div className="div117">
                          278.000
                          <span className="span32">đ</span>
                        </div>
                        <div className="inner-price">
                          <div className="div118">328.000đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-product-item1">
                  <div className="related-product-item-child" />
                  <div className="images22">
                    <div className="images-child14" />
                    <img
                      className="image-30-icon15"
                      alt=""
                      src="/image-30-8@2x.png"
                    />
                  </div>
                  <div className="info-wrapper4">
                    <div className="info24">
                      <div className="price28">
                        <div className="div119">$32.50</div>
                        <div className="div120">$45</div>
                      </div>
                      <div className="brand15">
                        <div className="in-t15">Thời trang</div>
                      </div>
                      <div className="title15">
                        <div className="great-value-ultra12">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                      </div>
                      <div className="review15">
                        <div className="stars-wrapper3">
                          <div className="stars20">
                            <img
                              className="star-1-126"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-226"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-326"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-426"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-526"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                        <div className="nh-gi17">3,014 đánh giá</div>
                      </div>
                      <div className="price29">
                        <div className="div121">
                          278.000
                          <span className="span33">đ</span>
                        </div>
                        <div className="wrapper9">
                          <div className="div122">328.000đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-product-item2">
                  <div className="related-product-item-item" />
                  <div className="images23">
                    <div className="images-child15" />
                    <img
                      className="image-30-icon16"
                      alt=""
                      src="/image-30-9@2x.png"
                    />
                  </div>
                  <div className="info-wrapper5">
                    <div className="info25">
                      <div className="price30">
                        <div className="div123">$32.50</div>
                        <div className="div124">$45</div>
                      </div>
                      <div className="brand16">
                        <div className="in-t16">Thời trang</div>
                      </div>
                      <div className="title16">
                        <div className="great-value-ultra13">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                      </div>
                      <div className="review16">
                        <div className="stars-wrapper4">
                          <div className="stars21">
                            <img
                              className="star-1-127"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-227"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-327"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-427"
                              alt=""
                              src="/star-1-1.svg"
                            />
                            <img
                              className="star-1-527"
                              alt=""
                              src="/star-1-1.svg"
                            />
                          </div>
                        </div>
                        <div className="nh-gi18">3,014 đánh giá</div>
                      </div>
                      <div className="price31">
                        <div className="div125">
                          278.000
                          <span className="span34">đ</span>
                        </div>
                        <div className="wrapper10">
                          <div className="div126">328.000đ</div>
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
