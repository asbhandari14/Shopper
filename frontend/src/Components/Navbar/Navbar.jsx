import React, {useContext, useState} from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
import cart from "../Images/cart_icon.png"
import { Link } from 'react-router-dom'                  //changes done yesterday 
import { ShopContext } from '../../Context/ShopContext'
import DarkModeIcon from '@mui/icons-material/DarkMode'; 




const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext)
  const [darkmode, setDarkMode] = useState("black");

  const toggleMode=(darkMode)=>{
    if(darkMode === "black"){
      document.body.style.backgroundColor = "#35374B";
      
    }
    else{
      document.body.style.backgroundColor = "white";
    }
  }


  return (
    <>
    <div className="navbar" style={{ backgroundColor : darkmode==="black"?"white":"#35374B"}}>
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

        <div className="nav-login-cart ">
          <Link to="/signup">  <button>LOG IN</button>  </Link>          {/*  //changes done yesterday */}
          <Link to="/cart">  <img src={cart} alt="cart icon" />  </Link>
          <div className="nav-cart-count"> {getTotalCartItems()} </div>
          <DarkModeIcon onClick={()=>{
            if(darkmode === "black"){
              setDarkMode("white");

            }
            darkmode==="black"?setDarkMode("white"):setDarkMode("black");
            console.log(darkmode);
            toggleMode(darkmode);
          }}></DarkModeIcon>

         

          
        </div>
    </div>
    
    </>
  )
}

export default Navbar
