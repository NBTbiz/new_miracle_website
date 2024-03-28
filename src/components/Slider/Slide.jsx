import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slide.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 main_box4'>

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
                        <p>Benefit of our Singing Classess</p>  
                </div>
                <div className='col-span-2 box_dynamic4'>

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
                        <SwiperSlide>
                            <h5>Pictch Accuracy</h5> <br />
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
