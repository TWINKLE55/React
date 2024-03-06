import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({restname,data,image,cuisines,costForTwo,deliveryTime,avgRating}) => {
    // console.log(restname,image,data,cuisines,costForTwo,deliveryTime,avgRating);
  
    return (
      <div className="res-card">
        <img src={IMG_URL+image}/>
        <div className="info">
          
         { <h2>{restname}</h2> }
          <h4>{cuisines.join(",")}</h4> 
           <h4>☆{avgRating}</h4>
          <h4>{costForTwo} </h4>
          <h4>⏱{deliveryTime} minutes</h4> 
          
        </div>
      </div>
    );
  };

  export default RestaurantCard;