import React from "react";
import { Range, getTrackBackground } from "react-range";
const MIN = 0;
const MAX = 100;
const SeekBar = ({
  min = MIN,
  max = MAX,
  inputValue = [],
  className = "",
  trackClassName = "",
  thumbClassName = "",
  thumbChildren = "",
  trackColors,
  trackBackground = {},
  ...otherProps
}) => {
  const [values, setValues] = React.useState(inputValue || []);
  const renderSeekBarThumb = ({ props, isDragged }) => {
    return (
      <div {...props} className={thumbClassName}>
        {thumbChildren}
      </div>
    );
  };
  const renderSeekBarTrack = ({ props, children }) => {
    return (
      <div className={className} style={{ ...props.style }}>
        <div
          ref={props.ref}
          className={trackClassName}
          style={{
            background: getTrackBackground({
              values: values,
              colors: trackColors,
              min,
              max,
              ...trackBackground,
            }),
            alignSelf: "center",
          }}
        >
          {children}
        </div>
      </div>
    );
  };
  return (
    <>
      <Range
        values={values}
        min={min}
        max={max}
        onChange={(v) => setValues(v)}
        renderThumb={renderSeekBarThumb}
        renderTrack={renderSeekBarTrack}
        {...otherProps}
      />
    </>
  );
};
export { SeekBar };
