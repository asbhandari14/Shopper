import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplays/ProductDisplay";


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const {getAllProductData} = useContext(ShopContext);


  const product = getAllProductData().find((currElem) => currElem._id === productId);
  // console.log(product);
  return (
    <div>
       <Breadcrum product = {product} />
       <ProductDisplay product={product} />                
    </div>
  );
};

export default Product;
