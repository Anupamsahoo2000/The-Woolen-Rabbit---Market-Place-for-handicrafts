import React from "react";
import Img1 from "../assets/homedecor/birds.jpeg";
import Img2 from "../assets/homedecor/bottle_painting.jpeg";
import Img3 from "../assets/homedecor/funny_bottles.jpeg";
import Img4 from "../assets/homedecor/hanging_craft.jpeg";
import Img5 from "../assets/homedecor/home-decor.png";
import Img6 from "../assets/homedecor/krishna_radha.jpeg";
import Img7 from "../assets/homedecor/light_painting.jpeg";
import Img8 from "../assets/homedecor/pecock_bottle.jpeg";
import Img9 from "../assets/homedecor/wall_hanging.jpeg";
import Img10 from "../assets/homedecor/wall_plates.jpeg";

import { FaStar } from "react-icons/fa6";

const HomeDecorData = [
  {
    id: 1,
    img: Img1,
    title: "Wall Hanger",
    rating: 5.0,
    color: "Multi Color",
    price: 2000,
    cart: "Add to cart",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Bottle Art",
    rating: 4.5,
    color: "Black",
    price: 350,
    cart: "Add to cart",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Funny Bottle",
    rating: 4.7,
    color: "Multi Color",
    price: 150,
    cart: "Add to cart",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Home decor",
    rating: 4.4,
    color: "Blue",
    price: 300,
    cart: "Add to cart",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Home decor",
    rating: 5.0,
    color: "Multi Color",
    price: 1500,
    cart: "Add to cart",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Radha Krishna",
    rating: 5.0,
    color: "Multi color",
    price: 1000,
    cart: "Add to cart",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Color Bulb",
    rating: 5.0,
    color: "Multi color",
    price: 1200,
    cart: "Add to cart",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Peacock Bottle",
    rating: 5.0,
    color: "Multi color",
    price: 1500,
    cart: "Add to cart",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img9,
    title: "Wall art",
    rating: 5.0,
    color: "multicolor",
    price: 2500,
    cart: "Add to cart",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img10,
    title: "Colored Plates",
    rating: 5.0,
    color: "Multi color",
    price: 2000,
    cart: "Add to cart",
    aosDelay: "1800",
  },
];

const HomeDecor = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            HomeDecor
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
            {HomeDecorData.map((data) => (
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

export default HomeDecor;
