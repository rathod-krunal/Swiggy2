import React, { useEffect, useState } from "react";
import { Whats_On_Your_Mind } from "../DataBase/DB";
import WhatsInMindCard from "./WhatsInMindCard";
import WhatsInMindSimer from "../SimerUI/WhatsInMindSimer";

function WhatInMind() {
  const [whatsInMind, setWhatsInMind] = useState(null);

  useEffect(() => {
    setWhatsInMind(Whats_On_Your_Mind.info);
  }, []);
  if (whatsInMind === null) return <h1>Loading</h1>;

  return (
    <div className="whatsinmindmain">
      <h2>What's On Your Mind?</h2>
      <div className="whatinmindmap">
        {" "}
        {whatsInMind.map((list) => {
          return <WhatsInMindCard key={list.id} listData={list} />;
        })}{" "}
      </div>
    </div>
  );
}

export default WhatInMind;
