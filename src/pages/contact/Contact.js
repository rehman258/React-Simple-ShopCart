import React from 'react';
import {
    Box,
    Typography,
    TextField,
    TextareaAutosize,
    Button,
    Grid,
}from '@mui/material';

import {createTheme,ThemeProvider,styled} from '@mui/material/styles';
import ThemeRoot from '../../Theme/ResponsiveTheme';


const Root = styled('div')(({ theme }) => ({

    

    
    // '& .contact-name':{
    //     [theme.breakpoints.down('md')]: {
    //         marginRight:'0px',
    //     },
    // },
    // '& .contact-number':{
    //     [theme.breakpoints.down('md')]: {
    //         marginLeft:'0px',
    //     },
    // },    
      

    [theme.breakpoints.up('md')]: {
        // backgroundColor: 'blue',
    },
    [theme.breakpoints.up('lg')]: {
        // backgroundColor: 'green',
    },  
    


}));





const Contact = () => {

    const contactTheme = createTheme({
        components:{
            MuiTextField:{
                styleOverrides:{
                    root:{
                        // margin:'0px 10px ',
                        // marginLeft:'15px',
                        // marginRight:'15px',
                        marginBottom:'25px',
                        minWidth:'auto',
                        // maxWidth:'630px',
                        // width:'300px',
                        '& input':{
                            color:'white',
                        },
                        '& label':{ 
                            color:'#fff'
                        },
                        '& label.Mui-focused':{ 
                            color:'#30abb0'
                        },
                        // backgroundColor:'red',
                        '& .MuiInputBase-root':{
                            '&:hover':{
                                '& .MuiOutlinedInput-notchedOutline':{
                                    borderColor:'#30abb0',

                                }
                            },
                            '&.Mui-focused':{
                                '& .MuiOutlinedInput-notchedOutline':{
                                    borderColor:'#30abb0',

                                }
                            },
                            
                            '& fieldset':{
                                borderRadius:'8px',
                                borderColor:'#30abb0',
                            },
                        },
                    }
                }
            },
            MuiButton:{
                styleOverrides:{
                    root:{
                        padding:'5px 40px',
                        // margin:'0px 15px',
                        borderRadius:'8px',
                    }
                }
            }
        },
        palette:{

        }
    })

    return (
        <ThemeProvider theme={contactTheme}>
            <ThemeRoot>
            <Root>
            <section>
                <Typography className="section-header">
                    <span>
                        Contact us
                    </span>
                </Typography>
                <form action="">
                    <Box
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            margin:'0px auto',
                            padding:'0px 25px',
                            marginTop:'95px',
                            flexDirection:'column',
                            alignItems:'center',
                            // backgroundColor:'red',
                            maxWidth:'600px',
                            width:'100%',
                            boxSizing:'border-box'
                        }}
                    >
                        <Grid
                            container
                            
                        >
                            <Grid
                                item
                                md={6}
                                sm={12}
                                xs={12}
                                sx={{
                                    // marginRight:'10px',
                                    paddingRight:'10px',
                                }}
                                className='px-0-md'
                            >
                                <TextField
                                    variant='outlined'
                                    className='contact-name'
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        // marginLeft:'0px',
                                    }}
                                />
                                
                            </Grid>
                            <Grid
                                item
                                md={6}
                                sm={12}
                                xs={12}
                                sx={{
                                    paddingLeft:'10px',
                                }}
                                className='px-0-md'
                            >
                                <TextField
                                    className='contact-number'
                                    variant='outlined'
                                    type="number"
                                    label="Number"
                                    fullWidth
                                    sx={{
                                        // marginRight:'0px',
                                    }}
                                />
                                
                            </Grid>
                            <Grid
                                item
                                md={12}
                                sm={12}
                                xs={12}
                            >
                                <TextField
                                    variant='outlined'
                                    label="E-mail"
                                    type="email"
                                    fullWidth
                                    sx={{
                                        // marginLeft:'10px',
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                sm={12}
                                xs={12}
                            >
                                <TextField
                                    variant='outlined'
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        // marginLeft:'10px',
                                        // marginLeft:'10px',
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                xl={12}
                                sx={{
                                    textAlign:'end'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor:'#2d7579',
                                        '&:hover':{
                                            backgroundColor:'#253f40'
                                        }
                                    }}
                                >
                                    Send
                                </Button>
                            </Grid>
                            
                        </Grid>
                    </Box>
                </form>
            </section>
             </Root>
             </ThemeRoot>
        </ThemeProvider>
    );
}

export default Contact;
