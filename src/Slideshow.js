import React, { useState, useEffect } from 'react';

function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(false);

    const slides = [
        {
            title: "Cloud Based Web Development",
            description: "Cloud-based web design, development and mobile apps"
        },
        {
            title: "eCommerce Store",
            description: "Online store with great look, easy to use, and secured. Sell your products online 24/7 using eCommerce website."
        },
        {
            title: "Web Design and Development",
            description: "We design custom solutions across multiple platforms and connect with your customers through digital platforms."
        },
        {
            title: "Digital Marketing",
            description: "Our digital marketing solutions bring local businesses an unparalleled advantage to grow and thrive."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
                setFade(false);
            }, 1000); // Match the duration of CSS fade-out
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setFade(false);
        }, 1000);
    };

    const prevSlide = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
            setFade(false);
        }, 1000);
    };

    return (
        <div className="slideshow-container">
            <div className={`slideshow-slide ${fade ? 'fade-out' : 'fade-in'}`} key={currentSlide}>
                <h3>{slides[currentSlide].title}</h3>
                <p>{slides[currentSlide].description}</p>
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Slideshow;
