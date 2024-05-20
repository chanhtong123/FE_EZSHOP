import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./bottom1.css";

const Bottom1 = () => {
  const navigate = useNavigate();

  const onSnPhmText1Click = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const onLinHText1Click = useCallback(() => {
    // Please sync "Liên hệ" to the project
  }, []);

  const onBiVitText1Click = useCallback(() => {
    // Please sync "Bài viết" to the project
  }, []);

  return (
    <div className="bottom6">
      <div className="footer-background3" />
      <div className="footer-inner-wrapper">
        <div className="footer-inner">
          <div className="footer-content1">
            <div className="categories11">
              <div className="category-background" />
              <div className="frame-parent22">
                <div className="icon-backgrounds-wrapper">
                  <div className="icon-backgrounds">
                    <div className="icon-backgrounds-child" />
                    <div className="icon-backgrounds-item" />
                    <div className="icon-backgrounds-inner" />
                  </div>
                </div>
                <div className="danh-mc-frame">
                  <div className="danh-mc8">Danh mục</div>
                </div>
                <div className="vector-wrapper29">
                  <img className="vector-icon36" alt="" />
                </div>
              </div>
            </div>
            <div className="promo-links">
              <div className="nav3">
                <div className="link-containers">
                  <div className="trang-ch5">Trang chủ</div>
                  <div className="vector-wrapper30">
                    <img className="vector-icon37" alt="" />
                  </div>
                </div>
                <div className="link-containers1">
                  <div className="sn-phm9" onClick={onSnPhmText1Click}>
                    Sản phẩm
                  </div>
                  <div className="vector-wrapper31">
                    <img className="vector-icon38" alt="" />
                  </div>
                </div>
                <div className="link-containers2">
                  <div className="lin-h3" onClick={onLinHText1Click}>
                    Liên hệ
                  </div>
                  <div className="vector-wrapper32">
                    <img className="vector-icon39" alt="" />
                  </div>
                </div>
                <div className="link-containers3">
                  <div className="bi-vit3" onClick={onBiVitText1Click}>
                    Bài viết
                  </div>
                  <div className="vector-wrapper33">
                    <img className="vector-icon40" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <div className="right-nav4">
              <div className="u-i-trong3">
                Ưu đãi trong ngày Ưu đãi hấp dẫn Bán chạy nhất Hàng mới về
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom1;
