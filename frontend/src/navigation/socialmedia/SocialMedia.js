import React from 'react';
import './SocialMedia.css';
import { SocialIcon } from 'react-social-icons';

const socialMedia = [
    { url: "https://www.upwork.com/freelancers/~01a3417f302aa70c55" },
    { url: "https://www.denicz.info" },
    { url: "https://github.com/denczo" },
    { url: "https://www.youtube.com/@denicz" }
]

const SocialMedia = () => {
    return (<div className='SocialMedia'>
        {socialMedia.map((item, index) => <SocialIcon key={index} className="Icon" fgColor={"#ffffff"} bgColor={"#555555"} url={item.url} />)}
    </div>
    );
}

export default SocialMedia;