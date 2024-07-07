import OurBlog from "../../pages/home/components/our-blog/index";
import img1 from "../../assets/images/components/blog/img1.png";
import { BLOGREAD } from "../../static";
import { AiTwotoneClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
  const readData = BLOGREAD?.map((el) => (
    <div
      key={el.id}
      className="bg-gray-100 p-4 rounded-md flex items-start gap-4"
    >
      <div className="flex-shrink-0">
        <AiTwotoneClockCircle className="text-green-500 text-xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{el.title}</h3>
        <p className="text-gray-700">{el.text}</p>
      </div>
      <div className="flex-shrink-0">
        <img src={el.img} alt="" className="w-24 h-auto" />
      </div>
    </div>
  ));

  const navigate = useNavigate();

  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <section className="blog">
      <div className="blog__hero bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-semibold">Welcome to our blog</h1>
          <p className="text-lg mt-4">
            Here you can find a lot of interesting and useful information that
            you need
            <br />
            in gardening and creating a beautiful garden
          </p>
        </div>
      </div>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="blog__form-input w-full border rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 outline-none"
            />
          </div>
          <select className="px-4 py-2 border rounded-full outline-none">
            <option value="">Sort By</option>
          </select>
        </div>

        <OurBlog />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex items-center">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <AiTwotoneClockCircle className="text-green-500 text-lg" />
                <p className="text-gray-600">12.09.2021</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                How to plant spinach correctly in winter
              </h3>
              <p className="text-gray-700">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button
                onClick={() => navigate("/spinach")}
                className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
              >
                Read
              </button>
            </div>
            <div className="flex-shrink-0">
              <img src={img1} alt="" className="w-full h-auto md:w-72" />
            </div>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat h-80 flex items-center justify-center text-white rounded-lg shadow-md"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="p-4 bg-opacity-75 bg-gray-900 rounded-lg">
              <div className="flex items-center gap-2">
                <AiTwotoneClockCircle className="text-green-500 text-lg" />
                <p className="text-gray-600">12.09.2021</p>
              </div>
              <h3 className="text-xl font-semibold text-white">
                How to plant spinach correctly in winter
              </h3>
              <button
                onClick={() => navigate("/spinach")}
                className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
              >
                Read
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {readData}
        </div>
      </div>
    </section>
  );
};

export default Blog;
