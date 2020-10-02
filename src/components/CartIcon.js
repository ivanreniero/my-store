import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function CartIcon(){
    return(
        <IconButton color="primary" aria-label="add to shopping cart">
            <ShoppingCartIcon />
        </IconButton>
    )
}

export default CartIcon;