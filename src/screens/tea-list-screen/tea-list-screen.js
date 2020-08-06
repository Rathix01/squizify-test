import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TeaList } from '../../components/tea-list/tea-list';
import { Copyright } from '../../components/copyright/copyright';
import { AddToOrderModal } from '../../components/add-to-order-modal/add-to-order-modal';

export const TeaListScreen = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedTea, setSelectedTea] = React.useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (tea) => {
    setSelectedTea(tea);
    setOpen(true)
  }

  const handleAdd = (teaWithExtras) => {
    const nextTeas = props.teas.concat({ ...teaWithExtras, itemId: teaWithExtras.id + new Date().getTime() });
    setOpen(false);
    props.handleAdd(nextTeas);
  }

  return (
      <main className={classes.layout}>
        <TeaList openModal={handleOpen} />
        <AddToOrderModal 
          open={open} 
          tea={selectedTea} 
          handleClose={handleClose} 
          handleAdd={handleAdd} 
        />
        <Copyright />
      </main>
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
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));