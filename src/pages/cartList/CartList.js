import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


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


import {createTheme,ThemeProvider} from '@mui/material/styles';

// import {} from '../../redux/actions/'
import '../../assets/style/cartStyle.css'


import {connect } from 'react-redux';


const CartList = ({cartReducer}) => {
    return (
        <section className='cartList'>
            <form action="" style={{display:'flex'}}>
                <List sx={{ width: '100%', maxWidth: '59%',display:'inline-block'}}>
                {
                    cartReducer.cartItemList.map((cartItem,i) => (
                        <React.Fragment>

                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        <ListItem
                            key={i}
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
                                    <img src={cartItem.image} alt="" />
                                </Box>

                                <Box>
                                    {
                                        cartItem.title
                                    }
                                </Box>
                           </Box>
                        
                            <Box className='itemCountActions'>
                                <IconButton aria-label="reduce">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="caption">
                                    999
                                </Typography>
                                <IconButton aria-label="increase">
                                    <AddIcon color="#ff0000"/>
                                </IconButton>
                                <IconButton className='itemDeleteIcon' aria-label="delete">
                                        <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                        
                    </React.Fragment>
                ))}
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
    
}

export default connect(mapStateToProps,mapDispatchToprops)(CartList);
