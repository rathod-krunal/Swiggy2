import React from "react";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { MENU_OFFERS_LOGO } from "../Utils/Constance";
import RestroMenuCards from "./RestroMenuCards";

const RestroCategories = () => {
  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);
  // console.log(resInfo)
  if (resInfo == null) return <h1>Loading</h1>;
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwo,
  } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { offers } =
    resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["title"]
    );
  //  console.log(categories)
  return (
    <div className="restroCategoriesmain">
      <div className="restroInnerDiv">
        <div className="restroDetailsdiv">
          <div className="restroName">{name}</div>
          <div className="restroCuisines">{cuisines}</div>
          <div className="restroArea">{areaName}</div>
        </div>
        <div className="restroRatings">
          <div className="starRating">
            <AiFillStar className="starOfStarRating" />
            {avgRating}
          </div>
          <div className="hr2"></div>
          <div className="totalRating">{totalRatingsString}</div>
        </div>
      </div>
      <div className="restroPriceDiv">
        {" "}
        <BsCurrencyRupee className="rupeesIcon" />
        {costForTwo / 100} For Two
      </div>
      <div className="offersdiv">
        {offers.map((offer) => {
          return (
            <div className="offers" key={offer.info.header}>
              <div className="topOffer">
                {" "}
                <img src={MENU_OFFERS_LOGO + offer.info.offerLogo} alt="" />
                {offer.info.header}{" "}
              </div>
              <div className="bottomOffer">
                <span> {offer.info.couponCode} </span>
                <span>{offer.info.description}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="MenuCarausals">
        {categories.map((categorie) => {
          return (
            <RestroMenuCards
              key={categorie?.card?.card?.title}
              RestroMenu={categorie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestroCategories;
