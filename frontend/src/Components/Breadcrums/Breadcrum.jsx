import React from 'react'
import "./Breadcrum.css"
import arrow_icon from "../Images/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum" style={{color: (props.mode==="black")?"yellow":"black"}}>
      <div className="breadcrum_inner">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.tags[0]} <img src={arrow_icon} alt="" /> {product.tags[1] } {product.tags[2]}
        {console.log(product)}
        </div>
    </div>
  )
}

export default Breadcrum;
