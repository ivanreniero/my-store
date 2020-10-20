import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {getFirestore} from '../../firebase/index';

const useStyles = makeStyles(theme => ({
    center : {
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }    
  }))

function ProductList(props) {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(()=>{
        const db = getFirestore();
        const productsCollection = db.collection("products");
        if (props.categoryId){
            const filteredProductsCollection = productsCollection.where('categoryId','==',props.categoryId);
            filteredProductsCollection.get().then((querySnapshot) => {
                setProducts(querySnapshot.docs.map(doc=> { return ({id:doc.id, ...doc.data()})}));    
            }).catch((error) => {
                alert("Error loading products");
            }).finally(() => {
                setLoading(false);
            });
        } else {
            productsCollection.get().then((querySnapshot) => {
                setProducts(querySnapshot.docs.map(doc=> { return ({id:doc.id, ...doc.data()})}));    
            }).catch((error) => {
                alert("Error loading products");
            }).finally(() => {
                setLoading(false);
            });
        }
       
    },[props.categoryId])

    if (loading){
        return (
            <Box className={classes.center}>
                <CircularProgress />
            </Box>
        )
    } else {
        return (
            <div>
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
            </div>
        )
    }
}

export default ProductList;
