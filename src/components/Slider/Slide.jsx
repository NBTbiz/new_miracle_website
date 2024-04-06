import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slide.css';

// import required modules
import { Pagination } from 'swiper/modules';
import {useLayoutEffect, useState } from 'react';

export default function App({singingRef}) {
    const [isMediumOrLargeScreen, setIsMediumOrLargeScreen] = useState(true);

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMediumOrLargeScreen(window.innerWidth >= 576); // Adjust breakpoint as needed
        };

        handleResize(); // Call handleResize initially to set the correct state
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div ref={singingRef} className="small_device_box4_hide">
                <div className='flex justify-center '>
                    <div className='small_device_box4 '>
                        <h5>Singing classes</h5>
                        <p>Benefit of our Singing Classess <span className='arrow_custom'>→</span></p>
                        <div className="flex ">
                            <div className='Under_line4'></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 main_box4 gap-20'>

                <div className='box_const4'>
                    <h5>Singing classes</h5> <br />
                    <p>Miracle Music Academy we are dedicated to helping our students
                        develop a strong foundation in vocal technique. Our expert instructors
                        guide students through a complete Music classes  educational program
                        designed to enhance their singing abilities and let go of their full vocal
                        potential</p>
                    <br /><br />

                    <div className='Under_line4'></div>
                    <br /><br />
                    <p>Benefit of our Singing Classess <span className='arrow_custom'>→</span></p>
                </div>

                <div className='col-span-3 box_dynamic4 '>

                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper1"
                    >
                        {!isMediumOrLargeScreen && (
                            <SwiperSlide >
                                <p>Miracle Music Academy we are dedicated to helping our students
                                    develop a strong foundation in vocal technique. Our expert instructors
                                    guide students through a complete Music classes  educational program
                                    designed to enhance their singing abilities and let go of their full vocal
                                    potential</p>
                            </SwiperSlide>
                        )}
                        <SwiperSlide>
                            <h5>Pitch  Accuracy</h5> <br />
                            <p>Achieving accurate pitch is crucial for delivering
                                captivating and emotionally resonant performances. Through vocal
                                exercises and ear training activities, students learn to develop a keen
                                sense of pitch and accuracy, enabling them to hit notes precisely and stay
                                in tune</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Vocal Range Extension</h5> <br />
                            <p>Our classes focus on exercises and techniques
                                to gradually extend students vocal ranges, allowing them to access
                                higher and lower notes with ease and flexibility.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h5>Articulation</h5> <br />
                            <p>Singing with clarity and articulation improves vocal
                                performances expression and comprehensibility. To help students
                                properly enunciate songs and express emotion, we offer diction,
                                pronunciation, and articulatory exercises education</p>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    );
}
