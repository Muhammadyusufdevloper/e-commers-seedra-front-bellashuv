import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../../../context/api/slice/wishlistSlice";
import { add } from "../../../../context/slice/cartSlice";
import defaultImg from "../../../../assets/images/default.png";
import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../../../context/api/productApi";
import { useState } from "react";
import { Box, Pagination } from "@mui/material";

const OurProducts = () => {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(+sessionStorage.getItem("pageCount") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("selectPageCount") || 6
  );

  const { data: productsData } = useGetProductsQuery({
    limit: perPageCount,
    skip: perPageCount * page,
  });

  const { data } = useGetProductsQuery();
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

  const totalCount = Math.ceil((data?.total / perPageCount) - 1) || 1;

  const products = productsData?.products?.map((product, index) => (
    <div key={index} className="p-4 border rounded">
      <button
        onClick={() => dispatch(addWishlist(product))}
        className="absolute top-2 right-2 p-2 rounded-full bg-white border products__card__img-like"
      >
        {wishlistData.some((el) => el.id === product.id) ? (
          <FaHeart className="text-crimson" />
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
          <h3 className="text-xl font-bold text-green-600">${product.price}</h3>
          <button
            onClick={() => {
              console.log("Adding to cart:", product);
              dispatch(add(product));
            }}
            className="text-green-600"
          >
            <FiShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  ));

  const productsByCategory = productsDataByCategory?.products?.map(
    (product, index) => (
      <div key={index} className="p-4 border rounded">
        <button
          onClick={() => dispatch(addWishlist(product))}
          className="absolute top-2 right-2 p-2 rounded-full bg-white border products__card__img-like"
        >
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart className="text-crimson" />
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
                console.log("Adding to cart:", product);
                dispatch(add(product));
              }}
              className="text-green-600"
            >
              <FiShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    )
  );

  console.log(categoryData);

  const categories = categoryData?.map((el) => (
    <li
      key={el.slug}
      onClick={() => setCategory(el.slug)}
      className="p-2 text-nowrap border rounded cursor-pointer hover:bg-green-600 hover:text-white"
    >
      {el.name}
    </li>
  ));

  return (
    <div className="products w-full max-w-[1142px] mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Our products.</h2>
        <button
          onClick={() => setPerPageCount(200)}
          className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
        >
          View all ({data?.total})
        </button>
      </div>
      <ul className="product__list flex gap-4 overflow-x-scroll pb-2 mb-4">
        <li
          onClick={() => setCategory("")}
          className="p-2 border rounded cursor-pointer hover:bg-green-600 hover:text-white"
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
