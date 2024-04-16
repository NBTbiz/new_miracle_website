// import React from 'react'
import { useState } from 'react';
import './Form.css'
import images from '../images'

function Form({ formRef }) {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        // For demonstration purposes, just setting the submitted state to true
        setSubmitted(true);
    };

    return (
        <>
            <div ref={formRef} className="custom_padding grid justify-items-center">
                <div className="sub_Heading text-center mb-10">
                    <h3>Join our online music classes at Miracle Music Academy.</h3>
                </div>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
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
                                            name="full-name"
                                            type="full-name"
                                            autoComplete="full-name"
                                            className="block w-full text_box8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-1  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full text_box8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="phone-number"
                                            className="block w-full text_box8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Phone Nunber"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        class type
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled selected>Select your level</option>
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
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled selected>Select your level</option>
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
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled selected>Select your level</option>
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
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option disabled selected>Select your level</option>
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