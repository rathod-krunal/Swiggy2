import React,{useState,useEffect} from 'react'
import { TOP_RESTRO_CHAIN_IN_AHEMDABAD } from '../DataBase/DB';
import TopRestroChaincard from './TopRestroChaincard';
import { Link } from 'react-router-dom';

function TopRestroChain() {
    const [topRestro, setTopRestro] = useState(null);

    useEffect(() => {
        setTopRestro(TOP_RESTRO_CHAIN_IN_AHEMDABAD.restaurants);
    }, []);
    if (!topRestro?.length) return <h1> Loading </h1>;
  
    return (
      <div className="topRestroChainMain">
        <h2>Top restaurant chains in Ahmedabad</h2>
        <div className="TopRestroChainMap">
          {" "}
          {topRestro.map((list) => {
            return  <Link to={"/restaurant/" + list.info.id} key={list.info.id}>  <TopRestroChaincard   listData={list} />  </Link> 
          })}{" "}
        </div>
      </div>
    );
}

export default TopRestroChain
