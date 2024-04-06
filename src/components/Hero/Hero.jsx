// import React from 'react'
import images from '../images'

function handleWhatsAppClick() {
    // Assuming the WhatsApp number
    const phoneNumber = '+919995113575';

    // Use window.open to open the WhatsApp API link
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
}

function Hero({ scrollToForm }) {
    return (
        <>
            <div className="custom_padding">

                <div className="grid grid-cols-3" >
                    <img src={images.MIRACLE_MUSIC} alt="MIRACLE MUSIC" />
                    <img className='col-end-7 row-span-2 logo_coustom' src={images.Logo} alt="MIRACLE LOGO" />
                    <div className='col-span-2 horizontal_line '></div>
                </div>

                <br />

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <div>
                        <img src={images.MIRACLE} alt="" className='miracle_box' /> <br />
                        <img src={images.MUSIC} alt="" className='music_box' /> <br />
                        <img src={images.Academy} alt="" className='academy_box' />
                    </div>
                    <div>
                        <img src={images.HeroImage} alt="IMAGE" />

                        <h1 className=' hero_p'>
                            <span className='font-bold'> Online Music Classes </span>to learn Singing Classes and
                            <span className='hidden sm:inline'><br /> </span>
                            Instrument Classes in
                            <span className='text-orange-500 font-bold'> Kochi </span> ,
                            <span className='text-rose-500 font-bold'> Kerala </span> </h1>
                    </div>
                </div>
                <br />

                <div>

                    <img className='hidden sm:block' src={images.Register} alt="" />
                    <div className="grid grid-cols-3 block sm:hidden gap-6">
                        <div onClick={scrollToForm} className='col-span-2 register_box'>
                            <h4>Register</h4>
                            <img src={images.music_logo} alt="" />
                        </div>
                        <div className='whatsapp_box' onClick={handleWhatsAppClick}>
                            <img src={images.whatsapp_logo} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Hero