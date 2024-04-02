// import React from 'react';
import './MainPage.css';
import './font.css'


import Hero from './Hero/Hero';
import Counter from './Counter/Counter';
import MusicCourses from './MusicCourses/MusicCourses';
import Slide from './Slider/Slide';
import MusicCategories from './MusicCategories/MusicCategories';
import InstrumentCategories from './InstrumentCategories/InstrumentCategories';
import VideoPost from './VideoPost/VideoPost';
// import Form from './Form/Form';
import Experience from './Experience/Experience';
// import Sample from './Sample';

function MainPage() {
  return (
    <>
      {/* Hero section 1*/}
      <Hero />
      {/* End Hero section */}

      {/* Counter section 2*/}
      <Counter />
      {/* End Counter section */}

      {/* Music Courses section 3*/}
      <MusicCourses />
      {/* End Music Courses section */}

      {/* Slider section 4*/}
      <Slide />
      {/* End Slider section */}

      {/* Music Classes Categories section 5*/}
      <MusicCategories />
      {/* End Music Classes Categories section */}

      {/* Instrument Categories section 6 */}
      <InstrumentCategories />
      {/*  */}

      {/* Video Post section 7 */}
      <VideoPost />
      {/*  */}

      {/* Form section 8 */}
      {/* <Form /> */}
      {/*  */}

      {/* Form section 9 */}
      <Experience />
      {/*  */}

      {/* < Sample /> */}

      {/* Add extra spacing */}
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </>
  );
}

export default MainPage;
