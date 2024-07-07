import React, { memo, useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import {
  decreaseAmount,
  increaseAmount,
  remove,
  removeAll,
} from "../../context/slice/cartSlice";
import "./cartWrapper.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartWrapper = ({ data }) => {
  const [sum, setSum] = useState(0);
  const [promo, setPromo] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const total = data.reduce((acc, el) => acc + el.price * el.amount, 0);
    setSum(Math.ceil(total));
  }, [data]);

  const handleAmount = (e) => {
    e.preventDefault();
    if (promo === "Laylo") {
      const discountedSum = sum * 0.8;
      setSum(Math.ceil(discountedSum));
      alert("20% off");
    } else {
      alert("Promocode error");
    }
  };
  const handelShop = () => {
    navigate("/chekout");
    localStorage.removeItem("cart");
  };

  let cartItem = data?.map((el) => (
    <div className="cart__card" key={el.id}>
      <div className="cart__infos">
        <div className="cart__img">
          <img src={el.urls} alt="" />
          <button
            onClick={() => dispatch(remove(el))}
            className="cart__remove__btn"
          >
            <IoCloseCircle />
          </button>
        </div>
        <div className="cart__info">
          <h3>{el.title}</h3>
          <p>{el.description}</p>
        </div>
      </div>
      <div className="cart__count">
        <h4 className="cart__count__title">AMOUNT</h4>
        <div className="cart__counts__btn">
          <button
            disabled={el.amount <= 1}
            onClick={() => dispatch(decreaseAmount(el))}
          >
            -
          </button>
          <span> {el.amount}</span>
          <button onClick={() => dispatch(increaseAmount(el))}>+</button>
        </div>
      </div>
      <div className="cart__prices">
        <h4 className="cart__count__title">PRICE</h4>
        <h3 className="cart__price">${el.price}</h3>
      </div>
      <div className="cart__total__prices">
        <h4 className="cart__count__title">TOTAL</h4>
        <h3 className="cart__total__price">
          ${Math.ceil(el.price * el.amount)}
        </h3>
      </div>
    </div>
  ));

  return (
    <div className="cart container">
      <div className="cart__wrapper">
        <div className="cart__left">
          <div className="cart__top">
            <h3>Your cart.</h3>
            <h4>{data?.length} Items</h4>
          </div>
          <div className="cart__top__cards">
            <div className="cart__top__left">
              <h3>PRODUCT DETAILS</h3>
            </div>
            <div className="cart__top__right">
              <h3>AMOUNT</h3>
              <h3>PRICE</h3>
              <h3>TOTAL</h3>
            </div>
          </div>
          <div className="cart__cards">{cartItem}</div>
        </div>
        <div className="cart__right">
          <h3 className="cart__price__info">Order summary</h3>
          <h4>{data?.length} Items</h4>
          <select name="" id="">
            <option value="Shipping">Shipping</option>
            <option value="Shoes">Shoes</option>
            <option value="Shipping">Shipping</option>
          </select>
          <form action="" onSubmit={handleAmount} className="cart">
            <h3 className="cart__promo">Promocode</h3>
            <input
              onChange={(e) => setPromo(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Promocode"
            />
            <div className="cart__total__amount">
              <h3>Total amount</h3>
              <h2>${sum}</h2>
            </div>
            <button className="cart__amount__btn">Continue</button>
          </form>
        </div>
      </div>
      <button onClick={handelShop} className="cart__logOut">
        Continue shopping
      </button>
    </div>
  );
};

export default memo(CartWrapper)
