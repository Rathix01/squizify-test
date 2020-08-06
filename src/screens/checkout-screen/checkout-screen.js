import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { OrderList } from '../../components/order-list/order-list';

export const CheckoutScreen = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <OrderList teas={props.teas} handleProcess={props.handleProcess} />
      </main>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));