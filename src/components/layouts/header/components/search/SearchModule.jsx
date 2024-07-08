import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useGetProductsBySearchQuery } from "../../../../../context/api/productApi";

const SearchModule = ({ handleCloser }) => {
  const [search, setSearch] = useState("");
  const { data, isError } = useGetProductsBySearchQuery(search);
  let product = data?.products;
  return (
    <>
      <div onClick={() => handleCloser(false)} className="fixed w-full min-h-[100vh] bg-[#00000010] top-0 left-0"></div>
      <div className={` scroll-style fixed top-0 left-0 w-full max-h-[60vh] overflow-y-auto bg-white z-[999] pb-2 grid gap-[30px] shadow-lg`}>
        <div className="sticky top-0 left-0 w-full h-5 bg-white"></div>
        <div className="w-full mx-auto px-16 max-w-[1142px]">
          <form
            className={` sticky top-5 left-0 bg-white flex items-center border border-gray-300 rounded-full overflow-hidden transition-all duration-500 mb-5`}>
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
          </form>
          {product?.length ? (
            product?.map((el) => (
              <Link
                onClick={() => handleCloser(false)}
                to={`/single-rout/${el.id}`}
                key={el.id}
                className="flex items-center justify-between p-2.5 transition-all rounded h-[50px] cursor-pointer hover:bg-gray-200"
              >
                <img
                  src={el.images[0]}
                  alt="img"
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
                <p>{el.title}</p>
              </Link>
            ))
          ) : (
            <h2>Nothing Founded</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModule;
