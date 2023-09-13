import React from 'react'
import { useParams } from 'react-router-dom'
import useRestroMenu from '../Utils/useRestroMenu';
import { WHATS_IN_MIND } from '../Utils/Constance';

const RestroCategories =()=> {
    const {resId} = useParams();
    const resInfo = useRestroMenu(resId)



    if (resInfo == null) return <h1>Loading</h1>;

    console.log(resInfo)
const {name, cloudinaryImageId,cuisines,areaName,avgRating,totalRatingsString,costForTwo} = resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className='restroCategoriesmain'>
      {name}
      <img src= {WHATS_IN_MIND  + cloudinaryImageId} alt="" />
    </div>
  )
}

export default RestroCategories