import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
  },
}));

function ItemCount(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.controls}>
          <IconButton aria-label="remove" onClick={props.discount}>
              <RemoveIcon />
          </IconButton>
          <Input readOnly={true} value={props.counter}/>
          <IconButton aria-label="add" onClick={props.add}>
              <AddIcon />
          </IconButton> 
        </div>         
      </div>
  )
}

export default ItemCount;