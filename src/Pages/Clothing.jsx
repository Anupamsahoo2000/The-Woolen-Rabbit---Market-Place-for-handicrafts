import React from "react";
// men
import Img1 from "../assets/men/blue_green.jpeg";
import Img2 from "../assets/men/gray_linen.jpeg";
import Img3 from "../assets/men/handprint_block_kurta.jpeg";
import Img4 from "../assets/men/handprint_shirt.jpeg";
import Img5 from "../assets/men/handprinted_blazer.jpeg";
import Img6 from "../assets/men/handprinted_cotton.jpeg";
import Img7 from "../assets/men/handprinted_kurta.jpeg";
import Img8 from "../assets/men/handprinted_waist.jpeg";
import Img9 from "../assets/men/green_linen.jpeg";
import Img10 from "../assets/men/Kurta.jpeg";
import Img11 from "../assets/men/Kurta.jpeg";
import Img12 from "../assets/men/Kurta.jpeg";
import Img13 from "../assets/men/Kurta.jpeg";
import Img14 from "../assets/men/Kurta.jpeg";
import Img15 from "../assets/men/Kurta.jpeg";

//women
import Img16 from "../assets/women/black_dress.jpeg";
import Img17 from "../assets/women/blue_jumpsuit.jpeg";
import Img18 from "../assets/women/Cotton_Handloom_Sari.jpeg";
import Img19 from "../assets/women/handemade-saree.jpg";
import Img20 from "../assets/women/lahenga.jpeg";
import Img21 from "../assets/women/long_dress.jpeg";
import Img22 from "../assets/women/pink_dress.jpeg";
import Img23 from "../assets/women/pink_floral.jpeg";
import Img24 from "../assets/women/saree1.jpg";
import Img25 from "../assets/women/saree2.png";
import Img26 from "../assets/women/tussar_saree.jpeg";
import Img27 from "../assets/women/tussar-handmade-saree.jpg";
import Img28 from "../assets/women/white_blouse.jpeg";
import Img29 from "../assets/women/white_floral_saree.jpeg";
import Img30 from "../assets/women/white_floral.jpeg";
import Img31 from "../assets/women/white_handprint.jpeg";
import Img32 from "../assets/women/white_printed_dress.jpeg";
import Img33 from "../assets/women/white_printed_saree.jpeg";
import Img34 from "../assets/women/white_red_saree.jpeg";
import Img35 from "../assets/women/yellow_blouse.jpeg";
import Img36 from "../assets/women/yellow_dress.jpeg";
import Img37 from "../assets/women/handprint_blouse_black.jpeg";
import Img38 from "../assets/women/handprint_yellow.jpeg";
import Img39 from "../assets/women/handprinted_saree.jpeg";
import Img40 from "../assets/women/printed_saree.jpeg";
import { FaStar } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Menu = [
  {
    id: 1,
    name: "Women",
    link: "/women",
  },
  {
    id: 2,
    name: "Men",
    link: "/men",
  },
];

const MenData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    price: 2000,
    cart: "Order Now",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Necklace",
    rating: 4.5,
    color: "Pink",
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
    title: "Home decor",
    rating: 4.4,
    color: "Blue",
    price: 300,
    cart: "Order Now",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img9,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img10,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "1800",
  },
  {
    id: 11,
    img: Img11,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "2000",
  },
  {
    id: 12,
    img: Img12,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "2200",
  },
  {
    id: 13,
    img: Img13,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "2400",
  },
  {
    id: 14,
    img: Img14,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "2600",
  },
  {
    id: 15,
    img: Img15,
    title: "Men Ethnic",
    rating: 5.0,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "2800",
  },
];
const WomenData = [
  {
    id: 16,
    img: Img16,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Black",
    price: 2000,
    cart: "Order Now",
    aosDelay: "0",
  },
  {
    id: 17,
    img: Img17,
    title: "Jump Suit",
    rating: 4.5,
    color: "Blue",
    price: 3500,
    cart: "Order Now",
    aosDelay: "200",
  },
  {
    id: 18,
    img: Img18,
    title: "Handprinted Saree",
    rating: 4.7,
    color: "Black",
    price: 1500,
    cart: "Order Now",
    aosDelay: "400",
  },
  {
    id: 19,
    img: Img19,
    title: "Saree",
    rating: 4.4,
    color: "Red",
    price: 3000,
    cart: "Order Now",
    aosDelay: "600",
  },
  {
    id: 20,
    img: Img20,
    title: "Lahenga",
    rating: 5.0,
    color: "Yellow,Pink",
    price: 5500,
    cart: "Order Now",
    aosDelay: "800",
  },
  {
    id: 21,
    img: Img21,
    title: "Long Dress",
    rating: 5.0,
    color: "Color",
    price: 2500,
    cart: "Order Now",
    aosDelay: "1000",
  },
  {
    id: 22,
    img: Img22,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Red",
    price: 1000,
    cart: "Order Now",
    aosDelay: "1200",
  },
  {
    id: 23,
    img: Img23,
    title: "Silk Saree",
    rating: 5.0,
    color: "pink",
    price: 4500,
    cart: "Order Now",
    aosDelay: "1400",
  },
  {
    id: 24,
    img: Img24,
    title: "Saree",
    rating: 5.0,
    color: "white",
    price: 1050,
    cart: "Order Now",
    aosDelay: "1600",
  },
  {
    id: 25,
    img: Img25,
    title: "Handprinted Saree",
    rating: 5.0,
    color: "White",
    price: 1450,
    cart: "Order Now",
    aosDelay: "1800",
  },
];
const Clothing = () => {
  return (
    <div>
      {/* navber */}
      <div className="shadow-md bg-primary/40  dark:text-white duration-200 relative z-40 ">
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <AnchorLink
                  href={data.link}
                  className="inline-block px-4 hover:text-black duration-200"
                >
                  {data.name}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Men's section */}
      <div className="mt-14 mb-12" id="women">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              Women's Products
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {WomenData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150] object-cover rounded-md"
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
      {/* Women's section */}
      <div className="mt-14 mb-12" id="men">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              Men's Products
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {MenData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150] object-cover rounded-md"
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
    </div>
  );
};

export default Clothing;
