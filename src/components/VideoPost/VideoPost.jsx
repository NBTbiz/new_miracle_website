// import React from 'react'
import images from "../images"
import './VideoPost.css'

function VideoPost() {
  return (
    <>
      <div className="box_image7">
        <img src={images.experience} alt="" />
      </div>
      <br /><br /><br />
      <div className="video_small_box7">
        <div className="grid place-items-center ">

          {/* <div className=" small_video_box7_1 ">

            <p>Experienced Faculty, Certified by Trinity College London. With skill and
              supporting Credentials in the Art of music production and Language Studies</p>

          </div> */}
          <div className="box7_1 ">
            {/* <img className="w-full h-full object-cover" src={images.reels} alt="" /> */}
            <iframe
              src="https://www.instagram.com/reel/C5IPq76SpvM/embed/"
              width="100%"
              height="100%"
              title="Instagram Post"
              scrolling="no"
            ></iframe>
          </div>
          <div className="box7_2 ">
            {/* <img className="w-full h-full object-cover" src={images.youtube} alt="" /> */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DeF00TVKLHI?si=h8k9fL2lUmRaIL1L"
              title="YouTube video player"
              // frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
            ></iframe>
          </div>

        </div>
      </div>

      <div className="video_larg7">
        <div className="grid grid-cols-12  video_box7 custom_padding">

          <div className="video_box7_1 col-span-5">
            <p>Experienced Faculty, Certified by Trinity College London. With skill and
              supporting Credentials in the Art of music production and Language Studies</p>
          </div>

          <div className="video_box7_2 col-span-2">
            <img className="w-full h-full object-cover" src={images.video_img1} alt="" />
          </div>

          <div className="video_box7_3 col-span-2">
            <img className="w-full h-full object-cover" src={images.video_img2} alt="" />
          </div>

          <div className="video_box7_4 col-span-3 row-span-2">
            {/* <img className="w-full h-full object-cover" src={images.reels} alt="" /> */}
            <iframe
              src="https://www.instagram.com/reel/C5IPq76SpvM/embed/"
              width="100%"
              height="100%"
              title="Instagram Post"
              scrolling="no"
            ></iframe>
          </div>

          <div className="video_box7_5 col-span-3">
            <img className="w-full h-full object-cover" src={images.video_img3} alt="" />
          </div>

          <div className="video_box7_6 col-span-6 col-start-4">
            {/* <img className="w-full h-full object-cover" src={images.youtube} alt="" /> */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DeF00TVKLHI?si=h8k9fL2lUmRaIL1L"
              title="YouTube video player"
              // frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
            ></iframe>
          </div>

        </div>
      </div>

    </>
  )
}

export default VideoPost