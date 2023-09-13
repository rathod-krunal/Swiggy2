import React from "react";
import { FIRST_CAROUSAL, SECONT_CAROUSAL } from "../Utils/Constance";
import WhatInMind from "./WhatInMind";
import TopRestroChain from "./TopRestroChain";



function Body() {
  return (
    <div className="body">
      <div className="first-carousals">
        <h2>Best offers For Your</h2>
        <div className="first-carausal-img-div">
          <img src={FIRST_CAROUSAL} alt="Time For Breackfast!" />
          <img src={SECONT_CAROUSAL} alt="Bambai Meri Jaan" />
        </div>
      </div>
      <WhatInMind/>
      <div className="hr"></div>
      <TopRestroChain/>
    </div>
  );
}

export default Body;
