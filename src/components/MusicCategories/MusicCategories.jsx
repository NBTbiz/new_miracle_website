// import React from 'react'
import images from '../images'
import './style.css'


function MusicCategories() {

  const paraphraseValue = {
    'p1': "Carnatic music, also known as Karnāṭaka saṃgīta or Karnāṭaka saṅgītam in the South Indian languages, is a musical system commonly associated with South India. It encompasses the modern Indian states of Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, and Telangana.",
    'p2': "Western music is a genre of music composed by and about the people who settled and worked across the Western United States and Western Canada. It celebrates the lifestyle of cowboys on the open range, amidst the Rocky Mountains, and amidst the prairies of Western North America.",
    'p3': "Hindustani classical music is the classical music of the Indian Subcontinent northern regions. It may also be called NorthIndian classical music or, in Hindustani, shastriya sangeet. The termshastriya sangeet literally means classical music, and is also used to refer to Indian classical music in general"
  };

  return (
    <>
      <div className='grid grid-cols-1'>
        <div className='text-center'>
          <h3 className='sub_Heading5'>Online Music Classes <br /> Categories</h3>
          <br /><br />
        </div>
        
        <div className='small_device5 custom_padding'>
          {/* Content to show only on small devices */}

          <div className='small_device_box5'>

            <img className='img5 img5_1' src={images.Categories1} alt="carnatic music classes" />
            <div className='grid small_device_box_inside5'>
              <img src={images.music_categories_1} alt="carnatic music classes" />
              <p className='p5'>{paraphraseValue.p1}</p>
            </div>
          </div>

          <div className='small_device_box5'>

            <img className='img5 img5_2' src={images.Categories2} alt="western music classes" />
            <div className='grid small_device_box_inside5'>
              <img src={images.music_categories_2} alt="western music classes" />
              <p className='p5'>{paraphraseValue.p2}</p>
            </div>
          </div>

          <div className='small_device_box5'>

            <img className='img5 img5_3' src={images.Categories3} alt="hindustan music classes" />
            <div className='grid small_device_box_inside5'>
              <img src={images.music_categories_3} alt="hindustan music classes" />
              <p>{paraphraseValue.p3}</p>
            </div>
          </div>
          
        </div>


        <div className="large_device5">
          <div className='grid grid-cols-2  custom_padding justify-items-center'>
            <div className='music_class_box5'>
              <img className='img_letter5' src={images.music_categories_1} alt="" />
              <p>{paraphraseValue.p1}</p>
            </div>
            <div className='music_class_box5'>
              <img className='img_music_class5' src={images.Categories1} alt="" />
            </div>
            <div className='music_class_box5'>
              <img className='img_music_class5 img_music_class5_1' src={images.Categories2} alt="" />
            </div>
            <div className='music_class_box5'>
              <img className='img_letter5' src={images.music_categories_2} alt="" />
              <p>{paraphraseValue.p2}</p>
            </div>
            <div className='music_class_box5'>
              <img className='img_letter5' src={images.music_categories_3} alt="" />
              <p>{paraphraseValue.p3}</p>
            </div>
            <div className='music_class_box5'>
              <img className='img_music_class5 img_music_class5_1' src={images.Categories3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MusicCategories