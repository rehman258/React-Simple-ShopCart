import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';


import {createTheme,ThemeProvider} from '@mui/material/styles'


export default function RecipeReviewCard({imgUrl,title,desc}) {

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
          padding:'5px 10px',
          backgroundColor:'transparent',
          boxShadow:'none'
        }}
      >
        <Card sx={{ maxWidth: 345,backgroundColor:'#1f2122',border:'10px solid #292f33d9',}}>
          <CardMedia
            component="img"
            height="194"
            image={`${imgUrl}`}
            alt="Paella dish"
          />
          <CardContent>
            
            <Typography variant="body2" color="#ffff" sx={{fontSize:'18px',marginBottom:'10px'}}>
              {
                title
              }
            </Typography>
            <Divider></Divider>
            <Typography variant="body2" color="#ffff">
              {
                desc
              }
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{textAlign:"right"}}>
            <IconButton aria-label="add to favorites" >
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
    </ThemeProvider>
  );
}