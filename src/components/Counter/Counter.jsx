import { useEffect } from 'react'
import './style.css'

function Counter() {
    // Function to animate the counter
    const animateValue = (id, start, end, duration) => {
        if (start === end) return;

        const range = end - start;
        const startTime = new Date().getTime();
        const endTime = startTime + duration;
        const step = () => {
            const currentTime = new Date().getTime();
            const remaining = Math.max((endTime - currentTime) / duration, 0);
            const value = Math.round(end - remaining * range);
            document.getElementById(id).innerText = value;
            if (currentTime < endTime) {
                requestAnimationFrame(step);
            }
        };
        step();
    };

    useEffect(() => {
        // Animate each counter element on component mount
        const elements = document.querySelectorAll('.num');
        elements.forEach(element => {
            const end = parseInt(element.getAttribute('data-goal'));
            animateValue(element.id, 0, end, 2000);
        });
    }, []);
    return (
        <>
            <div className="grid grid-cols-4 counter bg-[#FFB800] ">

                <div className="text-center">
                    <strong><span id="activeStudents" className="num" data-goal="100">0</span>+</strong><br />
                    <span className="">Active Students</span>
                </div>

                <div className="text-center">
                    <strong><span id="testimonials" className="num" data-goal="300">0</span>+</strong><br />
                    <span className="">Testimonials</span>
                </div>

                <div className="text-center">
                    <strong><span id="activeTeachers" className="num" data-goal="50">0</span>+</strong><br />
                    <span className="">Active Teachers</span>
                </div>

                <div className="text-center">
                    <strong><span id="liveSessions" className="num" data-goal="500">0</span>+</strong><br />
                    <span className="">Live Sessions</span>
                </div>

            </div>
        </>
    )
}

export default Counter