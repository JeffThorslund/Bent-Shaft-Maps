import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/Rapid.css";
import NextRapid from "./NextRapid";
import Features from "./Features";
import Image from "react-bootstrap/Image"
import findRapidFromId from "../../tools/findRapidFromId";
import { Preload } from "react-preload";
import Loading from "../general/Loading";
import RapidHeader from "./RapidHeader"

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
      <Image className="basemap" src={`/api/image/${data.riverMap}`} alt="River Map" />
        <Features level={level} data={data} />
       <RapidHeader name={data.name} description={data.desc} level = {level}/>

        
        
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
