import React from "react";
import ReactTooltip from "react-tooltip";
import "./Popover.css";

function Popover() {
  return (
    <ReactTooltip
      id="svgTooltip"
      globalEventOff="click"
      multiline={true}
      backgroundColor="white"
      textColor="black"
      arrowColor='black'
      getContent={(dataTip) => {
        if (dataTip != null) {
          let arr = dataTip.split(",");
          let name = arr[0];
          let desc = arr[1];
          return (
            <div>
              <div className="name">
                <b>{name}</b>
              </div>

              <div className="desc"> {desc} </div>
            </div>
          );
        }
      }}
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
