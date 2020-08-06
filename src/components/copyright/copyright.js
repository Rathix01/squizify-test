import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  copyRightText: {
    fontSize: 12,
  },
}));

export const Copyright = () => {
  
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyRightText}>
      {'Copyright © Bubble Tea Corp '}
      {new Date().getFullYear()}
    </Typography>
  );
}