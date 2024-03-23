import { MENU_URL } from "../utils/constants";

const MenuList=({info})=>{

    return(
        <div className="menu-list">
        <div className="menu-item">
          <h1>{info.name}</h1>
          <h2>₹ {info.price?(info.price/100):(info.defaultPrice/100)}</h2>
          <p>
          {info.description}
          </p>
        </div>
            <div className="menu-img-container">
            <img
              className="menu-img"
              src={MENU_URL+info.imageId}
            />
          </div>
          </div>
    );
};

export default MenuList;