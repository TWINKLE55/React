import { useEffect, useState } from "react";
// import ShimmerMenu from "./shimmer1";
import { MENU_URL } from "../utils/constants";
import {Shimmer,ShimmerMenu} from "./shimmer";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
const Menu = () => {

  const {id}=useParams();
  // console.log(id);
  const [restInfo,setResInfo]=useState([]);
  const [food,setFood]=useState([]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&query=Burger&submitAction=ENTER`
    );
    const json = await data.json();
    
    setResInfo(json.data)
    setFood(json.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
  };

  
  useEffect(() => {
    fetchMenu();
  }, [id]);

if (restInfo.length===0){
  return <ShimmerMenu/>;
}

 const {name,cuisines,labels,avgRating,sla,costForTwoMessage,aggregatedDiscountInfo}=restInfo?.cards[0].card.card.info;
 
  return (
    <div className="Menu-container">
      <div className="info-container">
        <div className="info">
          <h1>{name}</h1>
          <p>{cuisines.join("-")}</p>
          <p>{labels[1].message}</p>
    
        </div>
        <div className="rating">
          <h1>⭐{avgRating}</h1>
        </div>
      </div>

      <div className="discount">
        <div className="details">
          <span>⏱ {sla.deliveryTime} mins</span>
          <span>{costForTwoMessage}</span>
        </div>
        <div className="discount-container">
          <div className="discount-box">{aggregatedDiscountInfo.descriptionList[0].meta}</div>
          <div className="discount-box">{aggregatedDiscountInfo.descriptionList[1].meta}</div>
          <div className="discount-box">{aggregatedDiscountInfo.shortDescriptionList[0].meta}</div>
          <div className="discount-box">{aggregatedDiscountInfo.shortDescriptionList[1].meta}</div>
        </div>
        <div className="veg-menu">
          <span>Veg Only</span>
          <button className="veg-toggle">touch</button>
        </div>
      </div>
      
      <div className="menu-items">
        {/* {console.log(food)} */}
        {food.map((menu,i)=>{return <MenuList key={i} info={menu.card.info}/>})}
      </div>
    </div>
  );
};

export default Menu;
