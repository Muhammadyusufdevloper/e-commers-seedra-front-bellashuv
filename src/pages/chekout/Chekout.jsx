import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const BOT_TOKEN = "7313879684:AAH0lhoKddXhkYP-YO5QnYueauqqT3J9hzE";
const CHAT_ID = "-1002180292093";

function Checkout() {
  const [info, setInfo] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const navigate = useNavigate();
  const [sum, setSum] = useState(0);
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    const total = cartData?.reduce((acc, el) => acc + el.price * el.amount, 0);
    setSum(Math.ceil(total));
  }, [cartData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = `Checkout Info %0A`;
    text += `Name: ${name} %0A`;
    text += `Phone: ${phone} %0A`;
    text += `State: ${state} %0A`;
    text += `City: ${city} %0A`;
    text += `Address: ${address} %0A`;
    text += `ZIP Code: ${zip} %0A`;
    text += `Total Amount: $${sum} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    navigate("/payment");

    setName("");
    setPhone("");
    setState("");
    setCity("");
    setAddress("");
    setZip("");

    setInfo(true);
  };

  return (
    <section className="chekout w-full max-w-[1142px] px-4 mx-auto">
      <div className={`chekout__left ${info ? "" : "chekout__left__show"}`}>
        <NavLink
          to={"/cart"}
          className="chekout__left__title flex items-center text-3xl font-semibold text-gray-800 py-4"
        >
          <FiArrowLeft onClick={() => navigate(-1)} className="mr-2" />
          Checkout
        </NavLink>
        <form onSubmit={handleSubmit}>
          <div className="chekout__left__card grid grid-cols-1 lg:grid-cols-2 gap-6 py-5">
            <div className="chekout__left__info">
              <h2 className="chekout__left__info__title text-xl font-semibold text-gray-800 pb-2">
                Personal info
              </h2>
              <div className="chekout__left__info-top grid grid-cols-1 gap-4">
                <label className="text-sm text-gray-600">
                  Name
                  <input
                    className="input-field mt-2 border border-gray-300 p-2 rounded-md w-full"
                    placeholder="Your name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="text-sm text-gray-600">
                  Phone number
                  <input
                    className="input-field mt-2 border border-gray-300 p-2 rounded-md w-full"
                    placeholder="Your number"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </label>
              </div>
              <h2 className="chekout__left__info__title text-xl font-semibold text-gray-800 pt-4 pb-2">
                Address
              </h2>
              <div className="chekout__left__info-admin grid grid-cols-1 gap-4">
                <label className="text-sm text-gray-600">
                  State
                  <input
                    className="input-field mt-2 border border-gray-300 p-2 rounded-md w-full"
                    placeholder="Name of state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </label>
                <label className="text-sm text-gray-600">
                  City
                  <input
                    className="input-field mt-2 border border-gray-300 p-2 rounded-md w-full"
                    placeholder="Name of city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </label>
                <label className="text-sm text-gray-600">
                  Address
                  <input
                    className="input-field mt-2 border border-gray-300 p-2 rounded-md w-full"
                    placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </label>
                <label className="text-sm text-gray-600">
                  ZIP code
                  <input
                    className="input-field mt-2 border border-gray-300 p-2 rounded-md w-full"
                    placeholder="ZIP code"
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button
                type="submit"
                className="chekout__left__info-btn mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Continue
              </button>
            </div>
            <div className="chekout__left__count bg-white rounded-md shadow-md p-5">
              <h3 className="chekout__left__count__title text-lg font-semibold text-gray-800 pb-2">
                Your cart
              </h3>
              <p className="chekout__left__count__text text-sm text-gray-600 pb-1">
                SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                Planting
              </p>
              <h3 className="chekout__left__count__title-price text-lg font-semibold text-gray-800">
                ${sum}
              </h3>
              {/* Repeat items as necessary */}
              <div className="chekout__left__count__total flex items-center justify-between mt-4">
                <p className="chekout__left__count__text text-sm text-gray-600">
                  Total amount
                </p>
                <h3 className="chekout__left__count__title-price text-lg font-semibold text-gray-800">
                  ${sum}
                </h3>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
