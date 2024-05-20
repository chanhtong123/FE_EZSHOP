import { useMemo } from "react";
import "./input11.css";

const Input1 = ({
  input,
  yourName,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const input3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const yourName1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className="input13">
      <div className="input-child5" />
      <div className="input14" style={input3Style}>
        {input}
      </div>
      <div className="info-wrapper15">
        <div className="info40">
          <div className="your-name8" style={yourName1Style}>
            {yourName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input1;
