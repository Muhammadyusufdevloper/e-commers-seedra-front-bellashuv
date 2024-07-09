import { memo, useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { decreaseAmount, increaseAmount, remove } from "../../context/slice/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartWrapper = ({ data }) => {
  const [sum, setSum] = useState(0);
  const [promo, setPromo] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  console.log(data);

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
    <div className="grid grid-cols-[9fr_1fr_1fr_1fr] items-center gap-5 p-4 border rounded-sm" key={el.id}>
      <div className="flex items-center gap-4">
        <div className="relative">
          <img src={el.thumbnail} alt="" className="w-16 h-16" />
          <button
            onClick={() => dispatch(remove(el))}
            className="absolute top-[-7px] left-[-7px] text-red-500 text-2xl"
          >
            <IoCloseCircle />
          </button>
        </div>
        <div>
          <h3>{el.title}</h3>
          {/* <p>{el.description}</p> */}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h4 className="hidden md:block">AMOUNT</h4>
        <div className="flex items-center gap-4 p-1 border rounded-sm">
          <button
            disabled={el.amount <= 1}
            onClick={() => dispatch(decreaseAmount(el))}
            className="text-green-600"
          >
            -
          </button>
          <span className="w-8 h-8 flex items-center justify-center rounded-sm bg-green-100 text-green-600">{el.amount}</span>
          <button onClick={() => dispatch(increaseAmount(el))} className="text-green-600">+</button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h4 className="hidden md:block">PRICE</h4>
        <h3 className="text-lg">${el.price}</h3>
      </div>
      <div className="flex items-center gap-4">
        <h4 className="hidden md:block">TOTAL</h4>
        <h3 className="text-lg">${Math.ceil(el.price * el.amount)}</h3>
      </div>
    </div>
  ));

  return (
    <div className="w-full max-w-[1142px] px-4 mx-auto py-5 min-h-[calc(100vh-220px)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-5">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-semibold text-gray-900">Your cart.</h3>
            <h4 className="text-2xl font-semibold text-gray-600">{data?.length} Items</h4>
          </div>
          <div className="flex justify-between items-center py-5 gap-4 flex-wrap">
            <div>
              <h3 className="text-sm font-normal text-gray-600">PRODUCT DETAILS</h3>
            </div>
            <div className="flex gap-6 md:gap-10">
              <h3 className="text-sm font-normal text-gray-600">AMOUNT</h3>
              <h3 className="text-sm font-normal text-gray-600">PRICE</h3>
              <h3 className="text-sm font-normal text-gray-600">TOTAL</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4">{cartItem}</div>
        </div>
        <div className="mt-5 p-5 border rounded-md max-h-[500px]">
          <h3 className="text-lg font-bold text-gray-900">Order summary</h3>
          <h4 className="text-sm font-normal text-gray-600">{data?.length} Items</h4>
          <select name="" id="" className="my-5 p-2 border rounded-full w-full">
            <option value="Shipping">Shipping</option>
            <option value="Shoes">Shoes</option>
            <option value="Shipping">Shipping</option>
          </select>
          <form onSubmit={handleAmount} className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Promocode</h3>
            <input
              onChange={(e) => setPromo(e.target.value)}
              type="text"
              placeholder="Promocode"
              className="p-2 border rounded-md"
            />
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Total amount</h3>
              <h2 className="text-2xl font-bold text-gray-900">${sum}</h2>
            </div>
            <button className="mt-5 p-2 bg-green-600 text-white rounded-md">Continue</button>
          </form>
        </div>
      </div>
      <button onClick={handelShop} className="my-5 p-2 border rounded-md text-gray-600">Continue shopping</button>
    </div>
  );
};

export default memo(CartWrapper);
