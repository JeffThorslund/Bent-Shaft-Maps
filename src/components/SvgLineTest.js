import * as React from "react";

function SvgLineTest(props) {
  return (
    <svg width="100vw" height="100vh" viewBox="0 0 100 100" fill="none" {...props}>
      <path
        d="M-30 45q30 4 50 1 13-2 25-2.5 40-1 55 9t20 30"
        stroke="#000"
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgLineTest;