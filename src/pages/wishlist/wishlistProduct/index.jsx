import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { addWishlist } from "../../../context/api/slice/wishlistSlice";

const WishlistData = ({ data }) => {
  const dispatch = useDispatch();
  let wishlistData = useSelector((state) => state.wishlistSlice.data);
  const star = [
    <FaStar key={"1"} />,
    <FaStar key={"2"} />,
    <FaStar key={"3"} />,
    <FaStar key={"4"} />,
    <FaStarHalfAlt key={"5"} />,
  ];
  let products = data?.map((product) => (
    <div
      key={data.id}
      className="relative overflow-hidden flex flex-col gap-5 rounded border border-gray-300 p-2.5"
    >
      <button
        onClick={() => dispatch(addWishlist(product))}
        className="self-end bg-transparent border-none"
      >
        {wishlistData.some((el) => el.id === product.id) ? (
          <FaHeart className="text-crimson w-5 h-5" />
        ) : (
          <FaRegHeart className="w-5 h-5" />
        )}
      </button>
      <div className="h-56 bg-gray-300">
        <img
          src={product?.urls}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex items-center space-x-1">
          {star.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
          <p>(123)</p>
        </div>
        <p className="text-gray-600 text-lg font-medium col-span-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-600">
            ${product.price}
          </h3>
          <FiShoppingCart className="w-5 h-5" />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="py-12">
        <div className="w-full max-w-[1142px] px-4 mx-auto grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
          {products}
        </div>
      </section>
    </>
  );
};

export default memo(WishlistData);
