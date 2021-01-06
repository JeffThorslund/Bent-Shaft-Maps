function buildPath({ points, closePath }) {
  let d = "";

  points.forEach((p, i, a) => {
    if (i === 0) {
      // first point
      d += `M ${p.x} ${p.y} `;
    } else if (p.z) {
      // cubic
      d += `C ${p.c[0].x} ${p.c[0].y} ${p.c[1].x} ${p.c[1].y} ${a[0].x} ${a[0].y} `;
    } else if (p.c) {
      // cubic
      d += `C ${p.c[0].x} ${p.c[0].y} ${p.c[1].x} ${p.c[1].y} ${p.x} ${p.y} `;
    } else {
      d += `L ${p.x} ${p.y} `;
    }

    // d += ${p.x} ${p.y} ;
  });

  if (closePath) d += "Z";

  return d;
}

export default buildPath;
