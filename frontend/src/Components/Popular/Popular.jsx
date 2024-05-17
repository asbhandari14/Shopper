import React from 'react'
import "./Popular.css"
import data_product from "../Images/data"
import Item from '../Items/Item'

const Popular = (props) => {

  const changeTheme = {
    color : (props.mode==="black")?"yellow":"black"
  }

  return (
    <div>

    <div className="popular"> 

      <div className="popular-heading">
        <h1 style={changeTheme}> POPULAR IN WOMEN </h1>
      </div>

      <div className="popular-dash">
        <hr style={{backgroundColor: (props.mode === "black")?"yellow":"black"}}/>
        {/* {console.log(props.mode)} */}
      </div>

        <div className="popular-items">
            <div className="popular-item">
            {data_product.map((item, index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price} />
            })}
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Popular
