import React from 'react';

import defaultTheme from '../../Theme/Theme';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import {
    Box,
    Grid,
    Typography
} from '@mui/material';

import {connect} from 'react-redux';


import BannerSlider from '../../components/BannerSlider';
import '../../assets/style/home.css';
import Logo from '../../assets/img/shop-logo.png'



const Home = ({homeReducer}) => {


    const homeTheme = createTheme({
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
                            color:'#fff'
                        }
                    }
                }
            },
            MuiBox:{
                styleOverrides:{
                    root:{
                        '&.about-section"':{
                            padding:'50px 0px'
                        }
                    }
                }
            },
            MuiGrid:{
                styleOverrides:{
                    root:{
                        '& img.home-about--section-logo':{
                            padding:'0px 30px'
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
        <section>
            <ThemeProvider theme={homeTheme}>

                <Box className="banner-slider">
                    <BannerSlider
                        sliderList={homeReducer.sliderList}
                        />
                </Box>
                <div className="line-effect"></div>
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
                            <img className='home-about--section-logo' src={Logo} alt="" />
                        </Grid>
                    </Grid>
                </Box>
                <div className="line-effect"></div>
                <Typography className="section-header">
                    Products
                </Typography>
                <Box
                    className="product-list"
                    sx={{
                        padding:'50px 0px'
                    }}
                >
                    <Grid container
                        
                    >
                        <Grid item xs={3}>
                            1
                        </Grid>
                        <Grid item xs={3}>
                            2
                        </Grid>
                        <Grid item xs={3}>
                            3
                        </Grid>
                        <Grid item xs={3}>
                            4
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </section>
    );
}
const mapStateToProps=state=>{
    return state
}
const mapDispatchToProps={

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
