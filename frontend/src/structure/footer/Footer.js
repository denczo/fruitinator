import React from 'react';
import './Footer.css';
import SocialMedia from '../../navigation/socialmedia/SocialMedia';
import Logo from '../logo/Logo';

const Footer = () => {
    return (<div className="Footer">
        <Logo scale={75}/>
        <SocialMedia/>
        <span>Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla</span>
    </div>);
}

export default Footer;