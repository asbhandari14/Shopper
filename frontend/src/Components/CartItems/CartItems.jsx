import React, { useContext, useEffect, useState } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Images/cart_cross_icon.png"  
import { Link } from 'react-router-dom'


const CartItems = (props) => {
    const [size, setSize] = useState();
    const {all_product, cartItems, removeFromCart, getTotalCartAmount, getSizeFunction, getProductInfo} = useContext(ShopContext); 
    const [productInfo, setProductInfo] = useState([]);


    
      const key = Object.keys(cartItems).find((key) => cartItems[key] === 1);
      console.log(key); 
      const personalInfo = all_product[key];      



    useEffect(()=>{
      setSize(getSizeFunction())
    }, [])

    // let newObj = {
    //   productName : "",
    //   price : 2,
    //   productQuan : "",
    // };
    // const getProductInfo=()=>{
   
    //     product : 
    //   }
    //   setSize([...productInfo, ])
    // }
  return (
    <>
    <div className="cartitems">

        <div className="cartitems-format-main" style={{color : (props.mode)==="black"?"yellow":"black"}}>
            <p>Products</p>
            <p>Title</p>
            <p>Size</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {/* { console.log(props.mode)} */}
 
       {all_product.map((e, index)=>{
        if(cartItems[e.id]>0)
        {
            return <div key={index} >
            <div className="cartitems-format cartitems-format-main" style={{color : (props.mode)==="black"?"yellow":"black"}}>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>{size}</p>

                
  
                <p id="newPrice">${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img  className='removeBtn' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
        }
        return null;
       })}
       
      {/* changes done yesterday  */}
      <div className="cartitems-down">
        <div className="cartitems-total " style={{color : (props.mode)==="black"?"yellow":"black"}}>
        <h1> Cart Totals </h1>
        <div className='cart_total_calculate'>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>$ {getTotalCartAmount()}</p>
          </div>
          <hr style={{color : (props.mode)==="black"?"yellow":"black"}}/>
          <div className="cartitems-total-item">
            <p> Shipping Free </p>
            <p> Free </p>
          </div>
          <hr style={{color : (props.mode)==="black"?"yellow":"black"}}/>
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>$ {getTotalCartAmount()}</h3>
            {console.log(personalInfo)}
          </div>

          </div>

          
          <Link to="/checkout"> <button id='proceedBtn' onClick={()=>{getProductInfo(personalInfo)}}> CHECKOUT</button> </Link>

        </div>
      </div>

    </div>
      
    </>
  )
}

export default CartItems
