import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/Rapid.css";
import NextRapid from "./NextRapid";
import Features from "./Features";
import Basemap from "./Basemap";
import Description from "./Description";
import findRapidFromId from "../../tools/findRapidFromId";
import { Preload } from "react-preload";
import Loading from "../general/Loading";
const ImageCache = require("react-preload").ImageCache;

const Rapid = ({ data, allData, url, level }) => {
  // render array of "next rapid arrows" based on selected water level (App state)
  const arrowArray = data.arrows.map((element, key) => (
    <NextRapid
      arrows={element}
      url={url}
      key={`arrow${key}`}
      allData={allData}
    />
  ));

  //cache adjacent rapids
  data.arrows.forEach((arrow) => {
    let riverMap = findRapidFromId(arrow.linkId, allData).riverMap;
    ImageCache.add(`/api/image/${riverMap}`);
  });

  return (
    <Preload
      loadingIndicator={<Loading />}
      images={[`/api/image/${data.riverMap}`]}
      autoResolveDelay={10000}
      onError={() => alert("preload error")}
      onSuccess={() => console.log("preload success")}
      resolveOnError={true}
      mountChildren={true}
    >
      <div className="Rapid">
        <Basemap riverMap={data.riverMap} />
        <div className="rapid-header">
          <div id="rapid-name"> {data.name} </div>
          <div id="rapid-desc">
            <Description level={level} desc={data.desc} />
          </div>
        </div>

        <div id="level-display">
          <div id="feet">
            {level} {allData.level.levelUnits}
          </div>
        </div>
        <Features level={level} data={data} />
        <div id="arrow-array"> {arrowArray} </div>
      </div>
    </Preload>
  );
};

export default Rapid;

Rapid.propTypes = {
  data: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
};
