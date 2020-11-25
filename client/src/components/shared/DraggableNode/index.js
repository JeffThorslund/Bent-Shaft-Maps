import React, { useState, useEffect, useCallback, useMemo } from "react";
import useDrag from "./_utils/useDrag";

const DraggableNode = () => {
  
  const { x, y, handleMouseDown } = useDrag({ x: 100, y: 100 });

  return (
    <circle
      cx={x}
      cy={y}
      r="50"
      stroke="black"
      stroke-width="3"
      fill="red"
      onMouseDown={handleMouseDown}
    />
  );
};

export default DraggableNode;
