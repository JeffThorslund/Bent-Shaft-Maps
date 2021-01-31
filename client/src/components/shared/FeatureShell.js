import React from 'react';
// UTILS
import { useKeyPress, useMousePosition } from './_utils';

const FeatureShell = ({ setDraggedFeature, removeFeature, children }) => {
  const isCtrlPressed = useKeyPress('Control');
  const coords = useMousePosition();

  return (
    <g
      className={isCtrlPressed ? 'remove' : 'draggable'}
      onMouseDown={() => {
        if (isCtrlPressed) {
          removeFeature();
        } else {
          setDraggedFeature(coords);
        }
      }}
    >
      {children}
    </g>
  );
};

export default FeatureShell;
