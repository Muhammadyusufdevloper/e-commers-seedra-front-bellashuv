import footerLogo from "../../../assets/images/components/footerLogo.svg";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import "./Footer.scss";
import { memo } from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <ul className="footer__list">
            <li className="footer__item">ALL PRODUCTS</li>
            <li className="footer__item footer__item__about">ABOUT SEEDRA</li>
            <li className="footer__item">OUR BLOG</li>
          </ul>
          <div className="footer__logo">
            <img src={footerLogo} alt="" />
          </div>
          <ul className="footer__list">
            <li className="footer__item">Terms&Conditions</li>
            <li className="footer__item footer__item__priv">Privacy Policy</li>
          </ul>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__icons">
            <LuInstagram />
            <FaFacebook />
          </div>
          <p className="footer__desc">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
