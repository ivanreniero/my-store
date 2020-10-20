import React, { useContext, useEffect, useState} from 'react';
import { CartContext } from '../../context/cartContext';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {getFirestore} from '../../firebase/index';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
    link: {
      margin: theme.spacing(1, 1.5),
    },
    button: {
        margin: theme.spacing(2, 2),
    }
  }));

  function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, open, orderId } = props;

    const handleClose = () => {
        onClose();
    };
 
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Success!!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Your order id is: {orderId}
          </DialogContentText>
        </DialogContent>    
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    orderId: PropTypes.string.isRequired,
  };



function Cart() {
    const classes = useStyles();
    const [cart, setCart, getCartGroupedByProduct, getCartTotal, getCartItems] = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const succesfullShop = false;
    const [open, setOpen] = React.useState(false);
    
    const addOrder = () => {
        const db = getFirestore();
        const ordersCollection = db.collection("orders");
        const newOrder = {
            buyer: {
                name: "Hardcoded name",
                phone: "Hardcoded phone",
                email: "Hardcoded email",
            },
            items: getCartItems(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: getCartTotal()
        };
        ordersCollection.add(newOrder).then(({id}) => {
            setOrderId(id);
            handleClickOpen();
        }).catch((error) => {
            alert("Error finalizing purchase");
        });
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    if (cart.length > 0) {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <hr />
                <h3>Products in cart</h3>
                <ul>{getCartGroupedByProduct().map(cartItem => <li key={cartItem.product.id}> Product:{cartItem.product.name} Quantity: {cartItem.quantity}  Total: ${cartItem.quantity * cartItem.product.price}  </li>)}</ul>
                <Button variant="contained" color="primary" className={classes.button} onClick={addOrder}>
                    FINALIZE PURCHASE
                </Button> 
                <SimpleDialog open={open} onClose={handleClose} orderId={orderId}/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <hr />
                <h3>Cart is empty</h3>  
                <Link variant="button" color="textPrimary" className={classes.link} to="/products">Go to products</Link>      
            </div>
        )
    }
}

export default Cart
