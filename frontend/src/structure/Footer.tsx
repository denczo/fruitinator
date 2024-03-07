import React from 'react';
import Logo from './logo/Logo';
import Box from '@mui/material/Box';

const Footer = () => {
    return (<Box display="flex" flexDirection="column" component="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="120"><path fill="#88FFD5" fill-opacity="1" d="M0,224L40,192C80,160,160,96,240,101.3C320,107,400,181,480,176C560,171,640,85,720,64C800,43,880,85,960,122.7C1040,160,1120,192,1200,197.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>        <Box display="flex" flexDirection="column" alignItems="center" pb={5} bgcolor="#88FFD5" color="grey">
            <Logo scale={75} />
            <span style={{ fontSize: '13.8pt' }}>Your best source for tropical fruits</span>
            <p></p>
            <span>Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla | <a href='https://github.com/denczo/fruitinator'>Github</a></span>
        </Box>
    </Box>);
}

export default Footer;