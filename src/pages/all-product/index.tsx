import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultImg from "../../assets/images/default.png";
import { useGetProductsQuery } from "../../context/api/productApi";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { addWishlist } from "../../context/api/slice/wishlistSlice";
import Modal from "../modal";
import { add } from "../../context/slice/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  urls: string[];
  categoryId: number;
}

interface Category {
  id: number;
  name: string;
}

const AllProduct: React.FC = () => {
  const { data: productsData } = useGetProductsQuery({ limit: 6 });
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const categoryFilter = searchParams.get("category");
  const [modal, setModal] = useState<number | null>(null);
  const wishlistData =
    useSelector((state: any) => state.wishlistSlice.data) || [];
  const dispatch = useDispatch();
  const { data: categoryData } = useGetCategoryQuery();

  const star = [
    <FaStar key="1" />,
    <FaStar key="2" />,
    <FaStar key="3" />,
    <FaStar key="4" />,
    <FaStarHalfAlt key="5" />,
  ];

  useEffect(() => {
    if (productId) {
      setModal(Number(productId));
    } else {
      setModal(null);
    }
  }, [productId]);

  const openModal = (product: Product) => {
    setSearchParams({ product: product.id.toString() });
  };

  const closeModal = () => {
    setSearchParams({});
  };

  const handleCategoryClick = (category: Category | null) => {
    setSearchParams(category ? { category: category.id.toString() } : {});
  };

  const products = productsData?.data?.products
    ?.filter(
      (product: Product) =>
        !categoryFilter || product.categoryId === Number(categoryFilter)
    )
    .map((product: Product, index: number) => (
      <div
        key={index}
        className="relative border border-gray-200 rounded-lg p-5"
      >
        <button
          onClick={() => dispatch(addWishlist(product))}
          className="absolute top-2 right-2 border border-gray-200 p-2 rounded-full bg-white"
        >
          {wishlistData.some((el: Product) => el.id === product.id) ? (
            <FaHeart className="text-crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <div onClick={() => openModal(product)} className="cursor-pointer h-80">
          <img
            src={product.urls[0] ? product.urls[0] : defaultImg}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-1">
            {star.map((el, index) => (
              <div key={index} className="text-yellow-500">
                {el}
              </div>
            ))}
            <p className="text-gray-600 font-semibold">(123)</p>
          </div>
          <Link
            to={`single-rout/${product.id}`}
            className="block text-lg font-medium mt-2 line-clamp-2"
          >
            {product.title}
          </Link>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-xl font-semibold">${product.price}</h3>
            <button
              onClick={() => dispatch(add(product))}
              className="text-xl cursor-pointer"
            >
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    ));

  const categories = categoryData?.data?.map((el: Category) => (
    <li
      key={el.id}
      className={`px-4 py-2 min-w-[140px] border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition duration-700 ${
        categoryFilter === el.id.toString()
          ? "bg-green-500 text-white border-transparent"
          : ""
      }`}
      onClick={() => handleCategoryClick(el)}
    >
      {el.name}
    </li>
  ));

  return (
    <div className="container pb-20 pt-8">
      <div className="flex items-center justify-between gap-2 mb-5">
        <h2 className="text-3xl font-semibold">All products.</h2>
        <button className="px-6 py-2 border border-gray-200 rounded-lg text-green-500 bg-transparent hover:bg-green-500 hover:text-white transition duration-700">
          View all (12)
        </button>
      </div>
      <ul className="flex items-center gap-5 overflow-x-scroll scrollbar-none py-5 mb-5">
        <li
          className={`px-4 py-2 min-w-[140px] border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer transition duration-700 ${
            !categoryFilter ? "bg-green-500 text-white border-transparent" : ""
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </li>
        {categories}
      </ul>
      <div className="grid grid-cols-3 gap-10">{products}</div>
      {modal && <Modal productId={modal} onClose={closeModal} />}
    </div>
  );
};

export default AllProduct;
