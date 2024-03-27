import React from "react";
import "./Item.css";
import { Link } from 'react-router-dom'

const Item = (props) => { 
  return (
      <div className="item">
        <div className="item-heading">
          <p>{props.name}</p>
        </div>
        
        <div className="item-img">
         <Link to={`/product/${props.id}`}> <img onClick={()=>{window.scrollTo(0, 0)}} src={props.image} alt="" /> </Link>
        </div>

        <div className="item-prices">
          <div className="item-price-new">${props.new_price}</div>

          <div className="item-price-old">${props.old_price}</div>
        </div>
        
      </div>

  );
};

export default Item;
