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

const para = {
    p1: "Keyboard classes for adults and kids, including beginner lessons",
    p2: "Guitar classes for adults and kids, including beginner classes and electric guitar lessons",
    p3: "Violin classes for adults and kids, including beginner lessons",
    p4: "Ukulele classes for beginners and adults with teacher support",
    p5: "Beginner and advanced piano lessons for kids and adults",
};


function InstrumentCategories({instrumentRef}) {
    return (
        <>
            <div ref={instrumentRef} className="small_device6 custom_padding">

                <div className="sub_Heading text-center">
                    <h3>Online Instrumental Clasess <br /> Categories</h3>
                </div>
                <Swiper
                    effect={'flip'}
                    ///// cube ^ //
                    // loop={true}
                    grabCursor={false}
                    // pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img className='swiper_inside_box1' src={images.instrumentSlide1}  alt="online keyboard" />
                        <div className='swiper_inside_box2'>
                            <img className='swiper_img' src={images.Keyboard_classes} alt="online keyboard" />

                            <p className='swiper_p'>{para.p1}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='swiper_inside_box1' src={images.instrumentSlide2}  alt="guitar lessons" />
                        <div className='swiper_inside_box2'>
                            <img className='swiper_img' src={images.guitar_Classes} alt="guitar lessons" />

                            <p className='swiper_p2'>{para.p2}</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='swiper_inside_box1' src={images.instrumentSlide3}  alt="violin classes near me" />
                        <div className='swiper_inside_box2'>
                            <img className='swiper_img' src={images.Violin_classes} alt="violin classes near me" />

                            <p className='swiper_p'>{para.p3}</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='swiper_inside_box1' src={images.instrumentSlide4}  alt="ukelele classes near me" />
                        <div className='swiper_inside_box2'>
                            <img className='swiper_img' src={images.Ukulele_classes} alt="ukelele classes near me" />

                            <p className='swiper_p'>{para.p4}</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='swiper_inside_box1' src={images.instrumentSlide5}  alt="piano classes" />
                        <div className='swiper_inside_box2'>
                            <img className='swiper_img' src={images.Piano_lessons} alt="piano classes" />

                            <p className='swiper_p'>{para.p5}</p>
                        </div>

                    </SwiperSlide>
                </Swiper>

            </div>

            <div className="large_device6">
                <div className="grid grid-cols-1 box_padding6">
                    <div className="sub_Heading text-center">
                        <h3>Online Instrumental Clasess <br /> Categories</h3>
                    </div>
                    {/* gap-[16px] */}
                    <div className="grid grid-cols-6 gap-y-4">

                        <div className="col-start-1 col-span-2 box6_1">
                            <img className='image_box6_1' src={images.instrument_1} alt="piano classes" />

                            <div className='box_contends6'>
                                <img src={images.Piano_lessons} alt="piano classes" />
                                <p>{para.p5}</p>
                            </div>

                        </div>

                        <div className="col-start-3 col-span-2 box6_1">
                            <img className='image_box6_1' src={images.instrument_2} alt="online keyboard" />

                            <div className='box_contends6'>

                                <img src={images.Keyboard_classes} alt="online keyboard" />
                                <p>{para.p1}</p>
                            </div>

                        </div>

                        <div className="col-end-7 col-span-2 box6_1">
                            <img className='image_box6_1' src={images.instrument_4} alt="guitar lessons" />

                            <div className='box_contends6'>

                                <img src={images.guitar_Classes} alt="guitar lessons" />
                                <p>{para.p2}</p>
                            </div>

                        </div>

                        <div className="col-start-1 col-span-2 box6_2">
                            <img className='image_box6_2' src={images.instrument_3} alt="violin classes near me" />

                            <div className='box_contends6'>

                                <img src={images.Violin_classes} alt="violin classes near me" />
                                <p>{para.p3}</p>
                            </div>

                        </div>

                        <div className="col-start-4 col-span-2 box6_2">
                            <img className='image_box6_2' src={images.instrument_5} alt="ukelele classes near me" />

                            <div className='box_contends6'>

                                <img src={images.Ukulele_classes} alt="ukelele classes near me" />
                                <p>{para.p4}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default InstrumentCategories