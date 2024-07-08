import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../../assets/images/default.png";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { addWishlist } from "../../context/api/slice/wishlistSlice";
import { add } from "../../context/slice/cartSlice";
import { useState } from "react";

const AllProduct = () => {
  const { data: productsData } = useGetProductsQuery({
    limit: 6,
  });
  let [category, setCategory] = useState("");
  const { data: productsByCategory } = useGetProductsByCategoryQuery(category);
  const wishlistData = useSelector((state) => state.wishlistSlice.data) || [];
  const dispatch = useDispatch();
  const { data: categoryData } = useGetCategoryQuery();

  let navigate = useNavigate();

  const star = [
    <FaStar key={"1"} />,
    <FaStar key={"2"} />,
    <FaStar key={"3"} />,
    <FaStar key={"4"} />,
    <FaStarHalfAlt key={"5"} />,
  ];

  console.log(categoryData);

  const products = productsData?.products.map((product, index) => (
    <div
      key={index}
      className="all-products__card border rounded-lg overflow-hidden shadow-md"
    >
      <button
        onClick={() => dispatch(addWishlist(product))}
        className="all-products__card__img-like bg-white p-2 rounded-full absolute top-2 right-2 flex items-center justify-center"
      >
        {wishlistData.some((el) => el.id === product.id) ? (
          <FaHeart className="text-crimson" />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <div
        onClick={() => navigate(`single-route/${product.id}`)}
        className="all-products__card__img h-80 cursor-pointer"
      >
        <img
          src={product.images[0] ? product.images[0] : defaultImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="all-products__card__info p-4">
        <div className="flex items-center gap-2">
          {star.map((el, index) => (
            <div key={index} className="text-yellow-500">
              {el}
            </div>
          ))}
          <p className="text-gray-500">(123)</p>
        </div>
        <Link
          to={`single-route/${product.id}`}
          className="block mt-2 font-medium text-base text-black line-clamp-2 hover:text-green-600"
        >
          {product.title}
        </Link>
        <div className="flex justify-between items-center mt-2">
          <h3 className="font-medium text-lg text-green-600">
            ${product.price}
          </h3>
          <button
            onClick={() => {
              console.log("Adding to cart:", product);
              dispatch(add(product));
            }}
            className="text-gray-700 p-2 rounded-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            <FiShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  ));
  const productsByCategoryData = productsByCategory?.products.map(
    (product, index) => (
      <div
        key={index}
        className="all-products__card border rounded-lg overflow-hidden shadow-md"
      >
        <button
          onClick={() => dispatch(addWishlist(product))}
          className="all-products__card__img-like bg-white p-2 rounded-full absolute top-2 right-2 flex items-center justify-center"
        >
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart className="text-crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <div
          onClick={() => navigate(`single-route/${product.id}`)}
          className="all-products__card__img h-80 cursor-pointer"
        >
          <img
            src={product.images[0] ? product.images[0] : defaultImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="all-products__card__info p-4">
          <div className="flex items-center gap-2">
            {star.map((el, index) => (
              <div key={index} className="text-yellow-500">
                {el}
              </div>
            ))}
            <p className="text-gray-500">(123)</p>
          </div>
          <Link
            to={`single-route/${product.id}`}
            className="block mt-2 font-medium text-base text-black line-clamp-2 hover:text-green-600"
          >
            {product.title}
          </Link>
          <div className="flex justify-between items-center mt-2">
            <h3 className="font-medium text-lg text-green-600">
              ${product.price}
            </h3>
            <button
              onClick={() => {
                console.log("Adding to cart:", product);
                dispatch(add(product));
              }}
              className="text-gray-700 p-2 rounded-md hover:bg-green-600 hover:text-white transition duration-300"
            >
              <FiShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    )
  );

  const categories = categoryData?.map((el) => (
    <li
      key={el.id}
      onClick={() => setCategory(el.slug)}
      className={`all-products__category__item cursor-pointer py-2 px-4 rounded-lg border transition duration-300 bg-green-600 text-white border-transparent text-nowrap`}
    // onClick={() => handleCategoryClick(el)}
    >
      {el.name}
    </li>
  ));

  return (
    <div className="all-products w-full max-w-[1142px] px-4 mx-auto">
      <div className="all-products__top__info flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">All products.</h2>
        <button className="py-2 px-4 border rounded-md text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition duration-300">
          View all (12)
        </button>
      </div>
      <ul className="all-products__category flex gap-4 overflow-x-auto pb-4">
        <li
          onClick={() => setCategory("")}
          className={`all-products__category__item cursor-pointer py-2 px-4 rounded-lg border transition duration-300 ${"bg-green-600 text-white border-transparent"}`}
        // onClick={() => handleCategoryClick(null)}
        >
          All
        </li>
        {categories}
      </ul>
      <div className="all-products__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category ? productsByCategoryData : products}
      </div>
    </div>
  );
};

export default AllProduct;
