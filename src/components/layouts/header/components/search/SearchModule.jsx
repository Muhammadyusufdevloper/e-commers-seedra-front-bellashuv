import React from "react";
import { Link } from "react-router-dom";

const SearchModule = ({ data, showList, handleCloser }) => {
  let product = data?.products;
  return (
    <div
      className={` fixed top-[75px] left-0 w-full max-h-[50vh] overflow-y-auto bg-white z-[999] shadow-sm p-[50px] grid gap-[30px] ${
        showList ? "shorter__header__search-module" : ""
      } ${showList ? "grid-cols-3" : ""}`}
    >
      {product?.length ? (
        product?.map((el) => (
          <Link
            onClick={handleCloser}
            to={`/products/${el.id}`}
            key={el.id}
            className="flex items-center justify-between p-2.5 transition-all border border-gray-200 rounded h-[50px] cursor-pointer hover:bg-gray-200"
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
  );
};

export default SearchModule;
