import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectMost } from "../../store/most-sort-slice";
import {
  addTransferType,
  removeTransferType,
  checkAll,
  uncheckAll,
} from "../../store/transfers-slice";
import TransferOptions from "../transfer-options";
import MostOptions from "../most-options";
import TicketList from "../ticket-list";
import ShowMoreButton from "../show-more-button";
import "./app.scss";
import logo from "../../img/Logo.png";

const App = () => {
  const dispatch = useDispatch();

  const most = useSelector((state) => state.most.most);
  const selectOption = (most) => dispatch(selectMost({ most }));

  const transferOptionsSelected = useSelector(
    (state) => state.transfer.transfer,
  );
  const addTransferOptions = (transfer) =>
    dispatch(addTransferType({ transfer }));

  const removeTransferOptions = (transfer) =>
    dispatch(removeTransferType({ transfer }));

  const checkAllOption = (transfer) => {
    dispatch(checkAll({ transfer }));
  };

  const uncheckAllOptions = () => {
    dispatch(uncheckAll());
  };

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="логотип Авиасейлс" />
      </header>
      <div className="content">
        <TransferOptions
          transferOptionsSelected={transferOptionsSelected}
          addTransferOptions={addTransferOptions}
          removeTransferOptions={removeTransferOptions}
          checkAll={checkAllOption}
          uncheckAll={uncheckAllOptions}
        />
        <main>
          <MostOptions selectedOption={most} selectOption={selectOption} />
          <TicketList />
          <ShowMoreButton />
        </main>
      </div>
    </>
  );
};

export default App;
