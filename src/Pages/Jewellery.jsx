import React from "react";
import Img1 from "../assets/jewellery/Black.jpeg";
import Img2 from "../assets/jewellery/blue_earings.jpeg";
import Img3 from "../assets/jewellery/Earrings.jpeg";
import Img4 from "../assets/jewellery/fish_necklace.jpeg";
import Img5 from "../assets/jewellery/goddess_necklase.jpeg";
import Img6 from "../assets/jewellery/handpainted_jwellery.jpeg";
import Img7 from "../assets/jewellery/necklace.jpeg";
import Img8 from "../assets/jewellery/peacock-earrings.jpeg";
import Img9 from "../assets/jewellery/pendant_bangles.jpeg";
import Img10 from "../assets/jewellery/wooden_pendant.jpeg";

import { FaStar } from "react-icons/fa6";

const JewelleryData = [
  {
    id: 1,
    img: Img1,
    title: "Black Necklace",
    rating: 5.0,
    color: "Black",
    price: 2000,
    cart: "Order Now",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Blue Earrings",
    rating: 4.5,
    color: "Blue",
    price: 350,
    cart: "Order Now",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Earrings",
    rating: 4.7,
    color: "Yellow",
    price: 150,
    cart: "Order Now",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Fish Necklace",
    rating: 4.4,
    color: "Multi Color",
    price: 300,
    cart: "Order Now",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Maa Durga Necklace Set",
    rating: 5.0,
    color: "Multi Color",
    price: 1500,
    cart: "Order Now",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Hand Printed Necklace",
    rating: 5.0,
    color: "Blue,Yellow",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Pecock Necklace",
    rating: 5.0,
    color: "Multi Color",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Pecock Earrings",
    rating: 5.0,
    color: "Blue",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img9,
    title: "Handmade Necklace and Bangles",
    rating: 5.0,
    color: "Multi Color",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img10,
    title: "Necklace Set",
    rating: 5.0,
    color: "Gray,Yellow",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1800",
  },
];

const Jewellery = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Jewellery
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
            {JewelleryData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>

                  <span className="font-bold absolute right-0">
                    &#x20B9; {data.price}
                  </span>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary text-xs font-bold ">
                      {data.cart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
