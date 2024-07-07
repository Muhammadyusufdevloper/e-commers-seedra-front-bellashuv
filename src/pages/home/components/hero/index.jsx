import heroImg from "../../../../assets/images/page/home/heroImg.svg";
import { AiFillFire } from "react-icons/ai";
import "./Hero.scss";
import { memo } from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__wrapper">
        <div className="hero__info">
          <h2 className="hero__title">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h2>
          <p className="hero__desc">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>
          <div className="hero__price">
            <AiFillFire className="hero__fire" />
            <h3 className="hero__new__price">$12.56</h3>
            <p className="hero__old__price">$12.56</p>
          </div>
          <div className="hero__btns">
            <button className="hero__card__btn">Add to card</button>
            <button className="hero__Discover__btn">Discover</button>
          </div>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="hero__bottom">
        <h2 className="hero__bottom__title">We sell seeds </h2>
        <p className="hero__bottom__desc">
          that always sprout and gardening supplies which never break
        </p>
      </div>
    </div>
  );
};

export default memo(Hero);
