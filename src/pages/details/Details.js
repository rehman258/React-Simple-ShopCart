import React,{useEffect,useState} from 'react';
import{ useParams} from 'react-router-dom';
import { loadSingleProduct } from '../../services/services';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import { 
    Typography,
    Grid,
    Box,
    IconButton,
    Button,
} from '@mui/material';
import { fontSize } from '@mui/system';

import Storage from '../../Storage/Storage';

import { ToastContainer,toast } from 'react-toastify';

import { addToCartAction } from '../../redux/actions/CartActions';

import {connect} from 'react-redux';

const Details = ({addToCartAction}) => {
    const {id} = useParams()
    const [showingProduct,setShowingProduct] = useState(null);
    const [isInCart,setIsInCart] = useState(true);
    useEffect(()=>{
        (async()=>{
            setShowingProduct(await loadSingleProduct(id))
        })()
    },[])

    const addCartHandler=()=>{
        if(Storage._checkStorage(id)!==null){
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
            setIsInCart(true)
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
            addToCartAction({...showingProduct,isInCart:true});
            Storage._addStorage({...showingProduct,isInCart:true});
            setIsInCart(false)
        }
    }

    const detailsTheme = createTheme({
        components:{
            MuiButton:{
                styleOverrides:{
                    root:{
                        '&.addCartBtn':{
                            padding: '15px 20px',
                            borderColor: '#30abb0',
                            color: '#30abb0',
                            transition:'all .5s ease',
                        },
                        '&.addCartBtn.active':{
                            borderColor: '#30abb0',
                            backgroundColor:'#30abb036 !important',
                            color: '#fff',
                            '& svg':{
                                fill: '#30abb0',
                            }
                        }
                    }
                }
            },
            MuiTypography:{
                styleOverrides:{
                    root:{
                        '&.details-title':{
                            color:'#fff',
                            fontSize:'30px',
                            marginBottom:'10px',
                            '& span':{
                                borderBottom:'2px solid #fff',
                            }
                        },
                        '&.details-price':{
                            color:'#fff',
                            fontSize:'19px',
                            fontWeight:'bold',
                            fontStyle:'italic',
                            marginBottom:'50px'
                        },
                        '&.details-description-heading':{
                            color:'#fff',
                            fontSize:'19px',
                            fontWeight:'bold',
                            fontStyle:'italic',
                            marginBottom:'5px'
                        },
                        '&.details-description-content':{
                            color:'#fff',
                            marginBottom:'25px'
                        },
                    }
                }
            }
        }
    })

    return (
        <section>
            <ThemeProvider theme={detailsTheme}>
               
                <ToastContainer/>
                <Box
                    sx={{
                        paddingTop:'50px'
                    }}
                >
                    {
                        showingProduct !== null ?
                        <Grid container>
                            <Grid item xs={6}
                                sx={{
                                    display:'flex',
                                    justifyContent:'center'
                                }}
                            >
                                <img 
                                    src={showingProduct.image}
                                    style={{
                                        width:'450px'
                                    }}
                                    alt="" 
                                 />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                        className='details-title'
                                >
                                    <span>
                                        {
                                            showingProduct.title
                                        }
                                    </span>
                                </Typography>
                                <Typography
                                    className='details-price'
                                >
                                     

                                     Price: {
                                        showingProduct.price
                                    } $
                                </Typography>
                                <Box>
                                <Box
                                    className='details-description'
                                >
                                    <Typography
                                        className='details-description-heading'
                                    >
                                        Procuts Details
                                    </Typography>
                                    <Typography
                                        className='details-description-content'
                                    >
                                        {
                                            showingProduct.description
                                        }
                                    </Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    onClick={addCartHandler}
                                    className={isInCart?'addCartBtn active':'addCartBtn'}
                                >
                                    <span
                                        style={{
                                            marginRight:'10px'
                                        }}
                                    >
                                    Add to cart
                                    </span>
                                   
                                    <ShoppingBasketIcon />
                                </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        :''
                    }
                </Box>
            </ThemeProvider>
        </section>
    );
}

const mapStateToProps=state=>{
    return state
}

const mapDispatchToProps={
    addToCartAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
