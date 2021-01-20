import React from 'react';
import ReactTooltip from 'react-tooltip';

/** A pop up text component that provides a name and information about a feature */

const Popover = () => (
  <ReactTooltip
    id="svgTooltip"
    className="popover"
    globalEventOff="click"
    multiline
    backgroundColor="white"
    textColor="black"
    arrowColor="black"
    getContent={(dataTip) => {
      if (dataTip != null) return dataTip;
    }}
    html
    overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
      const d = document.documentElement;
      return {
        top: Math.max(0, Math.min(d.clientWidth - node.clientWidth, left)),
        left: Math.max(0, Math.min(d.clientHeight - node.clientHeight, top)),
      };
    }}
  />
);

export default Popover;
