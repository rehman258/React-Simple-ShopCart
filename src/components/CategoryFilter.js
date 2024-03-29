import React,{useEffect,useState} from 'react';

import {
    Box,
    Grid
}  from '@mui/material';
import ProductItem from './ProductItem';

import {createTheme,ThemeProvider} from '@mui/material/styles';

import {connect} from 'react-redux'

const CategoryFilter = ({addCartHandler,productPack,productReducer}) => {
    // console.log()
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
        // console.log(productReducer)
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
                        productReducer.products.categories !== null ?
                        productReducer.products.categories.map((tabItem,i)=>(
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
                        productReducer.products.list !== null ?
                        productReducer.products.list.map((prod,i)=>(
                            <Grid 
                                key={i}
                                xl={2}
                                md={3}
                                sm={4}
                                xs={12}
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
