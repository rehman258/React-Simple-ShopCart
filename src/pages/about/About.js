import React,{useEffect,useState} from 'react';

import defaultTheme from '../../Theme/Theme';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import {
    Box,
    Grid,
    Typography
} from '@mui/material';

import {connect} from 'react-redux';


// import '../../assets/style/about.css';
import Logo from '../../assets/img/shop-logo.png'



const About = () => {
    const aboutTheme = createTheme({
        components:{
            MuiTypography:{
                styleOverrides:{
                    root:{
                        '&.aboutContent':{
                            color:'white',
                            padding:'50px 100px'
                        },
                        '&.section-header':{
                            width:'100%',
                            fontSize:'56px',
                            textAlign:'center',
                            margin:'50px 0px',
                            marginTop:'105px',
                            color:'#fff',
                            "& span":{
                                borderRadius: '22px',
                                borderTop: '8px solid #80878cd9',
                                borderBottom: '8px solid #80878cd9',
                                padding: '15px 45px',
                            }
                        }
                    }
                }
            },
            MuiBox:{
                styleOverrides:{
                    root:{
                        '&.about-section"':{
                            padding:'50px 0px',
                        }
                    }
                }
            },
            MuiGrid:{
                styleOverrides:{
                    root:{
                        backgroundColor:'red',
                        '& .MuiGrid-item':{
                            padding:'0px 15px',
                        },
                        '& img.home-about--section-logo':{
                                
                        },
                        alignItems:'center',
                        justifyContent:'center'
                    }
                }
            },
            ...defaultTheme.components,

            
        }
    })
    return (
        <ThemeProvider theme={aboutTheme}>
            <section>
                <Typography className="section-header">
                    <span>
                    About
                    </span>
                </Typography>
                <Box 
                    sx={{
                        padding:'50px 0px'
                    }}
                >
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography className='aboutContent'> 
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae non alias temporibus in deserunt laudantium maiores ex voluptatum vel? Facere rerum, nisi doloremque repudiandae odit culpa totam sit! Aspernatur, consequuntur?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae non alias temporibus in deserunt laudantium maiores ex voluptatum vel? Facere rerum, nisi doloremque repudiandae odit culpa totam sit! Aspernatur, consequuntur?
                            </Typography>
                        </Grid>
                        <Grid 
                            item
                            xs={6}
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }} 
                        >
                            <img className='home-about--section-logo' style={{
                                height: '121px',
                                border: '2px solid #30abb0',
                                borderRadius: '5px',
                                background: '#30acb003',
                                padding: '30px',
                            }} src={Logo} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </ThemeProvider>

    );
}

export default About;
