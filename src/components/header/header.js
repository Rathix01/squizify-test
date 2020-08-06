import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { curry } from 'ramda';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography } from '@material-ui/core';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Header = (props) => {
  const classes = useStyles();

  const navTo = curry((key, event) => {
    props.setPage(key);
  });

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className={classes.topBar}>
          <Typography variant="h6">
            Bubble Tea
          </Typography>
          <div>
          <IconButton aria-label="home" onClick={navTo("home")}>
            <EmojiFoodBeverageIcon />
          </IconButton>
          <IconButton aria-label="navigation" onClick={navTo("cart")} className={classes.cartButton}>
            <div className={classes.teaCount}>{ props.teas.length }</div>
            <ShoppingCartIcon />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  topBar: {
    backgroundColor: theme.brand.main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartButton: {
    position: "relative",
  },
  teaCount: {
    fontSize: 10,
    position: "absolute",
    bottom: 8,
    right: 4,
    backgroundColor: "red",
    color: "#fff",
    height: 15,
    width: 15,
    borderRadius: "50%",
    padding: 2,
  }
}));
