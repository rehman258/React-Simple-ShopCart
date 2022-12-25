import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  Box, 
  Typography,
} from '@mui/material';
import defaultTheme from '../Theme/Theme';
import {createTheme,ThemeProvider} from '@mui/material/styles';



import {BrowserRouter} from 'react-router-dom';

export default function FullLayout({children}) {
  const layoutTheme = createTheme({
    components:{
      MuiBox:{
        styleOverrides:{
          root:{
            backgroundColor:'red'
          }
        }
      },
      ...defaultTheme.components,
    }
  })
  return (
    <BrowserRouter>
      <ThemeProvider theme={layoutTheme}>
            <Header/>
              {
                children
              }
            <Footer/>
      </ThemeProvider>
        </BrowserRouter>
  )
}
