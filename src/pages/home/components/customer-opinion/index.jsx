import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { CUSTOMEROPINION } from "../../../../static";
import star from "../../../../assets/images/page/home/swiper/star.svg";
import { memo } from "react";

const CustomerOpinion = () => {
  let swiper = CUSTOMEROPINION?.map((card) => (
    <SwiperSlide
      className="border border-gray-200 rounded-lg p-6 mb-8"
      key={card.id}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={card.image} alt="" className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="text-gray-500">{card.date}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <img key={index} src={star} alt="star" className="w-4 h-4" />
        ))}
      </div>
      <p className="text-gray-700">{card.desc}</p>
    </SwiperSlide>
  ));

  return (
    <section id="clients" className="py-20">
      <div className="w-full max-w-[1142px] px-4 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What our clients say
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[FreeMode, Pagination]}
          className="grid gap-8 md:grid-cols-3"
        >
          {swiper}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(CustomerOpinion);
