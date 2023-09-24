import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TOP_RESTRO_CHAIN } from "../Utils/Constance";
import { DLT } from "../redux/actions/action";
import { useDispatch } from "react-redux";

function Cart() {
  const getData = useSelector((state) => state.cartreducer.carts);
const dispatch = useDispatch()
const Remove = (id) =>{
  dispatch(DLT(id))
}
  return (
    
    <div className="CartDivMain">
      <h1> CartItems </h1>
      {getData.map((cart) => {
        return (
          <div className="CartItems" key={cart.id}>
            <div className="cartImage">
              <img src={TOP_RESTRO_CHAIN + cart.imageId} alt="" />
            </div>
            <div className="cartDetails">
              <span> {cart.name} </span>
              <span> {cart.price / 100 || cart.defaultPrice/100} </span>
              <span>{cart.itemAttribute.vegClassifier}</span>
              <span> {cart.ratings.aggregatedRating.rating} </span>
              <button className="button-30" role="button" onClick={()=> Remove(cart.id)} > Remove </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
