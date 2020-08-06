import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography, 
  List,
  Button } from '@material-ui/core';
import { OrderListItem } from '../order-list-item/order-list-item';
import { reduce } from 'ramda';

export const OrderList = (props) => {
  
  const classes = useStyles();
  const [activeTeas] = React.useState(props.teas);
  const [teasWithCounts, setTeasWithCounts] = React.useState(props.teas);

  const handleUpdateTeasWithItemCounts = (teaWithCountUpdate) => {
    const updatedTeas = teasWithCounts.map((tea) => {
      return tea.itemId === teaWithCountUpdate.itemId
        ? { ...teaWithCountUpdate, itemCost: teaWithCountUpdate.itemCount * teaWithCountUpdate.priceWithExtras }
        : tea;
    });

    setTeasWithCounts(updatedTeas);
  };

  const calculateTotal = () => {
    const total = reduce((total, nextTea) => {
      return total + (nextTea.itemCost === undefined ? nextTea.priceWithExtras : nextTea.itemCost);
    }, 0, teasWithCounts);
    return `$${(total / 100).toFixed(2)}`;
  };

  const processOrder = () => {
    props.handleProcess({ teas: teasWithCounts, total: calculateTotal() });
  }

  return (
    <div className={classes.listContainer}>
      <div className={classes.listHeader}>
        <Typography variant="h6" align="center">
          Checkout
        </Typography>
        <div className={classes.total}>
          <div className={classes.totalText}>
            <div className={classes.totalValue}>{ calculateTotal() }</div>
            <div>Total</div>
          </div>
        </div>
      </div>
      <List
        component="nav"
        className={classes.list}>
          {
            activeTeas.map((tea, index) => {
              return (<OrderListItem tea={tea} key={`${tea.id}-order-${index}`} updateTeaCount={handleUpdateTeasWithItemCounts} />);
            })
          }  
      </List>
      <div className={classes.buttons}>
        <Button onClick={processOrder} color="primary">
          Process Order
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  listContainer: {
    marginTop: 15,
  },
  list: {
    width: '100%',
  },
  listHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: theme.spacing(2),
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: theme.spacing(2),
    width: 100,
    fontSize: 12,
    color: "#fff",
  },
  buttons: {
    display: "flex",
    justifyContent: 'flex-end',
    padding: "5px 15px",
  },
  totalText: {
    background: theme.brand.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.brand.radius,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  totalValue: {
    fontSize: 18,
  }
}));
