import React,{useEffect,useState} from 'react';

import {
    Box,
    Grid
}  from '@mui/material';
import ProductItem from './ProductItem';

import {createTheme,ThemeProvider} from '@mui/material/styles';

import {connect} from 'react-redux'

const CategoryFilter = ({gallery,addCartHandler,productReducer}) => {
    const [galleryItems,setGalleryItem]= useState(null);
    const [categoryType,setCategoryType]=useState('all')
    

    const categoryTheme= createTheme({
        components:{
            MuiBox:{
                styleOverrides:{
                    root:{
                        
                    }
                }
            }
        }
    })

    // console.log(productReducer)
    useEffect(()=>{
        setGalleryItem(gallery)
    },[])

    const CategoryTabItem =({tabText,tabIndex,...otherProps})=>{
        return (
            <li 
                // hidden ={true}
                className={tabText === categoryType ? 'active':''}
                data-tabindex={tabIndex}  {...otherProps}>
                {
                    tabText[0].toUpperCase()+tabText.slice(1)
                }
            </li>
        )
    }

    const showGalleryItemsHandler=(e,categoryTypeParam)=>{
        setCategoryType(categoryTypeParam)
    }


    

    return (
        <ThemeProvider theme={categoryTheme}>
            
            <Box
                className="product-list"
                sx={{
                    padding:'50px 0px'
                }}
            >
                <ul className="categoryTabList">
                    <li className={categoryType==='all'?'active':''} onClick={(e)=>showGalleryItemsHandler(e,'all')}>
                        All
                    </li>
                    {
                        productReducer.categories !== null ?
                            productReducer.categories.map((tabItem,i)=>(
                                <CategoryTabItem 
                                    key={i} 
                                    tabIndex={i}
                                    tabText={tabItem}
                                    onClick={(e)=>showGalleryItemsHandler(e,tabItem)}
                                />
                            ))
                        :''
                    }
                </ul>
                <Grid container
                >
                    {
                        productReducer.products !== null ?
                        productReducer.products.map((prod,i)=>(
                            <Grid 
                                key={i}
                                xs={3}
                                item
                                hidden={ 

                                    categoryType !== 'all' && categoryType !== prod.category 
                                
                                }
                                className="productI"
                            >
                                <ProductItem
                                    productItem={prod}
                                    addCartHandler={addCartHandler}

                                />
                            </Grid>
                        ))
                        :''
                    }
                </Grid>
                        
            </Box>
        </ThemeProvider>
    );
}

const mapStateToProps=state=>{
    return state
}

const mapDispatchToProps={

}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryFilter);
