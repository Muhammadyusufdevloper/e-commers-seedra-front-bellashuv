import hero from "../../assets/images/components/spinach/hero.png";
import img from "../../assets/images/components/spinach/infoImg.png";
import { SPINACH } from "../../static";
import { useEffect } from "react";

function Spinach() {
  const spinachData = SPINACH?.map((el) => (
    <div key={el.id} style={{ backgroundColor: el.bg }} className="rounded-lg">
      <div className="p-2.5">
        <span className="text-sm text-gray-500">{el.time}</span>
        <h3 className="text-xl font-semibold text-gray-900">{el.title}</h3>
        <p className="text-sm text-gray-500">{el.text}</p>
        <button className="px-5 py-2.5 bg-white text-green-600 border-transparent rounded">
          Read
        </button>
      </div>
      <div>
        <img src={el.img} alt="" className="w-full" />
      </div>
    </div>
  ));

  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <section className="w-full max-w-[1142px] px-4 mt-10">
      <div className="flex items-center justify-between bg-gray-200 rounded-lg p-5 flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="font-lexend text-4xl sm:text-3xl md:text-2xl lg:text-xl font-semibold text-gray-900">
            How to plant spinach correctly in winter
          </h1>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={hero} alt="" className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-7">
        <div>
          <p className="font-lexend text-lg font-light text-gray-900">
            Spinach is a cool-season plant that’s one of the first crops of
            spring and a great fall crop as well. You’ll enjoy growing this
            undemanding plant and will enjoy eating it even more. Harvest
            spinach any time to enjoy raw in salads or cook it up in seconds for
            a delicious side dish that’s loaded with vitamins and minerals. If
            you want to grow spinach in your garden, here’s everything you need
            to know.
            <br />
            <br />
            You can also download my How Do I Grow Spinach? one-sheet and keep
            the free resource handy for your reference.
          </p>
          <div className="py-5">
            <img src={img} alt="" className="w-full" />
          </div>
          <h3 className="font-lexend text-2xl font-semibold text-gray-900 py-2.5">
            When, Where and How to Plant Spinach
          </h3>
          <p className="font-lexend text-lg font-light text-gray-900">
            Spinach can be either sown directly into the garden or started from
            seeds indoors. For the least work and the most convenience,
            seedlings can also be purchased from a nursery in spring. To give
            spinach a head start, plant seeds in sterile seed-starting mix
            indoors about six weeks before the last expected frost date.
            <br />
            <br />
            The seeds will germinate one to two weeks later in soil that is
            between 60 and 68 degrees. If growing in a room that stays cool,
            consider using a seed-starting mat that will raise the temperature
            of the soil.
            <br />
            <br />
            Spinach is frost tolerant, so it can go in the ground long before
            many other crops. When spinach seedlings have two true leaves and
            when there are four or fewer weeks remaining until your last frost
            date, the seedlings may be transplanted outdoors. Seeds can be
            planted outdoors as soon as the soil is workable in spring — about
            six weeks before the last expected frost — and they will germinate
            as the days warm. To germinate seeds faster and more reliably, there
            is a process called “priming.”
            <br />
            <br />A week before sowing spinach seeds indoors or out, soak seeds
            in room temperature water overnight or up to 24 hours. Next, place
            the seeds on a paper towel to air dry for one or two days. Once the
            seeds appear dry, place them in an airtight container and store the
            container in a cool place.
            <br />
            <br />
            The seeds will have soaked up and retained enough water to stimulate
            the first stages of germination. Wait at least five days, but no
            more than seven, and sow the seeds. Primed spinach seeds will
            germinate both faster and more uniformly: In about five days, the
            grass-like seedlings will emerge.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">{spinachData}</div>
      </div>
    </section>
  );
}

export default Spinach;
