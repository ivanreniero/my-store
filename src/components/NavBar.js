import React from "react";
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CartIcon from './CartIcon';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    textAlign: "left"
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className="NavBar">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit"  className={classes.toolbarTitle}>
            Positano
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" className={classes.link} to="/" >Inicio</Link>
            <Link variant="button" color="textPrimary" className={classes.link} to="/products/category/pizza">Pizzas</Link>
            <Link variant="button" color="textPrimary" className={classes.link} to="/products/category/hamburguesa">Hamburguesas</Link>
            <Link variant="button" color="textPrimary" className={classes.link} to="/products/category/guarnicion">Guarniciones</Link>      
            <Link variant="button" color="textPrimary" className={classes.link} to="/cart"><CartIcon /></Link>
          </nav> 
        </Toolbar>
      </AppBar>           
    </div>
  );
}

export default Navbar;