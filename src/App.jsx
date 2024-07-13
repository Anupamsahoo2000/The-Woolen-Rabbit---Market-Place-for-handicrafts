import React from "react";
import Navber from "./components/Navber.jsx";
// import Hero from "./components/Hero.jsx";
// import Products from "./components/Products.jsx";
// import TrandingProducts from "./components/TrandingProducts.jsx";
// import TopProducts from "./components/TopProducts.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
// import Banner from "./components/Banner.jsx";
// import Subscribe from "./components/Subscribe.jsx";
// import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
// import Popup from "./components/Popup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart.jsx";
import Clothing from "./Pages/Clothing.jsx";
import HomeDecor from "./Pages/HomeDecor.jsx";
import Jewellery from "./Pages/Jewellery.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Productinfo from "./Pages/Productinfo.jsx";
import AllProducts from "./Pages/AllProducts.jsx";
import UserDashboard from "./Pages/UserDashboard.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import AddProductPage from "./Pages/AddProductPage.jsx";
import UpdateProductPage from "./Pages/UpdateProductPage.jsx";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser.jsx";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin.jsx";
import MyState from "./context/myState.jsx";
import { Toaster } from "react-hot-toast";
export const App = () => {
  // const [orderPopup, setOrderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <MyState>
          <Navber />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/homedecor" element={<HomeDecor />} />
            <Route path="/jewellery" element={<Jewellery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productinfo/:id" element={<Productinfo />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
          <Toaster />

          {/* <Hero handleOrderPopup={handleOrderPopup} /> 
          <Products />
          <TopProducts />
           <Banner />
           <Subscribe />
           <TrandingProducts />
           <Testimonials /> */}

          <Footer />
        </MyState>
        {/* <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
