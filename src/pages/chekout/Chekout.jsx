import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import img1 from "../../assets/images/components/out/card.png";
import img2 from "../../assets/images/components/out/pay.png";
import img3 from "../../assets/images/components/out/play.png";
import img4 from "../../assets/images/components/out/viza.png";
import "./chekout.scss";

function Chekout() {
  const [info, setInfo] = useState(false);
  return (
    <section className="chekout container">
      <div className={`chekout__left ${info ? "" : "chekout__left__show"}`}>
        <NavLink to={"/cart"} className="chekout__left__title">
          <FiArrowLeft />
          Checkout
        </NavLink>
        <div className="chekout__left__card">
          <div className="chekout__left__info">
            <h2 className="chekout__left__info__title">Personal info</h2>
            <div className="chekout__left__info-top">
              <label htmlFor="">
                name
                <input placeholder="Your name" type="text" />
              </label>
              <label htmlFor="">
                Phone number
                <input placeholder="Your number" type="text" />
              </label>
            </div>
            <h2 className="chekout__left__info__title">Adress</h2>
            <div className="chekout__left__info-admin">
              <label htmlFor="">
                State
                <input placeholder="Name of state" type="text" />
              </label>
              <label htmlFor="">
                Sity
                <input placeholder="Name of city" type="text" />
              </label>
              <label htmlFor="">
                adress
                <input
                  placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                  type="text"
                />
              </label>
              <label htmlFor="">
                ZIP code
                <input placeholder="ZIP code" type="text" />
              </label>
            </div>
            <button
              onClick={() => setInfo(true)}
              className="chekout__left__info-btn"
            >
              Continue
            </button>
          </div>
          <div className="chekout__left__count">
            <h3 className="chekout__left__count__title">Your cart</h3>
            <p className="chekout__left__count__text">
              SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
              Planting
            </p>
            <h3 className="chekout__left__count__title-price">$12.56</h3>
            <p className="chekout__left__count__text">
              SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
              Planting
            </p>
            <h3 className="chekout__left__count__title-price">$12.56</h3>
            <p className="chekout__left__count__text">
              SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
              Planting
            </p>
            <h3 className="chekout__left__count__title-price">$12.56</h3>
            <div className="chekout__left__count__total">
              <p className="chekout__left__count__text">Total amount</p>
              <h3 className="chekout__left__count__title">$12.56</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={`chekout__right ${info ? "chekout__show" : ""}`}>
        <h2 onClick={() => setInfo(false)} className="chekout__right__title">
          <FiArrowLeft />
          Payment info
        </h2>
        <div className="chekout__right__card">
          <p>Card type</p>
          <div className="chekout__right__card-img">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="chekout__right-num">
          <p>Card number</p>
          <input placeholder="0000 0000 0000 0000" type="text" />
        </div>
        <div className="chekout__right__date">
          <label htmlFor="">
            Expiring date
            <input placeholder="01/01" type="text" />
          </label>
          <label htmlFor="">
            CCV
            <input placeholder="123" type="text" />
          </label>
        </div>
        <div className="chekout__right__bottom">
          <p>Total amount</p>
          <h3>$12.56</h3>
        </div>
        <button className="chekout__right__btn">
          <p>$12.56</p>
          <p>Continue</p>
        </button>
      </div>
    </section>
  );
}

export default Chekout;
