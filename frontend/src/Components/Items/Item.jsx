import React, { useEffect, useState } from "react";
import "./Item.css";
import { Link } from 'react-router-dom'
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => { 
  const [mode, setMode] = useState();

  useEffect(()=>{
    setMode(props.mode);
  })
  // const [mode,setMode]=useState(true)
  // console.log('mode at items is',props.abc)
  return (
      <div className="item">
        {/* {setSingleProductArray([...getAllProductData(props.id)])} */}
      
        <div className="item-img">
        
        { (props.id)?<Link to={`/product/${props.id}`}> <img src={props.image} alt="" onClick={()=>{ window.scrollTo(0, 0)}} /> </Link>:""}
        
         {console.log("the mode is",props.mode)}
        </div>
        <div className="item-heading">
        <Link to={`/product/${props.id}`}>  <p id="title" style={{color:"blue"}}>{props.name}</p>  </Link>
        </div>
        

         {console.log(mode)}
        <div className="item-prices">
        {  (props.id)?<div className="item-price-new"> &#8377;{props.new_price}</div>:""}

          {(props.id)?<div className="item-price-old"> &#8377;{props.old_price}</div>:""}
        </div>
        
      </div>

  );
};

export default Item;
