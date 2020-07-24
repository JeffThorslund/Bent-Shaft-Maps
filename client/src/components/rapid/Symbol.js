import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/Symbol.css";
const Symbol = (props) => {
  const { type, desc, top, left } = props.symbols;

  const symbolOptions = [
    {
      type: "Portage",
      path: (
        <path
          data-tip
          data-tip={`<div>
          <div class="name">${type}</div>
          <div class="desc">${desc}</div>
        </div>`}
          data-for="svgTooltip"
          data-event="click"
          d="M63.5292 189.003C36.8376 151.68 50.9991 85.0008 104.565 93.39C206.159 110.935 418.048 185.517 513.975 269.398C540.37 292.48 503.423 341.288 463.782 343.749C464.385 317.347 446.747 302.873 428.893 290.509C405.834 276.61 353.726 246.62 327.234 236.153C332.735 265.882 340.373 298.647 339.945 328.376L336.537 336.4C337.44 350.742 338.052 362.636 326.214 368.499C326.801 392.346 327.819 415.648 323.827 435.734C336.289 452.813 341.463 469.228 347.004 490.624C351.59 495.736 354.485 501.273 355.553 507.264L345.23 514.922L343.965 513.781C340.379 519.498 336.085 521.791 332.499 524.006L311.05 524.006C310.6 516.514 323.009 517.198 327.862 496.347C317.599 482.269 308.853 471.672 301.828 453.555C298.751 447.91 295.664 443.964 292.586 435.123L288.628 405.165C283.935 411.225 279.337 419.603 273.796 422.274C284.957 448.02 276.006 470.005 274.448 493.373C275.214 502.92 276.745 514.46 275.775 524.006L227.709 524.007C225.775 520.324 227.991 514.595 229.933 513.965C231.908 513.324 233.868 513.322 235.503 512.947C244.919 510.783 247.577 506.96 251.968 496.307C254.22 474.078 249.481 455.341 248.234 434.859C245.318 430.129 242.944 424.322 242.644 414.369C250.087 386.43 265.825 361.6 279.939 336.158C270.277 328.559 270.7 318.485 269.636 310.027L266.331 261.125C257.501 263.148 251.108 268.303 244.072 265.178C227.469 258.629 239.227 223.817 238.461 203.954C216.492 195.966 158.104 169.468 131.546 165.03C101.555 160.018 76.7499 152.942 63.5292 189.003Z"
          data-html={true}
        />
      ),
    },
  ];

  let index;
  for (let i = 0; i < symbolOptions.length; i++) {
    if (symbolOptions[i].type === type) {
      index = i;
      break;
    }
  }
  const symbol = symbolOptions[index].path;

  return (
    <>
      <g
        id={type}
        className="symbol"
        onClick={() => {
          props.displayData(type, desc);
        }}
        transform={`translate(${left},${top}) scale(-0.10 0.12)`}
      >
        {symbol}
      </g>
    </>
  );
};

export default Symbol;

Symbol.propTypes = {
  symbols: PropTypes.exact({
    type: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  displayData: PropTypes.func.isRequired,
};
