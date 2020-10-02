import React, { useState, useEffect } from 'react'
import ProductsAPI from '../../api/ProductsAPI';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    center : {
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }    
  }))

function ProductList() {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        ProductsAPI.getProducts()
        .then(
            (result) => {
              setProducts(result);
              setLoading(false);
            },
            (error) => {
              alert("Error loading products")
            }
        )
    },[])

    if (loading){
        return (
            <Box className={classes.center}>
                <CircularProgress />
            </Box>
        )
    } else {
        return (
            <Grid container spacing={3}>
                {products.map(product => 
                    <Grid key={product.id} item xs={4}>
                        <ProductCard 
                            productId={product.id}
                            productName={product.name} 
                            productDescription={product.description} 
                            productMaxQuantity={product.maxQuantity}
                            productPrice={product.price}
                            loading={loading}/>
                    </Grid>
                )}
            </Grid>
        )
    }
}

export default ProductList
