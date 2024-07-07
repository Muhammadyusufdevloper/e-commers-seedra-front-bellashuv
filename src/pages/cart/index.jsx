import "./Cart.scss";
import Empty from "./Empty";
import cartImg from "../../assets/images/page/cart/cart.webp";
import { useSelector } from "react-redux";
import CartWrapper from "../../components/cart-wrapper/CartWrapper";
import { useEffect } from "react";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  useEffect(()=>{
    scroll(0,0)
  },[])
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
