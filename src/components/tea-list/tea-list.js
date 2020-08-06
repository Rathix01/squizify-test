import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Typography,
  List 
} from '@material-ui/core';
import { TeaListItem } from '../tea-list-item/tea-list-item';
import { getAllCurrentTeas } from '../../services/teas';

const useStyles = makeStyles((theme) => ({
  listContainer: {
    marginTop: 15,
  },
  list: {
    width: '100%',
  },
}));

export const TeaList = (props) => {
  const classes = useStyles();
  const [activeTeas, setActiveTeas] = React.useState([]);
  if(activeTeas.length === 0) getAllCurrentTeas(setActiveTeas);

  return (
    <div className={classes.listContainer}>
      <Typography variant="h6" align="center">
        Our Teas
      </Typography>
      <List
        component="nav"
        className={classes.list}>
          {
            activeTeas.map((tea) => {
              return (<TeaListItem tea={tea} key={tea.id} openModal={props.openModal} />);
            })
          }  
      </List>
    </div>
  );
}
