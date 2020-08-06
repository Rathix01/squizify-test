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
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

export const OrderListItem = (props) => {
  const classes = useStyles();

  const [itemCount, setItemCount] = React.useState(1);

  const handleIncreaseClick = () => {
  	setItemCount(itemCount + 1);
    updateCheckout(itemCount + 1);
  };

  const handleDecreaseClick = () => {
    const nextCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(nextCount);
    updateCheckout(nextCount);
  };

  const updateCheckout = (itemCount) => {
    props.updateTeaCount({ ...props.tea, itemCount  });
  }

  return (
    <ListItem>
      <Paper className={classes.listItemContainer}>
	      <div className={classes.listItemInnerContainer}>
          <ListItemIcon className={classes.icon}>
  	        <EmojiFoodBeverageIcon />
  	      </ListItemIcon>
  	      <div className={classes.name}>
    		    <Typography> 
    		    	{props.tea.name} 
    		    </Typography>
  	      </div>
  	      <div className={classes.price}>
  	      	<div>${ ((props.tea.priceWithExtras / 100) * itemCount).toFixed(2) }</div>
  	      </div>
          <div className={classes.inputs} onClick={handleDecreaseClick}>
            <IconButton aria-label="decrease amount">
              <RemoveCircleOutlineIcon />
            </IconButton>
          </div>
          <div className={classes.inputs}>
            { itemCount }
          </div>
          <div className={classes.inputs} onClick={handleIncreaseClick}>
            <IconButton aria-label="Add to order">
              <ControlPointIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.fullWidth}>
          <Typography className={classes.extrasText}>
            Extras: 
          </Typography>
          <Typography className={classes.descriptionText}>
            { 
              props.tea.extras.length !== 0
                ? props.tea.extras.map((extra) => extra.name).join(", ")
                : "No Extras"
            }
          </Typography>
        </div>
      </Paper>
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  listItemContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    paddingBottom: 5,
  },
  listItemInnerContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
  icon: {
    flex: 0.2,
    display:"flex",
    justifyContent: "center",
    padding: "12px 10px 0px 5px",
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
  },
  fullWidth: {
    width: "100%",
    paddingLeft: 15,
    display: "flex",
  },
  extrasText: {
    paddingRight: 10,
    fontSize: theme.fontSizes.medium,
  }
}));