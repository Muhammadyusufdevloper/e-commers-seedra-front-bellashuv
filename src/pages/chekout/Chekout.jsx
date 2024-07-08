import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/images/components/out/card.png";
import img2 from "../../assets/images/components/out/pay.png";
import img3 from "../../assets/images/components/out/play.png";
import img4 from "../../assets/images/components/out/viza.png";

function Chekout() {
  const [info, setInfo] = useState(false);

  return (
    <section className="chekout w-full max-w-[1142px] px-4 mx-auto">
      <div className={`chekout__left ${info ? "" : "chekout__left__show"}`}>
        <NavLink to={"/cart"} className="chekout__left__title flex items-center text-3xl font-semibold text-gray-800 py-4">
          <FiArrowLeft className="mr-2" />
          Checkout
        </NavLink>
        <div className="chekout__left__card grid grid-cols-1 lg:grid-cols-2 gap-6 py-5">
          <div className="chekout__left__info">
            <h2 className="chekout__left__info__title text-xl font-semibold text-gray-800 pb-2">Personal info</h2>
            <div className="chekout__left__info-top grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm text-gray-600">
                Name
                <input className="input-field" placeholder="Your name" type="text" />
              </label>
              <label className="text-sm text-gray-600">
                Phone number
                <input className="input-field" placeholder="Your number" type="text" />
              </label>
            </div>
            <h2 className="chekout__left__info__title text-xl font-semibold text-gray-800 pt-4 pb-2">Address</h2>
            <div className="chekout__left__info-admin grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm text-gray-600">
                State
                <input className="input-field" placeholder="Name of state" type="text" />
              </label>
              <label className="text-sm text-gray-600">
                City
                <input className="input-field" placeholder="Name of city" type="text" />
              </label>
              <label className="text-sm text-gray-600">
                Address
                <input className="input-field" placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063" type="text" />
              </label>
              <label className="text-sm text-gray-600">
                ZIP code
                <input className="input-field" placeholder="ZIP code" type="text" />
              </label>
            </div>
            <button onClick={() => setInfo(true)} className="chekout__left__info-btn mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Continue
            </button>
          </div>
          <div className="chekout__left__count bg-white rounded-md shadow-md p-5">
            <h3 className="chekout__left__count__title text-lg font-semibold text-gray-800 pb-2">Your cart</h3>
            <p className="chekout__left__count__text text-sm text-gray-600 pb-1">
              SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting
            </p>
            <h3 className="chekout__left__count__title-price text-lg font-semibold text-gray-800">$12.56</h3>
            {/* Repeat items as necessary */}
            <div className="chekout__left__count__total flex items-center justify-between mt-4">
              <p className="chekout__left__count__text text-sm text-gray-600">Total amount</p>
              <h3 className="chekout__left__count__title-price text-lg font-semibold text-gray-800">$12.56</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={`chekout__right ${info ? "chekout__show" : ""}`}>
        <h2 onClick={() => setInfo(false)} className="chekout__right__title flex items-center text-3xl font-semibold text-gray-800 py-4">
          <FiArrowLeft className="mr-2" />
          Payment info
        </h2>
        <div className="chekout__right__card bg-white rounded-md shadow-md p-5">
          <p className="text-sm text-gray-600">Card type</p>
          <div className="chekout__right__card-img flex justify-between mt-2">
            <img src={img1} alt="Card type" className="w-1/4" />
            <img src={img2} alt="Card type" className="w-1/4" />
            <img src={img3} alt="Card type" className="w-1/4" />
            <img src={img4} alt="Card type" className="w-1/4" />
          </div>
        </div>
        <div className="chekout__right-num mt-4">
          <p className="text-sm text-gray-600">Card number</p>
          <input className="input-field" placeholder="0000 0000 0000 0000" type="text" />
        </div>
        <div className="chekout__right__date grid grid-cols-2 gap-4 mt-4">
          <label className="text-sm text-gray-600">
            Expiring date
            <input className="input-field" placeholder="01/01" type="text" />
          </label>
          <label className="text-sm text-gray-600">
            CCV
            <input className="input-field" placeholder="123" type="text" />
          </label>
        </div>
        <div className="chekout__right__bottom flex items-center justify-between mt-4">
          <p className="text-sm text-gray-600">Total amount</p>
          <h3 className="text-lg font-semibold text-gray-800">$12.56</h3>
        </div>
        <button className="chekout__right__btn mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          <p className="text-white">$12.56</p>
          <p className="text-white">Continue</p>
        </button>
      </div>
    </section>
  );
}

export default Chekout;
