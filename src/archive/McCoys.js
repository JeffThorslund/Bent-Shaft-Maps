import React from "react";
import "./McCoys.css";
import Hydraulic from "../components/Hydraulic";
import Rapid from "./McCoys.png";
import WaterLevel from '../components/WaterLevel'

export default function TestRapid() {
  return (
    <div>
      <img src={Rapid} alt="a test rapid" id="background" />

      <div id='gauge'> 
        <WaterLevel />
      </div>

      <div id="high-water">
        <Hydraulic level='high' name="phils-hole" />
        <Hydraulic level='high' name="sattlers" />
        <Hydraulic level='high' name="baby-face" />
      </div>

      <div id="medium-water">
        <Hydraulic level='medium' name="phils-hole" />
        <Hydraulic level='medium' name="sattlers" />
        <Hydraulic level='medium' name="baby-face" />
      </div>

      <div id="low-water">
        <Hydraulic level='low' name="phils-hole" />
        <Hydraulic level='low' name="sattlers" />
        <Hydraulic level='low' name="baby-face" />
      </div>


    </div>
  );
}
