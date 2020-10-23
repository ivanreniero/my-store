import React, { useState, useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ItemCount from '../Counter/ItemCount';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Icon from '@material-ui/core/Icon';
import { CartContext } from '../../context/cartContext';
import { TotalContext } from '../../context/totalContext';


const useStyles = makeStyles(theme => ({
    center : {
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '200px',
        width: '250px'
    }  
}))

function ProductDetail(props) {
    const classes = useStyles(); 
    const [counter, setCounter] = useState(0);
    const [cart, setCart] = useContext(CartContext);
    const [total, setTotal] = useContext(TotalContext);

    const addToCart = () => {
        setCart(currentCart => [...currentCart, { product: props.product, quantity: counter}]);      
        setTotal(currentTotal => currentTotal + counter); 
    }

    const discount = () => {
        if (counter > 0){
            setCounter(counter - 1);
        }
    }

    const add = () => {
        if (counter < props.product.stock){
            setCounter(counter + 1);
        }
    }

    if (props.loading){
        return (
            <Box className={classes.center}>
                <CircularProgress />
            </Box>
        )
    } else {
        return (
        <div>
            <h1>Detalles del producto</h1>       
            <hr />
            <h2>{props.product.name}</h2>
            <img className={classes.image} src={props.product.img} alt="Imagen del producto"></img>  
            <p>{props.product.description}</p>
            <p>$ {props.product.price}</p>
            <ItemCount counter={counter} discount={discount} add={add} />
            <Button
                variant="contained"
                color="primary"
                onClick={addToCart}
                endIcon={<Icon aria-label="add to cart">
                            <AddShoppingCartIcon />
                        </Icon>}
                >
                AGREGAR AL CARRITO {counter} PRODUCTOS
            </Button> 
        </div>
        )
    }    
}

export default ProductDetail
