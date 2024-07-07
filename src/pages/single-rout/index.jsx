import { FaCheck } from "react-icons/fa";
import { GiEvilMoon } from "react-icons/gi";
import productImg from "../../assets/images/components/product.svg";
import { FaRegHeart } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetProductIdQuery } from "../../context/api/productApi";
import avatarImg from "../../assets/images/components/avatar.svg";
import tuvakImg from "../../assets/images/components/tuvak.svg";

import "./SingleRout.scss";
import OurProducts from "../home/components/our-products";
import { useEffect } from "react";
const SingleRout = () => {
  const { id } = useParams();
  const { data } = useGetProductIdQuery(id);
  console.log(id);
  console.log(data);
  useEffect(()=>{
    scroll(0,0)
  })
  return (
    <>
      <div className="container">
        <div className="single">
          <div className="single__imgs">
            <img src={data?.data?.urls[0]} alt="" />
          </div>
          <div className="single__info">
            <h3 className="single__title">{data?.data?.title}</h3>
            <div className="single__category__btns">
              <button className="single__category__btn">
                <FaCheck /> AVAILABLE
              </button>
              <button className="single__category__btn">
                <GiEvilMoon /> VEGETABLES
              </button>
            </div>
            <div className="single__size">
              <div className="single__size__info">
                <span>Size</span>
                <p>2 PACK</p>
              </div>
              <div className="single__size__count">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
            <div className="single__pack__rows">
              <div className="single__pack__row">
                <div className="single__pack__left">
                  <input name="pack" type="radio" />
                  <p>1 pack</p>
                </div>
                <div className="single__pack__right">
                  <span>start from</span>
                  <h4 className="single__pack__price">${data?.data?.price}</h4>
                </div>
              </div>
              <div className="single__pack__row">
                <div className="single__pack__left">
                  <input name="pack" type="radio" />
                  <p>2 pack</p>
                </div>
                <div className="single__pack__right">
                  <span>start from</span>
                  <h4 className="single__pack__price">
                    ${data?.data?.price * 2}
                  </h4>
                </div>
              </div>
              <div className="single__pack__row">
                <div className="single__pack__left">
                  <input name="pack" type="radio" />
                  <p>3 pack</p>
                </div>
                <div className="single__pack__right">
                  <span>start from</span>
                  <h4 className="single__pack__price">
                    ${data?.data?.price * 3}
                  </h4>
                </div>
              </div>
              <div className="single__pack__row">
                <div className="single__pack__left">
                  <input name="pack" type="radio" />
                  <p>4 pack</p>
                </div>
                <div className="single__pack__right">
                  <span>start from</span>
                  <h4 className="single__pack__price">
                    ${data?.data?.price * 4}
                  </h4>
                </div>
              </div>
              <div className="single__pack__row">
                <div className="single__pack__left">
                  <input name="pack" type="radio" />
                  <p>5 pack</p>
                </div>
                <div className="single__pack__right">
                  <span>start from</span>
                  <h4 className="single__pack__price">
                    ${data?.data?.price * 5}
                  </h4>
                </div>
              </div>
            </div>
            <div className="single__total__price">
              <div className="single__total__price__left">
                <span>$15.56</span>
                <br />
                <h3>$12.56</h3>
              </div>
              <div className="single__total__price__right">
                <FaRegHeart />

                <button className="single__cart__btn">Add to card</button>
              </div>
            </div>
          </div>
        </div>
        <div className="single__product__info">
          <h3 className="single__product__title">Product information.</h3>
          <div className="single__info__cards">
            <div className="single__product__left">
              <p className="single__product__desc">
                EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
                professional instructions created by PhD Helga George Be sure of
                our quality - the freshest batches of this season. Non-GMO,
                Heirloom - our seeds were tested and have the best germination
                ratings. Your easy growing experience is our guarantee Cilantro
                common culinary uses: salsa, guacamole, pesto, salads, chutney,
                baked breads, pad thai, pico de gallo, rice, grilled shrimp
                skewers, falafel, and more Proudly sourced in the USA - our
                garden seeds are grown, harvested, and packaged in the USA. We
                support local farmers and are happy to produce this
                American-made product SEEDRA customer service - please contact
                us directly through Amazon with any questions or concerns about
                our products. We care about each customer and do our best to
                provide you with 100% satisfaction
              </p>
            </div>
            <div className="single__product__right">
              <div className="single__product__row">
                <p>Package Dimensions</p>
                <h3>5.51 x 3.5 x 0.35 inches</h3>
              </div>
              <div className="single__product__row">
                <p>Item Weight</p>
                <h3>0.317 ounces</h3>
              </div>
              <div className="single__product__row">
                <p>ASIN</p>
                <h3>B08Z3HN5MP</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion">
          <h3 className="accordion__title">Frequently asked questions.</h3>
          <div className="accordion__wrapper">
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  For seller: are these seeds organic? it does matter if they
                  are organic, seeds can hold pesticides from the plant they
                  grow from.
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Can they be grown on hydroponic systems
                </AccordionSummary>
                <AccordionDetails>
                  I have heat mats and artificial light. I planted them in all
                  purpose potting soil. Moist not wet. Placed them on a heat
                  mat. If not available, somewhere where it's 72 degrees. Add
                  natural light, but I used artificial light. Takes 10- 15 days
                  because of there hard shell on the seed.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  They did not germinate even when i followed directions. What
                  should i do?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="accordion__box">
              <h4 className="accordion__name">Didn’t find answer?</h4>
              <p>Ask your own!</p>
              <textarea name="" id="" placeholder="Type here"></textarea>
              <button className="accordion__btn">Send</button>
            </div>
          </div>
        </div>
        <div className="customer">
          <div className="customer__top">
            <h3 className="customer__title">Customer reviews.</h3>
            <button className="customer__name__btn">Make review</button>
          </div>
          <div className="customer__wrapper">
            <div className="customer__left">
              <div className="customer__ratings">
                <h3 className="customer__rating">4,1</h3>
                <div className="customer__rating__reviews">
                  <p>124 reviews</p>
                  <div className="customer__rating__stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
              <div className="customer__rating__rows">
                <div className="customer__rating__row">
                  <span>5</span>
                  <FaStar />
                  <div className="customer__rating__row__line">
                    <div className="first-rating"></div>
                  </div>
                  <span>81</span>
                </div>
                <div className="customer__rating__row">
                  <span>4</span>
                  <FaStar />
                  <div className="customer__rating__row__line">
                    <div className="second-rating"></div>
                  </div>
                  <span>45</span>
                </div>
                <div className="customer__rating__row">
                  <span>3</span>
                  <FaStar />
                  <div className="customer__rating__row__line">
                    <div className="three-rating"></div>
                  </div>
                  <span>32</span>
                </div>
                <div className="customer__rating__row">
                  <span>2</span>
                  <FaStar />
                  <div className="customer__rating__row__line">
                    <div className="fire-rating"></div>
                  </div>
                  <span>1</span>
                </div>
                <div className="customer__rating__row">
                  <span>1</span>
                  <FaStar />
                  <div className="customer__rating__row__line">
                    <div className="five-rating"></div>
                  </div>
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="customer__right">
              <div className="customer__info">
                <div className="customer__info__left">
                  <div className="customer__avatar">
                    <img src={avatarImg} alt="" />
                  </div>
                  <div className="customer__avatar__info">
                    <h3>Carla Samantoes-Diego</h3>
                    <p>Reviewed in the United States on June 18, 2021</p>
                  </div>
                </div>
                <div className="customer__info__right">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <p className="customer__desc">
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George Be sure of
                our quality - the freshest batches of this season. Non-GMO,
                Heirloom - our seeds were tested and have the best germination
                ratings.
              </p>
              <div className="customer__right__bottom">
                <span>Size</span>
                <h3>2 PACK</h3>
                <button className="customer__btn">
                  <FaCheck /> VERIFIED
                </button>
              </div>
            </div>
            <div className="customer__photo">
              <div className="customer__photo__top">
                <div className="customer__photo__info">
                  <span>124 reviews</span>
                  <h3>Photo&Video review</h3>
                </div>
                <button className="customer__photo__btn">View</button>
              </div>
              <div className="customer__photo__cards">
                <div className="customer__photo__card">
                  <img src={tuvakImg} alt="" />
                </div>
                <div className="customer__photo__card">
                  <img src={tuvakImg} alt="" />
                </div>
                <div className="customer__photo__card">
                  <img src={tuvakImg} alt="" />
                </div>
                <div className="customer__photo__card">
                  <img src={tuvakImg} alt="" />
                </div>
              </div>
            </div>
            <div className="customer__right">
              <div className="customer__info">
                <div className="customer__info__left">
                  <div className="customer__avatar">
                    <img src={avatarImg} alt="" />
                  </div>
                  <div className="customer__avatar__info">
                    <h3>Carla Samantoes-Diego</h3>
                    <p>Reviewed in the United States on June 18, 2021</p>
                  </div>
                </div>
                <div className="customer__info__right">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <p className="customer__desc">
                Eine sehr aromatische Sorte, wollte die Himbeere gerade noch
                einmal bestellen, derzeit nicht verfügbar. So süße Früchte und
                das jetzt im Oktober, unglaublich
              </p>
              <div className="customer__cards">
                <div className="customer__card">
                  <img src={tuvakImg} alt="" />
                </div>
                <div className="customer__card">
                  <img src={tuvakImg} alt="" />
                </div>
              </div>
              <div className="customer__right__bottom">
                <span>Size</span>
                <h3>2 PACK</h3>
                <button className="customer__btn">
                  <FaCheck /> VERIFIED
                </button>
              </div>
            </div>
          </div>
        </div>
        <OurProducts />
      </div>
    </>
  );
};

export default SingleRout;
