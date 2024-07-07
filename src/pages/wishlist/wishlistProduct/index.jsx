import "./wishlistProduct.scss";

import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import{ memo } from "react";
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
    <div key={data.id} className="products__card">
      <button
        onClick={() => dispatch(addWishlist(product))}
        className="products__card__img-like"
      >
        {wishlistData.some((el) => el.id === product.id) ? (
          <FaHeart color="crimson" />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <div className="products__card__img">
        <img src={product?.urls} alt="" />
      </div>
      <div className="products__card__info">
        <div className="products__card__stars">
          {star.map((el, index) => (
            <div key={index} className="products__card__stars-icon">
              {el}
            </div>
          ))}
          <p>(123)</p>
        </div>
        <p className="products__card__text">{product.description}</p>
        <div className="products__card__info__bottom">
          <h3 className="products__card__title-price">${product.price}</h3>
          <FiShoppingCart className="products__card__title-icon" />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="product">
        <div className="container product__cards">{products}</div>
      </section>
    </>
  );
};

export default memo(WishlistData);
