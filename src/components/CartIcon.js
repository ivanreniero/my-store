import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { TotalContext } from '../context/totalContext';

function CartIcon(){
    const [total] = useContext(TotalContext);

    return(
        <IconButton color="primary" aria-label="add to shopping cart">
            <Badge badgeContent={total} color="primary">     
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default CartIcon;