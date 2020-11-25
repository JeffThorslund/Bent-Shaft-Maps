import React, { useState, useEffect, useCallback, useMemo } from "react";

//Takes an original position of node

const useDrag = (position) => {
  const [state, setState] = useState({
    isDragging: false,
    position,
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    console.log({ x: clientX, y: clientY });

    setState((state) => ({
      ...state,
      isDragging: true,
      position: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = useCallback(({ clientX, clientY }) => {
    const position = {
      x: clientX,
      y: clientY,
    };

    setState((state) => ({
      ...state,
      position,
    }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setState((state) => ({
      ...state,
      isDragging: false,
    }));
  }, []);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  }, [state.isDragging, handleMouseMove]);

  return {
    x: state.position.x,
    y: state.position.y,
    handleMouseDown,
  };
};

export default useDrag;
