import React from "react";
import { INNER_MENU_IMG } from "../Utils/Constance";


function MenuDrop({ items }) {
  if (items === null) return <h2>Loading</h2>;
  return (
    <div className="itemsDiv">
      {items.map((item, index) => {
        return (
          <div key={index} className="InnerMenuMainDiv">
            <div className="InnerMenuDivDetails">
              <p>{item.card.info.name}</p>
              <p>{item.card.info.price / 100}</p>
              <p>{item.card.info.description}</p>
            </div>
            <div className="InnerMenuDivImg">
              <img src={INNER_MENU_IMG + item.card.info.imageId} alt="" />
              <button>Add</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuDrop;

// || RestroMenu?.card?.card?.categories