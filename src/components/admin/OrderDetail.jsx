import React from "react";

const OrderDetail = () => {
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-black dark:text-white font-bold">
          All Order
        </h1>
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-gray-300 text-gray-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-100 text-black dark:text-black bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-black dark:text-black bg-slate-100"
              >
                Location Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-black dark:text-black bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-100 text-black dark:text-black bg-slate-100"
              >
                Action
              </th>
            </tr>
            <tr className="text-gray-300">
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-100 stroke-slate-500 text-black dark:text-white">
                1.
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-black dark:text-white first-letter:uppercase ">
                {"name"}
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-green-500 cursor-pointer ">
                Edit
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500  text-red-500 cursor-pointer ">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
