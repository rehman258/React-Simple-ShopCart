import React,{useState,useEffect} from 'react';


import {
    Box,
    List,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    Grid,
    TableCell,
    Button,
    TextField,
    Typography,

}from '@mui/material';


import {createTheme,ThemeProvider} from '@mui/material/styles';

import '../../assets/style/cartStyle.css'

import {removeFromCartAction,updateCartItem} from '../../redux/actions/CartActions';
import Storage from '../../Storage/Storage';

import {connect} from 'react-redux';


import CartListItem from '../../components/CartListItem';

const CartList = ({cartReducer,removeFromCartAction,updateCartItem}) => {
    const [cartList,setCartList] = useState(null);
    const [fullCost,setFullCost] =useState(0);

    const cartListTheme = createTheme({
        components:{
            MuiTextField:{
                styleOverrides:{
                    root:{
                        marginBottom:'20px',
                        // height:'30px',
                        color:'#fff',
                        '& fieldset':{
                            borderRadius:'8px',
                            borderColor:'#30abb0',
                            fontSize:'12px'
                        },
                        '& input':{
                            color:'#fff',
                            fontSize:'12px'
                        },
                        '& .MuiFormLabel-root':{
                            color:'#fff',
                            fontSize:'12px'
                        }
                    }
                }
            }
        }
    })


    const cartItemRemoveHandler=(id)=>{
        removeFromCartAction(id)
        Storage._removeFromStore(id)
    }


    const updateCartItemQuantity=(actionType,item)=>{
        // console.log(actionType,item)


        if(actionType==='+'){
            item.quantity=item.quantity+1
            updateCartItem(item)
        }else if(actionType==='-'){
            if(item.quantity > 1){
                item.quantity=item.quantity-1
                updateCartItem(item)
            }
        }else if(actionType==='|'){
            item.quantity=1
            updateCartItem(item)
           
        }

        // if(cartList){
        //     let tempCost=0;
        //     cartList.forEach(cartItem => {
        //         tempCost += cartItem.price * cartItem.quantity
        //     });
        //     setFullCost(tempCost)
        // }
        // setFullCost(calcFullPrice())

    }

    const calcFullPrice=()=> {
        let finallyCost = 0;

            cartReducer.cartList.forEach(item=>{
                finallyCost+= item.price*item.quantity
            })        
        return finallyCost
    }


    useEffect(()=>{
        setCartList(cartReducer.cartList)
       
        if(cartReducer.cartList){
            setFullCost(calcFullPrice())
        }
        console.log(cartList)
    },[cartReducer])

    return (
        <ThemeProvider theme={cartListTheme}>

            <section className='cartList'>
                <form action="" style={{display:'flex'}}>
                    <Grid container>
                        <Grid item xl={8} md={8} sm={12}>
                            <List 
                                sx={{ 
                                    width: '100%', 
                                    // maxWidth: '59%',
                                    display:'inline-block'
                                }}
                            >
                                {
                                    cartReducer.cartList !== null ?
                                        cartReducer.cartList.map((cartItem,i) => (
                                                <React.Fragment key={i}>
                                                    <CartListItem cartitem={cartItem} updateCartItemQuantity={updateCartItemQuantity} removeHandler={cartItemRemoveHandler} />
                                                </React.Fragment>
                                            ))
                                        :
                                        <Typography
                                            sx={{
                                                fontSize:'18px',
                                                textAlign:'center'
                                            }}
                                            >
                                            There is not added product in Cart yet.
                                        </Typography>
                                }
                            
                            </List>
                        </Grid>
                        <Grid item xl={4} md={4} sm={12}>

                            <Box 
                                sx={{
                                    width: '100%', 
                                    // maxWidth: '40%',
                                }}
                                className="cartListPaymentTable"
                            >
                                <Box
                                    className="cartListPayment"
                                    
                                >

                                </Box>
                                    
                                <Box
                                    sx={{
                                        marginTop:'30px',
                                        padding:'0px 15px'
                                    }}
                                >
                                    
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography
                                                sx={{
                                                    marginBottom:'15px'
                                                }}
                                            >
                                                <i> Full cost is: 
                                                    <b>
                                                        {
                                                            cartList !== null ?
                                                            fullCost.toFixed(2)
                                                            :''
                                                        }
                                                    </b>
                                                </i> 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth   
                                                label="First Name"
                                                variant='outlined'
                                                sx={{
                                                    marginRight:'10px'
                                                }}
                                                size={'small'}
                                                // rows={}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth   
                                                label="Last Name"
                                                variant='outlined'
                                                sx={{
                                                    marginLeft:'10px'
                                                }}
                                                size={'small'}
                                                />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                variant='outlined'
                                                size={'small'}
                                                />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Card Number"
                                                variant='outlined'
                                                size={'small'}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <Button 
                                            sx={{
                                                display:'block',
                                                width:'100%'
                                            }}
                                            variant="contained"
                                        >
                                            <b>Order</b>
                                        </Button>
                                        </Grid>
                                    </Grid>
                                    
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </form>

            </section>
        </ThemeProvider>
    );
}

const mapStateToProps=state=>{
    return state
}
const mapDispatchToprops={
    removeFromCartAction,
    updateCartItem
}

export default connect(mapStateToProps,mapDispatchToprops)(CartList);
