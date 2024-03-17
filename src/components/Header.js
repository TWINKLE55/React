import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName,setBtnName]=useState("login")

    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
  
        <input type="checkbox" id="click"></input>
        <label for="click" className="menu-btn">
          <i class="fa-solid fa-bars"></i>
        </label>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{(btnName==="login") ? setBtnName("logout"):setBtnName("login")
          }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;