import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function CartForm(props) {

    const [disabled, setDisabled] = useState(true);

    const validForm = () => { 
        return (props.form.nombre !== "" && props.form.apellido !== "" && props.form.telefono !== "" && props.form.email !== "" && props.form.repeatedEmail !== "" && props.form.email === props.form.repeatedEmail);
    }

    useEffect(() => {
        setDisabled(!validForm());
    }, [props.form])

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleFormClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Finalizar compra</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Por favor complete los siguientes datos para finalizar su compra
                </DialogContentText>
                <TextField
                    required={true}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nombre"
                    onChange={event => props.setForm(Object.assign({},props.form,{nombre: event.target.value}))}
                    type="text"
                    fullWidth
                />
                <TextField
                    required={true}
                    autoFocus
                    margin="dense"
                    id="surname"
                    label="Apellido"
                    onChange={event => props.setForm(Object.assign({},props.form,{apellido: event.target.value}))}
                    type="text"
                    fullWidth
                />
                <TextField
                    required={true}
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Telefono"
                    onChange={event => props.setForm(Object.assign({},props.form,{telefono: event.target.value}))}
                    type="tel"
                    fullWidth
                />
                <TextField
                    required={true}
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    onChange={event => props.setForm(Object.assign({},props.form,{email: event.target.value}))}
                    type="email"
                    fullWidth
                />
                <TextField
                    required={true}
                    autoFocus
                    margin="dense"
                    id="repeatEmail"
                    label="Repita su email"
                    onChange={event => props.setForm(Object.assign({},props.form,{repeatedEmail: event.target.value}))}
                    error={props.form.email !== props.form.repeatedEmail}
                    helperText={props.form.email !== props.form.repeatedEmail ? 'El email no coincide' : ' '}
                    type="email"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={props.clearForm} color="primary">
                    Cancelar
                </Button>
                <Button onClick={props.onPurchase} color="primary" disabled={disabled}> 
                    Comprar
                </Button>
                </DialogActions>
            </Dialog>         
        </div>
    )
}

export default CartForm
