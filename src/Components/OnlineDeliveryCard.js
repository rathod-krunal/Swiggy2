import React from 'react'
import { TOP_RESTRO_CHAIN } from '../Utils/Constance';
import {AiFillStar} from "react-icons/ai"

function OnlineDeliveryCard(props) {
    const { RestroData } = props;
    const { cloudinaryImageId,name,avgRating,cuisines} = RestroData;
    return (
      <div className="TopRestroChainCard media" >
        <div className="topRestroChainImg">
            <img src= {TOP_RESTRO_CHAIN +cloudinaryImageId }  alt="" />
        </div>
        <div className="topRestroChainDetails">
            <div className="top-name-div">
                <span>{name}</span>
            </div>
            <div className="top-avg-div">
                <span> <AiFillStar className='rating-star'/> {avgRating}</span>
            </div>
            <div className="top-cuisines-div">
                <span>{cuisines.join(",")}</span>
            </div>
        </div>
      </div>
    )
}

export default OnlineDeliveryCard
