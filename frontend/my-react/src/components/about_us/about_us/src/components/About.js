import React from 'react';
import './About.css'; 
import image from '../assets/image.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="image-gallery">
                <div className="image-item">
                    <img src={image} alt="About Us" />
                </div>
            </div>
            <div className="about-text">
                <h1>About Us</h1>
                <p>Next Skills 360 is a Hyderabad-based Social Enterprise dedicated to providing innovative, low-cost, and easy-to-use technology education products for school students worldwide. Founded by Suraj V Meiyur, an MIT SOLVE Fellow, and Sowjanya Suraj, a seasoned mentor and coach, our mission is to enhance problem-solving skills and make technology education accessible to all children, including the visually challenged.</p>
                <p>Our flagship product, the ProGame kit, is a first-of-its-kind DIY programming tool that doesn't require a computer. We also offer a variety of other products designed to foster a love for coding and ensure no child is left behind.</p>
                <p>By 2026, we aim to impact at least 1 million students, including 50,000 visually challenged learners, introducing them to the joy and potential of technology.</p>
                <p>Our Goals:</p>
                <ul>
                    <li>Innovate and develop accessible tech education tools.</li>
                    <li>Empower students globally with problem-solving skills.</li>
                    <li>Ensure inclusive education, leaving no child behind.</li>
                </ul>
                <p>Join us in our mission to revolutionize tech education for all students.</p>
            </div>
        </div>
    );
};

export default About;
