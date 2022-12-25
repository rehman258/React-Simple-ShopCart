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
        // if(cartReducer.cartList)
       
        if(cartReducer.cartList){
            setFullCost(calcFullPrice())
        }
    },[cartReducer])

    return (
        <section className='cartList'>
            <form action="" style={{display:'flex'}}>
                <List sx={{ width: '100%', maxWidth: '59%',display:'inline-block'}}>
                {
                    cartReducer.cartList !== null ?
                        cartReducer.cartList.map((cartItem,i) => (
                            <React.Fragment key={i}>
                                <CartListItem cartitem={cartItem} updateCartItemQuantity={updateCartItemQuantity} removeHandler={cartItemRemoveHandler} />
                            </React.Fragment>
                        ))
                        :''
                    }
                </List>
                <Box 
                    sx={{
                        width: '100%', 
                        maxWidth: '40%',
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
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth   
                                    label="Last Name"
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Card Number"
                                    variant='outlined'
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
                
            </form>

        </section>
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
