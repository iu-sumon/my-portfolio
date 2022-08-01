import React from 'react';
import './ProjectDetails.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import p1 from '../../assets/mountain/mb1.PNG'
import p2 from '../../assets/mountain/mb2.png'
import p3 from '../../assets/mountain/mb3.PNG'
import p4 from '../../assets/mountain/mb4.PNG'
import p5 from '../../assets/mountain/mb5.PNG'

const ProjectDetails = () => {

    return (
        <section className='container'>
            <Swiper

                navigation={true}
                modules={[Navigation]}
                className="mySwiper"

            >


                <SwiperSlide>

                    <div className="slider-image">
                        <img src={p1} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-image">
                        <img src={p2} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="slider-image">
                        <img src={p3} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="slider-image">
                        <img src={p4} alt="" />
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className="slider-image">
                        <img src={p5} alt="" />
                    </div>

                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default ProjectDetails;