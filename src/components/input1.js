import { useMemo } from "react";
import "./input1.css";

const Input = ({ input, propDisplay, propMinWidth }) => {
  const input2Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="input8">
      <div className="input9" style={input2Style}>
        {input}
      </div>
      <div className="info37">
        <div className="your-name5">Your Name</div>
      </div>
      <div className="input-child3" />
    </div>
  );
};

export default Input;
