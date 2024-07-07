import "./AboutSeedra.scss";

import { Fragment, useEffect } from "react";
import { OURTEAMDATA } from "../../static";
import OurStoryIMg from "../../assets/images/page/about-seedra/story.png";
import SeedraInfo from "../../components/seedra-info";

const AboutSeedra = () => {
  useEffect(() => {
    scroll(0, 0)
  }, [])
  return (
    <Fragment>
      <div className="about__seedra container">
        <div className="about__seedra__hero">
          <h2>Who we are and what we do</h2>
          <p>
            Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
          </p>
        </div>
        <SeedraInfo />
        <div className="about__seedra__our__story">
          <div className="about__seedra__our__story__img">
            <img src={OurStoryIMg} alt="sory.img" />
          </div>
          <div className="about__seedra__our__story__info">
            <h3>Our story</h3>
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
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
        </div>
        <div className="about__seedra__our__team">
          <h2>Meet our team</h2>
          <div className="about__seedra__our__team__members">
            {OURTEAMDATA?.map((member) => (
              <div key={member.id} className="about__seedra__our__team__member">
                <div className="about__seedra__our__team__member__img">
                  <img src={member?.img} alt="" />
                </div>
                <h3>{member?.name}</h3>
                <p>{member?.profession}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutSeedra;
