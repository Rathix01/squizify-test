import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { 
  Typography, 
  ListItemIcon,
  IconButton,
  Paper,
} from '@material-ui/core';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import ControlPointIcon from '@material-ui/icons/ControlPoint';


export const TeaListItem = (props) => {
  const classes = useStyles();

  const handleClick = () => {
  	props.openModal(props.tea);
  };

  return (
    <ListItem>
      <Paper className={classes.listItemContainer}>
	      <ListItemIcon className={classes.icon}>
	        <EmojiFoodBeverageIcon />
	      </ListItemIcon>
	      <div className={classes.name}>
		    <Typography> 
		    	{props.tea.name} 
		    </Typography>
		    <Typography className={classes.descriptionText}>
		    	{props.tea.description}
		    </Typography>
	      </div>
	      <div className={classes.price}>
	      	<div>${ (props.tea.priceInCents / 100).toFixed(2) }</div>
	      </div>
	      <div className={classes.inputs} onClick={handleClick}>
	      	<IconButton aria-label="Add to order">
	        	<ControlPointIcon />
	        </IconButton>
	        <Typography 
	            className={classes.addText}
	          >Add to order</Typography>
	      </div>
      </Paper>
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  listItemContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    paddingBottom: 5,
  },
  icon: {
    flex: 0.2,
    display:"flex",
    justifyContent: "center",
    padding: "15px 10px 0px 5px",
  },
  name: {
    flex: 2,
    padding: "10px 0px 0px 0px",
  },
  price: {
    display: "flex",
    alignItems: "center",
  },
  inputs: {
    flex: 0.3,
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 5,
  },
  descriptionText: {
    fontSize: "0.8rem",
    color: theme.brand.main,
  },
  addText: {
    fontSize: "0.5rem",
    color: theme.brand.main,
    transform: "translateY(-6px)", //move text a little closer to the icon.
  }
}));
