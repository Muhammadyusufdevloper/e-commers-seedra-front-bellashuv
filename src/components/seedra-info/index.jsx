import { Fragment, memo } from "react";
import SeedraImg from "../../assets/images/page/home/ourBlog/girl.jpg";

const SeedraInfo = () => {
  return (
    <Fragment>
      <div className="w-full max-w-[1142px] px-4 mx-auto flex flex-wrap items-center justify-between py-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl mb-4">
            Seedra helps to grow fast and efficient
          </h2>
          <div className="text-sm md:text-base mb-6">
            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
            </p>
            <p>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings.
            </p>
            <p>
              Your easy growing experience is our guarantee Spinach common
              culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
              risotto, and more
            </p>
            <p>
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src={SeedraImg} alt="" className="w-full" />
        </div>
      </div>
    </Fragment>
  );
};

export default memo(SeedraInfo);

