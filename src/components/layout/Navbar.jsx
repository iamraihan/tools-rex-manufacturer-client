import React, { useEffect, useState } from "react";
import { Menu, ShoppingCart, User, X } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";

const menus = [
  { id: 1, menu: "Home", route: "/" },
  { id: 2, menu: "About", route: "/about" },
  { id: 3, menu: "Contact", route: "/contact" },
  { id: 4, menu: "Dashboard", route: "/dashboard" },
];
const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(0);

  const hamburgerHandler = () => {
    setOpen((open) => !open);
  };
  // this is just for remove warning
  useEffect(() => {
    if (cart <= 0) return;
    setCart(cart + 1);
  }, [cart]);
  return (
    <>
      <div className="bg-white py-5 hidden sm:block sticky top-0">
        <div className="container mx-auto hidden sm:block">
          <div className="flex justify-between  items-center ">
            <div className="logo">
              <p>Logo</p>
            </div>
            <div className="flex sm:flex-col flex-col">
              <ul className="flex items-center  gap-4">
                {menus.map((item, index) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.route}
                      className={` ${
                        pathname === item.route ? "text-pink-10" : "menu-items"
                      }`}
                    >
                      {item.menu}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <ul className="flex items-center gap-3">
                <li className="menu-items hover:bg-pink-10 p-2 hover:text-white rounded-full ">
                  <User />
                </li>
                <li className="group menu-items relative hover:bg-pink-10 p-2 hover:text-white rounded-full ">
                  <ShoppingCart />
                  <span
                    className={`group-hover:bg-white group-hover:text-dark  bg-pink-10 rounded-full text-white grid justify-center items-center absolute bottom-[2px] right-[2px] px-1.5`}
                  >
                    {cart}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile  */}
      {/* if need to animation here just left -100% then when click on hamburger in make left 0  */}
      <div className="relative bg-white block sm:hidden  ">
        {open && (
          <div className="">
            <div className="bg-dark text-white w-screen h-screen pt-5 z-10 absolute  ">
              <ul className="flex justify-start  gap-4 flex-col container mx-auto ">
                {menus.map((item, index) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.route}
                      className={` text-white ${
                        pathname === item.route ? "text-pink-10" : "menu-items"
                      }`}
                    >
                      {item.menu}
                    </NavLink>
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
            <ul className="flex justify-center-center gap-3 items-center">
              <li className="menu-items hover:bg-pink-10 p-2 hover:text-white rounded-full ">
                <User />
              </li>
              <li className="group menu-items relative hover:bg-pink-10 p-2 hover:text-white rounded-full ">
                <ShoppingCart />
                <span
                  className={`group-hover:bg-white group-hover:text-dark  bg-pink-10 rounded-full text-white grid justify-center items-center absolute bottom-[2px] right-[2px] px-1.5`}
                >
                  {cart}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
