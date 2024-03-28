// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import images from '../images'
// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

function InstrumentCategories() {
    return (
        <>
            <div className="small_device6">

                <div className="sub_Heading text-center">
                    <h3>Online Instrumental Clasess <br /> Categories</h3>
                </div>
                <Swiper
                    effect={'flip'}
                    ///// cube ^ //
                    loop={true}
                    grabCursor={true}
                    // pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src={images.instrumentSlide1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.instrumentSlide2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.instrumentSlide3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.instrumentSlide4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.instrumentSlide5} />
                    </SwiperSlide>
                </Swiper>

            </div>

            <div className="large_device6">
                <div className="grid grid-cols-1 box_padding6">
                    <div className="sub_Heading text-center">
                        <h3>Online Instrumental Clasess <br /> Categories</h3>
                    </div>

                    <div className="grid grid-cols-6 gap-[16.6px]">

                        <div className="col-start-1 col-span-2 box_01">
                            <img className='image_box6_1' src={images.instrument_1} alt="" />

                            <div className='box_contends6'>
                                <img src={images.Piano_lessons} alt="" />
                                <p>Beginner and advanced piano lessons for kids and adults</p>
                            </div>

                        </div>

                        <div className="col-start-3 col-end-3 box_01">
                            <img className='image_box6_1' src={images.instrument_2} alt="" />

                            <div className='box_contends6'>

                                <img src={images.Keyboard_classes} alt="" />
                                <p>Keyboard classes for adults and kids, including beginner lessons</p>
                            </div>

                        </div>

                        <div className="col-end-7 col-span-2 box6_1">
                            <img className='image_box6_1' src={images.instrument_4} alt="" />

                            <div className='box_contends6'>

                                <img src={images.guitar_Classes} alt="" />
                                <p>Guitar classes for adults and kids, including beginner Classes and electric guitar
                                    lessons.</p>
                            </div>

                        </div>

                        <div className="col-start-1 col-span-2 box6_2">
                            <img className='image_box6_2' src={images.instrument_3} alt="" />

                            <div className='box_contends6'>

                                <img src={images.Violin_classes} alt="" />
                                <p>Violin classes for Adult and kids including beginner lessons</p>
                            </div>

                        </div>

                        <div className="col-start-4 col-span-2 box_02">
                            <img className='image_box6_2' src={images.instrument_5} alt="" />

                            <div className='box_contends6'>

                                <img src={images.Ukulele_classes} alt="" />
                                <p>Ukulele classes for beginners and adults with teacher support</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default InstrumentCategories