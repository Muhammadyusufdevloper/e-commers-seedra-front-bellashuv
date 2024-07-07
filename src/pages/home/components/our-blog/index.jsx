import { Fragment } from "react";
import { OurBlogDATA } from "../../../../static";
import { useNavigate } from "react-router-dom";

const OurBlog = () => {
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className="container mx-auto px-4">
        <div className="our__blog">
          <div className="our__blog__info">
            <h2 className="text-3xl lg:text-4xl font-bold">Our blog.</h2>
            <button
              className="py-2 px-4 border-2 border-transparent rounded-md text-green-500 font-semibold bg-white hover:bg-green-500 hover:text-white transition duration-300"
              onClick={() => navigate("spinach")}
            >
              Go to our blog
            </button>
          </div>
          <div className="grid grid-cols-12 gap-8 lg:gap-12 mt-8">
            {OurBlogDATA?.map((el) => (
              <div
                key={el?.id}
                className={`bg-cover bg-center rounded-lg overflow-hidden col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ${el?.className}`}
                style={{ backgroundImage: `url(${el?.bg})` }}
              >
                <div className="p-4 lg:p-6 bg-white bg-opacity-90 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-2">
                    <img src={el?.dataClock} alt="" className="mr-2" />
                    <p className="text-sm">{el?.data}</p>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                    {el?.title}
                  </h3>
                  <p className="text-sm lg:text-base mb-4">{el?.desc}</p>
                  <button
                    className="py-2 px-4 bg-green-500 text-white rounded-md font-semibold hover:bg-white hover:text-green-500 border border-green-500 transition duration-300"
                    onClick={() => navigate("spinach")}
                  >
                    Read
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurBlog;
