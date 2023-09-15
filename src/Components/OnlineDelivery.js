import { useEffect, useState } from "react";
import { Restaurant_With_Online_Delivery } from "../DataBase/DB";
import OnlineDeliveryCard from "./OnlineDeliveryCard";
import { Link } from "react-router-dom";

const OnlineDelivery = () =>{
    const [onlineResto,setOnlineRestro] = useState(null)

    useEffect(()=>{
        setOnlineRestro(Restaurant_With_Online_Delivery.restaurants)
    },[])
    if (onlineResto == null) return <h1>Loading</h1>;
    return(

       <div className="onlineRestroMain">
        <h2>Restaurants with online food delivery in Ahmedabad</h2>
        <div className="onlineRestroMap">
        {onlineResto.map((restro)=>{
            return(
                <Link to={"/restaurant/" + restro.info.id} >  <OnlineDeliveryCard key={restro.info.id} RestroData={restro.info}/>  </Link>
              
            )
        })}
        </div>
     
       </div>
    )
}

export default OnlineDelivery;