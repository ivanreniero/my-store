import React, { useContext, useState} from 'react';
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
import CartForm from './CartForm';

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
        <DialogTitle id="simple-dialog-title">Compra realizada con exito!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Su id de compra es: {orderId}
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

    const [form, setForm] = useState({nombre:"", apellido:"", telefono: "",email: "", repeatedEmail: ""});
    
    const clearForm = () => {
      setForm(Object.assign({},form,{nombre:"", apellido:"", telefono: "",email: "", repeatedEmail:""}));
      setFormOpen(false);
    }

  const validForm = () => { 
      return (form.nombre !== "" && form.apellido !== "" && form.telefono !== "" && form.email !== "" && form.repeatedEmail !== "" && form.email === form.repeatedEmail);
  }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [formOpen, setFormOpen] = React.useState(false);

    const handleFormOpen = () => {
      setFormOpen(true);
    };

    const handleFormClose = () => {
      setFormOpen(false);
    };
    
    const addOrder = () => {
        const db = getFirestore();
        const ordersCollection = db.collection("orders");
        const newOrder = {
            buyer: {
                name: form.nombre + " " + form.apellido,
                phone: form.telefono,
                email: form.email
            },
            items: getCartItems(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            status: "generada",
            total: getCartTotal()
        };
        ordersCollection.add(newOrder).then(({id}) => {
            setOrderId(id);
            handleClickOpen();
        }).catch((error) => {
            alert("Error realizando la compra");
        });
    }
    if (cart.length > 0) {
        return (
            <div>
                <h1>Carrito</h1>
                <hr />
                <h3>Productos en el carrito</h3>
                <ul>{getCartGroupedByProduct().map(cartItem => <li key={cartItem.product.id}> Producto:{cartItem.product.name} Cantidad: {cartItem.quantity}  Subtotal: ${cartItem.quantity * cartItem.product.price}  </li>)}</ul>
                <p>Total: ${getCartTotal()}</p>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleFormOpen}>
                    FINALIZAR COMPRA
                </Button> 
                <CartForm form={form} open={formOpen} clearForm={clearForm} onPurchase={addOrder} setForm={setForm}/>
                <SimpleDialog open={open} onClose={handleClose} orderId={orderId}/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Carrito</h1>
                <hr />
                <h3>El carrito esta vacio</h3>  
                <Link variant="button" color="textPrimary" className={classes.link} to="/products">Ver productos</Link>      
            </div>
        )
    }
}

export default Cart
