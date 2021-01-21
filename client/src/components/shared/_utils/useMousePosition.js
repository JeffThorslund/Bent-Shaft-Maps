import { useState, useEffect } from 'react';
import { useWindowDimensions } from '.';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const { height, width } = useWindowDimensions();

  const updateMousePosition = (ev) => {
    setMousePosition({
      x: (ev.clientX / width) * 100,
      y: (ev.clientY / height) * 100,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  });

  return mousePosition;
};

export default useMousePosition;
