import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {createTheme,ThemeProvider} from '@mui/material/styles'


export default function RecipeReviewCard({productItem,addCartHandler}) {

  const productItemTheme=createTheme({
    componentns:{
      MuiPaper:{
        styleOverrides:{
          root:{
          }
        }
      },
      MuiIconButton:{
        styleOverrides:{
          root:{
          }
        }
      },
    }
  })
  // console.log(productItem)
  return (  
    <ThemeProvider theme={productItemTheme}>

        <Box
          className="productItem"
        >

        <Paper
          sx={{
              padding:'5px 10px',
              backgroundColor:'transparent',
              boxShadow:'none'
          }}
        >
          <Card sx={{ maxWidth: 345,backgroundColor:'#1f2122',border:'10px solid #292f33d9',}}>
            <CardMedia
              component="img"
              height="194"
              image={`${productItem.image}`}
              alt="Paella dish"
            />
              <CardContent>
                
                <Typography variant="body2" color="#ffff" sx={{fontSize:'18px',marginBottom:'10px'}}>
                  {
                    productItem.title
                  }
                </Typography>
                <Divider></Divider>
                <Typography variant="body2" color="#ffff">
                  {
                    productItem.description
                  }
                </Typography>
              </CardContent>
              
              <CardActions  sx={{textAlign:"right"}}>
                <IconButton 
                  className='' 
                  aria-label="add to favorites"
                  onClick={(e)=>addCartHandler(e,productItem)}
                >
                    <ShoppingBasketIcon />
                </IconButton>
              
                <IconButton 
                  className='active' 
                  aria-label="add to favorites"
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                  <VisibilityIcon/>
              </IconButton>
              </CardActions>
          </Card>
        </Paper>
      </Box>

    </ThemeProvider>
  );
}