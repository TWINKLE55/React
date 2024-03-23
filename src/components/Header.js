import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnName,setBtnName]=useState("login")
  // useEffect(()=>{console.log("useEffect called")},[btnName]);
  // console.log("abcd")

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
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/About">About Us</Link></li>
            <li><Link className="link" to="/Contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{(btnName==="login") ? setBtnName("logout"):setBtnName("login")
          }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;