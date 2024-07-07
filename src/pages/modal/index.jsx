import { Swiper, SwiperSlide } from "swiper/react";
import "./Modal.scss";
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Autoplay } from 'swiper/modules';
import { useGetProductIdQuery } from "../../context/api/productApi";
import defaultImg from "../../assets/images/default.png";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const Modal = ({ productId, onClose }) => {
    const { data } = useGetProductIdQuery(productId);
    let navegate = useNavigate()
    const handelSeeMore = () => {
        onClose;
        navegate(`single-rout/${product.id}`)
    }
    return (
        <section className="modal">
            <div className="modal__overlay" onClick={onClose}></div>
            <div className="modal__wrapper">
                <button className="modal__close" onClick={onClose}>X</button>
                {data?.data ? (
                    <Swiper
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCreative, Autoplay]}
                        className="mySwiper"
                    >
                        {data.data.urls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <img src={url} alt={`${data.data.title} - ${index + 1}`} className="modal__image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <></>
                )}
                <button onClick={handelSeeMore} className="modal__seeMore">See more</button>
            </div>
        </section>
    );
};

export default memo(Modal);

