import {Shimmer} from"./shimmer.js"
import RestaurantCard from "../components/RestauranrCard.js"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  let[data,setdata]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [filtered,setFiltered]=useState([]);
  // let filterList=()=>{
  //    setdataobject(dataobject.filter(
  //     (x)=>{ if(x.info.avgRating>4.3)return x}
  //   ))
  //   // console.log(data)
  // }
 
    useEffect(()=>{
      fetchdata();
    },[]
    );
   const fetchdata=async()=>{
    const data= await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
    );
    const json=await data.json();
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFiltered(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
  // console.log("render");
    return (data.length===0)? <Shimmer/>:(
      <div className="body">
        
        <div className="filter">
            <div className="search-container">
              <input type="text"   value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
              }}/>
              <button className="search-btn" onClick={()=>{
                 const filterRestaurant=data.filter((res)=>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                
                  setFiltered(filterRestaurant);
                  
              }}>Search</button>
            </div>


          <button className="filter-btn" onClick={()=>
          {const filterList = data.filter((res)=> res.info.avgRating>4.3);
            setFiltered(filterList);
            }} 
        
           >
            Search For Best Restaurant</button>
        </div>
        <div className="res-container">
       {/* not using key (not acceptable)<<<using index<<<<key is prefferable */}
  {/* {console.log(data[0].info.name)} */}
        {filtered.map((restaurant)=>(
        <Link  className="a" key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard  image ={restaurant.info.cloudinaryImageId} cuisines={restaurant.info.cuisines} restname={restaurant?.info?.name} data={restaurant} deliveryTime={restaurant.info.sla.deliveryTime} costForTwo={restaurant.info.costForTwo} avgRating={restaurant.info.avgRating} />
        </Link>) )}
      
        </div>
      </div>
    );
}
  
  export default Body;