import React, { useContext, useEffect, useState } from 'react'
import "./ProductDisplay.css"

import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'



const ProductDisplay = (props) => {
    const [size, setSize]  =  useState();
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const {getSizeFunction} = useContext(ShopContext);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <>
    
        <div className="productdisplay">
            <div className="product_display_inner">

            
            <div className="productdisplay-left">
                    <img  src={product.image} alt="" />
            </div>

            <div className="productdisplay-right" style={{color: (props.mode === "black")?"white":"black"}}>
                <h1 style={{color: (props.mode === "black")?"yellow":"black"}}>{product.name}</h1>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price} </div>
                    <div className="productdisplay-right-price-new"> ${product.new_price} </div>
                </div>

                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment .
                </div>
                <div className="productdisplay-rigth-size">
                    <h1 style={{color: (props.mode === "black")?"yellow":"black"}}> Select Size </h1>
                    <div className="productdisplay-right-sizes" style={{color: (props.mode==="black")?"grey":"black"}} onClick={(event)=>{ 
                        const div = document.querySelector('div');
                        if(event.target.classList.contains("size")){ 
                            event.target.classList.add('selected');
                            setSize(event.target.innerHTML);
                            getSizeFunction(event.target.innerHTML);
                            // deselect all other buttons
                            console.log(event.target)
                            const divElem = div.querySelectorAll('.size');
                            divElem.forEach((divElem) => {
                            if (divElem !== event.target) {
                                divElem.classList.remove('selected');
                            }
                        })}}}>
                        <div className='size' >S</div>
                        <div className='size' >M</div>
                        <div className='size' >L</div>
                        <div className='size' >XL</div>
                        <div className='size'>XXL</div>
                    </div>
                </div>
                {console.log(size)}
                    <button className='cart_btn' onClick={()=>{(size===undefined)?alert("Please select size"):addToCart(product.id);  }}>ADD TO CART</button> 
                <Link to="/cart"><button className='cart_btn'>GO TO CART</button> </Link>
                <p className='productdisplay-right-category'><span> Category : </span> Woman, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span> Tags : </span> Modern, T-Latest</p>
            </div>
            </div>
            {/* {console.log(size)} */}
        </div>
      
    </>
  )
}

export default ProductDisplay
