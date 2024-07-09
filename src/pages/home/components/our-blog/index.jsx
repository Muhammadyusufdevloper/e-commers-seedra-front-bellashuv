import { Fragment } from "react";
import { OurBlogDATA } from "../../../../static";
import { useNavigate } from "react-router-dom";

const OurBlog = () => {
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className="w-full max-w-[1142px] px-4 mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8 blogs">
            {OurBlogDATA?.map((el, index) => {
              let colSpan = "col-span-1";
              let rowSpan = "row-span-1";

              if (index === 0) {
                colSpan = "md:col-span-2";
                rowSpan = "md:row-span-1";
              } else if (index === 1) {
                colSpan = "md:col-span-1";
                rowSpan = "md:row-span-2";
              } else if (index === 2) {
                colSpan = "md:col-span-1";
                rowSpan = "md:row-span-1";
              } else if (index === 3) {
                colSpan = "md:col-span-1";
                rowSpan = "md:row-span-1";
              }

              return (
                <div
                  key={el?.id}
                  className={`bg-cover bg-center rounded-lg overflow-hidden ${colSpan} ${rowSpan} ${el?.className}`}
                  style={{ backgroundImage: `url(${el?.bg})`,paddingBottom:80 }}
                >
                  <div className="p-4 lg:p-6 h-full flex flex-col ">
                    <div className="flex items-center mb-2">
                      <img src={el?.dataClock} alt="" className="mr-2" />
                      <p className="text-sm">{el?.data}</p>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                      {el?.title}
                    </h3>
                    <p className="text-sm lg:text-base mb-4">{el?.desc}</p>
                    <button
                    style={{width:110}}
                      className="py-2 px-4 bg-green-500 text-white rounded-md font-semibold hover:bg-white hover:text-green-500 border border-green-500 transition duration-300"
                      onClick={() => navigate("spinach")}
                    >
                      Read
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurBlog;
