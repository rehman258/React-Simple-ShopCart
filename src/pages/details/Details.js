import React,{useEffect,useState} from 'react';
import{ useParams} from 'react-router-dom';
import { loadSingleProduct } from '../../services/services';

import { 
    Typography,
    Grid,
    Box,
} from '@mui/material';


const Details = () => {
    const {id} = useParams()
    const [showingProduct,setShowingProduct] = useState(null);
    useEffect(()=>{
        (async()=>{
            setShowingProduct(await loadSingleProduct(id))
        })()
    },[])
    return (
        <section>
            <Typography className="section-header">
                    <span>
                        About Product
                    </span>
            </Typography>
            <Box>
                <Grid container>
                    <Grid item xs={6}>
                        <img src={showingProduct.image} alt="" />
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Box>
        </section>
    );
}

export default Details;
