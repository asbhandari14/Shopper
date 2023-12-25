import React from 'react'
import "./NewCollections.css"
import new_collection from '../Images/new_collections'
import Item from "../Items/Item"

const NewCollections = () => {
  return (
    <>

    <div className="new-collections">

      <div className="new_collection_heading">
        <h1>NEW COLLECTIONS</h1>
      </div>

      <div className="new_collection_dash">
        <hr />
      </div>

        <div className="collections">
          <div className="collection_item">
            {new_collection.map((item, index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price} />
            })}
          </div>

        </div>
    </div>
      

    </>
  )
}

export default NewCollections
