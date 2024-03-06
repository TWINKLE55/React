import dataobject from "../utils/mockData.js"
import RestaurantCard from "../components/RestauranrCard.js"
import { useState } from "react";
const Body = () => {
  let[data,setdata]=useState(dataobject);
  // let filterList=()=>{
  //    setdataobject(dataobject.filter(
  //     (x)=>{ if(x.info.avgRating>4.3)return x}
  //   ))
  //   // console.log(data)
  // }
 
     
  
    return (
      <div className="body">
        
        <div className="filter">
            
          <button className="filter-btn" onClick={()=>
          {const filterList = data.filter((res)=> res.info.avgRating>4.3);
            setdata(filterList);}} 

           >
            Search For Best Restaurant</button>
        </div>
        <div className="res-container">
       {/* not using key (not acceptable)<<<using index<<<<key is prefferable */}
  
        {data.map((restaurant)=>( <RestaurantCard key={restaurant.info.id} image ={restaurant.info.cloudinaryImageId} cuisines={restaurant.info.cuisines} restname={restaurant?.info?.name} data={restaurant} deliveryTime={restaurant.info.sla.deliveryTime} costForTwo={restaurant.info.costForTwo} avgRating={restaurant.info.avgRating} />) )}
      
        </div>
      </div>
    );
}
  
  export default Body;