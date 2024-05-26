import React from 'react'
import "./Breadcrum.css"
import arrow_icon from "../Images/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum" style={{color: (props.mode==="black")?"yellow":"black"}}>
      <div className="breadcrum_inner">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.tags[0]} <img src={arrow_icon} alt="" /> {product.ProductId}
        </div>
    </div>
  )
}

export default Breadcrum;
