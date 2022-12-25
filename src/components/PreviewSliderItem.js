import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// import Button from '@mui/material/Button';

import{Link} from 'react-router-dom';

// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {createTheme,ThemeProvider} from '@mui/material/styles'


const PreviewSliderItem = ({sliderItem,addCartHandler}) =>{

  const productItemTheme=createTheme({
    componentns:{
      MuiPaper:{
        styleOverrides:{
          root:{
            backgrondColor:'red !important'
          }
        }
      }
    }
  })

  return (  
    <ThemeProvider theme={productItemTheme}>

      <Paper
        sx={{
          // padding:'5px 10px',
          backgroundColor:'transparent',
          boxShadow:'none'
        }}
            
      >
        <Card className="previewCard" sx={{ maxWidth: 345,backgroundColor:'#1f2122',border:'10px solid #292f33d9',position:'relative'}}>
          <CardMedia
            component="img"
            height="194"
            image={`${sliderItem.image}`}
            alt="Paella dish"
          />
         <div className='cardOvarley'>
            <div>
              {/* <div className="favorite active" title="Add with list">
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              </div> */}
              <div className='inCart ' title="Add cart">
                <IconButton
                  className={sliderItem.isInCart ===true ? 'active':''}
                  onClick={(e)=>addCartHandler(e,sliderItem)}
                >
                  <ShoppingBasketIcon />
                </IconButton>
              </div>
            </div>
            <div className='overView ' title="View details">
              <Link to={`/details/${sliderItem.id}`}>
                <IconButton>
                  <VisibilityIcon/>
                </IconButton>
              </Link>
            </div>
         </div> 
        </Card>
      </Paper>
    </ThemeProvider>
  );
}
export default PreviewSliderItem;