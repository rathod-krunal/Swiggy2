import React from "react";
import { WHATS_IN_MIND } from "../Utils/Constance";

function WhatsInMindCard(props) {
  const { listData } = props;
  const { imageId } = listData;
  return (
    <div className="whatinmindcard" >
      <img src={WHATS_IN_MIND + imageId} alt="" />
    </div>
  );
}

export default WhatsInMindCard;
