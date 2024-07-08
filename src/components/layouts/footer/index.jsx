import footerLogo from "../../../assets/images/components/footerLogo.svg";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { memo } from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="w-full max-w-[1142px] px-4 mx-auto">
        <div className="py-5 flex flex-wrap gap-7 items-center justify-between">
          <ul className="flex flex-wrap gap-2.5 items-center">
            <NavLink
              to={"/all-product"}
              className="px-2.5 py-1 text-sm font-medium text-green-600"
            >
              ALL PRODUCTS
            </NavLink>
            <NavLink
              to={"/about-seedra"}
              className="px-2.5 py-1 text-sm font-medium border-x border-green-600"
            >
              ABOUT SEEDRA
            </NavLink>
            <NavLink
              to={"/our-blog"}
              className="px-2.5 py-1 text-sm font-medium"
            >
              OUR BLOG
            </NavLink>
          </ul>
          <Link to={"/"} className="w-32 h-8">
            <img src={footerLogo} alt="Footer Logo" className="w-full h-full" />
          </Link>
          <ul className="flex flex-wrap gap-2.5 items-center">
            <li className="px-2.5 py-1 text-sm font-medium">
              Terms&Conditions
            </li>
            <li className="px-2.5 py-1 text-sm font-medium border-l border-green-600">
              Privacy Policy
            </li>
          </ul>
        </div>
        <hr />
        <div className="pt-5 flex justify-between items-center">
          <div className="flex gap-3.5 text-green-600 text-xl">
            <LuInstagram />
            <FaFacebook />
          </div>
          <p className="text-sm">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
