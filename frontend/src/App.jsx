import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Images/banner_mens.png";
import women_banner from "./Components/Images/banner_women.png";
import kid_banner from "./Components/Images/banner_kids.png";
import MySpinner from "./Components/MySpinner";

const App = () => {

  return (
   <>
   <Router>
    <Navbar/>                                {/* By this Navbar is available in all the component  */}
    <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path="/product" element={<Product/>} />
      <Route path= '/product/:productId' element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<LoginSignup/>} />
    </Routes>
    <Footer />
   </Router>
   
   </>
  );
};

export default App;