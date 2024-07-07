import "./OurBlog.scss";

import { Fragment } from "react";
import { OurBlogDATA } from "../../../../static";
import { useNavigate } from "react-router-dom";

const OurBlog = () => {
  let navigate = useNavigate()
  return (
    <Fragment>
      <div className="container">
        <div className="our__blog">
          <div className="our__blog__info">
            <h2>Our blog.</h2>
            <button>Go to our blog</button>
          </div>
          <div className="our__blog__frames">
            {OurBlogDATA?.map((el) => (
              <div
                style={{
                  background: `url(${el?.bg}) no-repeat bottom/cover`,
                }}
                key={el?.id}
                className={el?.className}
                id="frames__frame"
              >
                <div className="our__blog__frames__head">
                  <img src={el?.dataClock} alt="" />
                  <p>{el?.data}</p>
                </div>
                <h3>{el?.title}</h3>
                <p>{el?.desc}</p>
                <button onClick={() => navigate("spinach")}>Read</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OurBlog;
