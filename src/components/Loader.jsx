import React from "react";
import { LuLoader2 } from "react-icons/lu";
const Loader = () => {
  return (
    <div role="status" className=" absolute">
      <LuLoader2 className="w-8 h-8 mr-2 text-gray-500 animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
