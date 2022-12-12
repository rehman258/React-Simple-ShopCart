import React from 'react';

import defaultTheme from '../../Theme/Theme';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import {
    Box,
    Grid
} from '@mui/material';

import {connect} from 'react-redux';


import BannerSlider from '../../components/BannerSlider';
import '../../assets/style/home.css';
import Logo from '../../assets/img/shop-logo.png'



const Home = ({homeReducer}) => {
    return (
        <section>
            <Box className="banner-slider">
                <BannerSlider
                    sliderList={homeReducer.sliderList}
                />
            </Box>
            <Box className="about-section">
                <Grid container >
                    <Grid item xs={6}>
                        <p> 
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae non alias temporibus in deserunt laudantium maiores ex voluptatum vel? Facere rerum, nisi doloremque repudiandae odit culpa totam sit! Aspernatur, consequuntur?
                        </p>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Logo} alt="" />
                    </Grid>
                </Grid>
            </Box>
            <div className="line-effect"></div>
        </section>
    );
}
const mapStateToProps=state=>{
    return state
}
const mapDispatchToProps={

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
