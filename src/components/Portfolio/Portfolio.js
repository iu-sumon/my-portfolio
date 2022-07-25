import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import p1 from '../../assets/portfolio1.jpg'
 import './Portfolio.css'

const Portfolio = () => {

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>My Portfolio</h2>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='card'>
                        <div className="card_image">
                            <img src={p1} alt="" />
                        </div>
                        <div className='card_buttons'>
                            <button className='btn'>HTML</button>
                            <button className='btn'>HTML</button>
                            <button className='btn'>HTML</button>
                            <button className='btn'>HTML</button>
                            <button className='btn'>HTML</button>
                        </div>
                        <h2>Mountain Bike</h2>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='' />
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Portfolio;