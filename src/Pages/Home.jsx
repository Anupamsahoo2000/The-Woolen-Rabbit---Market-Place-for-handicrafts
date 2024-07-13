import Hero from "../components/Hero.jsx";
import Products from "../components/Products.jsx";
import TrandingProducts from "../components/TrandingProducts.jsx";
import TopProducts from "../components/TopProducts.jsx";
import Banner from "../components/Banner.jsx";
import Subscribe from "../components/Subscribe.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Popup from "../components/Popup.jsx";
import Loader from "../components/Loader.jsx";

const Home = () => {
  // const [orderPopup, setOrderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };

  return (
    <div>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <TrandingProducts />
      <Testimonials />
      <Loader />
      <Popup />
    </div>
  );
};

export default Home;
