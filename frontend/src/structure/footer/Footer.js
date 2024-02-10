import React from 'react';
import './Footer.sass';
import SocialMedia from '../../navigation/socialmedia/SocialMedia';
import Logo from '../logo/Logo';

const Footer = () => {
    return (<div className="Footer">
        <Logo scale={75}/>
        <span>Your best source for tropical fruits</span>
        <SocialMedia/>
        {/* <!-- Start Partnerprogramm ALL-INKL.COM --> */}
        <a href="https://all-inkl.com/PA703BC63985AD0">
<img border="0" src="https://all-inkl.com/banner/all-inkl_banner_115x23_logo_small.gif" alt="ALL-INKL.COM - Webhosting Server Hosting Domain Provider" /></a>
        {/* <!-- Ende Partnerprogramm --> */}
        <span>Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla</span>
    </div>);
}

export default Footer;