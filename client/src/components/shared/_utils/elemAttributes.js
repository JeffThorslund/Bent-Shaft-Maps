const textAttributes = (flag, x, y) => ({
  visibility: flag ? 'visible' : 'hidden',
  textAnchor: 'middle',
  strokeWidth: '0.01',
  fontSize: '1px',
  stroke: 'white',
  fill: 'white',
  x,
  y,
});

const circleAttributes = (x, y, className, callback) => ({
  className,
  onMouseDown: callback,
  r: 1,
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
