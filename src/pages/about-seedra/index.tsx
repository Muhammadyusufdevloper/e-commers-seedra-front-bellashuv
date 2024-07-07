import { FC, useEffect } from "react";
import OurStoryImg from "../../assets/images/page/about-seedra/story.png";
import SeedraInfo from "../../components/seedra-info";
import { OURTEAMDATA } from "../../static";

interface TeamMember {
  id: number;
  name: string;
  profession: string;
  img: string;
}

const AboutSeedra: FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="bg-cover bg-center w-full h-72 p-12 text-center rounded-xl my-12 bg-[url('/src/assets/images/page/about-seedra/Frame 8.png')]">
        <h2 className="text-4xl font-semibold pb-5 md:text-3xl sm:text-2xl">
          Who we are and what we do
        </h2>
        <p className="max-w-2xl mx-auto">
          Here you can find a lot of interesting and useful information that you
          need in gardening and creating a beautiful garden
        </p>
      </div>
      <SeedraInfo />
      <div className="flex items-center justify-between pt-10 md:flex-col-reverse md:gap-10">
        <div className="w-2/5 md:w-4/5">
          <img src={OurStoryImg} alt="story" className="w-full" />
        </div>
        <div className="w-1/2 flex flex-col gap-5 md:w-4/5">
          <h3 className="text-xl">Our story</h3>
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
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product
          </p>
        </div>
      </div>
      <div className="text-center py-12">
        <h2 className="text-4xl pb-5">Meet our team</h2>
        <div className="flex justify-between py-12 gap-10 overflow-x-auto scrollbar-none">
          {OURTEAMDATA?.map((member: TeamMember) => (
            <div
              key={member.id}
              className="flex flex-col items-center gap-2 w-72"
            >
              <div className="w-48">
                <img src={member?.img} alt={member?.name} className="w-full" />
              </div>
              <h3>{member?.name}</h3>
              <p>{member?.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSeedra;
