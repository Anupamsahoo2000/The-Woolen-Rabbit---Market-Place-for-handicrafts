import React from "react";
import { FiUsers } from "react-icons/fi";
import { FaListOl } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductDetail from "../components/admin/ProductDetail";
import OrderDetail from "../components/admin/OrderDetail";
import UserDetail from "../components/admin/UserDetail";
import { useContext } from "react";
import myContext from "../context/myContext";
const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(myContext);
  const { getAllProduct } = context;
  return (
    <div>
      {/* Top */}
      <div className="top mb-5 px-5 mt-5">
        <div className=" bg-gray-50 py-5 border border-gray-100 rounded-lg">
          <h1 className=" text-center text-2xl font-bold text-black dark:text-black">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-5">
        {/* Mid  */}
        <div className="mid mb-5">
          {/* main  */}
          <div className=" bg-gray-50 py-5 rounded-xl border border-gray-100">
            {/* image  */}
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt=""
              />
            </div>
            {/* text  */}
            <div className="text-black dark:text-black">
              {/* Name  */}
              <h1 className=" text-center text-lg ">
                <span className=" font-bold">Name : </span>
                {user?.name}
              </h1>
              {/* Email  */}
              <h1 className=" text-center text-lg ">
                <span className=" font-bold">Email : </span>
                {user?.email}
              </h1>
              {/* Date  */}
              <h1 className=" text-center text-lg ">
                <span className=" font-bold">Date : </span>
                {user?.date}
              </h1>
              {/* Role  */}
              <h1 className=" text-center text-lg ">
                <span className=" font-bold">Role : </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="">
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-gray-50 hover:bg-secondary border-gray-100 px-4 py-3 rounded-xl">
                  <div className="text-black dark:text-black w-12 h-12 mb-3 inline-block">
                    <LuShoppingBasket className="h-12 w-12" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-black dark:text-blackfonts1">
                    {getAllProduct.length}
                  </h2>
                  <p className=" text-black dark:text-black font-bold">
                    Total Products
                  </p>
                </div>
              </Tab>

              {/* Total Order  */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-gray-50 hover:bg-secondary border-gray-100 px-4 py-3 rounded-xl">
                  <div className="text-black dark:text-black w-12 h-12 mb-3 inline-block">
                    <FaListOl className="h-12 w-12" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-black dark:text-black fonts1">
                    10
                  </h2>
                  <p className=" text-black dark:text-black  font-bold">
                    Total Order
                  </p>
                </div>
              </Tab>

              {/* Total User  */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-gray-50 hover:bg-secondary border-gray-100 px-4 py-3 rounded-xl">
                  <div className="text-black dark:text-black w-12 h-12 mb-3 inline-block">
                    <FiUsers className="h-12 w-12" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-black dark:text-black fonts1">
                    10
                  </h2>
                  <p className=" text-black dark:text-black font-bold">
                    Total Order
                  </p>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <ProductDetail />
            </TabPanel>
            <TabPanel>
              <OrderDetail />
            </TabPanel>
            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
