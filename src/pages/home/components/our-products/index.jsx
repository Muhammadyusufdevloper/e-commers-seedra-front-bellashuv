import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../../../context/api/slice/wishlistSlice";
import { add } from "../../../../context/slice/cartSlice";
import defaultImg from "../../../../assets/images/default.png";
import galochka from "../../../../assets/images/page/home/productImg/galochka.svg";
import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../../../context/api/productApi";
import { Box, Pagination } from "@mui/material";
import { toast } from "react-toastify";

const OurProducts = () => {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(+sessionStorage.getItem("pageCount") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("selectPageCount") || 6
  );
  const { data } = useGetProductsQuery();
  const cartData = useSelector((state) => state.cart.value);

  const { data: productsData } = useGetProductsQuery({
    limit: perPageCount,
    skip: perPageCount * (page - 1),
  });

  const viewAll = (pagesCount) => {
    setPerPageCount(pagesCount);
    setPage(1);
  };

  const { data: productsDataByCategory } =
    useGetProductsByCategoryQuery(category);
  let navigate = useNavigate();

  let wishlistData = useSelector((state) => state.wishlistSlice.data) || [];
  const dispatch = useDispatch();
  const { data: categoryData } = useGetCategoryQuery();

  const star = [
    <FaStar key={"1"} />,
    <FaStar key={"2"} />,
    <FaStar key={"3"} />,
    <FaStar key={"4"} />,
    <FaStarHalfAlt key={"5"} />,
  ];

  const handleOpenSingle = (id) => {
    navigate(`single-rout/${id}`);
  };

  const handleChange = (_, value) => {
    setPage(value);
    sessionStorage.setItem("pageCount", value);
  };
  const getRating = (rating) => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<FaStar className="text-yellow-400" />);
    }
    if (rating % 1 > 0.4) {
      res.push(<FaStarHalfAlt className="text-yellow-400" />);
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(<FaRegStar className="text-yellow-400" />);
    }
    return res;
  };

  const totalCount = Math.ceil(data?.total / perPageCount - 1) || 1;

  const products = productsData?.products?.map((product, index) => (
    <div key={index} className="relative p-4 border rounded">
      <button
        onClick={() => dispatch(addWishlist(product))}
        className="absolute top-2 right-2 p-2 rounded-full bg-white border"
      >
        {wishlistData.some((el) => el.id === product.id) ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <div
        onClick={() => handleOpenSingle(product.id)}
        className="h-80 cursor-pointer"
      >
        <img
          src={product.images[0] ? product.images[0] : defaultImg}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          {getRating(product.rating)}
          <p className="text-gray-500">(123)</p>
        </div>
        <Link
          to={`single-rout/${product.id}`}
          className="block mt-2 text-lg font-medium text-gray-800 hover:text-green-600"
        >
          {product.title}
        </Link>
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-xl font-bold text-green-600">${product.price}</h3>
          <button
            onClick={() => {
              console.log("Adding to cart:", product);
              dispatch(add(product));
            }}
            className="text-green-600"
          >
            {!cartData.some((el) => el.id === product.id) ? (
              <div className="rounded-lg w-12 h-12 flex items-center justify-center border border-[#EFEFEF]">
                <FiShoppingCart className="w-6 h-6" />
              </div>
            ) : (
              <img width={48} height={48} src={galochka} alt="" />
            )}
          </button>
        </div>
      </div>
    </div>
  ));

  const productsByCategory = productsDataByCategory?.products?.map(
    (product, index) => (
      <div key={index} className="relative p-4 border rounded">
        <button
          onClick={() => dispatch(addWishlist(product))}
          className="absolute top-2 right-2 p-2 rounded-full bg-white border border-[#FFCF55]"
        >
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart className="text-[#FFCF55]" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <div
          onClick={() => handleOpenSingle(product.id)}
          className="h-80 cursor-pointer"
        >
          <img
            src={product.images[0] ? product.images[0] : defaultImg}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            {star.map((el, index) => (
              <div key={index}>{el}</div>
            ))}
            <p>(123)</p>
          </div>
          <Link
            to={`single-rout/${product.id}`}
            className="block mt-2 text-lg font-medium text-gray-800 hover:text-green-600"
          >
            {product.title}
          </Link>
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-xl font-bold text-green-600">
              ${product.price}
            </h3>
            <button
              onClick={() => {
                dispatch(add(product));
              }}
              className="text-green-600"
            >
              {!cartData.some((el) => el.id === product.id) ? (
                <div className="rounded-lg w-12 h-12 flex items-center justify-center border border-[#EFEFEF]">
                  <FiShoppingCart className="w-6 h-6" />
                </div>
              ) : (
                <img width={48} height={48} src={galochka} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
    )
  );

  const categories = categoryData?.map((el) => (
    <li
      key={el.slug}
      onClick={() => setCategory(el.slug)}
      className={`p-2 text-nowrap border transition duration-500 rounded cursor-pointer hover:bg-green-600 hover:text-white ${category === el.slug ? 'bg-green-600 text-white' : ''}`}
    >
      {el.name}
    </li>
  ));

  return (
    <div className="products w-full max-w-[1142px] mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Our products</h2>
        <button
          onClick={() => viewAll(data?.total)}
          className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
        >
          View all ({data?.total})
        </button>
      </div>
      <ul className="flex gap-4 overflow-x-scroll pb-2 mb-4 product__list">
        <li
          onClick={() => setCategory("")}
          className={`p-2 border rounded transition duration-500 cursor-pointer hover:bg-green-600 hover:text-white ${category === "" ? 'bg-green-600 text-white' : ''}`}
        >
          All
        </li>
        {categories}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category ? productsByCategory : products}
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }} py={"20px"}>
        <Pagination
          onChange={handleChange}
          count={totalCount}
          color="success"
          page={page}
        />
      </Box>
    </div>
  );
};

export default OurProducts;
