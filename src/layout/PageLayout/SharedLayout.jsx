import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home.jsx";
import FeaturedProducts from "../Sections/FeaturedProducts";
import PopularProducts from "../Sections/PopularProducts";
import OffersSection from "../Sections/OffersSection";
import SuccessStory from "../Sections/SuccessStory";
import ProductGoal from "../Sections/ProductGoal";
import ShopByCategory from "../Sections/ShopByCategory";
import ProductInfluencers from "../Sections/ProductInfluencers";
import HerbalCartVideos from "../Sections/HerbalCartVideos";
import Blogs from "../Sections/Blogs";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Navbar3 from "../Navbar/Navbar3";
import ProductDetail from "../../pages/ProductDetail";
import Checkout from "../../pages/Checkout";
import AboutUs from "../../pages/AboutUs";
import Footer2 from "../Footer/Footer2";

const SharedLayout = () => {
  return (
    <>
      <Navbar3/>
      {/* <ProductDetail/> */}
      {/* <Checkout/> */}
      <AboutUs/>
      <Footer2/>
      {/* <Footer/> */}
      {/* <Navbar/>
      <Home />
      <FeaturedProducts />
      <PopularProducts />
      <OffersSection />
      <SuccessStory />
      <ProductGoal/>
      <ShopByCategory/>
      <ProductInfluencers/>
      <HerbalCartVideos/> 
      <Blogs/>
      <Footer/> */}
    </>
  );
};

export default SharedLayout;
