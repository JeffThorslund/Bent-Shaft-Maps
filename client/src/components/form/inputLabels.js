import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { HelpCircle } from "react-feather";

const tooltipDic = {
  river: {
    desc: "Add a description of the river.",
    info: "Add information about river access.",
    location: "City, Province/State",
    class:
      "The class of the river using roman numerals. eg. II, III, IV/V etc.",
    putIn: "A Google Maps link to the put in.",
    takeOut: "A Google Maps link to the take out.",
    defaultLevel:
      "The water level that the map will default load at. Choose the most common water level.",
    levelUnits: "The units of measurement for the water level.",
    levelMin: "The lowest water level seen on the river.",
    levelMax: "The highest water level seen on the river.",
  },
  rapid: {
    name: "The most common name of the rapid.",
    desc: "A short description of the rapid, or simply the class.",
    top:
      "The distance of the display from the top of the page. Uses a scale of 0 to 100",
    left:
      "The distance of the display from the left of the page. Uses a scale of 0 to 100",
    width: "The width of the display. Uses a scale of 0 to 100.",
    path:
      "The backround map of the rapid, chosen from the maps in the rivers 'map' directory",
    titleTop:
      "Used to position the tag on the overview map. The distance from the tag to the top of the map. Uses a scale of 0 to 100. ",
    titleLeft:
      "Used to position the tag on the overview map. The distance from the tag to the top of the map. Uses a scale of 0 to 100.",
    pointerDirection: "The direction of the pointer coming from the tag.",
    pointerCoordinates:
      "The location of the tip of the pointer. X and Y coordinates both use a scale of 0 to 100",
  },
  hydraulics: {
    name: "The name of the wave, hole, ledge, or waterfall.",
    desc:
      "Talk about safety, hazards and tips about the feature. Include information about behavior at different levels.",

    y: "The vertical position of the wave. Uses a scale of 0 to 900.",
    x: "The horizontal position of the wave. Uses a scale of 0 to 1600.",
    height:
      "The size of the wave from river left to river right. Uses a scale of 0 to 1600.",
    width:
      "The 'fatness' of the wave in the upstream to downstream direction. Uses a scale of 0 to 900.",
    rotation: "The rotation of the wave. Uses a scale of 0 to 360.",
    range: "The range of levels that the feature is 'in' at.",
  },
  eddys: {
    name: "The name of the eddy.",
    desc:
      "Talk about how to catch it, setting safety with it, if it has land access and any other general informatino about it. Include information about behavior at different levels.",
    vector: "The SVG path of the shape WITHOUT xml tags or properties. ",
    y: "The vertical position of the eddy. Uses a scale of 0 to 900.",
    x: "The horizontal position of the eddy. Uses a scale of 0 to 1600.",
    range: "The range of levels that the eddy is 'in' at.",
  },
  lines: {
    name: "The name of the line.",
    desc:
      "Talk about how to set up, markers to look for, potential hazards, and any general tips on how to style the line.",
    vector: "The SVG path of the line WITHOUT xml tags or properties. ",
    y: "The vertical position of the line. Uses a scale of 0 to 900.",
    x: "The horizontal position of the line. Uses a scale of 0 to 1600.",
    range: "The range of levels that the line is 'in' at.",
  },
  symbols: {
    type: "The type of symbol.",
    description: "Give all related information about why that symbol is there.",
    top:
      "The vertical position from the top of the map. Uses scale of 0 to 900.",
    left:
      "The horizontal position from the left of the map. Uses scale of 0 to 1600.",
  },
  arrows: {
    bottom:
      "The vertical position from the bottom of the map. Uses scale of 0 to 100.",
    right:
      "The horizontal position from the right of the map. Uses scale of 0 to 100.",
    linkId: "The rapid that this arrows connects to.",
  },
};

export const Tooltip = (props) => {
  const { elem, riverIndex, rapidIndex, featureType } = props;
  let tip = "";

  if (featureType !== null && tooltipDic[featureType].hasOwnProperty(elem)) {
    console.log("ok", featureType);
    tip = tooltipDic[featureType][elem];
  } else if (rapidIndex !== null && tooltipDic.rapid.hasOwnProperty(elem)) {
    tip = tooltipDic.rapid[elem];
  } else if (riverIndex !== null && tooltipDic.river.hasOwnProperty(elem)) {
    tip = tooltipDic.river[elem];
  } else {
    console.log("oops");
  }

  return (
    <Tippy content={tip}>
      <div className="tooltip">
        <HelpCircle size={18} />
      </div>
    </Tippy>
  );
};
