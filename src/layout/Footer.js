import React from 'react';
import Logo from '../assets/img/shop-logo.png';
import '../assets/style/footer.css';

import {
    Box,
    Grid,
} from '@mui/material';



import{createTheme,ThemeProvider} from '@mui/material/styles';
import defaultTheme from '../Theme/Theme';
import {Link} from 'react-router-dom';




const Footer = () => {
    const footerTheme= createTheme({
        components:{
            ...defaultTheme.components
        },
        palette:{
            ...defaultTheme.palette.defaultColors
        }
    })
    return (
        <ThemeProvider theme={footerTheme}>

            <Box
                className="footer"
                sx={{
                    marginTop:'150px',
                    backgroundColor:'#ffffff1f',
                    boxShadow:`0px 0px 42px 9px ${footerTheme.palette.logoColor}`,
                }}
            >
                <Grid container>
                    <Grid item>
                    footer

                    </Grid>
                </Grid>  
            </Box>
        </ThemeProvider>
    );
}

export default Footer;
