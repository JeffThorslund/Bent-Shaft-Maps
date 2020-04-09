// Dont work on this, its mostly shit.

import React, { useState } from 'react';
import './NextRapid.css';

const NextRapid = (props) => {
  const globalAngle = (rotation) => {
    const rot = Number(
      rotation
        .split('')
        .filter((x) => {
          if (/[^deg]/.test(x)) {
            return x;
          } return null;
        })
        .join(''),
    );
    return rot;
  };

  const global = globalAngle(props.rotation);

  const [style, setStyle] = useState({
    bottom: props.bottom,
    right: props.right,
    opacity: '70%',
  });

  const [leftSpine, setLeftSpine] = useState({
    transform: `rotate(${38.66 + global}deg)`,
  });

  const [rightSpine, setRightSpine] = useState({
    transform: `rotate(${-38.66 + global}deg)`,
  });

  const [fade, setFade] = useState({
    opacity: '0%',
  });

  const handleMouseEnter = () => {
    setStyle({
      bottom: props.bottom,
      right: props.right,
      opacity: '100%',
      transition: '0.2s',
    });

    setLeftSpine({
      transform: `rotate(${90}deg)`,
      transition: '0.3s',
    });

    setRightSpine({
      transform: `rotate(${-90}deg)`,
      transition: '0.3s',
    });

    setFade({
      opacity: '100%',
      transition: '0.4',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      bottom: props.bottom,
      right: props.right,
      opacity: '70%',
      transition: '0.2s',
    });

    setLeftSpine({
      transform: `rotate(${38.66 + global}deg)`,
      transition: '0.2s',
    });
    setRightSpine({
      transform: `rotate(${-38.66 + global}deg)`,
      transition: '0.2s',
    });


    setFade({
      opacity: '0%',
      transition: '0.4',
    });
  };

  return (
    <div
      className="NextRapid"
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="rapid-name" style={fade}>{props.name}</div>
      <svg
        viewBox="-7 -8 15 15"
        onClick={(e) => {
          props.selectRapid(e.currentTarget.id);
          alert('Soon. my friend.');
        }}
        id={props.name}
      >
        <polyline id="left" style={leftSpine} points="0,0 0,6" />
        <polyline id="right" style={rightSpine} points="0,0 0,6" />
      </svg>
    </div>
  );
};

export default NextRapid;

// Make arrow flatten and show next rapid name.
