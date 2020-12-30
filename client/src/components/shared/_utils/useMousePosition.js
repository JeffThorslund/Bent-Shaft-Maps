import { useState, useEffect } from "react";
import { useWindowDimensions } from "../_utils";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const { height, width } = useWindowDimensions();

  //console.log(height, width);

  const updateMousePosition = (ev) => {
    setMousePosition({
      x: (ev.clientX / width) * 100,
      y: (ev.clientY / height) * 100,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  //console.log(mousePosition);
  return mousePosition;
};

export default useMousePosition;
