import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    borderRadius: 15,
    height: 150,
    width: 150,
    marginTop: 20
  },
  controls: {
   paddingBottom: 20
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
            className={classes.cover}
            image={require('../../img/no-image.png')}
            title="Live from space album cover"
      />     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">       
            {props.productName}           
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">   
            <p>{props.productDescription}</p>                 
          </Typography>
          <Typography component="h6" variant="h6"> 
            {'$' + props.productPrice}     
          </Typography>         
        </CardContent>       
        <div className={classes.controls}>    
          <NavLink to={`/products/${props.productId}`}>                     
            <Button variant="contained" color="primary">
              View Details
            </Button>                 
          </NavLink>
        </div>
      </div>
    </Card>
  );
}