import { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";

const routes = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center lg:flex-row">
      <a href="#">
        <NikeLogo className="w-20 h-20" />
      </a>
      <button
        onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
        className="lg:hidden p-2 rounded-lg focus:ring-2 focus:ring-gray-200 hover:bg-gray-100"
      >
        <RxHamburgerMenu size={20} />
      </button>
      <div
        className={`${!isMobileMenuShow && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="bg-gray-50 text-lg rounded-lg p-4 border border-gray-100 lg:flex lg:bg-transparent lg:border-none lg:space-x-8">
          {routes.map((route, i) => (
            <li
              key={route}
              className={`px-3 py-2 cursor-pointer rounded lg:hover:bg-transparent lg:hover:text-blue-500 ${
                i === 0
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
              } ${(i === 3 || i === 4) && "lg:text-white"}`}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-4 left-4 lg:static lg:mr-8">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
