import { useMemo } from "react";
import "./frame-component1.css";

const FrameComponent1 = ({
  apple,
  asus,
  acer,
  dell,
  lenovo,
  propWidth,
  propAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="frame-parent24">
      <div className="frame-parent25" style={frameDiv1Style}>
        <div className="frame-parent26" style={frameDiv2Style}>
          <div className="frame-wrapper8">
            <div className="checkbox-group">
              <div className="checkbox5">
                <div className="checkbox-child3" />
              </div>
              <div className="checkbox6">
                <div className="checkbox-child4" />
                <img className="check-1-11" alt="" src="/check-1-1.svg" />
              </div>
              <div className="checkbox7">
                <div className="checkbox-child5" />
              </div>
              <div className="checkbox8">
                <div className="checkbox-child6" />
              </div>
              <div className="checkbox9">
                <div className="checkbox-child7" />
              </div>
            </div>
          </div>
          <div className="apple-asus-acer-container">
            <p className="apple1">{apple}</p>
            <p className="asus">{asus}</p>
            <p className="acer">{acer}</p>
            <p className="dell">{dell}</p>
            <p className="lenovo">{lenovo}</p>
          </div>
        </div>
        <div className="button-line5">
          <div className="view-all5">Xem tất cả</div>
          <div className="button-line-child3" />
        </div>
      </div>
      <div className="div189">
        <p className="p15">87</p>
        <p className="p16">92</p>
        <p className="p17">123</p>
        <p className="p18">49</p>
        <p className="p19">12</p>
      </div>
    </div>
  );
};

export default FrameComponent1;
