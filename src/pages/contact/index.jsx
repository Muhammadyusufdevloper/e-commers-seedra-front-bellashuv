import "./contact.scss";

import { Fragment, useState } from "react";

import CallImg from "../../assets/images/page/note-found/phone.png";
import EmailImg from "../../assets/images/page/note-found/email.png";

const BOT_TOKEN = "7321708093:AAFU3ALIU-JCCRSZT9of-ygLdd9MAD1MQQs";
const CHAT_ID = "-4263039203";
// https://api.telegram.org/bot7321708093:AAFU3ALIU-JCCRSZT9of-ygLdd9MAD1MQQs/getUpdates
const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userOpinion, setUserOpinion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "User Opinion %0A";
    text += `User-name:   ${userName} %0A%0A`;
    text += `User-email: ${userEmail} %0A%0A`;
    text += `User-opinion:   ${userOpinion} %0A%0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setUserName("");
    setUserEmail("");
    setUserOpinion("");
  };
  return (
    <Fragment>
      <div className="contact container">
        <div className="contact__info">
          <div className="contact__info__top">
            <h2>Contact us</h2>
            <p>
              Send for us your request and we will get in touch with you as soon
              as possible
            </p>
          </div>
          <div className="contact__info__bottom">
            <div className="contact__info__bottom__frame">
              <img src={CallImg} alt="" />
              <span>+380 98 782 82 23</span>
            </div>
            <div className="contact__info__bottom__frame">
              <img src={EmailImg} alt="" />
              <span>mailmail@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <div className="contact__form__input">
              <label htmlFor="">Name</label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="name"
                id=""
                placeholder="Your name"
              />
            </div>
            <div className="contact__form__input">
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                name="email"
                id=""
                placeholder="Your email"
              />
            </div>
            <div className="contact__form__input">
              <label htmlFor="">Message</label>
              <textarea
                required
                value={userOpinion}
                onChange={(e) => setUserOpinion(e.target.value)}
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="contact__form__button">
              <button>Send request</button>
              <p>By sending request you agree to out Pivacy&Policy</p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
