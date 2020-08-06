import React from 'react'
import { saveTeaOrder } from '../../services/teas';
import { Header } from '../../components/header/header';
import { TeaListScreen } from '../tea-list-screen/tea-list-screen';
import { CheckoutScreen } from '../checkout-screen/checkout-screen';
import { SummaryScreen } from '../summary-screen/summary-screen';

export const Home = () => {

  const [page, setPage] = React.useState("home");
  const [teas, setTeas] = React.useState([]);
  const [teasToSave, setTeasToSave] = React.useState({});

  const getPage = () => {
    return {
      home: <TeaListScreen handleAdd={handleAdd} teas={teas} />,
      cart: <CheckoutScreen teas={teas} handleProcess={saveOrder} />,
      summary: <SummaryScreen teas={teasToSave.teas} total={teasToSave.total} />
    }[page];
  }

  const handleAdd = (teaWithExtras) => {
    console.log(teaWithExtras);
    setTeas(teaWithExtras);
  }

  const confirmSave = () => {
    setPage("summary");
  }

  const saveOrder = (teasToSave) => {
    setTeasToSave(teasToSave)
    setTeas([]);
    saveTeaOrder(teasToSave, confirmSave);
  }

  return (
    <React.Fragment>
      <Header teas={teas} setPage={setPage} />
      { getPage() }
    </React.Fragment>
  );
};

