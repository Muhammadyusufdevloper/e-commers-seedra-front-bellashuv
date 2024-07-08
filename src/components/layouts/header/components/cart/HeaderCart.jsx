import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeAll,
} from "../../../../../context/slice/cartSlice";
import Empty from "../../../../../pages/cart/Empty";
import cartImg from "../../../../../assets/images/page/cart/cart.webp";

const HeaderCart = ({ setShowCart }) => {
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const handelShop = () => {
    if (confirm("Are you sure")) {
      dispatch(removeAll());
      localStorage.removeItem("cart");
    }
  };
  console.log(cartData);

  let cartItem = cartData?.map((el) => (
    <div
      className="flex items-center justify-between gap-5 h-30 p-2"
      key={el.id}
    >
      <div className="flex-none">
        <img src={el.images[0]} alt="" className="w-24 h-full" />
      </div>
      <div className="flex flex-col gap-2 w-72">
        <p>{el.title}</p>
        <div className="flex items-center justify-between">
          <p>{el.amount} pack</p>
          <h3>${el.price}</h3>
        </div>
      </div>

      <div className="flex items-center gap-4 p-1 border rounded-sm">
        <button
          disabled={el.amount <= 1}
          onClick={() => dispatch(decreaseAmount(el))}
          className="text-green-600"
        >
          -
        </button>
        <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-green-100 text-green-600">
          {el.amount}
        </span>
        <button
          onClick={() => dispatch(increaseAmount(el))}
          className="text-green-600"
        >
          +
        </button>
      </div>
    </div>
  ));
  return (
    <div
      className="absolute top-4 right-0 w-[530px] h-[380px] bg-white shadow-lg rounded-lg z-50 overflow-y-auto"
      onMouseEnter={() => setShowCart(true)}
      onMouseLeave={() => setShowCart(false)}
    >
      <div className="flex flex-col gap-4 p-4">
        {cartData.length > 0 ? cartItem : <Empty url={cartImg} />}
      </div>
      <div className="py-2">
        <button onClick={handelShop} className="py-2 px-5 bg-transparent ">
          Clear
        </button>
        <button className="py-2 px-5 bg-green-700 rounded-lg text-white">
          Proceed to payment
        </button>
      </div>
    </div>
  );
};

export default HeaderCart;
