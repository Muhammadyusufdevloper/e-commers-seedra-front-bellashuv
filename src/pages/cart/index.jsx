import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartWrapper from "../../components/cart-wrapper/CartWrapper";
import Empty from "./Empty";
import cartImg from "../../assets/images/page/cart/cart.webp";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <div className="carts w-full max-w-[1142px] px-4 mx-auto py-5">
      {cartData.length ? (
        <CartWrapper data={cartData} />
      ) : (
        <Empty url={cartImg} />
      )}
    </div>
  );
};

export default Cart;
