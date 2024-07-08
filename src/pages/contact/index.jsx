import { Fragment, useState } from "react";

import CallImg from "../../assets/images/page/note-found/phone.png";
import EmailImg from "../../assets/images/page/note-found/email.png";

const BOT_TOKEN = "7321708093:AAFU3ALIU-JCCRSZT9of-ygLdd9MAD1MQQs";
const CHAT_ID = "-4263039203";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userOpinion, setUserOpinion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `User Opinion %0A`;
    text += `User-name: ${userName} %0A%0A`;
    text += `User-email: ${userEmail} %0A%0A`;
    text += `User-opinion: ${userOpinion} %0A%0A`;

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
      <div className="contact w-full max-w-[1142px] px-4 mx-auto mt-32 flex justify-between p-10 bg-cover bg-center rounded-lg pt-10 min-h-screen-60">
        <div className="contact__info w-1/2 flex flex-col justify-between p-8">
          <div className="contact__info__top">
            <h2 className="text-4xl">Contact us</h2>
            <p className="max-w-xs">
              Send for us your request and we will get in touch with you as soon
              as possible
            </p>
          </div>
          <div className="contact__info__bottom flex flex-col gap-2">
            <div className="contact__info__bottom__frame flex items-center gap-2">
              <img src={CallImg} alt="" className="w-10" />
              <span>+380 98 782 82 23</span>
            </div>
            <div className="contact__info__bottom__frame flex items-center gap-2">
              <img src={EmailImg} alt="" className="w-10" />
              <span>mailmail@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="contact__form w-1/2 p-5 mx-10 bg-white rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="contact__form__input flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-700">Name</label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="name"
                id="name"
                className="max-w-full text-gray-700 outline-none px-4 py-2 rounded border border-gray-300"
                placeholder="Your name"
              />
            </div>
            <div className="contact__form__input flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-700">E-mail</label>
              <input
                type="text"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                name="email"
                id="email"
                className="max-w-full text-gray-700 outline-none px-4 py-2 rounded border border-gray-300"
                placeholder="Your email"
              />
            </div>
            <div className="contact__form__input flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-700">Message</label>
              <textarea
                required
                value={userOpinion}
                onChange={(e) => setUserOpinion(e.target.value)}
                name="message"
                id="message"
                className="max-w-full text-gray-700 outline-none px-4 py-2 rounded border border-gray-300"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="contact__form__button flex justify-between items-center gap-8 mt-4">
              <button className="w-32 px-4 py-2 text-white bg-green-500 border-2 border-green-500 rounded-lg transition duration-400 hover:text-green-500 hover:bg-white">
                Send request
              </button>
              <p className="text-gray-700">By sending request you agree to our Privacy & Policy</p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
