import React, { Children } from 'react'
import { useState } from 'react';

export const CartContext = React.createContext([]);

function CartProvider(props) {
    const [cart, setCart] = useState([]);

    function getTotal() { 
        if (cart.size > 0){
            return cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity);
        }
        else return 0;     
    }

    return (
        <CartContext.Provider value = {[cart, setCart, getTotal]}>  
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;


