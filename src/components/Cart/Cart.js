import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

function Cart() {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
            <h1>Shopping Cart</h1>
            <hr />
            <h3>Products in cart</h3>
            <ul>{cart.map(cartItem => <li key={cartItem.product.id}> Product:{cartItem.product.name} Quantity: {cartItem.quantity}  Total: ${cartItem.quantity * cartItem.product.price}  </li>)}</ul>
        </div>
    )
}

export default Cart
