import React,{useEffect,useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import defaultTheme from '../../Theme/Theme';
import {styled,createTheme,ThemeProvider} from '@mui/material/styles';
import ThemeRoot from '../../Theme/ResponsiveTheme';
import {
    Box,
    Grid,
    Typography
} from '@mui/material';

import {connect} from 'react-redux';


import BannerSlider from '../../components/BannerSlider';
import '../../assets/style/home.css';
import Logo from '../../assets/img/shop-logo.png'


import PreviewSlider from '../../components/PreviewSlider';
import CategoryFilter from '../../components/CategoryFilter';


import {loadProducts} from '../../services/services';
import {loadProductsAction,updateProducInCarttAction} from '../../redux/actions/ProductAction';

import {addToCartAction} from '../../redux/actions/CartActions';
import Storage from '../../Storage/Storage';

const Root = styled('div')(({theme})=>({
    '& .aboutContent':{
        [theme.breakpoints.down('md')]:{
            padding:'50px 75px !important',
        },
        [theme.breakpoints.down('sm')]:{
            padding:'50px 35px !important',
        }
    },
    '& .aboutWrapper':{
        [theme.breakpoints.down('md')]:{
            justifyContent:'center'
        }
    }
}))



const Home = ({homeReducer,productReducer,cartReducer,loadProductsAction,addToCartAction,updateProducInCarttAction}) => {
    

    const homeTheme = createTheme({
        components:{
            MuiTypography:{
                styleOverrides:{
                    root:{
                        '&.aboutContent':{
                            color:'white',
                            padding:'50px 100px'
                        },
                        // '&.section-header':{
                        //     width:'100%',
                        //     fontSize:'56px',
                        //     textAlign:'center',
                        //     margin:'50px 0px',
                        //     marginTop:'105px',
                        //     color:'#fff',
                        //     "& span":{
                        //         borderRadius: '22px',
                        //         borderTop: '8px solid #80878cd9',
                        //         borderBottom: '8px solid #80878cd9',
                        //         padding: '15px 45px',
                        //     }
                        // }
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

    
    useEffect(()=>{
        (async()=>{
            loadProductsAction(await loadProducts())
        })()
    },[])


    const addCartHandler =(e,item)=>{

            if(Storage._checkStorage(item.id)){
                toast.info("Product's already added to cart",{
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }else{
                toast.success(' Product added to cart',{
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
                addToCartAction({...item,isInCart:true,});
                updateProducInCarttAction({...item,isInCart:true,});
                Storage._addStorage({...item,isInCart:true});

            }
       
    }

    

    return (
        <section>
            <ThemeProvider theme={homeTheme}>
                <ToastContainer/>
                <ThemeRoot>
                    <Root>
                        <Box className="banner-slider">
                            <BannerSlider
                                sliderList={homeReducer.sliderList}
                            />
                        </Box>

                        <div className="line-effect"></div>
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
                            <Grid 
                                container
                                className='aboutWrapper'
                            >
                                <Grid 
                                    item 
                                    xs={12}
                                    md={6}
                                    xl={6}
                                    sm={12}
                                >
                                    <Typography className='aboutContent'> 
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae non alias temporibus in deserunt laudantium maiores ex voluptatum vel? Facere rerum, nisi doloremque repudiandae odit culpa totam sit! Aspernatur, consequuntur?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae non alias temporibus in deserunt laudantium maiores ex voluptatum vel? Facere rerum, nisi doloremque repudiandae odit culpa totam sit! Aspernatur, consequuntur?
                                    </Typography>
                                </Grid>
                                <Grid 
                                    item
                                    xs={12}
                                    md={6}
                                    xl={6}
                                    sm={12}
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
                        <div className="line-effect"></div>
                        <Typography className="section-header">
                            <span>
                            Products
                            </span>
                        </Typography>
                        {
                            homeReducer.products !== null ?

                            <CategoryFilter
                                addCartHandler={addCartHandler}
                                productPack={productReducer}
                            />:''
                        }
                        <div className="line-effect"></div>
                        <Typography className="section-header">
                            <span>
                            Preview
                            </span>
                        </Typography>
                        <Box
                            className="preview-slider"
                        >
                            <PreviewSlider addCartHandler={addCartHandler} sliderList={productReducer.products.list}/>
                        </Box>
                    </Root>
                </ThemeRoot>
                
            </ThemeProvider>
        </section>
    );
}
const mapStateToProps=state=>{
    return state
}
const mapDispatchToProps={
    loadProductsAction,
    addToCartAction,
    updateProducInCarttAction,
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
