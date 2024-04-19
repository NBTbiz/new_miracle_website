import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'
import images from '../images'

function Form({ formRef }) {

    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dco2zvv', 'template_0y9v1ai', form.current, {
                publicKey: '45PmbcBdrN1bd9Dc6',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div ref={formRef} className="custom_padding grid justify-items-center">
                <div className="sub_Heading text-center mb-10">
                    <h3>Join our online music classes at Miracle Music Academy.</h3>
                </div>
                {!submitted ? (
                    <form ref={form} onSubmit={sendEmail}>

                        <div className="form_box8">
                            <div className=" grid grid-cols-6 gap-x-6 gap-y-6 sm:grid-cols-6 form_box8_1">
                                <div className="col-span-6 sm:col-span-6 text-center">
                                    <h4 className='sub_Heading'>Registration Form</h4>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900 value='Full Name">
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="full-name"
                                            name="user_name"
                                            type="text"
                                            autoComplete="name"
                                            className="block w-full text_box8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-1  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="user_email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full text_box8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="user_phone"
                                            id="phone-number"
                                            autoComplete="phone-number"
                                            className="block w-full text_box8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Phone Nunber"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        class type
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="class-type"
                                            name="user_type"
                                            autoComplete="class-type"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled value="" selected>Select your level</option>
                                            <option>Singing Classes</option>
                                            <option>Instruments Classes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Level of Musical Experience
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="level"
                                            name="user_level"
                                            autoComplete="level"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled value="" selected>Select your level</option>
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Advanced</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Preferred Class Format
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="preferred"
                                            name="user_preferred"
                                            autoComplete="preferred"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled value="" selected>Select your level</option>
                                            <option>One-On-One Lessons</option>
                                            <option>Group Classes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        How did you hear about us?
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="about"
                                            name="user_about"
                                            autoComplete="about"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled value="" selected>Select your level</option>
                                            <option>Website</option>
                                            <option>Social Media</option>
                                            <option>Referral</option>
                                            <option>Ads</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-span-1 justify-center button_box8'>
                                    <button type="submit" className="form_button bg-indigo-900">
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className="text-center">
                        <img className='rounded-xl' src={images.thank_form} alt="music classes" />
                    </div>
                )}
            </div>
        </>
    )
}

export default Form
