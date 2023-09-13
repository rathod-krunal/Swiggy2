import React from 'react'
import { LOGO_URL } from '../Utils/Constance'
import {AiOutlineDown} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {CiDiscount1} from "react-icons/ci"
import {IoHelpBuoyOutline} from "react-icons/io5"
import {AiOutlineUser} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"


function Header() {
  return (
   <div className="nav">
    <div className="left-nav">
        <div className="logo-div">
            <img src={LOGO_URL} alt="" />
        </div>
        <div className="addresh-div">
            <span>Other</span>
            <p> Ahmedabad,Gujrat,India <AiOutlineDown className='down-arrow'/> </p>
        </div>
    </div>
    <div className="right-nav">
        <div className="search"> <BiSearch/> <span>search</span></div>
        <div className="search"> <CiDiscount1/> <span>Offers</span></div>
        <div className="search"> <IoHelpBuoyOutline/> <span>Help</span></div>
        <div className="search"> <AiOutlineUser/> <span>Sign in</span></div>
        <div className="search"> <HiOutlineShoppingBag/> <span>Cart</span></div>

    </div>
   </div>
  )
}

export default Header
