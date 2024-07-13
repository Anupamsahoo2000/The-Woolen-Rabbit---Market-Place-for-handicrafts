import { useEffect } from "react";
import Img1 from "../assets/products/saree.jpg";
import Img2 from "../assets/products/necklace.jpeg";
import Img3 from "../assets/products/Earrings.jpeg";
import Img4 from "../assets/products/Home-decor.jpeg";
import Img5 from "../assets/products/Kurta.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../redux/cartSlice.jsx";
import toast from "react-hot-toast";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    description: "White women Ethnic Saree",
    price: 2000,
    cart: "Add to Cart",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Necklace",
    rating: 4.5,
    color: "Pink",
    price: 350,
    cart: "Add to Cart",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Earrings",
    rating: 4.7,
    color: "Yellow",
    price: 150,
    cart: "Add to Cart",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Home decor",
    rating: 4.4,
    color: "Blue",
    price: 300,
    cart: "Add to Cart",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Add to Cart",
    aosDelay: "800",
  },
];

const TrandingProducts = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div id="products" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  onClick={() => navigate(`/productinfo/${data.id}`)}
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <span className="font-bold absolute right-0">
                    &#x20B9; {data.price}
                  </span>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    {cartItems.some((p) => p.id === data.id) ? (
                      <button
                        className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary text-xs font-bold "
                        onClick={() => deleteCart(data)}
                      >
                        Delete from Cart
                      </button>
                    ) : (
                      <button
                        className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary text-xs font-bold "
                        onClick={() => addCart(data)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md "
              onClick={() => navigate("/allproducts")}
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandingProducts;
