import React from "react";
import notFound from "../../../assests/404 Error Page not Found with people connecting a plug-pana.png";

const NotFound = () => {
  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="">
        <img className="h-screen  w-full " src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
