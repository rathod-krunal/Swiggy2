import React from 'react'

function RestroMenuCards(props) {
    const {RestroMenu} = props
    // console.log(RestroMenu)
    return (
        <div className="RestroMenuCarausalDiv">
          <div className="RestroMenuCarausalInnerDiv" >
            <span className="RestroMenuCarausalInnerSpan">
              {RestroMenu?.card?.card?.title} ({RestroMenu?.card?.card?.itemCards?.length}){" "}
            </span>
            <span> v </span>
          </div>
    
         {/* { showItems && <ItemList items={data.itemCards} />} */}
        </div>
      );
}

export default RestroMenuCards

// RestroMenu