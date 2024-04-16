// import React from 'react'
import images  from '../images'
import './style.css'

function MusicCourses() {
  return (
    <>
    <div className="custom_padding">
        <div className='text-center mt-6'>
          <h3 className='sub_Heading'>Music Courses</h3>
        </div>

        <div className='grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 music_courses_box3'>

          <div className='grid justify-items-center'>
            <img className=' music_courses3_1' src={images.course_1} alt="carnatic music class near me" />
            <p className='text-center'>Carnatic <br /> music</p>
          </div>

          <div className='grid justify-items-center'>
            <img className=' music_courses3_1' src={images.course_2} alt="hindustan classical music" />
            <p className='text-center'>Hindustani <br/> music</p>
          </div>

          <div className='grid justify-items-center'>
            <img className=' music_courses3_1' src={images.course_3} alt="western music classes" />
            <p className='text-center'>Western <br /> music</p>
          </div>

          <div className='grid justify-items-center'>
            <img className=' music_courses3_1' src={images.course_4} alt="violin classes near me" />
            <p className='text-center'>Violin</p>
          </div>

          <div className='grid justify-items-center pt-7 lg:pt-0'>
            <img className=' music_courses3_2' src={images.course_5} alt="piano classes" />
            <p className='text-center'>Piano</p>
          </div>

          <div className='grid justify-items-center pt-7 lg:pt-0'>
            <img className=' music_courses3_2' src={images.course_6} alt="ukelele classes near me" />
            <p className='text-center'>Ukulele</p>
          </div>

          <div className='grid justify-items-center pt-7 lg:pt-0'>
            <img className=' music_courses3_2' src={images.course_3} alt="learn guitar online" />
            <p className='text-center'>Guitar</p>
          </div>

          <div className='grid justify-items-center pt-7 lg:pt-0'>
            <img className=' music_courses3_2' src={images.course_8} alt="keyboard classes" />
            <p className='text-center'>Keyboard</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default MusicCourses