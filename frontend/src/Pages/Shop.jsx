import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Item from "../Components/Items/Item";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";
import axios from "axios";

const Shop = (props) => {
  console.log('props at shop',props.mode)
  const [mode,setMode]=useState("white");
  console.log("mode at shop is",props.mode)
  axios.defaults.withCredentials = true;
  axios.get(`http://localhost:5000/Profile`).then((response)=>{
    console.log(response.data)
  }).catch((e)=>{
    console.log(e);
  })

  return (
    <>
      <Hero />
      <Item mode={props.mode} />
      <Popular mode = {props.mode}  />
      <Offers />
      <NewCollections mode = {props.mode} />
      <Newsletter />
    </>
  );
};

export default Shop;


