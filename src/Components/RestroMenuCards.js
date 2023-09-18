import React from 'react'
import MenuDrop from './MenuDrop';

function RestroMenuCards(props) {
    const {RestroMenu} = props;
    // console.log(RestroMenu)
    return (
        <div className="RestroMenuCarausalDiv">
          <div className="RestroMenuCarausalInnerDiv" >
            <span className="RestroMenuCarausalInnerSpan">
              {RestroMenu?.card?.card?.title} ({RestroMenu?.card?.card?.itemCards?.length}){" "}
            </span>
            <span> v </span>
          </div>
          <div className="RestroMenuDropDiv"> 
          <MenuDrop items={RestroMenu?.card?.card.itemCards } />
          </div>
        </div>
      );
}

export default RestroMenuCards

// RestroMenu
//