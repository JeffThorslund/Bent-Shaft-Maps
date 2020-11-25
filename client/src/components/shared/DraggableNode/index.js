import React, { useState, useEffect, useCallback, useMemo } from "react";
import useDrag from "./_utils/useDrag";

const DraggableNode = ({
  onDrag = () => {},
  onDragEnd = () => {},
  children,
  id = 1234,
}) => {
  const POSITION = { x: 100, y: 100 };

  const [state, setState] = useState({
    isDragging: false,
    position: POSITION
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    console.log({ x: clientX, y: clientY });

    setState((state) => ({
      ...state,
      isDragging: true,
      position: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const position = {
        x: clientX,
        y: clientY,
      };

      setState((state) => ({
        ...state,
        position,
      }));
    },
    []
  );

  const handleMouseUp = useCallback(() => {
    setState((state) => ({
      ...state,
      isDragging: false,
    }));

    onDragEnd();
  }, [onDragEnd]);

  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  }, [state.isDragging, handleMouseMove]);


  console.log(useDrag())

  return (
    <circle
      cx={state.position.x}
      cy={state.position.y}
      r="50"
      stroke="black"
      stroke-width="3"
      fill="red"
      onMouseDown={handleMouseDown}
    />
  );
};

export default DraggableNode;
