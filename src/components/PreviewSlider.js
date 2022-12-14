import React from 'react';
import{
    Box
}from '@mui/material';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import PreviewSliderItem from './PreviewSliderItem';



const BannerNextArrow = (props)=>{
    const {className,style,onClick} = props;
    return (
            <ArrowForwardIosIcon
                className={className}
                style={{...style,}}
                onClick={onClick}
            />
    )
}
const BannerPrevArrow = (props)=>{
    const {className,style,onClick} = props;
    return (
            <ArrowBackIosNewIcon
                className={className}
                style={{...style,}}
                onClick={onClick}
            />
    )
}




const PreviewSlider = ({sliderList=[]}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        arrows:true,
        slidesToScroll: 2,
        autoplay: true,
        // autoplaySpeed: 2000,
        nextArrow: <BannerNextArrow/>,
        prevArrow: <BannerPrevArrow/>
      };
    //   console.log(sliderList)
    return (
            <Slider {...settings} style={{backgroundColor:'#fff'}}>
                {
                    sliderList.map((sliderItem,i)=>(
                        <div key={i} className="preview-sliderItem">
                            <PreviewSliderItem sliderItem={sliderItem}/>
                        </div>
                    ))
                }
            </Slider>
    );
}

export default PreviewSlider;
