import React from 'react';
import Logo from '../assets/img/shop-logo.png';
import '../assets/style/footer.css';

import {
    Box,
    Grid,
    Typography,
} from '@mui/material';


import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import{createTheme,ThemeProvider} from '@mui/material/styles';
import defaultTheme from '../Theme/Theme';
import {Link} from 'react-router-dom';




const Footer = () => {
    const footerTheme= createTheme({
        components:{
            ...defaultTheme.components,
            MuiTypography:{
                styleOverrides:{
                    root:{
                        maxWidth:'500px',
                        margin:'15px auto',
                        color:'#fff'
                    }
                }
            },
            MuiGrid:{
                styleOverrides:{
                    root:{

                            '& ul.footer-socials':{
                                display:'flex',
                                '& li':{
                                    margin:'0px 5px',
                                    '&:first-of-type a':{
                                        color:'black',
                                    },
                                    '& a':{
                                        "&:hover":{
                                            backgroundColor:'#30abb030',
                                            borderColor:'#30abb030',
                                            color:'white'
                                        },
                                        display:'block',
                                        transition:'all .2s ease',
                                        // backgroundColor:'red',
                                        borderRadius:'50%',
                                        textDecoration:'none',
                                        width:'35px',
                                        height:'35px',
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        color:defaultTheme.palette.defaultColors.logoColor,
                                        border: '0.5px solid #30abb0',
                                        padding:'5px',

                                    }
                                }
                                // backgroundColor:'red'
                            }
                    }
                }
            }
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
                    padding:'50px 0px',
                    backgroundColor:'#ffffff1f',
                    boxShadow:`0px 0px 42px 9px ${footerTheme.palette.logoColor}`,
                }}
            >
                <Grid container>
                    <Grid item xs={12} sx={{textAlign:'center'}}>
                        <Box className="footer-logo">
                            <Link to="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </Box>
                        <Typography className='footerHeading'>
                            <span>
                                Our Slogan
                            </span>
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus voluptate quibusdam cumque dicta, dolorum quidem vero enim voluptas! Incidunt laborum voluptatum facere beatae, provident tempora quas sed fugiat nostrum.
                        </Typography>
                        <Grid
                            xs={12}
                            item
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                            }}
                        >
                            <ul className="footer-socials">
                                <li>
                                    <a href='https://github.com/rehman258' target="_blank">
                                        <GitHubIcon/>
                                    </a>

                                </li>
                                <li>
                                <a href="https://rehman258.vercel.app/" target="_blank">
                                        <LanguageIcon/>
                                    </a>
                                </li>
                                {/* <li>
                                    
                                    <a href="https://rehman258.vercel.app/" target="_blank">
                                        <LanguageIcon/>
                                    </a>
                                </li> */}
                            </ul>
                        </Grid>
                    </Grid>
                    {/* </Grid>
                    <Grid item xs={4} sx={{textAlign:'center'}}>
                        <Typography className='footerHeading'>
                            <span>
                                Usefull links
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign:'center'}}>
                        <Typography className='footerHeading'>
                           <span>
                             Us on map
                           </span>
                        </Typography>
                    </Grid> */}
                </Grid>  
            </Box>
        </ThemeProvider>
    );
}

export default Footer;
