import { useState, useEffect, useCallback } from "react";
import useWindowDimensions from "./useWindowDimensions";
import store from "../../../rematch/store";

//Takes an original node of node

const { dispatch } = store;

const useDrag = (node, environment) => {
  const [state, setState] = useState({
    isDragging: false,
    node,
  });

  const { height, width } = useWindowDimensions();

  const handleMouseDown = useCallback(
    ({ clientX, clientY }) => {
      dispatch[environment].changeNodeCoordinates({
        x: (clientX / width) * 100,
        y: (clientY / height) * 100,
        pointType: node.pointType,
        index: node.i,
      });
      setState((state) => ({
        ...state,
        isDragging: true,
      }));
    },
    [height, width, environment]
  );

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      dispatch[environment].changeNodeCoordinates({
        x: (clientX / width) * 100,
        y: (clientY / height) * 100,
        pointType: node.pointType,
        index: node.i,
      });
    },
    [height, width, environment]
  );

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
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  return {
    x: state.node.x,
    y: state.node.y,
    handleMouseDown,
  };
};

export default useDrag;
