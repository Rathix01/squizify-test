import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography,
  List,
  Grid,
  Checkbox,
 } from '@material-ui/core';
 import { getAllCurrentExtras } from '../../services/teas';
 import { curry, contains, filter } from 'ramda';

const useStyles = makeStyles((theme) => ({
  extrasCard: {
    
  },
  subtitle: {
    padding: 8,
    background: theme.brand.main,
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  extrasList: {
    minHeight: 230,
  },
  extraName: {
    padding: 11,
    borderBottom: "solid 1px #ccc",
  },
  checkbox: {
    padding: 0,
    borderBottom: "solid 1px #ccc",
    display: "flex",
    justifyContent: "flex-end",
  }
}));

const getPriceString = (cents) => {
  return cents >= 100 ? `$${(cents / 100).toFixed(2)}` : `$0.${cents}`;
}

export const ExtrasList = (props) => {
  
  const classes = useStyles();
  const [activeExtras, setActiveExtras] = React.useState([]);
  const [selectedExtras, setSelectedExtras] = React.useState([]);
  const [price, setPrice] = React.useState(props.tea.priceInCents);

  if(activeExtras.length === 0) getAllCurrentExtras(setActiveExtras);

  const handleChange = curry((extra, event) => {
    const nextPrice = event.target.checked 
      ? price + extra.priceInCents 
      : price - extra.priceInCents;

    const extras = !contains(extra.name, selectedExtras)
      ? selectedExtras.concat({ name: extra.name, price: extra.priceInCents })
      : filter((e) => e.name !== extra.name, selectedExtras);

    setPrice(nextPrice);
    setSelectedExtras(extras);
    props.updateTea({ ...props.tea, priceWithExtras: nextPrice, extras });
  });

  return (
    <div className={classes.extrasCard}>
      <Typography className={classes.subtitle}>Extras</Typography>
      <div className={classes.extrasList}>
        <List
          component="nav"
          className={classes.root}> 
            {
              activeExtras.map((extra) => {
                return (<Grid container key={extra.id}>
                  <Grid item xs={9}>
                    <div className={classes.extraName}>{extra.name}</div>
                  </Grid>
                  <Grid item xs={2}>
                    <div className={classes.extraName}>{getPriceString(extra.priceInCents)}</div>
                  </Grid>
                  <Grid item xs={1}>
                    <div className={classes.checkbox}>
                      <Checkbox
                        onChange={handleChange(extra)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </div>
                  </Grid>
                </Grid>);
              })
            }  
          </List>
        </div>
        <div className={classes.subtitle}>
          <Typography>
            Total 
          </Typography>
          <Typography>
            {getPriceString(price)}
          </Typography>
        </div>
    </div>
  );
}
