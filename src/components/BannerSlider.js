import React from 'react';
import{
    Box
}from '@mui/material';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import FirstImg from '../assets/img/sliderImgs/sliderImg4.jpg';
import TwoImg from '../assets/img/sliderImgs/sliderImg5.jpg';
import ThreeImg from '../assets/img/sliderImgs/sliderImg3.jpg';


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



const tempImgList = [FirstImg,TwoImg,ThreeImg];

const BannerSlider = ({sliderList=[]}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <BannerNextArrow/>,
        prevArrow: <BannerPrevArrow/>
      };
    return (
            <Slider {...settings} style={{backgroundColor:'#fff'}}>
                {
                    sliderList.map((sliderItem,i)=>(
                        <div key={i} className="banner-sliderItem">
                            <img src={tempImgList[i]} alt="" />
                            <div className="ovarley"></div>
                            <div className='bannerTextArea'>
                                <h3>
                                    {
                                        sliderItem.title
                                    }
                                </h3>
                                <p>
                                    {
                                        sliderItem.description
                                    }
                                </p>  
                            </div>
                        </div>
                    ))
                }
            </Slider>
    );
}

export default BannerSlider;
