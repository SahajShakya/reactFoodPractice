import React from "react";
import Slider from "react-slick";

import '../styles/slider.css';

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000    ,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        slideToShow: 1,
        slideToScroll: 1
    }

    return (
        <>  
            <Slider {...settings}>
                <div>
                    <p className="review__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam exercitationem cum nesciunt dolorum, 
                        similique maiores? Rerum deserunt ab enim voluptates. Minus, pariatur. 
                        Quibusdam hic consequatur vel. Aliquid, est laborum.
                    </p>
                    <div className="slider__content d-flex align-items-center gap-3">
                        <img src={ava01} alt="ava1" className=" rounded" />
                        <h6>Jhon Doe1</h6>
                    </div>
                </div>
                <div>
                    <p className="review__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam exercitationem cum nesciunt dolorum, 
                        similique maiores? Rerum deserunt ab enim voluptates. Minus, pariatur. 
                        Quibusdam hic consequatur vel. Aliquid, est laborum.
                    </p>
                    <div className="slider__content d-flex align-items-center gap-3">
                        <img src={ava02} alt="ava1" className=" rounded" />
                        <h6>Jhon Doe2</h6>
                    </div>
                </div>
                <div>
                    <p className="review__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam exercitationem cum nesciunt dolorum, 
                        similique maiores? Rerum deserunt ab enim voluptates. Minus, pariatur. 
                        Quibusdam hic consequatur vel. Aliquid, est laborum.
                    </p>
                    <div className="slider__content d-flex align-items-center gap-3">
                        <img src={ava03} alt="ava1" className=" rounded" />
                        <h6>Jhon Doe3</h6>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default TestimonialSlider