import React, { useEffect, useState } from 'react';
import './CarouselSlider.sass';
import sliderData from '../../../../mockData/sliderData';


const CarouselSlider = () => {
    const [index, setIndex] = useState(0)
    const delay = 5000;

    // const colors = ["#0088FE", "#00C49F", "#FFBB28"];

    useEffect(() => {
        // console.log(sliderData.length)
        setTimeout(
            () =>
                setIndex((prevIndex) => prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1),
        delay
        );
        return () => {};
    }, [index]);


    return (<div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {sliderData.map((image, index) => (
                // <div className="slide" key={index} >
                <img  className="slide" key={index} src={image.image} alt={index}></img>
                // </div>
            ))}    </div>
    </div>);
}

export default CarouselSlider;