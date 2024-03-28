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
            <img className="w-full h-full object-cover" src={images.reels} alt="" />
          </div>
          <div className="box7_2 ">
            <img className="w-full h-full object-cover" src={images.youtube} alt="" />
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
            <img className="w-full h-full object-cover" src={images.reels} alt="" />
          </div>

          <div className="video_box7_5 col-span-3">
            <img className="w-full h-full object-cover" src={images.video_img3} alt="" />
          </div>

          <div className="video_box7_6 col-span-6 col-start-4">
            <img className="w-full h-full object-cover" src={images.youtube} alt="" />
          </div>

        </div>
      </div>

    </>
  )
}

export default VideoPost