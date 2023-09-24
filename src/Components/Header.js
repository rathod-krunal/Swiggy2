import React from "react";
import { LOGO_URL } from "../Utils/Constance";
import { AiOutlineDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";

function Header() {
  const getData = useSelector((state) => state.cartreducer.carts);
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
            <Link to={"/cart"}> <span style={{position:"absolute", top: "10px", zIndex:"5", background:'transparent', marginLeft:"10px"}} > {getData.length} </span>   <HiOutlineShoppingBag /> <span>Cart</span> </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
