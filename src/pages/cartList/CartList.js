import React,{useState,useEffect} from 'react';


import {
    Box,
    List,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,

}from '@mui/material';


import {createTheme,ThemeProvider} from '@mui/material/styles';

import '../../assets/style/cartStyle.css'

import {removeFromCartAction,updateCartItem} from '../../redux/actions/CartActions';
import Storage from '../../Storage/Storage';

import {connect} from 'react-redux';


import CartListItem from '../../components/CartListItem';

const CartList = ({cartReducer,removeFromCartAction,updateCartItem}) => {
    const [cartList,setCartList] = useState([]);
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
    }



    useEffect(()=>{
        setCartList(cartReducer.cartList)
    },[])

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
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Products
                                    </TableCell>
                                    <TableCell>
                                        Amount
                                    </TableCell>
                                    <TableCell>
                                        Price
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                    <Box
                        className="cartListPayment"
                        
                    >
                        
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Shoes
                                        </TableCell>
                                        <TableCell>
                                            999
                                        </TableCell>
                                        <TableCell>
                                            9999
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                        
                    <Box
                        sx={{
                            marginTop:'30px',
                        }}
                    >
                        <Button 
                            sx={{
                                display:'block',
                                width:'100%'
                            }}
                            variant="contained"
                        >
                            Payment
                        </Button>
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
