import OurBlog from "../home/components/our-blog/index";
import "./ourBlog.scss";
import img from "../../assets/images/components/blog/img1.png";
import { BLOGREAD } from "../../static";
import { AiTwotoneClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
  const readData = BLOGREAD?.map((el) => (
    <div key={el.id} className="blog__read__card">
      <div className="blog__read__info">
        <span>
          {" "}
          <AiTwotoneClockCircle /> {el.time}
        </span>
        <h3>{el.title}</h3>
        <p>{el.text}</p>
      </div>
      <div className="blog__read__img">
        <img src={el.img} alt="" />
      </div>
    </div>
  ));
  let navigate = useNavigate()
  useEffect(() => {
    scroll(0, 0)
  }, [])
  return (
    <section className="blog">
      <div className="blog__hero container">
        <div className="blog__hero__info">
          <h1 className="blog__hero__title">Welcome to our blog</h1>
          <p className="blog__hero__text">
            Here you can find a lot of interesting and useful information that
            you need
            <br />
            in gardening and creating a beautiful garden
          </p>
        </div>
      </div>
      <div className="blog__form container">
        <div className="blog__form-input">
          <input value="searching" type="text" />
        </div>
        <select name="" id="">
          <option value="">Sort By</option>
        </select>
      </div>
      <div>
        <OurBlog />
      </div>
      <div className="blog__cards container">
        <div className="blog__card">
          <div className="blog__card__left">
            <div className="blog__card__hour">
              <p>
                <AiTwotoneClockCircle /> 12.09.2021
              </p>
            </div>
            <div className="blog__card__info">
              <h3>How to plant spinach correctly in winter</h3>
              <p>
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
            </div>
            <button onClick={() => navigate('')}>Read</button>
          </div>
          <div className="blog__card__right">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="blog__card__middle">
          <div className="blog__card-hour">
            <p>
              <AiTwotoneClockCircle /> 12.09.2021
            </p>
          </div>
          <h3>How to plant spinach correctly in winter</h3>
          <button onClick={() => navigate("/spinach")}>Read</button>
        </div>
      </div>
      <div className="blog__read__cards container">{readData}</div>
    </section>
  );
};

export default Blog;
