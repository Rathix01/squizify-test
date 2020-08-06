import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Modal, } from '@material-ui/core';
import { TeaDisplayCard } from '../tea-display-card/tea-display-card';
import { ExtrasList } from '../extras-list/extras-list';

export const AddToOrderModal = (props) => {
  
  const classes = useStyles();
  const [existingTea, setExistingTea] = React.useState(props.tea);

  const updateTea = (tea) => {
    setExistingTea(tea);
  }

  const submitTea = () => {
    const nextTea = existingTea.id === undefined 
      ? { ...props.tea, extras: [], priceWithExtras: props.tea.priceInCents, itemCount: 1, itemCost: props.tea.priceInCents }
      : existingTea;

    props.handleAdd(nextTea);
  }

  return (
    <div>
    <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className={classes.modalPaper}>
          <header className={classes.topBar}>
            <div>Add Tea to order</div>
          </header>
          <div className={classes.teaContent}>
            <TeaDisplayCard tea={props.tea} />
          </div>
          <div>
            <ExtrasList tea={props.tea} updateTea={updateTea} />
          </div>
          <div className={classes.buttons}>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={submitTea}>
              Add
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    
  },
  modalPaper: {
    position: 'absolute',
    width: "95%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    outline: "none",
    borderRadius: theme.brand.radius,
    border: `solid 1px ${theme.brand.main}`
  },
  topBar: {
    backgroundColor: theme.brand.main,
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(2, 2, 2),
    borderTopRightRadius: theme.brand.radius,
    borderTopLeftRadius: theme.brand.radius,
    margin: -1,
  },
  teaContent: {
    margin: 15,
  },
  buttons: {
    display: "flex",
    justifyContent: 'flex-end',
    padding: "5px 15px",
  }
}));