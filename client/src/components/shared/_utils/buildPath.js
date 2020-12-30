import React from "react";

function buildPath({ points, closePath }) {
  let d = "";

  points.forEach((p, i) => {
    if (i === 0) {
      // first point
      d += "M ";
    } else if (p.c) {
      // cubic
      d += `C ${p.c[0].x} ${p.c[0].y} ${p.c[1].x} ${p.c[1].y} `;
    } else {
      d += "L ";
    }

    d += `${p.x} ${p.y} `;
  });

  if (closePath) d += "Z";

  return d;
}

export default buildPath
