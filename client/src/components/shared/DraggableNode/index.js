import React, { useState, useEffect, useCallback, useMemo } from "react";

const DraggableNode = ({
  onDrag = () => {},
  onDragEnd = () => {},
  children,
  id = 1234,
}) => {
  const POSITION = { x: 100, y: 100 };

  const [state, setState] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
  });

  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState((state) => ({
      ...state,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const translation = {
        x: clientX - state.origin.x,
        y: clientY - state.origin.y,
      };

      setState((state) => ({
        ...state,
        translation,
      }));
    },
    [state.origin, id]
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

      setState((state) => ({ ...state, translation: { x: 0, y: 0 } }));
    }
  }, [state.isDragging, handleMouseMove]);


  const styles = useMemo(() => ({
    cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
    transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
    transition: state.isDragging ? 'none' : 'transform 500ms',
    zIndex: state.isDragging ? 2 : 1,
    position: state.isDragging ? 'absolute' : 'relative'
  }), [state.isDragging, state.translation]);

  return (
    <circle
      cx={state.translation.x}
      cy={state.translation.y}
      r="50"
      stroke="black"
      stroke-width="3"
      fill="red"
      onMouseDown={handleMouseDown}
      style={styles}
    />
  );
};

export default DraggableNode;
