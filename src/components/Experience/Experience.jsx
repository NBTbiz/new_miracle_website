import  { useState } from 'react';
import images from "../images";
import './Experience.css';

const Experience = () => {
    // Define state to store question-answer pairs
    const [qna] = useState({
        qna1: {
            question: "Is it online singing classes effective?",
            answer: "Absolutely, voice training conducted online can help a lot of people. With the progress of technology, online platforms may offer video calls, pre-recorded lessons, and interactive exercises to deliver high-quality singing lessons. However, a number of variables, including the calibre of the teacher, the student's practice, and the stability of the internet connection, could affect how beneficial online singing lessons are. Selecting a reliable teacher and making sure the online format fits your learning requirements are crucial."
        },
        qna2: {
            question: "What age is required to begin taking online singing classes?",
            answer: "Children are usually ready to begin singing between the ages of 7 and 9. To determine whether a youngster is ready for singing lessons, there are a few methods available. Generally speaking, a youngster is considered ready to begin singing lessons when they are old enough to understand and adhere to rules"
        },
        qna3: {
            question: "How long does each online singing lesson last?",
            answer: "Depending on the kind of class you select, each online singing lesson has a different length. Classes in groups and one-on-ones last approximately sixty minutes. Additionally, it varies based on the plan you choose and your preferences. Together, you and our instructors will decide how long is best for your progress."
        },
        qna4: {
            question: "Can I learn musical instruments online?",
            answer: "Although learning online might be flexible and convenient, it's important to maintain discipline and dedication to your practice routine. Playing an instrument online is definitely something you can learn to do with commitment and persistence."
        },
    });

    // Function to retrieve answer based on question key
    const getAnswer = (questionKey) => {
        return qna[questionKey].answer;
    };

    return (
        <>
            <div className="">
                <div className="box9 custom_padding">
                    <h4>Experience the highest level of musical education with our esteemed instructors.</h4>
                    <p>Experienced Faculty, Certified by Trinity College London. With skill and supporting Credentials in the Art of music production and Language Studies</p>
                    <img src={images.experience2} alt="" />
                </div>
            </div>

            <div className="qna_box9 custom_padding">
                <h3>Frequently Asked Question</h3>
                <div>
                    {Object.keys(qna).map((key) => (
                        <div key={key}>
                            <h4 className='n4_qna9'>{qna[key].question}</h4>
                            <p>{getAnswer(key)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Experience;
