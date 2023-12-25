import React from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
import cart from "../Images/cart_icon.png"
import { Link } from 'react-router-dom'



const Navbar = () => {


  return (
    <>
    <div className="navbar">
    <Link to="/">
        <div className="nav-logo">
            <img src= {logo} alt="navbar logo" /> 
            <p>Shopper</p>
        </div>
    </Link>

        <div className="nav-menu ">
          <li> <Link  style={{ textDecoration: "none"}}   to="/" > Shop  </Link> </li>
          <li> <Link  style={{ textDecoration: "none"}}   to="/mens" > Men  </Link> </li>
          <li> <Link  style={{ textDecoration: "none"}}  to="/womens" >  Women  </Link>  </li>
          <li> <Link  style={{ textDecoration: "none"}}  to="/kids" > Kids </Link>  </li> 
        </div>

        <div className="nav-login-cart block_in_small_screen">
          <Link to="/login">  <button>LOG IN</button>  </Link>
          <Link to="/cart">  <img src={cart} alt="cart icon" />  </Link>
          <div className="nav-cart-count"> 0 </div>
        </div>


        



    </div>
    </>
  )
}

export default Navbar
