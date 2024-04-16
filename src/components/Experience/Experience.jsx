import { useRef, useState } from 'react';
import Slider from "react-slick";
import images from "../images";
import './Experience.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Experience = ({ scrollToForm, scrollToSinging, scrollToInstrument }) => {

    // Define state to store question-answer pairs
    const [qna] = useState({
        qna1: {
            question: "Is it online singing classes effective?",
            answer: "Absolutely, voice training conducted online can help a lot of people. With the progress of technology, online platforms may offer video calls, pre-recorded lessons, and interactive exercises to deliver high-quality singing lessons. However, a number of variables, including the calibre of the teacher, the student's practice, and the stability of the internet connection, could affect how beneficial online singing lessons are. Selecting a reliable teacher and making sure the online format fits your learning requirements are crucial."
        },
        qna2: {
            question: "What age is required to begin taking online singing classes?",
            answer: "Children are usually ready to begin singing between the ages of 7 and 9. To determine whether a youngster is ready for singing lessons, there are a few methods available. Generally speaking, a youngster is considered ready to begin singing lessons when they are old enough to understand and adhere to rules"
        },
        qna3: {
            question: "How long does each online singing lesson last?",
            answer: "Depending on the kind of class you select, each online singing lesson has a different length. Classes in groups and one-on-ones last approximately sixty minutes. Additionally, it varies based on the plan you choose and your preferences. Together, you and our instructors will decide how long is best for your progress."
        },
        qna4: {
            question: "Can I learn musical instruments online?",
            answer: "Although learning online might be flexible and convenient, it's important to maintain discipline and dedication to your practice routine. Playing an instrument online is definitely something you can learn to do with commitment and persistence."
        },
    });
    <div className='Slider_box9'>
        {/* <h3>6</h3> */}
        <img src={images.slideImageT1} alt="" />
    </div>
    const aboutRef = useRef(null)
    const scrollToAbout = () => {

        console.log("Scrolling to About Us section...");
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    // Function to retrieve answer based on question key
    const getAnswer = (questionKey) => {
        return qna[questionKey].answer;

    };

    const settings = {
        dots: false,
        prevArrow: null, 
        nextArrow: null,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <>
            <div className="main_box9  bg-red-100">
                <div className="box9 custom_padding">
                    <h4>Experience the highest level of musical education with our esteemed instructors.</h4>




                    <img className='box9_img' src={images.experience2} alt="music classes" />
                   
                    <div className="slider-container">
                        <h3>Experience the highest level</h3>
                        <Slider {...settings}>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT1} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT2} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT3} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT4} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT5} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT6} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT7} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT8} alt="" />
                            </div>
                            <div className='Slider_box9'>
                                <img src={images.slideImageT9} alt="" />
                            </div>
                        </Slider>
                    </div>


                </div>
            </div>


            <div className="qna_box9 custom_padding">
                <h3>Frequently Asked Question</h3>
                <div>
                    {Object.keys(qna).map((key) => (
                        <div key={key}>
                            <h4 className='n4_qna9'>{qna[key].question}</h4>
                            <p>{getAnswer(key)}</p>
                        </div>
                    ))}
                </div>
                <div className="">
                    <h4 className='qna_box9_h1'>Miracle music Academy Online Music Lessons?</h4>
                    <p>There are online music classes for adults and kids. Best online music courses are offered by Miracle Music Academy which have been designed in such a manner that it can be learn for fun and for making a career in the musical field.We tailored for kids and adults who have passionate to learn music lessons online. Our online music courses have special features that make it easy to learn from the comfort of your home.We provide online music classes so that you can develop your career in the field of music.</p>

                    <h4 ref={aboutRef} className='qna_box9_h2'>About Miracle Music Academy</h4>
                    <p>Miracle Music Academy of Music which is one of the best online music schools offers a comprehensive online music training to cover all aspects of playing an instrument or singing. We offer a number of live online music classes which include classes on music history, theory, composition and music basic lessons. We have best experienced and qualified music tutors for online classes who would also be able to provide feedback and help you to progress as a musician.if you pick music lessons online, it will be affordable and budget friendly. You can get best quality online music education from Miracle Music Academy. As per your proficiency you can choose music courses for beginners, music courses for intermediate and music courses for advanced level. Also there is no age limit for learning music. we provide online music lessons for adults and online music lessons for kids also.Miraclemusicacademy.com is an destination that helps people with all ages, kids and adults and learn to play different instruments. It is an online singing classes where live music lessons are conducted one-on-one through online music classes. We offer instruments like, violin, keyboard, Piano, Guitar & Ukulele for students to take lessons in and we teach them well.</p>

                    <h4 className='qna_box9_h3'>Best online music classes near me</h4>
                    <p>Every one of our online music teachers is highly qualified and experienced. Our online music classes are based on the most recent curriculum and are constantly evolving according to emerging trends and technologies. In this manner, we can guarantee that our students acquire the appropriate learning strategies and abilities.We have experienced musicians on staff who can teach you how to play popular songs to pas</p>
                </div>

                <div className="footer">

                    <h4 onClick={scrollToSinging}>Singing Classes</h4>
                    <h4 onClick={scrollToInstrument}>instrument classes</h4>
                    <h4 onClick={scrollToForm}>online class booking</h4>
                    <h4 onClick={scrollToAbout}>About Us</h4>

                    <div className='flex social_box gap-4'>
                        <a href="https://www.instagram.com/miraclemusic.online/" target="_blank" rel="noopener noreferrer">
                            <img src={images.social1} alt="Instagram" />
                        </a>
                        <a href="https://wa.me/919995113575" target="_blank" rel="noopener noreferrer">
                            <img src={images.social2} alt="WhatsApp" />
                        </a>
                        <a href="https://www.facebook.com/miraclemusicacademy/" target="_blank" rel="noopener noreferrer">
                            <img src={images.social3} alt="Facebook" />
                        </a>
                    </div>
                    <h4>Contact us : </h4>
                    <p> Near Ambattukavu metro station, Choornikkara, Aluva, Kochi, Kerala 683501 | +91 9995113575</p>
                </div>
                <div className='grid cols-1 justify-items-center'>

                    <div className="col-lg-6 map_box" >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.6141836275087!2d76.3357289!3d10.0782363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080feea9d5c86f%3A0xbefa1a856237fcfb!2sMiracle%20Music%20Academy!5e0!3m2!1sen!2sin!4v1704978404627!5m2!1sen!2sin"
                            frameBorder="0"
                            allowFullScreen
                            title="Google Map Embed"
                            className='map_box_inside'
                        ></iframe>
                    </div>
                </div>
                <div className='grid cols-1 justify-items-center'>
                    <div className="privacy_box">Privacy Policy</div>
                </div>
            </div>
        </>
    );
};

export default Experience;
