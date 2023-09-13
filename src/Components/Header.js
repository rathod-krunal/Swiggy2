import React from "react";
import { LOGO_URL } from "../Utils/Constance";
import { AiOutlineDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <div className="inner-nav">
        <div className="left-nav">
          <div className="logo-div">
            <Link to={"/"}>  <img src={LOGO_URL} alt="" />  </Link>
           
          </div>
          <div className="addresh-div">
            <span>Other</span>
            <p>
              {" "}
              Ahmedabad,Gujrat,India <AiOutlineDown className="down-arrow" />{" "}
            </p>
          </div>
        </div>
        <div className="right-nav">
          <div className="search">
            {" "}
            <BiSearch /> <span>search</span>
          </div>
          <div className="search">
            {" "}
            <Link to={"/offers"}>   <CiDiscount1 /> <span>Offers</span> </Link>
           
          </div>
          <div className="search">
            {" "}
            <Link to={"/help"}>   <IoHelpBuoyOutline /> <span>Help</span> </Link>
          
          </div>
          <div className="search">
            {" "}
            <Link to={"/signin"}> <AiOutlineUser /> <span>Sign in</span>  </Link>
            
          </div>
          <div className="search">
            {" "}
            <Link to={"/cart"}>   <HiOutlineShoppingBag /> <span>Cart</span> </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
