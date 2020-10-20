import React, { Children } from 'react'
import { useState } from 'react';

export const CartContext = React.createContext([]);

function CartProvider(props) {
    const [cart, setCart] = useState([]);

    function getCartTotal() { 
        if (cart.length > 0){
            return cart.reduce((accumulator, currentValue) => {return accumulator + (currentValue.product.price * currentValue.quantity)}, 0);
        }
        else return 0;     
    }

    function getCartGroupedByProduct(key) { 
        return cart.reduce(function (rv, x) { 
            let el = rv.find((r) => r && r.product === x.product); 
            if (el) { 
              el.quantity += x.quantity; 
            } else { 
              rv.push({ product: x.product, quantity: x.quantity }); } 
            return rv; 
          }, []); 
    };

    function getCartItems(){
        return cart.map(x => ({ id: x.product.id, name: x.product.name, price: x.product.price}));
    }


    return (
        <CartContext.Provider value = {[cart, setCart, getCartGroupedByProduct, getCartTotal, getCartItems]}>  
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;


