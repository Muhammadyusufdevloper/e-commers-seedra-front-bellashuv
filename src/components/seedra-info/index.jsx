import "./SeedraInfo.scss";

import { Fragment, memo } from "react";
import SeedraImg from "../../assets/images/page/home/ourBlog/girl.jpg";

const SeedraInfo = () => {
  return (
    <Fragment>
      <div className="seedra container">
        <div className="seedra__info">
          <h2>Seedra helps to grow fast and efficiant</h2>
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
            Your easy growing experience is our guarantee Spinach commom
            culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
            risotto, and more
          </p>
          <p>
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>
        <div className="seedra__img">
          <img src={SeedraImg} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default memo(SeedraInfo)
