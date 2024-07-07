import { Link, NavLink } from "react-router-dom";
import siteLogo from "../../../assets/images/components/header/logo.svg";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { memo, useState } from "react";
import { useGetProductsBySearchQuery } from "../../../context/api/productApi";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import SearchModule from "./components/search/SearchModule";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const { data: products, isError } = useGetProductsBySearchQuery(search);
  const wishlistData = useSelector((state) => state.wishlistSlice.data);
  const cartData = useSelector((state) => state.cart.value);
  function handleCloser() {
    setSearch("");
  }

  return (
    <>
      <header className="sticky top-0 left-0 bg-white shadow-md z-50 py-3">
        <nav className="container mx-auto flex items-center justify-between">
          <Link to="/" className="w-32">
            <img src={siteLogo} alt="site logo" />
          </Link>
          {menu && (
            <div
              onClick={() => setMenu(false)}
              className="fixed top-0 right-0 w-full h-full bg-gray-500 bg-opacity-50 z-40"
            ></div>
          )}
          <ul
            className={`fixed top-0 right-0 bg-white shadow-md h-full z-50 w-64 transform transition-transform duration-300 ${
              menu ? "translate-x-0" : "translate-x-full"
            } lg:static lg:flex lg:flex-row lg:w-auto lg:h-auto lg:bg-transparent lg:shadow-none lg:translate-x-0`}
          >
            <li className="absolute top-2 right-2 lg:hidden">
              <button
                onClick={() => setMenu(false)}
                className="text-2xl text-gray-700"
              >
                <IoMdCloseCircleOutline />
              </button>
            </li>
            <div className="block lg:hidden p-4">
              <form
                className={`relative flex items-center border border-gray-300 rounded-full overflow-hidden transition-all duration-500 ${
                  menu
                    ? "fixed top-0 left-1/4 transform translate-y-20"
                    : "max-w-xs"
                }`}
              >
                <button type="button" className="p-2">
                  <CiSearch className="text-xl" />
                </button>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  value={search}
                  placeholder="Search"
                  className="flex-grow px-4 py-2 text-sm text-gray-700 border-none outline-none"
                />
                {products && search ? (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 rounded-md overflow-hidden z-50">
                    {!search ? (
                      <p className="p-4 text-gray-700">No data</p>
                    ) : (
                      <SearchModule
                        data={products}
                        showList={search}
                        handleCloser={handleCloser}
                      />
                    )}
                  </div>
                ) : null}
              </form>
            </div>
            <li className="p-4 border-b lg:border-none">
              <NavLink
                to="/all-product"
                className="text-gray-700 hover:text-green-600"
              >
                ALL PRODUCTS
              </NavLink>
            </li>
            <li className="p-4 border-b lg:border-none">
              <NavLink
                to="/about-seedra"
                className="text-gray-700 hover:text-green-600"
              >
                ABOUT SEEDRA
              </NavLink>
            </li>
            <li className="p-4 border-b lg:border-none">
              <NavLink
                to="/our-blog"
                className="text-gray-700 hover:text-green-600"
              >
                OUR BLOG
              </NavLink>
            </li>
            <li className="p-4 border-b lg:border-none">
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-green-600"
              >
                CONTACTS
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://www.instagram.com/muhammadyusufdevloper/"
                className="text-gray-700"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.instagram.com/muhammadyusufdevloper/"
                className="text-gray-700"
              >
                <BsFacebook />
              </a>
            </div>
            <div className="hidden lg:block">
              <form
                className={`relative flex items-center border border-gray-300 rounded-full overflow-hidden transition-all duration-500 ${
                  menu
                    ? "fixed top-0 left-1/4 transform translate-y-20"
                    : "max-w-xs"
                }`}
              >
                <button type="button" className="p-2">
                  <CiSearch className="text-xl" />
                </button>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  value={search}
                  placeholder="Search"
                  className="flex-grow px-4 py-2 text-sm text-gray-700 border-none outline-none"
                />
                {products && search ? (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 rounded-md overflow-hidden z-50">
                    {!search ? (
                      <p className="p-4 text-gray-700">No data</p>
                    ) : (
                      <SearchModule
                        data={products}
                        search={search}
                        handleCloser={handleCloser}
                      />
                    )}
                  </div>
                ) : null}
              </form>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/wishlist" className="relative">
                <GoHeart className="text-green-600" />
                {wishlistData.length > 0 && (
                  <sup className="absolute top-0 right-0 text-xs text-green-600">
                    {wishlistData.length}
                  </sup>
                )}
              </Link>
              <Link to="/cart" className="relative">
                <MdOutlineShoppingCart className="text-green-600" />
                {cartData.length > 0 && (
                  <sup className="absolute top-0 right-0 text-xs text-green-600">
                    {cartData.length}
                  </sup>
                )}
              </Link>
            </div>
            <button
              onClick={() => setMenu(true)}
              className="lg:hidden text-2xl text-gray-700"
            >
              <CgMenuRight />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
