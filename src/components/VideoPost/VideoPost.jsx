// import React from 'react'
import images from "../images"
import './VideoPost.css'

function VideoPost() {
  return (
    <>
      <div className="video_small_box7">
        <div className="box_p7 custom_padding">
          <p>Experienced Faculty, Certified by Trinity College London. With skill and
            supporting Credentials in the Art of music production and Language Studies</p>
        </div>
        <div className="grid place-items-center custom_padding">
          <div className="box7_2 ">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DeF00TVKLHI?si=h8k9fL2lUmRaIL1L"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="couston7_h4">
            <h4>Melodies of Musical Education</h4>
          </div>
          <div className="grid grid-cols-2 ">
            <div className=" box7_1 rounded-l-lg">
              <iframe
                src="https://www.instagram.com/reel/C5IPq76SpvM/embed/"
                width="100%"
                height="374px"
                title="Instagram Post"
                scrolling="no"
              ></iframe>
            </div>
            <div className="box7_1 rounded-r-lg">
              <iframe
                src="https://www.instagram.com/reel/C4cdi2eokH7/embed/"
                width="100%"
                height="374px"
                title="Instagram Post"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* ####################################################### */}
      <div className="video_larg7">
        <div className="box_image7">
          <img src={images.experience} alt="" />
        </div>
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
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DeF00TVKLHI?si=h8k9fL2lUmRaIL1L"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

        </div>
      </div>

    </>
  )
}

export default VideoPost