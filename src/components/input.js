import { useMemo } from "react";
import "./input.css";

const Input = ({
  input,
  yourName,
  inputLeft,
  inputTop,
  inputMinWidth,
  yourNameMinWidth,
  yourNameDisplay,
}) => {
  const inputStyle = useMemo(() => {
    return {
      left: inputLeft,
      top: inputTop,
    };
  }, [inputLeft, inputTop]);

  const input1Style = useMemo(() => {
    return {
      minWidth: inputMinWidth,
    };
  }, [inputMinWidth]);

  const yourNameStyle = useMemo(() => {
    return {
      minWidth: yourNameMinWidth,
      display: yourNameDisplay,
    };
  }, [yourNameMinWidth, yourNameDisplay]);

  return (
    <div className="input6" style={inputStyle}>
      <div className="input-child2" />
      <div className="input7" style={input1Style}>
        {input}
      </div>
      <div className="info-wrapper14">
        <div className="info36">
          <div className="your-name4" style={yourNameStyle}>
            {yourName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
