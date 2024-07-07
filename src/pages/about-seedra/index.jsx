import { Fragment, useEffect } from "react";
import { OURTEAMDATA } from "../../static";
import OurStoryIMg from "../../assets/images/page/about-seedra/story.png";
import SeedraInfo from "../../components/seedra-info";

const AboutSeedra = () => {
  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="container mx-auto">
        <div className="about__seedra__hero bg-cover bg-center bg-no-repeat h-96 md:h-80 lg:h-72 xl:h-60 flex flex-col items-center justify-center text-center rounded-lg my-10 px-6 md:px-10 lg:px-14 xl:px-20">
          <h2 className="text-4xl md:text-3xl lg:text-2xl xl:text-xl font-semibold mb-6 md:mb-4 lg:mb-3 xl:mb-2">
            Who we are and what we do
          </h2>
          <p className="text-base md:text-sm lg:text-xs xl:text-xs max-w-lg">
            Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
          </p>
        </div>

        <SeedraInfo />

        <div className="flex flex-col md:flex-row items-center justify-between my-10 px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="about__seedra__our__story__img w-full md:w-2/5">
            <img src={OurStoryIMg} alt="sory.img" className="w-full" />
          </div>
          <div className="about__seedra__our__story__info w-full md:w-3/5 md:pl-10 lg:pl-12 xl:pl-14">
            <h3 className="text-2xl md:text-xl lg:text-lg xl:text-base font-semibold mb-4">
              Our story
            </h3>
            <div className="text-base md:text-sm lg:text-xs xl:text-xs">
              <p className="mb-4">
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George
              </p>
              <p className="mb-4">
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings.
              </p>
              <p className="mb-4">
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
        </div>

        <div className="about__seedra__our__team my-10 px-6 md:px-10 lg:px-14 xl:px-20">
          <h2 className="text-4xl md:text-3xl lg:text-2xl xl:text-xl font-semibold text-center mb-8 md:mb-6 lg:mb-4 xl:mb-3">
            Meet our team
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-6 lg:gap-4 xl:gap-3">
            {OURTEAMDATA?.map((member) => (
              <div
                key={member.id}
                className="about__seedra__our__team__member flex flex-col items-center gap-4 md:w-64 lg:w-56 xl:w-48"
              >
                <div className="about__seedra__our__team__member__img w-48 h-48 md:w-56 md:h-56 lg:w-48 lg:h-48 xl:w-40 xl:h-40 overflow-hidden rounded-full">
                  <img
                    src={member?.img}
                    alt={member?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-lg lg:text-base xl:text-sm font-semibold">
                  {member?.name}
                </h3>
                <p className="text-base md:text-sm lg:text-xs xl:text-xs">
                  {member?.profession}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutSeedra;
