import {
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../../assets/images/default.png";
import {
  useGetProductsByCategoryQuery,
  useGetProductsBySearchQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { addWishlist } from "../../context/api/slice/wishlistSlice";
import { add } from "../../context/slice/cartSlice";
import { useState } from "react";

const AllProduct = () => {
  let [sort, setSort] = useState("");
  let [search, setSearch] = useState("");
  let [category, setCategory] = useState("");
  let [limit, setLimit] = useState(6);
  console.log(sort);

  const { data: productsData } = useGetProductsQuery({
    sortBy: "title",
    order: sort,
    limit,
  });
  const { data: productsByCategory } = useGetProductsByCategoryQuery(category, {
    sortBy: "title",
    order: sort,
  });

  const { data: searchData } = useGetProductsBySearchQuery(search);
  const wishlistData = useSelector((state) => state.wishlistSlice.data) || [];
  const dispatch = useDispatch();
  const { data: categoryData } = useGetCategoryQuery();
  const { data } = useGetProductsQuery();

  let navigate = useNavigate();

  const getRating = (rating) => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<FaStar />);
    }
    if (rating % 1 > 0.4) {
      res.push(<FaStarHalfAlt />);
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(<FaRegStar />);
    }
    return res;
  };

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
          src={product.images[0]}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="all-products__card__info p-4">
        <div className="flex items-center gap-2">
          {getRating(product.rating)}
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
            className="w-full h-full object-contain"
          />
        </div>
        <div className="all-products__card__info p-4">
          <div className="flex items-center gap-2">
            {getRating(product.rating)}
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
  const productsBySearch = searchData?.products.map((product, index) => (
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
          className="w-full h-full object-contain"
        />
      </div>
      <div className="all-products__card__info p-4">
        <div className="flex items-center gap-2">
          {getRating(product.rating)}
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

  console.log(searchData);

  const categories = categoryData?.map((el) => (
    <li
      key={el.id}
      onClick={() => setCategory(el.slug)}
      className={`all-products__category__item cursor-pointer py-2 px-4 rounded-lg border transition duration-500 bg-green-600 text-white border-transparent text-nowrap`}
    >
      {el.name}
    </li>
  ));

  return (
    <div className=" w-full max-w-[1142px] px-4 mx-auto mt-10">
      <form className="flex justify-between items-center mb-8 gap-5">
        <div className="blog__form-input w-full border rounded-full overflow-hidden">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 outline-none"
          />
        </div>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded-full outline-none"
        >
          <option value="asc">Sort by asc </option>
          <option value="desc">Sort by desc</option>
        </select>
      </form>
      <div className="all-products__top__info flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">All products.</h2>
        <button
          onClick={() => setLimit(data?.total)}
          className="py-2 px-4 border rounded-md text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition duration-300"
        >
          View all ({data?.total})
        </button>
      </div>
      <ul className="  product__list flex gap-4 overflow-x-auto pb-2 mb-5">
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
        {search
          ? productsBySearch
          : category
          ? productsByCategoryData
          : products}
      </div>
    </div>
  );
};

export default AllProduct;
