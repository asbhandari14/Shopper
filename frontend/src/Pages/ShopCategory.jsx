import React, { useContext } from 'react'
import "./ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Images/dropdown_icon.png"
import Item from '../Components/Items/Item'
// import all_product from '../Components/Images/all_product'




const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);
  return ( 
    <>
    <div className="shop-category">
        <div className='shop-category-img'>
        <img src={props.banner} alt="" />
        </div>

        <div className="shop-category-indexSort">
            <p> <span>Showing 1-12</span> out of 36 product </p>
          <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>

          <div className="shopcategory-products">
            <div className="shopcategory-products-item">

          {all_product.map((item, i)=>{
            if (props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price} />
            }
            else{
              return null;
            } 
          })}
          </div>
          </div>
          </div>
      
    </>
  )
}

export default ShopCategory
