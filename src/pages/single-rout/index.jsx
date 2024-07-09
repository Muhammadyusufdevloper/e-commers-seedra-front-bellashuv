import { FaCheck, FaHeart, FaRegStar } from "react-icons/fa";
import { GiEvilMoon } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetProductIdQuery } from "../../context/api/productApi";
import avatarImg from "../../assets/images/components/avatar.svg";
import tuvakImg from "../../assets/images/components/tuvak.svg";
import OurProducts from "../home/components/our-products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../context/slice/cartSlice";
import { addWishlist } from "../../context/api/slice/wishlistSlice";

const SingleRout = () => {
  const { id } = useParams();
  const { data } = useGetProductIdQuery(id);
  const [count, setCount] = useState(0);
  const [imageOrder, setImageOrder] = useState(0);
  const cartData = useSelector((state) => state.cart.value);
  let wishlistData = useSelector((state) => state.wishlistSlice.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    scroll(0, 0);
  }, [id]);

  return (
    <div className="w-full max-w-[1142px] px-4 mx-auto px-4ner py-10">
      <div className="single grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="single__imgs flex flex-col justify-between">
          <img
            src={data?.images[imageOrder]}
            alt=""
            className="w-full object-cover"
          />
          <div className="flex items-center gap-[30px] overflow-auto w-full h-[150px]">
            {data?.images?.map((image, index) => (
              <div
                onClick={() => setImageOrder(index)}
                key={index}
                className={`w-[80px] h-[80px] rounded-[17px] cursor-pointer ${
                  imageOrder === index
                    ? "border border-gray-300 bg-gray-300 rounded-[10px] cursor-no-drop"
                    : " bg-[#a2d2c9]"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="single__info space-y-4">
          <h3 className="single__title text-2xl font-semibold text-gray-900">
            {data?.title}
          </h3>
          <div className="single__category__btns flex items-center flex-wrap gap-5 py-5">
            <button className="single__category__btn flex items-center gap-2 text-green-500 bg-green-200/30 border border-green-200/30 rounded-full py-2 px-4">
              <FaCheck /> AVAILABLE
            </button>
            <button className="single__category__btn flex items-center gap-2 text-green-500 bg-green-200/30 border border-green-200/30 rounded-full py-2 px-4">
              <GiEvilMoon /> {data?.category?.toUpperCase()}
            </button>
          </div>
          <div className="single__size flex items-center justify-between gap-4 flex-wrap">
            <div className="single__size__info">
              <span className="text-sm font-normal text-gray-500">Size</span>
              <p className="text-sm font-normal text-gray-900">{count} PACK</p>
            </div>
            <div className="single__size__count flex items-center gap-4 text-green-500">
              <button
                disabled={count <= 0}
                className="bg-transparent border-none text-lg"
                onClick={() => setCount((p) => +p - 1)}
              >
                -
              </button>
              <span className="py-2 px-4 bg-green-200/30 border-none">
                {count}
              </span>
              <button
                onClick={() => setCount((p) => +p + 1)}
                className="bg-transparent border-none text-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="single__pack__rows flex flex-col gap-4 py-5">
            {[1, 2, 3, 4, 5].map((pack) => (
              <label
                key={pack}
                htmlFor={pack}
                className="single__pack__row flex items-center justify-between gap-4 flex-wrap py-4 px-2 border border-gray-300 rounded-md"
              >
                <div className="single__pack__left flex items-center gap-2">
                  <input
                    value={+pack}
                    onChange={(e) => setCount(e.target.value)}
                    name="pack"
                    id={pack}
                    type="radio"
                  />
                  <p className="text-sm font-normal text-gray-900">
                    {pack} pack
                  </p>
                </div>
                <div className="single__pack__right flex items-center gap-2">
                  <span className="text-sm font-normal text-gray-500">
                    start from
                  </span>
                  <h4 className="text-lg font-bold text-gray-900">
                    ${(data?.price * pack)?.toFixed(2)}
                  </h4>
                </div>
              </label>
            ))}
          </div>
          <div className="single__total__price flex items-center justify-between gap-4 flex-wrap">
            <div className="single__total__price__left">
              <span className="block text-sm font-normal text-gray-500">
                <del>${data?.price + 5}</del>
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                ${data?.price}
              </h3>
            </div>
            <div className="single__total__price__right flex items-center gap-4">
              {wishlistData?.some((el) => el?.id === data?.id) ? (
                <FaHeart
                  onClick={() => dispatch(addWishlist(data))}
                  className="text-green-500 text-xl"
                />
              ) : (
                <FaRegHeart
                  onClick={() => dispatch(addWishlist(data))}
                  className="text-green-500 text-xl"
                />
              )}
              {cartData?.some((el) => el?.id === data?.id) ? (
                <button
                  onClick={() => dispatch(remove(data))}
                  className="single__cart__btn bg-red-500 border border-red-500 text-white rounded-md py-3 px-4 transition hover:text-red-500 hover:bg-white"
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => dispatch(add(data))}
                  className="single__cart__btn bg-green-500 border border-green-500 text-white rounded-md py-3 px-4 transition hover:text-green-500 hover:bg-white"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="single__product__info py-5">
        <h3 className="single__product__title text-xl font-semibold text-gray-900">
          Product information.
        </h3>
        <div className="single__info__cards grid grid-cols-1 md:grid-cols-2 gap-7 py-5 items-start">
          <div className="single__product__left">
            <p className="single__product__desc text-sm font-light text-gray-900">
              EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
              professional instructions created by PhD Helga George Be sure of
              our quality - the freshest batches of this season. Non-GMO,
              Heirloom - our seeds were tested and have the best germination
              ratings. Your easy growing experience is our guarantee Cilantro
              common culinary uses: salsa, guacamole, pesto, salads, chutney,
              baked breads, pad thai, pico de gallo, rice, grilled shrimp
              skewers, falafel, and more Proudly sourced in the USA - our garden
              seeds are grown, harvested, and packaged in the USA. We support
              local farmers and are happy to produce this American-made product
              SEEDRA customer service - please contact us directly through
              Amazon with any questions or concerns about our products. We care
              about each customer and do our best to provide you with 100%
              satisfaction
            </p>
          </div>
          <div className="single__product__right flex flex-col gap-4 py-4 px-3 border border-gray-300 rounded-md">
            <div className="single__product__row flex items-center justify-between gap-4 flex-wrap py-2 border-b border-gray-300">
              <p className="text-sm font-normal text-gray-500">
                Package Dimensions
              </p>
              <h3 className="text-sm font-semibold text-gray-900">
                5.51 x 3.5 x 0.35 inches
              </h3>
            </div>
            <div className="single__product__row flex items-center justify-between gap-4 flex-wrap py-2 border-b border-gray-300">
              <p className="text-sm font-normal text-gray-500">Item Weight</p>
              <h3 className="text-sm font-semibold text-gray-900">
                0.317 ounces
              </h3>
            </div>
            <div className="single__product__row flex items-center justify-between gap-4 flex-wrap py-2 border-b border-gray-300">
              <p className="text-sm font-normal text-gray-500">ASIN</p>
              <h3 className="text-sm font-semibold text-gray-900">
                B08Z3HN5MP
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion py-5">
        <h3 className="accordion__title text-2xl">
          Frequently asked questions.
        </h3>
        <div className="accordion__wrapper grid grid-cols-1 md:grid-cols-[1.5fr,0.5fr] gap-5 py-5 items-start">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                For seller: are these seeds organic? it does matter if they are
                organic, seeds can hold pesticides from the plant they grow
                from.
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
                purpose potting soil. Moist not wet. Placed them on a heat mat.
                If not available, somewhere where it's 72 degrees. Add natural
                light, but I used artificial light. Takes 10- 15 days because of
                there hard shell on the seed.
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
          <div className="accordion__img w-full h-full overflow-hidden rounded-md">
            <img src={tuvakImg} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="review py-5">
        <h3 className="review__title text-xl font-semibold text-gray-900">
          Customer reviews.
        </h3>
        <div className="review__wrapper grid grid-cols-1 md:grid-cols-[0.5fr,1.5fr] gap-5 py-5 items-start">
          <div
            style={{ border: "0.3px solid gray" }}
            className="review__left bg-white text-black p-5 rounded-md space-y-4"
          >
            <h4 className="text-4xl font-bold">4.3</h4>
            <div className="review__ratings flex flex-col gap-4">
              {[4, 3, 2, 1, 0].map((rating) => (
                <div
                  key={rating}
                  className="review__rating flex items-center gap-2"
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < rating ? "text-yellow-500" : "text-gray-400"
                      }
                    />
                  ))}
                  <div className="w-full bg-gray-300 h-2 rounded-md overflow-hidden">
                    <div
                      className="bg-yellow-500 h-full"
                      style={{ width: `${rating * 20}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-light">{rating * 20}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="review__right space-y-5">
            <div className="review__block">
              <div className="review__top flex items-center justify-between gap-4 flex-wrap">
                <div className="review__avatar flex items-center gap-4">
                  <img src={avatarImg} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      A. Chaarawi
                    </h3>
                    <span className="text-sm font-light text-gray-500">
                      March 24, 2021
                    </span>
                  </div>
                </div>
                <div className="review__info flex items-center gap-4">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  <FaStarHalfAlt className="text-yellow-500" />
                </div>
              </div>
              <div className="review__bottom">
                <p className="text-sm font-light text-gray-900">
                  I purchased these cilantro seeds to try growing cilantro at
                  home. So far, I have been able to grow it successfully. The
                  seeds were well-packaged and easy to plant. The germination
                  rate was decent, and the cilantro plants are healthy and
                  flavorful. Overall, I'm satisfied with this purchase.
                </p>
              </div>
            </div>
            <div className="review__block">
              <div className="review__top flex items-center justify-between gap-4 flex-wrap">
                <div className="review__avatar flex items-center gap-4">
                  <img src={avatarImg} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Gonzalez Family
                    </h3>
                    <span className="text-sm font-light text-gray-500">
                      May 10, 2022
                    </span>
                  </div>
                </div>
                <div className="review__info flex items-center gap-4">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  <FaStarHalfAlt className="text-yellow-500" />
                </div>
              </div>
              <div className="review__bottom">
                <p className="text-sm font-light text-gray-900">
                  Good quality seeds! Planted them in my garden, and they
                  sprouted within a week. The plants are growing strong and
                  producing plenty of cilantro. Highly recommend!
                </p>
              </div>
            </div>
            <div className="review__block">
              <div className="review__top flex items-center justify-between gap-4 flex-wrap">
                <div className="review__avatar flex items-center gap-4">
                  <img src={avatarImg} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      John Doe
                    </h3>
                    <span className="text-sm font-light text-gray-500">
                      June 15, 2023
                    </span>
                  </div>
                </div>
                <div className="review__info flex items-center gap-4">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  <FaStarHalfAlt className="text-yellow-500" />
                </div>
              </div>
              <div className="review__bottom">
                <p className="text-sm font-light text-gray-900">
                  These seeds are fantastic! I've had great success with them.
                  The plants are growing vigorously, and the flavor of the
                  cilantro is outstanding. Will definitely buy again!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurProducts />
    </div>
  );
};

export default SingleRout;
