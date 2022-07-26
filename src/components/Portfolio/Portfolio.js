import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination,Autoplay} from "swiper";
import { BsPatchCheckFill } from 'react-icons/bs';
import p1 from '../../assets/portfolio1.jpg'
import './Portfolio.css'

const Portfolio = () => {

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>My Portfolio</h2>

            <div className="slider_swiper">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // when window width is >= 320px
                        100: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        769: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                        },
                    }}
                    centeredSlides={true}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination,Autoplay]}

                    
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='card'>
                            <div className="card_inner">

                                <div className='card_front'>
                                    <div className="card_front_image">
                                        <img src={p1} alt="" />
                                    </div>

                                    <div className='card_front_body'>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                        <div className='card_details'>
                                            <BsPatchCheckFill className='experience__details-icon' />
                                            <div>
                                                <h4>HTML</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Mountain Bike</h2>
                                </div>
                                <div class="card_back">
                                    <a className='back_button' href="/">Live</a>
                                    <a className='back_button' href="/">Client</a>
                                    <a className='back_button' href="/">Server</a>
                                    <a className='back_button' href="/">Details</a>
                                </div>
                            </div>


                        </div>

                    </SwiperSlide>

                    

                </Swiper>
            </div>
        </section>
    );
};

export default Portfolio;