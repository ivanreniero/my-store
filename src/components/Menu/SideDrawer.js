import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from '@material-ui/core';
import {Link} from "react-router-dom";
import CartIcon from '../CartIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    color: `black`,
  },
})

export default function SideDrawer({ navLinks }) {

  const [state, setState] = useState({ right: false });
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
      <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><Link variant="button" color="textPrimary" className={classes.linkText} to="/" >Inicio</Link></ListItemText>
      </ListItem>
      <ListItem button onClick={handleClick}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='Productos' />{open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText><Link variant="button" color="textPrimary" className={classes.linkText} to="/products/category/pizza" >Pizzas</Link></ListItemText>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText><Link variant="button" color="textPrimary" className={classes.linkText} to="/products/category/hamburguesa" >Hamburguesas</Link></ListItemText>
          </ListItem>
        </List>
      </Collapse>
      <Link variant="button" color="textPrimary" className={classes.linkText} to="/products/category/cat1">Cat 1</Link>
      <Link variant="button" color="textPrimary" className={classes.linkText} to="/products/category/cat2">Cat 2</Link>
      <Link variant="button" color="textPrimary" className={classes.linkText} to="/about">Conocenos</Link>
      <Link variant="button" color="textPrimary" className={classes.linkText} to="/contact">Contactanos</Link>       
      <Link variant="button" color="textPrimary" className={classes.linkText} to="/cart"><CartIcon /></Link>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer("left", true)}
        onClose={toggleDrawer("left", false)}
      >
        {sideDrawerList("left")}
      </Drawer>
    </React.Fragment>
  )
}