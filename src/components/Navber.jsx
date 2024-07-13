import React from "react";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "#products",
  },
  {
    id: 3,
    name: "Clothing",
    link: "/clothing",
  },
  {
    id: 4,
    name: "Jewellery",
    link: "/jewellery",
  },
  {
    id: 5,
    name: "Home Decor",
    link: "/homedecor",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Best Selling",
    link: "#topproducts",
  },
  {
    id: 2,
    name: "Trending Products",
    link: "#trendingproducts",
  },
];

const Navber = () => {
  //get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));
  //navigate
  const navigate = useNavigate();
  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper navber */}
        <div className="bg-primary/40 py-3">
          <div className="container flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="font-bold text-2xl sm:text-2xl flex gap-2 items-center"
              >
                <img src={Logo} alt="Logo" className="w-20" />
                The Woolen Rabbit
              </Link>
            </div>

            {/* search ber  */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
              {/* Cart button */}
              <Link to="/cart">
                <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                  <span className="group-hover:block hidden transition-all duration-200">
                    Cart
                  </span>
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </Link>

              {/* darkmode switch */}
              <div>
                <DarkMode />
              </div>
              {/* sign in sign up button */}
              {!user ? (
                <Link to="/login">
                  <button className="bg-primary hover:bg-secondary text-sm text-center text-white font-bold py-1 px-2 rounded-full flex items-center gap-4 group">
                    Log in
                  </button>
                </Link>
              ) : (
                <>
                  {user.role === "user" && (
                    <Link to="/user-dashboard">
                      <button className="bg-primary hover:bg-secondary text-sm text-center text-white font-bold py-1 px-2 rounded-full flex items-center gap-4 group">
                        {user?.name}
                      </button>
                    </Link>
                  )}
                  {user.role === "admin" && (
                    <Link to="/admin-dashboard">
                      <button className="bg-primary hover:bg-secondary text-sm text-center text-white font-bold py-1 px-2 rounded-full flex items-center gap-4 group">
                        {user?.name}
                      </button>
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 text-sm text-center text-white font-bold py-1 px-2 rounded-full flex items-center gap-4 group"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* lower navber */}
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <AnchorLink
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  <Link to={data.link}>{data.name}</Link>
                </AnchorLink>
              </li>
            ))}
            {/* simple dropdown and links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <AnchorLink
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </AnchorLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;
