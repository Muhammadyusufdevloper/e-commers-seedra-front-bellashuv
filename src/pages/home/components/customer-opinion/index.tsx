import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./CustomerOpinion.scss";
import { CUSTOMEROPINION } from "../../../../static";
import star from "../../../../assets/images/page/home/swiper/star.svg";
import { memo } from "react";

// import "./styles.css";

const CustomerOpinion = () => {
    let swiper = CUSTOMEROPINION?.map((card) => (
        <SwiperSlide className="clients__card" key={card.id}>
            <div className="clients__card__top">
                <img src={card.image} alt="" />
                <div>
                    <h3 className="clients__card__title">{card.title}</h3>
                    <p className="clients__card__date">{card.date}</p>
                </div>
            </div>
            <div>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
            <p className="clients__card__desc">{card.desc}</p>
        </SwiperSlide>
    ));
    return (
        <section id="clients">
            <div className="container clients">
                <h2 className="clients__title">What out clients say</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    // freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // Ekran kengligi 640px dan katta bo'lsa
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // Ekran kengligi 768px dan katta bo'lsa
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // Ekran kengligi 1024px dan katta bo'lsa
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="clients__cards"
                >
                    {swiper}
                </Swiper>
            </div>
        </section>
    );
};

export default memo(CustomerOpinion);
