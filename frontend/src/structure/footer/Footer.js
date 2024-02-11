import React from 'react';
import './Footer.sass';
import SocialMedia from '../../navigation/socialmedia/SocialMedia';
import Logo from '../logo/Logo';

const Footer = () => {
    return (<div className="Footer">
        <Logo scale={75}/>
        <span style={{fontSize: '13.8pt'}}>Your best source for tropical fruits</span>
        {/* <SocialMedia/> */}
        <p></p>
        <span>Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla | <a href='https://github.com/denczo/fruitinator'>Github</a></span>
    </div>);
}

export default Footer;