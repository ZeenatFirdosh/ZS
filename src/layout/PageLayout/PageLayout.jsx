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

const PageLayout = () => {
  return (
    <>
      <Navbar/>
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
     <Footer/>
    </>
  );
};

export default PageLayout;
