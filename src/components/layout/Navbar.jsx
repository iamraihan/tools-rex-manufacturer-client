import React, { useState } from "react";
import { Menu, ShoppingCart, User, X } from "react-feather";
import { Link } from "react-router-dom";

const menus = [
  { id: 1, menu: "Home", route: "/" },
  { id: 2, menu: "About", route: "/about" },
  { id: 3, menu: "Contact", route: "/contact" },
  { id: 4, menu: "Dashboard", route: "/dashboard" },
];
const icons = [<User />, <ShoppingCart />];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hamburgerHandler = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className="bg-white py-5 hidden sm:block ">
        <div className="container mx-auto hidden sm:block">
          <div className="flex justify-between   ">
            <div className="logo">
              <p>Logo</p>
            </div>
            <div className="flex sm:flex-col flex-col">
              <ul className="flex items-center  gap-4">
                {menus.map((item, index) => (
                  <li key={item.id}>
                    <Link className="menu-items" to={item.route}>
                      {item.menu}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <ul className="flex items-center gap-3">
                {icons.map((icon, index) => (
                  <li key={index} className="menu-items">
                    {icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile  */}
      <div className="relative bg-white block sm:hidden">
        {open && (
          <div className="">
            <div className="bg-dark text-white w-screen h-screen pt-5 z-10 absolute">
              <ul className="flex justify-start  gap-4 flex-col container mx-auto">
                {menus.map((item, index) => (
                  <li key={item.id}>
                    <Link className="menu-items text-white" to={item.route}>
                      {item.menu}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="mx-auto">
          <div className="flex justify-between container py-5">
            <div>Icon</div>
            <div className="z-50">
              <span onClick={hamburgerHandler} type="button">
                {!open ? <Menu /> : <X color="#ffffff" />}
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-5 container ">
            <ul className="flex justify-center-center gap-5 items-center">
              {icons.map((icon, index) => (
                <li key={index} className="menu-items">
                  {icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
