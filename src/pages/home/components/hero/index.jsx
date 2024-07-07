import heroImg from "../../../../assets/images/page/home/heroImg.svg";
import { AiFillFire } from "react-icons/ai";
import { memo } from "react";

const Hero = () => {
  return (
    <div className="hero py-5 lg:py-20 container">
      <div className="hero__wrapper bg-cover bg-center lg:bg-no-repeat lg:flex lg:justify-between lg:items-center lg:gap-10 lg:px-10 lg:py-10 lg:rounded-lg lg:border lg:border-transparent lg:bg-hero">
        <div className="hero__info max-w-3xl lg:max-w-none">
          <h2 className="hero__title text-4xl lg:text-6xl font-semibold text-gray-800 leading-tight pb-4">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h2>
          <p className="hero__desc text-base lg:text-lg font-light text-gray-700 leading-relaxed">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>
          <div className="hero__price flex items-center gap-4 lg:gap-6 mt-4 lg:mt-6">
            <AiFillFire className="hero__fire text-red-500 text-4xl lg:text-5xl" />
            <h3 className="hero__new__price text-3xl lg:text-5xl font-semibold text-gray-800">
              $12.56
            </h3>
            <p className="hero__old__price text-lg lg:text-xl font-semibold text-gray-700 line-through">
              $12.56
            </p>
          </div>
          <div className="hero__btns flex gap-4 lg:gap-6 mt-6">
            <button className="hero__card__btn bg-green-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md font-medium text-lg lg:text-xl border border-green-500 hover:bg-white hover:text-green-500 transition duration-300">
              Add to cart
            </button>
            <button className="hero__Discover__btn bg-white text-green-500 px-4 lg:px-6 py-2 lg:py-3 rounded-md font-medium text-lg lg:text-xl border border-white hover:bg-green-500 hover:text-white transition duration-300">
              Discover
            </button>
          </div>
        </div>
        <div className="hero__img lg:w-2/5">
          <img src={heroImg} alt="Hero Image" className="w-full" />
        </div>
      </div>
      <div className="hero__bottom mt-10 lg:mt-20 bg-bottom lg:bg-center bg-cover rounded-lg lg:py-10 lg:px-10 text-center">
        <h2 className="hero__bottom__title text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
          We sell seeds
        </h2>
        <p className="hero__bottom__desc text-base lg:text-lg font-light text-gray-700">
          that always sprout and gardening supplies which never break
        </p>
      </div>
    </div>
  );
};

export default memo(Hero);
