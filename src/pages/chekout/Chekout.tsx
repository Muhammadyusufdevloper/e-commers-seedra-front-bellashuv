import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import img1 from "../../assets/images/components/out/card.png";
import img2 from "../../assets/images/components/out/pay.png";
import img3 from "../../assets/images/components/out/play.png";
import img4 from "../../assets/images/components/out/viza.png";

interface RootState {
  cart: {
    value: any[]; // Replace 'any' with your actual cart item type
  };
}

const Chekout: React.FC = () => {
  const [info, setInfo] = useState(false);
  const cartData = useSelector((state: RootState) => state.cart.value);

  return (
    <section className="min-h-[calc(100vh-200px)] container">
      <div className={`mt-8 ${info ? "" : "block"}`}>
        <NavLink to="/cart" className="text-3xl flex items-center">
          <FiArrowLeft />
          Checkout
        </NavLink>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 py-8">
          <div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Personal info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <label className="flex flex-col gap-2 text-gray-500 text-lg">
                  Name
                  <input
                    placeholder="Your name"
                    type="text"
                    className="p-4 border border-gray-300 rounded"
                  />
                </label>
                <label className="flex flex-col gap-2 text-gray-500 text-lg">
                  Phone number
                  <input
                    placeholder="Your number"
                    type="text"
                    className="p-4 border border-gray-300 rounded"
                  />
                </label>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <label className="flex flex-col gap-2 text-gray-500 text-lg">
                  State
                  <input
                    placeholder="Name of state"
                    type="text"
                    className="p-4 border border-gray-300 rounded"
                  />
                </label>
                <label className="flex flex-col gap-2 text-gray-500 text-lg">
                  City
                  <input
                    placeholder="Name of city"
                    type="text"
                    className="p-4 border border-gray-300 rounded"
                  />
                </label>
                <label className="flex flex-col gap-2 text-gray-500 text-lg">
                  Address
                  <input
                    placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                    type="text"
                    className="p-4 border border-gray-300 rounded"
                  />
                </label>
                <label className="flex flex-col gap-2 text-gray-500 text-lg">
                  ZIP code
                  <input
                    placeholder="ZIP code"
                    type="text"
                    className="p-4 border border-gray-300 rounded"
                  />
                </label>
              </div>
              <button
                onClick={() => setInfo(true)}
                className="px-6 py-3 bg-green-600 text-white rounded mt-4"
              >
                Continue
              </button>
            </div>
            <div className="mt-8 p-8 shadow-lg rounded-lg">
              <h3 className="text-lg font-medium mb-2">Your cart</h3>
              <p className="text-gray-600 mb-2">
                SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                Planting
              </p>
              <h3 className="text-lg font-medium border-b border-gray-300 py-2">
                $12.56
              </h3>
              <p className="text-gray-600 mb-2">
                SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                Planting
              </p>
              <h3 className="text-lg font-medium border-b border-gray-300 py-2">
                $12.56
              </h3>
              <p className="text-gray-600 mb-2">
                SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                Planting
              </p>
              <h3 className="text-lg font-medium border-b border-gray-300 py-2">
                $12.56
              </h3>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-600">Total amount</p>
                <h3 className="text-lg font-medium">$12.56</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-8 ${info ? "block" : "hidden"} mx-auto w-[400px]`}>
        <h2
          onClick={() => setInfo(false)}
          className="text-3xl flex items-center gap-2 cursor-pointer py-4"
        >
          <FiArrowLeft />
          Payment info
        </h2>
        <div className="mt-4">
          <p>Card type</p>
          <div className="flex justify-between gap-2 py-4">
            <img src={img1} alt="" className="w-full" />
            <img src={img2} alt="" className="w-full" />
            <img src={img3} alt="" className="w-full" />
            <img src={img4} alt="" className="w-full" />
          </div>
        </div>
        <div className="mt-4">
          <p>Card number</p>
          <input
            placeholder="0000 0000 0000 0000"
            type="text"
            className="p-3 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
          <label className="flex flex-col gap-2 text-gray-500">
            Expiring date
            <input
              placeholder="01/01"
              type="text"
              className="p-3 border border-gray-300 rounded"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-500">
            CCV
            <input
              placeholder="123"
              type="text"
              className="p-3 border border-gray-300 rounded"
            />
          </label>
        </div>
        <div className="flex justify-between items-center gap-2 py-4">
          <p className="text-gray-600">Total amount</p>
          <h3 className="text-lg font-medium">$12.56</h3>
        </div>
        <button className="w-full rounded bg-green-600 text-white flex items-center justify-between px-6 py-3 mt-4">
          <p>$12.56</p>
          <p>Continue</p>
        </button>
      </div>
    </section>
  );
};

export default Chekout;
