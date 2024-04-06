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
import Form from './Form/Form';
import Experience from './Experience/Experience';
import { useRef } from 'react';

function MainPage() {
  const formRef = useRef(null);
  const instrumentRef = useRef(null);
  const singingRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSinging = () => {
    singingRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToInstrument = () => {
    instrumentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero section 1*/}
      <Hero scrollToForm={scrollToForm} />

      {/* Counter section 2*/}
      <Counter />

      {/* Music Courses section 3*/}
      <MusicCourses />

      {/* Slider section 4*/}
      <Slide singingRef={singingRef} />

      {/* Music Classes Categories section 5*/}
      <MusicCategories />

      {/* Instrument Categories section 6 */}
      <InstrumentCategories instrumentRef={instrumentRef} />

      {/* Video Post section 7 */}
      <VideoPost />

      {/* Form section 8 */}
      <Form formRef={formRef} />

      {/* Form section 9 */}
      <Experience
        scrollToForm={scrollToForm}
        scrollToSinging={scrollToSinging}
        scrollToInstrument={scrollToInstrument}
        />

    </>
  );
}

export default MainPage;


// import React, { useRef } from 'react';
// import './MainPage.css';
// import './font.css';
// import Hero from './Hero/Hero';
// import Counter from './Counter/Counter';
// import MusicCourses from './MusicCourses/MusicCourses';
// import Slide from './Slider/Slide';
// import MusicCategories from './MusicCategories/MusicCategories';
// import InstrumentCategories from './InstrumentCategories/InstrumentCategories';
// import VideoPost from './VideoPost/VideoPost';
// import Form from './Form/Form';
// import Experience from './Experience/Experience';

// function MainPage() {
//   const formRef = useRef(null);
//   const instrumentRef = useRef(null);
//   const singingRef = useRef(null);

//   const scrollToForm = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       {/* Hero section */}
//       <Hero scrollToForm={() => scrollToForm(singingRef)} />
//       {/* End Hero section */}

//       {/* Counter section */}
//       <Counter />
//       {/* End Counter section */}

//       {/* Music Courses section */}
//       <MusicCourses />
//       {/* End Music Courses section */}

//       {/* Slider section */}
//       <Slide singingRef={singingRef} />
//       {/* End Slider section */}

//       {/* Music Classes Categories section */}
//       <MusicCategories />
//       {/* End Music Classes Categories section */}

//       {/* Instrument Categories section */}
//       <InstrumentCategories instrumentRef={instrumentRef} />
//       {/* End Instrument Categories section */}

//       {/* Video Post section */}
//       <VideoPost />
//       {/* End Video Post section */}

//       {/* Form section */}
//       <Form formRef={formRef} />
//       {/* End Form section */}

//       {/* Experience section */}
//       <Experience scrollToForm={() => scrollToForm(aboutRef)} aboutRef={aboutRef} />
//       {/* End Experience section */}
//     </>
//   );
// }

// export default MainPage;

