import React, {useContext, useState} from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
// import cart from "../Images/cart_icon.png"
import { Link } from 'react-router-dom'                  //changes done yesterday 
import { ShopContext } from '../../Context/ShopContext'
import DarkModeIcon from '@mui/icons-material/DarkMode'; 
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom'




const Navbar = (props) => {

  const {cartArrayLength} = useContext(ShopContext)
  const [mode, setMode] = useState("black");
  const [val, setVal] = useState("Shop");
  const [res_nav, setRes_Nav] = useState(false);


  // const toggleMode=(mode)=>{
  //   if(mode === "black"){
  //     document.body.style.backgroundColor = "#242424";
  //     return props.getMode("black");
      
  //   }
  //   else{
  //     document.body.style.backgroundColor = "white";
  //     return props.getMode("white");
  //   }
  // }

  let path = useLocation().pathname;

  if(path === "/admin" || path === "/admin/analyze" || false){
    return null;
  }


  return (
    <>
    <div className="navbar" style={{ backgroundColor : mode==="black"?"white":"black"}}>
      <Link to="/">
          <div className="nav-logo">
              <img src= {logo} alt="navbar logo" /> 
              <p style={{color : (mode==="white")?"yellow":"black"}}>Ecomm</p>
          </div>
      </Link>

        <div className="nav-menu " onClick={(event)=>{setVal(event.target.textContent)}}>
          {/* {console.log(typeof val)} */}
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none", borderBottom: (val==="Shop")?"2px solid red":""}}   to="/" > Shop  </Link> </li>
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none", borderBottom: (val==="Men") ?"2px solid red":""}}   to="/mens" > Men  </Link> </li>
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none", borderBottom: val==="Women"?"2px solid red":""}}  to="/womens" >  Women  </Link>  </li>
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none", borderBottom : val==="Kids"?"2px solid red":""}}  to="/kids" > Kids </Link>  </li> 
        </div>

        <div className="nav-login-cart ">
          <Link to="/signup">  <button style={{backgroundColor : (mode==="white")?"yellow":"white"}}>LOG IN</button>  </Link>          {/*  //changes done yesterday */}
          <Link to="/cart"> <IoCartSharp style={{color : (mode==="white")?"yellow":"black", fontSize : "1.5rem"}} />  </Link>
          <div className="nav-cart-count" > {cartArrayLength()} </div>
        </div>

        <div className="nav_last_icon" style={{display: "flex", gap : "1rem"}}>
        <DarkModeIcon onClick={()=>{
            if(mode === "black"){
              setMode("white");
              props.toggleMode(mode);
            }
            else if(mode === "white"){
              setMode("black");
              props.toggleMode(mode)
            }
          }} style={{color : (mode==="white")?"yellow":"black"}}></DarkModeIcon>
          

        <div className="hamburgerMenu" onClick={()=>{setRes_Nav(!res_nav)}}>
            <GiHamburgerMenu style={{color : (mode==="black")?"black":"yellow"}}/>:
        </div>
        </div>
         
    </div>
    {console.log(mode)}
    <div className="resp_nav" style={{display : (res_nav)?"flex": "none", backgroundColor: (mode==="black")?"white":"#042743"}} onClick={()=>{setRes_Nav(!res_nav)}}>
      <Link to="/" className='link' style={{color : (mode==="black")?"black":"yellow"}}><li>Shop</li></Link>
      <Link to="mens" className='link' style={{color : (mode==="black")?"black":"yellow"}}><li>Men</li></Link>
      <Link to="womens" className='link' style={{color : (mode==="black")?"black":"yellow"}}><li>Women</li></Link>
      <Link to="kids" className='link' style={{color : (mode==="black")?"black":"yellow"}}><li>Kids</li></Link>
      <Link to="login" className='link' style={{color : (mode==="black")?"black":"yellow"}}><li>Login</li></Link>
      <Link to="cart" className='link' style={{color : (mode==="black")?"black":"yellow"}}><li>Cart</li></Link>
    </div>
    </>
  )
}

export default Navbar
