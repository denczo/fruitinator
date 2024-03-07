import React from 'react';
import Logo from './logo/Logo';
import Box from '@mui/material/Box';

const Header = () => {

    return (<Box display="flex" fontSize={32} justifyContent="center" alignItems="center" padding={5}>
        <Logo scale={100}/>
    </Box>);
}

export default Header;