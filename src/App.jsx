
import './App.css'
import Navbar2 from './layout/Navbar/Navbar2'
import PageLayout from './layout/PageLayout/PageLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from './layout/PageLayout/SharedLayout'
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Navbar3 from './layout/Navbar/Navbar3';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';

function App() {

  return (
    <>
    {/* <Navbar3/> */}
     <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <PageLayout/>} />
                        <Route path="/shop" element={ <Shop/>} />
                        <Route path="/about" element={ <AboutUs/>} />
                        </Routes>
                        </BrowserRouter>
   {/* <Cart/> */}
    {/* <Navbar2/> */}
    </>
  )
}

export default App
