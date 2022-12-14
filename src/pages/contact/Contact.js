import React from 'react';
import {
    Box,
    Typography,
    TextField,
    TextareaAutosize,
    Button
}from '@mui/material';




import {createTheme,ThemeProvider} from '@mui/material/styles';
import { maxWidth } from '@mui/system';


const Contact = () => {

    const contactTheme = createTheme({
        components:{
            MuiTextField:{
                styleOverrides:{
                    root:{
                        margin:'0px 15px',
                        marginBottom:'25px',
                        minWidth:'300px',
                        maxWidth:'630px',
                        width:'300px',
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
                            // width:'580px',
                            boxSizing:'border-box'
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    width:'100%'
                                }}
                            >
                                <TextField
                                    variant='outlined'
                                    label="Name"
                                    type="text"
                                    sx={{
                                    }}
                                />
                                <TextField
                                    variant='outlined'
                                    label="E-mail"
                                    type="email"
                                    sx={{
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    width:'100%'
                                }}
                            >
                                <TextField
                                    variant='outlined'
                                    type="number"
                                    label="Number"
                                />
                            </Box>
                            <Box
                                sx={{
                                    width:'100%'
                                }}
                            >
                                <TextField
                                    variant='outlined'
                                    label="Description"
                                    sx={{
                                        width:'100%'
                                    }}
                                    fullWidth
                                />
                            </Box>
                            <Box
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
                            </Box>
                            
                        </Box>
                    </Box>
                </form>
            </section>
        </ThemeProvider>
    );
}

export default Contact;
