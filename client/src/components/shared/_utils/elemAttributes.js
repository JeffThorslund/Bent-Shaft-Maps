const textAttributes = (flag, x, y) => ({
  style: { userSelect: 'none' },
  visibility: flag ? 'visible' : 'hidden',
  textAnchor: 'middle',
  strokeWidth: '0.01',
  fontSize: '1.5px',
  stroke: 'white',
  fill: 'white',
  x,
  y,
});

const circleAttributes = (x, y, r, className, callback) => ({
  className,
  onMouseDown: callback,
  r,
  cx: x,
  cy: y,
});

const lineAttributes = (className, x1, y1, x2, y2) => ({
  className,
  x1,
  y1,
  x2,
  y2,
});

exports.textAttributes = textAttributes;
exports.circleAttributes = circleAttributes;
exports.lineAttributes = lineAttributes;
