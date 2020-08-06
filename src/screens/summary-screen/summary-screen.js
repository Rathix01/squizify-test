import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography,
  Paper,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const SummaryScreen = (props) => {
  const classes = useStyles();
  
  const getItemCount = (count) => count === undefined ? 1 : count;

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Typography variant="h6" className={classes.orderSummaryTitle}>
          Order summary
        </Typography>
        <Typography className={classes.orderSummaryTitle}>
          Your order has been saved.
        </Typography>
        <List>
          {props.teas.map((product) => (
            <ListItem key={`${product.itemId}-summary`}>
              <Paper className={classes.listItemContainer}>
                <ListItemText primary={product.name} />
                <div className={classes.totalPerProduct}>
                  <Typography className={classes.total}>
                    { `${getItemCount(product.itemCount)}` } x
                  </Typography>
                  <Typography>{ (product.priceWithExtras / 100).toFixed(2) }</Typography>
                </div>
              </Paper>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <Paper className={classes.listItemContainer}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                { `${props.total}` }
              </Typography>
            </Paper>
          </ListItem>
        </List>
      </main>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  listItemContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  total: {
    marginRight: 10,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  totalPerProduct: {
    display: "flex",
  },
  orderSummaryTitle : {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  }
}));
