import { useState, useEffect, useCallback } from "react";
import useWindowDimensions from "./useWindowDimensions";
import store from "../../../../rematch/store";

//Takes an original position of node

const { dispatch } = store;

const useDrag = (position, index, isTestEnv, isEndpointNode) => {
  const [state, setState] = useState({
    isDragging: false,
    position,
  });

  const { height, width } = useWindowDimensions();

  const dispatchLocation = isTestEnv ? "testEnvironment" : "data";

  const handleMouseDown = useCallback(
    ({ clientX, clientY }) => {
      dispatch[dispatchLocation].changeNodeCoordinates({
        x: (clientX / width) * 100,
        y: (clientY / height) * 100,
        index,
        isEndpointNode,
        isTestEnv: true,
      });
      setState((state) => ({
        ...state,
        isDragging: true,
      }));
    },
    [height, width, index, isEndpointNode, dispatchLocation]
  );

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      dispatch[dispatchLocation].changeNodeCoordinates({
        x: (clientX / width) * 100,
        y: (clientY / height) * 100,
        index,
        isEndpointNode,
        isTestEnv: true,
      });
    },
    [height, width, index, isEndpointNode, dispatchLocation]
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
    x: state.position.x,
    y: state.position.y,
    handleMouseDown,
  };
};

export default useDrag;
