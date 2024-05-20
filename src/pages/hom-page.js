import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component3 from "../components/component3";
import Component2 from "../components/component2";
import HEADER1 from "../components/h-e-a-d-e-r1";
import ProductCards from "../components/product-cards";
import CategoryCards1 from "../components/category-cards1";
import CategoryCards from "../components/category-cards";
import FeaturedProductsContainer from "../components/featured-products-container";
import Component1 from "../components/component1";
import Component from "../components/component";
import FOOTER from "../components/f-o-o-t-e-r";
import HEADER from "../components/h-e-a-d-e-r";
import "./hom-page.css";

const HomPage = () => {
  const navigate = useNavigate();

  const onCategoryCardsContainerClick = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onCategoryCardsContainer1Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onCategoryCardsContainer2Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onCategoryCardsContainer3Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onCategoryCardsContainer4Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onCategoryCardsContainer5Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onCategoryCardsContainer6Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onFeaturedProductsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLargeButtonRadius6ContainerClick = useCallback(() => {
    navigate("/cartdetail");
  }, [navigate]);

  const onCategoryCardsContainer7Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  return (
    <div className="hompage">
      <div className="head-group">
        <div className="head2">
          <div className="sn-phm-gn">Sản phẩm gần đây</div>
          <img className="arrow-bullet-icon2" alt="" src="/arrowbullet.svg" />
        </div>
        <div className="items-parent">
          <div className="items">
            <div className="div36">
              <div className="child2" />
              <div className="info15">
                <div className="price13">
                  <div className="div37">$32.50</div>
                  <div className="div38">$45</div>
                </div>
                <div className="review6">
                  <div className="nh-gi8">3,014 đánh giá</div>
                  <div className="stars11">
                    <img className="star-1-113" alt="" src="/star-1-1.svg" />
                    <img className="star-1-213" alt="" src="/star-1-1.svg" />
                    <img className="star-1-313" alt="" src="/star-1-1.svg" />
                    <img className="star-1-413" alt="" src="/star-1-1.svg" />
                    <img className="star-1-513" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="title6">
                  <div className="great-value-ultra6">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                </div>
                <div className="brand6">
                  <div className="in-t6">Điện tử</div>
                </div>
                <div className="price14">
                  <div className="div39">
                    278.000
                    <span className="span9">đ</span>
                  </div>
                  <div className="div40">328.000đ</div>
                </div>
              </div>
              <div className="images12">
                <div className="images-child4" />
                <img className="image-30-icon6" alt="" src="/image-30@2x.png" />
              </div>
            </div>
            <div className="div41">
              <div className="child3" />
              <div className="info16">
                <div className="price15">
                  <div className="div42">
                    278.000
                    <span className="span10">đ</span>
                  </div>
                  <div className="div43">328.000đ</div>
                </div>
                <div className="review7">
                  <div className="nh-gi9">3,014 đánh giá</div>
                  <div className="stars12">
                    <img className="star-1-114" alt="" src="/star-1-1.svg" />
                    <img className="star-1-214" alt="" src="/star-1-1.svg" />
                    <img className="star-1-314" alt="" src="/star-1-1.svg" />
                    <img className="star-1-414" alt="" src="/star-1-1.svg" />
                    <img className="star-1-514" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="title7">
                  <div className="kinlo-hydrating-golden">
                    KINLO Hydrating Golden Facial Mist with Sweet Orange and
                  </div>
                </div>
                <div className="brand7">
                  <div className="in-t7">Điện tử</div>
                </div>
              </div>
              <div className="images13">
                <div className="images-child5" />
                <img className="image-30-icon7" alt="" src="/image-30@2x.png" />
              </div>
              <div className="hover-effect">
                <div className="icons">
                  <img className="icons-child" alt="" src="/group-3.svg" />
                  <img className="icons-item" alt="" src="/group-2.svg" />
                  <img className="icons-inner" alt="" src="/group-1.svg" />
                </div>
                <div className="large-button-radius-67">
                  <div className="thm-vo-gi">Thêm vào giỏ hàng</div>
                </div>
              </div>
            </div>
            <div className="div44">
              <div className="child4" />
              <div className="info17">
                <div className="price16">
                  <div className="div45">$32.50</div>
                  <div className="div46">$45</div>
                </div>
                <div className="review8">
                  <div className="nh-gi10">3,014 đánh giá</div>
                  <div className="stars13">
                    <img className="star-1-115" alt="" src="/star-1-1.svg" />
                    <img className="star-1-215" alt="" src="/star-1-1.svg" />
                    <img className="star-1-315" alt="" src="/star-1-1.svg" />
                    <img className="star-1-415" alt="" src="/star-1-1.svg" />
                    <img className="star-1-515" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="title8">
                  <div className="great-value-ultra7">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                </div>
                <div className="brand8">
                  <div className="in-t8">Điện tử</div>
                </div>
                <div className="price17">
                  <div className="div47">
                    278.000
                    <span className="span11">đ</span>
                  </div>
                  <div className="div48">328.000đ</div>
                </div>
              </div>
              <div className="images14">
                <div className="images-child6" />
                <img className="image-30-icon8" alt="" src="/image-30@2x.png" />
              </div>
            </div>
            <div className="div49">
              <div className="child5" />
              <div className="info18">
                <div className="price18">
                  <div className="div50">$32.50</div>
                  <div className="div51">$45</div>
                </div>
                <div className="review9">
                  <div className="nh-gi11">3,014 đánh giá</div>
                  <div className="stars14">
                    <img className="star-1-116" alt="" src="/star-1-1.svg" />
                    <img className="star-1-216" alt="" src="/star-1-1.svg" />
                    <img className="star-1-316" alt="" src="/star-1-1.svg" />
                    <img className="star-1-416" alt="" src="/star-1-1.svg" />
                    <img className="star-1-516" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="title9">
                  <div className="great-value-ultra8">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                </div>
                <div className="brand9">
                  <div className="in-t9">Điện tử</div>
                </div>
                <div className="price19">
                  <div className="div52">
                    278.000
                    <span className="span12">đ</span>
                  </div>
                  <div className="div53">328.000đ</div>
                </div>
              </div>
              <div className="images15">
                <div className="images-child7" />
                <img className="image-30-icon9" alt="" src="/image-30@2x.png" />
              </div>
            </div>
            <div className="div54">
              <div className="child6" />
              <div className="info19">
                <div className="price20">
                  <div className="div55">$32.50</div>
                  <div className="div56">$45</div>
                </div>
                <div className="review10">
                  <div className="nh-gi12">3,014 đánh giá</div>
                  <div className="stars15">
                    <img className="star-1-117" alt="" src="/star-1-1.svg" />
                    <img className="star-1-217" alt="" src="/star-1-1.svg" />
                    <img className="star-1-317" alt="" src="/star-1-1.svg" />
                    <img className="star-1-417" alt="" src="/star-1-1.svg" />
                    <img className="star-1-517" alt="" src="/star-1-1.svg" />
                  </div>
                </div>
                <div className="title10">
                  <div className="great-value-ultra9">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
                </div>
                <div className="brand10">
                  <div className="in-t10">Điện tử</div>
                </div>
                <div className="price21">
                  <div className="div57">
                    278.000
                    <span className="span13">đ</span>
                  </div>
                  <div className="div58">328.000đ</div>
                </div>
              </div>
              <div className="images16">
                <div className="images-child8" />
                <img
                  className="image-30-icon10"
                  alt=""
                  src="/image-30@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="arrow">
            <img className="arrows-1-icon4" alt="" src="/arrows1.svg" />
            <img className="arrows-1-icon5" alt="" src="/arrows1-1.svg" />
          </div>
        </div>
      </div>
      <div className="items-group">
        <div className="items1">
          <div className="div59">
            <div className="child7" />
            <div className="info20">
              <div className="price22">
                <div className="div60">$32.50</div>
                <div className="div61">$45</div>
              </div>
              <div className="review11">
                <div className="nh-gi13">3,014 đánh giá</div>
                <div className="stars16">
                  <img className="star-1-118" alt="" src="/star-1-1.svg" />
                  <img className="star-1-218" alt="" src="/star-1-1.svg" />
                  <img className="star-1-318" alt="" src="/star-1-1.svg" />
                  <img className="star-1-418" alt="" src="/star-1-1.svg" />
                  <img className="star-1-518" alt="" src="/star-1-1.svg" />
                </div>
              </div>
              <div className="title11">
                <div className="great-value-ultra10">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
              </div>
              <div className="brand11">
                <div className="in-t11">Điện tử</div>
              </div>
              <div className="price23">
                <div className="div62">
                  278.000
                  <span className="span14">đ</span>
                </div>
                <div className="div63">328.000đ</div>
              </div>
            </div>
            <div className="images17">
              <div className="images-child9" />
              <img className="image-30-icon11" alt="" src="/image-30@2x.png" />
            </div>
          </div>
          <div className="div64">
            <div className="child8" />
            <div className="info21">
              <div className="price24">
                <div className="div65">
                  278.000
                  <span className="span15">đ</span>
                </div>
                <div className="div66">328.000đ</div>
              </div>
              <div className="review12">
                <div className="nh-gi14">3,014 đánh giá</div>
                <div className="stars17">
                  <img className="star-1-119" alt="" src="/star-1-1.svg" />
                  <img className="star-1-219" alt="" src="/star-1-1.svg" />
                  <img className="star-1-319" alt="" src="/star-1-1.svg" />
                  <img className="star-1-419" alt="" src="/star-1-1.svg" />
                  <img className="star-1-519" alt="" src="/star-1-1.svg" />
                </div>
              </div>
              <div className="title12">
                <div className="kinlo-hydrating-golden1">
                  KINLO Hydrating Golden Facial Mist with Sweet Orange and
                </div>
              </div>
              <div className="brand12">
                <div className="in-t12">Điện tử</div>
              </div>
            </div>
            <div className="images18">
              <div className="images-child10" />
              <img className="image-30-icon12" alt="" src="/image-30@2x.png" />
            </div>
            <div className="hover-effect1">
              <div className="icons1">
                <img className="group-icon" alt="" src="/group-3.svg" />
                <img className="icons-child1" alt="" src="/group-2.svg" />
                <img className="icons-child2" alt="" src="/group-1.svg" />
              </div>
              <div className="large-button-radius-68">
                <div className="thm-vo-gi1">Thêm vào giỏ hàng</div>
              </div>
            </div>
          </div>
          <div className="div67">
            <div className="child9" />
            <div className="info22">
              <div className="price25">
                <div className="div68">$32.50</div>
                <div className="div69">$45</div>
              </div>
              <div className="review13">
                <div className="nh-gi15">3,014 đánh giá</div>
                <div className="stars18">
                  <img className="star-1-120" alt="" src="/star-1-1.svg" />
                  <img className="star-1-220" alt="" src="/star-1-1.svg" />
                  <img className="star-1-320" alt="" src="/star-1-1.svg" />
                  <img className="star-1-420" alt="" src="/star-1-1.svg" />
                  <img className="star-1-520" alt="" src="/star-1-1.svg" />
                </div>
              </div>
              <div className="title13">
                <div className="great-value-ultra11">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
              </div>
              <div className="brand13">
                <div className="in-t13">Điện tử</div>
              </div>
              <div className="price26">
                <div className="div70">
                  278.000
                  <span className="span16">đ</span>
                </div>
                <div className="div71">328.000đ</div>
              </div>
            </div>
            <div className="images19">
              <div className="images-child11" />
              <img className="image-30-icon13" alt="" src="/image-30@2x.png" />
            </div>
          </div>
          <div className="div72">
            <div className="child10" />
            <div className="info23">
              <div className="price27">
                <div className="div73">$32.50</div>
                <div className="div74">$45</div>
              </div>
              <div className="review14">
                <div className="nh-gi16">3,014 đánh giá</div>
                <div className="stars19">
                  <img className="star-1-121" alt="" src="/star-1-1.svg" />
                  <img className="star-1-221" alt="" src="/star-1-1.svg" />
                  <img className="star-1-321" alt="" src="/star-1-1.svg" />
                  <img className="star-1-421" alt="" src="/star-1-1.svg" />
                  <img className="star-1-521" alt="" src="/star-1-1.svg" />
                </div>
              </div>
              <div className="title14">
                <div className="great-value-ultra12">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
              </div>
              <div className="brand14">
                <div className="in-t14">Điện tử</div>
              </div>
              <div className="price28">
                <div className="div75">
                  278.000
                  <span className="span17">đ</span>
                </div>
                <div className="div76">328.000đ</div>
              </div>
            </div>
            <div className="images20">
              <div className="images-child12" />
              <img className="image-30-icon14" alt="" src="/image-30@2x.png" />
            </div>
          </div>
          <div className="div77">
            <div className="child11" />
            <div className="info24">
              <div className="price29">
                <div className="div78">$32.50</div>
                <div className="div79">$45</div>
              </div>
              <div className="review15">
                <div className="nh-gi17">3,014 đánh giá</div>
                <div className="stars20">
                  <img className="star-1-122" alt="" src="/star-1-1.svg" />
                  <img className="star-1-222" alt="" src="/star-1-1.svg" />
                  <img className="star-1-322" alt="" src="/star-1-1.svg" />
                  <img className="star-1-422" alt="" src="/star-1-1.svg" />
                  <img className="star-1-522" alt="" src="/star-1-1.svg" />
                </div>
              </div>
              <div className="title15">
                <div className="great-value-ultra13">{`Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double `}</div>
              </div>
              <div className="brand15">
                <div className="in-t15">Điện tử</div>
              </div>
              <div className="price30">
                <div className="div80">
                  278.000
                  <span className="span18">đ</span>
                </div>
                <div className="div81">328.000đ</div>
              </div>
            </div>
            <div className="images21">
              <div className="images-child13" />
              <img className="image-30-icon15" alt="" src="/image-30@2x.png" />
            </div>
          </div>
        </div>
        <div className="arrow1">
          <img className="arrows-1-icon6" alt="" src="/arrows1.svg" />
          <img className="arrows-1-icon7" alt="" src="/arrows1-1.svg" />
        </div>
      </div>
      <Component3 kINLOHydratingGoldenFacia="Áo thun nam thoáng mát, thích hợp chạy bộ" />
      <Component2 greatValueUltraStrongPape="Quần tập nữ Adidas siêu co giãn chống nước" />
      <img
        className="arrows-1-icon8"
        loading="lazy"
        alt=""
        src="/arrows1.svg"
      />
      <img
        className="arrows-1-icon9"
        loading="lazy"
        alt=""
        src="/arrows1-1.svg"
      />
      <main className="header-7-parent">
        <HEADER1 />
        <section className="promo-inner-wrapper">
          <div className="promo-inner">
            <div className="categories-wrapper">
              <div className="categories">
                <div className="categories1">
                  <div className="bg" />
                  <div className="line">
                    <div className="icon-bg-parent">
                      <div className="icon-bg" />
                      <img
                        className="cooking-1-icon"
                        alt=""
                        src="/cooking-1.svg"
                      />
                    </div>
                    <div className="icon-item">
                      <div className="icon-bg1" />
                      <div className="armchair-1-wrapper">
                        <img
                          className="armchair-1-icon"
                          alt=""
                          src="/armchair-1.svg"
                        />
                      </div>
                    </div>
                    <div className="icon-bg-group">
                      <div className="icon-bg2" />
                      <div className="icon-bg3" />
                      <img
                        className="smartphone-1-1"
                        alt=""
                        src="/smartphone-1-1.svg"
                      />
                      <img
                        className="bride-dress-1-icon"
                        alt=""
                        src="/bridedress-1.svg"
                      />
                    </div>
                    <div className="icon-item1">
                      <div className="icon-item-child" />
                      <div className="heart-beat-1-wrapper">
                        <img
                          className="heart-beat-1-icon"
                          alt=""
                          src="/heartbeat-1.svg"
                        />
                      </div>
                    </div>
                    <div className="icon-item-parent">
                      <div className="icon-item2">
                        <div className="icon-bg4" />
                        <img
                          className="volleyball-1-icon"
                          alt=""
                          src="/volleyball-1.svg"
                        />
                      </div>
                      <div className="icon-item3">
                        <div className="icon-item-item" />
                        <div className="groceries-1-wrapper">
                          <img
                            className="groceries-1-icon"
                            alt=""
                            src="/groceries-1.svg"
                          />
                        </div>
                      </div>
                      <div className="icon-item4">
                        <div className="icon-item-inner" />
                        <div className="games-1-1-wrapper">
                          <img
                            className="games-1-1"
                            alt=""
                            src="/games-1-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="icon-bg5" />
                  </div>
                  <img
                    className="arrow-icon"
                    loading="lazy"
                    alt=""
                    src="/arrow.svg"
                  />
                  <div className="u-i-hp-container">
                    <p className="u-i-hp">Ưu đãi hấp dẫn hôm nay</p>
                    <p className="nh-bp">{`Nhà & Bếp`}</p>
                    <p className="ni-tht">Nội thất</p>
                    <p className="thit-b-in">Thiết bị điện tử</p>
                    <p className="qun-o">{`Quần áo & Phụ kiện`}</p>
                    <p className="sc-khe">{`Sức khỏe & Làm đẹp`}</p>
                    <p className="th-thao">{`Thể thao & Ngoài trời`}</p>
                    <p className="ca-hng-tp">{`Cửa hàng tạp hóa & chợ`}</p>
                    <p className="tr-chi">{`Trò chơi đồ chơi & video`}</p>
                    <p className="b-m">{`Bé & Mẹ`}</p>
                  </div>
                  <img className="diamond-1-icon" alt="" src="/diamond-1.svg" />
                  <img
                    className="feeding-bottle-1-icon"
                    alt=""
                    src="/feedingbottle-1.svg"
                  />
                </div>
                <div className="bg-parent">
                  <img className="bg-icon" alt="" src="/bg@2x.png" />
                  <div className="promo-content">
                    <div className="wrapper-arrows-1-shadow-wrapper">
                      <div className="wrapper-arrows-1-shadow">
                        <img
                          className="arrows-1-shadow-icon"
                          loading="lazy"
                          alt=""
                          src="/arrows1shadow.svg"
                        />
                      </div>
                    </div>
                    <div className="promo-labels-parent">
                      <div className="promo-labels">
                        <div className="auto-tag">
                          <div className="khuyn-mi-cui">
                            Khuyến mãi cuối tháng
                          </div>
                        </div>
                        <h1 className="b-su-tp-container">
                          <p className="b-su-tp">BỘ SƯU TẬP</p>
                          <p className="ma-ng">MÙA ĐÔNG</p>
                        </h1>
                        <div className="nhng-g-chng">
                          Những gì chúng tôi mất hàng giờ để thực hiện sẽ là của
                          bạn để tận hưởng
                        </div>
                      </div>
                      <div className="large-button-radius-69">
                        <div className="large-button-radius-610">
                          <div className="shop-now9">Khám phá ngay</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper-arrows-1-shadow-container">
                    <div className="wrapper-arrows-1-shadow1">
                      <img
                        className="arrows-1-shadow-icon1"
                        loading="lazy"
                        alt=""
                        src="/arrows1shadow-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="categories2">
              <div className="icons2">
                <div className="icons-child3" />
                <div className="items2">
                  <div className="benefit-item">
                    <img
                      className="fast-delivery-1-icon"
                      loading="lazy"
                      alt=""
                      src="/fastdelivery-1.svg"
                    />
                    <div className="benefit-label">
                      <div className="min-ph-giao">Miễn phí giao hàng</div>
                      <div className="min-ph-cho">
                        Miễn phí cho đơn hàng trên 200K
                      </div>
                    </div>
                  </div>
                  <div className="shield-container-wrapper">
                    <div className="shield-container">
                      <img
                        className="shield-1-icon"
                        alt=""
                        src="/shield-1.svg"
                      />
                      <div className="guarantee-description">
                        <div className="m-bo-hon">Đảm bảo hoàn tiền</div>
                        <div className="i-tr-trong">
                          Đổi trả trong vòng 30 ngày
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="support-payment">
                    <div className="support-payment-icons">
                      <img
                        className="headphones-1-icon"
                        alt=""
                        src="/headphones-1.svg"
                      />
                      <div className="support-payment-description">
                        <div className="h-tr-trc">Hỗ trợ trực tuyến</div>
                        <div className="gi-mt-ngy">
                          24 giờ một ngày, 7 ngày một tuần
                        </div>
                      </div>
                    </div>
                    <div className="support-payment-icons1">
                      <img
                        className="credit-card-1-icon"
                        alt=""
                        src="/creditcard-1.svg"
                      />
                      <div className="thanh-ton-linh-hot-parent">
                        <div className="thanh-ton-linh">
                          Thanh toán linh hoạt
                        </div>
                        <div className="thanh-ton-bng">
                          Thanh toán bằng thẻ tín dụng
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-deals">
              <div className="head3">
                <div className="top-deal-header-content">
                  <h1 className="u-i-hng">Ưu đãi hàng đầu trong ngày</h1>
                  <div className="timer">
                    <div className="timer-child" />
                    <div className="timer-container">178 :</div>
                    <div className="timer-container1">23 :</div>
                    <div className="timer-container2">14 :</div>
                    <div className="timer-container3">39</div>
                  </div>
                </div>
                <div className="button-line">
                  <div className="view-all">Xem tất cả</div>
                  <div className="button-line-child" />
                </div>
              </div>
              <div className="top-deal-products">
                <ProductCards
                  image30="/image-30-12@2x.png"
                  vyBodyMSt="Váy body ôm sát "
                  khngCoGin="không co giãn"
                />
                <ProductCards
                  image30="/image-30-13@2x.png"
                  vyBodyMSt="Giày cao gót đế mảnh"
                  khngCoGin="màu hồng"
                  propMarginLeft="-1px"
                />
                <ProductCards
                  image30="/image-30-14@2x.png"
                  vyBodyMSt="Áo khoác lông"
                  khngCoGin="siêu ấm"
                  propMarginLeft="-1px"
                />
                <div className="product-cards">
                  <div className="product-cards-child" />
                  <div className="images22">
                    <div className="images-child14" />
                    <img
                      className="image-30-icon16"
                      loading="lazy"
                      alt=""
                      src="/image-30-15@2x.png"
                    />
                  </div>
                  <div className="product-cards-inner">
                    <div className="info-parent">
                      <div className="info25">
                        <div className="brand-parent">
                          <div className="brand16">
                            <div className="in-t16">Thời trang</div>
                          </div>
                          <div className="title16">
                            <div className="ergonomic-concrete-lamp-container">
                              <p className="ti-cm-tay">
                                Túi cầm tay mang đi làm
                              </p>
                              <p className="mu-nu-tin">màu nâu tiện dụng</p>
                            </div>
                          </div>
                        </div>
                        <div className="review-parent">
                          <div className="review16">
                            <div className="stars-wrapper4">
                              <div className="stars21">
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
                            <div className="nh-gi18">3,014 đánh giá</div>
                          </div>
                          <div className="price31">
                            <div className="div82">
                              278.000
                              <span className="span19">đ</span>
                            </div>
                            <div className="wrapper3">
                              <div className="div83">328.000đ</div>
                            </div>
                            <div className="gim-20-wrapper">
                              <div className="gim-20">Giảm 20%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bar5">
                        <div className="bar-child7" />
                        <div className="bar-child8" />
                        <div className="bn-56">Đã bán 56</div>
                      </div>
                    </div>
                  </div>
                </div>
                <ProductCards
                  image30="/image-30-16@2x.png"
                  vyBodyMSt="Mắt kính chống nắng"
                  khngCoGin="thời trang"
                  propMarginLeft="-1px"
                />
              </div>
              <div className="arrow-bullet-frame">
                <img
                  className="arrow-bullet-icon3"
                  loading="lazy"
                  alt=""
                  src="/arrowbullet-1.svg"
                />
              </div>
            </div>
            <div className="categories-content-wrapper">
              <div className="categories-content">
                <div className="head4">
                  <h1 className="danh-mc">Danh mục</h1>
                  <div className="button-line1">
                    <div className="view-all1">Xem tất cả</div>
                    <div className="button-line-item" />
                  </div>
                </div>
                <div className="inner1">
                  <CategoryCards1
                    jLiCovxVL1="/61jlicovxvl-1@2x.png"
                    apple="Apple"
                    onCategoryCardsContainerClick={
                      onCategoryCardsContainerClick
                    }
                  />
                  <CategoryCards
                    image44="/image-44@2x.png"
                    samsung="Samsung"
                    onCategoryCardsContainer1Click={
                      onCategoryCardsContainer1Click
                    }
                  />
                  <CategoryCards1
                    jLiCovxVL1="/image-45@2x.png"
                    apple="Sony"
                    propPadding="var(--padding-5xl) var(--padding-21xl)"
                    propHeight="102px"
                    propPadding1="0px var(--padding-xl) 0px var(--padding-2xl)"
                    propMinWidth="35px"
                    onCategoryCardsContainerClick={
                      onCategoryCardsContainer2Click
                    }
                  />
                  <CategoryCards
                    image44="/image-46@2x.png"
                    samsung="Nike"
                    propPadding="var(--padding-31xl) var(--padding-base) var(--padding-31xl) var(--padding-mid)"
                    propHeight="50px"
                    propWidth="117px"
                    propPadding1="0px var(--padding-2xl)"
                    propMinWidth="34px"
                    onCategoryCardsContainer1Click={
                      onCategoryCardsContainer3Click
                    }
                  />
                  <CategoryCards1
                    jLiCovxVL1="/image-47@2x.png"
                    apple="Adidas"
                    propPadding="var(--padding-16xl) var(--padding-6xl)"
                    propHeight="80px"
                    propPadding1="0px var(--padding-smi) 0px var(--padding-sm)"
                    propMinWidth="49px"
                    onCategoryCardsContainerClick={
                      onCategoryCardsContainer4Click
                    }
                  />
                  <CategoryCards1
                    jLiCovxVL1="/image-48@2x.png"
                    apple="Xiaomi"
                    propPadding="var(--padding-12xl) var(--padding-9xl) var(--padding-13xl) var(--padding-10xl)"
                    propHeight="87px"
                    propPadding1="0px var(--padding-smi) 0px var(--padding-sm)"
                    propMinWidth="49px"
                    onCategoryCardsContainerClick={
                      onCategoryCardsContainer5Click
                    }
                  />
                  <CategoryCards
                    image44="/image-49@2x.png"
                    samsung="Ray-Ban"
                    propPadding="var(--padding-34xl) var(--padding-base) var(--padding-34xl) var(--padding-mid)"
                    propHeight="44px"
                    propWidth="117px"
                    propPadding1="0px var(--padding-3xs) 0px var(--padding-2xs)"
                    propMinWidth="55px"
                    onCategoryCardsContainer1Click={
                      onCategoryCardsContainer6Click
                    }
                  />
                  <div
                    className="category-cards"
                    onClick={onCategoryCardsContainer7Click}
                  >
                    <div className="images23">
                      <div className="images-child15" />
                      <img
                        className="image-50-icon"
                        alt=""
                        src="/image-50@2x.png"
                      />
                    </div>
                    <div className="category-cards-inner">
                      <div className="michael-kors-parent">
                        <div className="michael-kors">Michael Kors</div>
                        <div className="sn-phm-wrapper">
                          <div className="sn-phm">29 sản phẩm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-wrapper">
              <div className="banner">
                <div className="background" />
                <img
                  className="mask-group-icon"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <div className="ng-h-i">ĐỒNG HỒ ĐÔI - GẮN KẾT YÊU THƯƠNG</div>
                <h1 className="tm-kim-mi-container">
                  <p className="tm-kim-mi">TÌM KIẾM MỚI</p>
                  <p className="ng-h-ca">ĐỒNG HỒ CỦA BẠN</p>
                </h1>
                <div className="ng-h-v">
                  Đồng hồ và dây đeo của bạn phải kết hợp hoàn hảo với nhau.
                </div>
                <div className="large-button-radius-611">
                  <div className="khm-ph-ngay">Khám phá ngay</div>
                </div>
              </div>
            </div>
            <div className="featured-products">
              <div className="head5">
                <h1 className="sn-phm-ni">Sản phẩm nổi bật</h1>
                <div className="filter-wrapper">
                  <div className="filter">
                    <div className="top-10-in">
                      Top 10 Điện tử Thời trang Gia dụng Tất cả
                    </div>
                    <div className="filter-child" />
                  </div>
                </div>
              </div>
              <div className="featured-product-cards">
                <FeaturedProductsContainer
                  image30="/image-30-17@2x.png"
                  greatValueUltraStrongPape="Áo Hoodie Nike dành cho mùa đông lạnh"
                  rectangleDiv={false}
                  onFeaturedProductsContainerClick={
                    onFeaturedProductsContainerClick
                  }
                />
                <FeaturedProductsContainer
                  image30="/image-30-18@2x.png"
                  greatValueUltraStrongPape="Áo nỉ chần bông màu xám có dây Nike"
                  rectangleDiv
                  propWidth="281px"
                  propFlex="unset"
                />
                <FeaturedProductsContainer
                  image30="/image-30-19@2x.png"
                  greatValueUltraStrongPape="Áo khoác unisex màu trắng tập gym Adidas"
                  rectangleDiv={false}
                  propWidth="281px"
                  propFlex="unset"
                />
              </div>
            </div>
            <div className="fruits-wrapper">
              <div className="fruits">
                <div className="head6">
                  <h1 className="thi-trang">Thời trang</h1>
                  <img
                    className="arrow-bullet-icon4"
                    alt=""
                    src="/arrowbullet-2.svg"
                  />
                </div>
                <div className="banner-image-wrapper">
                  <div className="banner-image">
                    <div className="banner1">
                      <img
                        className="banner-child"
                        loading="lazy"
                        alt=""
                        src="/group-28@2x.png"
                      />
                      <div className="ch-t-150k">Chỉ từ 150K</div>
                      <div className="promo-details">
                        <h1 className="discover-real-organic-container">
                          <p className="discover-real">{`Discover Real `}</p>
                          <p className="organic-flavors">Organic Flavors</p>
                        </h1>
                        <div className="button-line2">
                          <div className="view-all2">Mua ngay</div>
                          <div className="button-line-inner" />
                        </div>
                      </div>
                    </div>
                    <div className="items3">
                      <Component1
                        image30="/image-30-20@2x.png"
                        inT="Thời trang"
                        greatValueUltraStrongPape="Dễ Thương Dép Bông Đi Trong Nhà"
                      />
                      <Component1
                        image30="/image-30-21@2x.png"
                        inT="Thời trang"
                        greatValueUltraStrongPape="Vớ Lông Cừu Dày Dặn Giữ Ấm Màu Hồng"
                        propMarginLeft="-1px"
                        propMinWidth="61px"
                      />
                      <Component1
                        image30="/image-30-22@2x.png"
                        inT="Thời trang"
                        greatValueUltraStrongPape="Quần jeans Ống Rộng Lưng Cao Thêu Hình"
                        propMarginLeft="-1px"
                        propMinWidth="61px"
                      />
                      <Component1
                        image30="/image-30-23@2x.png"
                        inT="Thời trang"
                        greatValueUltraStrongPape="Bộ Đồ Ngủ Hình Hello Kitty Xinh Xắn"
                        propMarginLeft="-1px"
                        propMinWidth="61px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fruits-container">
              <div className="fruits1">
                <div className="head7">
                  <h1 className="ph-kin">Phụ kiện</h1>
                  <img
                    className="arrow-bullet-icon5"
                    alt=""
                    src="/arrowbullet-2.svg"
                  />
                </div>
                <div className="fruits-inner">
                  <div className="banner-parent">
                    <div className="banner2">
                      <img
                        className="banner-item"
                        loading="lazy"
                        alt=""
                        src="/group-28@2x.png"
                      />
                      <div className="ch-t-150k1">Chỉ từ 150K</div>
                      <div className="discover-real-organic-flavors-parent">
                        <h1 className="discover-real-organic-container1">
                          <p className="discover-real1">{`Discover Real `}</p>
                          <p className="organic-flavors1">Organic Flavors</p>
                        </h1>
                        <div className="button-line3">
                          <div className="view-all3">Mua ngay</div>
                          <div className="button-line-child1" />
                        </div>
                      </div>
                    </div>
                    <div className="items4">
                      <Component1
                        image30="/image-30-24@2x.png"
                        inT="Điện tử"
                        greatValueUltraStrongPape="Đồng hồ Apple Watch Series 9"
                        propMarginLeft="unset"
                        propMinWidth="42px"
                      />
                      <Component1
                        image30="/image-30-25@2x.png"
                        inT="Điện tử"
                        greatValueUltraStrongPape="Đồng hồ nghe gọi thông minh Apple"
                        propMarginLeft="-1px"
                        propMinWidth="42px"
                      />
                      <Component1
                        image30="/image-30-26@2x.png"
                        inT="Điện tử"
                        greatValueUltraStrongPape="Đồng hồ điện tử Apple Watch Series 6"
                        propMarginLeft="-1px"
                        propMinWidth="42px"
                      />
                      <Component1
                        image30="/image-30-24@2x.png"
                        inT="Điện tử"
                        greatValueUltraStrongPape="Đồng hồ Samsung Apple Watch"
                        propMarginLeft="-1px"
                        propMinWidth="42px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fruits-frame">
              <div className="fruits2">
                <div className="head8">
                  <h1 className="sc-p">Sắc đẹp</h1>
                  <img
                    className="arrow-bullet-icon6"
                    alt=""
                    src="/arrowbullet-2.svg"
                  />
                </div>
                <div className="fruits-child">
                  <div className="banner-group">
                    <div className="banner3">
                      <img
                        className="banner-inner"
                        loading="lazy"
                        alt=""
                        src="/group-28@2x.png"
                      />
                      <div className="ch-t-150k2">Chỉ từ 150K</div>
                      <div className="discover-real-organic-flavors-group">
                        <h1 className="discover-real-organic-container2">
                          <p className="discover-real2">{`Discover Real `}</p>
                          <p className="organic-flavors2">Organic Flavors</p>
                        </h1>
                        <div className="button-line4">
                          <div className="view-all4">Mua ngay</div>
                          <div className="button-line-child2" />
                        </div>
                      </div>
                    </div>
                    <div className="items5">
                      <Component
                        image30="/image-30-28@2x.png"
                        sonRomandSiuP="Son Romand siêu đẹp"
                        miDng="mới dùng"
                        prop="328.000đ"
                      />
                      <Component
                        image30="/image-30-29@2x.png"
                        sonRomandSiuP="Má hồng Romand"
                        miDng="đỉnh cao"
                        prop="528.000đ"
                        propMarginLeft="-1px"
                        propGap="10px"
                        propMinWidth="90px"
                      />
                      <Component
                        image30="/image-30-30@2x.png"
                        sonRomandSiuP="3CE phấn má hồng"
                        miDng="tựa thiên thần"
                        prop="328.000đ"
                        propMarginLeft="-1px"
                        propGap="6px"
                        propMinWidth="94px"
                      />
                      <Component
                        image30="/image-30-31@2x.png"
                        sonRomandSiuP="Má hồng cho da dầu"
                        miDng="tặng kèm bông"
                        prop="228.000đ"
                        propMarginLeft="-1px"
                        propGap="6px"
                        propMinWidth="90px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="head-container">
              <div className="head9">
                <h1 className="sn-phm-gn1">Sản phẩm gần đây</h1>
                <div className="arrow-bullet-wrapper1">
                  <img
                    className="arrow-bullet-icon7"
                    alt=""
                    src="/arrowbullet.svg"
                  />
                </div>
              </div>
              <div className="frame-parent3">
                <div className="parent1">
                  <FeaturedProductsContainer
                    image30="/image-30-17@2x.png"
                    greatValueUltraStrongPape="Áo hoodie Nike thấm hút mồ hôi cho ngày đông lạnh "
                    rectangleDiv={false}
                    propWidth="281px"
                    propFlex="unset"
                  />
                  <div className="frame-parent4">
                    <div className="wrapper4">
                      <FeaturedProductsContainer
                        image30="/image-30-18@2x.png"
                        greatValueUltraStrongPape="Áo mùa đông lạnh giá Nike chần bông ấm áp"
                        rectangleDiv
                        propWidth="unset"
                        propFlex="1"
                      />
                    </div>
                    <div className="c-tin-cy">
                      Được tin cậy bởi những Nhãn Hàng Lớn
                    </div>
                  </div>
                  <FeaturedProductsContainer
                    image30="/image-30-19@2x.png"
                    greatValueUltraStrongPape="Áo khoác chống nắng Adidas màu trắng tiện lợi"
                    rectangleDiv={false}
                    propWidth="281px"
                    propFlex="unset"
                  />
                </div>
                <div className="logo-partner-wrapper">
                  <div className="logo-partner">
                    <img
                      className="icon3"
                      loading="lazy"
                      alt=""
                      src="/1@2x.png"
                    />
                    <div className="wrapper5">
                      <img
                        className="icon4"
                        loading="lazy"
                        alt=""
                        src="/2@2x.png"
                      />
                    </div>
                    <div className="wrapper6">
                      <img
                        className="icon5"
                        loading="lazy"
                        alt=""
                        src="/3@2x.png"
                      />
                    </div>
                    <div className="wrapper7">
                      <img className="icon6" alt="" src="/4@2x.png" />
                    </div>
                    <div className="wrapper8">
                      <img
                        className="icon7"
                        loading="lazy"
                        alt=""
                        src="/5@2x.png"
                      />
                    </div>
                    <div className="wrapper9">
                      <img
                        className="icon8"
                        loading="lazy"
                        alt=""
                        src="/6@2x.png"
                      />
                    </div>
                    <div className="wrapper10">
                      <img
                        className="icon9"
                        loading="lazy"
                        alt=""
                        src="/7@2x.png"
                      />
                    </div>
                    <div className="wrapper11">
                      <img
                        className="icon10"
                        loading="lazy"
                        alt=""
                        src="/8@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-promo">
              <div className="newsletter">
                <img
                  className="bg-icon1"
                  loading="lazy"
                  alt=""
                  src="/bg-1@2x.png"
                />
                <div className="nh-v-nhn-hng-ngy-ca-bn-parent">
                  <h1 className="nh-v-nhn-container">
                    <p className="nh-v-nhn">Ở nhà và nhận hàng ngày của bạn</p>
                    <p className="nhu-cu-t">
                      nhu cầu từ cửa hàng của chúng tôi
                    </p>
                  </h1>
                  <div className="bt-u-mua">
                    Bắt đầu mua sắm hàng ngày của bạn với EZShop
                  </div>
                </div>
                <div className="frame-parent5">
                  <div className="rectangle-parent1">
                    <div className="frame-child1" />
                    <div className="a-ch-email1">Địa chỉ Email của bạn</div>
                  </div>
                  <div className="large-button-radius-612">
                    <div className="gi-ngay">Gửi ngay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Component3
        kINLOHydratingGoldenFacia="Áo tập gym thoáng mát Nike thấm hút mồ hôi"
        propBottom="unset"
        propTop="2449px"
        onLargeButtonRadius6ContainerClick={onLargeButtonRadius6ContainerClick}
      />
      <Component2
        greatValueUltraStrongPape="Khoác gió chống nắng thời trang Adidas"
        propBottom="unset"
        propTop="2449px"
      />
      <img className="arrows-1-icon10" alt="" src="/arrows1.svg" />
      <img className="arrows-1-icon11" alt="" src="/arrows1-1.svg" />
      <div className="footer-wrapper">
        <FOOTER />
      </div>
      <div className="header-7-wrapper">
        <HEADER />
      </div>
    </div>
  );
};

export default HomPage;
