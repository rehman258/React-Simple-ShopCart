import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


import {
    Box,
    List,
    ListItem,
    Typography,
    ListItemText,
    IconButton,



    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,

}from '@mui/material';


const CartListItem = ({removeHandler,updateCartItemQuantity,cartitem,cartitem:{image,title,price,id,quantity}}) => {
    return (
        <ListItem
                                    
            disableGutters
            sx={{
                display:'flex',
                justifyContent:'space-between',
                borderRadius:'8px'
            }}
                            
        >
                                    <Box
                                        sx={{
                                            display:'flex'
                                        }}
                                    >
                                        <Box
                                            className='cartItem-img'
                                            sx={{
                                                marginRight:'15px'
                                            }}
                                        >
                                            <img src={image} alt="" />
                                        </Box>

                                        <Box>
                                            <Box
                                                sx={{
                                                    maxWidth:'450px',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {
                                                    title
                                                }
                                            </Box>
                                            <br/>
                                            <Box
                                                sx={{
                                                    maxWidth:'450px',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    fontiSize:'9px',
                                                }}
                                            >
                                                {
                                                    price * quantity
                                                } $
                                            </Box>
                                        </Box>
                                </Box>
                                
                                    <Box className='itemCountActions'>
                                        <IconButton aria-label="reduce" onClick={(e)=>updateCartItemQuantity('-',cartitem)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography variant="caption">
                                            {
                                                quantity
                                            }
                                        </Typography>
                                        <IconButton aria-label="increase" onClick={(e)=>updateCartItemQuantity('+',cartitem)}>
                                            <AddIcon color="#ff0000"/>
                                        </IconButton>
                                        <IconButton aria-label="reset" onClick={(e)=>updateCartItemQuantity('|',cartitem)}>
                                            <RestartAltIcon color="#ff0000"/>
                                        </IconButton>
                                        <IconButton 
                                            className='itemDeleteIcon' 
                                            aria-label="delete"
                                            onClick={(e)=>{removeHandler(id)}}
                                        >
                                                <DeleteIcon />
                                        </IconButton>
                                    </Box>
    </ListItem>
    );
}

export default CartListItem;
