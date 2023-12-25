import React, { useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import Item from "../Components/Items/Item";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";
import axios from "axios";
const Shop = () => {
  useEffect(()=>{
    axios.get(`http://localhost:5000/products`).then((response)=>{
      console.log(response.data)
    }).catch((e)=>{
      console.log(e);
    })
  })
  return (
    <>
      <Hero />
      <Item />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </>
  );
};

export default Shop;
