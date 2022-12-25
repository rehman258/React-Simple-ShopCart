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

import {connect} from 'react-redux';

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




const PreviewSlider = ({addCartHandler,productReducer}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        arrows:true,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 2,
                // initialSlide: 2
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     // slidesToScroll: 1
            //   }
            // }
          ],


        // autoplaySpeed: 2000,
        nextArrow: <BannerNextArrow/>,
        prevArrow: <BannerPrevArrow/>
      };
    //   console.log(sliderList)
    return (
            <Slider {...settings} style={{backgroundColor:'#fff'}}>
                {   
                    productReducer.products !== null ?
                        productReducer.products.map((sliderItem,i)=>(
                            <div key={i} className="preview-sliderItem">
                                <PreviewSliderItem addCartHandler={addCartHandler} sliderItem={sliderItem}/>
                            </div>
                        ))
                    :''
                }
            </Slider>
    );
}

const mapStateToProps=state=>{
    return state
}

const mapDispatchToProps={

}

export default connect(mapStateToProps,mapDispatchToProps)(PreviewSlider);
