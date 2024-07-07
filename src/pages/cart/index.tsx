import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import CartWrapper from "../../components/cart-wrapper/CartWrapper";
import cartImg from "../../assets/images/page/cart/cart.webp";

interface RootState {
  cart: {
    value: any[];
  };
}

const Cart: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.cart.value);

  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <>
      {cartData.length ? (
        <CartWrapper data={cartData} />
      ) : (
        <Empty url={cartImg} />
      )}
    </>
  );
};

export default Cart;
