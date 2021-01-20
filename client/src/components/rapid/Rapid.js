import React from 'react';

import Image from 'react-bootstrap/Image';

import NextRapid from './NextRapid';
import Features from '../shared/Features';
import RapidHeader from './RapidHeader';
import store from '../../rematch/store';

/**
 * The Rapid container that holds all components related to an individual rapid
 */

const Rapid = ({ riverId, sectionId, rapid, section, level }) => {
  const { dispatch } = store;

  const arrowArray = rapid.arrows.map((arrow, key) => (
    <NextRapid
      linkId={arrow.linkId}
      bottom={arrow.bottom}
      right={arrow.right}
      key={`arrow${key}`}
      section={section}
    />
  ));

  return (
    <div className="Rapid">
      <Image
        className="basemap"
        src={`https://bent-shaft-maps.s3.amazonaws.com/maps/${riverId}/${sectionId}/${rapid.id}.jpg`}
        alt="River Map"
      />
      <Features
        level={level}
        rapid={rapid}
        reducers={dispatch.testEnvironment}
        areHandlesVisible={false}
        areLinesVisible={false}
        areEddysVisible={false}
      />
      <RapidHeader name={rapid.name} description={rapid.desc} />
      <div id="arrow-array"> {arrowArray} </div>
    </div>
  );
};

export default Rapid;
