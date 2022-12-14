import React from 'react';
import {
    Box,
}from '@mui/material';

import {createTheme,ThemeProvider} from '@mui/material/styles';


const Contact = () => {

    const contactTheme = createTheme({
        components:{

        },
        palette:{
            
        }
    })

    return (
        <ThemeProvider thene={contactTheme}>
            <section>
                contact
            </section>
        </ThemeProvider>
    );
}

export default Contact;
