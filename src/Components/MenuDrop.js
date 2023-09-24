import React from "react";
import { INNER_MENU_IMG } from "../Utils/Constance";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

function MenuDrop({ items }) {
  
  const dispatch = useDispatch();
  if (items === undefined) return <h2>Loading</h2>;

  const send = (item) =>{
    dispatch(ADD(item))
  }
  return (
    <div className="itemsDiv">
      {items.map((item, index) => {
        return (
          <div key={index} className="InnerMenuMainDiv">
            <div className="InnerMenuDivDetails">
              <p>{item.card.info.name}</p>
              <p>{item.card.info.price / 100 ||item.card.info.defaultPrice / 100 }</p>
              <p>{item.card.info.description}</p>
            </div>
            <div className="InnerMenuDivImg">
              <img src={INNER_MENU_IMG + item.card.info.imageId} alt="" />
              <button onClick={()=> send(item.card.info)}   >Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuDrop;