import React from 'react';
import Logo from '../assets/img/shop-logo.png';
import '../assets/style/header.css';

import {Link} from 'react-router-dom';

import defaultTheme from '../Theme/Theme';
import {createTheme,ThemeProvider} from '@mui/material/styles';

import {
    Box,
    Grid,
} from '@mui/material';


import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
    const headerTheme= createTheme({
        components:{
            MuiBox:{
                styleOverrides:{
                    root:{
                        backgroundColor:'red'
                    }
                }
            },
            MuiGrid:{
                styleOverrides:{
                    root:{
                        padding:'10px 15px',
                        '& ul.header-menu-list':{
                            display:'flex',
                            '& li':{
                                margin:'0px 5px',
                                boxShadow:'-5px 6px 4px -1px #30abb0',

                                '& a':{
                                    '&:hover':{
                                        transform:'translate(0px,1px)'
                                    },
                                    transform:'translate(-5px,5px)',
                                    display:'block',
                                    backgroundColor:'#3A3C3D',
                                    // backgroundColor:'red',
                                    transition:'all .2s ease',
                                    borderRadius:'5px',
                                    textDecoration:'none',
                                    color:defaultTheme.palette.defaultColors.logoColor,
                                    border:'.5px solid #fff',
                                    padding:'10px 25px',


                                }
                            }
                            // backgroundColor:'red'
                        },
                        '& ul.header-socials':{
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
                                    border:'.5px solid #000',
                                    padding:'5px',

                                }
                            }
                            // backgroundColor:'red'
                        }
                    }
                }
            },
        },
        ...defaultTheme.components,
        
        palette:{
            ...defaultTheme.palette.defaultColors
        }
    })    
    // console.log()
    return (
        <ThemeProvider theme={headerTheme}>

        <Box 
            className='header'
            sx={{
                backgroundColor:'#ffffff1f',
                boxShadow:`0px 4px 42px 9px ${headerTheme.palette.logoColor}`,
                position:'relative',
                zIndex:'9999',
            }}
            >
            <Grid container 
                sx={{
                    alignItems:'center',
                    // padding:'15px'
                }}
            >
                <Grid item xs={3}>
                    <Link exact='true' to="/">
                        <div className="header-logo">
                            <img src={Logo} alt="" />
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <ul className='header-menu-list'>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={2}>
                    <ul className='header-socials'>
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
                        <li>
                            
                            <a href="https://rehman258.vercel.app/" target="_blank">
                                <LanguageIcon/>
                            </a>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={1}>
                    <ul className='header-socials'>
                        <li>
                            <a  >
                                <ShoppingBasketIcon/>
                            </a>

                        </li>
                        
                    </ul>
                </Grid>
            </Grid>
        </Box>
        </ThemeProvider>
    );
}

export default Header;
