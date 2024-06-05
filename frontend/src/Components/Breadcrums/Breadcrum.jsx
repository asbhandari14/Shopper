import React from 'react'
import "./Breadcrum.css"
import arrow_icon from "../Images/breadcrum_arrow.png"
import { Link } from 'react-router-dom'

const Breadcrum = (props) => {
    const {product} = props;
    let category = product.tags[0];
    category = category.toLowerCase();
    category = category.concat((category==="women")?"s":"");
  return (
    <div className="breadcrum" style={{color: (props.mode==="black")?"yellow":"black"}}>
      <div className="breadcrum_inner">
        <Link to="/"><p>  HOME <img src={arrow_icon} alt="" /></p>  </Link>
         <Link to="/"><p>SHOP <img src={arrow_icon} alt="" /> </p> </Link>
        { console.log(category)}
         <Link to={`/${category}`}><p> {product.tags[0]} <img src={arrow_icon} alt="" /></p> </Link>
          <p> {product.tags[1] } <span>{product.tags[2]}</span></p>
        {console.log(product)}
        </div>
    </div>
  )
}

export default Breadcrum;
