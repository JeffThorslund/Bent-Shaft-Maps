import React from "react";
import ReactTooltip from "react-tooltip";
import "../../stylesheets/Popover.css";

function Popover() {
  return (
    <ReactTooltip
      id="svgTooltip"
      globalEventOff="click"
      multiline={true}
      backgroundColor="white"
      textColor="black"
      arrowColor="black"
      getContent={(dataTip) => {
        if (dataTip != null) return dataTip;
      }}
      html={true}
      overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
        const d = document.documentElement;
        left = Math.min(d.clientWidth - node.clientWidth, left);
        top = Math.min(d.clientHeight - node.clientHeight, top);
        left = Math.max(0, left);
        top = Math.max(0, top);
        return { top, left };
      }}
    />
  );
}

export default Popover;
