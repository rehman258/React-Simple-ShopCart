import React from 'react';
import {
    Box,
    Typography,
    TextField,
    TextareaAutosize,
    Button,
    Grid,
}from '@mui/material';




import {createTheme,ThemeProvider} from '@mui/material/styles';
import { maxWidth } from '@mui/system';


const Contact = () => {

    const contactTheme = createTheme({
        components:{
            MuiTextField:{
                styleOverrides:{
                    root:{
                        // margin:'0px 15px',
                        marginBottom:'25px',
                        minWidth:'300px',
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
                        margin:'0px 15px',
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
                            marginTop:'95px',
                            flexDirection:'column',
                            alignItems:'center',
                            // backgroundColor:'red',
                            width:'600px',
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
                            >
                                <TextField
                                    variant='outlined'
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        margin:'12.5px 10px',
                                        
                                    }}
                                />
                                
                            </Grid>
                            <Grid
                                item
                                md={6}
                                sm={12}
                            >
                                <TextField
                                    variant='outlined'
                                    type="number"
                                    label="Number"
                                    fullWidth
                                    sx={{
                                        margin:'12.5px 10px',
                                        
                                    }}
                                />
                                
                            </Grid>
                            <Grid
                                item
                                md={12}
                                sm={12}
                            >
                                <TextField
                                    variant='outlined'
                                    label="E-mail"
                                    type="email"
                                    fullWidth
                                    sx={{
                                        margin:'12.5px 10px'
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={12}
                                sm={12}
                            >
                                <TextField
                                    variant='outlined'
                                    label="Description"
                                    sx={{
                                        margin:'12.5px 10px'
                                    }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                item
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
        </ThemeProvider>
    );
}

export default Contact;
