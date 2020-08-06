import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
 import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

const useStyles = makeStyles((theme) => ({
  teaCard: {
    display: "flex",
    justifyContent: "space-between",
  },
  teaIconCard: {
    
  },
  teaIcon: {
    fontSize: 180,
  },
  teaText: {
    padding: "20px 10px",
  },
  teaName: {
    fontSize: 22,
    textAlign: "center",
  },
  teaDescription: {
    fontSize: 10,  
    color: theme.brand.main,
    textAlign: "center",
  },
  teaPrice: {
    fontSize: 22,
    background: theme.brand.main,
    transform: "translateY(-10px)",
    textAlign: "center",
    color: "#fff",
    borderRadius: theme.brand.radius,
  },
}));

export const TeaDisplayCard = (props) => {
  
  const classes = useStyles();

  return (
    <div  className={classes.teaIconCard}>
      <div className={classes.teaCard}>
        <div>
          <EmojiFoodBeverageIcon className={classes.teaIcon} />
        </div>
        <div className={classes.teaText}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={classes.teaName}>{ props.tea.name }</div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.teaPrice}>${ (props.tea.priceInCents / 100).toFixed(2) }</div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.teaDescription}>{ props.tea.description }</div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}